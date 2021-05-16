import { searchEvents }  from './api-fetch.js';
import refs from '../refs';
import Url from '../logic/url-factoring';
import toggleType from '../scripts/toggle-event-type';
const url = new Url;

export default class ApiService {
    constructor() {
        this.countryCode = '';
        this.searchQuery = '';
        this.page = '1';
        this.path = '';
        this.type = '';
    }

    // start Fetch 
    async firstFetch() {
        this.path = url.getUrlSuggest();
        const response = await searchEvents(this.path);
        
        const result = [...response._embedded.events, ...response._embedded.attractions, ...response._embedded.products, ...response._embedded.venues];
        return result;
    }

    // Form`s Fetch
    async mainFetch() {
        let result = [];
        this.countryCode = refs.selectCurrent.dataset.code;
        
        // Если выбрана страна, но пустой инпут
        if (this.countryCode && !this.searchQuery) {

            this.type = toggleType(1);
            this.path = url.getUrlByCountry(this.type, this.countryCode);
            
            let response = await searchEvents(this.path);

            if (response._embedded) {
                result = [...result, ...response._embedded.events];
            }

            this.type = toggleType(2);
            this.path = url.getUrlByCountry(this.type, this.countryCode);

            response = await searchEvents(this.path);

            if (response._embedded) {
                result = [...result, ...response._embedded.attractions];
            }
        }
        // Если выбран инпут, но не выбрана страна
        if (!this.countryCode && this.searchQuery) {

            this.type = toggleType(1);
            this.path = url.getUrlByKeyword(this.type, this.searchQuery);
            
            let response = await searchEvents(this.path);

            if (response._embedded) {
                result = [...result, ...response._embedded.events];
            }

            this.type = toggleType(2);
            this.path = url.getUrlByKeyword(this.type,  this.searchQuery);
            response = await searchEvents(this.path);

            if (response._embedded) {
                result = [...result, ...response._embedded.attractions];
            }
        }
        // Если выбран инпут и страна
        if (this.countryCode && this.searchQuery) {

            this.type = toggleType(1);
            this.path = url.getUrlFull(this.type, this.searchQuery, this.countryCode);
            
            let response = await searchEvents(this.path);

            if (response._embedded) {
                result = [...result, ...response._embedded.events];
            }
            
            this.type = toggleType(2);
            this.path = url.getUrlFull(this.type, this.searchQuery, this.countryCode);
            
            response = await searchEvents(this.path);

            if (response._embedded) {
                result = [...result, ...response._embedded.attractions];
            }
        }
        if (!this.countryCode && this.searchQuery === " " || this.searchQuery == "") {
            return console.log('Вы ничего не ввели');
        }
        
        console.log(result);
        return result;
    }

    // modal Fetch
    async modalFetch(type, id) {

        this.path = url.getUrlById(type, id);

        let response = await searchEvents(this.path);

        console.log(response);
        return [...response._embedded.type];
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
}
 