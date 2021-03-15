const express = require ("express");
const pokemonController = require("../controllers/pokemonController");
const router = express.Router();


//get all pokemon 

router.get ('/', pokemonController.getAllPokemon)

// get a one pokemon by id and info

router.get('/:id/:info' ,pokemonController.getInfoPokemon)


// get a one pokemon by id

router.get('/:id', pokemonController.getOnePokemon)



module.exports= router;