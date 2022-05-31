import React, { PropsWithChildren, useEffect, useState } from "react";
import Body from "../interfaces/Body";
import PHToken from "../interfaces/PHToken";

type Props = PropsWithChildren<unknown>;

const body: Body = {
  client_id: process.env.NEXT_PUBLIC_PH_API_KEY || "",
  client_secret: process.env.NEXT_PUBLIC_PH_API_SECRET || "",
  grant_type: "client_credentials",
};

export const TokenContext = React.createContext<PHToken | undefined>(undefined);

export default function TokenProvider({ children }: Props) {
  const [token, setToken] = useState<PHToken>();

  const fetchToken = async (): Promise<PHToken> => {
    const res = await fetch("https://api.producthunt.com/v2/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetchToken()
      .then((newToken) => setToken(newToken))
      .catch(console.error);
    return () => setToken(undefined);
  }, []);

  return (
    <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
  );
}
