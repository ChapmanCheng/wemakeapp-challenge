import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((err) =>
      console.error(
        `[GraphQL Error]: ${err.message}, location: ${err.locations}`
      )
    );

  if (networkError) console.error(`[Network Error]: ${networkError.message}`);
});

export default errorLink;
