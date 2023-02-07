const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbinit");
const { default: mongoose } = require("mongoose");
const multer = require("multer");

// SOCKET IO
const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("user disconnected");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");
const localRoutes = require("./routes/localRoutes");
const conversationRoutes = require("./routes/conversationsRoutes");
const messageRoutes = require("./routes/messagesRoutes");
const { remove } = require("./models/Users");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

app.use(morgan("dev"));

app.disable("etag");
// morgan.token("body", (req) => {
//   return JSON.stringify(req.body);
//});
// app.use(
//   morgan(":method :url :status :body :response-time ms - :res[content-length]")
// );

connectDB();

app.get("/", (req, res) => res.send("Welcome to Ask A Local"));

app.use("/local", localRoutes);
app.use("/user", userRoutes);
app.use("/conversations", conversationRoutes);
app.use("/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
