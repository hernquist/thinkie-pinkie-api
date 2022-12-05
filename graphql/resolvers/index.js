const { Mutation } = require("./mutation");
const { Query } = require("./query");
const { Date } = require("./date");

module.exports = {
  Date,
  Mutation,
  Query,
  // User: {
  //   scores: async ({ _id }, __, { Score }) => await Score.find({ userId: _id }),
  // },
  // ThinkiePinkie: {
  //   scores: async ({ _id }, ___, { Score }) =>
  //     await Score.find({ thinkPinkieId: _id }),
  // },
};
