---
id: mandatory_standards_api
title: Mandatory Standards for Api
---

import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>

**Mandatory Standards for API**

1. **Sonar cloud**
2. **Cloudwatch alarms**
3. **Terraform Compliance**
4. **GitGuardian**

**SonarCloud**

SonarCloud is a tool used to scan code to identify vulnerabilities, bugs and code smells. 

Sonar cloud is mandatory to be set up for every public and private Hackney Repository. We use it to find, understand and fix issues since it highlights areas of our code that are vulnerable and presents these issues on a User Interface. 

For a detailed explanation of its benefits, how to set up and update SonarCloud as per our HackIT Development Standards, please click on the link below:

[Sonar Cloud](/sonarcloud)

**Cloudwatch alarms**

Amazon CloudWatch is a monitoring and observability service, able to provide our developers with data and actionable insights to monitor all our applications, respond to system-wide performance changes, and optimise resource utilisation. CloudWatch collects monitoring and operational data in the form of logs, metrics, and events. CloudWatch alarms are mandatory to set up for all Hackney APIs.

For more information about the benefits of Cloudwatch alarms and how to set it up as per  “the Hackney Way”, please have a look at the following documentation:

* [Cloudwatch Alarms Documentation ](/cloudwatch-alarms)
* 

**Terraform Compliance**

Terraform is a tool for building and managing infrastructure as code. Within the majority of our Hackney services, the individual services (both FE and APIs) that we provide are responsible for provisioning any infrastructure required for that specific service. 

Terraform ensures  the code implemented by our developers meets security requirements. It also helps us customise our standards as per “The Hackney Way”.

For a better understanding of Terraform, please refer to the following documentation: 

* [Terraform Compliance](/terraform_compliance)

**GitGuardian**

GitGuardian brings security and development teams together with automated remediation playbooks and collaboration features to resolve incidents fast and in full. By pulling developers closer to the remediation process, our Organisation can achieve higher incident closing rates and shorter fix times. 

At Hackney, we are using GitGuardian to prevent secrets from leaking into repositories both public and private.As we are already using Github, GitGuardian integration is easy to set up  and it can be actively included in our core CI/CD pipeline. 

For more information on how we use GitGuardian at Hackney, please refer to the following documentation: 

* [GitGuardian ](/gitgaurdian)

</TextToSpeech>