const DEFAULT_RENDER_COMMENTS = 5;

const DESCRIPTIONS = [
  'Счастье любит тишину.',
  'Счастливые часов не наблюдают.',
  'Не все то золото, что блестит.',
  'Не знаешь, где найдешь, где потеряешь.',
  'Счастье там, где нас любят.',
  'Счастлив тот, кто у себя дома.',
  'Без труда не выловишь и рыбку из пруда.',
  'Дважды в год лето не бывает.',
  'Говори лишь о том, что знаешь.',
  'Где много слов там мало дел.',
  'Где нет знаний там нет и смелости.',
  'Чем больше узнаешь тем сильнее станешь.'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Артем',
  'Ниикита',
  'Дмитрий',
  'Василий',
  'Иван',
  'Артемида',
  'Гарри',
  'Антон',
  'Клара'
];

const RERENDER_DELAY = 500;

const DEFAULT_FILTER_VALUE = 100;
const Filters = {
  none: {
    effect: '',
    minValue: 0,
    maxValue: 100,
    step: 1,
    filter: '',
    measurement: '',
    hideFilter: true
  },
  chrome: {
    effect: 'chrome',
    minValue: 0,
    maxValue: 1,
    step: 0.1,
    filter: 'grayscale',
    measurement: '',
    hideFilter: false
  },
  sepia: {
    effect: 'sepia',
    minValue: 0,
    maxValue: 1,
    step: 0.1,
    filter: 'sepia',
    measurement: '',
    hideFilter: false
  },
  marvin: {
    effect: 'marvin',
    minValue: 0,
    maxValue: 100,
    step: 1,
    filter: 'invert',
    measurement: '%',
    hideFilter: false
  },
  phobos: {
    effect: 'phobos',
    minValue: 0,
    maxValue: 3,
    step: 0.1,
    filter: 'blur',
    measurement: 'px',
    hideFilter: false
  },
  heat: {
    effect: 'heat',
    minValue: 1,
    maxValue: 3,
    step: 0.1,
    filter: 'brightness',
    measurement: '',
    hideFilter: false
  }
};

const MAX_HASH_TAGS_VALUE = 5;
const MAX_HASH_TAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;

const PHOTO_SCALE_STEP = 25;
const PHOTO_SCALE_DEFAULT = 100;

export {DEFAULT_RENDER_COMMENTS, DESCRIPTIONS, MESSAGES, NAMES, RERENDER_DELAY, DEFAULT_FILTER_VALUE, Filters, MAX_HASH_TAGS_VALUE, MAX_HASH_TAG_LENGTH, MAX_COMMENT_LENGTH, PHOTO_SCALE_STEP, PHOTO_SCALE_DEFAULT};
