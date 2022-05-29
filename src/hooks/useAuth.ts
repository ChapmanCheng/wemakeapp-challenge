import { useEffect, useState } from "react";
import Body from "../interfaces/Body";
import PHToken from "../interfaces/PHToken";

const body: Body = {
  client_id: process.env.NEXT_PUBLIC_PH_API_KEY || "",
  client_secret: process.env.NEXT_PUBLIC_PH_API_SECRET || "",
  grant_type: "client_credentials",
};

export default function useAuth() {
  const [token, setToken] = useState<PHToken>();

  const fetchToken = async (): Promise<void> => {
    const res = await fetch("https://api.producthunt.com/v2/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    setToken(data);
  };

  useEffect(() => {
    fetchToken();
    return () => setToken(undefined);
  }, []);

  return token;
}
