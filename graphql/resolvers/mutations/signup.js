const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");

module.exports = {
  signup: async (__, args, context) => {
    const User = context.User;
    const user = args;
    const users = await User.find({});

    const email = users.some((u) => u.email === user.email);

    if (email) {
      return {
        token: null,
        message: "A user with that email already exists.",
      };
    }

    user.password = await bcrypt.hash(args.password, 12);

    const savedUser = await User(user).save();

    const token = jwt.sign(
      { user: _.pick(savedUser, ["_id", "name"]) },
      context.SECRET,
      { expiresIn: "1y" }
    );

    context.token = token;
    return {
      token,
      message: "",
    };
  },
};
