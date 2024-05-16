---
id: core_packages
title: Hackney Core NuGet Package
--- 

import TextToSpeech from '../../../../src/SpeechComponent.js';

<TextToSpeech>

### What is a Core NuGet Package?

A Core Nuget Package is where common code is duplicated across different API that have similar user needs. This prevents duplicating code across many different services. Within Hackney, we have a shared core NuGet package where common code such as middleware, logging, database setups and validation are stored. This allows different projects to consume the NuGet package where required. 

### Benefits

We have been able to identify the following benefits when using Core NuGet packages:
- The Core NuGet package can act as a source of truth
- Only services that require to be updated can be updated by simply updating the version
- Services from different projects can consume the same NuGet package is there is a user need for it

For more information about the NuGet Packages at Hackney visit our GitHub Repository [here](https://github.com/LBHackney-IT/lbh-core)

</TextToSpeech>