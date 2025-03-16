const getNumberProps = (obj) => {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
    throw new Error('INVALID_ARGUMENT');
  }

  let res: string[] = [];

  const myFunc = (a) => {
    for (let key in a) {
      if (typeof a[key] === 'number') {
        res.push(key);
      }

      if (typeof a[key] === 'object') {
        myFunc(a[key]);
      }
    }
  };
  myFunc(obj);

  res = res.sort();

  return res;
};

export default getNumberProps;
