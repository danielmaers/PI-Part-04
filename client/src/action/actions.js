import axios from "axios";

export function getAllCharacters(){    
    return function (dispatch){
        return axios("http://localhost:3001/characters/")
                .then(res=>  dispatch({type: "GET_CHARACTERS", payload: res.data}))
                .catch((error)=>console.log(error))
    }
}



