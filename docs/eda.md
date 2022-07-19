---
id: eda
title: Event Driven Architecture
---

import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>

## What is Event Driven Architecture
Event driven Architecture describes an approach for handling POST/PUT requests from an API. Rather than each dependent application needing to be updated on explicit calls, the requests are sent asynchronously. 

This approach offers three benefits:

- The user experience isn’t compromised as the users waits whilst the data is updated in dependent applications.
- The dependent application can subscribe only  to events rather than needing to receive a larger dataset. 
- The events can be managed by the dependent application in order to control its own performance, whilst ensuring the data is not lost.

## Vision
To have :
- Having loosely coupled architecture across all APIs and services.
- High availability of all components.
- Horizontal scaling of components
- Better manageability of data used in an asynchronous manner. 
- Fault tolerance and better resilience 
- Processing components can be developed independently of each other.
- Ability to throttle workload.
- To have high “fan out” opportunities- Scenarios where one event will be processed by multiple components.

The event-driven architecture approach is a paradigm shift from more traditional architectures that closely couple data and services within one data store and monolithic application.

If you want to reduce the number of tightly coupled dependencies within your application, you can move towards an event driven approach.

## When to use EDA

Event-driven architecture  is to be used when an action needs to be taken when a record has been created, updated or deleted, for example if a user needs to be alerted or another record needs to be updated.

A more specific example where event driven architecture is to be used is in the scenario, where you have a data record, that needs to maintain a subset of information from another data entity.

- For example, each Tenure record in the Tenure data entity maintains a subset of Person data from the Person data entity that includes names, date of birth and ids.
- The subset is maintained to avoid making multiple additional API calls to retrieve the names of people under a specific tenure.
- In this example, we use EDA to ensure that the subset of person data is kept up-to-date by publishing events when the person data record is updated and ensuring that we listen for those events and update the data accordingly in the Tenure record.

**NB:** EDA should **not** be used to **create a new data source**, but only to maintain subsets within records of other domains. We always strive to have a single data source and source of truth. 

### Video Tutorial

**Watch our overview on Event Driven Architecture below:**

<figure class="video-container">
  <iframe width="100%"src="https://www.youtube.com/embed/RyNOyt1sEF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>


</TextToSpeech>