export default class Url {
  constructor() {
    this.API_KEY = 'HxNpbFKA9sq5XW5ZGrD232EXapf1LXRh';
    this.BASE_URL = `https://app.ticketmaster.com/discovery/v2/`;
  }
  getUrlById(type, id) {
    return `${this.BASE_URL}${type}s/${id}?apikey=${this.API_KEY}`;
  }
  getUrlByKeyword(type, keyword, page = 1) {
    return `${this.BASE_URL}${type}.json?apikey=${this.API_KEY}&keyword=${keyword}&page=${page}`;
  }
  getUrlByCountry(type, countryCode, page = 1) {
    return `${this.BASE_URL}${type}.json?apikey=${this.API_KEY}&countryCode=${countryCode}&page=${page}`;
  }
  getUrlFull(type, keyword, countryCode, page = 1) {
    return `${this.BASE_URL}${type}.json?source=ticketmaster&apikey=${this.API_KEY}&keyword=${keyword}&countryCode=${countryCode}&page=${page}`;
  }
  getUrlSuggest(page = 1) {
    return `${this.BASE_URL}suggest?&&apikey=${this.API_KEY}&page=${page}`;
    }
    getEventsUrlById(id) {
    return `${this.BASE_URL}events/${id}?apikey=${this.API_KEY}`;
  }
}

// можно page, countryCode, keyword ... хранить в объекте,
// а в функции передавать его деструктуризированным

// getUrlFull(({keyword, countryCode, page})) {
//     return `${this.BASE_URL}events.json?apikey=${API_KEY}&keyword=${keyword}&countryCode=${countryCode}&page=${page}`;
// }
