import type { IconProps } from "@/types/components/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Search(props: IconProps) {
  return (
    <Svg
      style={props.style}
      width={props.width ?? 32}
      height={props.height ?? 32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M21.06 21.081L28 28m-4-14c0 5.523-4.477 10-10 10S4 19.523 4 14 8.477 4 14 4s10 4.477 10 10z"
        stroke={props.color ?? "#2B2D42"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Search;
