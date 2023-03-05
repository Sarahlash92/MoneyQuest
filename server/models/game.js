const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  questions: [{
    text: String,
    answer: Boolean
  }]
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
