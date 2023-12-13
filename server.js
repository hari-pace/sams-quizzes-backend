const express = require("express");
const app = express();
const connectDB = require("./dbinit");
const cors = require("cors");
require("dotenv").config();
const port = 3000;
const userPokemon = require("./routes/pokemon");
const userCountries = require("./routes/countries");
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/leaderboard/pokemon", userPokemon);
app.use("/leaderboard/countries", userCountries);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
