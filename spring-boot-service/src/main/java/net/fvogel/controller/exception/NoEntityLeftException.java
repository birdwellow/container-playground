package net.fvogel.controller.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.GONE)
public class NoEntityLeftException extends RuntimeException {

    public NoEntityLeftException(String message) {
        super(message);
    }

}
