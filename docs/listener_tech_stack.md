---
id:    listener_tech_stack
title: Listener Tech Stack
---
## Listener application

- .NET Core 3.1 (C#)
- AWS Lambda
- Serverless framework
  * [See more](/serverless_lambda)
- FxCop for static code analysis
  * [See more](/static_code_analysis)
- [Hackney.Core.xxx](https://github.com/LBHackney-IT/lbh-core)
  * Common Hackney NuGet packages providing common functionality
- dotnet-format for linting
  * [See more](/linting)

## Testing

- [xUnit](https://xunit.net/)
- [FluentAssertions](https://fluentassertions.com/introduction)
- [Moq](https://github.com/Moq/moq4/wiki/Quickstart)
- [AutoFixture](https://github.com/AutoFixture/AutoFixture)
- [BDDfy](https://github.com/TestStack/TestStack.BDDfy)
  * For end-to-end tests
- Host (Microsoft.Extensions.Hosting)
  * For bootstrapping the application in memory to run end-to-end tests
- Docker & docker-compose
    * For spinning up DB image containers and running tests against that database 
    * _During local development and during test run as part of CI/CD_

*For more guidance on testing, go to the [testing](/tdd) section*

## Common

- CircleCI for CI/CD
  * [See more](/deployment_pipeline)
- GitHub for version control
  * [HackIT Github](https://github.com/LBHackney-IT)
- AWS for cloud hosting
- AWS CloudWatch for monitoring
- Terraform for Infrastructure as Code (IaC) (e.g. setting up AWS DMS)
  * [See more](/infrastructure)
- AWS Parameter Store for secrets (connection string and similar)
