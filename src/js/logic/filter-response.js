import refs from '../refs';
import { eventsMarkUp } from '../scripts/mark-up.js';
import { filterArray } from '../scripts/search-functions.js';

refs.filterContainer.addEventListener('click', (e) => {
    const array = JSON.parse(localStorage.getItem('array'));

    if (e.target.nodeName === "BUTTON") {
        const type = e.target.id;
        const filteredArray = filterArray(array, type);
        const listItem = e.currentTarget.children;
        eventsMarkUp(filteredArray);
        
        listItem.forEach(item => {
            const btn = item.children[0];

            if (btn.classList.contains('is-active')) {
                btn.classList.remove('is-active');
            }
        })
        e.target.classList.add('is-active');
    }
});