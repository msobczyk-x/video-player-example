import type { VideoConfigObject } from "@/types/common";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import PlaylistSectionHeader from "./PlaylistSectionHeader";
import PlaylistSectionSkeleton from "./PlaylistSectionSkeleton";

type PlaylistSectionProps = {
  sectionData: VideoConfigObject;
};
export default function PlaylistSection({ sectionData }: PlaylistSectionProps) {
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

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: theme.gap(2),
  },
}));
