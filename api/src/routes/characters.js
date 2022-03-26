const {Router} = require ("express");
const {getAllCharacters, getCharByName, getCharacterById, createChar}= require("../Controllers/characterController")

const router= Router();

router.get("/", getAllCharacters);
router.get("/:charId", getCharacterById);
router.get("/name", getCharByName);
router.post("/", createChar)


module.exports= router
