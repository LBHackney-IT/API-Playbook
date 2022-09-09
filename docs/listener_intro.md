---
id: listener_intro
title: What are Backend Listeners?
---
import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>

## Introduction

[Events](/serverless_lambda#events) occur all the time throughout any application, they may for example be a database or file being updated, a timer firing or a message being sent, 
and sometimes additional processing is required elsewhere in the system as a result of them happening.

These events can be used to trigger AWS Lambda functions to perform the necessary processing.

In order to facilitate the creation of these functions there is a base template project that can be used to scaffold a "listener" Lambda function application.
The template uses an extensible internal architecture designed to make implementing processing logic as simple as possible and comes with the following pre-built:
* CircleCI pipline that just needs amending for your own specific project demands;
* Basic terraform configuration for development, staging and production environments;
* Pre-configured setup of AWS Lambda logging and XRay;
* Fully working example of a Simple Query Service (SQS) message event triggering processing to update DynamoDb;
* Full unit test coverage of all sample code, including end-to-end tests using BDDfy;


</TextToSpeech>