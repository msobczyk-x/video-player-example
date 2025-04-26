import React from "react";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import PlaylistItemSkeleton from "./PlaylistItemSkeleton";

export default function PlaylistSectionSkeleton() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
      scrollEnabled={false}
      style={styles.scrollView}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={`playlist-skeleton-${index}`}>
          <PlaylistItemSkeleton />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    width: "100%",
  },
  scrollView: {
    overflow: "hidden",
  },
  scrollContent: {
    paddingLeft: theme.padding(3),
    gap: theme.gap(3),
  },
}));
