package net.fvogel.controller;

import net.fvogel.controller.exception.NoEntityFoundException;
import net.fvogel.controller.exception.NoEntityLeftException;
import net.fvogel.model.TravelOffer;
import net.fvogel.persistence.TravelOfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "traveloffers")
public class TravelOffersResource {

    private TravelOfferRepository travelOfferRepository;

    @Autowired
    public TravelOffersResource(TravelOfferRepository travelOfferRepository) {
        this.travelOfferRepository = travelOfferRepository;
    }

    @PostMapping("/{id}")
    public TravelOffer bookTravelOffer(@PathVariable("id") String travelOfferId) {
        Optional<TravelOffer> foundTravelOffer = travelOfferRepository.findById(travelOfferId);
        if (!foundTravelOffer.isPresent()) {
            throw new NoEntityFoundException("No offer with ID " + travelOfferId + " found");
        }
        TravelOffer existingTravelOffer = foundTravelOffer.get();
        int amount = existingTravelOffer.getAmount();
        int remaining = amount - 1;

        existingTravelOffer.setAmount(remaining);

        if (remaining < 0) {
            throw new NoEntityLeftException("No offers for ID " + travelOfferId + " are left");
        } else if (remaining == 0) {
            travelOfferRepository.deleteById(travelOfferId);
        } else {
            existingTravelOffer = travelOfferRepository.save(existingTravelOffer);
        }
        return existingTravelOffer;
    }

    @GetMapping()
    public List<TravelOffer> getAllOffers() {
        return travelOfferRepository.findAll();
    }

}
