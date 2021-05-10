const selectRef = document.querySelector('.select__header');
const selectItemRef = document.querySelectorAll('.select__item');

selectRef.addEventListener('click', () => classListToggle(selectRef));

const classListToggle = ( selector ) => {
    selector.parentElement.classList.toggle('is-active');
}

const customSelect = (item) => {
let text = item.innerText;
let currentText = item.closest('.select').querySelector('.select__current');
        currentText.innerText = text;
}

selectItemRef.forEach(item => {
    item.addEventListener('click', () => {
        customSelect(item);
        classListToggle(selectRef);
    })
})

