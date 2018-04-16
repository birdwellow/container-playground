var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/flights');

module.exports = mongoose;