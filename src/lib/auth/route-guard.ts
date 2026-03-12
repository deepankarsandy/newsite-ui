import { redirect } from "@tanstack/react-router";
import { toast } from "sonner";
import { getAuthToken } from "@/lib/auth/token-store";

type GuardArgs = {
  cause: "enter" | "stay" | "preload";
};

export const requireAuth = ({ cause }: GuardArgs) => {
  if (getAuthToken()) {
    return;
  }

  if (cause === "preload") {
    return;
  }

  toast.error("Please login to continue.");
  throw redirect({ to: "/login" });
};
