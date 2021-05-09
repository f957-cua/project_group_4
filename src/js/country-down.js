const selectRef = document.querySelector('.select__header');
const selectItemRef = document.querySelectorAll('.select__item');

selectRef.addEventListener('click', () => {
    selectRef.parentElement.classList.toggle('is-active');
})

selectItemRef.forEach(item => {
    item.addEventListener('click', () => {
        let text = item.innerText;
        
        let currentText = item.closest('.select').querySelector('.select__current');
        currentText.innerText = text;
    })
})