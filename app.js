const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const pokerouter = require("./routes/pokemon");
const cors = require('cors');
const helmet = require('helmet');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//config the routers 
app.use("/pokemon", pokerouter)

module.exports = app;
