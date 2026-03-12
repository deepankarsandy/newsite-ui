import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "sonner";
import { Main } from "@/components/layout/main";

export const Route = createRootRoute({
  component: () => (
    <Main>
      <Outlet />
      <Toaster position="bottom-right" richColors={true} />
      <TanStackRouterDevtools />
    </Main>
  ),
});
