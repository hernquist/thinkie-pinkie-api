const Signup = require("./mutations/signup");
const Login = require("./mutations/login");
const CreateThinkiePinkie = require("./mutations/createThinkiePinkie");

module.exports = {
  Mutation: {
    ...Signup,
    ...Login,
    ...CreateThinkiePinkie,
  },
};
