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

const openModal = (e) => {
  if (e.target.nodeName === 'IMG') {
    refs.modalContainer.classList.remove('visually-hidden');
  openModalAnimation();
  bodyStopScroll();
  }
  
};

const closeModal = (e) => {
    setTimeout(() => {
      refs.modalContainer.classList.add('visually-hidden');
      resetModalCard();
  }, 250);
  closeModalAnimation();
  bodyReturnScroll();
};

const onCardClick = (e) => {
    openModal(e);
};

const onCloseBtnClick = (e) => {
  if (e.target.nodeName === 'svg' || e.target.nodeName === 'BUTTON') {
    closeModal(e);
  }
};

const onOverlayClick = (e) => {
  if (e.target === refs.backdrop) {
    closeModal(e);
  }
};

const resetModalCard = () => {
  refs.modalCard.innerHTML = ''
}
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
  resetModalCard,
};