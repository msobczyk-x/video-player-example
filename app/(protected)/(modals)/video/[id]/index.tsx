import { TabBar } from "@/components/ui/tabbar";
import VideoDescription from "@/components/videos/VideoDescription";
import VideoTitle from "@/components/videos/VideoTitle";
import VideoPlayer from "@/components/videos/player/VideoPlayer";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";
export default function VideoDetailsScreen() {
  const tabsConfig = [
    {
      id: "details",
      label: "Details",
      content: (
        <VideoDescription description="Lorem ipsum" likes={3} views={3} />
      ),
    },
    {
      id: "notes",
      label: "Notes",
      content: <Text>Notes content</Text>,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <VideoPlayer />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <VideoTitle title="Lorem ipsum" channelName="Channel name" />
          <TabBar tabs={tabsConfig} initialTabId="details" />
        </ScrollView>
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
    gap: theme.gap(2.5),
    paddingBottom: UnistylesRuntime.insets.bottom,
  },
  scrollViewContent: {
    backgroundColor: theme.colors.whiteBackground,
    paddingHorizontal: theme.padding(2),
  },
}));
