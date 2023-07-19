import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatHeader from "./ChatHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Chat = ({ modalVisible, setModalVisible }) => {
  const [messageText, setMessageText] = useState("");
  return (
    <View>
      <SafeAreaView style={{ height: "100%" }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <ChatHeader setModalVisible={setModalVisible} />
              <View style={styles.chatMessage}>{/* Chart message */}</View>

              <View style={styles.chatFromContainer}>
                <Text>Sent to : Everyone</Text>
                <View style={styles.chatForm}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter message"
                    value={messageText}
                    placeholderTextColor="black"
                    onChangeText={(text) => setMessageText(text)}
                  />
                  <TouchableOpacity
                    style={{
                      ...styles.sentBtn,
                      backgroundColor: messageText ? "blue" : "grey",
                    }}
                  >
                    <FontAwesome name="send" size={18} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatFromContainer: {
    borderColor: "#2f2f2f",
    borderTopWidth: 1,
    padding: 12,
  },
  chatMessage: {
    flex: 1,
  },
  textInput: {
    height: 40,
    color: "#efefef",
    borderWidth: 1,
    borderColor: "#595859",
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  chatForm: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  sentBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    margin: 10,
  },
});
