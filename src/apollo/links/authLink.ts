import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const authLink = setContext((_, { headers, ...others }) => {
  console.log(others);

  return {
    headers: {
      ...headers,
      // Authorization: "Bearer " + token,
    },
  };
});

export default authLink;
