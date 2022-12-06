const http = require("http");
var crypto = require("crypto");

server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000,
  };

  if (req.method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (req.url == "/foo") {
    res.writeHead(200, headers);
    res.write(JSON.stringify("bar"));
    res.end();
  }
});

server.listen(8005, () => {
  console.log("listening on port 8005");
});

const WebSocket = require("ws");

const wss = new WebSocket.Server({
  noServer: true,
});

server.on("upgrade", async function upgrade(request, socket, head) {
  // we can write our auth logic here

  // if (Math.random() > 0.5) {
  //   return socket.end();
  // }

  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit("connection", ws, request);
  });
});

const wsConnectionsHashMap = {};

wss.on("connection", (ws) => {
  const id = crypto.randomBytes(30).toString("hex");

  wsConnectionsHashMap[id] = { ws: ws, room: null };
  ws.send(JSON.stringify({ type: "clientId", value: id }));

  ws.on("message", (data) => {
    let receivedMessage = JSON.parse(data.toString());

    if (receivedMessage.action == "join") {
      console.log(Object.keys(wsConnectionsHashMap).length);
      const clientConnection = wsConnectionsHashMap[receivedMessage.clientId];
      clientConnection.room = receivedMessage.room;
    }
    if (receivedMessage.action == "message") {
      let room = wsConnectionsHashMap[receivedMessage.clientId]?.room;

      if (!room) {
        return false;
      }

      for (let connectionObjectKey in wsConnectionsHashMap) {
        let connectionObject = wsConnectionsHashMap[connectionObjectKey];
        if (connectionObject.room == room) {
          connectionObject.ws.send(
            JSON.stringify({ type: "message", value: receivedMessage.value })
          );
        }
      }
    }
  });
});
