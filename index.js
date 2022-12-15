const http = require("http");
var crypto = require("crypto");
const WebSocket = require("ws");

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

wss.on("connection", (ws, roomId) => {
  const clientId = crypto.randomBytes(30).toString("hex");

  // putting newly connected user in appropriate room with unique id
  rooms[roomId][clientId] = ws;

  ws.send(JSON.stringify({ type: "clientId", value: clientId }));

  ws.on("message", (data) => {
    let receivedMessage = JSON.parse(data.toString());

    if (receivedMessage.action == "message") {
      let room = rooms[receivedMessage?.roomId];
      if (!room) {
        return false;
      }
      // check if user is really in the room where he claims to be
      if (!room[receivedMessage.clientId]) {
        return false;
      }
      for (let client in room) {
        room[client].send(
          JSON.stringify({ type: "message", value: receivedMessage.value })
        );
      }
    }
  });

  // on close, terminate connection. remove user from room and if no one is left in the room delete the room
  ws.on("close", () => {
    rooms[roomId][clientId].terminate();
    delete rooms[roomId][clientId];
    if (Object.keys(rooms[roomId]).length === 0) {
      delete rooms[roomId];
    }
  });
});

["uncaughtException", "unhandledRejection"].forEach((event) => {
  process.on(event, (err) => {
    console.log(`something went wrong ${event} error: ${err.stack || error}`);
  });
});
