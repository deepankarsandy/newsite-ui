import { useQuery } from "@tanstack/react-query";
import { authenticatedApiClient } from "@/lib/api/authenticated-api-client";

export type AuthenticatedUser = {
  email: string;
  id: string;
  image?: string | null;
  name: string;
};

export const currentUserQueryKey = ["current-user"] as const;

export const getCurrentUser = () => {
  return authenticatedApiClient<AuthenticatedUser>("/api/v1/user");
};

export const useCurrentUserQuery = (enabled: boolean) =>
  useQuery({
    enabled,
    queryFn: getCurrentUser,
    queryKey: currentUserQueryKey,
  });
