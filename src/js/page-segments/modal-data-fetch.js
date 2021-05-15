import refs from '../refs.js';
import Url from '../logic/url-factoring.js'

refs.cardList.addEventListener('click', onCardClick);

function onCardClick(e) {
  if (e.target.classList.contains('event__image')
    || e.target.classList.contains('event__card-header')
    || e.target.classList.contains('event__card-description')) {
  
      const cardId = e.target.parentNode.id
      console.log(cardId)
    //   fetch(Url.getUrlById('cardId')).then(r => { return r.json()})
  }
};
