import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/gallery")({
  component: Media,
});

function Media() {
  return <div className="p-2">Coming Soon...</div>;
}
