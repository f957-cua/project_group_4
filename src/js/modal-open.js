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
};
function onCloseBtnClick() {
  closeModal();
};
function onOverlayClick(e) {
  if (e.target === backdropRef) {
    onCloseBtnClick();
  }
};
function openModal() {
  modalContainerRef.classList.remove('visually-hidden');
  openModalAnimation();
  bodyStopScroll();
};
function closeModal() {
  setTimeout(() => {
    modalContainerRef.classList.add('visually-hidden');
  }, 250);
  
  closeModalAnimation();
  bodyReturnScroll();
};
function openModalAnimation() {
  modalCardRef.classList.replace('is-closed', 'is-open')
};
function closeModalAnimation() {
  modalCardRef.classList.replace('is-open', 'is-closed')
};
function bodyStopScroll() {
  bodyRef.style.overflow = 'hidden';
};
function bodyReturnScroll() {
  bodyRef.style.overflow = 'visible';
};