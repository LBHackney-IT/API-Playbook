---
id: infrastructure
title: Infrastucture as Code
---

## What is Infrastucture as Code (IaC)?

Infrastructure as code is the approach used within HackIT to manage and provision cloud resources with the use of scripted configuration files. It allows for easy maintenance and creation of the different cloud resources for large scale systems in a collaborative manner.


When using infrastructure-as-code approach, any resources created have their state recorded within state files. Those files will be used by the tool used to manage the infrastructure as a comparison point whenever new resources are added or existing ones are amended.


IaC is important as it allows for cloud infrastructure to be provisioned in a quick manner and it provides a code reference for the resources created and the configuration used to do so.


For example, if a resource is accidentally terminated, the IaC can be used to re-provision that machine in exactly the configuration as before. Whereas, with manual provisioning, a developer would need to remember (or consult an external source for) the configuration of the resource, and then take the time to manually reconfigure that within the environment.

## Introduction to Terraform

We use Terraform as our infrastructure-as-code tool - it is provider agnostic and makes use of HashiCorp Configuration Language (HCL).

For more details, please read our [HackIT Terraform Guide](https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit?usp=sharing), containing all details of what Terraform is, how to use it, how we use Terraform and how to use our Terraform templates, including deployment steps:

### Video Tutorial
** Watch our introduction video for more insight into the basics of Terraform: **

<figure class="video-container">
<iframe width="100" src="https://www.youtube.com/embed/sGbjWgSTpnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

### What is a Terraform state file?

A Terraform state file stores the state of the infrastructure at the point of you applying it - this is the way Terraform knows what resources were created (via the given Terraform configuration). When an update to a resource has happened, Terraform will detect the difference between the state and the update and will change the resource (if you perform the “apply” action).


If a new AWS resource is created not via your Terraform file, the state will not be aware of it. This means that resources created via separate Terraform files are independent of each other. If you destroy infrastructure via Terraform, it will not affect any of the other AWS resources not created by your Terraform file and state.

## HackIT Terraform templates

We have three repositories with terraform templates. We use those for all the AWS resources we have identified are required by more than one service. These templates allow developers to simply provide configuration values for their particular instances, based on existing templates.

### Common layer infrastructure

The ‘common layer’ is the infrastructure required to be set up for each account as “base” infrastructure, including networking, load balancers, database (Postgres, DocumentDB)  and ECS clusters.

#### Resources

- [GitHub repository](https://github.com/LBHackney-IT/aws-hackney-common-terraform)
- [Detailed guide on how to use it, including screenshots and step-by-step instructions](https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit#heading=h.553ntygln9sl)


### Components per service layer infrastructure

The components per service layer is all cloud resources that need to be created for any new Fargate/EC2 hosted API/app that is to be deployed.

For example, the template will create an ECS service, ECR repo, load balancer listener, security group and target group from developer supplied input values.. Those resources will be solely used for the API/app that to be deployed. They are independent of other APIs/apps and if they are destroyed or modified, they will not affect resources of any other API/app running.

#### Resources

- [GitHub repository](https://github.com/LBHackney-IT/aws-hackney-components-per-service-terraform)
- [Detailed guide on how to use it, including screenshots and step-by-step instructions](https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit#heading=h.bbczall7icfy)


### DMS Terraform  

DMS is used by many of the platform APIs that require a data migration task and instance to be set up so data can be migrated from on-premise to our cloud environment.

The template includes set up for both:

DMS task, when there is an existing DMS instance

DMS task and instance provisioning (full set up)

#### Resources

- [How to use notes, including example usage file](https://github.com/LBHackney-IT/aws-dms-terraform)

##   Lambda APIs deployment

** <u> More on Lambda APIs </u> **


For any APIs that we have chosen Lambda as a serverless deployment option, we use Serverless as a way to provision the necessary resources:

- Lambda functions

- CloudWatch logs

- IAM roles

- API Gateway, including usage plan and keys


## Deployment per environment for APIs/apps

Each API/app is to maintain its own infrastructure. This is achieved by adding the Terraform files to the respective API/app repository.

To support deployment per environment in multiple AWS accounts, the following folder structure has been introduced:

```shell
API/app repo
.
├── ..
└── terraform
    ├── development
    │   └── main.tf
    ├── production
    │   └── main.tf
    └── staging
        └── main.tf
```

In this way, we have individual Terraform files for each AWS account (environment) we are deploying, ensuring that separate states and configurations are maintained.


## Deployment using CircleCI

The existing CircleCI pipeline has been set to generate AWS credentials per environment (account) based on the pipeline workflow step. For each account we deploy to, the pipeline is configured to look at the respective folder path
(e.g. `terraform/development/main.tf`).

Each time a deployment occurs, terraform initializes the modules specified within the given main.tf and runs `apply`.


Note: `terraform apply -auto-approve` is a command used to force apply (without being presented a confirmation question), which is required to achieve automation.

[More details](https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit#heading=h.1q32ztqxg199)

## How to apply Terraform manually

In some cases, we don’t have a pipeline set up to automatically apply the Terraform configuration for us.
In this case, we need to run “apply” manually.

For example, our individual AWS account network set up is currently applied manually with no pipeline. In comparison, all Terraform resources maintained by the individual APIs/apps are applied using a CI/CD pipeline.


[More information and guide](https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit#heading=h.pdxhd5fuwdpm)


##  How to find what has been applied in our AWS accounts (non API specific Terraform)

The networking set up and other shared resources have been created via our [‘common Terraform’ template repository](https://github.com/LBHackney-IT/aws-hackney-common-terraform/tree/master/applied_terraform). Every time someone makes a change a new PR needs to be created against this repository.

This ensures that although there is a state file, developers will be able to see the configuration files of what has been applied and make changes to it, while being aware of what has previously been provisioned.
