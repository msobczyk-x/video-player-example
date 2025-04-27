import { Typography } from "@/components/ui";
import { useUnistyles } from "react-native-unistyles";

type TabBarLabelProps = {
  children: React.ReactNode;
  focused?: boolean;
};
export default function TabBarLabel({ children, focused }: TabBarLabelProps) {
  const { theme } = useUnistyles();
  return (
    <Typography
      variant="bodyLarge"
      style={{
        color: focused ? theme.colors.white : theme.colors.primary,
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
}
