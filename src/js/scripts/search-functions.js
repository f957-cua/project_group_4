import EventsApiService from '../scripts/api-service.js';
import { loader } from '../scripts/loader.js';
import { eventsMarkUp } from '../scripts/mark-up.js';
import { scrollToTop } from '../page-segments/back-to-top-btn.js';
import { removeActiveBtn } from '../scripts/remove-active-btn.js';

import refs from '../refs.js';

const eventsApiService = new EventsApiService();

const searchEvents = () => {
  eventsApiService.mainFetch().then(events => eventsMarkUp(events));

  // Для примера
  // eventsApiService.modalFetch('event', 'G5e8ZpnLuCsnu');
  // eventsApiService.moreInfoFetch('john');
};

const onSearch = e => {
  refs.paginationCont.classList.remove('visually-hidden');
  let page;
  e.preventDefault();
  loader.show();
  localStorage.setItem('query', e.currentTarget.elements.query.value.trim());
  eventsApiService.query = localStorage.getItem('query');
  eventsApiService.page = page;
  e.currentTarget.elements.query.value = '';
  searchEvents();  

  removeActiveBtn();
  refs.pageButtons[0].classList.add('is-active');
};

const pagination = e => {
  const page = Number(e.target.textContent);
  localStorage.setItem('page', page);

  loader.show();
  eventsApiService.query = localStorage.getItem('query');
  eventsApiService.page = page;
  removeActiveBtn();
  e.target.classList.add('is-active');

  searchEvents();
  scrollToTop();
};

export { searchEvents, onSearch, pagination };
