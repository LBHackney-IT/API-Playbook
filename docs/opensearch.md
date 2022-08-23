---
id: open_search
title: Open Search
---

import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>

## Basic Principles

**What is ElasticSearch?**

ElasticSearch is a NoSQL distributed database that enables developers to upload, retrieve and manage data such as strings and documents.

Elasticsearch can be used to search any kind of document. It provides scalable search, has near real-time search, and supports multi tenancy.[4] "Elasticsearch is distributed, which means that indices can be divided into shards and each shard can have zero or more replicas. Each node hosts one or more shards and acts as a coordinator to delegate operations to the correct shard(s). Rebalancing and routing are done automatically".

Elasticsearch is a search engine based on the Lucene library. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents.

**Why we use ElasticSearch at Hackney**

Housing-Search-API UseCase: 
The Housing Search Api is an responsible for searching for persons, tenures and assets. ElasticSearch is used in the housing search api as a search engine to provide seamless search functionality for people and property data assets. The API benefits from the flexible data model elasticsearch uses to improve searching efficiency which corroborates with the purpose we envisioned for the api for it to be a reliable and efficient search service, that allows for free-text and fuzzy search for people and properties. It was imperative we avoided creating a microservice that does not impact user experience with poor performance related to searching data from multiple data domains.

**Benefits**
    * **Quick**, **Easy** and **Direct** access: Documents are stored in close proximity to the corresponding metadata in the index. This reduces the number of data reads and as a result increases the search result response.
    * **yarn  big quantity of data:** elastic search is designed to quickly fetch required search query data from the database.
    * **Easy Filtering.**
    * **Advanced searches.**
    * **Better performance for read queries.**
    * **Drives distributed architecture.**
    * **Schema Free.**
    * **High Scalable.**
</TextToSpeech>