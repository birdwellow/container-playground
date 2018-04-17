var mongoose = require('mongoose');

const HOST = process.env.MONGO_HOST || 'localhost';
const PORT = process.env.MONGO_PORT || '27017';
const DATABASE = process.env.MONGO_DATABASE || 'flights';

var connectString = `mongodb://${HOST}:${PORT}/${DATABASE}`;

mongoose.connect(connectString);

module.exports = mongoose;