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

const getInfoPokemon = async (req,res,next) => {
    const {id, info} =req.params;
    
    const numberId=Number(id)
    const findPokemon =  await pokedata.find((pokemon)=>
    {return  pokemon.id === numberId }
    )
    // console.log(findPokemon.name);
    // res.status(200).json(findPokemon.name)

    switch (info) {
        case "name":
            res.status(200).json(findPokemon.name)
            break;
            case "type":
                res.status(200).json(findPokemon.type)
                break;
                case "base":
                    res.status(200).json(findPokemon.base)
                    break;
        default:
            res.status(200).json(findPokemon)

            break;
    }
;}


module.exports={
    getAllPokemon :getAllPokemon ,
    getOnePokemon : getOnePokemon ,
    getInfoPokemon:getInfoPokemon}