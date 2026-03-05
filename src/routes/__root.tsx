import { Main } from "@/components/layout/main";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<Main>
			<Outlet />
			<TanStackRouterDevtools />
		</Main>
	),
});
