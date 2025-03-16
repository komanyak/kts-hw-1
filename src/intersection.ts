const intersection = (...args) => {
  if (args.length !== 2){
    throw new Error("INVALID_ARGUMENTS_COUNT");
  }

  let [arr1, arr2] = args;

  if(!Array.isArray(arr1) || !Array.isArray(arr2)){
    throw new Error("INVALID_ARGUMENT");
  }

  if (!arr1.every(num => typeof num === "number") || !arr2.every(num => typeof num === "number")){
    throw new Error("INVALID_ELEMENT_IN_ARRAY");
  }

  return Array.from(new Set(arr1.filter(num => arr2.includes(num))));
};

export default intersection;
