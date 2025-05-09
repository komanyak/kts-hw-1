const multiply = (a) => {
  if (typeof a !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
  return (b) => {
    if (typeof b !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }

    return a * b;
  };
};

export default multiply;
