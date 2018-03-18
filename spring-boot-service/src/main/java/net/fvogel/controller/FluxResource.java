package net.fvogel.controller;

import net.fvogel.SnippetRepository;
import net.fvogel.model.Snippet;
import net.fvogel.model.WikipediaChange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.List;

@RestController
public class FluxResource {

    private SnippetRepository snippetRepository;

    @Autowired
    public FluxResource(SnippetRepository snippetRepository) {
        this.snippetRepository = snippetRepository;
    }

    WebClient webClient = WebClient.create("https://stream.wikimedia.org/v2/stream/recentchange");

    @GetMapping(path = "changes", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
    public Flux<WikipediaChange> changeStream() {
        return webClient.get()
                .accept(MediaType.APPLICATION_STREAM_JSON)
                .retrieve()
                .bodyToFlux(WikipediaChange.class)
                .onBackpressureDrop();
    }

    @GetMapping(path = "strings", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> random() {
        return Flux.interval(Duration.ofSeconds(1)).map(i -> "abc123");
    }

    @PostMapping(path = "snippets")
    public Snippet addSnippet(@RequestBody Snippet snippet) {
        return snippetRepository.save(snippet);
    }

    @GetMapping(path = "snippets")
    public List<Snippet> getAllSnippets() {
        return snippetRepository.findAll();
    }

}
