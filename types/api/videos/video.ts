import type { PageInfo, ThumbnailsMap } from "./common";

export interface YouTubeVideoListResponse {
  kind: string;
  etag: string;
  items: YouTubeVideo[];
  pageInfo: PageInfo;
  nextPageToken?: string;
  prevPageToken?: string;
}

export interface YouTubeVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
  contentDetails?: VideoContentDetails;
  status?: VideoStatus;
  player?: VideoPlayer;
  topicDetails?: VideoTopicDetails;
  recordingDetails?: VideoRecordingDetails;
  fileDetails?: VideoFileDetails;
  processingDetails?: VideoProcessingDetails;
  suggestions?: VideoSuggestions;
  liveStreamingDetails?: VideoLiveStreamingDetails;
}

export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsMap;
  channelTitle: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent: "none" | "live" | "upcoming";
  defaultLanguage?: string;
  localized?: VideoLocalized;
  defaultAudioLanguage?: string;
}

export interface VideoLocalized {
  title: string;
  description: string;
}

export interface VideoStatistics {
  viewCount?: string;
  likeCount?: string;
  dislikeCount?: string;
  favoriteCount?: string;
  commentCount?: string;
}

// Optional interfaces for other parts not present in the example
export interface VideoContentDetails {
  duration?: string;
  dimension?: string;
  definition?: string;
  caption?: string;
  licensedContent?: boolean;
  projection?: string;
  contentRating?: Record<string, any>;
}

export interface VideoStatus {
  uploadStatus?: string;
  privacyStatus?: "private" | "public" | "unlisted";
  license?: string;
  embeddable?: boolean;
  publicStatsViewable?: boolean;
}

export interface VideoPlayer {
  embedHtml?: string;
  embedHeight?: number;
  embedWidth?: number;
}

export interface VideoTopicDetails {
  topicIds?: string[];
  relevantTopicIds?: string[];
  topicCategories?: string[];
}

export interface VideoRecordingDetails {
  recordingDate?: string;
  location?: VideoLocation;
}

export interface VideoLocation {
  latitude?: number;
  longitude?: number;
  altitude?: number;
}

export interface VideoFileDetails {
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  container?: string;
  videoStreams?: VideoStream[];
  audioStreams?: AudioStream[];
  durationMs?: number;
  bitrateBps?: number;
  creationTime?: string;
}

export interface VideoStream {
  widthPixels?: number;
  heightPixels?: number;
  frameRateFps?: number;
  aspectRatio?: number;
  codec?: string;
  bitrateBps?: number;
  rotation?: string;
  vendor?: string;
}

export interface AudioStream {
  channelCount?: number;
  codec?: string;
  bitrateBps?: number;
  vendor?: string;
}

export interface VideoProcessingDetails {
  processingStatus?: string;
  processingProgress?: ProcessingProgress;
  processingFailureReason?: string;
  fileDetailsAvailability?: string;
  processingIssuesAvailability?: string;
  tagSuggestionsAvailability?: string;
  editorSuggestionsAvailability?: string;
  thumbnailsAvailability?: string;
}

export interface ProcessingProgress {
  partsTotal?: number;
  partsProcessed?: number;
  timeLeftMs?: number;
}

export interface VideoSuggestions {
  processingErrors?: string[];
  processingWarnings?: string[];
  processingHints?: string[];
  tagSuggestions?: TagSuggestion[];
  editorSuggestions?: string[];
}

export interface TagSuggestion {
  tag?: string;
  categoryRestricts?: string[];
}

export interface VideoLiveStreamingDetails {
  actualStartTime?: string;
  actualEndTime?: string;
  scheduledStartTime?: string;
  scheduledEndTime?: string;
  concurrentViewers?: string;
  activeLiveChatId?: string;
}
