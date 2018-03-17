package net.fvogel.controller;

import net.fvogel.model.WikipediaChange;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;

@Configuration
public class FluxResourceConfig {

    WebClient webClient = WebClient.create("https://stream.wikimedia.org/v2/stream/recentchange");

    Flux<WikipediaChange> changeStream() {
        return webClient.get()
                .accept(MediaType.APPLICATION_STREAM_JSON)
                .retrieve()
                .bodyToFlux(WikipediaChange.class)
                .onBackpressureDrop();
    }

    @Bean
    RouterFunction<ServerResponse> changesResource() {
        return RouterFunctions.route(
                RequestPredicates.GET("/changes").and(RequestPredicates.accept(MediaType.TEXT_EVENT_STREAM)),
                (request -> ServerResponse.ok().contentType(MediaType.TEXT_EVENT_STREAM)
                        .body(changeStream(), WikipediaChange.class))
        );
    }



}
