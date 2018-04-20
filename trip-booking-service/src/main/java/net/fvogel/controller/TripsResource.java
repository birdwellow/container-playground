package net.fvogel.controller;

import net.fvogel.business.TripOfferService;
import net.fvogel.integration.FlightsServiceClient;
import net.fvogel.integration.HotelsServiceClient;
import net.fvogel.model.Flight;
import net.fvogel.model.Hotel;
import net.fvogel.model.TripBooking;
import net.fvogel.model.TripOffer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/trips")
public class TripsResource {

    private HotelsServiceClient hotelsServiceClient;
    private FlightsServiceClient flightsServiceClient;
    private TripOfferService tripOfferService;

    @Autowired
    public TripsResource(HotelsServiceClient hotelsServiceClient,
                         FlightsServiceClient flightsServiceClient,
                         TripOfferService tripOfferService) {
        this.hotelsServiceClient = hotelsServiceClient;
        this.flightsServiceClient = flightsServiceClient;
        this.tripOfferService = tripOfferService;
    }

    @GetMapping("/offers")
    public List<TripOffer> getTripOffers(
            @RequestParam(name = "start") String startCity,
            @RequestParam(name = "destination") String destinationCity,
            @RequestParam(name = "arrival") String arrivalDate,
            @RequestParam(name = "departure") String departureDate,
            @RequestParam(name = "persons") Integer persons,
            @RequestParam(name = "price", required = false) Double price
    ) {
        List<Flight> outBoundFlights = flightsServiceClient.getFlights(arrivalDate, startCity, destinationCity, persons);
        List<Flight> inBoundFlights = flightsServiceClient.getFlights(departureDate, destinationCity, startCity, persons);
        List<Hotel> hotels = hotelsServiceClient.getHotels(destinationCity, persons);

        return tripOfferService.createTripOffers(outBoundFlights, hotels, inBoundFlights).stream()
                .filter(tripOffer -> tripOffer.getPrice() <= price)
                .collect(Collectors.toList());
    }

    @PostMapping("/booking")
    public void bookTrip(@RequestBody TripBooking tripBooking) {
        flightsServiceClient.bookFlight(tripBooking.getOutboundFlightId(), tripBooking.getPersons());
        flightsServiceClient.bookFlight(tripBooking.getInboundFlightId(), tripBooking.getPersons());
        hotelsServiceClient.getHotels(tripBooking.getHotelId(), tripBooking.getPersons());
    }

}
