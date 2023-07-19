const express = require("express");

const app = express();

const server = require("http").Server(app);

const io = require("socket.io")(server);

const port = 4001;

let user = [];

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const addUser = (userName, roomId) => {
  user.push({ userName, roomId });
};

const getRoomUser = (roomId) => {
  const roomUser = user.filter((user) => user.roomId === roomId);
  return roomUser;
};
const userLeave = (userName) => {
  user = user.filter((user) => user.userName !== userName);
};

console.log("user", user);

io.on("connection", (socket) => {
  console.log("someone connected!");
  socket.on("join-room", ({ roomId, userName }) => {
    console.log("User Join Room!");
    console.log(roomId, userName);
    socket.join(roomId);
    addUser(userName, roomId);

    socket.to(roomId).emit("user-connected", userName);
    io.to(roomId).emit("all-users", getRoomUser(roomId));

    socket.on("disconnect", () => {
      console.log(" user disconnected");
      socket.leave(roomId);
      userLeave(userName);
      io.to(roomId).emit("all-users", getRoomUser(roomId));
    });
  });
});

server.listen(port, () => {
  console.log("listening on port " + port);
});
