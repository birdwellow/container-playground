var mongoose = require('mongoose');

var hotelSchema = mongoose.Schema({
    id: String,
    name: String,
    city: String,
    price: Number,
    rooms: Number
});
var Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;