import SearchHeader from "@/components/header/SearchHeader";
import { Typography } from "@/components/ui";
import VideoListItem from "@/components/videos/VideoListItem";
import VideoListItemSkeleton from "@/components/videos/VideoListItemSkeleton";
import httpClient from "@/lib/httpClient";
import useYouTubeSearch from "@/services/api/useYouTubeSearch";
import { useSearchQuery, useSearchStore } from "@/services/search/provider";
import { formatTotalResults } from "@/utils/formatTotalResults";
import { isVideoResult } from "@/utils/ytVideoGuards";
import { FlashList } from "@shopify/flash-list";
import { useCallback, useMemo } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import {
  StyleSheet,
  UnistylesRuntime,
  useUnistyles,
} from "react-native-unistyles";

export default function SearchScreen() {
  const { theme } = useUnistyles();
  const query = useSearchQuery();
  const sortingOrder = useSearchStore((state) => state.filter);
  const {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isRefetching,
    refetch,
  } = useYouTubeSearch(httpClient, query, sortingOrder);

  const listData = useMemo(
    () =>
      data?.pages.flatMap((page) =>
        page.items.filter((item) => isVideoResult(item)),
      ) ?? [],
    [data],
  );
  const totalResults = useMemo(
    () =>
      data?.pages?.[0]?.pageInfo.totalResults
        ? formatTotalResults(data?.pages[0].pageInfo.totalResults)
        : "0",
    [data?.pages?.[0]?.pageInfo.totalResults],
  );
  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const skeletonLoading = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, index) => (
        <TouchableOpacity key={`skeleton-${index}`} onPress={() => {}}>
          <VideoListItemSkeleton />
        </TouchableOpacity>
      )),
    [],
  );
  return (
    <View style={styles.container}>
      <SearchHeader results={totalResults} />

      <FlashList
        data={listData}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={172}
        contentContainerStyle={{ paddingVertical: theme.padding(3) }}
        renderItem={({ item }) => (
          <VideoListItem
            videoId={item.id.videoId || ""}
            channelName={item.snippet.channelTitle}
            description={item.snippet.description}
            thumbnailUrl={
              item.snippet.thumbnails.medium?.url ||
              item.snippet.thumbnails.default?.url ||
              ""
            }
            createdAt={item.snippet.publishedAt}
          />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshing={isRefetching}
        ListFooterComponent={() => {
          if (isFetchingNextPage) {
            return (
              <ActivityIndicator size="small" color={theme.colors.primary} />
            );
          }
          return null;
        }}
        onRefresh={refetch}
        ListEmptyComponent={() =>
          isLoading ? (
            skeletonLoading
          ) : (
            <View
              style={{
                paddingHorizontal: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="bodyLarge">No videos found</Typography>
            </View>
          )
        }
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteBackground,
    paddingHorizontal: theme.padding(3),
    paddingTop: UnistylesRuntime.insets.top + theme.padding(3),
  },
  divider: {
    height: theme.gap(3),
  },
}));
