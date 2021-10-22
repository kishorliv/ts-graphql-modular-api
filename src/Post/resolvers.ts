import { posts, users } from "../db";

const rootResolvers = {
  Query: {
    posts: () => posts,
    post: (_: any, { postId }: { postId: number }) => {
      return posts.find((post) => post.id === postId);
    },
  },
  Mutation: {
    likePost: (_: any, { postId }: { postId: number }) => {
      const post = posts.find((p) => p.id === postId);
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.likes += 1;
      return post;
    },
  },
  Post: {
    user: (post: any) => {
      return users.find((user) => user.id === post.userId);
    },
  },
};

export default rootResolvers;
