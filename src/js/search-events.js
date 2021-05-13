import EventsApiService from './api-service.js';
import eventCardTpl from '../template/event-card.hbs';

const eventsApiService = new EventsApiService();

const refs = {
    searchForm: document.querySelector('#search-form'),
    eventList: document.querySelector('#event-list-js')
}

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();
    eventsApiService.query = e.currentTarget.elements.query.value.trim();
    if (eventsApiService.query === " " || eventsApiService.query == "") {
        return
        // pnotifyMessage(error, 'Please enter query!')
    }
    searchEvents()
}
function searchEvents() {
    eventsApiService.fetchEvents()
            .then(events => eventsMarkUp(events)) 
}   
function eventsMarkUp(events) {
   refs.eventList.insertAdjacentHTML('beforeend',eventCardTpl(events)) 
}

