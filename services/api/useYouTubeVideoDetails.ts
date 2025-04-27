import fetchVideoDetails from "@/api/fetchVideoDetails";
import type { HttpClient } from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";
import type { YouTubeVideoListResponse } from "@/types/api/videos/video";

export default function useYouTubeVideoDetails(
  httpClient: HttpClient,
  videoId: string,
  maxResults = 1,
  enabled = true,
) {
  return useQuery<YouTubeVideoListResponse, Error>({
    queryKey: ["youtube", "video", videoId, maxResults],
    queryFn: async () => {
      return await fetchVideoDetails(httpClient, {
        videoId,
        maxResults,
      });
    },
    staleTime: 1000 * 60 * 60,
    enabled: Boolean(videoId) && enabled,
  });
}
