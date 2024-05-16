---
id: api_compliance
title: API Compliance
--- 

### Context
Every API deployed to development, staging and production environments must be compliant with the set of standards listed in this document. An API should not be promoted from one environment to another if it does not satisfy all requirements listed.

The set of compliance items that form this checklist are put in place to ensure that any API developed does not duplicate effort, is built in a reusable way, follows security best practices, is consistent with other APIs and follows all development standards defined.

The APIs compliance checklist will be used as part of future Service Standard Assessments and ongoing check-ins to ensure any identified issues are tackled early on and no technical debt is accumulated.

### Checklist
1. The API has corresponding SwaggerHub documentation for all of the API endpoints it exposes.
2. The API has completed the [API specification assessment process](https://playbook.hackney.gov.uk/api-specifications/assessment_process/)
3. The API has been developed in Hackney’s preferred tech tech stack, unless otherwise agreed and as per standards defined in our [API playbook](https://playbook.hackney.gov.uk/API-Playbook/).
4. The API has been developed following the TDD approach and has end-to-end tets in place 
    - End-to-end tests guide for DynamoDB
    - End-to-end tests guide for PostgreSQL
5. The API has monitoring and logging tools enabled, as per defined standards.
    - X-Ray is enabled for request tracing
    - Canaries are created for availability monitoring
    - CloudWatch is used for application logging.
6. The API has vulnerability scanning enabled via SonarCloud.
    - The API should also have no pending findings to review in SonarCloud.
7. The API has the following infrastructure compliance checks in place:
    - Terraform-compliance for the AWS resources provisioned as part of the same API deployment
    - Serverless safeguards to ensure that the API is using an authorizer for security
8. In Production, the API has been tested as per the ‘Production testing checklist’
9. In Production, the API’s infrastructure is built as per [Production deployment - Live service infrastructure requirements](https://docs.google.com/document/d/1UrT6u4j8AlyPf-aD_E4c30uH27MJgIJoVxYR9kKGzFw/edit)

