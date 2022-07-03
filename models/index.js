const mongoose = require("mongoose");

const user = {
  name: String,
  email: String,
  password: String,
  //   practices: [practice],
  //   upNextModules: [String],
};

const solution = {
  name: String,
  primary: Boolean,
};

const thinkiePinkie = {
  hint: String,
  numberOfSyllables: Number,
  solutions: [solution],
  isAGameOfTheDay: Boolean,
  dayOfTheYear: Number,
};

// const practice = {
//   userId: String,
//   completedOn: String,
//   topic: String,
//   engagement: String,
//   level: Number,
//   totalQuestion: Number,
//   totalCorrect: Number,
//   score: Number,
//   assessmentType: String,
// };

// const contentType = mongoose.Schema({
//   name: String,
//   type: String,
// });

// const moduleType = {
//   content: [contentType],
//   numberOfTurns: Number,
//   slug: String,
// };

// const content = {
//   name: String,
//   type: String,
//   list: [String],
// };

// const contentMap = {
//   topic: String,
//   engagement: [String],
//   level: [Number],
//   assessment: [[String]],
// };

const User = mongoose.model("User", user);
const ThinkiePinkie = mongoose.model("ThinkiePinkie", thinkiePinkie);
// const Practice = mongoose.model("Practice", practice);
// const Module = mongoose.model("Module", moduleType);
// const Content = mongoose.model("Content", content);
// const ContentMap = mongoose.model("Content-Map", contentMap);

module.exports = {
  User,
  ThinkiePinkie,
  //   Practice,
  //   Module,
  //   Content,
  //   ContentMap,
};
