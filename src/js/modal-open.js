const bodyRef = document.querySelector('body');
const modalContainerRef = document.querySelector('.modal-container--js');
const cardListRef = document.querySelector('.event__list--js');
const closeBtnRef = document.querySelector('.modal__close-btn');
const backdropRef = document.querySelector('.backdrop');

cardListRef.addEventListener('click', onCardClick);
closeBtnRef.addEventListener('click', onCloseBtnClick);
window.addEventListener('click', onOverlayClick);

function onCardClick(e) {
  modalContainerRef.classList.remove('visually-hidden');
  bodyStopScroll();
}
function onCloseBtnClick() {
  modalContainerRef.classList.add('visually-hidden');
  bodyReturnScroll();
}
function onOverlayClick(e) {
  console.log(e.target)
  if (e.target === backdropRef) {
    onCloseBtnClick();
  }
}
function bodyStopScroll() {
  bodyRef.style.overflow = 'hidden';
}
function bodyReturnScroll() {
  bodyRef.style.overflow = 'visible';
}
