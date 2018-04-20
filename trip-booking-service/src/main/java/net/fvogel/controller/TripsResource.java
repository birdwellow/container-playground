package net.fvogel.controller;

import net.fvogel.integration.FlightsServiceClient;
import net.fvogel.integration.HotelsServiceClient;
import net.fvogel.model.Flight;
import net.fvogel.model.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/trips")
public class TripsResource {

    private HotelsServiceClient hotelsServiceClient;
    private FlightsServiceClient flightsServiceClient;

    @Autowired
    public TripsResource(HotelsServiceClient hotelsServiceClient, FlightsServiceClient flightsServiceClient) {
        this.hotelsServiceClient = hotelsServiceClient;
        this.flightsServiceClient = flightsServiceClient;
    }

    @GetMapping()
    public void getTrips(
            @RequestParam(name = "start") String startCity,
            @RequestParam(name = "destination") String destinationCity,
            @RequestParam(name = "arrival") String arrivalDate,
            @RequestParam(name = "departure") String departureDate,
            @RequestParam(name = "persons") Integer persons,
            @RequestParam(name = "price", required = false) Double price
    ) {
        List<Flight> outBoundFlights = flightsServiceClient.getFlights(arrivalDate, startCity, destinationCity, persons);
        List<Hotel> hotels = hotelsServiceClient.getHotels(destinationCity, persons);
        List<Flight> inBoundFlights = flightsServiceClient.getFlights(departureDate, destinationCity, startCity, persons);

        return;
    }

}
