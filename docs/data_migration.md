---
id: data_migration
title: Data Migration Playbook
---

## Data migration: How-to guide

Data migration using AWS DMS	                                           1

What is AWS DMS?	                                                       1

Which AWS DMS set up to use?	                                           2

For continuous migration	                                               2

CDC	                                                                     2

Use case	                                                               2

MS Replication                                                           2

Use cases	                                                               2

For one-off set up	                                                     2

Use cases	                                                               3

How to set DMS up	                                                       3

Database set up                                                          3

DMS with SQL CDC	                                                       3

DMS with MS Replication	                                                 3

AWS DMS set up via Terraform                                             3

DMS	                                                                     3

Postgres                                                                 4

Data migration using a data pipeline	                                   5

What is a data pipeline?                                                 5

Data pipeline - csv to Postgres	                                         5

Pipeline implementation	                                                 6

S3	                                                                     6

Lambda	                                                                 7

How to set up the data pipeline for a project	                           7

Notes	                                                                   8



## Data migration using AWS DMS

** What is AWS DMS? **
AWS Data Migration Service (DMS) is a service that allows us to migrate data between a source (in our case, on-premises database) and a target (in our case, Postgres database hosted in AWS).

** DMS supported replication types: **

<u> 1. Continuous replication (CDC) </u>

  a. When we want to do a one-off migration of all data and then continuously capture new inserts, updates and deletes and reflect them in our target database

<u> 2. One-off data migration </u>

  b. When the goal is to migrate all data from a source, and is expected that changes will not be captured and reflected


## Which AWS DMS set up to use?

**  <u> For continuous migration: </u> **

**  CDC **

  a. CDC is a SQL server feature, available only on Enterprise and Developer editions

  b. It allows for changes to be captured (inserts/updates/deletes)

**  Use case **

  1. When the source database does not have primary keys and you want to migrate data continuously.

**   MS Replication **

  c. MS Replication is a SQL server feature available on all editions

  d. It creates a “distribution” database and every time there is a change, it is captured and stored in the “distribution” database

  e. DMS will then read from that database to reflect the changes in the target database

**  f.NB! ** The sql user created must have ** sysadmin ** permissions to set up replication

  g. <u> Additional notes: </u> Configuration on the source database is required (please see below section). Additionally, SQL servers DO NOT come with MS replication
   features pre-installed, so the server might require a set up.

**  Use cases **

  1. When you want to migrate data continuously

  2. When the SQL server is not Enterprise/Developer edition

  3. When the source database has tables, which make use of primary keys

**  For one-off set up **

  -  No database configuration is required

  - The sql user must have at least db_owner permissions

  - The replication runs ones and migrates the data specified

  - There are no subsequent runs of the migration task, unless triggered with other means

**  Use cases **

  1. When only a one-off migration is required

  2. When the underlying source database is a reporting server and there are no possible ways to capture updates. In this scenario, we need to daily run a one-off migration, after the reporting server was updated with the latest data

## How to set DMS up

** Database set up  **

 DMS with SQL CDC

        https://docs.google.com/document/d/1EaZ-a8ejQwWQ40OGDGobxhTqtxXvtX9Ydk5mTFASUMo/edit

DMS with MS Replication

        https://docs.google.com/document/d/14kNirloRWXCnla08brXiTihCMIm24chygc1lGUjNVbE/edit?usp=sharing

AWS DMS set up via Terraform

Both DMS and Postgres can be created via Terraform.

** DMS **

Template repository and example usage:

        https://github.com/LBHackney-IT/aws-dms-terraform


![alt text](./doc-images/data_migration.png)


**  NB: **

  a. Follow the example usage, which also demonstrates how to add table mappings (specifying which tables are to be replicated)

  b. The source DB server should be specified with IP and not the server name

  c. DMS instance should be in the VPC, where the VPN is set up to ensure communication to on-prem is possible

  d. <u>  Make sure your DMS instance’s subnet group has only private subnets in it! </u>

**  Postgres **

  Template repository and example usage:
            https://github.com/LBHackney-IT/aws-hackney-common-terraform/tree/master/modules/database/postgres

![alt text](./doc-images/data2.png)

** NB: **
 - DMS does not support Postgres version 12, so use version 11 or older.
 - Always store passwords in parameter store and do not hardcode them
 - “Multi_az” should be true for production databases
 - “subnet_ids” requires subnets in 2 different AZs. Make sure those are private subnets to ensure that the database is secure.
- Currently not terraformed: To enable traffic from DMS to your Postgres instance, ensure you add to the ingress rules of the database’s security group all traffic   from DMS security group.

![alt text](./doc-images/data3.png)


##  Data migration using a data pipeline

  **    What is a data pipeline? **

      A data pipeline is an automated flow that gets data stored in one location (source) and uploads it to a target destination.

  **      Data pipeline - csv to Postgres **

      As of 26/06/2020, we have implemented one data pipeline.

      The pipeline takes data uploaded in an S3 bucket in .csv format and uploads the data into a Postgres database.

  ![alt text](./doc-images/data4.png)


## Pipeline implementation

  ** S3 **

  The source S3 bucket has been configured to invoke a Lambda function when a file has been uploaded with extension .csv

![alt text](./doc-images/data5.png)

The configuration for the source S3 bucket is done using the pipeline’s serverless implementation - <u> no manual set up is required for events </u> .

  ![alt text](./doc-images/data6.png)

  ** Lambda **

   The lambda function implements the following:
- Receives S3 notifications
- Retrieves bucket and file details from the notification
- Truncates the target table in the target database
- Makes use of AWS Postgres function that copies data from an csv file in S3 to Postgres to migrate the data
- Logs any exceptions and errors to Cloudwatch

 ** Note: The Postgres database and table to match the CSV format needs to be created separately. **

## How to set up the data pipeline for a project

 A template repository has been created for the data pipeline code implementation:

            https://github.com/LBHackney-IT/s3-to-postgres-data-pipeline

 1. Create a repository for your pipeline by using the above template
 2. Update the code by replacing the names of the existing pipeline to the name of your project’s pipeline
 3. Ensure you populate the specified environment variables in the README file of the repository
 4. Deploy using serverless - this will deploy the Lambda and it will set up an existing S3 bucket with the event it needs to listen for.

** Notes **

 1. You need to create the S3 bucket separately and provide the name in the serverless.yml file of the pipeline repository.
 2. You need to create the Postgres separately and create the table that will be the “target” with the same columns as the ones expected to be present in the .csv that will be uploaded to S3

**  Matt notes to be tidied up: **

 - Add the extension to the database: CREATE EXTENSION IF NOT EXISTS aws_s3 CASCADE;
 - RDS needs permissions to access the S3 bucket - GetObject and ListBucket.
 - Policy created and role added then added that role to the RDS instance….(Manually at the moment - how to automate?)

 
