import type { HttpClient } from "@/lib/httpClient";
import type { YouTubeVideoListResponse } from "@/types/api/videos/video";

export type FetchVideoDetailsParams = {
  videoId: string;
  maxResults?: number;
};

export default async function fetchVideoDetails(
  httpClient: HttpClient,
  params: FetchVideoDetailsParams,
) {
  const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
  if (!API_KEY) {
    throw new Error("API_KEY is not defined");
  }
  const result = await httpClient
    .get("videos", {
      searchParams: {
        key: API_KEY,
        part: "snippet,statistics",
        id: params.videoId,
        maxResults: params.maxResults ?? 1,
      },
    })
    .json<YouTubeVideoListResponse>();
  return result;
}
