import React from "react";

// Importing Stores
// import userStore from "../stores/userStore";
import { observer } from "mobx-react";

//import stack navigator
import { createStackNavigator } from "@react-navigation/stack";
import Drawer from "./Drawer";

// Importing screens
import Signin from "../screens/AuthPages/Signin";

// Icons and styling
import { Entypo, MaterialIcons, Feather } from "@expo/vector-icons";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const AuthPagesStack = createStackNavigator();
const AuthPageScreens = () => {
  const headerTitle = () => {
    <Image source={require("../../assets/nbklogo.png")} style={styles.logo} />;
  };
  return (
    <>
      <AuthPagesStack.Navigator
        initialRouteName={"SignIn"}
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#dcdcde" },
          //   headerTitle: false,
          headerTitle: () => (
            <Image
              source={require("../../assets/nbklogo.png")}
              style={styles.logo}
            />
          ),
          headerLeftContainerStyle: {
            marginRight: 5,
            padding: 10,
            flexDirection: "row",
          },
          headerLeft: () => (
            <>
              <TouchableOpacity>
                <Feather name="menu" size={24} color="#06268f" />
              </TouchableOpacity>
            </>
          ),
          headerRightContainerStyle: {
            marginRight: 5,
            padding: 10,
            flexDirection: "row",
            width: 90,
            justifyContent: "space-between",
          },
          //   headerTintColor: "#c2c5cc",
          headerRight: () => (
            <>
              <TouchableOpacity>
                <Entypo name="chat" size={30} color="#06268f" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="email" size={24} color="#06268f" />
              </TouchableOpacity>
            </>
          ),
        }}
      >
        <AuthPagesStack.Screen name="SignIn" component={Signin} />
        {/* <AuthPagesStack.Screen name="SignUp" component={Signup} /> */}
      </AuthPagesStack.Navigator>
    </>
  );
};

const Navigation = () => {
  return (
    <>
      <AuthPageScreens />
      {/* <Drawer /> */}
    </>
  );
};

export default observer(Navigation);

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 50,
    // backgroundColor: "red",
  },
});
