module.exports = `
  type User {
    _id: String!
    name: String!
    email: String
  }

  type AuthObject {
    token: String
    message: String
    user: User
  }

  type Solution {
    name: String
    primary: Boolean
  }

  type ThinkiePinkie {
    _id: String
    hint: String
    solutions: [Solution]
    numberOfSyllables: Int
    isAGameOfTheDay: Boolean
    dayOfTheYear: Int
  }
`;
