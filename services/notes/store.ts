import type { Note } from "@/types/common";
import { MMKV } from "react-native-mmkv";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const storage = new MMKV();

const mmkvStorage = {
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: (name: string, value: any) => {
    storage.set(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    storage.delete(name);
  },
};

type NoteStoreState = {
  notes: Note[];
};
type NoteStoreActions = {
  addNote: (note: Note) => void;
};

type NoteStore = NoteStoreState & NoteStoreActions;

export const useNotesStore = create<NoteStore>()(
  persist(
    (set) => ({
      notes: [],
      addNote: (note: Note) => {
        set((state) => ({ notes: [...state.notes, note] }));
      },
    }),
    {
      name: "yt-notes-store",
      storage: createJSONStorage(() => mmkvStorage),
      partialize: (state) => ({ notes: state.notes }),
    },
  ),
);
