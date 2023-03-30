const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  "id": {
    type: Number,
  },
  "name": {
    "english": {
      type: String,
      maxLength: [20, "Name should be less than 20 characters long"]
    },
    "japanese": String,
    "chinese": String,
    "french": String
  },
  "type": {
    type: [String],
  },
  "base": {
    "HP": Number,
    "Attack": Number,
    "Defense": Number,
    'Speed Attack': Number,
    'Speed Defense': Number,
    "Speed": Number
  }
});



module.exports = pokemonSchema;