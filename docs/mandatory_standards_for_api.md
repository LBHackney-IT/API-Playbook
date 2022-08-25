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

[https://docs.google.com/document/d/1bU9nYLn37VlY6-7pgy3yE2DkOVvYGYByxUpNc5jmlPk/edit#](https://docs.google.com/document/d/1bU9nYLn37VlY6-7pgy3yE2DkOVvYGYByxUpNc5jmlPk/edit#)

**Cloudwatch alarms**

Amazon CloudWatch is a monitoring and observability service, able to provide our developers with data and actionable insights to monitor all our applications, respond to system-wide performance changes, and optimise resource utilisation. CloudWatch collects monitoring and operational data in the form of logs, metrics, and events. CloudWatch alarms are mandatory to set up for all Hackney APIs.

For more information about the benefits of Cloudwatch alarms and how to set it up as per  “the Hackney Way”, please have a look at the following documentation:

* [Cloudwatch Alarms Documentation ](https://docs.google.com/document/d/1MC3E3Cku1ZY2Oz9dreCuyETHC8mDq9MlH9xZObCkgKE/edit#heading=h.n6ky6abxpd1q)
* 

**Terraform Compliance**

Terraform is a tool for building and managing infrastructure as code. Within the majority of our Hackney services, the individual services (both FE and APIs) that we provide are responsible for provisioning any infrastructure required for that specific service. 

Terraform ensures  the code implemented by our developers meets security requirements. It also helps us customise our standards as per “The Hackney Way”.

For a better understanding of Terraform, please refer to the following documentation: 

* [Terraform Compliance Rules](https://docs.google.com/document/d/1Ggewoqlzjio78IUxX0RVQS_UzT6RyXDxwCKhgNQC_68/edit)
* [Terraform Compliance Presentation ](https://docs.google.com/presentation/d/1i673J4Rcie802bXw5dzotCs2KlzVVclDTmYrOUTnnNU/edit#slide=id.p)
* [API Playbook](https://playbook.hackney.gov.uk/API-Playbook/) (dedicated section for Terraform coming up soon)

**GitGuardian**

GitGuardian brings security and development teams together with automated remediation playbooks and collaboration features to resolve incidents fast and in full. By pulling developers closer to the remediation process, our Organisation can achieve higher incident closing rates and shorter fix times. 

At Hackney, we are using GitGuardian to prevent secrets from leaking into repositories both public and private.As we are already using Github, GitGuardian integration is easy to set up  and it can be actively included in our core CI/CD pipeline. 

For more information on how we use GitGuardian at Hackney, please refer to the following documentation: 

* [GitGuardian ](https://docs.google.com/document/d/1RBA0EvMyxG3NjXf_R4GGYz-wxo_MCwRt8TClnAvOW9M/edit)

</TextToSpeech>