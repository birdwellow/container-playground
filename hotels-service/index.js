var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var hotelsRoutes = require('./src/routes/hotels');

// Establish Message Broker connection
var Broker = require('./src/messaging/broker');


// Establish Mongo DB Connection
var dbConnection = require('./src/db/dbConnection');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/hotels', hotelsRoutes);

app.use('*', function(req, res){
    res.status(404).send('Invalid URL');
});

app.listen(3002);