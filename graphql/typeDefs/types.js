module.exports = `
  type User {
    _id: String!
    name: String!
    email: String
  }

  type AuthObject {
    token: String
    message: String
  }
`;
