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

## ReST Endpoints:
The ports (and therefore the ReST endpoints) of the functional services are mapped to the local machine. These are the most important ones:

### **Trip-Booking-Service:**
The Trip-Booking-Service is locally reachable through `http://localhost:8080`.

#### `GET http://localhost:8080/playground/test`
Smoke test resource.

#### `GET http://localhost:8080/playground/simulateerror`
Simulate a fatal error causing the service to shut down; meant for failover testing. 

#### `GET http://localhost:8080/cities`
Test resource that requires a MongoDB connection.

#### `GET http://localhost:8080/trips/offers?start=Munich&destination=Rome&arrival=2018-04-23&departure=2018-05-04&persons=2&price=600`
Get trip offers.

#### `POST http://localhost:8080/trips/booking`
Send a booking:
```json
{
  "outboundFlightId": "5ad9cbcc8bfa3e34ab73b853",
  "hotelId": "5ad9cbd2774e9234cfb79d6f",
  "inboundFlightId": "5ad9cbcc8bfa3e34ab73b854",
  "persons": 3
}
```

## To be done:
* Implement Frontend
* Replace custom resources with Spring Boot Actuator
* Set up communication via Message Broker
* Set up communication via Websockets
* Set up a Service Registry / Service Discovery