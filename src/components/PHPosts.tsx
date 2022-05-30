import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import ReturnQuery from "../interfaces/ReturnQuery";
import PHGrid from "./PHGrid";

const GET_POST_1 = gql`
  query GetFirstPost($first: Int) {
    posts(first: $first) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
const GET_POSTS = gql`
  query GetPosts {
    posts(first: 30) {
      edges {
        node {
          id
          name
          url
          thumbnail {
            url
            type
          }
        }
      }
    }
  }
`;
export default function PHPosts() {
  const { data, loading, error } = useQuery<ReturnQuery>(GET_POSTS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <div>Loading Posts</div>;
  if (error) return <div>Error: {error.message} </div>;
  return (
    <PHGrid>
      {data?.posts.edges.map(({ node }) => (
        <a href={node.url} key={node.id}>
          <PHGrid.Item img={node.thumbnail.url} name={node.name} />
        </a>
      ))}
    </PHGrid>
  );
}
