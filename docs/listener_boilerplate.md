---
id: listener_boilerplate
title: Listener Boilerplate - Base Listener
---
## Introduction

Sometimes you need to perform processing following some event elswhere in the system.

These [events](http://localhost:3000/API-Playbook/serverless_lambda#events) can be used to trigger AWS Lambda functions to perform the necessary processing.
In order to facilitate the creation of these functions there is a base template project that can be used to scaffold a "listener" Lambda function application.
The template uses an extensible internal architecture designed to make implementing processing logic as simple as possible and comes with the following pre-built:
* CircleCi pipline that just needs amending for your own specific project demands
* Basic terraform configuration for dev, staging and production environments.
* Pre-configured setup of AWS Lambda logging and XRay.
* Fully working example of an SQS message event tirggering processing to update DynamoDb.
* Full unit test coverage of all sample code, including end-to-end tests using BDDfy.


## The Template

Start a new Listener application by using the Base Listener template!

There are comments throughout the code that start with TODO where specific things need to be changed or renamed when copying this template.
Be sure to remove these comments when they aren't needed anymore.

The template creates a boilerplate listener application that would be triggered by an SQS message and updates some data in a DynamoDb database, 
but the type of trigger and logic implemented can of course be altered to suit any specific use case.

*** [Begin here](https://github.com/LBHackney-IT/lbh-base-listener) ***
