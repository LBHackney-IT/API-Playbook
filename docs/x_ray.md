---
id: x_ray
title: Request Tracing with AWS XRay
---

## Introduction

AWS X-Ray is an AWS managed service that provides the functionality to debug and analyze distributed applications.

**Read the [AWS documentation](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html) for more information!**

X-Ray provides an end-to-end request view - it will show you the full trace for an API invocation, including any other components/services it invokes.

The tool is used for identifying the root cause to an issue, discovering performance bottlenecks and seeing real-time data regarding high latency requests.

AWS X-Ray collects logs and makes use of a Service Map to visualize the dependencies and calls to other services made in an API request.

X-Ray can be used to identify API requests that are currently not monitored by Canaries by comparing the user requests and those made by Canaries. This is useful to identify if any of the implemented API endpoints are currently not monitored for availability.

### Video Tutorial

**Watch our overview on XRay below:**

<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/wdPm9hho9iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

### Types of XRay Maps

- ** Service Maps ** - End-to-end visual representation for all dependencies of an application that serves requests

- ** Trace Maps ** - Individual end-to-end visual representation for a single request


## Benefits of AWS X-Ray

- Provides a way to collect logs and metrics, for all services an API integrates with, including databases or other APIs;

- Visualizes the collected data for easy analysis of the data to help identify bottlenecks, error root causes and performance issues.

- Aids the debugging process when an issue occurs, as it gives a developer a way to quickly pinpoint underlying services causing the issue

  * For example, if an API ‘A’ makes a call to another API ‘B’, X-Ray service map will help quickly identify which API is causing the issue so the developer can focus their efforts there.

  * If API ‘B’ is the cause, X-Ray also provides trace maps, to show the end-to-end request for API ‘B’, providing insights into its dependencies to further narrow down the cause

  * In comparison, if a developer did not have access to X-Ray, they will have to:
    - Look through application logs
    - Identify the line of code causing the error
    - See which dependency this error is related to
    - Identify logs related to the dependency and go through the process of identifying root cause or possible further dependencies that need to be considered

  * In summary, the process will take longer as developers will have to go through multiple steps and logs in order to narrow down the cause, which results in more development time spent on debugging, instead of resolving the issue.


##  How to enable and use X-Ray in our APIs

Serverless can be used to automatically enable X-Ray on our APIs.

**[How to enable X-Ray tracing](https://www.serverless.com/framework/docs/providers/aws/guide/functions/#aws-x-ray-tracing/)**


This will enable it within Lambda and grant it the necessary IAM permissions

X-Ray needs additional C# configuration to capture metadata and trace downstream calls
Enable C# tracing when using AWS Lambda

**[Instrumenting C# code in AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/csharp-tracing.html)**

## X-Ray with Postgres

X-Ray can be enabled for Postgres to trace down to the database query level.


[** How to enable X-Ray for a postgres database **](https://net-immersionday.workshop.aws/6-using-x-ray-in-dotnet-application/8-entity-framework-tracing.html)


## X-Ray with API Gateway

X-Ray can also be enabled for API Gateway to provide tracing for calls starting at API Gateway.

For all of our APIs, we use API Gateway to expose them for consumption.

X-Ray will provide a trace of requests from the moment an API is invoked at API Gateway level to all services the requests travel to.

We use a custom Lambda authorizer, so enabling X-Ray at API Gateway will provide an easy way to identify if an issue has occurred at API level or during the authorization step.

The logging and tracing can be customized to only sample requests containing a certain header value and similar.

[**How to enable X-Ray for API Gateway**](https://docs.aws.amazon.com/xray/latest/devguide/xray-services-apigateway.html)

### X-Ray cost

The first 100,000 traces recorded each month are free.
The first 1,000,000 traces retrieved or scanned each month are free.

**Beyond free tier:**

Traces recorded cost $5.00 per 1 million traces recorded ($0.000005 per trace).
Traces retrieved cost $0.50 per 1 million traces retrieved ($0.0000005 per trace).
Traces scanned cost $0.50 per 1 million traces scanned ($0.0000005 per trace).

## Define Metrics for Alerts

What metrics can be used to trigger alerts, eg, how many exceptions within a defined period.  A one size fit for metrics may not be suitable for all applications.

** Front end logging: **

 How can we ship front end logs back to a central logging repository?

https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-nodejs-configuration.html

 [**X-ray js**](https://docs.aws.amazon.com/xray/latest/devguide/scorekeep-client.html)

 ** Dashboard: **

Service Lens can be used for a consolidated view of insights

We want to be able to be proactive in responding to alerts/issues.
