const {Router} = require ("express");
const {getAllEpisodes} = require("../Controllers/episodeController")

const router= Router();

router.get("/", getAllEpisodes);



module.exports= router