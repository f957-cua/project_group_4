import refs from '../refs.js';
import EventsApiService from './api-service.js';
import modalTpl from '../../template/modal-tpl.hbs'

const fetchApi = new EventsApiService();

const onCardClick = async (e) => {
  if (e.target.classList.contains('event__image')) {
    const cardId = e.target.parentNode.id;
    console.log(cardId)

    //  const type = e.target.parentNode.dataset.type;
    //  console.log(type)
     
    const objList = await fetchApi.firstFetch();
    const event = objList.find(obj => {
       if (obj.id === cardId) {
         return obj
       }
      });
    modalMarkup(event)
    //  const obj = await fetchApi.modalFetch(type, cardId);
    // modalMarkup(obj)
  }
}

const modalMarkup = (event) => {
  refs.modalCard.insertAdjacentHTML('beforeend', modalTpl(event));
}

export {
  onCardClick,
  modalMarkup,
}