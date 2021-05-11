---
id: lambda_best_practices
title: Lambda Functions Use and Good Practice
---


## Introduction
We currently use AWS Lambda services for most of our APIs.  Lambda functions are cloud based compute services that allow you to execute code without having to provision servers.  It is also a very cost effective means of implementing API services since compute costs are only incurred when the service is called and the function runs.

## Good Practices

### When is it best to use a Lambda function?

Lambdas are generally best used for services that do not run for more than 5 minutes. When using Lambdas as API functions fronted by the API gateway, this time limit is further restricted to under 30 seconds (AWS imposes a hard limit on the time an API gateway endpoint can run).  In the vast majority of cases this is sufficient for our API needs. There are some limitations however when we link multiple Lambdas together. Typical setup could be a front end Lambda calling a service API Lambda which in turns calls a platform API. When planning architecture around chaining different Lambdas together, it is worth analysing whether the whole process can be run well under the allocated 30 seconds.
For the majority of cases that will be more than enough time.

### How do we go about building a Lambda function?

Building a Lambda function is no different from building any other application.  In fact our BaseAPI is designed in such a way that it can be run either as a standalone application or as a series of serverless functions.

The main difference is that a second entry point needs to be added.

 In a normal console application the entry point is a Program.cs file (.Net) with the usual main method such as:

 ```dotnet title="Program.cs"
 public static void Main(string[] args)
 {
  WebHost.CreateDefaultBuilder(args)
    .UseStartup<Startup>().Build().Run();
 }
 ```

If you add a secondary entry point to your application such as a LambdaEntryPoint.cs file with an `Init` method, you have something that is ready for AWS:

```dotnet title="LambdaEntryPoint.cs"
protected override void Init(IWebHostBuilder builder)
{
  builder
    .UseStartup<Startup>();
}
```

** Please note, this class must inherit from APIGatewayProxyFunction class (from Amazon.Lambda.AspNetCoreServer Nuget package), so the Init function can be overridden **

## Lambda deployment

We use the Serverless service to deploy our Lambda functions to AWS.  Serverless takes care of all of the required infrastructure scaffolding using AWS CloudFormation in the background.

 There are a few things to consider when setting up your serverless configuration:

- Ensure that your lambda function is suitably named so it can be easily identified when added to the HackIt API ecosystem.
- Ensure that your API Gateway is set up to use the relevant authorizers and relevant measurement and rate limiting is set.
- Ensure that logging is implemented for your functions
- Ensure that Serverless is able to find any required secrets stored in Systems Manager.
- A good example of a Serverless configuration file can be found in our [Base API](https://github.com/LBHackney-IT/lbh-base-api/blob/master/BaseApi/serverless.yml).

### Running your Lambda locally vs Running in the cloud (AWS)

Due to the way the default BaseApi is set up with two application entry points, it is normally not necessary to add any additional tools or frameworks locally for development and debugging. The application can be run and debugged locally as any other .NET Core API.

## Lambda naming good practices

Our standard naming convention for Lambdas in our serverless configuration is: `${self:service}-${self:provider.stage}`.

Using the above format it is very easy to identify what service and stage the Lambda belongs to when we can have have a lot of different Lambdas on a single account.

For example the BaseApi sample configuration above would result in a Lambda function called `your-api-name-production` when deployed to production

## Logging your Lambda activity

BaseApi’s serverless configuration includes the basic setup for policies required to enable Cloudwatch monitoring for Lambda. CloudWatch is often sufficient for basic monitoring and doesn't require any changes to the application code.

In some cases it’s useful to have a bit more insight on how the Lambda is performing. In that case services like X-Ray can be implemented. They require some additional configuration to the application, but are generally relatively easy to implement at any point. 

[**More about X-Ray here**](/x_ray)

### Alerts

For more details on logging and alerts in general, please see our [alerting guide](/alerting).

