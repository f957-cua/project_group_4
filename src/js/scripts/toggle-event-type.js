export default function toggleType(number) {
    let result = '';
    switch (number) {
        case 1:
            result = 'events'
            break;
        case 2:
            result = 'attractions'
            break;
        case 3:
            result = 'venues'
            break;
        //   default:
        //     alert( "Нет таких значений" );
        //     }
    
    
    }
    return result;
}