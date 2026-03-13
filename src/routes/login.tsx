import { createFileRoute } from "@tanstack/react-router";

type TLoginQuery = {
  returnPath?: string;
};

export const Route = createFileRoute("/login")({
  validateSearch: (search): TLoginQuery => {
    return {
      returnPath: (search.returnPath as string) || undefined,
    };
  },
});
