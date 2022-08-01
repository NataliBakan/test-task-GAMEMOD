const fs = require('fs');

const PLAYERS_FILE = 'storage/players.json';

if (!fs.existsSync(PLAYERS_FILE)) {
  if (!fs.existsSync('storage')) {
    fs.mkdirSync('storage');
  }

  fs.writeFileSync(PLAYERS_FILE, {});
}

const players = JSON.parse(fs.readFileSync(PLAYERS_FILE));

const sendPlayers = (req, res) => {
  res.send(players);
};

module.exports.sendPlayers = sendPlayers;