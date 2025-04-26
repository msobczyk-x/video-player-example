import { StyleSheet } from "react-native-unistyles";
import { View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  cancelAnimation,
} from "react-native-reanimated";

export default function PlaylistItemSkeleton() {
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 800 }),
        withTiming(0.3, { duration: 800 }),
      ),
      -1,
    );

    return () => {
      cancelAnimation(opacity);
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.thumbnailContainer, styles.thumbnail, animatedStyle]}
      />
      <View style={styles.textsWrapper}>
        <Animated.View style={[styles.titleSkeleton, animatedStyle]} />
        <Animated.View style={[styles.dateSkeleton, animatedStyle]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "column",
    gap: theme.gap(1),
  },
  textsWrapper: {
    flexDirection: "column",
    gap: theme.gap(0.5),
  },
  thumbnailContainer: {
    borderRadius: theme.radius(2),
    backgroundColor: theme.colors.secondary,
  },
  thumbnail: {
    width: 180,
    height: 116,
    borderRadius: theme.radius(2),
  },
  titleSkeleton: {
    width: 180,
    height: 16,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius(1),
  },
  dateSkeleton: {
    width: 80,
    height: 12,
    alignSelf: "flex-end",
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius(1),
    marginTop: 2,
  },
}));
