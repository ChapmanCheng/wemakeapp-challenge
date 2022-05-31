import { setContext } from "@apollo/client/link/context";
const authLink = setContext(async (_, { headers, ...others }) => {
  const res = await fetch("https://api.producthunt.com/v2/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.NEXT_PUBLIC_PH_API_KEY || "",
      client_secret: process.env.NEXT_PUBLIC_PH_API_SECRET || "",
      grant_type: "client_credentials",
    }),
  });

  const data = await res.json();

  return {
    headers: {
      ...headers,
      Authorization: "Bearer " + data.access_token,
    },
  };
});

export default authLink;
