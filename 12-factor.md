# 12 Factor App : Hackney Development Standards

The Twelve Factor App Methodology is suggested by developers for smoothly working and delivering Software as a Service (SaaS) Applications or Web Apps with a focus on Microservices. 

## 1. One codebase tracked in revision control, many deploys

- *As a developer I should put my application code in GitHub so that I can showcase my work, get review and feedback from a wider group than my colleagues.*

For example :https://github.com/LBHackney-IT/LBHTenancyAPI

You should always have one repository for an individual application to ease CI/CD pipelines. Also you can have multiple repositories for a microservice.
The codebase is the same across all deployments, although different versions may be active in each deployment. For example, a developer has some commits not yet deployed to staging; staging will have some commits which are not yet deployed to the production environment. But they all share the same codebase, thus making them identifiable as different deployments of the same application. Deployments should only be normally made from the CI, not from developers machine.  Working in the open allows us to have feedback from a wider audience thus giving an opportunity to improve the code quality.

## 2. Explicitly declare and isolate dependencies

- *As a developer I should not copy any dependencies to the project codebase, rather use dependency management tools to get the required project dependencies, declared in manifest, from the server.*

Your application might rely on external libraries/dependencies and packages to run.As fair point you should never assume that these packages,dependencies exist on the target system. Instead, your application must declare all dependencies and their correct version explicitly.

It is preferable to use a package/dependency manager such as nuget package for C# or npm for Nodejs to manage and resolve dependencies.

## 3. Store config in the environment

- *As a developer I should make sure all configuration data is stored in a separate place from the code, and read in by the code at runtime.*

Configuration options should never be hardcoded, for two reasons:
- You do not want sensitive information like database credentials, server details or API keys to be committed into the repository to prevent security leaks.
- Your configuration varies per environment. For example, you might want to enable debugging on your local environment while this would be a problem on production.

Also avoid storing sensitive data in source control. One way to avoid this is to use environment variables to configure sensitive settings such as access keys.

## 4. Treat backing services as attached resources

- *As a developer I should treat backing services as attached resources.*

A backing service is one which requires a network connection to run, like MySQL. If the location or connection details of such service changes, then you should not have to make code changes. Instead, these details should be available in the configuration.

## 5. Strictly separate build and run stages

- *As a developer I want make sure to strictly separate the Build and Run stages making sure everything has the right libraries so that  automation and maintaining the system will be as easy as possible.*

As we all know that it’s now impossible to make changes during the runtime. Instead, it is suggested that to make changes to the code in the build stage where you have total control on it. This reduces risk and ensures your team that everything is running well.

## 6. Execute the app as  one or more stateless processes

- *As a developer I want to make sure to execute the app as one or more stateless processes so that even if a single process fails, this can be killed and another process replace it without incident, this also is the foundation of scalable and reliable applications.*

In other words, the state of your system is completely defined by your databases and shared storage, and not by each individual running application instance.

## 7. Export services via port binding

- *As a developer I should break my app into much smaller pieces and then look for services out there that I either have to write or can consume so that the application becomes self-contained.*

## 8. Scale out via the process model

_ *As a developer I need to make sure that the processes are less time consuming. Applications should be started or stopped in minimal time so that sustainability and scalability of your application is improved.*

In other words each application should be able restart, scale or clone itself whenever needed.

## 9. Maximize robustness with fast startup and graceful shutdown

- *As a developer I need to make sure that my application is robust. This will ensure that even if it does encounter an unexpected critical failure, it should always be able to start back up cleanly.*

In other words after a unexpected critical failure (crash) or any new deployment, your app should have everything it needs waiting in databases or caches. We should always make sure that rebooting an application is as swift as possible.

## 10. Keep development, staging and production as similar as possible

- *As a developer, infrastructure and support analyst I will make sure that there is continuous deployments by keeping less gaps between production and development environments so that it allows to have rapid development cycle.*

By having development environment to be clone of production environment reduces number of bugs and downtime and also allows you to work in the same environment,services and dependencies.  This also implies the staging environment is handled with the same care as production and allows you to test and UAT scenarios as close to their goal environment as possible.

## 11. Treat logs as event streams

- *As a developer I will make sure that applications have a logging mechanism in place so that developers can debug problems across microservices and resolve them.*

Having a logging mechanism in place allows developers to identify problems, debug through the code and resolve it. 

## 12. Run admin/management asks as one-off processes

- *As a developer run admin/management tasks as one-off processes — tasks like database migration or executing one-off scripts in the environment.*
