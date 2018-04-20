package net.fvogel.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/playground")
public class PlaygroundResource {

    @GetMapping("/test")
    public String test() {
        return "RUNNING";
    }

    @GetMapping("/simulateerror")
    public void shutDown() {
        System.out.println("Shutting down");
        System.exit(-1);
    }

}
