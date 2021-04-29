---
id: serverless_lambda
title: Serverless Lambda Framework
---
## Introduction

**What is Serverless Lambda?**

The Serverless Framework provides support when developing and deploying AWS (Amazon Web Services) Lambda Functions, along with any AWS infrastructure resources that are required. It provides a Command Line Interface (CLI) structure, automation and best practices out-of-the-box,  allowing developers to focus on building sophisticated, event-driven, serverless architectures, composed of Functions and Events.

### Video Tutorial

** Start by having a look at our Serverless Lambda Framework overview: **

<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/EnID_C4yB_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

## Terminology

### Functions

A function is an AWS Lambda function that is similar to a microservice. It’s simply code that is deployed in the cloud, this is mostly written as a single job. An example of a function could be to provide Database Credentials if you’re using PostgreSQL DB service (At Hackney we do not hard code this):

```yaml title="serverless.yml" {9}
functions:
  baseApi:
    name: ${self:service}-${self:provider.stage}
    handler: BaseApi::BaseApi.LambdaEntryPoint::FunctionHandlerAsync
    role: lambdaExecutionRole
    environment:
# TODO: Create ssm variables for this API's postgres mirror then rename base-api below to match api name
# TODO: Remove this line if DynamoDb is being used
      CONNECTION_STRING: Host=${ssm:/base-api/${self:provider.stage}/postgres-hostname};Port=${ssm:/base-api/${self:provider.stage}/postgres-port};Database=base-api-mirror;Username=${ssm:/base-api/${self:provider.stage}/postgres-username};Password=${ssm:/base-api/${self:provider.stage}/postgres-password}
    events:
      - http:
          path: /{proxy+}
          method: ANY
          private: true
```
### Events

Anything that triggers an AWS Lambda Function to execute is regarded by the Framework as an Event. Events are infrastructure events on AWS such as:
- An AWS API Gateway HTTP endpoint request
- An AWS S3 bucket upload

When you define an event for your AWS Lambda functions in the Serverless Framework, the Framework will automatically create any infrastructure necessary for that event (e.g. an API Gateway endpoint) and configure your AWS Lambda Functions to listen to it.

### Resources

Resources are AWS infrastructure components that your Functions use such as:
- An AWS DynamoDB Table
- An AWS S3 Bucket (e.g. for saving images or files)
- An AWS SNS Topic (e.g. for sending messages asynchronously)

The Serverless Framework not only deploys your Functions and the Events that trigger them, but it also deploys the AWS infrastructure components your Functions depend upon.

```yaml title="serverless.yml"
resources:
  Resources:
    lambdaExecutionRole:
      Type: AWS::IAM::Role
      Properties:
        Path: /${self:service}/${self:provider.stage}/
        RoleName: ${self:service}-lambdaExecutionRole
        AssumeRolePolicyDocument:
          Version: '2012-10-17'
          Statement:
            - Effect: Allow
              Principal:
                Service:
                  - lambda.amazonaws.com
              Action: sts:AssumeRole
        ManagedPolicyArns:
          - arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole
          - arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess
# TODO: Enable this line and set the correct policy name if DynamoDb is in use
#          - arn:aws:iam::${self:provider.account}:policy/base-api/lambda-dynamodb-base-api
        Policies:
          - PolicyName: manageLogs
            PolicyDocument:
              Version: '2012-10-17'
              Statement:
                - Effect: Allow
                  Action:
                    - logs:CreateLogGroup
                    - logs:CreateLogStream
                    - logs:PutLogEvents
                  Resource:
                    - 'Fn::Join':
                        - ':'
                        - - 'arn:aws:logs'
                          - Ref: 'AWS::Region'
                          - Ref: 'AWS::AccountId'
                          - 'log-group:/aws/lambda/*:*:*'
                - Effect: "Allow"
                  Action:
                    - "s3:PutObject"
                    - "s3:GetObject"
                  Resource:
                    Fn::Join:
                      - ""
                      - - "arn:aws:s3:::"
                        - "Ref": "ServerlessDeploymentBucket"
```

### Services

A service is the framework’s unit of organisation, it’s where you define the functions, events which trigger them and resources that your functions use. A service can be described in a YAML or JSON format. 

At Hackney, we define the service in the YAML format (serverless.yml) which is stored in the root directory of our projects.

```yaml title="serverless.yml"
service: your-api-name
provider:
  name: aws
  runtime: dotnetcore3.1
  memorySize: 2048
  tracing:
    lambda: true
    apiGateway: true
```
