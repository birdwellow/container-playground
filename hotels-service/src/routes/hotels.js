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