---
id: deployment_pipeline
title: Deployment Pipeline
---

## Introduction

A Deployment pipeline is the process of taking code from a version control repo, such as Github, and releasing a version or the master branch to our deployment environments in an automated fashion.

## Video Tutorial

** For a better understanding of our Deployment Pipeline, please watch our short video tutorial: **

<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/X68e_wdII2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

## CI/CD

We use CI/CD in Hackney as an efficient way to build, test and deploy new code.
CI/CD is short for ** Continuous Integration and Continuous Delivery/Deployment ** .

** CI/CD works in conjunction with the following processes: **

- Version control (branches, commits, merges)
- Build automation/continuous integration
- Test automation
- Deploy automation

We use a combination of software functions in Github and Circle CI, configured via a Yaml file to fully automate environment deployments. Our deployments will usually support a development, staging, and production environment.

The CI/CD yaml configuration is stored in a file in a specifically named folder. The yaml configuration contains all the steps which will be carried out in Circle CI as part of the deployment.

The deployment process is initiated via a commit to a working branch in Github. All branch commits are built and code tests are run. Branches with failing tests or builds cannot be merged into the master branch which is used for deployments.

Before a branch can be merged into master, after a successful build and test, it is marked for code review via a PR (Pull Request) in Github. An approved PR will then fully initiate the CI/CD pipeline process.

The first steps for a deployment are usually the code formatting check, code build and test, deployment software tools installation, assignment of necessary security roles for deployments to AWS Lambda.

The successful completion of all of these steps will allow automated code deployment to the development environments.

In order to deploy to staging and production environments, manual approval in Circle CI is required as the final step.

The automation of the deployment to different environments gives flexibility in making small changes to the code and testing of features before deployment to a production environment.

Deployment automation means we decrease the possibility of human error when releasing new versions of code to deployment environments.
