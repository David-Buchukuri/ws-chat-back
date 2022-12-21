const onlineClients = require("../helpers/onlineClients");

class ChatController {
  static message(room, receivedMessage) {
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

  static typing(room, receivedMessage) {
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

  static close(rooms, roomId, clientId) {
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
}

module.exports = ChatController;
