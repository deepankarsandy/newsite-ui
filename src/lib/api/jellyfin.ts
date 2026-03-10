import { createHttpClient } from "@/lib/api/http-client";
import type {
  JellyfinItemType,
  JellyfinItemsResponse,
  JellyfinLibraryItem,
} from "@/lib/api/jellyfin-types";

const JELLYFIN_LIST_FIELDS = "Tags,ProductionYear,ImageTags";

type JellyfinConfig = {
  baseUrl: string;
  token: string;
  userId: string;
};

const getJellyfinConfig = (): JellyfinConfig => {
  const { VITE_JELLYFIN_BASE_URL, VITE_JELLYFIN_API_KEY, VITE_JELLYFIN_USER_ID } = import.meta.env;

  if (!VITE_JELLYFIN_BASE_URL || !VITE_JELLYFIN_API_KEY || !VITE_JELLYFIN_USER_ID) {
    throw new Error(
      "Missing Jellyfin configuration. Set VITE_JELLYFIN_BASE_URL, VITE_JELLYFIN_API_KEY, and VITE_JELLYFIN_USER_ID.",
    );
  }

  return {
    baseUrl: VITE_JELLYFIN_BASE_URL,
    token: VITE_JELLYFIN_API_KEY,
    userId: VITE_JELLYFIN_USER_ID,
  };
};

const createJellyfinApi = () => {
  const getLibraryItems = async (
    itemType: JellyfinItemType,
    signal?: AbortSignal,
  ): Promise<JellyfinLibraryItem[]> => {
    const { baseUrl, token, userId } = getJellyfinConfig();
    const request = createHttpClient({
      baseUrl,
      defaultHeaders: {
        "Content-Type": "application/json",
        "X-Emby-Token": token,
      },
    });

    const response = await request<JellyfinItemsResponse>(`/Users/${userId}/Items`, {
      query: {
        Fields: JELLYFIN_LIST_FIELDS,
        IncludeItemTypes: itemType,
        Recursive: true,
      },
      signal,
    });

    return response.Items;
  };

  return {
    getMovies: (signal?: AbortSignal) => getLibraryItems("Movie", signal),
    getSeries: (signal?: AbortSignal) => getLibraryItems("Series", signal),
  };
};

export const jellyfinApi = createJellyfinApi();
