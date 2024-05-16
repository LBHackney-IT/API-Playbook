---
id: get_postgres
title: GET endpoint using postgres
---
import TextToSpeech from '../../../../src/SpeechComponent.js';

<TextToSpeech>

## GET
GET requests are used to **read** either a single or a collection resource.

  - GET requests for individual resources will usually generate a 404 if the resource does not exist;

  - GET requests for collection resources may return either 200 (if the collection is empty) or 404 (if the collection is missing);

  - GET requests must NOT have a request body payload;

**Note:** GET requests on collection resources should provide sufficient filter and [pagination](pagination.md) mechanisms;

We have created a video that gives developers a good understanding of how we build API Endpoints using Postgres from beginning to end, following best practices. 

##  Video Tutorial:
Note: To go back a forth between the videos please use the playlist button available
<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/videoseries?list=PL1mVZlA7eC8RlnSifeo-qR1PLZ9K9xFq6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

</TextToSpeech>