import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
const StartMeeting = ({ meetuser, setMeetuser, joinRoom }) => {
  return (
    <View style={styles.meetingContainer}>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={meetuser.name}
          placeholder="Enter your name"
          placeholderTextColor={"grey"}
          onChangeText={(text) => setMeetuser({ ...meetuser, userName: text })}
        />
      </View>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={meetuser.roomId}
          placeholder="Enter your room id"
          placeholderTextColor={"grey"}
          onChangeText={(text) => setMeetuser({ ...meetuser, roomId: text })}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.startMettingBtn}
          onPress={() => {
            joinRoom();
          }}
        >
          <Text
            style={
              (styles.startmettingtext,
              { color: "white", textTransform: "uppercase" })
            }
          >
            Start Metting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMettingBtn: {
    color: "blue",
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 15,

    shadowColor: "white",
    shadowOpacity: 1,
    elevation: 1,
    height: 50,
  },
});
