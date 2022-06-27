const Signup = require("./mutations/signup");
const Login = require("./mutations/login");
const SavePractice = require("./mutations/savePractice");
const SetUpNextModules = require("./mutations/setUpNextModules");

module.exports = {
  Mutation: {
    ...Signup,
    ...Login,
    ...SavePractice,
    ...SetUpNextModules,
  },
};
