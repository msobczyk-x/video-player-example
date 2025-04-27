import type { YouTubeSearchResult } from "@/types/api/videos/search";
export function isVideoResult(result: YouTubeSearchResult): boolean {
  return result.id.kind === "youtube#video";
}

export function isChannelResult(result: YouTubeSearchResult): boolean {
  return result.id.kind === "youtube#channel";
}

export function isPlaylistResult(result: YouTubeSearchResult): boolean {
  return result.id.kind === "youtube#playlist";
}
