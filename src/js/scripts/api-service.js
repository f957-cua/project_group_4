import { searchEvents, searchAttractions, searchSuggest } from './api-fetch.js';

export default class ApiService {
  constructor(searchQuery, page) {
    this.searchQuery = '';
    this.page = 1;
  }

  // start Fetch
  async firstFetch() {
    const responeSug = await searchSuggest();
    console.log(responeSug);
    const result = [
      ...responeSug._embedded.events,
      ...responeSug._embedded.attractions,
      ...responeSug._embedded.products,
      ...responeSug._embedded.venues,
    ];
    return result;
  }

  async fetchEvents() {
    let result = [];

    const responseEvents = await searchEvents(this.searchQuery, this.page);

    if (responseEvents._embedded) {
      result = [...responseEvents._embedded.events];
    }

    const responseAttr = await searchAttractions(this.searchQuery, this.page);

    if (responseAttr._embedded) {
      result = [...responseAttr._embedded.attractions];
    }

    return result;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

//  if (page.totalElements !== 0) {
//                 console.log( _embedded.attractions)
//                 return _embedded.attractions;
//             }
