import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const Overlay = () => {
  return <View style={[styles.overlay]} />;
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,.6)",
  },
});
