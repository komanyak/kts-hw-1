const sort = (str) => {
  if (typeof str !== 'string') {
    throw new Error('INVALID_ARGUMENT');
  }
  let words = str.toLowerCase().split(' ');

  let sorted_words = words.map((x) => x.split('').sort().join(''));

  let res = sorted_words.sort((a, b) => a.length - b.length).join(" ");

  return res;
};

export default sort;
