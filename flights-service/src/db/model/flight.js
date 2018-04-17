var mongoose = require('mongoose');

var flightSchema = mongoose.Schema({
    id: String,
    departure: {
        city: String,
        datetime: Date
    },
    arrival: {
        city: String,
        datetime: Date
    },
    price: Number,
    seats: Number
});
var Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;