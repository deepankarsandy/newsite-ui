import { createFileRoute } from "@tanstack/react-router";
import { requireAuth } from "@/lib/auth/route-guard";

export const Route = createFileRoute("/music")({
  beforeLoad: ({ cause, location }) => requireAuth({ cause, location }),
});
