import EventsApiService from './api-service.js';
import { loader } from './loader.js';
import { eventsMarkUp } from './mark-up.js';

const eventsApiService = new EventsApiService();

const startRender = () => {
    localStorage.clear();
    loader.show();
    eventsApiService.firstFetch().then(events => eventsMarkUp(events));
}

export {startRender}