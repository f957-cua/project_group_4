const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
const API_KEY = 'HxNpbFKA9sq5XW5ZGrD232EXapf1LXRh';
     
const searchEvents = async (query,page = 1) => {
    const url = `${BASE_URL}events.json?keyword=${query}&page=${page}&apikey=${API_KEY}`  
    const response  = await fetch(url);
    const result = await response.json();
    
    if (!response.ok) {
        throw new ClassError(result.message, result.data, result.code);
    }
    return result
}

const searchAttractions = async (query,page = 1,size = 20) => {
    const url = `${BASE_URL}attractions.json?keyword=${query}&page=${page}&apikey=${API_KEY}`  
    const response  = await fetch(url);
    const result = await response.json();
    
    if (!response.ok) {
        throw new ClassError(result.message, result.data, result.code);
    }
    return result
}

const searchSuggest = async (query,page = 1,size = 20) => {
    const url = `${BASE_URL}suggest?apikey=${API_KEY}&page=${page}`  
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


export { searchEvents, searchAttractions, searchSuggest };



// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
// const API_KEY = 'HxNpbFKA9sq5XW5ZGrD232EXapf1LXRh';
     
// const searchEvents = async (query,page = 1,size = 20) => {
//     const url = `${BASE_URL}events.json?keyword=${query}&size=${size}&page=${page}&apikey=${API_KEY}`  
//     const response  = await fetch(url);
//     const result = await response.json();

//     const urlAttractions = `${BASE_URL}attractions.json?keyword=${query}&source=universe&size=${size}&page=${page}&apikey=${API_KEY}`
    
//     if (!response.ok) {
//         throw new ClassError(result.message, result.data, result.code);
//     }
//     return result
// }

// const searchAttractions = async (query,page = 1,size = 20) => {
//     const url = `${BASE_URL}attractions.json?keyword=${query}&size=${size}&page=${page}&apikey=${API_KEY}`  
//     const response  = await fetch(url);
//     const result = await response.json();
    
//     if (!response.ok) {
//         throw new ClassError(result.message, result.data, result.code);
//     }
//     return result
// }