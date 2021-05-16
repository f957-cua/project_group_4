import refs from '../refs';
import eventCardTpl from '../../template/event-card.hbs';
import * as modalOptions from '../scripts/modal.js';
import EventsApiService from '../scripts/api-service.js';
import { eventsMarkUp } from '../scripts/mark-up.js';

const fetchApi = new EventsApiService();

refs.moreFromAuthorBtn.addEventListener('click', onMoreFromAuthorBtnClick)

async function onMoreFromAuthorBtnClick(e) {
    const authorName = e.target.previousElementSibling.children[0].alt;
    const events = await fetchApi.fetchEvents(authorName);
    modalOptions.closeModal();
    eventsMarkUp(events);
}