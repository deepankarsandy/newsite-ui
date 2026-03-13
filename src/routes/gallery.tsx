import { createFileRoute } from "@tanstack/react-router";
import { requireAuth } from "@/lib/auth/route-guard";

export const Route = createFileRoute("/gallery")({
  beforeLoad: ({ cause, location }) => requireAuth({ cause, location }),
});
