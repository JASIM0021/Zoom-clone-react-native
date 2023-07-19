import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const btnItems = [
  {
    id: 1,
    name: "video-camera",
    title: "New Metting",
    color: "#FF57FF",
    navigate: "Room",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
    color: "blue",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
    color: "blue",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
    color: "blue",
  },
];

const MenuButtons = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* One Button */}

      {btnItems.map((item, index) => (
        <View style={styles.btnContainer} key={index}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: item.color ? item.color : "blue",
            }}
            onPress={() => navigation.push(item.navigate)}
          >
            <FontAwesome name={item.name} size={33} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  btnContainer: {
    alignItems: "center",
    fleex: 1,
    // margin:10
    // justifyContent: 'center',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
});
