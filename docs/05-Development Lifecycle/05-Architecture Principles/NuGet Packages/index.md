---
id: nuget_packages
title: What are NuGet Packages?
---

import TextToSpeech from '../../../../src/SpeechComponent.js';

<TextToSpeech>

# What is a NuGet Package

At Hackney we have created NuGet Packages to prevent the duplication of common code when implementing our APIs. NuGet is a package manager designed to enable developers to create, share and consume reusable code.

A Nuget Package is a single ZIP file with the .nupkg extension that contains compiled code and other content which is demanded for the project. NuGet enables developers to host packages privately in the cloud, on a private network or on their local system. This means that packages are available only to those developers that have access to the host, effectively securing the packages for a specific group of users. To use the package in your project you must add or update the NuGet.config file and include the authorisation token.

We use NuGet packages to share code that is exclusive to an organisation or a project. This becomes more useful when having a microservice architecture where multiple services share common code, things like middleware, validation, logging, etc in order to have a strong ecosystem in place. 

Although Hackney has got the Base API template that is used when building APIs all the time and allows us to onboard new developers quickly, there is still a need for NuGet packages, here few examples:
- Base API is a boilerplate code for being reused for new APIs which might contain a part of shared common code as not all services might need everything. 
- If we update an existing shared code in the Base API, then we need to manually update all the services which are using the Base API. Instead, if we have a NuGet repository, we should just update the new version of the package inside the Base API and the services.
- When a change is required we only need to do so in one place which helps to reduce the development time required to update code.
- We might need to share multi-domains specific code that does not belong to the Base API. This will allow the source of truth to be available between different services and doesn’t require developers to update several APIs at the same time. 

In our repos we use Gitversion & a GitHub Actions pipeline to automatically version our packages. The way it is set up on most of our package repos is:


# The Benefits

There are many benefits associated with using NuGet: NuGet Packages automatically configure your projects by adding references to the necessary assemblies, creating and adding project files (e.g. configuration), etc. Moreover, NuGet provides package updates 

To ensure that consuming services are not affected by changes to our common packages, we use an automated versioning strategy such that every time an update is made to the NuGet Package the version of the package is calculated automatically. A service will only be able to consume new changes once they have updated the package version they are using in their respective project and deploy the changes. This allows for individual teams to test if their code is compliant with the changes to a package before using it in a production environment. 

For the purpose of onboarding new developers, we ensure that we have extensive documentation in the READMEs of our repositories that is kept up-to-date.

To see the different NuGet packages we have a Hackney please [visit this site](https://github.com/orgs/LBHackney-IT/packages)


</TextToSpeech>