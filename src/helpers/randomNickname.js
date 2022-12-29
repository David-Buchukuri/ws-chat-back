const animals = require("../../data/animals");
const adjectives = require("../../data/adjectives.js");

const randomNickname = () => {
  const adjective = adjectives[Math.round(Math.random() * adjectives.length)];
  const animal = animals[Math.round(Math.random() * adjectives.length)];
  return adjective + " " + animal;
};

module.exports = randomNickname;
