import { useQuery } from "@tanstack/react-query";
import { authenticatedApiClient } from "@/lib/api/authenticated-api-client";

type TThumbnail = {
  url: string;
  width: number;
  height: number;
};

type TThumbnails = {
  default: TThumbnail;
  medium: TThumbnail;
  high: TThumbnail;
  standard?: TThumbnail;
  maxres?: TThumbnail;
};

export type TYouTubePlaylist = {
  kind: string;
  etag: string;
  id: string;
  hidden?: boolean;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: TThumbnails;
    channelTitle: string;
    localized: {
      title: string;
      description: string;
    };
  };
  status: {
    privacyStatus: "public" | "private" | "unlisted";
  };
  contentDetails: {
    itemCount: number;
  };
};

export type TYouTubePlaylistItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: TThumbnails;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
  };
  contentDetails: {
    videoId: string;
    videoPublishedAt: string;
  };
  status: {
    privacyStatus: "public" | "private" | "unlisted";
  };
};

export const youtubeMusicPlaylistsQueryKey = ["youtube-music-playlists"] as const;
export const youtubeMusicPlaylistItemsQueryKey = ["youtube-music-playlist-items"] as const;

export const getYoutubeMusicPlaylistItems = async (playlistId: string) => {
  const res = await authenticatedApiClient<TYouTubePlaylistItem[]>(`/api/v1/youtube/playlists/${playlistId}/items`);
  return res.data;
};
export const getYoutubeMusicPlaylists = async () => {
  const res = await authenticatedApiClient<TYouTubePlaylist[]>("/api/v1/youtube/playlists");
  return res.data;
};

export const useYoutubeMusicPlaylistsQuery = (enabled: boolean) =>
  useQuery({
    enabled,
    queryFn: getYoutubeMusicPlaylists,
    queryKey: youtubeMusicPlaylistsQueryKey,
  });

export const useYoutubeMusicPlaylistItemsQuery = ({ enabled, playlistId }: { enabled: boolean; playlistId: string }) =>
  useQuery({
    enabled,
    queryFn: () => getYoutubeMusicPlaylistItems(playlistId),
    queryKey: [...youtubeMusicPlaylistItemsQueryKey, playlistId],
  });
