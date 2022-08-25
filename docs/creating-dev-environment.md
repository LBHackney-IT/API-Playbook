---
id: 'dev-environment'
title: 'Creating a Development Environment'
---

import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>


# Creating a Development Environment for the API Playbook 


# Option 1 - Continue using GitHub Pages


## Implementation:

* To have two environments, we would need to have 2 repositories: One would be ‘production’ and the other would be ‘dev’.
* Development would be done on the development repo
* When a release is ready, a release branch would be made on the development repository. This will trigger the pipeline to copy & push the changes to the production repository.
* Branch protection rules could be created to prevent people from making changes directly to production etc.

<span style="text-decoration:underline;">References</span>: 


* [https://stackoverflow.com/questions/59937478/github-pages-staging-site](https://stackoverflow.com/questions/59937478/github-pages-staging-site)
* [https://medium.com/geekculture/when-youre-working-on-a-static-site-and-github-pages-feels-like-the-perfect-hosting-solution-a41c37f4e326](https://medium.com/geekculture/when-youre-working-on-a-static-site-and-github-pages-feels-like-the-perfect-hosting-solution-a41c37f4e326)


## Pros:
* Lightweight
* Little-to-no downtime while this change is made
* Free to use 
* Secure and reliable


## Cons:
* Possible confusion between dev & prod repos
* It doesn’t follow the conventions of other projects
* Possibility of conflicts if the dev/prod repositories become de-synced
* Without a subdomain provided, the page load time can be very slow 
* No SSL support 


# Option 2 - Switch to S3

## Implementation

This solution requires us to update how Tech Radar & Playbook are hosted.

 We would need to change the playbook from being hosted on GitHub pages to from S3 & Cloudfront. The playbook domain is already set up to have multiple origins, we would need to add one more.

As part of this work, we could move the terraform configuration for this from the tech-radar repository to aws-common-terraform, or some other suitable repository.


## Pros:
* Follows conventions from Tech Radar, Developer Hub, and many other projects
* May(?) help us resolve the search issue as the site will no longer redirect to Github Pages and back
* Can be done in a batch as part of the work needed to update the Tech Radar terraform to add WAF (as this was manually done a few months ago)
* Fast and reliable service 
* Distributed across the world 


## Cons:
* Could have possible downtime on prod & associated services as the switch is made
* Skillset required for deployment (initial learning curve)
* Cost of deploying solutions 
* The UI might be a bit difficult to understand for beginners

</TextToSpeech>