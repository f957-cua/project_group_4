
import refs from '../refs.js';
let activeListItem = 1;

refs.select.addEventListener('click', (e) => customSelect(e));
refs.select.addEventListener('focus', () => refs.select.classList.add('is-active'));
refs.select.addEventListener('focusout', () => refs.select.classList.remove('is-active'));
// refs.select.addEventListener('keydown', onArrowBtnPress(e));

// const onArrowBtnPress = (event) => {
//     if (!refs.select.classList.contains('is-active')) {
//         return;
//     };

//     if (event.key === "ArrowDown") {
//         if (activeListItem === 11) {
//             activeListItem = 1;
//         } else {
//             activeListItem += 1;
//         };
//     } else if (event.key === "ArrowUp") {
//         if (activeListItem === 1) {
//             activeListItem = 11;
//         } else {
//             activeListItem -= 1;
//         };
//     };

//     refs.select.childNodes[activeListItem+1].focus()
// }
    
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
    }
}

