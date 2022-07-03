module.exports = `
  type Mutation {
    login(email: String, password: String): AuthObject
    signup(email: String, name: String, password: String): AuthObject
  }
`;
