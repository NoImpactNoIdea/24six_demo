//IMPORTS AND TRUSTED MINIMAL FRAMEWORKS
const express = require('express'); 
const app = express();  ///EXPRESS
require('dotenv').config(); ///ENV VARS

app.use(express.json());
app.use(express.static('public')); //HTML ASSOCIATION

const PORT = process.env.PORT; ///.env FILE

///ROUTING ENDPOINTS GET/POST
const post_track = require('./api/routes/post_track'); ///POST ENDPOINT WITH EXPECTED PARAMETERS
const get_track = require('./api/routes/get_track'); ///GET ENDPOINT WITH EXPECTED FETCH



///USE STATEMENTS FOR ROUTING
app.use('/post_track', post_track); 
app.use('/get_track', get_track); 

app.listen(PORT, ()=>(console.log(`Listening on: ${PORT}`))) ///ENV FILE FOR PORT CHANGE, DEFAULTING TO 3000

module.exports = app;