---
id: lambda_authoriser
title: Lambda Authoriser
---

##  What is a Lambda authorizer?

Read more in the [AWS documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html)!

## Custom implementation of a Lambda authorizer

For a Lambda authorizer, we use a custom Lambda function that has been developed in-house.

[**GitHub Repository**](https://github.com/LBHackney-IT/api-auth-token-generator)

It allows for granular access control per API endpoint per environment. To gain access to a given API endpoint, the consuming service will need to supply an authorization token as part of the request, passed in the HTTP header “Authorisation”.

** In the first iteration of this solution, the following applies: **

- Tokens are issued per service
- Tokens do not expire

Each time a consumer makes an API request and supplies the JWT auth token, our custom Lambda function takes the token, validates and decrypts it, retrieves data about the token from the database and compares the data from the database to the API request information.

## When is a token valid

- If the `Enabled` flag is set to true
  * This means that the token has not been revoked
- If a token has an expiry date, it should not be a past date
- The environment recorded in the database should match the one from the request
- The API name should match the one from the request
- The HTTP method (GET, POST, etc.) should match the one from the request

** NB: The Lambda authorizer approach described above is a new solution and not all APIs have been updated to use it. **

[**Lambda Authorizer Documentation**](https://docs.google.com/document/d/1mpTY-sfYwR2brIF_8KjxiYzW6zgkjbv4Pi-9Y5LRlBA/edit#)

## When to use?

HackIT’s custom Lambda authorizer should be used for all new APIs that are to be created. It has been created in a generic way, making it possible to be used across multiple APIs.

The only configuration required would be to insert the lookup values into the lookup tables (API name, API endpoint).

The above is to be automated as part of our API Hub upcoming work.

## Google Groups based authorization:

In addition to the custom build lambda authorizer mentioned above, we have also implemented Google groups based authorization in some of our projects.
When developing APIs for internal use, the most convenient way to authenticate users is to use Google SSO. Once the user/client has been authenticated, authorization can be handled at the API level to ensure the user/client has access to the requested resource.

Sample implementation with serverless and .NET Core can be found [here](https://github.com/LBHackney-IT/comino-printing).

In the above solution, each Lambda function that is deployed to API gateway has the authorizer set to the custom API authorizer.

Each time a request is made to one of the end points in question, the authorizer will take the provided JWT token and check what Google Groups the client is in. If the client is authenticated and is in one of the allowed groups, the request is authorized. Otherwise access is denied. In both cases the standard AWS IAM policy statement is returned indicating whether the request was authorized or not, and then depending on the result either the requested Lambda resource is called or the client gets an unauthorized response.

Implementing authorization this way requires a bit more development work, but completely takes a way the necessity to manage API keys in the infrastructure. This also gives the business the power to manage their own resources and determine who has access to them.
