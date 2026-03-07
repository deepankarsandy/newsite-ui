import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Main } from "@/components/layout/main";

export const Route = createRootRoute({
	component: () => (
		<Main>
			<Outlet />
			<TanStackRouterDevtools />
		</Main>
	),
});
