import { HttpLink } from "@apollo/client";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Host: "api.producthunt.com",
};
const fetchOptions: RequestInit = {
  mode: "no-cors",
};

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_PH_URI,
  fetchOptions,
  headers,
});

export default httpLink;
