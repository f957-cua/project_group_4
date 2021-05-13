const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const API_KEY = 'HxNpbFKA9sq5XW5ZGrD232EXapf1LXRh';
     
const searchEvents = async (query,page = 1,size = 20) => {
    const url = `${BASE_URL}?keyword=${query}&source=universe&size=${size}&page=${page}&apikey=${API_KEY}`  
    const response  = await fetch(url);
    const result = await response.json();
     
    if (!response.ok) {
        throw new ClassError(result.message, result.data, result.code);
    }
    return result
}

class ClassError extends Error {
constructor(message = 'Something went wrong', data = '', code = '') {
super();
this.message = message;
this.data = data;
this.code = code;
}
}


export { searchEvents };



