export default /* GraphQL */ `
  type Post {
    id: Int!
    title: String
    user: User
    likes: Int
  }
`;
