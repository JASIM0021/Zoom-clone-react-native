import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
} from "react-native";
import StartMeeting from "./StartMeeting";
import { useEffect, useLayoutEffect, useState } from "react";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Chat from "./Chat";

const MeetingRoom = () => {
  const [meetuser, setMeetuser] = useState({});
  const [activeUser, setActiveUser] = useState([]);
  const [setstartCamera, setSetstartCamera] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const btnItems = [
    {
      id: 1,
      name: "microphone",
      title: "Mute",
      color: "#FF57FF",
      navigate: "Room",
    },
    {
      id: 2,
      name: "video-camera",
      title: "Stop Video",
      color: "blue",
    },
    {
      id: 3,
      name: "upload",
      title: "Share Screen",
      color: "blue",
    },
    {
      id: 4,
      name: "comment",
      title: "Chat",
      color: "blue",
      onPressIcon: () => {
        setModalVisible(true);
        console.log("first");
      },
    },
  ];

  let socket;
  const API_URL = "https://dangerous-eel-4.telebit.io/";
  socket = io(`${API_URL}`);
  socket.on("connection", () => {
    console.log("Connected");
  });
  socket.on("all-users", (user) => {
    console.log("Active user", user);
    user = user?.filter((usr) => usr.userName !== meetuser.userName);
    setActiveUser(user);
  });
  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      setSetstartCamera(true);
    } else {
      Alert.alert("Camera permissions denied");
    }
  };

  const joinRoom = () => {
    __startCamera();
    socket.emit("join-room", meetuser);
  };
  // socket.on("all-users", (user) => {
  //   console.log("Active user");
  //   setActiveUser(user);
  // });
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      {setstartCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Modal
            animationType={"slide"}
            transparent={false}
            presentationStyle={"fullScreen"}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Chat
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Modal>
          <View style={styles.cameraContainer}>
            <Camera
              type={"front"}
              style={{
                height: activeUser.length == 0 ? "100%" : "30%",
                width: activeUser.length == 0 ? "100%" : "40%",
              }}
            ></Camera>

            {activeUser.map((user) => (
              <View style={styles.activeUserContainer}>
                <Text style={styles.activeUserContainerText}>
                  {user?.userName}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.menu}>
            {btnItems.map((item, _) => (
              <TouchableOpacity
                style={styles.tile}
                onPress={() => {
                  item?.onPressIcon
                    ? item.onPressIcon()
                    : () => {
                        return;
                      };
                }}
              >
                <FontAwesome name={item.name} size={24} color={"white"} />
                <Text style={{ color: "white" }}>{item.title} </Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          meetuser={meetuser}
          setMeetuser={setMeetuser}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};
export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  cameraContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "85%",
  },
  activeUserContainer: {
    borderColor: "grey",
    borderWidth: 1,
    height: "30%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  activeUserContainerText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 30,
  },
});
