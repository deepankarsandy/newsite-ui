import { YOUTUBE_PROFILE } from "@assets";
import { createLazyFileRoute } from "@tanstack/react-router";
import { ChevronDown, Disc3, ListMusic, Loader2 } from "lucide-react";
import { useState } from "react";
import { YouTubeLogo } from "@/icons/youtube-icon";
import { YTMusicLogo } from "@/icons/yt-music-icon";
import {
  TYouTubePlaylist,
  useYoutubeMusicPlaylistItemsQuery,
  useYoutubeMusicPlaylistsQuery,
} from "@/lib/api/youtube.api";
import { cn } from "@/lib/utils";

export const Route = createLazyFileRoute("/music")({
  component: Music,
});

function Music() {
  const {
    data: playlists,
    isLoading: isLoadingPlaylist,
    isError: isErrorPlaylist,
  } = useYoutubeMusicPlaylistsQuery(true);

  if (isLoadingPlaylist) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <Loader2 className="h-10 w-10 animate-spin" />
      </div>
    );
  }

  if (isErrorPlaylist) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-3 transition-colors hover:bg-white/5 sm:px-5">
        <div className="flex flex-col items-center">
          <SongThumbnail
            title={YOUTUBE_PROFILE.name}
            thumbnail={YOUTUBE_PROFILE.music.thumbnail}
            className="h-24 w-24"
          />
          <span>{YOUTUBE_PROFILE.name}</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            target="_blank"
            rel="noreferrer"
            href={YOUTUBE_PROFILE.music.url}
            className="flex items-center gap-2 py-3 transition-colors hover:bg-white/5 sm:px-5"
          >
            <YTMusicLogo className="h-5 w-5" />
            <span>Visit YT Music</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={YOUTUBE_PROFILE.url}
            className="flex items-center gap-2 py-3 transition-colors hover:bg-white/5 sm:px-5"
          >
            <YouTubeLogo className="h-5 w-5" />
            <span>Visit YouTube</span>
          </a>
        </div>
      </div>
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="space-y-4">
          {playlists?.map((pl, idx) => {
            return <Playlist key={pl.id} pl={pl} defaultExpanded={idx === 0} />;
          })}
        </div>
      </section>
    </main>
  );
}

function Playlist({ pl, defaultExpanded }: { pl: TYouTubePlaylist; defaultExpanded?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const {
    data: playlistItems,
    isLoading: isLoadingPlaylistItems,
    isError: isErrorPlaylistItems,
  } = useYoutubeMusicPlaylistItemsQuery({
    playlistId: pl.id,
    enabled: Boolean(isExpanded),
  });

  const togglePlaylist = () => {
    setIsExpanded((p) => !p);
  };
  const panelId = `playlist-panel-${pl.id}`;
  return (
    <article
      key={pl.id}
      className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/70"
    >
      <header className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <button
          type="button"
          onClick={togglePlaylist}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
          aria-expanded={isExpanded}
          aria-controls={panelId}
        >
          <ListMusic className="h-5 w-5 shrink-0 text-zinc-300" />
          <span className="truncate text-lg font-medium text-zinc-100 sm:text-xl">
            {pl.snippet.title}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
        <a
          href={`https://music.youtube.com/playlist?list=${pl.id}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-md border px-2 py-1 text-sm hover:bg-blue-500/20"
        >
          View Playlist
          <YTMusicLogo className="h-6 w-6" />
        </a>
      </header>

      {isExpanded ? (
        <div id={panelId} className="border-t border-white/10">
          {isLoadingPlaylistItems ? (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : isErrorPlaylistItems ? (
            <div className="flex items-center justify-center p-4">
              <p>Something went wrong</p>
            </div>
          ) : (
            <ul className="divide-y divide-white/10">
              {playlistItems?.map((song) => (
                <li key={song.id}>
                  <a
                    href={`https://music.youtube.com/watch?v=${song.contentDetails.videoId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-white/5 sm:px-5"
                  >
                    <SongThumbnail
                      title={song.snippet.title}
                      thumbnail={song.snippet.thumbnails.default?.url ?? ""}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-zinc-100 sm:text-base">
                        {song.snippet.title}
                      </p>
                      <p className="truncate text-xs text-zinc-400 sm:text-sm">
                        {song.snippet.videoOwnerChannelTitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <YTMusicLogo className="h-5 w-5" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </article>
  );
}

function SongThumbnail({
  title,
  thumbnail,
  className,
}: {
  title: string;
  thumbnail: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!thumbnail || failed) {
    return (
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border border-white/15 bg-zinc-800">
        <Disc3 className="h-6 w-6 text-zinc-400" />
      </div>
    );
  }

  return (
    <img
      src={thumbnail}
      alt={`thumbnail for ${title}`}
      className={cn("h-16 w-16 shrink-0 rounded-md border border-white/15 object-cover", className)}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
