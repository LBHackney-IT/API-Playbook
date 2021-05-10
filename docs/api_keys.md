---
id: api_keys
title: API Keys
---

## Introduction 
Some of our APIs still use API keys to manage access to the APIs. This was our initial approach, but it has proven to be insufficient as it does not allow for granular access control and reporting, and it is associated with a big maintenance overhead.

[AWS documentation on API keys and Usage plans](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html)


## What is an API key?

An API key in this context is a solution provided by AWS for managing access when using AWS API Gateway. Each resource (endpoint) within an API can be set to require an API key to be supplied, when making a request.


![Proxy methods](./doc-images/proxy_methods.png)

When this option is enabled, the API will return a status code of 401 Unauthorized if the consumer has not supplied the API key value within an ‘x-api-key’ HTTP header.


## What is a stage?

Before API is deployed to the API gateway, it must have a stage. Depending on the account setup, API typically has either one or three stages. If an account is set up to use one API per environment (development, staging and production), then API will have only one stage. Sometimes we have just one API for all three environments, in which case we use three different stages.

Stages are used to define the connection between the API and other AWS resources. Our stages will typically have three variables that define where the requests made for the API should go. These are: VPC link, load balancer URL and port. When the API is called, the stage name in the URL is used to direct the traffic to the specific stage in the API, which in turns then uses the stage configuration to direct the traffic to the correct AWS service.

** Typical URL for an API looks like: **

```https://{API _ID}.execute-api.{AWS_REGION}.amazonaws.com/development/api/```

Development in the above URL indicates the stage that the client is trying to access.

## What is a usage plan and how to use it?ß

Once the API key has been created, it can be attached to a usage plan to control its usage. Rather controlling the access from an authentication point of view, usage plans control the amount and frequency of calls that can be made to API stages using the key.

Usage plans can have multiple API keys attached to them, but we typically create a usage plan per API key and API stage. That way we have more granular control over the usage of individual API stages.

Usage plans control the quota (requests per day/week/month), rate (requests per second) and burst (capacity of a token bucket) values for the given API stage.

Throttling can be made more granular by enabling method throttling for a stage, which means that different HTTP methods for the API stage can have different limits.

## Enabling and Disabling API keys

[Guide describing how to enable and disable API key requirement](https://docs.google.com/document/d/1RVJ8f4T6-2m0QqJ9xO-f15FSP7AT4xv0ts8CZGvGR6Y/edit?usp=sharing)


## How are API keys added to our Lambda based APIs?

For any API, where we use Lambda as our hosting option, the configuration to use API keys is automated using Serverless. Each API generates its own unique key and associates it with the deployment stage.

```yaml
apiKeys:
  - secureAccess:
    - api-key-$(self:service)-${self:provider.stage}
usagePlan:
  - secureAccess:
    throttle:
      burstLimit: 200
      rateLimit: 100
```

[**Ref**](https://github.com/LBHackney-IT/lbh-base-api/blob/59df843bf70d1ec20bbf7420f2e80c881e789dfc/BaseApi/serverless.yml#L8)

For APIs that use EC2/Fargate, we create and add API keys via Terraform.
