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

    var queryArg = {};

    if (req.query.maxprice) {
        queryArg.price = {$lt: req.query.maxprice};
    }
    if (req.query.seats) {
        queryArg.seats = {$gt: req.query.seats - 1};
    }
    if (req.query.from) {
        queryArg.departureCity = req.query.from;
    }
    if (req.query.to) {
        queryArg.arrivalCity = req.query.to;
    }
    if (req.query.date) {
        var date = new Date(req.query.date);
        queryArg.date = date;
    }

    Flight.find(queryArg, function(err, flights){
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

/* Update with Booking */
router.put('/:id/bookings', function(req, res){

    var flightId = req.params.id;
    var seats = req.query.seats;
    if (!flightId || !seats) {
        res.status(400).send("No flightId or seats specified");
        return;
    }

    Flight.findById(flightId, function (err, flight) {
        if (!flight || flight.seats - seats < 0) {
            res.status(404).send("Flight not found or no seats available");
        }

        flight.seats = flight.seats - seats;

        if (flight.seats <= 0) {
            Flight.remove({_id: flight._id}, function (err) {
                res.status(200).send();
            });
            return;
        }

        flight.save(function(err) {
            if (!err) {
                res.status(200).send();
            }
        });

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