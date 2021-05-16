import refs from '../refs';
import eventCardTpl from '../../template/event-card.hbs';
import * as modalOptions from './modal.js';
import EventsApiService from './api-service.js';
import { eventsMarkUp } from './mark-up.js';
const fetchApi = new EventsApiService();



async function onMoreFromAuthorBtnClick(e) {
    if (e.target === refs.moreFromAuthorBtn) {
        const authorName = e.target.previousElementSibling.children[0].alt;
    const events = await fetchApi.fetchEvents(authorName);
    modalOptions.closeModal();
    eventsMarkUp(events);
    }
    
};

export default {
    onMoreFromAuthorBtnClick,
}

