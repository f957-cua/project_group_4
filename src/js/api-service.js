export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.size = 20;
    }
    
    fetchEvents() {
    const BASE_URL = 'https://newsuperserver.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json';
    const API_KEY = 'HxNpbFKA9sq5XW5ZGrD232EXapf1LXRh'
        
    return fetch(`${BASE_URL}?keyword=${this.searchQuery}&source=universe&size=${this.size}&page=${this.page}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(({_embedded}) => {
            this.page += 1;
             return _embedded.events
         })
        .catch(error => console.log(error))

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

