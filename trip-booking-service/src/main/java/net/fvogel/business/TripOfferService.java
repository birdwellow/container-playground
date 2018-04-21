package net.fvogel.business;

import net.fvogel.model.Flight;
import net.fvogel.model.Hotel;
import net.fvogel.model.TripOffer;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TripOfferService {

    public List<TripOffer> createTripOffers(List<Flight> outboundFlights, List<Hotel> hotels, List<Flight> inboundFlights) {
        List<TripOffer> tripOffers = new ArrayList<TripOffer>();

        if (isNullOrEmpty(outboundFlights) || isNullOrEmpty(hotels) || isNullOrEmpty(inboundFlights)) {
            return tripOffers;
        }

        for (Flight outboundFlight : outboundFlights) {
            for (Hotel hotel : hotels) {
                for (Flight inboundFlight : inboundFlights) {
                    TripOffer tripOffer = new TripOffer();
                    tripOffer.setOutboundFlight(outboundFlight);
                    tripOffer.setHotel(hotel);
                    tripOffer.setInboundFlight(inboundFlight);
                    tripOffer.setPrice(outboundFlight.getPrice() + hotel.getPrice() + inboundFlight.getPrice());

                    tripOffers.add(tripOffer);
                }
            }
        }
        return tripOffers;
    }

    private boolean isNullOrEmpty(List list) {
        return list == null || list.isEmpty();
    }
}
