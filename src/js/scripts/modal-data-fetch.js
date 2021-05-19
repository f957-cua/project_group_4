import refs from '../refs.js';
import EventsApiService from './api-service.js';
import modalTpl from '../../template/modal-tpl.hbs';
import venueTpl from '../../template/venue-tpl.hbs';
import noPricesTpl from '../../template/no-prices-modal-tpl.hbs';
import attractionTpl from '../../template/attraction-markup.hbs';

const fetchApi = new EventsApiService();

const onCardClick = async (e) => {
  if (e.target.classList.contains('event__image')) {
    const cardId = e.target.parentNode.id;
    const type = e.target.parentNode.dataset.type;
    const obj = await fetchApi.modalFetch(type, cardId);

    if (obj.type === 'venue') {
      venueMarkup(obj);
    } else if (obj.type === "attraction") {
      console.log(obj);
      attractionMurkup(obj);
    } else if (!obj.priceRanges) {
      noPricesMarkup(obj);
    } else {
       modalMarkup(obj);
    }
  };
};
const venueMarkup = (event) => {
  refs.modalCard.insertAdjacentHTML('beforeend', venueTpl(event));
}
const attractionMurkup = (event) => {
  refs.modalCard.insertAdjacentHTML('beforeend', attractionTpl(event));
}
const noPricesMarkup = (event) => {
  refs.modalCard.insertAdjacentHTML('beforeend', noPricesTpl(event));
}
const modalMarkup = (event) => {
  refs.modalCard.insertAdjacentHTML('beforeend', modalTpl(event));
};

export {
  onCardClick,
  attractionMurkup,
  noPricesMarkup,
  modalMarkup,
};