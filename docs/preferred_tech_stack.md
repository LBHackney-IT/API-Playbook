---
id: preferred_tech_stack
title: Preferred Tech Stack
---
## APIs

.NET Core 3.1 - C#
AWS Lambda
Serverless framework
AWS API Gateway
Hackney Lambda authorizer (for authentication)
FxCop for static code analysis
dotnet-format for linting
AWS Canaries for availability monitoring


## Testing

nUnit
FluentAssertions
Moq
Bogus (Faker) for faking test data
AutoFixture
WebApplicationFactory (Microsoft.AspNetCore.Mvc.Testing) for bootstrapping the application (API) in memory and run end-to-end tests
Docker & docker-compose for spinning up DB image containers and running tests against that database (during local development and during test run as part of CI/CD)


## Common

Swagger documentation
For API design prior to implementation
Automated Swagger docs for each API endpoint deployed
CircleCI for CI/CD
GitHub
AWS for cloud hosting
AWS Cloudwatch for monitoring
Terraform for IaC (e.g. setting up AWS DMS)
AWS Parameter store for secrets (conn string and similar)
