# Container Playground

Playground project to play around with a cluster of containers.
The cluster will include containers from custom and public images:
* Custom:
    * **Customer-Service (ReST & Websocket):** Spring Boot 2
    * **Frontend:** Angular 5
    * **Organiser-Service (ReST):** Node Express (TBD)
* Public:
    * **Message Broker:** Kafka (& Zookeeper)
    * **Persistence:** MongoDB
    
The cluster nodes & components should interact reactively with each other (see https://www.reactivemanifesto.org/).

## Functional background
The system functions as a travel offer system, that allows
* customers to
    * display and book current offers
    * to be passively passively informed about other bookings
* organisers to provide new offers

## Requirements for local development & build
* JDK 8
* Maven
* Node & NPM
* Anular CLI (> 1.5, to support Angular 5)
* Docker & Docker-Composer

## To be done:
* Set up a Node Express service
* Set up a Service Registry / Service Discovery