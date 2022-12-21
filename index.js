const http = require("http");
const crypto = require("crypto");
const WebSocket = require("ws");
const randomNickname = require("./helpers/randomNickname.js");
const randomImage = require("./helpers/randomImage.js");
const fs = require("fs");
const path = require("path");
const ChatController = require("./controllers/chatController");
const onlineClients = require("./helpers/onlineClients.js");

server = http.createServer((req, res) => {
  if (req.url == "/create-room") {
    const roomId = crypto.randomBytes(30).toString("hex");
    // create empty room
    rooms[roomId] = {};

    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
    });
    res.write(JSON.stringify({ roomId: roomId }));
    res.end();
  }

  if (req.url == "/default") {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "image/jpeg",
    });
    const image = fs.readFileSync(
      path.resolve(__dirname, "./assets/default.jpg")
    );
    res.write(image);
    res.end();
  }
});

server.listen(8005, () => {
  console.log("listening on port 8005");
});

const wss = new WebSocket.Server({
  noServer: true,
});

server.on("upgrade", async function upgrade(request, socket, head) {
  roomId = request.url.substring(9);

  // check if room exists or not and if it has more than 1 client
  if (!rooms[roomId] || Object.keys(rooms[roomId]).length > 1) {
    socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
    socket.destroy();
    return;
  }

  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit("connection", ws, roomId);
  });
});

const rooms = {};

wss.on("connection", async (ws, roomId) => {
  const clientId = crypto.randomBytes(30).toString("hex");
  const nickname =
    crypto.randomBytes(20).toString("hex") + " " + randomNickname();
  const pfp = await randomImage();

  // putting newly connected user in appropriate room with unique id, nickname and pfp
  const room = rooms[roomId];
  room[clientId] = { ws: ws, nickname: nickname, pfp: pfp, isAlive: true };
  ws.send(JSON.stringify({ type: "clientId", value: clientId }));

  // sending user joined notification to all clients in the room
  for (let client in room) {
    room[client].ws.send(
      JSON.stringify({
        type: "join",
        value: nickname,
        onlineClients: onlineClients(room),
      })
    );
  }

  ws.on("message", (data) => {
    let receivedMessage = JSON.parse(data.toString());

    let room = rooms[receivedMessage?.roomId];
    if (!room) {
      return false;
    }
    // check if user is really in the room where he claims to be
    if (!room[receivedMessage?.clientId]) {
      return false;
    }

    if (receivedMessage.action == "message") {
      ChatController.message(room, receivedMessage);
    }

    if (receivedMessage.action == "typing") {
      ChatController.typing(room, receivedMessage);
    }
  });

  // on close, terminate connection. remove user from room and if no one is left in the room delete the room
  ws.on("close", () => {
    ChatController.close(rooms, roomId, clientId);
  });

  ws.on("pong", () => {
    room[clientId].isAlive = true;
  });
});

// monitoring for broken connections
const pingInterval = setInterval(() => {
  for (let roomId in rooms) {
    for (let clientId in rooms[roomId]) {
      let client = rooms[roomId][clientId];
      if (!client.isAlive) {
        client.ws.terminate();
        delete rooms[roomId][clientId];
        if (Object.keys(rooms[roomId]).length === 0) {
          delete rooms[roomId];
        }
      } else {
        client.isAlive = false;
        client.ws.ping();
      }
    }
  }
}, 8640000);

["uncaughtException", "unhandledRejection"].forEach((event) => {
  process.on(event, (err) => {
    console.log(`something went wrong ${event} error: ${err.stack || error}`);
  });
});
