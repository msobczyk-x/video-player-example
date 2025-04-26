export enum EVideoCategory {
  REACT_NATIVE = "ReactNative",
  REACT = "React",
  JAVASCRIPT = "JavaScript",
  TYPESCRIPT = "TypeScript",
}

export type VideoConfigObject = {
  title: string;
  searchQuery: string;
  playlistId: string;
};

export type VideoCategory = {
  [key in EVideoCategory]: VideoConfigObject;
};
