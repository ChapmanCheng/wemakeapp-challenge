import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { useContext, useState } from "react";
import GET_POST from "../apollo-client/queries/GET_POST";
import { TokenContext } from "../context/token";

const Home: NextPage = () => {
  const token = useContext(TokenContext);
  const { data, loading, error } = useQuery(GET_POST);

  if (!token) return <div>Fetching Token...</div>;
  if (loading) return <div>Loading Posts</div>;
  if (error) return <div>Error! </div>;

  return <div>Hello World - {token?.access_token}</div>;
};

export default Home;
