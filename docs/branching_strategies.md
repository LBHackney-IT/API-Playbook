---
id: branching_strategies
title: Branching Strategies
---

** GitHub is used for version control and source code management. **


** When a new repository is created: **

  1. Use the lbh-base-api template if creating a new API

  2. Ensure you set the project up on CircleCI for CI/CD

  3. By default, repositories should be kept public, unless there is a specific need and justification not to do so.

## Video Version

**Watch our intro to branching strategies here!**

<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/0btxBJJ5Dxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

## Branch Definitions

### GitFlow

[Inrtoduction to Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

_Note: GitFlow is not strictly followed throughout projects, projects can evaluate and choose a branching strategy suitable for their needs._

![Gitflow Diagram](./doc-images/gitflow.png)

_A simple gitflow diagram_

#### Master branch

The branch that holds the code currently in production.

This branch should be a representation of what is running in production (although that might not be a case if a deployment to staging has happened but has not been released to production yet)


#### Development branch

The branch that holds any changes currently in development stage that are not yet pushed to a staging or production environment.

If using development and master branches, a release to Staging/Production environments happens by a Pull Request from development to master.

#### Feature branch

A branch containing any new changes as per requirements for the given project.

A feature branch should be created from the ‘development’ branch.

Once happy with the changes in the feature branch, a pull request to merge the changes into the ‘development’ branch should be made.


#### Hot-fix branch

A branch containing fixes to code already in production state.

A hot-fix branch should be created from the master branch.

Any changes in the hot-fix branch should be merged into **both** the master & development branches following a pull request review.

Hot-fixes applied should be merged directly to master as this triggers separate CircleCI workflow that will ensure that any changes currently in development are not overwritten.


### Trunk Based Development  

[Introduction to Trunk Based Development](https://trunkbaseddevelopment.com/)

Trunk based development is the most common branching strategy used for a microservice architecture. This is a fast workflow with minimal merging.

Essentially in this model, master is the only branch which is maintained over time and other branches are considered transient and short lived.

Feature branches should be as short lived as possible – the longer the branch is open for then the higher the risk of merge conflicts.

All commits to feature branches should be built and tested on the CI/CD platform to provide fast feedback to developers, and any code being merged into the trunk must go through a pull-request peer review process. Typically feature branches do not publish any artefacts or trigger deployments as these slow down the feedback process.

The cadence of release branches should align with an individual’s services release schedule. Some projects may only create release branches at the end of a sprint, whilst others might create several per-week.

![Truck Based Development Diagram](./doc-images/devops.png)
_A simple Trunk Based Development workflow diagram_

| Branch Name | Branch Policies | Build & Test | Publish Artefacts | Deploy to Environments |
| ----------- | --------------- | ------------ | ----------------- | ---------------------- |
| feature/* | | Yes | No | N/A |
| master | Require pull request<br/>Build validation | Yes | Yes | Development |
| release/* | | Yes | Yes | Staging<br/>Production |

Trunk-based development is a mindset more than a practice.  It forces the developers to think early on about how not to break the build, instead of waiting to think about this when merging the branch.

Trunk-based development becomes more natural to adopt when you use feature flags in your continuous integration pipeline.  

Feature flags is a technique that will help you integrate code into a shared repository at least once a day and ship it, even if you haven't finished the feature yet. You'll be able to deploy at any time, but defer the decision to release for another day.  Turn off the feature flag and let the team continue working with a stable version and a healthy build.