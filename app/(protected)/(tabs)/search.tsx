import SearchInput from "@/components/inputs/SearchInput";
import VideoListItemSkeleton from "@/components/videos/VideoListItemSkeleton";
import { FlatList, ScrollView, View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchInput />
      </View>
      <ScrollView contentContainerStyle={{ gap: 16 }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <View key={`skeleton-${index}`}>
            <VideoListItemSkeleton />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteBackground,
    paddingHorizontal: theme.padding(3),
    paddingTop: UnistylesRuntime.insets.top + theme.padding(3),
    paddingBottom: UnistylesRuntime.insets.bottom + theme.padding(3),
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: theme.padding(3),
  },
}));
