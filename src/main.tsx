import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import "@/lib/i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createRouter, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { AuthProvider } from "./lib/auth/auth-provider";
import { ReactQueryProvider } from "./lib/query/query-client";
import { routeTree } from "./routeTree.gen";

// const { VITE_APP_ENV } = import.meta.env;

// Create a new router instance
const router = createRouter({
  routeTree,
  // basepath: VITE_APP_ENV === "development" ? "/" : "/site/",
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ReactQueryProvider>
      <AuthProvider>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </ReactQueryProvider>
  </StrictMode>,
);
