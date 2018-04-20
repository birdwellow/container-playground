package net.fvogel.model;

import lombok.Data;

@Data
public class Flight {

    String _id;
    String date;
    String departureCity;
    String departureTime;
    String arrivalCity;
    String arrivalTime;
    Double price;
    Integer seats;

}
