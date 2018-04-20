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
@RequestMapping(path = "/cities")
public class CitiesResource {

    private CitiesRepository citiesRepository;

    @Autowired
    public CitiesResource(CitiesRepository citiesRepository) {
        this.citiesRepository = citiesRepository;
    }

    @GetMapping()
    public List<City> getCities() {
        List<City> cities = citiesRepository.findAll();
        return cities;
    }

}
