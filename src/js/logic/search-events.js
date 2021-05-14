import EventsApiService from '../scripts/api-service.js';
import eventCardTpl from '../../template/event-card.hbs';
import refs from '../refs.js';

const eventsApiService = new EventsApiService();

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
// function clearEventsList() {
//    refs.eventList.innerHTML = '';
// }

