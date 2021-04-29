---
id: multiple_docker_containers
title: Composing Your Application With Multiple Docker Containers
---
## Purpose

The purpose of this document is to outline how and when best to orchestrate the creation and linking of multiple containers using docker-compose

## Introduction

You may already be aware that Docker is used extensively within HackIt when building APIs and services.  
You may also already know how we would go about spinning up a container for an application.  
For many of our use cases, spinning up the application in a container by itself is not sufficient.  
The application may require access to other external resources such as a database or an API.
In order to do this there needs to be a way to spin up multiple containers and make them accessible to each other.

## Docker Tutorial

<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/Kz-tTwSePoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

Here is where docker-compose comes in.

## Composing Your Application

When you have an application in a docker container you can simply run the command docker run your-application to get it up and running.  
However, by default this container won’t be all you need to test an application.  It is likely that there would be additional resources, for example a database, that your application would need access to.
 If you have a database image available you can spin this up and link it to your application using docker-compose.

In your container project you will need the ** Dockerfile ** for each container in your project.
You will also need to have a ** docker-compose.yml ** file in your project where you will define all of the services that are required for your application.

An example docker-compose file taken from our BaseAPI looks like the following:

![alt text](./doc-images/docker1.png)
![alt text](./doc-images/docker2.png)

The following is a breakdown of the various aspects of the base api docker-compose file (you can visit this link for all of the available configuration items for version 3 of docker-compose):

** Version: **  The version of the docker-compose format being used.

** Services: ** These are the various containerised components of the application.
 For example base-api is the section that describes the container that is created for the application itself while dev-database is the section that describes the container where the database will run.  

 - ** Image: **  The name that Docker will give to the image when it is built (this could alternatively be the tag of the image if a build step is configured).

 - ** Build: ** This provides the source  and context for the configuration items Docker needs to build the application image.

 - ** Environment: **  Here you can specify any environment variables required for your application to run including database connection information.  This can also be supplied using environment variables specified in the env_file section.  It is strongly advised not to include environment variables within the docker-compose file itself outside of your development environment.  Instead, you can instruct Docker to get environment variables from the local environment where the container is being run.  For example to supply a connection string from your local environment the following configuration can be used.

 ![alt text](./doc-images/environment.png)

 - ** Ports: ** If you need to expose any ports outside the containerised environment you can specify them here with the container port being the port the application actually listens on in the container and the mapped port being the port you will use in your local environment.

** Links: **  Any related service that the main application would connect to can be spun up in parallel using these links.

## Running Your Composition

 ![alt text](./doc-images/composition.png)

## Cleaning Up

It is important to periodically clean up your docker image cache using docker system prune or by clearing down unused images from the Docker dashboard.  
This will ensure that your computer doesn’t grind to a halt from lack of resources.
