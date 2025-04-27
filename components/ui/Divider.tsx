import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type Props = {
  marginTop?: number;
};

export default function Divider({ marginTop = 3 }: Props) {
  return <View style={styles.separator(marginTop)} />;
}

const styles = StyleSheet.create((theme) => ({
  separator: (marginTop) => ({
    height: 2,
    backgroundColor: theme.colors.primary,
    marginTop: theme.padding(marginTop),
    width: "120%",
    alignSelf: "center",
  }),
}));
