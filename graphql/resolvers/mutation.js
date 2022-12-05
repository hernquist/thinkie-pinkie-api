const Signup = require("./mutations/signup");
const Login = require("./mutations/login");
const CreateThinkiePinkie = require("./mutations/createThinkiePinkie");
const SubmitSolution = require("./mutations/submitSolution");

module.exports = {
  Mutation: {
    ...Signup,
    ...Login,
    ...CreateThinkiePinkie,
    ...SubmitSolution,
  },
};
