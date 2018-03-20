var express = require('express');
var router = express.Router();
var Person = require('../db/model/person.js');

router.put('/', function(req, res){

    var newPerson = new Person(req.body);

    newPerson.save(function(err, Person) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send(Person);
        }
    });
});

router.get('/', function(req, res){
    Person.find(function(err, persons){
        var status = 204;
        if (persons && persons.length > 0) {
            status = 200;
        }
        res.status(status).send(persons);
    });
});

router.get('/:id', function(req, res){
    Person.findById(req.params.id, function (err, person) {
        var status = 404;
        if (person) {
            status = 200;
        }
        res.status(status).send(person);
    });
});

module.exports = router;