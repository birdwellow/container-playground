#FROM maven:3.5.3-jdk-8-slim as build
#
#ADD . /source
#WORKDIR /source
#RUN mvn clean package



FROM openjdk:8-jdk-alpine as runtime

#COPY --from=build /source/target/*.jar app.jar
COPY ./target/*.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]