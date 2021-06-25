import React from "react";
import {
  View,
    StyleSheet,
    FlatList
    , TouchableOpacity,
    Text
} from "react-native";


const authServices = [

    { name: "Quickpay", icon: "icon" },
    { name: "NBK TO NK", icon: "icon" },
    { name: "Schedualed    Payments", icon: "icon" },
  
  ];
  

const numColumns = 2;
const Transfers = () => {

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.View2}>
          <TouchableOpacity style={styles.flatlistItem}>
                </TouchableOpacity>
                
                <Text style={styles.flatlistItemText}> {item.name}</Text>
                </View>

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
          
        


    </View>
  );
};

export default Transfers;




const styles = StyleSheet.create({
    container: {
      flex: 1,
 
      alignItems: "center",
      backgroundColor: "#dcdcde",
    },
    View2: {
  
      },
    
    flatlistContainer: {
      flex: 1,
        marginTop: 20,
      marginLeft:-100,
      paddingTop: 40,
    },
    flatlistItem: {
      flex: 1,
      width: 100,
        height: 100,
        marginLeft: 100,
        marginTop: 50,
        padding: 40,
    borderRadius: 100/2,
      backgroundColor: "#06268f",
    },
    flatlistItemText: {
      color: "white",
      fontWeight: "bold",
        fontSize: 18,
        position: "absolute",
    
    },
    quickContainer: {
      flex: 0.75,
    },
  
  });
  