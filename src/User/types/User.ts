export default /* GraphQL */ `
  type User {
    id: Int!
    firstname: String
    lastname: String
    posts: [Post]
  }
`;
