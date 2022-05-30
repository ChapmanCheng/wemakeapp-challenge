import { HttpLink } from "@apollo/client";
import mime from "mime-types";

const jsonMimeType = mime.lookup("json") || "";
const jsonContentType = mime.contentType("json") || "";
const devToken = process.env.NEXT_PUBLIC_PH_DEV_TOKEN;

const httpLink = new HttpLink({
  credentials: "include",
  headers: {
    Accept: jsonMimeType,
    "Content-Type": jsonContentType,
    Host: "api.producthunt.com",
    ...(devToken ? { Authorization: "Bearer " + devToken } : {}),
  },
  uri: "https://api.producthunt.com/v2/api/graphql",
});

export default httpLink;
