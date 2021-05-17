import refs from '../refs.js';
import * as Modal from '../scripts/modal.js'

refs.cardList.addEventListener('click', Modal.onCardClick);
refs.modalCard.addEventListener('click', Modal.onCloseBtnClick);
window.addEventListener('click', Modal.onOverlayClick);


