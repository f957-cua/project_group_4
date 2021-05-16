import EventsApiService from './api-service.js';
import { loader } from './loader.js';
import { eventsMarkUp } from './mark-up.js';

const eventsApiService = new EventsApiService();

const startRender = () => {
    loader.show();
    eventsApiService.firstFetch().then(events => eventsMarkUp(events));
}

export {startRender}