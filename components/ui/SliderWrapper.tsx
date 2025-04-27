import Slider from "@react-native-community/slider";
import type { SliderProps } from "@react-native-community/slider";
import { Platform, View } from "react-native";

type SliderWrapperProps = SliderProps & {
  scaleIOS: number;
  scaleAndroid: number;
  height: number;
};

function SliderWrapper(props: SliderWrapperProps) {
  const { scaleIOS, scaleAndroid, height } = props;
  const widthIOS = 100 * (1 / scaleIOS);
  const widthAndroid = 100 * (1 / scaleAndroid);

  return (
    <View style={{ width: "100%", height }}>
      <View
        style={{
          height,
          transform: [
            { scaleX: Platform.OS === "ios" ? scaleIOS : scaleAndroid },
            { scaleY: Platform.OS === "ios" ? scaleIOS : scaleAndroid },
          ],
        }}
      >
        <Slider
          {...props}
          style={{
            flex: 1,
            height,
            width: Platform.OS === "ios" ? `${widthIOS}%` : `${widthAndroid}%`,
            alignSelf: "center",
          }}
        />
      </View>
    </View>
  );
}

export default SliderWrapper;
