const sum = (...args) => {
  if (args.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  if (args.some((val) => typeof val !== 'number')) {
    throw new Error('INVALID_ARGUMENT');
  }

  let res = 0;

  for (let i = 0; i < args.length; i++) {
    res += args[i];
  }

  return res;
};

export default sum;
