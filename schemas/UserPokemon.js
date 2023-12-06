const mongoose = require("mongoose");

const userPokemonSchema = new mongoose.Schema({
  username: {
    type: String,
    default: "Sam",
  },
  score: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Pokemon - user", userPokemonSchema);
