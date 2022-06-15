# API Playbook

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.
You can view the API Playbook here: [https://www.playbook.hackney.gov.uk/API-Playbook](https://www.playbook.hackney.gov.uk/API-Playbook)

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Contributing
This repository follows **Trunk-Based Development**.

- To contribute, make Pull Requests to the `main` branch. You will be able to preview your changes once you make a PR on the development environment (todo: add link)
- Once your PR is approved and merged, your changes will be deployed to staging (todo: add link)
- To create a production release, create a `release` branch from the `main` branch (following the pattern `release/*`). Your changes will be deployed to [https://www.playbook.hackney.gov.uk/API-Playbook](https://www.playbook.hackney.gov.uk/API-Playbook).