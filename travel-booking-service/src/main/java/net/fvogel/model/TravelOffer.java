package net.fvogel.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;

@Data
public class TravelOffer {

    @Id
    String id;

    Integer price;
    Integer amount;
    Date arrivalDate;
    Date departureDate;
    String hotelName;
    String country;
    String city;

}
