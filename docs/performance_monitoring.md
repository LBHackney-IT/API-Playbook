---
id: performance_monitoring
title: Performance Monitoring
---

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