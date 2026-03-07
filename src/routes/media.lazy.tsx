import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/media")({
  component: Media,
});

function Media() {
  return <div className="p-2">TODO: Media</div>;
}
