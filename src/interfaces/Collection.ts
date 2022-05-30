type Edge = {
  node: {
    id: string;
    name: string;
  };
  cursor: string;
};

type Collections = {
  collections: {
    totalCount: number;
    edges: Edge[];
  };
};
export default Collections;
