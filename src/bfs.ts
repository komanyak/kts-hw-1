const bfs = (graph: object) => {
  if (typeof graph !== 'object' || Array.isArray(graph) || graph === null) {
    throw new Error('INVALID_ARGUMENT');
  }

  let res: string[] = [];
  let queue: string[] = [];

  const root = Object.keys(graph)[0];
  if (!root) return res;

  queue.push(root);

  while (queue.length > 0) {
    let v = queue.shift()!;
    res.push(v);
    queue.push(...graph[v]);
  }

  return res;
};

export default bfs;
