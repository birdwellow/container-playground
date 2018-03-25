var express = require('express');
var router = express.Router();
var Person = require('../db/model/person');
var Broker = require('../messaging/broker');



/* Create */
router.post('/', function(req, res){

    var newPerson = new Person(req.body);

    newPerson.save(function(err, savedPerson) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(savedPerson);
        }
    });
});



/* Read */
router.get('/', function(req, res){
    Person.find(function(err, persons){
        var status = 204;
        if (persons && persons.length > 0) {
            status = 200;
        }

        Broker.send('test-topic', 'kram');

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



/* Update */
router.put('/', function(req, res){

    var updatePerson = req.body;

    Person.update({ _id: updatePerson._id }, { $set: updatePerson}, function(err) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(204).send();
        }
    });
});



/* Delete */
router.delete('/:id', function(req, res){
    console.log("Removing " + req.params.id);
    Person.remove({_id: req.params.id}, function (err) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(204).send();
    });
});

module.exports = router;