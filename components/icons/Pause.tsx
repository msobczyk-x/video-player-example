import type { IconProps } from "@/types/components/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Pause(props: IconProps) {
  return (
    <Svg
      style={props.style}
      width={props.width ?? 32}
      height={props.height ?? 32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M13.44 8.218a3.84 3.84 0 10-7.68 0v15.36a3.84 3.84 0 107.68 0V8.218zM26.24 8.218a3.84 3.84 0 10-7.68 0v15.36a3.84 3.84 0 107.68 0V8.218z"
        stroke={props.color ?? "#2B2D42"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Pause;
