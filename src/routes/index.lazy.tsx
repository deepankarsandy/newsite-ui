import { createLazyFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/page-parts/index/home-page";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return <HomePage />;
}
