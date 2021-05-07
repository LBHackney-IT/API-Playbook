---
id: alerting
title: Alerting
---

## Application monitoring and alerting

In Hackney, we use AWS CloudWatch to implement monitoring and alerting.

Any logs created in our APIs are recorded and accessible in AWS CloudWatch. Creation of log groups is automated via the current serverless setup.


## Metric filters

### Filter and Pattern Syntax

Metric filters are a useful feature that allows you to find patterns and terms in your logs. Following the logging standards identified earlier in this document, metric filters can be created to easily identify logs related to a certain phrase or term like `ERROR`.

Using the filters, developers can easily narrow down the logs they see to only the ones related to any error that has occurred, hiding all other logs such as ones for successful requests.

CloudWatch also provides a way to create alarms based on metric filters, so we can get notified if a log with matching a certain pattern/term has occurred.

### Metric filters that should be created per API

TBC

_Needs to be filters we want commonly available for each API_

### Alarms should be created for the following metric filters

TBC

_Need to decide which logs should have an alarm associated with them_

## Availability monitoring and alerting

We use AWS CloudWatch Canaries to monitor the availability of our APIs and front-end applications.


## AWS CloudWatch Canaries

### AWS Canaries for APIs

- Set to run every 5 mins

- A canary invokes an API endpoint to check it’s availability

- Needs to be set up per API endpoint to ensure all endpoints provided by an API are functioning as expected

- The current creation process for a canary is **manual**

[See the guidance for Canaries here](/uptime_monitoring)

### AWS Canaries for front end applications

- Can monitor the availability of a web page

- Alarms can be set to alert if availability of a given web page falls down

- Logs recorded can be used to identify performance issues associated with loading a specific item

- Can check for broken links

- A max number of links to follow is set up

- The canary crawls through the links and returns the first broken link identified

## AWS CloudWatch Alarms

We also use CloudWatch alarms to monitor for specific events in the log streams.

Specific metrics can be established as triggers on application logs which can fire off alerts in the form of emails or other messaging mediums.  We can create up to 5000 alarms per region per account which should give us sufficient capacity.

It may also be possible to consolidate these alarms if we have a standard format for logs (this may also be achievable by creating composite alarms but uses up available alarms.
