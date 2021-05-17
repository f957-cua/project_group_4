import {pnotifyMessage} from './pnotify.js';     
const searchEvents = async (path) => {
    try {
        const response  = await fetch(path);
    const result = await response.json();
    
    if (!response.ok) {
         throw new ClassError(result.message, result.data, result.code);
    }
    return result
    }
    catch(error) {
        pnotifyMessage ('request failed')
    }
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
