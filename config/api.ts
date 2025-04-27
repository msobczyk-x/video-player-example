import type { VideoCategory } from "@/types/common";
import { EVideoCategory } from "@/types/common";

export const videoCategoriesConfig = {
  [EVideoCategory.REACT_NATIVE]: {
    title: "React Native",
    searchQuery: "react native",
    playlistId: "PLC3y8-rFHvwhiQJD1di4eRVN30WWCXkg1",
  },
  [EVideoCategory.REACT]: {
    title: "React",
    searchQuery: "react",
    playlistId: "PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
  },
  [EVideoCategory.JAVASCRIPT]: {
    title: "JavaScript",
    searchQuery: "javascript",
    playlistId: "PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW",
  },
  [EVideoCategory.TYPESCRIPT]: {
    title: "TypeScript",
    searchQuery: "typescript",
    playlistId: "PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI",
  },
} as VideoCategory;
