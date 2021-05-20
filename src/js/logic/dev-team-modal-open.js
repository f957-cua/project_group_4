import refs from '../refs.js';
import devTeam from '../../json/dev-team.json';
import devTeamTemplate from '../../template/dev-team-cards.hbs';
import * as modal from '../scripts/modal.js';

refs.devTeamOpenBtn.addEventListener('click', onDevTeamBtnClick);
refs.devTeamOverlay.addEventListener('click', onCloseBtnClick);
refs.devTeamOverlay.addEventListener('click', onLightBoxOverlayClick);
window.addEventListener('keydown', onEscKeyPress);

function onDevTeamBtnClick(event) {
  event.preventDefault();
  refs.devTeamOverlay.classList.add('is-open');
  devTeamMarkup();
  modal.bodyStopScroll();
}

function cleanAttributes() {
  refs.devTeamOverlay.classList.remove('is-open');
}

function onCloseBtnClick(event) {
  if (!event.target.classList.contains('close-overlay__button')) {
    // resetModalCard();
    return;
  }
  cleanAttributes();
  modal.bodyReturnScroll();
}

function onLightBoxOverlayClick(event) {
  if (!event.target.classList.contains('dev-team__overlay')) {
    // resetModalCard();
    return;
  }
  cleanAttributes();
  // resetModalCard();
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    cleanAttributes();
    // resetModalCard();
  }
}

function devTeamMarkup() {
  const devTeamMarkup = devTeamTemplate(devTeam);
  refs.devTeamList.insertAdjacentHTML('afterbegin', devTeamMarkup);
}

const resetModalCard = () => {
  refs.devTeamContainer.innerHTML = '';
};
