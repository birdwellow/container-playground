package net.fvogel;

import net.fvogel.model.TravelOffer;
import net.fvogel.persistence.TravelOfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.Date;

@SpringBootApplication
public class App {

    @Autowired
    TravelOfferRepository travelOfferRepository;

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @PostConstruct
    public void insertData() {

        travelOfferRepository.deleteAll();

        travelOfferRepository.save(createTravelOffer(
                10,
                7899,
                new Date(118, 7, 13),
                new Date(118, 7, 22),
                "Rome",
                "Italy",
                "Villa Garibaldi"
        ));

        travelOfferRepository.save(createTravelOffer(
                1,
                13899,
                new Date(118, 7, 13),
                new Date(118, 7, 22),
                "France",
                "Nice",
                "L'Hotel Sur Mar"
        ));

        travelOfferRepository.save(createTravelOffer(
                24,
                5999,
                new Date(118, 9, 2),
                new Date(118, 9, 16),
                "Luxor",
                "Egypt",
                "Grand Resort"
        ));

    }

    private TravelOffer createTravelOffer(int amount, int price, Date arrival, Date departure, String city, String country, String hotelName) {
        TravelOffer travelOffer = new TravelOffer();

        travelOffer.setAmount(amount);
        travelOffer.setPrice(price);
        travelOffer.setArrivalDate(arrival);
        travelOffer.setDepartureDate(departure);
        travelOffer.setCity(city);
        travelOffer.setCountry(country);
        travelOffer.setHotelName(hotelName);

        return travelOffer;
    }
}