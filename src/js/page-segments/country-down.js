import refs from '../refs.js';

refs.select.addEventListener('click', () => classListToggle(refs.select));

const classListToggle = ( selector ) => {
    selector.parentElement.classList.toggle('is-active');
}

const customSelect = (item) => {
let text = item.innerText;
let currentText = item.closest('.select').querySelector('.select__current');
        currentText.innerText = text;
}

refs.selectItem.forEach(item => {
    item.addEventListener('click', () => {
        customSelect(item);
        classListToggle(refs.select);
    })
})

