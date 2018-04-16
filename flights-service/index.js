var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var flightsRoutes = require('./src/routes/flights');

// Establish Message Broker connection
var Broker = require('./src/messaging/broker');

Broker.on('test-topic', function (payload) {
    console.warn(payload);
});


// Establish Mongo DB Connection
var dbConnection = require('./src/db/dbConnection');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/flights', flightsRoutes);

app.use('*', function(req, res){
    res.status(404).send('Invalid URL');
});

app.listen(3000);