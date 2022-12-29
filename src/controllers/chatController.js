const onlineClients = require("../helpers/onlineClients");
const randomImage = require("../helpers/randomImage.js");
const randomNickname = require("../helpers/randomNickname.js");

const crypto = require("crypto");

class ChatControllerClass {
  message(room, receivedMessage) {
    for (let client in room) {
      room[client].ws.send(
        JSON.stringify({
          type: "message",
          value: receivedMessage.value,
          isMine: client == receivedMessage?.clientId ? true : false,
          pfp: room[receivedMessage?.clientId].pfp,
          nickname: room[receivedMessage?.clientId].nickname,
        })
      );
    }
  }

  typing(room, receivedMessage) {
    for (let client in room) {
      // don't send this notification to the sender himself
      if (receivedMessage?.clientId != client) {
        room[client].ws.send(
          JSON.stringify({
            type: "typing",
            value: room[receivedMessage?.clientId].nickname,
          })
        );
      }
    }
  }

  close(rooms, roomId, clientId) {
    rooms[roomId][clientId].ws.terminate();
    delete rooms[roomId][clientId];
    if (Object.keys(rooms[roomId]).length === 0) {
      delete rooms[roomId];
      return;
    }

    for (let client in rooms[roomId]) {
      let user = rooms[roomId][client];
      user.ws.send(
        JSON.stringify({
          type: "leave",
          value: user.nickname,
          onlineClients: onlineClients(rooms[roomId]),
        })
      );
    }
  }

  async join(ws, roomId, rooms) {
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

    return { clientId, nickname, pfp, room };
  }
}

const ChatController = new ChatControllerClass();

module.exports = ChatController;
