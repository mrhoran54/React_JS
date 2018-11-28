const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();

// requiring the routes file
let apiRoutes = require("./api-routes")
app.use('/api', apiRoutes)

// setting up body parser for our json requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/apiDatabase');

var db = mongoose.connection;

// Launch app to listen to port 8080! woo!

var port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log("yeeeeeehaw we're up and running on " + port);
});



