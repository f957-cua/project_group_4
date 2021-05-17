import refs from '../refs.js';
import EventsApiService from './api-service.js';
import modalTpl from '../../template/modal-tpl.hbs'

const fetchApi = new EventsApiService();

const onCardClick = async (e) => {
  if (e.target.classList.contains('event__image')) {
    const cardId = e.target.parentNode.id;
    const type = e.target.parentNode.dataset.type;
    const obj = await fetchApi.modalFetch(type, cardId);
    console.log(obj)
    modalMarkup(obj);
  };
};
const modalMarkup = (event) => {
  refs.modalCard.insertAdjacentHTML('beforeend', modalTpl(event));
};

export {
  onCardClick,
  modalMarkup,
};