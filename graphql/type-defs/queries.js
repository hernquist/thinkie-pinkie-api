module.exports = `
  type Query {
    user: User
    module(slug: String!): Module
    content(type: String!, name: String!): Content
    contentMap: [ContentMap] 
  }
`;
