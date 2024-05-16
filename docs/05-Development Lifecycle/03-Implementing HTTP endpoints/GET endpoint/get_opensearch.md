---
id: get_opensearch
title: GET endpoint using OpenSearch (also known as Elastic Search)
---

import TextToSpeech from '../../../../src/SpeechComponent.js';

<TextToSpeech>

## GET
GET requests are used to **read** either a single or a collection resource.

  - GET requests for individual resources will usually generate a 404 if the resource does not exist;

  - GET requests for collection resources may return either 200 (if the collection is empty) or 404 (if the collection is missing);

  - GET requests must NOT have a request body payload;

**Note:** GET requests on collection resources should provide sufficient filter and [pagination](pagination.md) mechanisms;

[Here is an example PR to show how to build a search endpoint using OpenSearch (Also known as ElasticSearch)](https://github.com/LBHackney-IT/housing-search-api/pull/154)

We have created a video that gives developers a good understanding of how we build API Endpoints using OpenSearch (also known as ElasticSearch) from beginning to end, following best practices. 

</TextToSpeech>