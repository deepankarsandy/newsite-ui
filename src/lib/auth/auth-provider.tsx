import { useQueryClient } from "@tanstack/react-query";
import { createContext, type PropsWithChildren, useContext, useEffect, useState } from "react";
import { ApiError } from "@/lib/api/http-client";
import {
  type AuthenticatedUser,
  currentUserQueryKey,
  useCurrentUserQuery,
} from "@/lib/api/user.api";
import { authClient } from "@/lib/auth/auth-client";
import { clearAuthToken, useAuthToken } from "@/lib/auth/token-store";

type AuthStatus = "authenticated" | "loading" | "unauthenticated";

type AuthContextValue = {
  authStatus: AuthStatus;
  isAuthenticated: boolean;
  isLoggingOut: boolean;
  logout: () => Promise<void>;
  user: AuthenticatedUser | null;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient();
  const token = useAuthToken();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const userQuery = useCurrentUserQuery(Boolean(token));

  useEffect(() => {
    if (!(userQuery.error instanceof ApiError)) {
      return;
    }

    if (userQuery.error.response.status !== 401) {
      return;
    }

    clearAuthToken();
    queryClient.removeQueries({ queryKey: currentUserQueryKey });
  }, [queryClient, userQuery.error]);

  const logout = async () => {
    setIsLoggingOut(true);

    try {
      await authClient.signOut();
    } finally {
      clearAuthToken();
      queryClient.removeQueries({ queryKey: currentUserQueryKey });
      setIsLoggingOut(false);
    }
  };

  const authStatus: AuthStatus = token
    ? userQuery.isPending
      ? "loading"
      : userQuery.data
        ? "authenticated"
        : "unauthenticated"
    : "unauthenticated";

  const value: AuthContextValue = {
    authStatus,
    isAuthenticated: authStatus === "authenticated",
    isLoggingOut,
    logout,
    user: userQuery.data ?? null,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
};
