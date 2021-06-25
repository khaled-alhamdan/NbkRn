import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import MyCarousel from "../../components/Carousel";
const Home = () => {
  return (
    <View style={styles.view}>
      <View style={styles.view2}>
        <MyCarousel />

    </View>
    </View>
  );
};

export default Home;



const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    marginTop: 20,
    marginLeft: 20,
  },
});
