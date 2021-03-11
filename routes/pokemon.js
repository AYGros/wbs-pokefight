const express = require ("express")
const router = express.Router();
const pokedata = require("../pokemon.json")


//get all pokemon 

router.get ('/', (req,res)=>{
    res.status(200).json(pokedata)

})


module.exports= router;