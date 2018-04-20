package net.fvogel.persistence;

import net.fvogel.model.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.annotation.PostConstruct;

@Configuration
@Profile("!disableTestDataSetup")
public class TestDataSetup {

    @Autowired
    CitiesRepository citiesRepository;

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
