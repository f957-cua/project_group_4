const scrollToTopButton = document.querySelector('.btn__scolltotop');

const scrollFunc = () => {
  let y = window.scrollY;

  if (y > 0) {
    scrollToTopButton.className = 'btn__scolltotop show';
  } else {
    scrollToTopButton.className = 'btn__scolltotop hide';
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

scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};
