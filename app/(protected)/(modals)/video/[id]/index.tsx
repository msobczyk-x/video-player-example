import { TabBar } from "@/components/ui/tabbar";
import VideoDescription from "@/components/videos/VideoDescription";
import VideoTitle from "@/components/videos/VideoTitle";
import NotesList from "@/components/videos/notes/NotesList";
import VideoPlayer from "@/components/videos/player/VideoPlayer";
import httpClient from "@/lib/httpClient";
import useYouTubeVideoDetails from "@/services/api/useYouTubeVideoDetails";
import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { RefreshControl } from "react-native";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import {
  StyleSheet,
  UnistylesRuntime,
  useUnistyles,
} from "react-native-unistyles";
export default function VideoDetailsScreen() {
  const { theme } = useUnistyles();
  const { id } = useLocalSearchParams();
  const [videoTime, setVideoTime] = useState(0);
  const { data, isLoading, refetch, isRefetching } = useYouTubeVideoDetails(
    httpClient,
    id as string,
  );

  const itemData = useMemo(
    () => (data && data.items.length > 0 && data?.items[0]) || null,
    [data],
  );

  const onVideoTimeChange = (time: number) => {
    setVideoTime(time);
  };

  const tabsConfig = useMemo(
    () =>
      itemData
        ? [
            {
              id: "details",
              label: "Details",
              content: (
                <ScrollView
                  refreshControl={
                    <RefreshControl
                      refreshing={isRefetching}
                      onRefresh={() => refetch()}
                    />
                  }
                >
                  <VideoDescription
                    description={itemData.snippet.description}
                    likes={itemData?.statistics?.likeCount ?? "0"}
                    views={itemData?.statistics?.viewCount ?? "0"}
                  />
                </ScrollView>
              ),
            },
            {
              id: "notes",
              label: "Notes",
              content: <NotesList videoId={id as string} />,
            },
          ]
        : [],
    [itemData, id, videoTime],
  );

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <VideoPlayer />
        <View style={styles.scrollViewContent}>
          {isLoading || !itemData ? (
            <ActivityIndicator size={"large"} color={theme.colors.primary} />
          ) : (
            <>
              <VideoTitle
                title={itemData.snippet.title}
                channelName={itemData.snippet.channelTitle}
              />
              <TabBar tabs={tabsConfig} initialTabId="details" />
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: "#111114",
    paddingTop: UnistylesRuntime.insets.top,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.whiteBackground,
  },
  scrollViewContent: {
    flex: 1,
    backgroundColor: theme.colors.whiteBackground,
    paddingHorizontal: theme.padding(2),
    paddingTop: theme.padding(2.5),
  },
}));
