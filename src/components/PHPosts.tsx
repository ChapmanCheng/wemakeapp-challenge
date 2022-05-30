import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

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

export default function PHPosts() {
  const { data, loading, error } = useQuery(GET_POST_1, {
    variables: { $first: 1 },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <div>Loading Posts</div>;
  if (error) return <div>Error: {error.message} </div>;
  return <div>{JSON.stringify(data)}</div>;
}
