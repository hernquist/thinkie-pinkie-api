const { makeExecutableSchema } = require("graphql-tools");

const enums = require("./typeDefs/enums");
const inputs = require("./typeDefs/inputs");
const mutations = require("./typeDefs/mutations");
const queries = require("./typeDefs/queries");
const scalars = require("./typeDefs/scalars");
const types = require("./typeDefs/types");

const resolvers = require("./resolvers");

const typeDefs = `
  ${enums}
  ${inputs}
  ${mutations}
  ${queries}
  ${types}
  ${scalars}

  schema {
    query: Query
    mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
