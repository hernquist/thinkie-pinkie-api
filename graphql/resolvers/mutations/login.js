const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");

module.exports = {
  login: async (__, { email, password }, { User, SECRET }) => {
    const user = await User.findOne({ email: email });
    console.log(user);
    let message = "";
    if (!user) {
      return {
        token: null,
        message: "No user with that email",
      };
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      message = "Incorrect password";
    }

    if (message) {
      return {
        message,
        token: null,
      };
    }
    const token = jwt.sign({ user: _.pick(user, ["_id", "name"]) }, SECRET, {
      expiresIn: "1y",
    });
    return {
      token,
      message,
    };
  },
};
