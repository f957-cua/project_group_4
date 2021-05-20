import eventCardTpl from '../../template/event-card.hbs';
import refs from '../refs.js';
import { loader } from '../scripts/loader.js';

const clearEventsList = () => {
  refs.eventList.innerHTML = '';
}

const eventsMarkUp = (events) => {
  clearEventsList();
  refs.eventList.insertAdjacentHTML('beforeend', eventCardTpl(events));
  loader.hide();
}

export {
    clearEventsList,
    eventsMarkUp,
}

