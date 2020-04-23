// set up ========================
var express = require('express');
var app = express();                                // create our app w/ express
var mongoose = require('mongoose');                 // mongoose for mongodb
var morgan = require('morgan');                     // log requests to the console (express4)
var bodyParser = require('body-parser');            // pull information from HTML POST (express4)
var methodOverride = require('method-override');    // simulate DELETE and PUT (express4)
var database = require('./config/database');        // import batabase configurations
var port = process.env.PORT || 8888;                // set the port

// Add headers
app.all("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.append('Access-Control-Allow-Credentials', 'true');
    next();
});

// configuration ===============================================================
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(database.url, options).then(                  // connect to mongoDB database on modulus.io
    res => {
        console.log("database connected correctly");
    },
    err => {
        console.log("DATABASE CONECTION ERROR!");
    }
);

app.use(
    express.static(__dirname + '/public'),                      // set the static files location /public/img will be /img for users
    morgan('dev'),                                              // log every request to the console
    bodyParser.urlencoded({ 'extended': 'true' }),              // parse application/x-www-form-urlencoded
    bodyParser.json(),                                          // parse application/json
    bodyParser.json({ type: 'application/vnd.api+json' }),      // parse application/vnd.api+json as json
    methodOverride()
);

// routes ======================================================================
require('./routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port : " + port);