---
id: alerting
title: Alerting
---

## Application monitoring and alerting

- In Hackney, we use AWS Cloudwatch to implement monitoring and alerting.

- Any logs created in our APIs are recorded and accessible in AWS CloudWatch.

- Creation of log groups is automated via the current serverless setup.


## Metrics filters


** <u> Filter and Pattern Syntax </u> **

- Metric filters are a useful feature that allows you to find patterns and terms in your logs. Following the logging standards identified earlier in this document, metric filters can be created to easily identify logs related to a certain phrase or term like ‘ERROR’.

- Using the filters, developers can easily narrow down the logs they see to only the ones related to any error that has occurred, hiding all other logs such as ones for successful requests.

- CloudWatch also provides a way to create alarms based on metric filters, so we can get notified if a log with matching a certain pattern/term has occurred.

** <u> Metric filters that should be created per API: </u> **

  - TBC

  - Needs to be filters we want commonly available for each API

** <u> Alarms should be created for the following metric filters: </u> **

  - TBC
  -  Need to decide which logs should have an alarm associated with them

**  <u> Availability monitoring and alerting </u> **

We use AWS CloudWatch Canaries to monitor the availability of our APIs and front end applications.


** <u> AWS CloudWatch Canaries for APIs: </u> **

a. Set to run every 5 mins

b. A canary invokes an API endpoint to check it’s availability

c. Needs to be set up per API endpoint to ensure all endpoints provided by an API are functioning as expected

d. he current creation process for a canary is manual

** How to set up a canary : **

https://github.com/LBHackney-IT/lbh-base-api/wiki/Setting-up-Canaries

Can it be automated?



## AWS Canaries for front end applications

- Can monitor the availability of a web page

- Alarms can be set to alert if availability of a given web page falls down

- Logs recorded can be used to identify performance issues associated with loading a specific item

- Can check for broken links

- A max number of links to follow is set up

- The canary crawls through the links and returns the first broken link identified



## AWS Cloudwatch Alarms

- We also use Cloudwatch alarms to monitor for specific events in the log streams.

- Specific metrics can be established as triggers on application logs which can fire off alerts in the form of emails or other messaging mediums.  We can create up to 5000 alarms per region per account which should give us sufficient capacity.

