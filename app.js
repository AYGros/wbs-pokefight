const express = require('express');
const path = require('path');
require('dotenv').config()

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const pokerouter = require("./routes/pokemon");
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const mongoose = require('mongoose');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//config the routers 
app.use("/pokemon", pokerouter)


// mongoDB Configuration
 mongoose.connect(process.env.MONGO_DB, {
     useNewUrlParser : true,
     useFindAndModify : false
 })
 .then(()=>{console.log('connection established')}).catch(e=>{console.log(e.message)});




/*mongoose.connect(process.env.MONGODB, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false,
    useCreateIndex : true
}).then((response) => {
    console.log('Connected to MongoDB Cloud Successfully......');
}).catch((error) => {
    console.error(error);
    process.exit(1); // stop the process if unable to connect to mongodb
});*/



module.exports = app;
