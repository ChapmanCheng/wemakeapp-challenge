import {
  ApolloClientOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import httpLink from "./links/httpLink";

const clientOptions: ApolloClientOptions<NormalizedCacheObject> = {
  cache: new InMemoryCache(),
  name: "ProductHuntApi",
  link: httpLink,
  connectToDevTools: process.env.NODE_ENV === "development",
};

export default clientOptions;
