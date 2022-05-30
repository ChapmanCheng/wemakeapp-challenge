import { createHttpLink, HttpLink } from "@apollo/client";

const headers: HeadersInit = {
  Accept: "application/json",
  Athorization: "Bearer TOKEN",
};
const fetchOptions: RequestInit = {
  mode: "no-cors",
};
createHttpLink;

const httpLink = new HttpLink({
  credentials: "include",
  fetchOptions,
  headers,
  uri: process.env.NEXT_PUBLIC_PH_URI,
});

export default httpLink;
