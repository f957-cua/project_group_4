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
  paginationCont.classList.remove('visually-hidden');
  let page;
  e.preventDefault();
  loader.show();
  localStorage.setItem('query', e.currentTarget.elements.query.value.trim());
  eventsApiService.query = localStorage.getItem('query');
  eventsApiService.page = page;

  searchEvents();
};

const pagination = e => {
  const page = Number(e.target.textContent);
  loader.show();
  eventsApiService.query = localStorage.getItem('query');
  eventsApiService.page = page;
  console.log(eventsApiService.page);
  searchEvents();
};

paginationBtn.addEventListener('click', pagination);

export { searchEvents, onSearch, pagination };
