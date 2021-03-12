const pokedata = require("../pokemon.json")


const getAllPokemon = (req,res,next)=>{
    res.status(200).json(pokedata)
}

const getOnePokemon =  async (req, res, next)=>{

    try {
        const {id}=req.params;
    const numberId=Number(id);
    const selectedPokemon =  await pokedata.find((pokemon)=>
    {return  pokemon.id === numberId }
    )

    res.status(200).json(selectedPokemon)

    } catch (error) {
        res.sendStatus(404)
    }
}




module.exports={
    getAllPokemon :getAllPokemon ,
    getOnePokemon : getOnePokemon }