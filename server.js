const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();

app.use(express.json());

//start server

app.listen(8085 , () => {
    console.log('Server is running on port 8085');
})

//

app.get('/' , (req,res) => {
    res.send("Server is running on port 8085");
})

//connect to database
mongoose.connect('mongodb://localhost:27017/MyDB');

const db = mongoose.connection;

db.on('error' , () => {
    console.log('Error connecting to database');
})

db.once('open',() =>{
    console.log('Connected to database');
})


/**
 * Stich the route to the server
 */

require("./routes/auth.route")(app)
