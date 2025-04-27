import type { IconProps } from "@/types/components/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AppIcon(props: IconProps) {
  return (
    <Svg
      width={props.width ?? 128}
      height={props.height ?? 128}
      viewBox="0 0 128 128"
      fill="none"
    >
      <Path
        d="M10.667 64c0-25.142 0-37.712 7.81-45.523 7.81-7.81 20.381-7.81 45.523-7.81 25.141 0 37.713 0 45.523 7.81 7.81 7.81 7.81 20.381 7.81 45.523 0 25.141 0 37.713-7.81 45.523-7.81 7.81-20.382 7.81-45.523 7.81-25.142 0-37.712 0-45.523-7.81-7.81-7.81-7.81-20.382-7.81-45.523z"
        stroke={props.color ?? "#2B2D42"}
        strokeWidth={8}
      />
      <Path
        d="M114.667 42.667H13.333M56 13.333L37.333 42.667M90.667 13.333L72 42.667M80 77.333c0-3.378-3.53-5.656-10.592-10.212-7.158-4.618-10.737-6.927-13.406-5.232-2.669 1.696-2.669 6.279-2.669 15.444 0 9.166 0 13.75 2.67 15.445 2.668 1.695 6.247-.614 13.405-5.232C76.469 82.989 80 80.71 80 77.333z"
        stroke={props.color ?? "#2B2D42"}
        strokeWidth={8}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default AppIcon;
