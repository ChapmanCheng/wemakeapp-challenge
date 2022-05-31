import Node from "./Node";

type QueryReturn = {
  posts: {
    edges: { node: Node }[];
  };
};

export default QueryReturn;
