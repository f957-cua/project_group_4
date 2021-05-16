import refs from '../refs.js';
import { loader } from '../scripts/loader.js';

import {startRender} from '../scripts/first-render.js'
import { onSearch } from '../scripts/search-functions.js';

const startLoad = startRender();

refs.searchForm.addEventListener('submit', onSearch);
