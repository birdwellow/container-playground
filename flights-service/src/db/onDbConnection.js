var Flight = require('../db/model/flight');

module.exports = function () {

    Flight.find(function(err, flights){
        if (err || (flights && flights.length > 0)) {
            console.log("Test data already present");
            return;
        }

        var flights = [
            {
                "date": "2018-04-23T00:00:00",
                "departureCity": "Munich",
                "departureTime": "08:35:00",
                "arrivalCity": "Luxor",
                "arrivalTime": "10:45:00",
                "price": 278,
                "seats": 125
            },
            {
                "date": "2018-05-04T00:00:00",
                "departureCity": "Luxor",
                "departureTime": "07:55:00",
                "arrivalCity": "Munich",
                "arrivalTime": "10:05:00",
                "price": 328,
                "seats": 190
            },

            {
                "date": "2018-04-23T00:00:00",
                "departureCity": "Munich",
                "departureTime": "09:25:00",
                "arrivalCity": "Paris",
                "arrivalTime": "10:35:00",
                "price": 124,
                "seats": 8
            },
            {
                "date": "2018-05-04T00:00:00",
                "departureCity": "Paris",
                "departureTime": "16:15:00",
                "arrivalCity": "Munich",
                "arrivalTime": "17:25:00",
                "price": 249,
                "seats": 18
            },

            {
                "date": "2018-04-23T00:00:00",
                "departureCity": "Munich",
                "departureTime": "11:05:00",
                "arrivalCity": "Rome",
                "arrivalTime": "12:15:00",
                "price": 113,
                "seats": 3
            },
            {
                "date": "2018-05-04T00:00:00",
                "departureCity": "Rome",
                "departureTime": "18:40:00",
                "arrivalCity": "Munich",
                "arrivalTime": "19:50:00",
                "price": 247,
                "seats": 6
            },

        ];

        for (var i in flights) {
            var flight = new Flight(flights[i]);
            flight.save(function(err, savedFlight) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`Saved flight: ${savedFlight}`);
                }
            });
        }

    });

};