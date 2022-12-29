const onlineClients = (room) => {
  const clients = [];
  for (let client in room) {
    clients.push(room[client].nickname);
  }

  return clients;
};

module.exports = onlineClients;
