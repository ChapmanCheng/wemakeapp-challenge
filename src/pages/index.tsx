import type { NextPage } from "next";
import useAuth from "../hooks/useAuth";

const Home: NextPage = () => {
  const token = useAuth();

  return <div>Hello World</div>;
};

export default Home;
