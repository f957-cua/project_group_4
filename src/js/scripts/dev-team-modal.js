import { eventsMarkUp } from './mark-up';

class DevTeamModal {
  constructor({ selector, container, key }) {
    this.devModal = document.querySelector(`${selector}`);
    this.devContainer = document.querySelector(`${container}`);
    this.key = key;
  }

  show() {
    const refs = this.devModal;
    const className = this.key;
    if (!refs.classList.contains(className)) {
      refs.classList.add(className);
    }
  }

  hide() {
    const refs = this.devModal;
    const className = this.key;
    refs.classList.remove(className);
  }

  markUp() {}
}

export const devModal = new DevTeamModal({
  selector: '.dev__team-overlay',
  key: 'is-open',
  container: '.dev__team-container',
});

export default { devModal };
