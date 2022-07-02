const Signup = require("./mutations/signup");
const Login = require("./mutations/login");

module.exports = {
  Mutation: {
    ...Signup,
    ...Login,
  },
};
