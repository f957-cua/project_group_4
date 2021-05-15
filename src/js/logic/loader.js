class Loader {
  constructor({ selector, key }) {
    this.loader = document.querySelector(`${selector}`);
    this.key = key;
  }

  show() {
    const refs = this.loader;
    const className = this.key;
    if (!refs.classList.contains(className)) {
      refs.classList.add(className);
    }
  }

  hide() {
    const refs = this.loader;
    const className = this.key;
    setTimeout(() => {
      refs.classList.remove(className);
    }, 1000);
  }
}

export const loader = new Loader({
  selector: '.loader__overlay',
  key: 'is-open',
});

export default { loader };
