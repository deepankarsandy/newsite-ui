import { createLazyFileRoute } from "@tanstack/react-router";
import { ComponentsShowcase } from "@/page-parts/components/components-showcase";

export const Route = createLazyFileRoute("/components")({
	component: ComponentsRoute,
});

function ComponentsRoute() {
	return <ComponentsShowcase />;
}
