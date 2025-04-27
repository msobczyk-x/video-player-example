import type { PageInfo, ResourceId, Thumbnail, ThumbnailsMap } from "./common";

export interface YouTubePlaylistItemListResponse {
  kind: string;
  etag: string;
  items: YouTubePlaylistItem[];
  pageInfo: PageInfo;
  nextPageToken?: string;
  prevPageToken?: string;
}

export interface YouTubePlaylistItem {
  kind: string;
  etag: string;
  id: string;
  snippet: PlaylistItemSnippet;
  status?: PlaylistItemStatus;
}

export interface PlaylistItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsMap;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
  videoOwnerChannelTitle?: string;
  videoOwnerChannelId?: string;
}

export interface PlaylistItemContentDetails {
  videoId: string;
  videoPublishedAt?: string;
  startAt?: string;
  endAt?: string;
  note?: string;
}

export interface PlaylistItemStatus {
  privacyStatus: "private" | "public" | "unlisted";
}
