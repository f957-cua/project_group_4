
import refs from '../refs.js';
import { onSearch } from '../scripts/search-functions.js';

let activeListItem = 0;

refs.select.addEventListener('click', (e) => customSelect(e));
refs.select.addEventListener('focus', () => refs.select.classList.add('is-active'));
refs.select.addEventListener('keydown', (e) => onArrowBtnPress(e));

const onArrowBtnPress = (evt) => {
    if (!refs.select.classList.contains('is-active')) {
        return;
    } else if (evt.key === "Tab") {
        refs.select.classList.remove('is-active');
        return;
    } else if (evt.key === "Enter") {
        customSelect(evt);
        refs.select.classList.remove('is-active');
        return
    };

    evt.preventDefault();

    if (evt.key === "ArrowDown") {
        if (activeListItem === 11) {
            activeListItem = 1;
        } else {
            activeListItem += 1;
        };

  
    } else if (evt.key === "ArrowUp") {
        if (activeListItem === 1) {
            activeListItem = 11;
        } else {
            activeListItem -= 1;
        };

    };
    const elem = refs.select.querySelectorAll(".select__item").item(activeListItem - 1);
    elem.focus();
    refs.select.classList.add('is-active');
}
    
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
    if (e.type === "click") {
        const elem = e.target;
        chooseCountry(elem)
    } else {
        const elem = document.activeElement;
        chooseCountry(elem)
    }
    
}

const chooseCountry = (elem) => {
    classListToggle(refs.select);

    if (elem.nodeName === 'LI') {
        changeText(elem, refs.selectCurrent);
        changeCountryCode(elem, refs.selectCurrent);
        // onSearch();
    }
}