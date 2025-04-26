import { useRouter } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { AppIcon, Logo } from "@/components/icons";
import { UnistylesRuntime } from "react-native-unistyles";
import { Button, Link, Typography } from "@/components/ui";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Logo />
      <AppIcon />
      <View style={styles.mainContainer}>
        <Typography variant="headlineMedium" isBold style={styles.headlineText}>
          Welcome to the best YouTube-based learning application.
        </Typography>
        <Button
          size="large"
          onPress={() => router.replace("/(protected)/(tabs)")}
        >
          <Typography variant="bodyLarge" isBold style={styles.buttonText}>
            Log in as guest
          </Typography>
        </Button>
        <View style={styles.termsAndConditionsContainer}>
          <Typography
            variant="labelLarge"
            style={styles.termsAndConditionsText}
          >
            By continuing you agree with
          </Typography>
          <View style={styles.linksContainer}>
            <Link url={"https://google.com"}>
              <Typography variant="labelLarge" style={styles.linkText}>
                Terms and Conditions
              </Typography>
            </Link>

            <Typography
              variant="labelLarge"
              style={styles.termsAndConditionsText}
            >
              and
            </Typography>
            <Link url={"https://google.com"}>
              <Typography variant="labelLarge" style={styles.linkText}>
                Privacy Policy
              </Typography>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondaryBackground,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: theme.padding(4),
    paddingBottom: UnistylesRuntime.insets.bottom + theme.padding(2),
    paddingTop: UnistylesRuntime.insets.top + theme.padding(2),
    gap: theme.gap(2),
  },
  logoContainer: {
    alignItems: "center",
  },
  mainContainer: {
    gap: theme.gap(3),
    width: "100%",
  },
  headlineText: {
    color: theme.colors.textWhite,
  },
  buttonText: {
    color: theme.colors.textWhite,
    textAlign: "center",
  },
  termsAndConditionsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  termsAndConditionsText: {
    color: theme.colors.textWhite,
  },
  linkText: {
    color: theme.colors.primary,
    textDecorationLine: "underline",
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
}));
