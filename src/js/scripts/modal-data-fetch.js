import refs from '../refs.js';
import EventsApiService from './api-service.js';
import modalTpl from '../../template/modal-tpl.hbs';
import venueTpl from '../../template/venue-tpl.hbs';
import noPricesTpl from '../../template/no-prices-modal-tpl.hbs';

const fetchApi = new EventsApiService();

const onCardClick = async (e) => {
  if (e.target.classList.contains('event__image')) {
    const cardId = e.target.parentNode.id;
    const type = e.target.parentNode.dataset.type;
    const obj = await fetchApi.modalFetch(type, cardId);

    if (obj.type === 'venue' || obj.type === "attraction") {
      noInfoMarkup(obj);
    } else if (!obj.priceRanges) {
      noPricesMarkup(obj);
    } else {
       modalMarkup(obj);
    }
  };
};
const noInfoMarkup = (event) => {
  refs.modalCard.insertAdjacentHTML('beforeend', venueTpl(event));
}
const noPricesMarkup = (event) => {
  refs.modalCard.insertAdjacentHTML('beforeend', noPricesTpl(event));
}
const modalMarkup = (event) => {
  refs.modalCard.insertAdjacentHTML('beforeend', modalTpl(event));
};

export {
  onCardClick,
  noInfoMarkup,
  noPricesMarkup,
  modalMarkup,
};