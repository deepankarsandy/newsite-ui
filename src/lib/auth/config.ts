const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const getApiBaseUrl = () => {
  const { VITE_API_BASE_URL } = import.meta.env;

  if (!VITE_API_BASE_URL) {
    throw new Error("Missing API configuration. Set VITE_API_BASE_URL.");
  }

  return trimTrailingSlash(VITE_API_BASE_URL);
};
