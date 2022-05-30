import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import links from "./links";

const isDev = process.env.NODE_ENV === "development";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: isDev,
  link: links,
  name: "ProductHuntApi",
});

export default client;