- It may also be possible to consolidate these alarms if we have a standard format for logs (this may also be achievable by creating composite alarms but uses up available alarms.

** Request tracing **

AWS X-Ray is an AWS managed service that provides the functionality to debug and analyze distributed applications.

## More on what X-Ray is

https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html

- X-Ray provides an end-to-end request view - it will show you the full trace for an API invocation, including any other components/services it invokes.

- The tool is used for identifying the root cause to an issue, discovering performance bottlenecks and seeing real-time data regarding high latency requests.
AWS X-Ray collects logs and makes use of a Service Map to visualize the dependencies and calls to other services made in an API request.

- X-Ray can be used to identify API requests, currently not monitored by Canaries by comparing the user requests and those made by Canaries. This is useful to identify if any of the implemented API endpoints is currently not monitored for availability.

** Service Maps **

End-to-end visual representation for all dependencies of an application that serves requests

** Trace Maps **

Individual end-to-end visual representation for a single request



## Benefits of AWS X-Ray

1. Provides a way to collect logs and metrics, for all services an API integrates with, including databases or other APIs;

2. Visualizes the collected data for easy analysis of the data to help identify bottlenecks, error root causes and performance issues.

3. Aids the debugging process when an issue occurs, as it gives a developer a way to quickly pinpoint underlying services causing the issue

       a. For example, if an API ‘A’ makes a call to another API ‘B’, X-Ray service map will help quickly identify which API is causing the issue so the developer can focus their efforts there.

       b. If API ‘B’ is the cause, X-Ray also provides trace maps, to show the end-to-end request for API ‘B’, providing insights into its dependencies to further narrow down the cause

       c. In comparison, if a developer did not have access to X-Ray, they will have to:

       i. look through application logs

      ii. identify the line of code causing the error

     iii.  see which dependency this error is related to

    iv. Identify logs related to the dependency and go through the process of identifying root cause or possible further dependencies that need to be considered

    v. In summary, the process will take longer as developers will have to go through multiple steps and logs in order to narrow down the cause, which results in more development time spent on debugging, instead of resolving the issue.


##  How to enable and use X-Ray in our APIs

Serverless can be used to automatically enable X-Ray on our APIs.

How to enable X-Ray tracing:

https://www.serverless.com/framework/docs/providers/aws/guide/functions/#aws-x-ray-tracing/

This will enable it within Lambda and grant it the necessary IAM permissions

X-Ray needs additional C# configuration to capture metadata and trace downstream calls
Enable C# tracing when using AWS Lambda

https://docs.aws.amazon.com/lambda/latest/dg/csharp-tracing.html

##    X-Ray with Postgres

X-Ray can be enabled for Postgres to trace down to the database query level.


**       How to enable X-ray for database: **

https://net-immersionday.workshop.aws/6-using-x-ray-in-dotnet-application/8-entity-framework-tracing.html



##   X-Ray with API Gateway

- X-Ray can also be enabled for API Gateway to provide tracing for calls starting at API Gateway.

- For all of our APIs, we use API Gateway to expose them for consumption.

- X-Ray will provide a trace of requests from the moment an API is invoked at API Gateway level to all services the requests travel to.

- We use a custom Lambda authorizer, so enabling X-Ray at API Gateway will provide an easy way to identify if an issue has occurred at API level or during the authorization step.

- The logging and tracing can be customized to only sample requests containing a certain header value and similar.

** How to enable X-Ray for API Gateway: **

https://docs.aws.amazon.com/xray/latest/devguide/xray-services-apigateway.html

  **        X-Ray cost  **

The first 100,000 traces recorded each month are free.
The first 1,000,000 traces retrieved or scanned each month are free.

    **     Beyond free tier:  **

Traces recorded cost $5.00 per 1 million traces recorded ($0.000005 per trace).
Traces retrieved cost $0.50 per 1 million traces retrieved ($0.0000005 per trace).
Traces scanned cost $0.50 per 1 million traces scanned ($0.0000005 per trace).



  ##   Performance monitoring

      AWS Lambda insights for performance monitoring

  **     What are Lambda insights? **

As per AWS’s documentation:

The solution collects, aggregates, and summarizes system-level metrics including CPU time, memory, disk and network usage. It also collects, aggregates, and summarizes diagnostic information such as cold starts and Lambda worker shutdowns to help you isolate issues with your Lambda functions and resolve them quickly.

**      How to enable Lambda insights **

https://docs.aws.amazon.com/lambda/latest/dg/monitoring-insights.html


  **        Lambda insights cost   **

1.  Standard CloudWatch cost strategy applies

2.  It depends how many metrics are we monitoring

3.  How much data volume of metrics logs has been ingested

       a. AWS provides an example, where a Lambda function, which has all 8 metrics monitored and is invoked 1M times in a month will cost $2.92 per month for Lambda insights

       b. We don’t expect each individual Lambda to be invoked as many times each month;
         We need to evaluate if we are interested in monitoring all 8 metrics


## Define Metrics for Alerts

What metrics can be used to trigger alerts, eg, how many exceptions within a defined period.  A one size fit for metrics may not be suitable for all applications.

** Front end logging: **

 How can we ship front end logs back to a central logging repository?

https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-nodejs-configuration.html

 ** X-ray js: **

https://docs.aws.amazon.com/xray/latest/devguide/scorekeep-client.html

 ** Dashboard **

Service Lens can be used for a consolidated view of insights

We want to be able to be proactive in responding to alerts/issues.


Thoughts/Ideas regarding monitoring and alerts:

https://ideaflip.com/b/uunp6r5hrxar/
