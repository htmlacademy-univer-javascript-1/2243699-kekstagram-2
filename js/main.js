import {showPhoto} from './pictures.js';
import './new-picture.js';
import  './picture-form.js';
import {inputData} from './api.js';
import {indicateError} from './error.js';
import {showFilters} from './filter.js';

inputData((pictures) => {
  showPhoto(pictures);
  showFilters(pictures);
}, indicateError);
