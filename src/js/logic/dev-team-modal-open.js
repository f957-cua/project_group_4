import refs from '../refs.js';

refs.devTeamOpenBtn.addEventListener('click', onDevTeamBtnClick);
refs.devTeamOverlay.addEventListener('click', onCloseBtnClick);
refs.devTeamOverlay.addEventListener('click', onLightBoxOverlayClick);
window.addEventListener('keydown', onEscKeyPress);

function onDevTeamBtnClick(event) {
  event.preventDefault();
  refs.devTeamOverlay.classList.add('is-open');
}

function cleanAttributes() {
  refs.devTeamOverlay.classList.remove('is-open');
}

function onCloseBtnClick(event) {
  if (!event.target.classList.contains('close-overlay__button')) {
    return;
  }
  cleanAttributes();
}

function onLightBoxOverlayClick(event) {
  if (!event.target.classList.contains('dev-team__overlay')) {
    return;
  }
  cleanAttributes();
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    cleanAttributes();
  }
}
