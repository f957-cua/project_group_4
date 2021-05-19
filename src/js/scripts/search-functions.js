import EventsApiService from '../scripts/api-service.js';
import { loader } from '../scripts/loader.js';
import { eventsMarkUp } from '../scripts/mark-up.js';
import { scrollToTop } from '../page-segments/back-to-top-btn.js';
import { removeActiveBtn } from '../scripts/remove-active-btn.js';
import { hideBtn } from './hide-paginator-btn';
import { pnotifyMessage } from './pnotify.js';
import { btnActive } from './btn-active';

import refs from '../refs.js';

const eventsApiService = new EventsApiService();

const createEvents = (array) => {
  const events = array.filter(obj => obj.type === "event");
  // if (events.length === 0) {
  //   pnotifyMessage ('info','optsInfo')
  // }

  return events;
}

const createAttr = (array) => {
  const attractions = array.filter(obj => obj.type === "attraction");

  return attractions;
}

const createVenues = (array) => {
  const venues = array.filter(obj => obj.type === "venue");

  return venues;
}

const filterArray = (array, type) => {

  if (type === "attraction") {
    btnActive(type);
    return createAttr(array);
  }

  if (type === "venue") {
    btnActive(type);
    return createVenues(array);
  }

  if (type === "event") {
    btnActive(type);
    return createEvents(array);
  }
}



const searchEvents = async () => {
   try {
    const response = await eventsApiService.mainFetch();
    localStorage.setItem('array', JSON.stringify(response));
    
    const type = response[0].type;
     if (type !== "event") {
       pnotifyMessage('info', 'optsInfo');
    }
    eventsMarkUp(filterArray(response, type));
    hideBtn();
   }
  
   catch {
     loader.hide();
    }
};

const onSearch = e => {
  refs.paginationCont.classList.remove('visually-hidden');
  refs.filterContainer.classList.remove('visually-hidden');
  let page;
  e.preventDefault();
  loader.show();
  localStorage.setItem('query', e.currentTarget.elements.query.value.trim());
  eventsApiService.query = localStorage.getItem('query');
  eventsApiService.page = page;
  e.currentTarget.elements.query.value = '';
 
  searchEvents();

  removeActiveBtn();
  refs.pageButtons[0].classList.add('is-active');
};

const pagination = e => {
  const page = Number(e.target.textContent);
  localStorage.setItem('page', page);

  loader.show();
  eventsApiService.query = localStorage.getItem('query');
  eventsApiService.page = page;
  removeActiveBtn();
  e.target.classList.add('is-active');

  searchEvents();
  scrollToTop();
};

export { searchEvents, onSearch, pagination, filterArray };