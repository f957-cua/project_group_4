import { searchEvents } from './api-fetch.js';
import refs from '../refs';
import Url from '../logic/url-factoring';
import toggleType from '../scripts/toggle-event-type';
const url = new Url();

export default class ApiService {
  constructor(countryCode, searchQuery, page) {
    this.countryCode = '';
    this.searchQuery = '';
    this.page = 1;
    this.path = '';
    this.type = '';
  }

  // start Fetch
  async firstFetch() {
    this.path = url.getUrlSuggest();
    const response = await searchEvents(this.path, this.page);

    const result = [
      ...response._embedded.events,
      ...response._embedded.attractions,
        ...response._embedded.products,
      ...response._embedded.venues
    ];
    return result;
  }

  // Form`s Fetch
  async mainFetch() {
    let result = [];
    this.countryCode = refs.selectCurrent.dataset.code;

    // Если выбрана страна, но пустой инпут
    if (this.countryCode && !this.searchQuery) {
      this.type = toggleType(1);
      this.path = url.getUrlByCountry(this.type, this.countryCode, this.page);

      let response = await searchEvents(this.path, this.page);

      if (response._embedded) {
        result = [...response._embedded.events];
      }

      this.type = toggleType(2);
      this.path = url.getUrlByCountry(this.type, this.countryCode, this.page);

      response = await searchEvents(this.path, this.page);

      if (response._embedded) {
        result = [...result, ...response._embedded.attractions];
      }

      this.type = toggleType(3);
      this.path = url.getUrlByCountry(this.type, this.countryCode, this.page);

      response = await searchEvents(this.path, this.page);

      if (response._embedded) {
        result = [...result, ...response._embedded.venues];
      }
    }
    // Если выбран инпут, но не выбрана страна
    if (!this.countryCode && this.searchQuery) {
      this.type = toggleType(1);
      this.path = url.getUrlByKeyword(this.type, this.searchQuery, this.page);

      let response = await searchEvents(this.path, this.page);

      if (response._embedded) {
        result = [...result, ...response._embedded.events];
      }

      this.type = toggleType(2);
      this.path = url.getUrlByKeyword(this.type, this.searchQuery, this.page);
      response = await searchEvents(this.path, this.page);

      if (response._embedded) {
        result = [...result, ...response._embedded.attractions];
      }

      this.type = toggleType(3);
      this.path = url.getUrlByCountry(this.type, this.countryCode, this.page);

      response = await searchEvents(this.path, this.page);

      if (response._embedded) {
        result = [...result, ...response._embedded.venues];
      }
    }
    // Если выбран инпут и страна
    if (this.countryCode && this.searchQuery) {
      this.type = toggleType(1);
      this.path = url.getUrlFull(
        this.type,
        this.searchQuery,
        this.countryCode,
        this.page,
      );

      let response = await searchEvents(this.path, this.page);

      if (response._embedded) {
        result = [...result, ...response._embedded.events];
      }

      this.type = toggleType(2);
      this.path = url.getUrlFull(
        this.type,
        this.searchQuery,
        this.countryCode,
        this.page,
      );

      response = await searchEvents(this.path, this.page);

      if (response._embedded) {
        result = [...result, ...response._embedded.attractions];
      }

      this.type = toggleType(3);
      this.path = url.getUrlByCountry(this.type, this.countryCode, this.page);

      response = await searchEvents(this.path, this.page);

      if (response._embedded) {
        result = [...result, ...response._embedded.venues];
      }
        return response

        // return [...response._embedded.type];
    }
    // Если ничего не выбрано
    if (!this.countryCode && this.searchQuery === '') {
      return console.log('Вы ничего не ввели');
      // pnotifyMessage(error, 'Please enter query!')
    }

    console.log(result);
    return result;
  }

  // modal Fetch
  async modalFetch(type, id) {
    this.path = url.getUrlById(type, id);
      if (type !== 'event' && type !== 'attraction' && type !== 'venue') {
          this.path = url.getEventsUrlById(id);
    }
    let response = await searchEvents(this.path, this.page);

    return response

    // return [...response._embedded.type];
  }

  // More from this author
  async moreInfoFetch(name) {
    let result = [];

    this.type = toggleType(1);
    this.path = url.getUrlByKeyword(this.type, name, this.page);

    let response = await searchEvents(this.path, this.page);

    if (response._embedded) {
      result = [...response._embedded.events];
    }

    this.type = toggleType(2);
    this.path = url.getUrlByKeyword(this.type, name, this.page);
    response = await searchEvents(this.path, this.page);

    if (response._embedded) {
      result = [...result, ...response._embedded.attractions];
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
    this.searchQuery = newQuery.trim();
  }
  /* 
  get page() {
    return this.page;
  }

  set page(newPage) {
    this.page = newPage;
  } */
}
