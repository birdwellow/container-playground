var express = require('express');
var router = express.Router();
var Flight = require('../db/model/hotel');
var Broker = require('../messaging/broker');



/* Create */
router.post('/', function(req, res){

    var booking = req.body;
    if (!booking.flightId || !booking.seats) {
        res.status(400).send("No flightId or seats specified");
        return;
    }

    Flight.findById(booking.flightId, function (err, flight) {
        if (!flight || flight.seats - booking.seats < 0) {
            res.status(404).send("Flight not found or no seats available");
        }

        flight.seats = flight.seats - booking.seats;

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

module.exports = router;