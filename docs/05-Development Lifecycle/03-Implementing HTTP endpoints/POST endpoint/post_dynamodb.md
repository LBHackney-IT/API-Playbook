---
id: post_dynamodb
title: POST endpoint using AWS DynamoDB
---
import TextToSpeech from '../../../../src/SpeechComponent.js';

<TextToSpeech>

### POST:

POST requests are idiomatically used to **create** single resources on a collection resource endpoint, but other semantics on single resources endpoint are possible. The semantic for collection endpoints is best described as *"please add the enclosed representation to the collection resource identified by the URL"*.

  - On a successful POST request, the server will create one or multiple new resources and provide their URI/URLs in the response;

  - Successful POST requests will usually generate 200 (if resources have been updated), 201 (if resources have been created), and 202 (if the request was accepted but has not been finished yet);

The semantic for single resource endpoints is best described as *"please execute the given well specified request on the resource identified by the URL"*.

**Generally:** POST should be used for scenarios that cannot be covered by the other methods sufficiently. In such cases, make sure to document the fact that POST is used as a workaround.

**Note:** Resource IDs with respect to POST requests are created and maintained by server and returned with response payload.

**Tip:** Posting the same resource twice is by itself **not** required to be *idempotent* and may result in multiple resource instances.

[Here is an example PR to show how to build a POST endpoint using DynamoDB](https://github.com/LBHackney-IT/tenure-api/pull/34)

We have created a video that gives developers a good understanding of how we build API Endpoints using DynaomDB from beginning to end, following best practices. 

##  Video Tutorial:
Note: To go back a forth between the videos please use the playlist button available
<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/videoseries?list=PL1mVZlA7eC8SviOMxwqErxi9sF8FXwFSj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

</TextToSpeech>
