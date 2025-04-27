import type { HttpClient } from "@/lib/httpClient";
import type { YouTubePlaylistItemListResponse } from "@/types/api/videos/playlist";

export type FetchPlaylistParams = {
  playlistId: string;
  maxResults?: number;
};

export default async function fetchPlaylist(
  httpClient: HttpClient,
  params: FetchPlaylistParams,
) {
  const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
  if (!API_KEY) {
    throw new Error("API_KEY is not defined");
  }
  const result = await httpClient
    .get("playlistItems", {
      searchParams: {
        key: API_KEY,
        part: "snippet",
        playlistId: params.playlistId,
        maxResults: params.maxResults ?? 5,
      },
    })
    .json<YouTubePlaylistItemListResponse>();
  return result;
}
