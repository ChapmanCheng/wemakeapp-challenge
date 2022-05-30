import type { NextPage } from "next";
import { useContext } from "react";
import PHPosts from "../components/PHPosts";
import { TokenContext } from "../context/token";

const Home: NextPage = () => {
  const token = useContext(TokenContext);

  if (token === undefined)
    return <div className="container mx-auto">Fetching Token...</div>;

  return (
    <div className="container mx-auto">
      <PHPosts />
    </div>
  );
};

export default Home;
