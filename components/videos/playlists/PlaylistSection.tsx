import type { VideoConfigObject } from "@/types/common";
import { FlatList, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import PlaylistSectionHeader from "./PlaylistSectionHeader";
import PlaylistSectionSkeleton from "./PlaylistSectionSkeleton";
import useYouTubePlaylist from "@/services/api/useFetchPlaylist";
import httpClient from "@/lib/httpClient";
import PlaylistItem from "./PlaylistItem";

type PlaylistSectionProps = {
  sectionData: VideoConfigObject;
};

export default function PlaylistSection({ sectionData }: PlaylistSectionProps) {
  const { data, isLoading } = useYouTubePlaylist(
    httpClient,
    sectionData.playlistId,
  );
  console.log(data);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <PlaylistSectionHeader
          title={sectionData.title}
          searchQuery={sectionData.searchQuery}
        />
        <PlaylistSectionSkeleton />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PlaylistSectionHeader
        title={sectionData.title}
        searchQuery={sectionData.searchQuery}
      />
      <FlatList
        data={data?.items || []}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlaylistItem
            videoId={item.snippet.resourceId.videoId}
            title={item.snippet.title}
            thumbnailUrl={
              item.snippet.thumbnails.medium?.url ||
              item.snippet.thumbnails.default?.url ||
              ""
            }
            createdAt={item.snippet.publishedAt}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: theme.gap(2),
  },
  listContent: {
    paddingHorizontal: theme.padding(2),
    gap: theme.gap(2),
  },
}));
