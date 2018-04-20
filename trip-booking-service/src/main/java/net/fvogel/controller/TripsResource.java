package net.fvogel.controller;

import net.fvogel.integration.FlightsService;
import net.fvogel.integration.HotelsService;
import net.fvogel.model.City;
import net.fvogel.model.Hotel;
import net.fvogel.persistence.CitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/trips")
public class TripsResource {

    private HotelsService hotelsService;
    private FlightsService flightsService;

    @Autowired
    public TripsResource(HotelsService hotelsService, FlightsService flightsService) {
        this.hotelsService = hotelsService;
        this.flightsService = flightsService;
    }

    @GetMapping()
    public void getTours(@RequestParam(name = "destination", required = false) String destination) {
        List<Hotel> hotels = hotelsService.getHotels(destination, null);
        System.out.println(hotels);
    }

}
