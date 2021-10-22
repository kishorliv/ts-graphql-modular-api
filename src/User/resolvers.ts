import { posts, users } from "../db";

const rootResolvers = {
  Query: {
    users: () => users,
    user: (_: any, { userId }: { userId: number }) => {
      return users.find((user) => user.id === userId);
    },
  },
  User: {
    posts: (user: { id: number }) => {
      return posts.filter((post) => post.userId === user.id);
    },
  },
};

export default rootResolvers;
