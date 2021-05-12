export default class ApiService {
    constructor() {
        this.BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
        this.API_KEY = 'HxNpbFKA9sq5XW5ZGrD232EXapf1LXRh'
        this.searchQuery = '';
        this.page = 1;
        this.size = 20;
    }
    
    fetchEvents() {
    
    const url = `${this.BASE_URL}?keyword=${this.searchQuery}&source=universe&size=${this.size}&page=${this.page}&apikey=${this.API_KEY}`  
    return fetch(url)
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

