import express from "express";
import { graphqlHTTP } from "express-graphql";

import executableSchema from "./schema";

const app = express();
const PORT = 7000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
