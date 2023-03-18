const PHOTOS_COUNT = 25;
const NAMES = ['Артем', 'Никита', 'Дмитрий', 'Василий', 'Иван'];
const DESCRIPTIONS = Array.from({length: PHOTOS_COUNT}, (_, i) => 'Описание ${i}');
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const COMMENT_IDS = [];

const isCorrectLength = (str, maxLength) => str.length <= maxLength;

const getRandomLikes = () => getRandomInt(15, 200);

const getRandomElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

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
    return Math.round(Math.random() * (toFrom - fromTemp) + fromTemp);
  }
}

const getId = (() => {
  let id = 1;
  return () => id++;
})();

function getCommentId() {
  let id = getRandomInt(1, 1000);
  while (COMMENT_IDS.includes(id)) {
    id = getRandomInt(1, 1000);
  }
  return id;
}

function generateComment() {
  const messageTexts = [];
  for (let i = 0; i < getRandomInt(1, 2); i++) {
    messageTexts.push(getRandomElement(MESSAGES));
  }
  return {
    id: getCommentId(),
    avatar: 'img/avatar-${getRandomInt(1, 6)}.svg',
    message: messageTexts.join(''),
    name: getRandomElement(NAMES)
  };
}

function generateDescription() {
  const comments = Array.from({length: getRandomInt(0, 3)}, generateComment);
  const id = getId();
  return {
    id: id,
    url: 'photos/${id}.jpg',
    description: DESCRIPTIONS[id - 1],
    likes: getRandomLikes(),
    comments: comments
  };
}

const descriptions = Array.from({length: PHOTOS_COUNT}, generateDescription);

isCorrectLength(descriptions, PHOTOS_COUNT);