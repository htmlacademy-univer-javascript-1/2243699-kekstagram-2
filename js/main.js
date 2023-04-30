import {showPhoto} from './picture-rendering.js';
import './new-picture.js';
import  './form.js';
import {inputData} from './api.js';
import {indicateError} from './error.js';
import {showFilters} from './filter.js';
import './download.js';

inputData((pictures) => {
  showPhoto(pictures);
  showFilters(pictures);
}, indicateError);
