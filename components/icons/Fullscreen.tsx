import type { IconProps } from "@/types/components/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Fullscreen(props: IconProps) {
  return (
    <Svg
      style={props.style}
      width={props.width ?? 32}
      height={props.height ?? 32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M12 5.333H5.333V12m21.334 0V5.333H20m0 21.334h6.667V20M5.333 20v6.667H12"
        stroke={props.color ?? "#2B2D42"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Fullscreen;
