import { HomePage } from "@/page-parts/index/home-page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <HomePage />;
}
