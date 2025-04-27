import { ESearchFilter } from "@/types/api/videos/search";
import { createContext, useContext, useRef } from "react";
import type { PropsWithChildren } from "react";
import { createStore, useStore } from "zustand";

interface SearchStoreState {
  query: string;
  filter: ESearchFilter;
}

interface SearchStoreActions {
  setQuery: (query: string) => void;
  setFilter: (filter: ESearchFilter) => void;
  clearFilter: () => void;
  clearQuery: () => void;
  clearStore: () => void;
}

interface SearchSlice extends SearchStoreState {
  actions: SearchStoreActions;
}

const createSearchStore = (initProps?: Partial<SearchStoreState>) => {
  const DEFAULT_PROPS: SearchStoreState = {
    query: "",
    filter: ESearchFilter.LATEST,
  };

  return createStore<SearchSlice>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    actions: {
      setQuery: (query) =>
        set(() => ({
          query,
        })),
      setFilter: (filter) =>
        set(() => ({
          filter,
        })),
      clearFilter: () =>
        set(() => ({
          filter: ESearchFilter.LATEST,
        })),
      clearQuery: () =>
        set(() => ({
          query: "",
        })),
      clearStore: () =>
        set(() => ({
          query: "",
        })),
    },
  }));
};

type SearchStore = ReturnType<typeof createSearchStore>;

export const SearchContext = createContext<SearchStore | null>(null);

interface SearchProviderProps {
  initialQuery?: string;
  initialFilter?: ESearchFilter;
}

export function SearchProvider({
  children,
  initialQuery = "",
  initialFilter = ESearchFilter.LATEST,
}: PropsWithChildren<SearchProviderProps>) {
  const storeRef = useRef<SearchStore>();

  if (!storeRef.current) {
    storeRef.current = createSearchStore({
      query: initialQuery,
      filter: initialFilter,
    });
  }

  return (
    <SearchContext.Provider value={storeRef.current}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchStore<T>(selector: (state: SearchSlice) => T): T {
  const store = useContext(SearchContext);
  if (!store) throw new Error("Missing SearchContext.Provider in the tree");
  return useStore(store, selector);
}

export const useSearchActions = () => useSearchStore((state) => state.actions);
export const useSearchQuery = () => useSearchStore((state) => state.query);
