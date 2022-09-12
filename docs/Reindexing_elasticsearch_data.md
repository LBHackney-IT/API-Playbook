---
id: reindexing_elasticsearch_data
title: Reindexing ElasticSearch data
---
import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>

### Introduction
There is a need to have a process ready to synchronise data between a dynamoDB table and its equivalent (usually subset of data) index in elasticSearch in case:
- ES cluster has been recreated as part of an improvement/maintenance task.
- The index has been recreated as part of a change to its definition.

The code is pushed to the [this repo:](https://github.com/LBHackney-IT/mtfh-dynamodb-elasticsearch-indexing)
It consists of 2 parts:
- A Lambda function that is triggered from the console to allow more flexibility, for example: can be triggered as part of a CI/CD pipeline. The code is in the folder: DynamoDBIndexing.
- An ECS task that is triggered by the above Lambda function and where the main code of extracting, mapping and loading data to elasticSearch’s index is happening. This code is in the folder: DynamoDBIndexingCore.
- This process is running in ECS as it may be a long running task, and takes more time than the hard limit of 15min that Lambda has.
- This process supports for the moment data synchronisation of: Persons, Tenures and Assets.
- This process has access to dynamoDB tables and ElasticSearch clusters that are part of the same account it is running from. For example, data from a dev dynamoDB table can’t be synced with a production index.
- This code is deployed by a CI/CD pipeline in circleCI.

**Note** that if a document has been deleted from dynamoDB, this process won’t delete it from ElasticSearch, it resyncs/updates data using the document ID (person ID, tenure ID, asset ID), therefore the document needs to be deleted manually.

### How to run this process
To run this process, follow these steps:
- Connect to the AWS console.
- Go to Lambda functions.
- Search and go to the function mtfh-dynamodb-elasticsearch-indexing-[ENV], and go to the tab Test.
- Keep the “New event” option, and add the expected event data in the console/code window.
The event data format is as follow:
```
{
  "dynamoTable": "DynamoDB table to sync",
  "indexNodeHost": "Link to the elasticSearch cluster",
  "indexName": "The name of the destination index. If the index doesn’t exist, it will be created automatically with the default options (normal behaviour for ES)."
}
```
- Click on the button “Test”

### Add a new entity to be synced

To add new entity to be synced, there are the steps that need to be added:
- Add the domain of the new entity in: ```DynamoDBIndexingCore/Domain```
- Add the entity factory to transform dynamoDB object into a class in: ```DynamoDBIndexingCore/Factories```
- Add the use case that combines the steps of reading data from dynamoDB, mapping it to a class and loading the doc into elasticSearch in: ```DynamoDBIndexingCore/UseCase```
- Update the Main function to handle the new entity (as there is a filter) in the: ```DynamoDBIndexingCore/Program.cs```
- Add the permissions to be able to scan dynamoDB in the terraform files:
[In dev](https://github.com/LBHackney-IT/mtfh-dynamodb-elasticsearch-indexing/blob/master/terraform/development-ecs-task/iam_role.tf#L20), 
[In staging](https://github.com/LBHackney-IT/mtfh-dynamodb-elasticsearch-indexing/blob/master/terraform/staging-ecs-task/iam_role.tf#L20), 
[In production](https://github.com/LBHackney-IT/mtfh-dynamodb-elasticsearch-indexing/blob/master/terraform/production-ecs-task/iam_role.tf#L20)



</TextToSpeech>