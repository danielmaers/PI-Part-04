import {
    GET_CHARACTERS
} from "./actions"

const initialState={
    characters:[],
    episodes:[],
    character:{}
}

export function reducer(state= initialState,{type, payload}){
switch(type){
    case GET_CHARACTERS:
        let arr= payload
        return {...state, characters:arr}
    default: return state
}


}

