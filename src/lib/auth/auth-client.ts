import { createAuthClient } from "better-auth/react";
import { getApiBaseUrl } from "@/lib/auth/config";
import { getAuthToken, setAuthToken } from "@/lib/auth/token-store";

export const authClient = createAuthClient({
  baseURL: getApiBaseUrl(),
  fetchOptions: {
    auth: {
      type: "Bearer",
      token: getAuthToken(),
    },
    onSuccess(context) {
      const token = context.response.headers.get("set-auth-token");
      if (token) {
        setAuthToken(token);
      }
    },
  },
});
