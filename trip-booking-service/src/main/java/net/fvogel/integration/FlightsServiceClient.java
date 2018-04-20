package net.fvogel.integration;

import net.fvogel.model.Flight;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class FlightsServiceClient extends RestServiceClient {

    @Value("${integration.flightsservice.host}")
    String host;

    @Value("${integration.flightsservice.port}")
    String port;

    @Value("${integration.flightsservice.basepath}")
    String basePath;

    private RestTemplate restTemplate;

    public FlightsServiceClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Flight> getFlights(String date, String start, String destination, Integer seats) {

        String url = String.format("http://%s:%s/%s?", host, port, basePath);

        Map<String, Object> queryParameters = new HashMap<String, Object>();
        queryParameters.put("date", date);
        queryParameters.put("from", start);
        queryParameters.put("to", destination);
        queryParameters.put("seats", "" + seats);

        url = appendQueryParams(url, queryParameters);

        ResponseEntity<Flight[]> hotelsResponse = restTemplate.getForEntity(url, Flight[].class);
        Flight[] flightsArray = hotelsResponse.getBody();
        if (flightsArray == null) {
            return Collections.emptyList();
        }
        return Arrays.asList(flightsArray);
    }

}
