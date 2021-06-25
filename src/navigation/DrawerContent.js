import React from "react";

// Importing Stores

import { observer } from "mobx-react";

import { View, StyleSheet } from "react-native";

// Importing Drawer Navigators
import {
  //  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

// Icons
import { SimpleLineIcons, Entypo,MaterialCommunityIcons } from "@expo/vector-icons";
import authStore from "../mobx/Auth";

const DrawerContent = (props) => {
  const handleSubmit = async () => {
      await authStore.signout();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
      }}
    >
      {/* Home*/}
      <DrawerItem
        label="Home"
        labelStyle={{
          color: "white",
          marginLeft: -15,
          fontSize: 16,
          width: 150,
          fontWeight: "bold",
          letterSpacing: 0.5,
        }}
        onPress={() => props.navigation.navigate("Home")}
        icon={() => <Entypo name="home" size={28} color="white" />}
      />
      {/* Transfers*/}
      <DrawerItem
        label="Transfers"
        labelStyle={{
          color: "white",
          marginLeft: -15,
          fontSize: 16,
          width: 150,
          fontWeight: "bold",
          letterSpacing: 0.5,
        }}
        onPress={() => props.navigation.navigate("Transfers")}
        icon={() => <MaterialCommunityIcons name="transfer" size={24} color="white" />}
      />


      {/* Log out section */}
      <DrawerItem
        label="Sign out"
        labelStyle={{
          color: "white",
          marginLeft: -8,
          fontSize: 16,
          width: 150,
          fontWeight: "bold",
          letterSpacing: 0.5,
        }}
        onPress={handleSubmit}
        icon={() => <SimpleLineIcons name="logout" size={24} color="white" />}
      />
    </View>
  );
};

export default observer(DrawerContent);

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//     marginTop: 30,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: "bold",
//     color: "white",
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//     color: "white",
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   section: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: "bold",
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: "#f4f4f4",
//     // borderTopWidth: 1,
//   },
//   preference: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
//   logoContainer: {
//     width: "100%",
//     height: "10%",
//     borderRadius: 18,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 60,
//     // backgroundColor: "pink",
//   },
//   logo: {
//     width: 50,
//     height: 90,
//     borderRadius: 18,
//   },
// });
