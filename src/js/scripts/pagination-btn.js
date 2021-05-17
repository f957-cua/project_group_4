import refs from '../refs.js';

const morePages = () => {
  const step = 5;
  refs.pagBtn1.textContent = Number(refs.pagBtn1.textContent) + step;
  refs.pagBtn2.textContent = Number(refs.pagBtn2.textContent) + step;
  refs.pagBtn3.textContent = Number(refs.pagBtn3.textContent) + step;
  refs.pagBtn4.textContent = Number(refs.pagBtn4.textContent) + step;
  refs.pagBtn5.textContent = Number(refs.pagBtn5.textContent) + step;
  refs.lessBtn.style.color = 'var(--white)';
};

const lessPages = () => {
  const step = 5;
  if (Number(refs.pagBtn1.textContent) > 1) {
    refs.pagBtn1.textContent = Number(refs.pagBtn1.textContent) - step;
    refs.pagBtn2.textContent = Number(refs.pagBtn2.textContent) - step;
    refs.pagBtn3.textContent = Number(refs.pagBtn3.textContent) - step;
    refs.pagBtn4.textContent = Number(refs.pagBtn4.textContent) - step;
    refs.pagBtn5.textContent = Number(refs.pagBtn5.textContent) - step;
  } else {
    refs.lessBtn.style.color = 'var(--common-gray)';
  }
};

export { morePages, lessPages };
