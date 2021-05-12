import EventsApiService from './api-service.js';
import eventCardTpl from '../template/event-card.hbs';

const eventsApiService = new EventsApiService();

const formRef = document.querySelector('#search-form');
const listRef = document.querySelector('#event-list-js');

formRef.addEventListener('submit', onSearch);

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
            .then(events => {
                console.log(events);
                eventsMarkUp(events);
            }) 
}
    
function eventsMarkUp(events) {
   listRef.insertAdjacentHTML('beforeend',eventCardTpl(events)) 
}

