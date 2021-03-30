---
id: centralised_logging
title: Centralised Logging and Monitoring
---
** <u> Proposal for Monitoring and Alerting </u> **

** Introduction **

This document outlines a proposal for how we might want to approach monitoring and alerting in our APIs and supporting infrastructure.

** Application Level Logging **

Application level logging is an integral part of the application development process.  It provides useful insight into what is happening under the hood when your application runs.  Now that our applications are becoming more cloud native it is becoming more and more important to have useful information coming out of your application for monitoring and debugging purposes.  This document aims to propose some logging standards and best practices for our application.

** Current practice **

Currently in our APIs there is no set standard on what or how we log or even if we should log.  As a result many of our applications do not provide suitable logging information making it difficult at times to debug any issues.  At the bare minimum the framework used in our APIs provide framework specific logging including exceptions.  There have been some applications that provide excellent logging giving a developer or support person valuable insight into what is happening in the application.  In order to become more proactive in identifying issues and possible causes, we need to standardise and improve our logging consistently across all of our applications and services.

** Leveraging Existing Tooling **

There are a number of tools that exist that provide robust, battle tested logging mechanisms.  Some of these that we have used in the past include:
1. NLog

2. Log4net

3. Asp.net core logging framework


** Developing a Custom Solution **

It is also reasonable to define our own custom logging solution which could be shared across all projects, possibly by building a Nuget package module which can be added to our base API as well as referenced in any existing projects


** Log message structure **

In order to have a clear view and a consistent understanding of log entries it is best to define a meaningful structure for your log entries:

      {
          “Log type”: “Captain’s log”

          “Date”: “3443.2”

          “Log Details”: “We have reached the Veridian mining colony.”

          “Correlation Id”:
        }

With a consistent standard of logging.  Logs can be scrutinised by a person or be consumed by another tool to extend our insight capabilities.

 Possible properties for a log entry could include:

Date and type of entry

** Type of entry such as: **

1. Information
2. Debug
3. Warning
4. Error
5. Critical
6. Message detail
7. Debug information
8. Component that created the entry
