import refs from '../refs';
import {closeModal} from './modal.js';
import EventsApiService from './api-service.js';
import { eventsMarkUp } from './mark-up.js';
import { loader } from './loader.js';

const fetchApi = new EventsApiService();

const onMoreFromAuthorBtnClick = async (e) => {
  
    if (e.target.classList.contains('modal__more-from-btn')) {
        const authorName = e.target.dataset.author;
        fetchApi.searchQuery = authorName
        const events = await fetchApi.mainFetch(authorName);
        closeModal(e);
        loader.show();
        eventsMarkUp(events);
    }
}

export {
    onMoreFromAuthorBtnClick,
}

