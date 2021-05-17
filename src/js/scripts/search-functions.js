import EventsApiService from '../scripts/api-service.js';
import { loader } from '../scripts/loader.js';
import { eventsMarkUp } from '../scripts/mark-up.js';

const eventsApiService = new EventsApiService();
const paginationBtn = document.querySelector('.pagination-pages');
const paginationCont = document.querySelector('.pagination-container');

const searchEvents = () => {
  eventsApiService.fetchEvents().then(events => eventsMarkUp(events));
};

const onSearch = e => {
  paginationCont.classList.remove('visually-hidden');
  let page;
  e.preventDefault();
  loader.show();
  localStorage.setItem('query', e.currentTarget.elements.query.value.trim());
  eventsApiService.query = localStorage.getItem('query');
  eventsApiService.page = page;
  if (eventsApiService.query === ' ' || eventsApiService.query == '') {
    return;
    // pnotifyMessage(error, 'Please enter query!')
  }
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
