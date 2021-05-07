---
id: centralised_logging
title: Centralised Logging
---

## Purpose
The purpose of this document is to outline some best practices around logging in applications.  It highlights what tools might be used for logging, a general structure of logs and what types of logs should be emitted.

## Introduction

This document outlines our approach to monitoring and alerting in our APIs and supporting infrastructure.  We already have the benefit of infrastructure level logging through the use of the AWS cloud infrastructure.  However, it is imporatant that our applications provide insight into what is happening as it processes each request.

## Logging Practices

### Application Level Logging

Application level logging is an integral part of the application development process.  It provides useful insight into what is happening under the hood when your application runs.  Now that our applications are becoming more cloud native it has become even more important to have useful information emitting from your application for monitoring and debugging purposes.  This document aims to highlight some logging standards and best practices for our applications.

### Leveraging Existing Tooling

There are a number of tools that exist that provide robust, battle tested logging mechanisms.  Some of these that we have used in the past include:

- NLog
- Log4net
- Asp.net core logging framework
- AWS Lambda Logger

While there is not a set standard for which tool to utilise, it is important that applications do emit logs so that any issues can be easily traced to its source.

### Developing a Custom Solution

It is also reasonable to define our own custom logging solution which could be shared across all projects, possibly by building a Nuget package module which can be added to our base API as well as referenced in any existing projects

## Log message structure

Logs must be emitted in JSON format and, in order to have a clear view and a consistent understanding of log entries, it is best to define a meaningful structure for your log entries:

```json
{
  "Log type": "Captain's Log",
  "Date": "3443.2",
  "Log Details": "We have reached the Veridian Mining Colony",
  "Correlation ID": "2a571fc5-3770-4aa6-aa5e-587b58d9a5fa"
}
```

With a consistent standard of logging.  Logs can be scrutinised by a person or be consumed by another tool to extend our insight capabilities.

### Log Properties
Possible properties for a log entry could include:

- Date
- Type of entry 
  * E.G. Information, Debug, Warning, Error, Critical
- Message details
- Debug information
- Component that created the entry
- Correlation Id
