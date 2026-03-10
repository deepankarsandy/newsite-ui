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
  const { JELLYFIN_BASE_URL, JELLYFIN_API_KEY, JELLYFIN_USER_ID } = import.meta.env;

  if (!JELLYFIN_BASE_URL || !JELLYFIN_API_KEY || !JELLYFIN_USER_ID) {
    throw new Error(
      "Missing Jellyfin configuration. Set JELLYFIN_BASE_URL, JELLYFIN_API_KEY, and JELLYFIN_USER_ID.",
    );
  }

  return {
    baseUrl: JELLYFIN_BASE_URL,
    token: JELLYFIN_API_KEY,
    userId: JELLYFIN_USER_ID,
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
