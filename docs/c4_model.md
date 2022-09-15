---
id: c4_model
title: C4 Model
---

import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>

#  API Playbook C4 Model

C4 Stands For:


        CONTEXT


                    CONTAINERS


            				         COMPONENTS


                                            CODE 

**The C4 model** was created to help software development teams describe and communicate software architecture, both during up-front design sessions and when retrospectively documenting an existing codebase. It's a way to create maps of your code, at various levels of detail, in the same way you would use something like Google Maps to zoom in and out of an area you are interested in.

A software system is made up of one or more containers , each of which contains one or more components which in turn is implemented by one or more code elements

## <span style="text-decoration:underline;">Context Diagram</span>

The Context diagram answers questions about users that will interface with the software system and  is using the software system? And how? It explains the context behind who is using the system and what tech it is made of.



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/c4-model-context.png "image_tooltip")


_                                            Fig 1: [API Playbook Context Diagram](https://c4model.com/#SystemContextDiagram)_

The Diagram in fig 1 is an overview of The HackIT Development Environment, which contains the HackIT Development System, API Playbook and HackIT API Team Youtube Channel. It shows the direction of communication between these systems. It also shows the users that are involved in the development of this environment such as the Internal Hackney Development Team and the External & Agency developers.


## <span style="text-decoration:underline;">Containers Diagram</span>

A Container is an application or data store, somewhere you run your application or store your data. The container diagram  showcases the applications and datastores involved in the system, the responsibilities they share and how they connect to each other at run time. It needs to be running in order for the whole system to operate. For instance, client-side web app, server-side web app, python script, database schema,dynamodb, Amazon S3 Bucket

<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/c4-model-container.png "image_tooltip")

_                                         Fig 2: [API Playbook Container Diagram](https://c4model.com/#ContainerDiagram)_

## <span style="text-decoration:underline;">Component Diagram</span>

A grouping of related functionality behind a well defined interface/container.  If you're using a language like Java or C# The simplest way to think of a component is that it is a collection of implementation classes behind an interface.

## <span style="text-decoration:underline;">Code</span>

Finally, can inspect each component and show how it is implemented as code

The Diagram provides a closer look at the key features of the software system as it pertains to infrastructure.


</TextToSpeech>
 
