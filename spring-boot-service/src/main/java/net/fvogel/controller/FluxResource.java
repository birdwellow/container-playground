package net.fvogel.controller;

import net.fvogel.model.WikipediaChange;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.time.Duration;

@RestController
public class FluxResource {

    WebClient webClient = WebClient.create("https://stream.wikimedia.org/v2/stream/recentchange");

    @GetMapping(path = "changes", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
    Flux<WikipediaChange> changeStream() {
        return webClient.get()
                .accept(MediaType.APPLICATION_STREAM_JSON)
                .retrieve()
                .bodyToFlux(WikipediaChange.class)
                .onBackpressureDrop();
    }

    @GetMapping(path = "strings", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    Flux<String> random() {
        return Flux.interval(Duration.ofSeconds(1)).map(i -> "abc123");
    }



}
