import { createHttpClient, RequestConfig } from "@/lib/api/http-client";
import { getApiBaseUrl } from "@/lib/auth/config";
import { getAuthToken } from "@/lib/auth/token-store";

export interface ApiResponse<T = unknown> {
  data: T;
  metadata?: Record<string, unknown>;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

const client = createHttpClient({
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

export const authenticatedApiClient = <T>(path: string, config?: RequestConfig) => {
  return client<ApiResponse<T>>(path, config);
};
