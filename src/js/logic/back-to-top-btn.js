import refs from '../refs.js';

const scrollFunc = () => {
  let y = window.scrollY;

  if (y > 0) {
    refs.scrollToTop.className = 'btn__scolltotop show';
  } else {
    refs.scrollToTop.className = 'btn__scolltotop hide';
  }
};

window.addEventListener('scroll', scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

refs.scrollToTop.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};
