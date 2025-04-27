import fetchPlaylist from "@/api/fetchPlaylist";
import type { HttpClient } from "@/lib/httpClient";
import type { YouTubePlaylistItemListResponse } from "@/types/api/videos/playlist";
import { useQuery } from "@tanstack/react-query";

export default function useYouTubePlaylist(
  httpClient: HttpClient,
  playlistId: string,
  maxResults = 5,
  enabled = true,
) {
  return useQuery<YouTubePlaylistItemListResponse, Error>({
    queryKey: ["youtube", "playlist", playlistId, maxResults],
    queryFn: async () => {
      return await fetchPlaylist(httpClient, {
        playlistId,
        maxResults,
      });
    },
    staleTime: 1000 * 60 * 60,
    enabled: Boolean(playlistId) && enabled,
  });
}
