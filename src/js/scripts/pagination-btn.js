import refs from '../refs.js';
import { removeActiveBtn } from '../scripts/remove-active-btn.js';

const morePages = () => {
  const step = 5;
  refs.pageButtons.forEach(btn => {
    btn.textContent = Number(btn.textContent) + step;
});

  refs.lessBtn.style.color = 'var(--white)';
  removeActiveBtn();
  setActiveBtn();
};

const lessPages = () => {
  const step = 5;
  if (Number(refs.pageButtons[0].textContent) > 1) {
    refs.pageButtons.forEach(btn => {
      btn.textContent = Number(btn.textContent) - step;
    });
  } else {
    refs.lessBtn.style.color = 'var(--common-gray)';
  }
  
  removeActiveBtn();
  setActiveBtn();
};

const setActiveBtn = () => {
  const activePage = Number(localStorage.getItem('page'));
  refs.pageButtons.forEach(btn => {
    if (Number(btn.textContent) === activePage) {
      btn.classList.add('is-active')
    }
  });
}

export { morePages, lessPages };
