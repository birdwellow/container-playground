package net.fvogel.controller;

import net.fvogel.model.City;
import net.fvogel.persistence.CitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/")
public class TravelOffersResource {

    private CitiesRepository citiesRepository;

    @Autowired
    public TravelOffersResource(CitiesRepository citiesRepository) {
        this.citiesRepository = citiesRepository;
    }

    @GetMapping("/cities")
    public List<City> getCities() {
        List<City> cities = citiesRepository.findAll();
        return cities;
    }

}
