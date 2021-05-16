import EventsApiService from '../scripts/api-service.js';
import { loader } from '../scripts/loader.js';
import {eventsMarkUp} from '../scripts/mark-up.js';


const eventsApiService = new EventsApiService();

const searchEvents = () => {
    eventsApiService.mainFetch().then(events => eventsMarkUp(events));
   
    // Для примера
    eventsApiService.modalFetch('events', 'G5e8ZpnLuCsnu');

}

const onSearch = (e) => {
    e.preventDefault();
    loader.show();
    eventsApiService.query = e.currentTarget.elements.query.value.trim();
        // if (eventsApiService.query === ' ' || eventsApiService.query == '') {
        //     return;
    // pnotifyMessage(error, 'Please enter query!')
        // }
    searchEvents();
    
}

export {
    searchEvents,
    onSearch,
}