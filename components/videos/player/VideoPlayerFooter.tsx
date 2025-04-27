import { Fullscreen } from "@/components/icons";
import { Typography } from "@/components/ui";
import SliderWrapper from "@/components/ui/SliderWrapper";
import { formatTime } from "@/utils/formatTime";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
type VideoPlayerFooterProps = {
  currentTime: number;
  duration: number;
  onToggleFullscreen: () => void;
  onSlidingStart: () => void;
  onSlidingComplete: (value: number) => void;
};
export default function VideoPlayerFooter({
  currentTime,
  duration,
  onToggleFullscreen,
  onSlidingStart,
  onSlidingComplete,
}: VideoPlayerFooterProps) {
  const { theme } = useUnistyles();
  return (
    <View style={styles.seekContainer}>
      <View style={styles.seekTimeContainer}>
        <Typography isBold variant="labelSmall" style={styles.timeText}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </Typography>
        <TouchableOpacity
          onPress={onToggleFullscreen}
          style={styles.fullscreenButton}
        >
          <Fullscreen width={24} height={24} color={theme.colors.white} />
        </TouchableOpacity>
      </View>
      <SliderWrapper
        height={40}
        scaleIOS={0.5}
        scaleAndroid={1}
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={currentTime}
        minimumTrackTintColor={theme.colors.red}
        maximumTrackTintColor={theme.colors.inactive}
        thumbTintColor={theme.colors.red}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSlidingComplete}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  seekContainer: {
    position: "absolute",
    bottom: -18,
    left: 0,
    right: 0,
  },
  seekTimeContainer: {
    paddingHorizontal: theme.padding(1),
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: -theme.padding(2),
  },
  fullscreenButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "100%",
    height: 4,
  },
  timeText: {
    color: theme.colors.white,
    textAlign: "left",
  },
}));
