# What is Event Driven Architecture

An event driven architecture is one in which a system and its data is decoupled into separate microservices that communicate and share data with the intention of providing scalability, reliability and performance improvements.

## Benefits of Event Driven Architecture

There are a number of benefits of adopting an event-driven architecture. These are:

### Decoupled services

Each microservice only deals with data stored under its own domain, and acts as the single source of truth for that data. Each domain can emit events when updates occur, and which other interested parties need to act on. A domain does not need to know about who is listening to and consuming events that are raised, and it is up to any consumers to handle and process events emitted from the source domain.

### Scalability

Given the decoupled nature of individual listeners consuming events, it is relatively easy to increase horizontal scaling to handle a greater workload without the need to redesign the overall architecture. 

### Resilience

Listeners subscribe to queues, and read events from those queues. As events get consumed, they get removed from the queue. In the case of a failure, the event gets sent to a separate “dead letter” queue and stored for future re-processing.
This has a number of benefits, for example:
- If the listener is down, messages will sit on the queue until such times as the listener is up again
- If there is a failure when processing a message, it does not get not lost, and can be re-processed once the root cause is identified and resolved

### Performance

Whilst it is not necessarily always the case, it is oftentimes possible to achieve significant performance improvements by following an event driven approach. Given that data can be modeled for retrieval rather than for storage, and with the use of a NoSQL document database, queries can be kept relatively straightforward with no complex joins. Events keep subsets of data up to date in an “eventually consistent” manner, trading off the fact that the subset of data might be out of date for a short period of time.

## Examples from _Manage My Home_

### Events:

#### Tenure Created

This event is raised by the tenure API upon creation of a new tenure. It is consumed by:
- The **activity history listener** - it needs to know who created the new tenure
- The **assets listener** - it needs to know that a new tenure was created against an asset and store it as supplementary data against the asset
- The **search listener** - it needs to know to update the search index with the newly created tenure in order to return it via the search API

#### Person Added to Tenure

This gets raised from the Tenure API, and consumed by:
- The **activity history listener** - it needs to know who added the person to the tenure
- The **person listener** - it needs to know that a person has been associated with a tenure and will update the subset of data stored under the person
- The **search listener** - it needs to know:
    - To update a tenure in the tenure search index with the new person’s details
    - To update the person search index with the new tenure linked to the person

In the example events listed above, the API needs to care about one action at a time. Creating a tenure (1) and adding a person to a tenure (2).

## When to use an event-driven approach

The event-driven architecture approach is a paradigm shift from more traditional architectures that closely couple data and services within one data store and monolithic application.


