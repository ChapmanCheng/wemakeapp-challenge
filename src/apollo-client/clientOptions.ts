import {
  ApolloClientOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const clientOptions: ApolloClientOptions<NormalizedCacheObject> = {
  cache: new InMemoryCache(),
  name: "ProductHuntApi",
  connectToDevTools: process.env.NODE_ENV === "development",
  uri: process.env.NEXT_PUBLIC_PH_URI,
};

export default clientOptions;
