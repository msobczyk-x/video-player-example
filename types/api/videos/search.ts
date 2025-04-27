import type { PageInfo, ThumbnailsMap } from "./common";

export enum ESearchFilter {
  LATEST = "relevance",
  OLDEST = "date",
  POPULAR = "viewCount",
}

export interface YouTubeSearchListResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  regionCode?: string;
  pageInfo: PageInfo;
  items: YouTubeSearchResult[];
}

export interface YouTubeSearchResult {
  kind: string;
  etag: string;
  id: YouTubeResourceId;
  snippet: SearchResultSnippet;
}

export interface YouTubeResourceId {
  kind: string;
  videoId?: string;
  channelId?: string;
  playlistId?: string;
}

export interface SearchResultSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsMap;
  channelTitle: string;
  liveBroadcastContent: "none" | "live" | "upcoming";
  publishTime: string;
}
