
import refs from '../refs.js';
import { onSearch } from '../scripts/search-functions.js';

refs.select.addEventListener('click', (e) => customSelect(e));


const classListToggle = ( selector ) => {
   selector.classList.toggle('is-active');
}

const changeText = (item, selector) => {
    let text = item.textContent;
    selector.innerText = text;
}

const changeCountryCode = (element, selector) => {
    selector.dataset.code = element.dataset.code;
}

const customSelect = (e) => {
    classListToggle(refs.select);

    if (e.target.nodeName === 'LI') {
        changeText(e.target, refs.selectCurrent);
        changeCountryCode(e.target, refs.selectCurrent);
        // onSearch();
    }
}

