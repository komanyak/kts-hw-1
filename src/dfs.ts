const dfs = (graph: object) => {
  if (typeof graph !== 'object' || Array.isArray(graph) || graph === null) {
    throw new Error('INVALID_ARGUMENT');
  }

  let res: string[] = [];

  const myDFS = (v: string) => {
    res.push(v);
    for (let u of graph[v]) {
      myDFS(u);
    }
  };

  const root = Object.keys(graph)[0];
  if (root) {
    myDFS(root);
  }

  return res;
};

export default dfs;
