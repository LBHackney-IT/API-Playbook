---
id: preferred_tech_stack
title: Preferred Tech Stack
---
## APIs

- .NET Core 3.1 (C#)
- AWS Lambda
- Serverless framework
  * [See more](/serverless_lambda)
- AWS API Gateway
- Hackney Lambda authorizer (for authentication)
  * [See more](/generating_tokens)
- FxCop for static code analysis
  * [See more](/static_code_analysis)
- dotnet-format for linting
  * [See more](/linting)
- AWS Canaries for availability monitoring
  * [See more](/uptime_monitoring)

## Testing

- nUnit
- FluentAssertions
- Moq
- Bogus (Faker) for faking test data
- AutoFixture
- WebApplicationFactory (Microsoft.AspNetCore.Mvc.Testing)
  * For bootstrapping the application (API) in memory and run end-to-end tests
- Docker & docker-compose
    * For spinning up DB image containers and running tests against that database 
    * _During local development and during test run as part of CI/CD_

*For more guidance on testing, go to the [testing](/tdd) section*

## Common

- Swagger documentation
  * For API design prior to implementation
  * Automated Swagger docs for each API endpoint deployed
  * [See more](/documentation)
- CircleCI for CI/CD
  * [See more](/deployment_pipeline)
- GitHub for version control
  * [HackIT Github](https://github.com/LBHackney-IT)
- AWS for cloud hosting
- AWS Cloudwatch for monitoring
- Terraform for IaC (e.g. setting up AWS DMS)
  * [See more](/infrastructure)
- AWS Parameter store for secrets (conn string and similar)
