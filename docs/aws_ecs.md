---
id: aws_ecs
title: AWS / ECS with Fargate and when to use
---

## ECS/Fargate

All new Hackney APIs developed using AWS Lambda as a serverless way of hosting APIs.

There are APIs developed before we adopted the serverless approach, which use ECS with Fargate or EC2 as a hosting option.

### What is Fargate?

Fargate is an AWS service that works with AWS ECS and AWS Kubernetes. It is a severless way to manage containers, without the need to manage and provision servers.

[More information](https://aws.amazon.com/fargate/)

##  When to use Fargate?

Lambda is to be used with all new APIs, with the exception of a few scenarios.

The use cases below outline the scenarios, when ECS with Fargate should be chosen as a way to host an API, instead of Lambda.

### Large request or response payload

Lambda has the following request/response payload limitations: _6 MB (synchronous) / 256 KB (asynchronous)_ [More details](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)

In certain scenarios, an API might be required to take as an input a large object (e.g. a file) or need to return a large object. Fargate should be used in the above scenario as Lambda would not be suitable for this type of APIs.

#### Possible work-around

Even if a request/response payload is large, we can still use Lambda by inserting the request/response object into S3 and accept/return a link to the file in S3.only take as an input / return as an output an S3 link for retrieving the file.

### Long running function

We aim to develop APIs that are fast and reliable. This means that we typically expect an API response to be delivered in a matter of seconds.
However, in some scenarios, we might need to execute a long running job (e.g. batch operation). In this case, Lambda will not be suitable as it has a 15 min timeout. ECS with Fargate should be used instead.

### Large number of requests

If an API is expected to receive a large number of requests (millions per month) and that those requests might be frequent and happening any day of the week and any time of the day, then Fargate might prove as a more cost-effective solution, as Lambda is billed per invocations.

### Storing large files during run time
Lambda has the limitation of a memory range from 128 to 3008 MB.

This means that if any large file needs to be stored at run time to be accessed later on in the function, Lambda might not be the best a possible solution., in which case Fargate should be used, as we have  Fargate allows us control over the memory allocation for containers.

## How to create an app / API with ECS/Fargate hosting setup?

It is recommended that you use Terraform to provision AWS resources. We already have produced a terraform template that generates all necessary resources for an API/app that is to be hosted using ECS with Fargate.

In this playbook, please refer to the [Terraform section](/infrastructure) to find out more about the templates and how to use them. The template has configuration both for front end apps and for back end services that are to use ECS with Fargate.

** The Terraform template creates the following resources: **

**  <u> Common layer Fargate  </u> **

  - ECR repository

  - Fargate service

  - Security group

** <u> Back end layer </u> **

  - API Gateway

  - Target group

  - Network load-balancer listener

** <u> Front end layer </u> **

  - Application load balancer rule

  - Target group


** [Step-by-step 'how to use' guide for the terraform template](https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit#heading=h.bbczall7icfy
) **