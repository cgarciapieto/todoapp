//The main point of Entry To do node.js app//
const config = require('./config');

// Express
const express = require('express');
const app = express();
const port = 3000;

//Start listening for connectins
console.log("listening on port" + port + "..");
app.listen(port);

// Mongo Stuff
const mongoose = require('mongoose');


//Actually connect to the database (lets use a promise)
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true }).then(()=> {
        console.log("Successfully connected to the database.");
    },
    err => {
        console.log("ERROR connecting to the database.");
        throw err;
    }
);

const setupcontroller = require('./controllers/setupController');
setupcontroller(app);



