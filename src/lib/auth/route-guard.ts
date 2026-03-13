import { ParsedLocation, redirect } from "@tanstack/react-router";
import { toast } from "sonner";
import { getAuthToken } from "@/lib/auth/token-store";

type GuardArgs = {
  cause: "enter" | "stay" | "preload";
  location: ParsedLocation;
};

export const requireAuth = ({ cause, location }: GuardArgs) => {
  if (getAuthToken()) {
    return;
  }

  if (cause === "preload") {
    return;
  }

  toast.error("Please login to continue.");
  throw redirect({
    to: "/login",
    search: {
      returnPath: location.pathname,
    },
  });
};
