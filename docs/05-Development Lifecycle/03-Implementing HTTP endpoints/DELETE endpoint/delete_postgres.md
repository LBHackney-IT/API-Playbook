---
id: delete_postgres
title: DELETE endpoint using Postgres
---
import TextToSpeech from '../../../../src/SpeechComponent.js';

<TextToSpeech>


### DELETE:

DELETE requests are used to **delete** resources. The semantic is best described as *"please delete the resource identified by the URL"*.

  - DELETE requests are usually applied to single resources, not on collection resources, as this would imply deleting the entire collection;

  - successful DELETE requests will usually generate 200 (if the deleted resource is returned) or 204 (if no content is returned);

  - failed DELETE requests will usually generate 404 (if the resource cannot be found) or 410 (if the resource was already deleted before);

**Important:** After deleting a resource with DELETE, a GET request on the resource is expected to either return 404 (not found) or 410 (gone) depending on how the resource is represented after deletion. Under no circumstances the resource must be accessible after this operation on its endpoint.

We have created a video that gives developers a good understanding of how we build API Endpoints using Postgres from beginning to end, following best practices. 

##  Video Tutorial:
Note: To go back a forth between the videos please use the playlist button available
<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/videoseries?list=PL1mVZlA7eC8RlnSifeo-qR1PLZ9K9xFq6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

</TextToSpeech>
