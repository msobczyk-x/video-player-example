import { create } from "zustand";

interface VideoState {
  currentTime: number;
}

interface VideoActions {
  setCurrentTime: (time: number) => void;
  clear: () => void;
}

interface VideoStore extends VideoState {
  actions: VideoActions;
}

export const useVideoStore = create<VideoStore>((set) => ({
  currentTime: 0,

  actions: {
    setCurrentTime: (time: number) =>
      set(() => ({
        currentTime: time,
      })),
    clear: () => set(() => ({ currentTime: 0 })),
  },
}));

export const useVideoTime = () => useVideoStore((state) => state.currentTime);
export const useVideoActions = () => useVideoStore((state) => state.actions);
