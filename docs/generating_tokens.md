---
id: generating_tokens
title: Generating Tokens
---
## Introduction

Each time a consumer makes an API request and supplies the JWT auth token, our custom Lambda function takes the token, validates and decrypts it, retrieves data about the token from the database and compares the data from the database to the API request information.

** In the first iteration of this solution, the following applies: **

  a. Tokens are issued per service

  b. Tokens do not expire

Each service that requires a token will need to request it via the API Hub. The API Hub makes use of an auth token generator endpoint, which generates a JWT token and inserts data about the token (such as who requested it, which API endpoint it allows access to, which environment and more) into a Postgres database.

For request information, please look at the Swagger documentation:

          https://app.swaggerhub.com/apis/Hackney/authorisation-token-generator-api/1.0

##  When is a token valid

1. If the “Enabled” flag is set to true

   a. This means that the token has not been revoked

2. If a token has an expiry date, it should not be a past date

3. The environment recorded in the database should match the one from the request

4. The API endpoint name should match the one from the request

5. The API name should match the one from the request

6. The HTTP method (GET/POST/etc) should match the one from the request

**   NB: The Lambda authorizer approach described above is a new solution and not all APIs have been updated to use it. **

Lambda authorizer documentation:

              https://docs.google.com/document/d/1mpTY-sfYwR2brIF_8KjxiYzW6zgkjbv4Pi-9Y5LRlBA/edit#
