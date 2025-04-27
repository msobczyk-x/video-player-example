import { Typography } from "@/components/ui";
import type { Note } from "@/types/common";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { formatTime } from "@/utils/formatTime";
export default function NoteItem({ item }: { item: Note }) {
  return (
    <View style={styles.container}>
      <Typography variant="bodySmall" style={styles.text}>
        {item.text}
      </Typography>
      <Typography variant="labelSmall" isBold style={styles.timestamp}>
        {formatTime(item.videoTime)}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: theme.padding(1.5),
    borderRadius: theme.radius(1.5),
    borderColor: theme.colors.inactive,
    borderWidth: 1,
  },
  text: { lineHeight: 12, paddingTop: theme.padding(1) },
  timestamp: {
    lineHeight: 18,
    alignSelf: "flex-end",
  },
}));
