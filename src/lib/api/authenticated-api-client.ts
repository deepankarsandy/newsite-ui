import { createHttpClient } from "@/lib/api/http-client";
import { getApiBaseUrl } from "@/lib/auth/config";
import { getAuthToken } from "@/lib/auth/token-store";

export const authenticatedApiClient = createHttpClient({
  baseUrl: getApiBaseUrl(),
  defaultHeaders: {
    "Content-Type": "application/json",
  },
  resolveHeaders: () => {
    const token = getAuthToken();
    if (!token) {
      return undefined;
    }

    return {
      Authorization: `Bearer ${token}`,
    };
  },
});
