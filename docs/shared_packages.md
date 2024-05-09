---
id: shared-packages
title: Hackney Shared NuGet packages
--- 

import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>


### What is a Shared NuGet Package?

A Shared NuGet package is where a NuGet package is created to store all response and request models that are used across many services. For example, the same model can be used across APIs (publishers) and custom build 'listeners' (consumers) hence it would be easier to reference one shared NuGet packages across both the services. 

### Benefits

We have been able to identify the following benefits when using Shared NuGet packages:
- The Shared NuGet package can act as a source of truth
- Only services that require to be updated can be updated by simply updating the version
- Services from different projects can consume the same NuGet package is there is a user need for it
- Development time is reduced in making changes to the model as it only needs to be done in one place. 

To see the different NuGet packages we have a Hackney please [visit this site](https://github.com/orgs/LBHackney-IT/packages)

</TextToSpeech>