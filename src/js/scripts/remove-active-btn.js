import refs from '../refs.js';

const removeActiveBtn = () => {
  const ul = refs.pagBtnList.children;
  ul.forEach(li => {
    if (li.children[0].classList.contains('is-active')) {
      li.children[0].classList.remove('is-active');
    }
  });
};

export { removeActiveBtn };
