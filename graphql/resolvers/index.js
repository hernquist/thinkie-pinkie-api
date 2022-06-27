const { Mutation } = require("./mutation");
const { Query } = require("./query");
const { Date } = require("./date");

module.exports = {
  Date,
  Mutation,
  Query,
  User: {
    practices: async ({ _id }, __, { Practice }) =>
      await Practice.find({ userId: _id }),
  },
  Module: {
    content: async ({ content }, ___, { Content }) => {
      let returnLists = [];

      for (const c of content) {
        const [list] = await Content.find({
          name: c.name,
          type: c.type,
        });
        returnLists.push(list);
      }

      return returnLists;
    },
  },
};
