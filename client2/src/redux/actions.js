import axios from "axios"

export const GET_CHARACTERS= "GET_CHARACTERS"

export const getAllCharacters=()=>{
return function(dispatch){
    return axios("http://localhost:3001/characters")
    .then(resp=> dispatch({type: GET_CHARACTERS, payload: resp.data}))
    .catch(error=>console.log(error))
}
}