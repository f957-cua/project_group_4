import refs from '../refs';
import { eventsMarkUp } from '../scripts/mark-up.js';
import { filterArray } from '../scripts/search-functions.js';

refs.filterContainer.addEventListener('click', (e) => {
    const array = JSON.parse(localStorage.getItem('array'));
    const type = e.target.id;
    const filteredArray = filterArray(array, type);

    eventsMarkUp(filteredArray);
});