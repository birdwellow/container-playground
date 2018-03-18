# Container Playground

Playground project to play around with a cluster of containers.
The cluster will include containers from custom and public images:
* Custom:
    * Spring Boot 2
    * Angular 4
    * Node Express (TBD)
* Public:
    * Kafka (& Zookeeper)
    * MongoDB
    
The cluster nodes & components should interact reactively with each other (see https://www.reactivemanifesto.org/).

## Requirements for local development & build
* JDK 8
* Maven
* Node & NPM
* Anular CLI
* Docker & Docker-Composer

## To be done:
* Define a functional purpose for the cluster. Ideas:
    * Chat
    * Snippet-Sharing
* Set up a Node Express service
* Set up a Service Registry / Service Discovery