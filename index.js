const http = require("http");
var crypto = require("crypto");
const WebSocket = require("ws");

server = http.createServer((req, res) => {
  if (req.url == "/create-room") {
    const roomId = crypto.randomBytes(30).toString("hex");
    // create empty room
    rooms[roomId] = {};
    console.log(rooms);

    res.writeHead(200, headers);
    res.write(JSON.stringify("bar"));
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
  // check if room exists or not
  if (!rooms[request.roomId]) {
    socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
    socket.destroy();
    return;
  }
  // check if room has more than 1 client
  if (Object.keys(rooms[request.roomId]).length > 1) {
    socket.write("HTTP/1.1 403 Forbidden\r\n\r\n");
    socket.destroy();
    return;
  }
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit("connection", ws, request.roomId);
  });
});

const rooms = {};

wss.on("connection", (ws, roomId) => {
  const clientId = crypto.randomBytes(30).toString("hex");

  rooms[roomId][clientId] = ws;

  ws.send(JSON.stringify({ type: "clientId", value: id }));

  ws.on("message", (data) => {
    let receivedMessage = JSON.parse(data.toString());

    if (receivedMessage.action == "message") {
      let room = rooms[receivedMessage.roomId];

      if (!room) {
        return false;
      }

      // check if user is really in the room where he claims
      if (!room[receivedMessage.clientId]) {
        return false;
      }
      for (let client in room) {
        client.ws.send(
          JSON.stringify({ type: "message", value: receivedMessage.value })
        );
      }
    }
  });

  // on close remove user from room and if room length == 0 delete the room
  // ws.on("close", () => {
  //   delete wsConnectionsHashMap[id];
  // });
});

["uncaughtException", "unhandledRejection"].forEach((event) => {
  process.on(event, (err) => {
    console.log(`something went wrong ${event} error: ${err.stack || error}`);
  });
});
