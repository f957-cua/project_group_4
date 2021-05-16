import refs from '../refs';

export default class Url {
    constructor() {
        this.API_KEY = 'HxNpbFKA9sq5XW5ZGrD232EXapf1LXRh';
        this.BASE_URL = `https://app.ticketmaster.com/discovery/v2/`;
        // this.size = 20;
        this.type = "events";
    }
    getUrlById(id) {
        return `${this.BASE_URL}events/${id}?apikey=${this.API_KEY}`;
    }
    getUrlByKeyword(keyword, page = 1,) {
        return `${this.BASE_URL}events.json?apikey=${API_KEY}&keyword=${keyword}&page=${page}`;
    }
    getUrlByCountry(countryCode) {
        return `${this.BASE_URL}events.json?apikey=${API_KEY}&countryCode=${countryCode}&size=${size}&page=${page}`;
    };
    getUrlFull(keyword, countryCode, page = 1) {
        return `${this.BASE_URL}events.json?apikey=${API_KEY}&keyword=${keyword}&countryCode=${countryCode}&page=${page}`;
    }
    getUrlSuggest(page = 1) {
        return `${this.BASE_URL}suggest?apikey=${API_KEY}&page=${page}`;
    }
}

// можно page, countryCode, keyword ... хранить в объекте, 
// а в функции передавать его деструктуризированным 

// getUrlFull(({keyword, countryCode, page})) {
//     return `${this.BASE_URL}events.json?apikey=${API_KEY}&keyword=${keyword}&countryCode=${countryCode}&page=${page}`;
// }