
import stack from '../config/Stack';
import { IDeckProps } from './../component/Deck';


function init() {
    if( !localStorage.stack ) {
        localStorage.stack =  JSON.stringify(stack)
    }
}


function getStack() : IDeckProps[] {
    init()
    return JSON.parse(localStorage.stack)
}

export default {stack: getStack()}


