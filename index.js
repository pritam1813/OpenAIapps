const express = require("express");
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

//Using middleware express.urlencoded() for POST requests
app.use(express.urlencoded({extended:false}));

//Setting View Engine
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(port, () => {console.log(`App Running On Port: ${port}`)});