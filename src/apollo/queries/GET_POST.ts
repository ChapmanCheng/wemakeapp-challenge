import { gql } from "@apollo/client";

const GET_POST = gql`
  query GetFirstPost {
    query {
      posts(first: 1) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export default GET_POST;
