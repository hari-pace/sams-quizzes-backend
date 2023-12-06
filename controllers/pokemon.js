const User = require("../schemas/UserPokemon");

// get all users
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find().sort({ score: -1 });
    if (!user.length) {
      res.status(200).json({ msg: "No user in the DB" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// update an user
const updateUser = async (req, res) => {
  try {
    const { username, score, wrongGuesses } = req.body;
    const user = await User.findOneAndUpdate(
      { username: username },
      // {
      //   $inc: { score: 1 },
      // },
      { score: score },
      {
        new: true, // update and give me the new data
        upsert: true,
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    // We grab exactly the keys that we have in the blueprint (Schema)
    const { username, score, wrongGuesses } = req.body;
    const user = await User.create({ username, score, wrongGuesses });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
};
