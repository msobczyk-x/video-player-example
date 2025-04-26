import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import AvatarPlaceholder from "../icons/AvatarPlaceholder";
import { Typography } from "../ui";
export default function UserPreview() {
  return (
    <View style={styles.container}>
      <AvatarPlaceholder />
      <Typography variant="bodyMedium" isBold>
        John Doe
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    gap: theme.gap(2),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.padding(3),
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    borderRadius: 96,
    backgroundColor: theme.colors.primaryBackground,
  },
}));
