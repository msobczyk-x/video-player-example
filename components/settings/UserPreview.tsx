import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import AvatarPlaceholder from "../icons/AvatarPlaceholder";
import { Typography } from "../ui";

type UserPreviewProps = {
  name?: string;
};

export default function UserPreview({ name = "John Doe" }: UserPreviewProps) {
  return (
    <View style={styles.container}>
      <AvatarPlaceholder />
      <Typography variant="bodyMedium" isBold>
        {name}
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
