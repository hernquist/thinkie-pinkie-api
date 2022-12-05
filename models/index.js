const mongoose = require("mongoose");

const score = {
  attempts: Number,
  solved: Boolean,
  userId: String,
  thinkiePinkieId: String,
};

const user = {
  name: String,
  email: String,
  password: String,
  scores: [score],
};

const solution = {
  name: String,
  primary: Boolean,
};

const thinkiePinkie = {
  userId: String,
  hint: String,
  numberOfSyllables: Number,
  solutions: [solution],
  isAGameOfTheDay: Boolean,
  dayOfTheYear: Number,
  scores: [score],
};

const User = mongoose.model("User", user);
const ThinkiePinkie = mongoose.model("ThinkiePinkie", thinkiePinkie);
const Score = mongoose.model("Score", score);

module.exports = {
  User,
  ThinkiePinkie,
  Score,
};
