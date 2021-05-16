import refs from '../refs';
import eventCardTpl from '../../template/event-card.hbs';
import * as modalOptions from './modal.js';
import EventsApiService from './api-service.js';
import { eventsMarkUp } from './mark-up.js';
import { onSearch } from './search-functions.js';

const fetchApi = new EventsApiService();


async function onMoreFromAuthorBtnClick(e) {
    
    const authorName = e.target.previousElementSibling.children[0].alt;
    console.log(authorName)
    // onSearch(authorName)
    const events = await fetchApi.fetchEvents(authorName);
    console.log(events)
    eventsMarkUp(events);
    
};

export default {
    onMoreFromAuthorBtnClick,
}

