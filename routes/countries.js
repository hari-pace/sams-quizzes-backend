const express = require("express");
const {
  getAllUsers,
  updateUser,
  createUser,
} = require("../controllers/countries");

const api = express.Router();

api.route("/countries").get(getAllUsers).put(updateUser).post(createUser);

module.exports = api;
