import { useSyncExternalStore } from "react";

const AUTH_TOKEN_STORAGE_KEY = "bearer_token";

const listeners = new Set<() => void>();

const readTokenFromStorage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
};

let authToken: string | null = readTokenFromStorage();

const notifyListeners = () => {
  for (const listener of listeners) {
    listener();
  }
};

const persistAuthToken = (token: string | null) => {
  if (typeof window === "undefined") {
    return;
  }

  if (token) {
    window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
    return;
  }

  window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
};

export const getAuthToken = () => authToken || undefined;

export const setAuthToken = (token: string) => {
  authToken = token;
  persistAuthToken(token);
  notifyListeners();
};

export const clearAuthToken = () => {
  authToken = null;
  persistAuthToken(null);
  notifyListeners();
};

export const useAuthToken = () =>
  useSyncExternalStore(
    (listener) => {
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
      };
    },
    getAuthToken,
    () => null,
  );
