const express = require("express")
const Result = require("../models/Result")

const router = express.Router()


router.post('/save', async(req,res)=>{
    try {
        let fighter = {
            name : req.body.name
        }
    
    
        let result = new Result(fighter)
        result = await result.save()
            res.status(200).json({result : result})
        
    
    } catch (error) {
        console.error(error);
        res.status(500).json({errors : [{msg : error.message}]});
    }

})


router.get('/',async (req,res)=>{
    try {
        
        let result = await Result.find()
        if(!result){
            return res.status(400).json({
                error :[
                    {msg: 'No result found'}
                ]
            })
        }

        res.status(200).json({result:result})

    } catch (error) {
        console.error(error);
        response.status(500).json({errors : [{msg : error.message}]});
    }
})



router.delete('/delete' ,async (req,res)=>{
await Result.deleteMany({})
})

module.exports = router