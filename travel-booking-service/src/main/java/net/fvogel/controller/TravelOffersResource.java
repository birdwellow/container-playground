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
@RequestMapping(path = "/")
public class TravelOffersResource {

    private CitiesRepository citiesRepository;
    private HotelsService hotelsService;
    private FlightsService flightsService;

    @Autowired
    public TravelOffersResource(CitiesRepository citiesRepository, HotelsService hotelsService, FlightsService flightsService) {
        this.citiesRepository = citiesRepository;
        this.hotelsService = hotelsService;
        this.flightsService = flightsService;
    }

    @GetMapping("/cities")
    public List<City> getCities() {
        List<City> cities = citiesRepository.findAll();
        return cities;
    }

    @GetMapping("/tours")
    public void getTours(@RequestParam(name = "destination", required = false) String destination) {
        List<Hotel> hotels = hotelsService.getHotels(destination, null);
        System.out.println(hotels);
    }

    @GetMapping("/error")
    public void shutDown() {
        System.out.println("Shutting down");
        System.exit(-1);
    }

}
