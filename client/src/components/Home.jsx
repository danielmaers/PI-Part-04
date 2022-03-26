import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getAllCharacters } from "../action/actions";
    

export function Home(){
const dispatch = useDispatch();
const characters = useSelector(state=> state.allCharacters)

useEffect(()=>{
dispatch(getAllCharacters())
}, [])
console.log(characters)

    return (
        <div>
           {characters && characters.map(char=>{
               return (
                   <div key={char.id}>
                       <img src={char.img} alt={char.name} />
                       <p>{char.name}</p>
                       <p>{char.status}</p>
                       <p>{char.species}</p>
                   </div>
               )
           })}
        </div>
    )
}