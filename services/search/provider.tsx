import { createContext, useContext, useRef } from "react";
import type { PropsWithChildren } from "react";
import { createStore, useStore } from "zustand";

interface SearchStoreState {
  query: string;
}

interface SearchStoreActions {
  setQuery: (query: string) => void;
  clearStore: () => void;
}

interface SearchSlice extends SearchStoreState {
  actions: SearchStoreActions;
}

const createSearchStore = (initProps?: Partial<SearchStoreState>) => {
  const DEFAULT_PROPS: SearchStoreState = {
    query: "",
  };

  return createStore<SearchSlice>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    actions: {
      setQuery: (query) =>
        set(() => ({
          query,
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
}

export function SearchProvider({
  children,
  initialQuery = "",
}: PropsWithChildren<SearchProviderProps>) {
  const storeRef = useRef<SearchStore>();

  if (!storeRef.current) {
    storeRef.current = createSearchStore({
      query: initialQuery,
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
