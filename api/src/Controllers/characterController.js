const axios = require("axios")
const URL="https://rickandmortyapi.com/api/"



async function getCharacters (req, res){
    try {
        let characters= (await axios.get(`${URL}character`)).data.results
        .map(e=>{
            return {
                id: e.id,
                name: e.name,
                status: e.status,
                species: e.species,
                image: e.image,
                episode: e.episode
            }
        })
        res.send(characters)
        
    } catch (error) {
        console.log(error)
    }
}

function getCharacterById(req, res){
    
    const {id} = req.params
    axios.get(`${URL}character/${id}`)
    .then(response=>{
        let character={
                        id: response.data.id,
                        name: response.data.name,
                        status: response.data.status,
                        species: response.data.species,
                        image: response.data.image,
                        episode: response.data.episode
                    }
        

        res.send(character)
    })
    .catch(error=> console.log(error))
    
    
    
    
    
}

module.exports= {
    getCharacters,
    getCharacterById
}