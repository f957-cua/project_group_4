import importHtml from '../../partials/index.hbs';

const importPage = importHtml();

document.body.insertAdjacentHTML('afterbegin', importPage);
