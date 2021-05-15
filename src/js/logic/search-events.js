import EventsApiService from '../scripts/api-service.js';
import eventCardTpl from '../../template/event-card.hbs';
import refs from '../refs.js';
import { loader } from '../logic/loader.js';

const eventsApiService = new EventsApiService();

loader.show();

// Запуск рендера
const startLoad = startRender();

function startRender() {
  eventsApiService.firstFetch().then(events => eventsMarkUp(events));
}
// --------------

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  loader.show();
  eventsApiService.query = e.currentTarget.elements.query.value.trim();
  if (eventsApiService.query === ' ' || eventsApiService.query == '') {
    return;
    // pnotifyMessage(error, 'Please enter query!')
  }
  searchEvents();
}

function searchEvents() {
  eventsApiService.fetchEvents().then(events => eventsMarkUp(events));
}

function eventsMarkUp(events) {
  clearEventsList();
  refs.eventList.insertAdjacentHTML('beforeend', eventCardTpl(events));
  loader.hide();
}

function clearEventsList() {
  refs.eventList.innerHTML = '';
}

loader.hide();
