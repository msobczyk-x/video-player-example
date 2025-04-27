import UserPreview from "@/components/settings/UserPreview";
import { Typography } from "@/components/ui";
import { TabBar } from "@/components/ui/tabbar";
import VideoDescription from "@/components/videos/VideoDescription";
import VideoTitle from "@/components/videos/VideoTitle";
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <VideoTitle title="Lorem ipsum" channelName="Channel name" />
        <TabBar tabs={tabsConfig} initialTabId="details" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteBackground,
    paddingTop: UnistylesRuntime.insets.top,
    paddingBottom: UnistylesRuntime.insets.bottom,
  },
  scrollViewContent: {
    paddingHorizontal: theme.padding(2),
  },
}));
