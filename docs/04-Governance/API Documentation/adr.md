---
id: adr
title: Architecture Decision Records
---
### Context

Previously technical decisions were captured as part of spike documentation that was kept in project specific google drive. They were not open for other projects to review, adopt and adapt. Often, new developers were not aware of decisions as they were not aware of where to look for documentation. 

Hence, we agreed to create Architecture Decision Records (ADRs) and add them to a single github repo [https://github.com/LBHackney-IT/lbh-adrs] to ensure that we have enough documentation, that all decisions are kept in the same location that is easy to find and to document how and why a decision was reached within a codebase. 

This will also achieve governance and uniformity around all projects. Also ADRs help to give context around the decisions that were taken so that we can revisit them. Other benefits that we have identified when using ADRs are:
- Improves onboarding for new developers
- Improves agility when handing over project ownership between external team to internal or vice versa
- Improves alignment across the teams regarding best practices

### What is an Architectural Decision Record?

An architecture decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences of adopting the decision.

### When to write an ADR?
An ADR should be written whenever a decision of significant impact is made; it is up to each project team to align on what defines a significant impact. They can be:

- Backfilling a decision which was made previously.
- Proposing large changes to a solution/spike.
- Proposing no/small changes for a spike
- Proposing changes that differ from the overall agreed standard across our current ecosystem.

### How to start using ADRs

*Decision identification:*
- How urgent and how important is Architecture Decision?
- Design methods and practices can assist with decision identification and decision making.
- Ideally maintain a decision to-do list which aligns with the service to-do list.

*Decision making:*
-Group decision making via Community of practices or project team workshops to validate the findings can help in decision making.
- Better informed decision via ADRs which are available openly and people can collaborate on it.

*Decision enactment and enforcement:*
- ADRs are used in software design; hence they have to be communicated to, and accepted by, various stakeholders of the services that fund, develop, consume and operate it.
- Architecturally evident coding styles and code reviews that focus on architectural concerns and decisions are two related practices.
- ADRs also have to be (re-)considered when modernizing a software system in software evolution.

*Decision sharing (optional):*
- Many ADRs recurring across various project development..
- Experiences from other projects and reusable components could enforce knowledge management strategy and contribute towards our emerging Community of practices meetups such as Data and Architecture etc.
- Dependency matrix evaluation.


