---
id: create_nuget_packages
title: How to create NuGet Packages
---

1. Create a dotnet class library project. To create a “compatible” package, developers should target .NET Standard so that all .NET and .NET core projects can consume the package. 
``` dotnet new classlib --name projectName```
Make sure that the .csproj project file has set the RepositoryURL and Version:
```c#
<Project Sdk="Microsoft.NET.Sdk">
 
 <PropertyGroup>
   <TargetFramework>netstandard2.1</TargetFramework>
   <RepositoryUrl>https://github.com/LBHackney-IT/<REP0-NAME></RepositoryUrl>
   <Authors>London Borough of Hackney Council</Authors>
   <Company>London Borough of Hackney Council</Company>
   <Copyright>2021</Copyright>
   <Description><DESCRIPTION HERE></Description>
   <NoWarn>S1066;S4457</NoWarn>
   <GeneratePackageOnBuild>false</GeneratePackageOnBuild>
 </PropertyGroup>
 
</Project>
```


2. Run dotnet pack to create the package.
```dotnet pack <PACKAGE-NAME> --configuration Release```
3. Run dotnet NuGet push to publish the NuGet package to GitHub.
**Note:** In order to run this command you need to create a GitHub Personal Access Token (PAT). See instructions below.
```dotnet nuget push "directory of your NuGet Package (bin/Release/(...).nupkg)"  --api-key YOUR_GITHUB_PAT -s https://nuget.pkg.github.com/LBHackney-IT/index.json```

**How to create a GitHub Personal Access Token**

You need to create a GitHub Personal Access Token to authenticate your request to publish the NuGet package. To do this:

1. Go to your GitHub account and click on your avatar on the top right corner
2. Then go to setting, developer settings
3. Then click on Personal Access Token 
4. Click on ‘Generate new token’
5. Select the read package permission
6. Then generate the token (make sure you copy the token to a safe area as you won’t be able to view it again once you’ve closed the tab)

### Package Versioning
We use the versioning scheme Major.Minor.Patch[-Suffix], where the components have the following meanings:

- Major: Breaking changes
- Minor: New features, but backward compatible
- Patch: Backwards compatible bug fixes only
- Suffix (optional): a hyphen followed by a string denoting a pre-release version
**Note:** When first creating the NuGet package from a branch, use this suffix (e.g. 1.0.1-preview0001)

You can assign the version number in the csproj:
   ```<Version>1.0.22</Version>```

Or in the dotnet pack command:
```dotnet pack <PACKAGE-NAME> -p:PackageVersion=”1.0.22” --configuration Release```

Both of these will generate a versioned package (.nupkg) in the ```<PACKAGENAME>/bin/Release``` folder.

### Deployment Pipelines
**CircleCI Deployment Pipeline (Deprecated)**

We are no longer using CircleCI as we have to manually version packages when using CircleCI, and it does not support a monorepo

We set up an automated pipeline to run the following commands when a change is made on the main branch:
1. Check Code Formatting & Build and Test - This is similar to the [Base API](https://github.com/LBHackney-IT/lbh-base-api/blob/master/.circleci/config.yml) configuration.
2. Pack the package for release

    ```cd TO THE PROJECT dir```

    ```dotnet pack --configuration Release```

3. Publish the package to GitHub

    ```cd TO WHERE THE PACKAGE IS```

    ```dotnet nuget push Hackney.Core.*.nupkg -s GitHub value from .csproj --api-key YOUR_GITHUB_PAT Hackney.Core.*/*.nupkg```

For the publish step above to work, developers will need to manually change the version in the .csproj file according to the versioning scheme (Please see [Package Versioning Section](#package-versioning)).

**GitHub Actions Deployment Pipeline**

This is similar to the CircleCI pipeline, but the github actions pipeline includes automated versioning using [GitVersion](https://gitversion.net/docs/). In the [Hackney.Core monorepo](https://github.com/LBHackney-IT/lbh-core), the GitHub Actions pipeline also allows several packages to be versioned and deployed separately from one repository.

Steps:
1. Add triggers so that the pipeline runs on feature branches and on the main branch
2. Add path triggers to each separate workflow, so that each package can be deployed separately
3. Calculate the version using [GitVersion](https://gitversion.net/docs/). Commits on a feature branch add the -preview suffix and commits on
5. the main branch increment the minor version number.
6. Check Code Formatting & Build and Test - This is similar to the [Base API](https://github.com/LBHackney-IT/lbh-base-api/blob/master/.circleci/config.yml) configuration.
7. Pack the package for release
    - It sets the version using the -p flag in the dotnet pack command ([See above](#package-versioning)).
9. Publish the package to GitHub


We have created a [workflow template](https://github.com/LBHackney-IT/lbh-core/blob/release/.github/workflows-template/publish.yml) which should be duplicated for each package in the repository. This can be used when adding a new package to the Hackney.Core repository.
