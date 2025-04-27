import SearchHeader from "@/components/header/SearchHeader";
import VideoListItemSkeleton from "@/components/videos/VideoListItemSkeleton";
import { useRouter } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import {
  StyleSheet,
  UnistylesRuntime,
  useUnistyles,
} from "react-native-unistyles";

export default function SearchScreen() {
  const { theme } = useUnistyles();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SearchHeader />
      <ScrollView
        contentContainerStyle={{ gap: 16, paddingVertical: theme.padding(3) }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <TouchableOpacity
            key={`skeleton-${index}`}
            onPress={() =>
              router.navigate(`/(protected)/(modals)/video/${index}`)
            }
          >
            <VideoListItemSkeleton />
          </TouchableOpacity>
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
  },
}));
