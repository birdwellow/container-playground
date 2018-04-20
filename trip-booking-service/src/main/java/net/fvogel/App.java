package net.fvogel;

import net.fvogel.model.City;
import net.fvogel.persistence.CitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.Date;

@SpringBootApplication
public class App {

    @Autowired
    CitiesRepository citiesRepository;

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @PostConstruct
    public void insertData() {

        citiesRepository.deleteAll();

        citiesRepository.save(createCity("Rome", "Italy"));
        citiesRepository.save(createCity("Nice", "France"));
        citiesRepository.save(createCity("Luxor", "Egypt"));
    }

    private City createCity(String name, String country) {
        City city = new City();

        city.setName(name);
        city.setCountry(country);

        return city;
    }
}