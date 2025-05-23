import { fetchSearchList } from "@/api/fetchSearchList";
import type { HttpClient } from "@/lib/httpClient";
import type { YouTubeSearchListResponse } from "@/types/api/videos/search";
import { ESearchFilter } from "@/types/api/videos/search";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useYouTubeSearch(
  httpClient: HttpClient,
  searchQuery: string,
  sortBy = ESearchFilter.LATEST,
  maxResults = 25,
  enabled = true,
) {
  return useInfiniteQuery<YouTubeSearchListResponse>({
    queryKey: ["youtube", "search", searchQuery, sortBy, maxResults],
    queryFn: async ({ pageParam }) => {
      return fetchSearchList(httpClient, {
        searchQuery,
        maxResults,
        pageToken: pageParam as string | undefined,
      });
    },
    initialPageParam: undefined as undefined,
    getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
    staleTime: 1000 * 60 * 60, // This fetch costs too much money :)
    enabled: Boolean(searchQuery) && enabled,
  });
}
