import { View } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
import { Likes, Views } from "../icons";
import { Typography } from "../ui";

type VideoDescriptionProps = {
  description: string;
  views: number;
  likes: number;
};

export default function VideoDescription({
  description,
  views = 0,
  likes = 0,
}: VideoDescriptionProps) {
  const { theme } = useUnistyles();
  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <Typography variant="labelSmall" isBold>
          Description
        </Typography>
        <Typography variant="bodySmall" style={{ lineHeight: 12 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          venenatis semper purus a accumsan. Donec accumsan pulvinar metus,
          euismod lacinia libero congue nec. Vivamus ut massa finibus, consequat
          dui commodo, semper magna.
        </Typography>
      </View>
      <View style={styles.columnContainer}>
        <Typography variant="labelSmall" isBold>
          Statistics
        </Typography>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <View style={styles.button}>
              <Views width={20} height={20} color={theme.colors.white} />
              <Typography
                variant="labelSmall"
                isBold
                style={styles.buttonTextColor}
              >
                {views} views
              </Typography>
            </View>
          </View>
          <View style={styles.columnContainer}>
            <View style={styles.button}>
              <Likes width={20} height={20} color={theme.colors.white} />
              <Typography
                variant="labelSmall"
                isBold
                style={styles.buttonTextColor}
              >
                {likes} likes
              </Typography>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: theme.gap(2),
  },
  columnContainer: {
    flexDirection: "column",
    gap: theme.gap(1.5),
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.gap(1),
    height: 32,
    width: 136,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius(1),
    paddingVertical: theme.padding(1),
    paddingHorizontal: theme.padding(1),
  },
  buttonTextColor: {
    color: theme.colors.textWhite,
    lineHeight: 14,
    textAlign: "center",
    flex: 1,
  },
}));
