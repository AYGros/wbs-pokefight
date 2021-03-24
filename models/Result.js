const mongoose = require("mongoose")


const ResultSchema = new mongoose.Schema({
    name : {type: String , required : true },
    date_win : {type:Date , default: function(){ return Date.now()  + 5*365*24*60*60*1000}}

},
);




const Result = mongoose.model('result' , ResultSchema )

module.exports = Result