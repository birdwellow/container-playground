package net.fvogel.model;

import lombok.Data;

@Data
public class TripOffer {

    Double price;
    Integer persons;

    Flight outboundFlight;
    Hotel hotel;
    Flight inboundFlight;

}
