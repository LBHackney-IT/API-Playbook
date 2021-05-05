---
id: performance_monitoring
title: AWS Lambda insights for Performance Monitoring
---

## What are Lambda insights?

As per AWS’s documentation:

> The solution collects, aggregates, and summarizes system-level metrics including CPU time, memory, disk and network usage. <br/>It also collects, aggregates, and summarizes diagnostic information such as cold starts and Lambda worker shutdowns to help you isolate issues with your Lambda functions and resolve them quickly.

## How to enable Lambda insights

Follow the guidance from AWS' [documentation](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-insights.html).


## Lambda insights cost

- Standard CloudWatch cost strategy applies
- It depends how many metrics are we monitoring
-  How much data volume of metrics logs has been ingested
    * AWS provides an example where a Lambda function, which has all 8 metrics monitored, and is invoked 1M times in a month, will cost $2.92 per month for Lambda insights
    * We don’t expect each individual Lambda to be invoked as many times each month
    * We need to evaluate if we are interested in monitoring all 8 metrics