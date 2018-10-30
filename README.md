# API Playbook

## Application standards

### Open source on GitHub

> As a developer
>
> I want my code to be open source and public
>
> So I can showcase my work and contribute to the wider community

- why GitHub
- how to work in open source securely

### Test-driven approach

- why we use tdd practice
- resources for learning tdd
- (triangulation)
- how to use a test suite to ensure quality is high

## Monitoring

### Centralised logging

> As a developer
>
> I want to be able to see logs for all applications in one place
>
> So I can debug problems across microservices and resolve them

> As a support analyst
>
> I want to be able to see logs for all applications in one place
>
> So I can identify errors

![Papertrail Example](images/papertrail.png)

We use [**Papertrail**][papertrail] as a centralised log platform, as it has a good interface, is easy to use, and is well priced. It allows us to see a stream of logs from a single application, a group of applications, or all applications at once. We can easily search by common references to trace requests across microservices.

If you are deployed to the [Hackney ECS environment](#Hosting), your service will log to Papertrail automatically. You need to set the Hostname of your container to the name of your service in your task definition.

![Screenshot of setting container host name](images/task-definition-hostname.png)

### Centralised application performance monitoring

> As a developer or a support analyst
>
> I want to able to able to see a breakdown of transactions
>
> So I can measure application performance and find performance bottlenecks

![New Relic Screenshot](images/newrelic.png)

We use [**New Relic**][newrelic] as a centralised application performance monitoring tool, as it is capable of instrumenting applications in many languages, including C# and Ruby. It allows us to see requests going through an application and where time is spent during those requests. For example, if a large SQL call is what is hurting performance.

In a .NET application, you install a New Relic Agent on the machine, which will automatically instrument any .NET apps running. You can find an example of setting this up in the [Tenancy API](dotnet-newrelic-example).

In a Ruby application, you install the New Relic gem and configure it with environment variables. You can find an example of setting this up in the [Income API](ruby-newrelic-example).

### Centralised uptime monitoring

- pingdom?
- alerts responsible team members when the site goes down
- useful as a maintainer because you know when to take action

### Centralised exception logging

- sentry
- logs every error that happens within the system
- attaches metadata including which user experienced the error, what request they were trying to make, how many times this has occurred, and which release it started with
- useful for developers/maintainers to investigate and fix application errors

![sentry](images/sentry.png)

### 12 Factor

- https://docs.google.com/document/d/1ERHoLvT4q4xFtWzoxs3b-v3FF1aLknrFMyc4NaiT5WU/edit#heading=h.i16rhbmwmkxq
- platform agnostic
- can be run on any cloud provider environment or on premises
- do not have to change application code to change config
- 12 factor etc

## Containers

- to be used in both development and hosted environments
- use docker-compose to define dependencies when running locally. this ensures all developers are running in reasonable parity with production when developing the application
- use docker in hosted environments. ECS is covered below
- example: income-api (ruby - example of using docker with rails)
- example: tenancy-api (c# - example of using docker with .NET Core)
- example: universal-housing-simulator (sql server - example of using docker to run dependencies)

## Hosting

### ECS

- hosted docker on AWS
- runs on EC2 instances
- configured to use our own EC2 instances
- why? because it fit into the AWS ecosystem. because it's a fairly simple and cost effective approach to running docker in production. because it can be securely connected to API Gateway.
- downsides? lots of steps involved in setting up. can be difficult to configure manually. fix: terraform

### API Gateway

- provides authentication
- securely connects to EC2 instances running applications
- provides a single domain in front of all the apps

### Developing for ECS

- we use a VPN connection between our AWS VPC (Virtual Private Cloud) and the Hackney on-premises network. This permits access to services, databases and webservices hosted on premises, from ECS. We restrict IP ranges of available services, so you may need to adjust this if you require service access that hasn't been required before.

### Future

- because all applications should be containerised, we can change the hosting provider with minimal to no interruption of service, and no application code change
- considering Kubernetes on AWS currently
- might replace AWS API Gateway with a more feature rich gateway

### Past

- trialled Heroku Enterprise

## Deployment pipeline

- single standard method of deploying to production
- automated steps, so little room for human error
- reproducible releases. we can see what happened on each one
- enforces automated checks before releasing to staging or production. tests must pass. linting must pass. there must be no obvious vulnerabilities.
- means staging must be deployed before production, and a developer must approve a production release. this makes it more likely for developers to test in staging before promoting a change to production

- typically four stages:
  - build and check
  - staging release
  - hold for production confirmation
  - production release

- check typically involves:
  - automated tests passing
  - linting passing
  - vulnerability checker passing

![Circle CI](images/circleci.png)

## Documentation standards

- Business context
  - who was this made for? why was this made? who was the product owner?
- Stack
  - what did we build this with? why did we choose that?
- Installation
  - how do I get set up with the application as a new developer?
- Development practices
  - what practices should I adhere to when writing code?
- Release process
  - when do I release to production? what should I know beforehand? how to get code reviewed and approved?
- Deployment pipeline
  - what tools do I use to release to production? (circle)
- Common problems
  - errors and issues developers experienced with the project will have all seen. useful for new developers to have a reference
- Useful contacts
  - active maintainers (developers, delivery managers, stakeholders)
  - other contacts  (developers, delivery managers, stakeholders)
  - include name, title, company and email address for each
- API endpoints (probably to come automatically)
  - generated from swagger

### Swagger

- we use swagger to get:
  - human readable and simple to use. can be viewed by more than just developers
  - a list of all endpoints available in the app, with detailed documentation of inputs and outputs
  - other teams can use our swagger documentation to consume our APIs
  - integrations between applications can be built more easily with better endpoint documentation
- tenancy api example: c# using swashbuckle
- income api example: ruby using swagger-blocks

[papertrail]: http://example.com
[newrelic]: http://example.com
[dotnet-newrelic-example]: http://example.com
[ruby-newrelic-example]: http://example.com
