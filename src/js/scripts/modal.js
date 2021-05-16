import refs from '../refs.js';

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

const openModal = () => {
  refs.modalContainer.classList.remove('visually-hidden');
  openModalAnimation();
  bodyStopScroll();
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
