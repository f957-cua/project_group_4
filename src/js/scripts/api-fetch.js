import { pnotifyMessage } from './pnotify.js';
import { loader } from '../scripts/loader.js';  
const searchEvents = async (path) => {
    try {
        const response = await fetch(path);
        const result = await response.json();
        return result
    }
    catch {
        loader.hide()
        pnotifyMessage ('request failed','opts')
        throw new ClassError(result.message, result.data, result.code);
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
