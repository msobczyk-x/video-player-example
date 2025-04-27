import HomeHeader from "@/components/header/HomeHeader";
import Divider from "@/components/ui/Divider";
import PlaylistSection from "@/components/videos/playlists/PlaylistSection";
import { videoCategoriesConfig } from "@/config/api";
import { useMemo } from "react";
import { FlatList, View } from "react-native";
import {
  StyleSheet,
  UnistylesRuntime,
  useUnistyles,
} from "react-native-unistyles";

export default function HomeScreen() {
  const { theme } = useUnistyles();
  const categoriesData = useMemo(
    () =>
      Object.entries(videoCategoriesConfig).map(
        ([_, categoryData]) => categoryData,
      ),
    [videoCategoriesConfig],
  );

  const headerComponent = useMemo(
    () => (
      <View style={{ paddingBottom: theme.padding(3) }}>
        <HomeHeader />
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData}
        ListHeaderComponent={() => headerComponent}
        contentContainerStyle={{ paddingBottom: theme.padding(3) }}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <PlaylistSection key={`category-${item.title}`} sectionData={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteBackground,
    paddingTop: UnistylesRuntime.insets.top + theme.padding(3),
    gap: theme.gap(3),
  },
}));
