---
id: developer_onboarding
title: Developer technical on-boarding
---

### Proposing changes
We love innovation and are always open to learning, iterating and improving. To suggest improvements and changes to our existing standards and tech stack, please use our technical architecture, frontend and data communities of practice.
- Currently adopted technologies and the ones in-trial can be found in our [tech radar](https://playbook.hackney.gov.uk/tech-radar).
- Our preferred BE stack is documented [here](/preferred_tech_stack.md).

### Reusable components catalogue
Before you commence the development of a new API, micro-frontend or NuGet shared package, please refer to our [Developer Hub](https://developer-api.hackney.gov.uk/), where you can find information about available reusable components and APIs available for reuse.

**Please Note:** The Developer Hub is being actively developed. It currently provides information about available APIs, with new features, such as a catalogue of available shared packages, due to be released soon.

### Development standards
All technical members of a project team must familiarise themselves with [Hackney’s development standards](https://playbook.hackney.gov.uk/ways-of-working/), which follow the Twelve Factor Application methodology. Those define the high level principles to follow when developing a digital product.
Playbooks

#### What are they? 

At Hackney, we use playbooks to define the standards and approaches to use when building front end and back end services. The playbooks include specific information about the architecture, technology and practices that all services must follow in order to be compliant for any service development. They are intended for easy developer onboarding and provide all information required for reusable and consistent product development.

#### What do we use them for? 

We use playbooks to provide guidance of the standards and ways to implement to ensure we are building compliant products. The standards are in place in order to help us achieve our aim of delivering reusable, consistent, resilient, scalable and secure services. Ultimately, our goal is to provide our residents with better and uniform experience through more performant and reliable applications, increased speed of development and good future maintainability so we can support our digital services even when project team members move on.

#### Technical assessments: 

Hackney’s playbooks reflect the standards and quality of technical implementation that digital services should follow and will be assessed against to be accepted into service. We do understand that sometimes there are use cases, which will require a different approach and we are always open to suggestions for improvements. Any deviations or proposals for changes must be documented in the form of an Architecture Decision Record ( ADR ) and presented at a community of practice to promote collaboration and consistency.
API and Backend services Playbook
https://playbook.hackney.gov.uk/API-Playbook/ 

You can find information about:
- API and Listeners Boilerplate
- Development process
- Deployment pipeline
- IaC approach
- Testing process
- Preferred tech stack
- Data migrations
- Monitoring
- Events Driven Architecture
- Security practices for APIs

### Micro frontends (MFE) Playbook
https://playbook.hackney.gov.uk/micro-frontends/ 

You can find information about:
- MFE cli and boilerplate
- Development process
- Testing process
- Preferred tech stack
- Quickstart guide

### Communities of practice

#### Technical architecture

**When?** Every Wednesday, 16:00-17:00. 

**What is it?** A platform to discuss proposals for changes to technical and architectural approaches and tooling, as well as a place to suggest new technical implementations.

**How can I make use of it?** Please join the #hackit-technical-architecture slack channel and drop a message there with a topic you wish to discuss at the meetup. The meetup is open to everyone so feel free to forward the calendar invitation to anyone who might be interested.

**Paper template:** TBC

#### Data meetup

**When?** Every Tuesday, 15:30 - 16:30.

**What is it?** A platform for proposing changes to existing reusable API’s data models or suggesting the creation of new ones. The community of practice can also be used to discuss any other data related topic, such as data migration technical approaches and overall data architecture discussions.

**How can I make use of it?** Please join the #hackit-data-architecture slack channel and drop a message there with a topic you wish to discuss at the meetup. The meetup is open to everyone so feel free to forward the calendar invitation to anyone who might be interested.

**Paper template:** When preparing a paper to present at the data meetup, please use the following format found [here](https://docs.google.com/document/d/1aIf6K7_ipH7QPtzzBFfSRBhoV98vPVKL5CaKWpLBrs8/edit?usp=sharing).


#### Frontend meetup

**When?** Every Thursday, 15:00 - 16:00.

**What is it?** A platform to discuss frontend specific tooling and approaches, micro-frontend architecture and reusability and suggestions for changes. 

**How can I make use of it?** Please join the #frontend slack channel and drop a message there with a topic you wish to discuss at the meetup. The meetup is open to everyone so feel free to forward the calendar invitation to anyone who might be interested.

### Preferred technical stack
Our preferred technical stack for API and backend services (e.g. Listeners) implementation can be found [here](/preferred_tech_stack.md).

To achieve consistency and future maintainability, it’s important to build services following the preferred tech stack. If a use case requires a different approach, please discuss that with one of the Senior Engineers for awareness. 

To set up your developer workstation, please refer to the Workstation Setup Guide [here](https://docs.google.com/document/d/1PaID4hmDJPzW2onOaKytVL3qrTB_HyYW3_EWyRmWC48/edit?usp=sharing)

### Technical ways of working

#### Pull Request process
Hackney’s official pull request process to follow as part of the Software Development Lifecycle can be found [here](https://playbook.hackney.gov.uk/ways-of-working/).

### API specifications
All APIs must be built in a reusable manner, unless they implement a very specific use case. Any new proposed reusable APIs or changes to the data models of existing ones should follow the [API specification assessment process](https://playbook.hackney.gov.uk/api-specifications/assessment_process).


### API documentation
We use [SwaggerHub](https://app.swaggerhub.com/organizations/Hackney) to document our APIs and their respective data contracts. All new and existing APIs must have corresponding SwaggerHub documentation. It is the responsibility of the engineers who amend existing APIs to also update the documentation so it is kept up-to-date.
- If you or your team is building new APIs or making changes to existing API endpoints, please request SwaggerHub access so you can amend the specifications documented to ensure they are always up-to-date.

In addition, we also have [API specifications](https://playbook.hackney.gov.uk/api-specifications/), which capture a summary of the user needs and any other findings related to an API. 
- A new API specification must be produced for all new APIs. 
- The API specification document should link off to the SwaggerHub page that outlines the API contract.
- The API specification should be updated when the API introduces new endpoints or changes to existing functionality.

### Software development DevOps practices
Our DevOps practices followed as part of the Software Development Lifecycle are documented [here](/deployment_pipeline.md).

You will find information about:
- Branching strategies
- CI/CD pipeline flow
- IaC practices
- AWS resource provisioning
- Monitoring and alerting practices

### Deploying your service
#### Production deployment - infrastructure requirements for releasing software
[Production deployment - Live service infrastructure requirement](https://docs.google.com/document/d/1UrT6u4j8AlyPf-aD_E4c30uH27MJgIJoVxYR9kKGzFw/edit)

### APIs
To assess the API compliance prior to deploying it, please refer to [APIs compliance checklist](/docs/api_compliance.md).

### Asking a question
For any questions and suggestions regarding our tech stack, tools, processes and practices, please contact us via:

- Slack: #hackit-dev-team channel
- Lead Developers - via direct slack message or email
    - Mirela Georgieva (mirela.georgieva@hackney.gov.uk)
    - Selwyn Preston (selwyn.preston@hackney.gov.uk)
    - Tuomo Karki (tuomo.karki@hackney.gov.uk)
    - David Dean (david.dean@hackney.gov.uk)
    - Faisal Gazi (faisal.gazi@hackney.gov.uk)

