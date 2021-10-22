import User from "./types/User";

const typeDefs = /* GraphQL */ `
  extend type Query {
    users: [User]
    user(id: Int!): User
  }
`;

export default [typeDefs, User];
