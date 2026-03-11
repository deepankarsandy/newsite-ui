import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/page-parts/auth/login-page";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  return <LoginPage />;
}
