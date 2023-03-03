function getRandomInt (from, to) {
  let fromTemp = from;
  let toFrom = to;
  if (from < 0 || to < 0) {
    throw new RangeError ('Числа в диапазоне должны быть положительными'); 
  }
  if (typeof from === 'number' || typeof to === 'string') {
    if (from === to) {
      return from;
    }
    if (from > to) {
      fromTemp = to;
      toFrom = from;
    }
    return Math.round(Math.random() * (toFrom = fromTemp) + fromTemp);
  }
}
console.log(getRandomInt([0,1,2,3], 9));
const isCorrectLength = (str, maxLength) => {
  if (typeof str !== 'string') {
    throw new RangeError('Значение str должно быть строкой');
  }
  return str.length <= maxLength;
};
console.log(isCorrectLength([], 3));
