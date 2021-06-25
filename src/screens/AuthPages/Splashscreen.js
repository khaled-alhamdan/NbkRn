import React, { useEffect } from "react";

import { StyleSheet, ImageBackground, Dimensions } from "react-native";

window = Dimensions.get("window");

const Splashscreen = ({ setIsLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("../../../assets/splashGIF2.gif")}
      // onLayout={onLayoutRootView}
    />
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: window.width,
  },
});
