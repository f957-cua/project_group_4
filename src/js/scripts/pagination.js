// import { searchEvents } from '../scripts/search-functions.js';
import { loader } from '../scripts/loader.js';
import EventsApiService from '../scripts/api-service.js';
import * as searchFunction from '../scripts/search-functions.js';
const eventsApiService = new EventsApiService();

const moreBtn = document.querySelector('.pagination__more-horiz');
const lessBtn = document.querySelector('.pagination__less-horiz');

const paginationBtn = document.querySelector('.pagination-container');
const pagBtn1 = document.getElementById('1');
const pagBtn2 = document.getElementById('2');
const pagBtn3 = document.getElementById('3');
const pagBtn4 = document.getElementById('4');
const pagBtn5 = document.getElementById('5');

console.dir(pagBtn1);
console.log(moreBtn);

const morePages = () => {
  const step = 5;
  pagBtn1.textContent = Number(pagBtn1.textContent) + step;
  pagBtn2.textContent = Number(pagBtn2.textContent) + step;
  pagBtn3.textContent = Number(pagBtn3.textContent) + step;
  pagBtn4.textContent = Number(pagBtn4.textContent) + step;
  pagBtn5.textContent = Number(pagBtn5.textContent) + step;
};

const lessPages = () => {
  const step = 5;
  pagBtn1.textContent = Number(pagBtn1.textContent) - step;
  pagBtn2.textContent = Number(pagBtn2.textContent) - step;
  pagBtn3.textContent = Number(pagBtn3.textContent) - step;
  pagBtn4.textContent = Number(pagBtn4.textContent) - step;
  pagBtn5.textContent = Number(pagBtn5.textContent) - step;
};

moreBtn.addEventListener('click', morePages);
lessBtn.addEventListener('click', lessPages);
