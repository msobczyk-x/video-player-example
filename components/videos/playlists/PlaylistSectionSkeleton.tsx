import { StyleSheet } from "react-native-unistyles";
import { View, ScrollView } from "react-native";
import React from "react";
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
        <View key={`skeleton-${index}`}>
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
