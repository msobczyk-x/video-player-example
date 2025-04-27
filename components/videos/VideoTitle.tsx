import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import UserPreview from "../settings/UserPreview";
import { Typography } from "../ui";

type VideoTitleProps = {
  title: string;
  channelName: string;
};
export default function VideoTitle({ title, channelName }: VideoTitleProps) {
  return (
    <View style={styles.titleContainer}>
      <Typography variant="headlineSmall" isBold>
        {title}
      </Typography>
      <View style={styles.userContainer}>
        <UserPreview name={channelName} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  titleContainer: {
    flexDirection: "column",
    gap: theme.padding(1),
  },
  userContainer: {
    paddingHorizontal: theme.padding(1),
    paddingVertical: theme.padding(2),
  },
}));
