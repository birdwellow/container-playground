# Container Playground

Playground project to play around with a cluster of containers.
    
## Functional background
The system functions as a trip booking system, that allows
* hotel managers to provide rooms
* flight companies to provide flights
* customers to
    * display and book current trips (combination of flights + hotel)
    * to be passively informed about other customer's bookings & new flights & hotels

## Architecture
The cluster will include containers from custom and public images:
* Custom:
    * **Trip Booking Service (ReST & Websocket):** Spring Boot 2
    * **Frontend:** Angular 5
    * **Flights-Service (ReST):** Node Express
    * **Hotels-Service (ReST):** Node Express
* Public:
    * **Message Broker:** Kafka (& Zookeeper)
    * **Persistence:** MongoDB

## Requirements for local build
* Docker
* Docker-Composer

## Additional requirements for local development
* Trip Booking Service:
    * JDK 8
    * Maven
* Flights & Hotels Service:
    * Node & NPM
* Frontend Service:
    * Anular CLI (> 1.5, to support Angular 5)

## To be done:
* Set up communication via Message Broker
* Set up communication via Websockets
* Set up a Service Registry / Service Discovery