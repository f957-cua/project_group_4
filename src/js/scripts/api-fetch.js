     
const searchEvents = async (path) => {  
    const response  = await fetch(path);
    const result = await response.json();
    
    if (!response.ok) {
        throw new ClassError(result.message, result.data, result.code);
    }
    return result
}

// const searchId = async (id) => {
//     const url = `${BASE_URL}events.json?id=${id}Swa&source=universe&apikey=${API_KEY}`  
//     const response  = await fetch(url);
//     const result = await response.json();
    
//     if (!response.ok) {
//         throw new ClassError(result.message, result.data, result.code);
//     }
//     return result
// }

class ClassError extends Error {
constructor(message = 'Something went wrong', data = '', code = '') {
super();
this.message = message;
this.data = data;
this.code = code;
}
}

export { searchEvents };
