import type { HttpClient } from "@/lib/httpClient";
import type { YouTubeSearchListResponse } from "@/types/api/videos/search";
import { ESearchFilter } from "@/types/api/videos/search";
export type FetchSearchListParams = {
  searchQuery: string;
  maxResults?: number;
  pageToken?: string;
  sortBy?: ESearchFilter;
};

export async function fetchSearchList(
  httpClient: HttpClient,
  params: FetchSearchListParams,
) {
  const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
  if (!API_KEY) {
    throw new Error("API_KEY is not defined");
  }

  const searchParams: Record<string, string | number> = {
    key: API_KEY,
    part: "snippet",
    q: params.searchQuery,
    maxResults: params.maxResults ?? 25,
    order: params.sortBy ?? ESearchFilter.LATEST,
  };

  if (params.pageToken) {
    searchParams.pageToken = params.pageToken;
  }

  const result = await httpClient
    .get("search", { searchParams })
    .json<YouTubeSearchListResponse>();

  return result;
}
