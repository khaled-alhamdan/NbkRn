import React, { useState } from "react";

// Importing Drawer Navigators and Stack
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

// Drawer Content
import DrawerContent from "./DrawerContent";

// Importing styling assets
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

// Icons
import { Feather } from "@expo/vector-icons";

// Importing screens
import Home from "../screens/App/Home";

const AppPages = createStackNavigator();
const AppPagesScreen = () => {
  return (
    <>
      <Animated.View style={[{ flex: 1, overflow: "visible" }]}>
        <AppPages.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: "#dcdcde" },
            headerBackTitleVisible: false,
            headerTintColor: "#06268f",
            headerRight: () => (
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.openDrawer();
                  }}
                >
                  <Feather name="menu" size={24} color="#06268f" />
                </TouchableOpacity>
              </>
            ),
            headerRightContainerStyle: {
              marginRight: 5,
              padding: 10,
              flexDirection: "row",
            },
          })}
        >
          <AppPages.Screen
            name="Home"
            component={Home}
            options={{ headerLeft: null }}
          />
        </AppPages.Navigator>
      </Animated.View>
    </>
  );
};

/////////////////////////////////

const DrawerStack = createDrawerNavigator();
const Drawer = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  const screensStyles = { borderRadius, transform: [{ scale }] };
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#06268f", "#06268f", "#132239"]}
    >
      <DrawerStack.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerType="slide"
        drawerStyle={{ width: "70%", backgroundColor: "transparent" }}
        overlayColor="transparent"
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "green",
          inactiveTintColor: "green",
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
      >
        <>
          <DrawerStack.Screen
            name="AppDrawer"
            component={AppPagesScreen}
            style={screensStyles}
          />
        </>
      </DrawerStack.Navigator>
    </LinearGradient>
  );
};

export default Drawer;
