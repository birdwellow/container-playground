package net.fvogel.model;

import lombok.Data;

@Data
public class TripBooking {

    String inboundFlightId;
    String hotelId;
    String outboundFlightId;
    Integer persons;

}
