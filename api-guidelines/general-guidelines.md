# MUST Follow API First Principle

You must follow the [API First Principle](design-principles.md#api-first), more
specifically:

  - You must define APIs first, before coding its implementation, [using
    OpenAPI as specification language](#must-provide-api-specification-using-openapi)

  - You must design your APIs consistently with this guidelines

  - You must call for early review feedback from peers and client
    developers

# MUST Provide API Specification using OpenAPI

We use the [OpenAPI specification v3.0](https://www.openapis.org) as
standard to define API specifications files. API designers have to
provide the API specification files using **YAML** to improve
readability.

The API specification files should be subject to version control using a
source code management system - best together with the implementing
sources.

You MUST publish the API specification with the deployment of the
implementing service.

# MAY Provide API User Guide

In addition to the API Specification, if the API is expected to be widely
used, it is good practice to provide an
API user guide to improve client developer experience, especially for
engineers that are less experienced in using this API. A helpful API
user guide typically describes the following API aspects:

  - API scope, purpose, and use cases

  - concrete examples of API usage

  - edge cases, error situation details, and repair hints

  - architecture context and major dependencies - including figures and
    sequence flows
