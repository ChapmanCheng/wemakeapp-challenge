import { HttpLink } from "@apollo/client";

const fetchOptions: RequestInit = {
  mode: "no-cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Host: "api.producthunt.com",
  },
};

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_PH_URI,
  fetchOptions,
});

export default httpLink;
