import { from } from "@apollo/client";
import authLink from "./authLink";
import errorLink from "./errorLink";
import httpLink from "./httpLink";

export default from([errorLink, authLink, httpLink]);
