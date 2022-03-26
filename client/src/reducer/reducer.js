const initialState={
    allCharacters:[],
    charcterDetail:{}
}

function reducer(state=initialState, {type, payload}){
    switch (type){
        case "GET_CHARACTERS": 
        return {
            ...state,
            allCharacters: payload
        }
        default: return state
    }
}

export default reducer;