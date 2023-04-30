const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min) + min));

const verifyStringLength = (str, maxLength) => (str.length <= maxLength);

const mixArray = (array) => (array.sort(() => Math.random() - 0.5));

const isEscapeKey = (evt) => (evt.key === 'Escape');

function refute (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function getId () {
  let lastGetId = 0;

  return function () {
    lastGetId += 1;
    return lastGetId;
  };
}

function getRandomId (min, max) {
  const earlyValues = [];

  return function () {
    let actualValue = getRandomNumber(min, max);
    if (earlyValues.length >= (max - min + 1)) {
      throw new Error ({'text': `Перебраны все числа из диапазона от ${min} до ${max}`});
    }
    while (earlyValues.includes(actualValue)) {
      actualValue = getRandomNumber(min, max);
    }
    earlyValues.push(actualValue);
    return actualValue;
  };
}

export {getRandomNumber, verifyStringLength, mixArray, isEscapeKey, refute, getId, getRandomId};
