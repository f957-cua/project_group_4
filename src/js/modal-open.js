const bodyRef = document.querySelector('body');
const modalContainerRef = document.querySelector('.modal-container--js');
const modalCardRef = document.querySelector('.modal-container');
const cardListRef = document.querySelector('.event__list--js');
const closeBtnRef = document.querySelector('.modal__close-btn');
const backdropRef = document.querySelector('.backdrop');

cardListRef.addEventListener('click', onCardClick);
closeBtnRef.addEventListener('click', onCloseBtnClick);
window.addEventListener('click', onOverlayClick);


function onCardClick(e) {
  openModal();
  addModalAnimation();
  bodyStopScroll();
};
function onCloseBtnClick() {
  closeModal();
  removeModalAnimation();
  bodyReturnScroll();
};
function onOverlayClick(e) {
  if (e.target === backdropRef) {
    onCloseBtnClick();
  }
};
function bodyStopScroll() {
  bodyRef.style.overflow = 'hidden';
};
function bodyReturnScroll() {
  bodyRef.style.overflow = 'visible';
};
function addModalAnimation() {
  modalCardRef.classList.add('is-open')
};
function removeModalAnimation() {
  modalCardRef.classList.remove('is-open');
};
function openModal() {
  modalContainerRef.classList.remove('visually-hidden');
};
function closeModal() {
  modalContainerRef.classList.add('visually-hidden');
};