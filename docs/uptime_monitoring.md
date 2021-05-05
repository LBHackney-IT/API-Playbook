---
id: uptime_monitoring
title: Centralised Uptime Monitoring
---

Hackney now has multiple Platform APIs deployed to the AWS cloud. Each API is a self-contained application exposing a specific set of data.
As we are creating and deploying multiple APIs in AWS It’s necessary to be able to monitor the health and performance of these applications. AWS provides a centralised monitoring and logging solution of the applications.

We can monitor the uptime performance of individual endpoints and APIs using AWS Canaries.

## Video Tutorial

** You can start by having a look at our tutorial video: **

<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/bYMdvCz0QUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

## AWS Canaries

AWS canaries are accessible via the CloudWatch console. Amazon defines a canary as:
> Configurable scripts that run on a schedule to monitor your endpoints and APIs.

A canary can be configured to make scheduled requests to a health check endpoint.

CloudWatch is the AWS console or dashboard for managing operational data such as logs, metrics and events.
Canaries are used for all Platform API production environments.

Monitoring the health and performance of staging environments has no long-term benefit in relation to production environments. 

Production applications are public facing and any downtime should be immediately signalled and logged by the deployment environment. 

When downtime is signalled we can investigate the cause via the CloudWatch logs. 

Each Platform API canary calls a production environment API endpoint at a regular interval.


## Canary Configuration

Canaries can be configured to run once or on a user defined schedule. A scheduled canary can run for 24 hours a day as often as once per minute. 

A canary also has configurable alarm parameters. These are parameters which will set off an alarm in CloudWatch if the defined conditions are met.

Alarm parameters can be very specific and granular.

A canary will require any authorization headers and values needed to access the API in the configuration.

Accessing the dashboard for a Canary in CloudWatch lets you view the status of the Canary over a period of time.

## Setting up Canaries

### Creating a canary which will ping an endpoint and check the response

- In the [AWS Console](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Feu-west-2.console.aws.amazon.com%2Fcloudwatch%2Fhome%3Fregion%3Deu-west-2%26state%3DhashArgs%2523synthetics%253Acanary%252Flist%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fcloudwatch&forceMobileApp=0&code_challenge=afPX8AredTuJ4RR-8tmbbYoDccc2YpaukmzbN5Up2z4&code_challenge_method=SHA-256
) go to CloudWatch then click on ** canaries ** .

- Click on ** "Create Canary" ** , choose ** "Use a blueprint" ** and  ** "Heartbeat monitoring"** .

- Give a name which makes it easily recognisable as whats it is (try and get the name of the API and the endpoint it's testing)


### Checking a 200 response

TBC

### Altering the code to check a 404 is returned

TBC

## More Information

For more information, check out the [AWS documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Create.html).