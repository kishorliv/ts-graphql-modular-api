import { mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { schema as userSchema, resolvers as userResolvers } from "./User";
import { schema as postSchema, resolvers as postResolvers } from "./Post";

const baseSchema = [
  /* GraphQL */ `
    type Query {
      domain: String
    }
    type Mutation {
      domain: String
    }
    schema {
      query: Query
      mutation: Mutation
    }
  `,
];

const schema = [...baseSchema, ...userSchema, ...postSchema];
const resolvers = mergeResolvers([userResolvers, postResolvers]);

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

export default executableSchema;
