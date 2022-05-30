import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { errorLink, httpLink } from "./links";

const isDev = process.env.NODE_ENV === "development";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: isDev,
  link: from([errorLink, httpLink]),
  name: "ProductHuntApi",
});

export default client;
