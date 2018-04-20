package net.fvogel.controller;

import net.fvogel.model.City;
import net.fvogel.persistence.CitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/simulateerror")
public class ErrorSimulationResource {

    @GetMapping()
    public void shutDown() {
        System.out.println("Shutting down");
        System.exit(-1);
    }

}
