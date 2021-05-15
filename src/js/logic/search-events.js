import EventsApiService from '../scripts/api-service.js';
import eventCardTpl from '../../template/event-card.hbs';
import refs from '../refs.js';
import { loader } from '../scripts/loader.js';

const eventsApiService = new EventsApiService();

// Запуск рендера
const startLoad = startRender(loader.show());

function startRender() {
  eventsApiService.firstFetch().then(events => eventsMarkUp(events));
}
// --------------

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  loader.show();
  e.preventDefault();
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
