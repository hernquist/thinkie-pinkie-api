const mongoose = require("mongoose");

const user = {
  name: String,
  email: String,
  password: String,
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
};

const User = mongoose.model("User", user);
const ThinkiePinkie = mongoose.model("ThinkiePinkie", thinkiePinkie);

module.exports = {
  User,
  ThinkiePinkie,
};
