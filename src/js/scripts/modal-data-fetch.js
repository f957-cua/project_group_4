import refs from '../refs.js';
import EventsApiService from './api-service.js';
import modalTpl from '../../template/modal-tpl.hbs'

const fetchApi = new EventsApiService();

refs.cardList.addEventListener('click', onCardClick);

async function onCardClick(e) {
  if (e.target.classList.contains('event__image')) {
    const cardId = e.target.parentNode.id;
    const objList = await fetchApi.firstFetch();
    const event = objList.find(obj => {
      if (obj.id === cardId) {
        return obj
      }
    });

    modalMarkup(event)
    // console.log(event)
  }
};
const modalMarkup = (event) => {
  refs.modalCard.insertAdjacentHTML('beforeend', modalTpl(event));
}

export default {
  onCardClick,
  modalMarkup,
}