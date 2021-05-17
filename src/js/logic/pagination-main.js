import refs from '../refs.js';
import { pagination } from '../scripts/search-functions.js';
import { morePages, lessPages } from '../scripts/pagination-btn.js';

refs.paginationBtn.addEventListener('click', pagination);
refs.moreBtn.addEventListener('click', morePages);
refs.lessBtn.addEventListener('click', lessPages);
