import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  cancelAnimation,
} from "react-native-reanimated";
import { StyleSheet } from "react-native-unistyles";

export default function VideoListItemSkeleton() {
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
      <Animated.View style={[styles.thumbnail, animatedStyle]} />
      <View style={styles.textsContainer}>
        <Animated.View style={[styles.titleSkeleton, animatedStyle]} />
        <Animated.View style={[styles.descriptionSkeleton, animatedStyle]} />
        <Animated.View style={[styles.dateSkeleton, animatedStyle]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: theme.gap(1.5),
  },
  thumbnail: {
    width: 345,
    height: 200,
    borderRadius: theme.radius(2),
    backgroundColor: theme.colors.secondary,
  },
  textsContainer: {
    gap: theme.gap(1.5),
    width: 345,
  },
  titleSkeleton: {
    width: "50%",
    height: 18,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius(1),
  },
  descriptionSkeleton: {
    width: "100%",
    height: 16,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius(1),
  },
  dateSkeleton: {
    width: 100,
    height: 12,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius(1),
    alignSelf: "flex-end",
  },
}));
