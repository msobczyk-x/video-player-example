import { View, TouchableOpacity } from "react-native";
import { Volume, AirPlay, LeftArrow } from "@/components/icons";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

type VideoPlayerHeaderProps = {
  muted: boolean;
  onGoBackPress: () => void;
  onMutePress: () => void;
  onAirPlayPress: () => void;
};

export default function VideoPlayerHeader({
  muted,
  onGoBackPress,
  onMutePress,
  onAirPlayPress,
}: VideoPlayerHeaderProps) {
  const { theme } = useUnistyles();

  return (
    <View style={styles.headerControls}>
      <TouchableOpacity onPress={onGoBackPress} style={styles.headerButton}>
        <LeftArrow width={20} height={20} color={theme.colors.white} />
      </TouchableOpacity>
      <View style={styles.rightHeaderButtons}>
        <TouchableOpacity onPress={onMutePress} style={styles.headerButton}>
          <Volume
            width={20}
            height={20}
            color={muted ? theme.colors.red : theme.colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onAirPlayPress} style={styles.headerButton}>
          <AirPlay width={20} height={20} color={theme.colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  headerControls: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    zIndex: 10,
  },
  rightHeaderButtons: {
    flexDirection: "row",
  },
  headerButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
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
