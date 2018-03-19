package net.fvogel.persistence;

import net.fvogel.model.TravelOffer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TravelOfferRepository extends MongoRepository<TravelOffer, String> {

}
