import { useQuery } from "@tanstack/react-query";
import { jellyfinApi } from "@/lib/api/jellyfin";

export const jellyfinQueryKeys = {
  all: ["jellyfin"] as const,
  movies: () => [...jellyfinQueryKeys.all, "movies"] as const,
  series: () => [...jellyfinQueryKeys.all, "series"] as const,
};

export const useMoviesList = () =>
  useQuery({
    queryKey: jellyfinQueryKeys.movies(),
    queryFn: ({ signal }) => jellyfinApi.getMovies(signal),
  });

export const useSeriesList = () =>
  useQuery({
    queryKey: jellyfinQueryKeys.series(),
    queryFn: ({ signal }) => jellyfinApi.getSeries(signal),
  });
