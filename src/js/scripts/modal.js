import refs from '../refs.js';

refs.cardList.addEventListener('click', onCardClick);
refs.closeBtn.addEventListener('click', onCloseBtnClick);
window.addEventListener('click', onOverlayClick);

function onCardClick(e) {
  openModal(e);
const openModalAnimation = () => {
  refs.modalCard.classList.replace('is-closed', 'is-open')
};

const closeModalAnimation = () => {
  refs.modalCard.classList.replace('is-open', 'is-closed')
};

const bodyStopScroll = () => {
  document.body.style.overflow = 'hidden';
};

const bodyReturnScroll = () => {
  document.body.style.overflow = 'visible';
};
function openModal(e) {
  if (e.target.classList.contains('event__image')) {
    refs.modalContainer.classList.remove('visually-hidden');

const openModal = () => {
  refs.modalContainer.classList.remove('visually-hidden');
  openModalAnimation();
  bodyStopScroll();
  }
};

const closeModal = () => {
  setTimeout(() => {
    refs.modalContainer.classList.add('visually-hidden');
  }, 250);
  closeModalAnimation();
  bodyReturnScroll();
};

const onCardClick = (e) => {
    openModal();
};

const onCloseBtnClick = () => {
    closeModal();
};

const onOverlayClick = (e) => {
  if (e.target === refs.backdrop) {
    onCloseBtnClick();
  }
};

export {
  openModal,
  closeModal,
  openModalAnimation,
  closeModalAnimation,
  bodyStopScroll,
  bodyReturnScroll,
  onCardClick,
  onCloseBtnClick,
  onOverlayClick,
};
