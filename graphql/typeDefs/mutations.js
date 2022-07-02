module.exports = `
  type Mutation {
    login(email: String, password: String): AuthObject
    signup(email: String, password: String): AuthObject
  }
`;
