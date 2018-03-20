var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./src/routes/persons.js');

var db = require('./src/db/db.js');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/persons', routes);

app.get('*', function(req, res){
    res.status(404).send('Invalid URL');
});

app.listen(3000);