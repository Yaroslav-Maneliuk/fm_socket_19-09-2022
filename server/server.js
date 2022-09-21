const http = require("http");
const SocketServer = require("socket.io");
const app = require("./app");
const { port, SOCKET_EVENTS } = require("./configs");
const PORT = process.env.PORT || port;
const { Message, User } = require("./models");

const server = http.createServer(app);
const cors = { origin: "http://localhost:3000" };
const io = SocketServer(server, { cors });

io.on("connection", (socket) => {
  console.log("socket connect");
  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async (newMessage) => {
    try {
      // const {content, login} = newMessage
      const saveMessage = await Message.create(newMessage);
      await User.create(newMessage);
      io.emit(SOCKET_EVENTS.NEW_MESSAGE, saveMessage);
    } catch (error) {
      socket.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error);
    }
  });
  socket.on("disconnect", (reason) => {
    console.log("socket disconnect - reason", reason);
  });
});

server.listen(PORT, () => {
  console.log("Server stared at port = " + PORT);
});
