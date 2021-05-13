import { searchEvents }  from './api-fetch.js';
export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = '1'
    }

    fetchEvents() {
     const eventsData = searchEvents(this.searchQuery).then(({_embedded}) => {
         this.page += 1;
             return _embedded.events
     })
        return eventsData
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




 