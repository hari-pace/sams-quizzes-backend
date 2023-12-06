const express = require("express");
const {
  getAllUsers,
  updateUser,
  createUser,
} = require("../controllers/pokemon");

const api = express.Router();

api.route("/pokemon").get(getAllUsers).put(updateUser).post(createUser);

module.exports = api;
