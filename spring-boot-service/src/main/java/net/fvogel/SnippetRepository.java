package net.fvogel;

import net.fvogel.model.Snippet;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SnippetRepository extends MongoRepository<Snippet, String>{

    List<Snippet> findByCreator(String creator);

}
