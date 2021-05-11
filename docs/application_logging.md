---
id: application_logging
title: Application Logging Guidelines
---

## Introduction

This document defines a set of guidelines used to produce rich application logging for applications belonging to a microservice architecture.
Providing rich logging information will make it easier to investigate issues without making use of intrusive approaches (i.e: debug, memory dump), also making visible the behaviour of services by using monitoring tools to extract and/or query these logs.

## Categories

### Application

Logs related to the application behaviour that does not result into exceptions and would not be visible externally if not logged. Common scenarios are conditional behaviours that will generate different outputs based on the contents of the command or state of the resource being manipulated. Application logs should be the only log level required within the application and must be used with caution to avoid excessive log entries without value for issues investigation.

### Events

Events are application notifications used to inform external components that an activity has happened within the application. In some cases the event will let external subscribers know if an operation happened successfully or failed. Every operation will raise at least two types of events, success or failure, but in some cases, it might generate different events based on the context of the operation. All events raised by an application are logged by the infrastructure components, so adding a log information to notify an event has happened is not required and will make the logging redundant.

### Exceptions

Exceptions is an execution flow mechanism used to interrupt the current processing flow either because, the application or one of it’s dependent components behaved unexpectedly and can’t proceed, or an application logic is aware it can’t proceed because doing so will/may cause issues. All exceptions raised by an application or it’s dependencies are logged by the infrastructure components, so adding a log information to notify an exception has happened is not required and will make the logging redundant.

### Tracing and Context Correlation

Whether an application executes a task successfully or not is often highly dependent on the input from the user. As a result, this contextual information may be vital when trying to diagnose a fault.

This can be achieved by setting a property of your logging platform during the startup of a component.
This allows to view the unified stream of "events", but also to segregate per role when required to troubleshoot an individual component.
Every operation in an application is initiated by a trigger either externally or internally (synchronous processing). In general, these triggers do not have visibility of the behaviour for each service, and just expect a result as output from a request.
In many cases, these operations may trigger operations into dependent services to accomplish the initial operation. These chain of events need to be correlated in order to identify possible failures or for auditing purposes. For this reason, enter into scene the CorrelationId and TracingContext.

## Correlation Id

In order to identify any operation executed across different components and layers but that are part of the same context, there should be a correlationId sent from the client triggering the operation.
CorrelationId is a global unique identifier (GUID) attribute provided by callers (or auto-generated when one is not provided) to identify the chain of calls between services.
For instance, an HTTP client should send a correlationId header for every call. The downstream systems should pass along this correlationId to any downstream layer so that all traces/logs can be identified as part of the same operation.

### Tracing Context

Tracing Context is the name given to the correlated chain of calls that happened from an initial trigger until it reached the current state. By default the Tracing Context will be using the CorrelationId to identify all events raised since the first trigger initiate the operation.
Currently, the correlation identify the events in a chronological order and events happening in parallel on separate services will be mixed up.

** Additional Attributes to Consider (Custom Dimensions) **

| Attribute Name | Attribute Name | Attribute Name | Attribute Name |
| -------------- | -------------- | -------------- | -------------- |
| Domain * | Application Instance | tenure | Domain name which the service belongs to |
| Service * | Application Instance | tenure-listener / tenure-api | The service name generating the logs |
| Environment * | Application Instance | dev | Environment name |
| Version * | Application Instance | 1.2.345 | Semantic Version Number |
| CorrelationId * | Per Operation | 3fa85f64-5717-4562-b3fc-2c963f-66afa6 | Id used to chain events and logs executed by multiple operations |
| OperationId | Per Operation | 3fa85f64-5717-4562-b3fc-2c963f-66afa6 | Unique Id that identifies one occurrence of the operation i.e: Requestid |
| OperationName | Per Operation | Update Tenure | Name of operation being executed |
| UserId | Per Operation | KJS827HJS88S | Id of user triggering the operation |
| Logger(SourceContext) | Per Log Entry | Company.Solution.ClassName | Name of component or class generating the logs. |
| ResourceId | Per Log Entry | tenure-12345 | When an operation is being executred in the context of an existing resource (i.e. a repair) the logs should make the id of the order being modified available. |

** NOTE: **
Attributes marked with a * indicate _high importance_.

## Scopes

### Application Instance

Each deployed instance of an application will provide the same log attributes to all log entries generated. It does not change in the scope of the operations generating
the logs.

### Per Operation

When an operation is started (API request, message from a Queue), the attributes will be set and used throughout the chain of calls using the same attributes. It does not change based on the context within the application. In case the value does not come from external calls, should be generated internally.

### Per Log Entry
Each class or logger will have it’s own set of attributes used within it’s context to identify the source component that is generating the logs. i.e: The class name writing to the logs, the Resource Id being manipulated, or any data available only in the context of the logger.

## Filters and Masking

### Filters

- To reduce the high volume of log entries, the applications should add the following log filters:
- Filter out healthcheck logs (keep errors)
- Limit the log level to
- Non production environments = Information
- Production environments = Warning
- Don't let ASP.NET Core Console Logging Slow your App down
- Logging in .NET Core and ASP.NET Core

### Masking

Prevent log entries containing Personal Identifiable Information (PII) by removing the attributes, or, masking part of the value.
