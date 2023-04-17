import {descriptions} from './data.js';

const userPhotos = document.querySelector('#picture');
const photoConteiner = document.querySelector('.picture');
const photoListFragment = document.createDocumentFragment();

userPhotos.forEach(({url, likes, comments}) => {
    const photoElement = userPhotos.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;

    photoListFragment.append(photoElement);
});

photoConteiner.innerHTML = '';
photoConteiner.append(photoListFragment);
