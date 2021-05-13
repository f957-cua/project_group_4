import refs from '../refs.js';

refs.cardList.addEventListener('click', onCardClick);
refs.closeBtn.addEventListener('click', onCloseBtnClick);
window.addEventListener('click', onOverlayClick);


function onCardClick(e) {
  openModal();
};
function onCloseBtnClick() {
  closeModal();
};
function onOverlayClick(e) {
  if (e.target === refs.backdrop) {
    onCloseBtnClick();
  }
};
function openModal() {
  refs.modalContainer.classList.remove('visually-hidden');
  openModalAnimation();
  bodyStopScroll();
};
function closeModal() {
  setTimeout(() => {
    refs.modalContainer.classList.add('visually-hidden');
  }, 250);
  
  closeModalAnimation();
  bodyReturnScroll();
};
function openModalAnimation() {
  refs.modalCard.classList.replace('is-closed', 'is-open')
};
function closeModalAnimation() {
  refs.modalCard.classList.replace('is-open', 'is-closed')
};
function bodyStopScroll() {
  document.body.style.overflow = 'hidden';
};
function bodyReturnScroll() {
  document.body.style.overflow = 'visible';
};