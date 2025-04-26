import React from "react";
import { TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
type LinkProps = {
  children: React.ReactNode;
  url: string;
};
export default function Link({ children, url }: LinkProps) {
  const handleOpenLink = async () => {
    await WebBrowser.openBrowserAsync(url);
  };
  return (
    <TouchableOpacity onPress={handleOpenLink}>{children}</TouchableOpacity>
  );
}
