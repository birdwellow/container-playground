package net.fvogel.persistence;

import net.fvogel.model.City;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CitiesRepository extends MongoRepository<City, String> {

}
