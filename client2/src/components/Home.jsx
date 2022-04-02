import React, {useEffect} from "react"
import {getAllCharacters} from "../redux/actions"
import {useDispatch, useSelector} from "react-redux"

function Home(){
    const dispatch= useDispatch()
    const characters= useSelector(state=> state.characters)
    useEffect(()=>{
        dispatch(getAllCharacters())
    }, [dispatch])
    return(
        <div>
           <h1>Rick and Morty Chars</h1>

        {
            characters&&characters.map(char=>{
                return(
                    <div key={char.id} >
                        <p>{char.name}</p>
                        <img src={char.image} alt={char.name}/>
                    </div>
                )
            })
        }

        </div>
    )
}

export default Home
