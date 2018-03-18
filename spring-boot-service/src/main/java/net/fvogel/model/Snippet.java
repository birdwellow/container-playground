package net.fvogel.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Snippet {

    @Id
    String id;

    String creator;
    String content;

}
