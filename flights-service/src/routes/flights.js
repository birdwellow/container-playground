var express = require('express');
var router = express.Router();
var Flight = require('../db/model/flight');
var Broker = require('../messaging/broker');



/* Create */
router.post('/', function(req, res){

    var newFlight = new Flight(req.body);

    newFlight.save(function(err, savedFlight) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(savedFlight);
        }
    });
});



/* Read */
router.get('/', function(req, res){
    Flight.find(function(err, flights){
        var status = 204;
        if (flights && flights.length > 0) {
            status = 200;
        }

        Broker.send('test-topic', {my:'kram'});

        res.status(status).send(flights);
    });
});

router.get('/:id', function(req, res){
    Flight.findById(req.params.id, function (err, flight) {
        var status = 404;
        if (flight) {
            status = 200;
        }
        res.status(status).send(flight);
    });
});



/* Update */
router.put('/', function(req, res){

    var updateFlight = req.body;

    Flight.update({ _id: updateFlight._id }, { $set: updateFlight}, function(err) {
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
    Flight.remove({_id: req.params.id}, function (err) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(204).send();
    });
});

module.exports = router;