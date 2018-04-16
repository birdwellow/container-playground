var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    nationality: String
});
var Person = mongoose.model("Person", personSchema);

module.exports = Person;