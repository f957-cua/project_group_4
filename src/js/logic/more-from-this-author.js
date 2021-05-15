import refs from '../refs';
import * as apiFetch from '../scripts/api-fetch.js';
import eventCardTpl from '../../template/event-card.hbs';
import * as modalOptions from '../page-segments/modal-open.js';


refs.moreFromAuthorBtn.addEventListener('click', onMoreFromAuthorBtnClick)

async function onMoreFromAuthorBtnClick(e) {
    const authorName = e.target.previousElementSibling.children[0].alt
    const events = await apiFetch.searchAttractions(authorName)
    eventsMarkUp(events)
}
function eventsMarkUp(events) {
    modalOptions.closeModal()
    clearEventsList();
   refs.eventList.insertAdjacentHTML('beforeend',eventCardTpl(events)) 
}
function clearEventsList() {
   refs.eventList.innerHTML = '';
}