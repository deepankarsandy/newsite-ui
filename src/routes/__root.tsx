import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Main } from "@/components/layout/main";
import React from "react";
const { VITE_APP_ENV } = import.meta.env;

const TanStackRouterDevtools =
  VITE_APP_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: () => (
    <Main>
      <Outlet />
      <Toaster position="bottom-right" richColors={true} />
      {/* <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} /> */}
    </Main>
  ),
});
