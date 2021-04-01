---
id: uptime_monitoring
title: Uptime Monitoring
---



## Centralised Uptime Monitoring

Hackney now has multiple Platform APIs deployed to the AWS cloud. Each API is a self-contained application exposing a specific set of data.
As we are creating and deploying multiple APIs in AWS It’s necessary to be able to monitor the health and performance of these applications. AWS provides a centralised monitoring and logging solution of the applications.

We can monitor the uptime performance of individual endpoints and APIs using AWS Canaries.


## AWS Canaries

AWS canaries are accessible via the CloudWatch console. Amazon defines a canary as configurable scripts that run on a schedule to monitor your endpoints and APIs.
A canary can be configured to make scheduled requests to a health check endpoint.

CloudWatch is the AWS console or dashboard for managing operational data such as logs, metrics and events.
Canaries are used for all Platform API production environments.

Monitoring the health and performance of staging environments has no long-term benefit in relation to production environments. Production applications are public facing and any downtime should be immediately signalled and logged by the deployment environment. When downtime is signalled we can investigate the cause via the CloudWatch logs. Each Platform API canary calls a production environment API endpoint at a regular interval.


## Canary Configuration

Canaries can be configured to run once or on a user defined schedule. A scheduled canary can run for 24 hours a day as often as once per minute. A canary also has configurable alarm parameters. These are parameters which will set off an alarm in CloudWatch if the defined conditions are met.
Alarm parameters can be very specific and granular.

A canary will require any authorization headers and values needed to access the API in the configuration.
Accessing the dashboard for a Canary in CloudWatch lets you view the status of the Canary over a period of time.
