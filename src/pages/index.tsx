import type { NextPage } from "next";
import { useContext } from "react";
import { TokenContext } from "../context/token";

const Home: NextPage = () => {
  const token = useContext(TokenContext);
  return <div>Hello World - {token?.access_token}</div>;
};

export default Home;
