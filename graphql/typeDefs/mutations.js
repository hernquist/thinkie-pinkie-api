module.exports = `
  type Mutation {
    login(email: String, password: String): AuthObject
    signup(email: String, name: String, password: String): AuthObject
    createThinkiePinkie(hint: String, solutions: [SolutionInput], numberOfSyllables: Int): Boolean
    submitSolution(solved: Boolean, thinkiePinkieId: String): Boolean
  }
`;
