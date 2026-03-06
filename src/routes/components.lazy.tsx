import { ComponentsShowcase } from "@/page-parts/components/components-showcase";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/components")({
  component: ComponentsRoute,
});

function ComponentsRoute() {
  return <ComponentsShowcase />;
}
