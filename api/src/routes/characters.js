const { Router } = require('express');
const {getCharacters, getCharacterById} = require("../Controllers/characterController")

const router = Router();

router.get("/",getCharacters)

router.get("/:id",getCharacterById)




module.exports= router