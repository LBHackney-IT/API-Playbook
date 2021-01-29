# What is an API?
API stands for Application Programming Interface. An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you.

# Why do we use an API at HackIT?

At HackIT we follow the API-First strategy which is a data domain driven model and ensures that APIs produced are consistent,reusable and cost effective for similar dataset services.

We follow 12 Factor principles when building new applications. You can find out more about why in our [Hackney Development Standards documentation](https://github.com/LBHackney-IT/API-Playbook/blob/master/12-factor.md).

Following these principles allows our applications to be platform agnostic, meaning we're not tied down to running them on any specific vendor's platform, and don't have to make changes to application code in order to migrate them somewhere else.

# Types of APIs at HackIT

We have two types of API in Hackney: a set of ‘Platform APIs’ which present master data about our people and properties and ‘Service APIs’ that provide the information required to enable the delivery of a digital service to our residents and businesses.

In other words Platform APIs are data-driven, domain modelled which are built with reusability in mind whereas Service APIs are specific to given service which Platform APIs are unable to cater. These service APIs will directly extract data from specific datasource when required. We require Platform APIs to be as generic as possible in order to meet the needs for services and at the same time to be reusable and consistent.

We’ve reached this position after exploring different levels of granularity for our APIs and determining that this is the optimum model for:

1. Accelerating development
1. Reducing duplication
1. Providing a single version of the truth

APIs can be written by any person or agency working under contract to the London Borough of Hackney. Platform APIs are managed by the API Platform Product Owners whilst service APIs are the responsibility of the application manager or software vendor that is responsible for the service.

The image below illustrates the target architecture:

[image to be added]

We’ve written about [what we’ve learnt about APIs](https://docs.google.com/document/d/10C2Ly0uhZ35g-p1215rJhKoRtWkKns5ax2gWOkGDglA/edit?usp=sharing) and why we’ve adopted this approach.

# When to write an API

We want our data to be available via REST API wherever there is a user need. We are prioritising making data available via APIs where:

1. Existing line of business applications enable us to develop APIs
1. Data is required by two or more systems, so APIs enable more reliable, secure methods of data sharing
1. APIs enable us to reduce dependence on one particular solution and develop new services better to meet user needs

# Establishing the user need

Before we write an API we need to establish the user need. Typically, we do this in a Discovery phase when we’re exploring the opportunity to use technology and data to better meet the needs of our residents. Our discovery phase should identify:

* What data we currently hold, where, who needs it and how it’s used
* The lawful basis for processing this data and any consideration we need to give to privacy impact
* Whether there are existing APIs that we can re-use
* Any dependencies on data / reporting / MI with other teams

We typically record the user need through user stories, but this can be decided by individual teams. A prototyping phase might experiment with a stub API so that we can validate the user need.

*Example user story* 

*"As an application developer, I need to be able to retrieve addresses added, deleted or modified in the property gazetteer between 2 dates so that I am assured the data we have is current".*

On occasion, we will identify a user need for a platform API that hasn’t yet been fulfilled. This may mean we need to develop an API without a full understanding of the user need, meaning this will need to be iterated subsequently. The API Platform Product Owner makes these decisions on a case-by-case basis, in collaboration with the delivery managers and Data and Insight Manager.
