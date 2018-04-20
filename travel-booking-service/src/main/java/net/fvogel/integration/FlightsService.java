package net.fvogel.integration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class FlightsService {

    @Value("${integration.flightsservice.host}")
    String host;

    @Value("${integration.flightsservice.port}")
    String port;

    @Value("${integration.flightsservice.basepath}")
    String basePath;



}
