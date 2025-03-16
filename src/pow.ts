const pow = (...args) => {
  if (typeof args[0]!== "number"){
    throw new Error('INVALID_ARGUMENT');
  }

  if (args.length == 1) {
    let base = args[0];
    return (exp) => {
      if (typeof exp !== 'number') {
        throw new Error('INVALID_ARGUMENT');
      }

      return base ** exp;
    };
  }

  if (typeof args[1]!== "number"){
    throw new Error('INVALID_ARGUMENT');
  }

  return args[0] ** args[1];
};

export default pow;
