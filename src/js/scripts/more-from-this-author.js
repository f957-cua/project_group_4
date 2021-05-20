import refs from '../refs';
import {closeModal} from './modal.js';
import EventsApiService from './api-service.js';
import { eventsMarkUp } from './mark-up.js';
import { loader } from './loader.js';
import { hideBtn } from './hide-paginator-btn';
import { filterArray } from './search-functions';
import { scrollToTop } from '../page-segments/back-to-top-btn.js';
import { pnotifyMessage } from './pnotify.js';

const fetchApi = new EventsApiService();

const onMoreFromAuthorBtnClick = async (e) => {
  
    if (e.target.classList.contains('modal__more-from-btn')) {
        try {
        const authorName = e.target.dataset.author;
        fetchApi.searchQuery = authorName
        const events = await fetchApi.mainFetch(authorName);

        if (events && events.length !== 0) {
            localStorage.setItem('array', JSON.stringify(events));
        }
        
        const type = events[0].type;
        closeModal(e);
        loader.show();
        eventsMarkUp(filterArray(events, type));
        hideBtn();
            // if (refs.filterContainer.classList.contains('visually-hidden')) {
            refs.filterContainer.classList.remove('visually-hidden');
        // }
        }
        catch {
        closeModal(e);
        loader.hide();
        scrollToTop();
        pnotifyMessage('empty response', 'optsInfo');
        }
    }
}

export {
    onMoreFromAuthorBtnClick,
}

