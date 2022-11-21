module.exports = `
  type Query {
    user: User
    getThinkiePinkie(id: String!): ThinkiePinkie
    getRandomThinkiePinkie: ThinkiePinkie
  }
`;
