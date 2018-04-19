var mongoose = require('mongoose');

var flightSchema = mongoose.Schema({
    id: String,
    date: Date,
    departureTime: String,
    departureCity: String,
    arrivalCity: String,
    arrivalTime: String,
    price: Number,
    seats: Number
});
var Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;