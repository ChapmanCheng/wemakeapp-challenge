import type { NextPage } from "next";
import { useContext } from "react";
import PHPosts from "../components/PHPosts";
import { TokenContext } from "../context/token";

const Home: NextPage = () => {
  const token = useContext(TokenContext);

  if (token === undefined) return <div>Fetching Token...</div>;

  return <PHPosts />;
};

export default Home;
