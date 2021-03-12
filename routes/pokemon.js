const express = require ("express")
const router = express.Router();
const pokedata = require("../pokemon.json")


//get all pokemon 

router.get ('/', (req,res)=>{
    res.status(200).json(pokedata)

})


// get a one pokemon by id

router.get('/:id', (req, res)=>{
    const {id}=req.params;
    const numberId=Number(id);
    /*console.log(req.params);
    console.log(id);
    console.log(numberId);
    console.log(pokedata[0].id);*/
    const selectedPokemon = pokedata.find((pokemon)=>
    {return  pokemon.id === numberId }
    )

    if (selectedPokemon) {res.json(selectedPokemon);}
    else {res.sendStatus(404)}
})

module.exports= router;