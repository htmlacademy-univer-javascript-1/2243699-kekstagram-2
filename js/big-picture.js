import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('big-picture');
const bigPictureCloseBtn = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const socialCommentsCount = document.querySelector('.comments-count');
const commentsLoaderBtn = document.querySelector('.comments-loader');

const COMMENT_COUNTER = 5;

let showingComments = 0;
let comments = [];

const fillCommentData = (comment) => {
  const commentClone = commentTemplate.cloneNode(true);
  const socialPicture = commentClone.querySelector('.social__picture');
  socialPicture.src = comment.avatar;
  socialPicture.alt = comment.name;
  commentClone.querySelector('.social__text').textContent = comment.message;
  return commentClone;
};

const renderComments = (commentCurrent) => {
  const fragment = new DocumentFragment();
  commentCurrent.forEach((comment) => {
    const element = fillCommentData(comment);
    fragment.append(element);
  });
  commentsList.append(fragment);
};

const fillCommentsCount = () => {
  socialCommentsCount.textContent = comments.length;
};

const showComments = () => {
  const arrayComments = comments.slice(showingComments, showingComments + COMMENT_COUNTER);
  showingComments += COMMENT_COUNTER;
  showingComments = Math.min(showingComments, comments.length);
  renderComments(arrayComments);
  fillCommentsCount();
  if (showingComments >= comments.length) {
    commentsLoaderBtn.classList.add('hidden');
  } else {
    commentsLoaderBtn.classList.remove('hidden');
  }
};

const fillPictureData = (photo) => {
  bigPicture.querySelector('img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  commentsList.innerHTML = '';
  comments = photo.comments;
  showComments();
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  commentsLoaderBtn.removeEventListener('click', onCommentsLoaderBtn);
  bigPictureCloseBtn.removeEventListener('click', onBigPictureCloseClick);
  document.removeEventListener('keydown', onBigPictureEscKeydown);

  showingComments = 0;
  comments = [];
};

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  commentsLoaderBtn.addEventListener('click', onCommentsLoaderBtn);
  bigPictureCloseBtn.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onBigPictureEscKeydown);

  fillPictureData(photo);
};

function onBigPictureCloseClick (evt) {
  evt.preventDefault();
  closeBigPicture();
}

function onBigPictureEscKeydown (evt) {
  if (isEscapeKey(evt) && !evt.target.closest('.social__footer-text')) {
    evt.preventDefault();
    closeBigPicture();
  }
}

function onCommentsLoaderBtn (evt) {
  evt.preventDefault();
  showComments();
}

const onPictureClick = (photo) => {
  openBigPicture(photo);
};

export {openBigPicture, closeBigPicture};
