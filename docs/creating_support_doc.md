---
id: creating_support_doc
title: Documenting an issue and its solution
---

### Context
At Hackney, we have worked hard to introduce consistency and reusability across our product development.

As part of that, we often face issues and outages that could occur for any other project team. 

The purpose of this document is to outline a process to create detailed documentation as part of a ‘Support’ knowledge base that outlines what issue has been faced and what were the resolutions steps should any other engineer face a similar issue.

### Creating support documentation
To create support documentation that is easy to find and becomes quickly available, please use GitHub and create a pull request with the information directly into the API playbook.

- Create a new branch in the API playbook GitHub repository.
- Create a new file in the ‘docs’ folder of the repository.
- Copy the template into the new file and fill in the information for each section described.
    - The template can be found [here](https://github.com/LBHackney-IT/API-Playbook/blob/main/docs/support-issue-template.md).
- Add the following to the top of the document to make it discoverable by the sidebar module
```
    ---
    id: some_unique_id
    title: the title to be displayed in the sidebar
    ---
```
- Update the sidebar so the new support documentation can be made available via the API playbook UI. 
    - The sidebar file to be updated can be found here.
    - The item to be included should match the id you have given to the support document created.
- Create a pull request with your changes. 

Once the changes are approved and merged, the support documentation will be available at https://playbook.hackney.gov.uk/API-Playbook/. 