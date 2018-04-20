var mongoose = require('mongoose');
var onDbConnection = require('./onDbConnection');

const HOST = process.env.MONGO_HOST || 'localhost';
const PORT = process.env.MONGO_PORT || '27017';
const DATABASE = process.env.MONGO_DATABASE || 'hotels';

var connectString = `mongodb://${HOST}:${PORT}/${DATABASE}`;

mongoose.connect(connectString);

mongoose.connection.on('connected', onDbConnection);

module.exports = mongoose;