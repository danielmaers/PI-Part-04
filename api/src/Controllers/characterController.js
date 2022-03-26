const {Characters, Episodes} = require("../db");
const axios = require("axios");

async function getAllCharacters(req, res, next){
try {
    let character =( await axios.get("https://rickandmortyapi.com/api/character")).data.results.map(char=>{
        return {
            id: char.id,
              name: char.name,
              status: char.status,
              species: char.species,
              img:char.image 
              }
    })
    
    res.send(character)
    
} catch (error) {
    next(error)
}
}

function getCharacterById(){

}

function getCharByName(){

}


function createChar(){

}

module.exports={
    getAllCharacters,
    getCharByName,
    getCharacterById,
    createChar
}