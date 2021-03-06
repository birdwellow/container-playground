package net.fvogel.integration;

import net.fvogel.model.Hotel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class HotelsServiceClient extends RestServiceClient {

    @Value("${integration.hotelsservice.host}")
    String host;

    @Value("${integration.hotelsservice.port}")
    String port;

    private RestTemplate restTemplate;

    public HotelsServiceClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Hotel> getHotels(String city, Integer rooms) {

        String url = String.format("http://%s:%s/hotels", host, port);

        Map<String, Object> queryParameters = new HashMap<String, Object>();
        queryParameters.put("city", city);
        queryParameters.put("rooms", rooms);

        url = appendQueryParams(url, queryParameters);

        ResponseEntity<Hotel[]> hotelsResponse = restTemplate.getForEntity(url, Hotel[].class, queryParameters);
        Hotel[] hotelArray = hotelsResponse.getBody();
        if (hotelArray == null) {
            return Collections.emptyList();
        }
        return Arrays.asList(hotelArray);
    }

    public void bookHotel(String hotelId, Integer rooms) {
        String url = String.format("http://%s:%s/hotels/%s/bookings?rooms=%s", host, port, hotelId, rooms);
        restTemplate.put(url, null);
    }

}
