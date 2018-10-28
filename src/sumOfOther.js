module.exports = function sumOfOther(array) {
  // получает: [2, 3, 4, 1], а возращает: [8, 7, 6, 9]
  const { length } = array;
  const resArray = [];
  const sum = array.reduce((a, b) => a + b);
  for (let i = 0; i < length; i += 1) {
    resArray.push(sum - array[i]);
  }
  return resArray;
};
