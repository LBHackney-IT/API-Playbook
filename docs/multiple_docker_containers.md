---
id: multiple_docker_containers
title: Composing Your Application With Multiple Docker Containers
---
## Purpose

The purpose of this document is to outline how and when best to orchestrate the creation and linking of multiple containers using docker-compose

## Introduction

You may already be aware that Docker is used extensively within HackIt when building APIs and services. You may also already know how we would go about spinning up a container for an application.

For many of our use cases, spinning up the application in a container by itself is not sufficient. The application may require access to other external resources such as a database or an API.

In order to do this there needs to be a way to spin up multiple containers and make them accessible to each other.

## Video Tutorial

<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/Kz-tTwSePoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

## Composing Your Application

When you have an application in a docker container you can simply run the command `docker run [your-application]` to get it up and running.

However, by default this container won’t be all you need to test an application.  It is likely that there would be additional resources, for example a database, that your application would need access to. If you have a database image available you can spin this up and link it to your application using docker-compose.

In your container project you will need the `Dockerfile` for each container in your project. You will also need to have a `docker-compose.yml` file in your project where you will define all of the services that are required for your application.

An example docker-compose file taken from our BaseAPI looks like the following:

```yaml
version: "3.2"

services:
  base-api:
    image: base-api
    build:
      context: BaseApi/
      dockerfile: ./Dockerfile
    ports:
      - 3000:3000
    environment:
      - CONNECTION_STRING=[database connection string]
    links:
      - dev-database
  dev-database:
    env_file:
      - database.env
    image: postgres:12
    volumes:
      - ./database:/docker-entrypoint-initdb.d

  base-api-test:
    image: base-api-test
    build:
      context: .
      dockerfile: BaseApi.Tests/Dockerfile
    environment:
      - DB_HOST=[database url]
      - DB_PORT=[database port]
      - DB_USERNAME=[database username]
      - DB_PASSWORD=[database password]
      - DB_DATABASE=[database name]
    links:
      - test-database

  test-database:
    image: test-database
    build:
      context: .
      dockerfile: database/Dockerfile
    ports:
      -[mapped port eg 5444]:[container port eg 5432]
    env_file:
      - database.env
```

The following is a breakdown of the various aspects of the base api docker-compose file (you can visit this link for all of the available configuration items for version 3 of docker-compose):

- ** Version: **  The version of the docker-compose format being used.

- ** Services: ** These are the various containerised components of the application.
  * For example `base-api` is the section that describes the container that is created for the application itself while `dev-database` is the section that describes the container where the database will run.  

- ** Image: **  The name that Docker will give to the image when it is built (this could alternatively be the tag of the image if a build step is configured).

- ** Build: ** This provides the source  and context for the configuration items Docker needs to build the application image.

- ** Environment: **  Here you can specify any environment variables required for your application to run including database connection information.

  * This can also be supplied using environment variables specified in the env_file section.
  * It is strongly advised not to include environment variables within the docker-compose file itself outside of your development environment.
  * Instead, you can instruct Docker to get environment variables from the local environment where the container is being run.
  * To supply a connection string from your local environment the following configuration can be used:
    ```yaml
    environment: 
        - CONNECTION_STRING=$LOCAL_CONNECTION_STRING
    ```
  * This will instruct Docker to look at your local environment for a  `LOCAL_CONNECTION_STRING` variable and supply that to the `CONNECTION_STRING` variable for the application.

- ** Ports: ** If you need to expose any ports outside the containerised environment you can specify them here with the container port being the port the application actually listens on in the container and the mapped port being the port you will use in your local environment.

- ** Links: **  Any related service that the main application would connect to can be spun up in parallel using these links.

## Running Your Composition

You can spin up any individual service directly by calling `docker-compose up [name of service]`.

If the service is linked to another service via the `links:` section the linked service will also be spun up.

For example when calling `docker-compose up base-api`, as this service has a link to the dev-database, the dev-database will also be spun up in a container along with the base api application. 

If you need to manually supply environment variables when running a composition and do not want to add them to your system environment they can be prepended to the docker-compose command, for example:

```CONNECTION_STRING=[a connection string] docker-compose up base-api```

## Cleaning Up

It is important to periodically clean up your docker image cache using `docker system prune` or by clearing down unused images from the Docker dashboard.

This will ensure that your computer doesn’t grind to a halt from lack of resources.
