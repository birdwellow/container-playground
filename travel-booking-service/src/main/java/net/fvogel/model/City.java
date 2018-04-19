package net.fvogel.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;

@Data
public class City {

    @Id
    String id;

    String name;
    String country;

}
