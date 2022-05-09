---
id: serverless_safeguards
title: Serverless Safeguards
---

## Introduction
Safeguards is a policy-as-code framework for Serverless Framework which enables you to inspect your serverless.yml file, and the generated Cloud Formation templates, for compliance with:
- security
- operational
- organisational best practices

Safeguards are made available as a stand-alone Serverless Framework plugin with no external dependencies.

At Hackney we use Serverless Safeguards to ensure that our APIs meets our Security compliance requirements, such as adding a Lambda authentication to the API so that only the google groups defined can access the APIs.

## Benefits

- Reduces risk of APIs being deployed without an Authorizer
- Serverless safeguard plugins has the option to customise our policies so we can create the policies based on our own needs
- Stand-alone - it has no external dependencies on any services.
- Proactive - Safeguards are evaluated before any infrastructure is provisioned by evaluating the generated cloud formation template and serverless.yml.
- Enforceable - You can run the safeguards validate command while specifying additional policy files in addition to policies specified in serverless.yaml

## Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/pZQIY0jjD5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
