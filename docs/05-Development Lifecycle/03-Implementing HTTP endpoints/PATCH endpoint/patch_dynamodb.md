---
id: patch_dynamodb
title: PATCH endpoint using DynamoDB
---
import TextToSpeech from '../../../../src/SpeechComponent.js';

<TextToSpeech>


### PATCH:

PATCH requests are used to **update parts** of single resources, i.e. where only a specific subset of resource fields should be replaced. The semantic is best described as *"please change the resource identified by the URL according to my change request"*. The semantic of the change request is not defined in the HTTP standard and must be described in the API specification by using suitable media types.

  - PATCH requests are usually applied to single resources as patching entire collection is challenging;

  - PATCH requests are usually not robust against non-existence of resource instances;

  - On successful PATCH requests, the server will update parts of the resource addressed by the URL as defined by the change request in the payload;

  - Successful PATCH requests will usually generate 200 or 204 (if resources have been updated with or without updated content returned);

**Note (To Be Clarified):** since implementing PATCH correctly is a bit tricky, we strongly suggest to choose one and only one of the following patterns per endpoint.

1.  Use PUT with complete objects to update a resource as long as feasible (i.e. do not use PATCH at all);

2.  Use PATCH with partial objects to only update parts of a resource, whenever possible. (This is basically [JSON Merge Patch](https://tools.ietf.org/html/rfc7396),a specialized media type `application/merge-patch+json` that is a partial resource representation.);

3.  Use PATCH with [JSON Patch](http://tools.ietf.org/html/rfc6902), a specialized media type `application/json-patch+json` that includes instructions on how to change the resource;

4.  Use POST (with a proper description of what is happening) instead of PATCH, if the request does not modify the resource in a way defined by the semantics of the media type;

In practice [JSON Merge Patch](https://tools.ietf.org/html/rfc7396) quickly turns out to be too limited, especially when trying to update single objects in large collections (as part of the resource). In this cases [JSON Patch](http://tools.ietf.org/html/rfc6902) can shown its full power while still showing readable patch requests (see also [JSON patch vs. merge](http://erosb.github.io/post/json-patch-vs-merge-patch)).

[Here is an example PR to show how to build a PATCH endpoint using DynamoDB](https://github.com/LBHackney-IT/tenure-api/pull/45/files)

We have created a video that gives developers a good understanding of how we build API Endpoints using DynaomDB from beginning to end, following best practices. 

##  Video Tutorial:
Note: To go back a forth between the videos please use the playlist button available
<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/videoseries?list=PL1mVZlA7eC8SviOMxwqErxi9sF8FXwFSj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

</TextToSpeech>
