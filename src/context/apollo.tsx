import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
} from "@apollo/client";
import {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import clientOptions from "../apollo-client/clientOptions";
import httpLink from "../apollo-client/links/httpLink";
import { TokenContext } from "./token";

const defaultClient = new ApolloClient(clientOptions);

function ApolloProviderWithAuth({ children }: PropsWithChildren<unknown>) {
  const token = useContext(TokenContext);
  const authorization = useMemo(() => {
    if (token) return `${token.token_type} ${token.access_token}`;
    return "";
  }, [token]);
  const [client, setClient] = useState(defaultClient);

  useEffect(() => {
    if (authorization) {
      const authLink = new ApolloLink((operation, forward) => {
        operation.setContext({ headers: { authorization } });
        return forward(operation);
      });
      setClient(
        new ApolloClient({ ...clientOptions, link: concat(authLink, httpLink) })
      );
    }

    return () => setClient(defaultClient);
  }, [authorization]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloProviderWithAuth;
