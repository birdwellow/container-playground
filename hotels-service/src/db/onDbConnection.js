var Hotel = require('../db/model/hotel');

module.exports = function () {

    Hotel.find(function(err, hotels){
        if (err || (hotels && hotels.length > 0)) {
            console.log("Test data already present");
            return;
        }

        var hotels = [
            {
                "city": "Rome",
                "name": "Villa Cantuccini",
                "price": 869.00,
                "rooms": 9
            },
            {
                "city": "Rome",
                "name": "UnoDue Business Hotel",
                "price": 109.00,
                "rooms": 142
            },
            {
                "city": "Rome",
                "name": "Hotel Verdi",
                "price": 279.49,
                "rooms": 39
            },

            {
                "city": "Nice",
                "name": "Hotel d'Azur",
                "price": 399.99,
                "rooms": 45
            },
            {
                "city": "Nice",
                "name": "La Riviera",
                "price": 419.00,
                "rooms": 210
            },

            {
                "city": "Luxor",
                "name": "Hotel Luxor",
                "price": 139.00,
                "rooms": 1191
            },
            {
                "city": "Luxor",
                "name": "Hotel RAMSys",
                "price": 318.00,
                "rooms": 370
            }
        ];

        for (var i in hotels) {
            var hotel = new Hotel(hotels[i]);
            hotel.save(function(err, savedHotel) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`Saved hotel: ${savedHotel}`);
                }
            });
        }

    });

};