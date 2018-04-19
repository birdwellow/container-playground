# Container Playground

Playground project to play around with a cluster of containers.
    
## Functional background
The system functions as a tour booking system, that allows
* hotel managers to provide rooms
* flight companies to provide flights
* customers to
    * display and book current tours (combination of flight + hotel)
    * to be passively informed about other customer's bookings

## Architecture
The cluster will include containers from custom and public images:
* Custom:
    * **Travel Booking Service (ReST & Websocket):** Spring Boot 2
    * **Frontend:** Angular 5
    * **Flights-Service (ReST):** Node Express
    * **Hotels-Service (ReST):** Node Express
* Public:
    * **Message Broker:** Kafka (& Zookeeper)
    * **Persistence:** MongoDB

## Requirements for local development & build
* JDK 8
* Maven
* Node & NPM
* Anular CLI (> 1.5, to support Angular 5)
* Docker & Docker-Composer

## To be done:
* Set up communication between travel booking service and hotels & flights services
* Set up communication via Message Broker
* Set up communication via Websockets
* Set up a Service Registry / Service Discovery