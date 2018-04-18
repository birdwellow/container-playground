var express = require('express');
var router = express.Router();
var Hotel = require('../db/model/hotel');
var Broker = require('../messaging/broker');



/* Create */
router.post('/', function(req, res){

    var newHotel = new Hotel(req.body);

    newHotel.save(function(err, savedHotel) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(savedHotel);
        }
    });
});



/* Read */
router.get('/', function(req, res){
    Hotel.find(function(err, hotels){
        var status = 204;
        if (hotels && hotels.length > 0) {
            status = 200;
        }

        res.status(status).send(hotels);
    });
});

router.get('/:id', function(req, res){
    Hotel.findById(req.params.id, function (err, hotel) {
        var status = 404;
        if (hotel) {
            status = 200;
        }
        res.status(status).send(hotel);
    });
});



/* Update */
router.put('/', function(req, res){

    var updateHotel = req.body;

    Hotel.update({ _id: updateHotel._id }, { $set: updateHotel}, function(err) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(204).send();
        }
    });
});

/* Update with Booking */
router.put('/:id/bookings', function(req, res){

    var hotelId = req.params.id;
    var rooms = req.query.rooms;
    if (!hotelId || !rooms) {
        res.status(400).send("No hotelId or rooms specified");
        return;
    }

    Hotel.findById(hotelId, function (err, hotel) {
        if (!hotel || hotel.rooms - booking.rooms < 0) {
            res.status(404).send("Hotel not found or no rooms available");
        }

        hotel.rooms = hotel.rooms - booking.rooms;

        if (hotel.rooms <= 0) {
            Hotel.remove({_id: hotel._id}, function (err) {
                res.status(200).send();
            });
            return;
        }

        hotel.save(function(err) {
            if (!err) {
                res.status(200).send();
            }
        });

    });

});


/* Delete */
router.delete('/:id', function(req, res){
    console.log("Removing " + req.params.id);
    Hotel.remove({_id: req.params.id}, function (err) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(204).send();
    });
});

module.exports = router;