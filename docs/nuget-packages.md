---
id: nuget_packages
title: NuGet Packages
---

import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>
# What is a NuGet Package

At Hackney we have created NuGet Packages to prevent the duplication of common code when implementing our APIs. NuGet is a package manager designed to enable developers to create, share and consume reusable code.

A Nuget Package is a single ZIP file with the .nupkg extension that contains compiled code and other content which is demanded for the project. NuGet enables developers to host packages privately in the cloud, on a private network or on their local system. This means that packages are available only to those developers that have access to the host, effectively securing the packages for a specific group of users. To use the package in your project you must add or update the NuGet.config file and include the authorisation token.

The token used to access Hackneys’ NuGet Package is a GitHub PAT created by a machine user account, and then encoded to make it usable independent of the user that created it. (See [here](https://github.community/t/download-from-github-package-registry-without-authentication/14407/111) for an explanation of how this is done.) The value of this token can be found in the AWS parameter store within the DevelopmentAPIs AWS Account :/nuget/PUBLIC_TOKEN.

It is conventional to name the branches in an arranged structure so that the automated tests work and to allow the developers to create preview versions of packages 

We use semantic versioning for our nuget packages. The format is:



* Major: Breaking changes
* Minor: New features, but backward compatible
* Patch: Backwards compatible bug fixes only
* Suffix (optional): a hyphen followed by a string denoting a pre-release version

In our repos we use Gitversion & a GitHub Actions pipeline to automatically version our packages. The way it is set up on most of our package repos is:



* Any push to any branch other than main/master increments the preview version number. Packages are published on every push. E.g. a version number could be 0.3.2-preview-0001. (Note: these branches must follow the pattern feature/(something) to be picked up by the pipeline.
* Any push to the main/master branch updates the minor number


# The Benefits

There are many benefits associated with using NuGet: NuGet Packages automatically configure your projects by adding references to the necessary assemblies, creating and adding project files (e.g. configuration), etc. Moreover, NuGet provides package updates 

To ensure that consuming services are not affected by changes to our common packages, we use an automated versioning strategy such that every time an update is made to the NuGet Package the version of the package is calculated automatically. A service will only be able to consume new changes once they have updated the package version they are using in their respective project and deploy the changes. This allows for individual teams to test if their code is compliant with the changes to a package before using it in a production environment. 

For the purpose of onboarding new developers, we ensure that we have extensive documentation in the READMEs of our repositories that is kept up-to-date.

For more information about the NuGet Packages at Hackney visit our GitHub Repository [here](https://github.com/LBHackney-IT/lbh-core)
</TextToSpeech>