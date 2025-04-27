import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Backward, Pause, Play, Forward } from "@/components/icons";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
export default function VideoPlayerControls({
  paused,
  onSkipBackward,
  onSkipForward,
  togglePlayPause,
}: {
  paused: boolean;
  onSkipBackward: () => void;
  onSkipForward: () => void;
  togglePlayPause: () => void;
}) {
  const { theme } = useUnistyles();
  return (
    <View style={styles.controlsContainer}>
      <TouchableOpacity onPress={onSkipBackward} style={styles.controlButton}>
        <Backward width={24} height={24} color={theme.colors.white} />
      </TouchableOpacity>

      <TouchableOpacity onPress={togglePlayPause} style={styles.playButton}>
        {paused ? (
          <Play width={24} height={24} color={theme.colors.white} />
        ) : (
          <Pause width={24} height={24} color={theme.colors.white} />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={onSkipForward} style={styles.controlButton}>
        <Forward width={24} height={24} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  controlsContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: 0,
    right: 0,
  },
  controlButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
}));
