import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth/auth-client";
import { clearAuthToken, getAuthToken, useAuthToken } from "@/lib/auth/token-store";

const MIN_PASSWORD_LENGTH = 8;

type AuthMode = "login" | "signup";

const getDisplayNameFromEmail = (email: string) => {
  const [name] = email.split("@");
  return name || email;
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const authToken = useAuthToken();
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null | undefined>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const isSignUpMode = mode === "signup";

  const clearMessages = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const onToggleMode = () => {
    clearMessages();
    setPassword("");
    setConfirmPassword("");
    setMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  };

  const validatePassword = () => {
    if (password.length < MIN_PASSWORD_LENGTH) {
      setErrorMessage(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`);
      return false;
    }

    if (isSignUpMode && password !== confirmPassword) {
      setErrorMessage("Password and confirm password must match.");
      return false;
    }

    return true;
  };

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearMessages();

    if (!validatePassword()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (isSignUpMode) {
        const { error } = await authClient.signUp.email({
          email,
          password,
          name: getDisplayNameFromEmail(email),
        });

        if (error) {
          setErrorMessage(error.message);
          return;
        }

        clearAuthToken();

        setMode("login");
        setPassword("");
        setConfirmPassword("");
        setSuccessMessage("Account created. Please log in with your credentials.");
        return;
      }

      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (!getAuthToken()) {
        setErrorMessage("Login succeeded, but no token was returned by the auth server.");
        return;
      }
      await navigate({ to: "/" });
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!authToken) {
      return;
    }

    void navigate({ to: "/" });
  }, [authToken, navigate]);

  return (
    <section className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-md items-center px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{isSignUpMode ? "Create account" : "Login"}</CardTitle>
          <CardDescription>
            {isSignUpMode
              ? "Sign up with email and password to continue."
              : "Login with your email and password."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
                required={true}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                autoComplete={isSignUpMode ? "new-password" : "current-password"}
                minLength={MIN_PASSWORD_LENGTH}
                onChange={(event) => setPassword(event.target.value)}
                required={true}
              />
            </div>

            {isSignUpMode ? (
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  autoComplete="new-password"
                  minLength={MIN_PASSWORD_LENGTH}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required={true}
                />
              </div>
            ) : null}

            {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : null}
            {successMessage ? <p className="text-sm text-green-600">{successMessage}</p> : null}

            <div className="space-y-2 pt-2">
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSignUpMode ? "Sign up" : "Login"}
              </Button>
              <Button
                className="w-full"
                type="button"
                variant="outline"
                disabled={isSubmitting}
                onClick={onToggleMode}
              >
                {isSignUpMode ? "Back to login" : "Sign up"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
