import type { IconProps } from "@/types/components/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LeftArrow(props: IconProps) {
  return (
    <Svg
      style={props.style}
      width={props.width ?? 32}
      height={props.height ?? 32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M28.8 16H3.2m0 0L14.4 4.8M3.2 16l11.2 11.2"
        stroke={props.color ?? "#2B2D42"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LeftArrow;
