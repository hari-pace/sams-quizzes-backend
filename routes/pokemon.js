const express = require("express");
const { getAllUsers, updateUser } = require("../controllers/pokemon");

const api = express.Router();

api.route("/pokemon").get(getAllUsers).put(updateUser);

module.exports = api;
