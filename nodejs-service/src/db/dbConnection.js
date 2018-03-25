var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/traveloffers');

module.exports = mongoose;