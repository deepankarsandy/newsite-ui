import { createLazyFileRoute } from "@tanstack/react-router";
import { ChevronDown, Disc3, ListMusic } from "lucide-react";
import { useState } from "react";
import pl1 from "@/../../youtube-data/music-playlist-90-2010s-music.json";
import pl2 from "@/../../youtube-data/music-playlist-bollywood-old.json";
import pl3 from "@/../../youtube-data/music-playlist-classic-rocks.json";
import pl4 from "@/../../youtube-data/music-playlist-slow-favs.json";
import { YTMusicLogo } from "@/icons/yt-music-icon";

export const Route = createLazyFileRoute("/music")({
  component: Music,
});

function Music() {
  const allPlaylists = [pl2, pl3, pl4, pl1];
  const [expandedByPlaylist, setExpandedByPlaylist] = useState<Record<string, boolean>>({});

  const togglePlaylist = (playlistId: string) => {
    setExpandedByPlaylist((prev) => ({
      ...prev,
      [playlistId]: !prev[playlistId],
    }));
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="space-y-4">
          {allPlaylists.map((pl, idx) => {
            const playlistId = pl.url || pl.name;
            const isExpanded = Boolean(expandedByPlaylist[playlistId]);
            const panelId = `playlist-panel-${idx}`;

            return (
              <article
                key={playlistId}
                className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/70"
              >
                <header className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
                  <button
                    type="button"
                    onClick={() => togglePlaylist(playlistId)}
                    className="flex min-w-0 flex-1 items-center gap-3 text-left"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                  >
                    <ListMusic className="h-5 w-5 shrink-0 text-zinc-300" />
                    <span className="truncate text-lg font-medium text-zinc-100 sm:text-xl">
                      {pl.name}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <a
                    href={pl.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-1 text-sm hover:bg-blue-500/20"
                  >
                    Vew Playlist
                    <YTMusicLogo className="h-6 w-6" />
                  </a>
                </header>

                {isExpanded ? (
                  <ul id={panelId} className="divide-y divide-white/10 border-t border-white/10">
                    {pl.items.map((song) => (
                      <li key={song.link}>
                        <a
                          href={song.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-white/5 sm:px-5"
                        >
                          <SongThumbnail title={song.title} thumbnail={song.thumbnail} />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-zinc-100 sm:text-base">
                              {song.title}
                            </p>
                            <p className="truncate text-xs text-zinc-400 sm:text-sm">
                              {song.artist}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-zinc-400">
                                                <YTMusicLogo className="h-5 w-5" />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function SongThumbnail({ title, thumbnail }: { title: string; thumbnail: string }) {
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
      className="h-16 w-16 shrink-0 rounded-md border border-white/15 object-cover"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
