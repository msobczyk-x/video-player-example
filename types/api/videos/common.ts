import type { YouTubeSearchListResponse } from "./search";
import type { YouTubePlaylistItemListResponse } from "./playlist";
export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface ThumbnailsMap {
  default?: Thumbnail;
  medium?: Thumbnail;
  high?: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ResourceId {
  kind: string;
  videoId: string;
  playlistId?: string;
  channelId?: string;
}

export type YouTubeApiResponse =
  | YouTubeSearchListResponse
  | YouTubePlaylistItemListResponse;
