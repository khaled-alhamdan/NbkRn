import React, { useState } from "react";

// Importing stores and mobx-observer
// import userStore from "../../stores/userStore";
import { observer } from "mobx-react";

// Styling dependences
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

// Getting window size
window = Dimensions.get("window");

// Importing Icons
import { AntDesign } from "@expo/vector-icons";

// Dummy data
const authServices = [
  {
    name: "Guide",
    icon: <AntDesign name="questioncircleo" size={24} color="white" />,
  },
  { name: "Contact", icon: "icon" },
  { name: "Branches", icon: "icon" },
  { name: "Rewards", icon: "icon" },
  { name: "Demo", icon: "icon" },
  { name: "Emergency", icon: "icon" },
];

const numColumns = 3;

const Signin = () => {
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });

  const handleSubmit = async () => {
    // await userStore.signin(user);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.flatlistItem}>
        <Text style={styles.flatlistItemText}> {item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={authServices}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      </View>

      {/* Signin */}
      <View style={styles.signinContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          placeholderTextColor="#A6AEC1"
          autoCapitalize="none"
          onChangeText={(phone) => setUser({ ...user, phone })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <TouchableOpacity style={styles.signinTouch} onPress={handleSubmit}>
          <Text style={styles.signinText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      {/* Quick access */}
      <View style={styles.quickContainer}>
        <TouchableOpacity style={styles.quickTouch}>
          <Text style={styles.signinText}>Quick Access</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default observer(Signin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width,
    alignItems: "center",
    backgroundColor: "#dcdcde",
  },
  signinContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#06268f",
  },
  input: {
    width: 275,
    height: 45,
    padding: 5,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 8,
    backgroundColor: "#dcdcde",
    borderColor: "#06268f",
    borderWidth: 2,
    color: "#06268f",
  },
  signinTouch: {
    alignItems: "center",
    width: 280,
    height: 50,
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#06268f",
  },
  signinText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  flatlistContainer: {
    flex: 1,
    marginTop: 12,
    width: window.width,
    padding: 5,
  },
  flatlistItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 110,
    borderRadius: 15,
    backgroundColor: "#06268f",
  },
  flatlistItemText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  quickContainer: {
    flex: 0.75,
  },
  quickTouch: {
    alignItems: "center",
    width: 150,
    height: 150,
    justifyContent: "center",
    borderRadius: 80,
    backgroundColor: "#06268f",
  },
});
