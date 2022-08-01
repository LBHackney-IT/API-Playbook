---
id: feature-toggle
title: Feature Toggle
---

import TextToSpeech from '../src/SpeechComponent.js';
<TextToSpeech>

# Purpose

Feature toggling provides a mechanism by which new features can be enabled or disabled without the need for redeployment. 


# Context 

There may be situations where features are developed within individual micro frontends that are not ready to be released into production, or that depend on features that are developed by a corresponding backend service.

Additionally, configuration can be externalised which will reduce the requirement to re-deploy individual micro-frontends in the event that configuration needs to change.


# Why We Use it at Hackney

We have created an api to expose configuration and capability for feature toggling in order so that features can be consumed by any interested applications without the need for redeployment. This is aligned with our vision to centralise configuration.


# Benefits



* A Single place to store configuration that can be consumed by multiple services
* Each type will have its own configuration/data structure, which will be specific depending on individual needs.
* Enable and disable features without having to redeploy


### Endpoints:


#### Get Configuration

Used to retrieve a list of configurations

**URL: **/configuration/?type=person,tenure,mmh

**Method:** GET

**Querystring Parameters:**



* type: Person, Tenure, _etc… _(this should be a list of strings)

**Response:** 200


### Example Payload:


```
[
  {
    "Type": "Person",
    "Configuration": {
      "ApiUrl": "http://www.hackney.gov.uk/person"
    },
    "FeatureToggles": {
      "CreatePerson": true,
      "EditPerson": false
    }
  },
  {
    "Type": "ContactDetails",
    "Configuration": {
      "ApiUrl": "http://www.hackney.gov.uk/contactdetails"
    },
    "FeatureToggles": {
      "AddContactDetails": true
    }
  },
  {
    "Type": "Tenure",
    "Configuration": {
      "ApiUrl": "http://www.hackney.gov.uk/tenure"
    },
    "FeatureToggles": {
      "CreateTenure": true
    }
  },
  {
    "Domain": "Asset",
    "Configuration": {
      "ApiUrl": "http://www.hackney.gov.uk/asset"
    },
    "FeatureToggles": {
      "ViewAsset": false
    }
  }
]

```
</TextToSpeech>