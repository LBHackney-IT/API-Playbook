---
id: production_testing
title: Production Testing Checklist
---

## Production Testing Checklist

The following tasks should be completed before every API deployment into production unless there is a valid reason to not complete a given task. This reason should be documented.


## Naming conventions
- Endpoint URL follows the format of `api/v#/controllerName`
- Other naming conventions are upheld in query params and responses as per the playbook naming guidance.

## Responses
- All workflows in the pipeline are passing (observe in CircleCI)
- Response time of the API is not longer than the Lambda timeout
- Check for long-running queries that might time out
- List endpoint works with each search parameter
- Limit and pagination is working
- Data returned makes sense i.e. not loads of duplicates
- Responses match the Swagger doc, if they don't for good reason, update Swagger
- Values within responses are returned in the proper format
       - e.g. enums return the desired constant’s name/description and not its integer value in the enumeration; date/time is in a readable format

## Configuration and security
- All entities are created in AWS in each environment (incl. correct subnets and any other required config)
- Check all env vars
- For example, make sure staging environment variables haven't been copied over to production without changing their values to the correct production values.
- API keys are in place
- API authentication is in place – no anonymous access

## Errors
-  are logged in CloudWatch
- Notifications are available when API is failing
- Correct error responses are returned
- vThe canaries for all endpoints that should have them
- Check that canaries are passing
- The canaries have someone subscribed to it
- Tenants and Leaseholders canaries should send alerts to the Tenants-Leaseholders-alert SNS topic 
