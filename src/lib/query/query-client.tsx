import { QueryClient } from "@tanstack/react-query";
import {
  PersistQueryClientProvider,
  type PersistQueryClientProviderProps,
} from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import type { PropsWithChildren } from "react";

const ONE_HOUR = 1000 * 60 * 60;
const ONE_DAY = ONE_HOUR * 24;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: ONE_DAY,
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: ONE_HOUR,
    },
  },
});

const asyncStoragePersister = createAsyncStoragePersister({
  key: "newsite-ui-react-query-cache",
  storage: typeof window === "undefined" ? undefined : window.localStorage,
  throttleTime: 1000,
});

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const persistOptions: PersistQueryClientProviderProps["persistOptions"] = {
    persister: asyncStoragePersister,
    maxAge: ONE_DAY,
  };

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
      {children}
    </PersistQueryClientProvider>
  );
};
