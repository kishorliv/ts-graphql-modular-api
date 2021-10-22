import Post from "./types/Post";

const typeDefs = /* GraphQL */ `
  extend type Query {
    posts: [Post]
    post(id: Int!): Post
  }

  extend type Mutation {
    likePost(postId: Int!): Post
  }
`;

export default [typeDefs, Post];
