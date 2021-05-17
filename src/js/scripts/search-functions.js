import EventsApiService from '../scripts/api-service.js';
import { loader } from '../scripts/loader.js';
import { eventsMarkUp } from '../scripts/mark-up.js';

const eventsApiService = new EventsApiService();
const paginationBtn = document.querySelector('.pagination-pages');
const paginationCont = document.querySelector('.pagination-container');

const searchEvents = () => {
  eventsApiService.mainFetch().then(events => eventsMarkUp(events));

  // Для примера
  // eventsApiService.modalFetch('event', 'G5e8ZpnLuCsnu');
  // eventsApiService.moreInfoFetch('john');
};

const onSearch = e => {
  e.preventDefault();
  loader.show();
  eventsApiService.query = e.currentTarget.elements.query.value.trim();

  searchEvents();
};

export { searchEvents, onSearch, pagination };
