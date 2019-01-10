import stack from '../config/Stack';

function init() {
    if( !localStorage.stack ) {
        localStorage.stack =  JSON.stringify(stack)
    }
}


function getCards() {
    init()
    return JSON.parse(localStorage.stack)
}


export default getCards()