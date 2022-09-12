---
id: loading_reference_data
title: Loading Reference Data
---
import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>

### Introduction
Within Modern tools for housing we have a reference data API that stores data to Elastic Search. The data is synced from the google sheet to Elasticsearch. 

### How to update the data:

**Note that a new temporary index will be created with the new reference data and will replace the existent one. Therefore, if you remove a value from the spreadsheet or a tab from the list of tabs in the variable “__REFERENCE_DATA_SOURCE” in the code and run the script, this will result in that data to disappear from reference data.**

In order to update the data that we have within the database you would simply update the [following spreadsheet](https://docs.google.com/spreadsheets/d/1De8BdvD7xR1Xx707c6LekLxNyueMu-paaZ91EatnEgs/edit?usp=sharing) and then follow these steps:
- Install python (3.8)
- Clone the [following repo](https://github.com/LBHackney-IT/lbh-mtfh-dummy-data-gen)in your local machine
- Navigate to the repo’s folder “lbh-mtfh-dummy-data-gen”
- Copy the google’s secret file, that allows to query google docs’ APIs, into the root folder (“lbh-mtfh-dummy-data-gen”) (follow this guide)
-This file is created from GCP console
- The user of the following file needs a read access to the data lists spreadsheets
If a new project has been created add the service account email to the spreadsheet with edit access:

- Install requirements:
  ``` pip install -r requirements.txt ```

- Run the following command:  
``` python reference_data.py```
- Open a tunnel connection the aws account’s private network using the jumpbox:
    - Set the correct permissions for the pem file: ```chmod 600 dev_jump.pem```
    - Copy/Paste your AWS credentials environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN) for the account from: https://d-936715b9ec.awsapps.com/start#/
    - Run the following command on you command line ```aws ssm start-session --target i-[instance id]  --document-name AWS-StartPortForwardingSession --parameters "localPortNumber=2222,portNumber=22"```
    - Pem key can be found in Housing-Development parameter store *platform-apis-jump-box-pem-key* save it locally 
    - In a new terminal, open tunnel with elasticsearch: ```ssh -i dev_jump.pem -p 2222 ec2-user@127.0.0.1  -N -L 9200:[ES Cluster domain URL]:443```
    - Run the python script:
    ```python reference_data.py```

### Adding new data list to the reference data

**NB**: If new values need to be added to an existing list, check that the range still covers the whole list of values.

To add a new reference list to ElasticSearch/reference-data service, follow these steps:
- Add a new tab to the [spreadsheet](https://docs.google.com/spreadsheets/d/1De8BdvD7xR1Xx707c6LekLxNyueMu-paaZ91EatnEgs)
- Add your values while following the same structure as the other tabs:
- In the script code “reference_data.py”, add your list to the list/variable “__REFERENCE_DATA_SOURCE” with the range that covers your values (something like: TAB_NAME!A1:G10)
- Run the steps from above for dev, staging and production.


</TextToSpeech>

