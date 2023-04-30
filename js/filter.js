import {refute, mixArray} from './util.js';
import {hidePictures, showPhoto} from './picture-rendering.js';
import {RERENDER_DELAY} from './constants.js';

const Filters = {
  default: 'filter-default',
  random: 'filter-random',
  mostCommented: 'filter-discussed'
};

const photoFilters = document.querySelector('.img-filters');

let actualFilter = Filters.default;
let defaultPhotoFiltered = [];

const matchComments = (pictureA, pictureB) => (pictureB.comments.length - pictureA.comments.length);

const showFilters = (pictures) => {
  photoFilters.classList.remove('img-filters--inactive');
  defaultPhotoFiltered = pictures;
};

const onFiltersFormClick = function (evt) {
  const changePhotos = (cb) => {
    cb();
  };

  if (evt.target.nodeName === 'BUTTON') {
    evt.preventDefault();

    if (actualFilter !== evt.target.id) {
      photoFilters.querySelector(`#${actualFilter}`).classList.remove('img-filters__button--active');
      photoFilters.querySelector(`#${evt.target.id}`).classList.add('img-filters__button--active');
      actualFilter = evt.target.id;

      switch (actualFilter) {
        case Filters.default:
          changePhotos(refute(() => {
            hidePictures();
            showPhoto(defaultPhotoFiltered);
          }, RERENDER_DELAY));
          break;
        case Filters.random:
          changePhotos(refute(() => {
            hidePictures();
            showPhoto(mixArray(defaultPhotoFiltered.slice()).slice(10));
          }, RERENDER_DELAY));
          break;
        case Filters.mostCommented:
          changePhotos(refute(() => {
            hidePictures();
            showPhoto(mixArray(defaultPhotoFiltered.slice().sort(matchComments)));
          }, RERENDER_DELAY));
          break;
        default:
          changePhotos(refute(() => {
            hidePictures();
            showPhoto(mixArray(defaultPhotoFiltered));
          }, RERENDER_DELAY));
      }
    }
  }
};

photoFilters.addEventListener('click', onFiltersFormClick);

export {showFilters};
