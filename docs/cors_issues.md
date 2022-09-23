---
id: cors_issues
title: CORs Issues
---

import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>

Sometimes there are CORs issues on the Microfrontends or APIs that prevents Hackney sites from loading (blank page shows instead). If this issue occurs then the following will need to take place for both APIs and Microfrontends.

## Update APIs:

Within the ```Startup.cs``` page of the APIs the following code will need to be added to the ```ConfigureServices()``` method:

```csharp
    services.AddCors();
```
If additional headers are required in the API then the folowing will need to be added to the ```Configure()``` method:
```csharp
        app.UseCors(builder => builder
                   .AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod()
                   .WithExposedHeaders("ETag", "If-Match", "x-correlation-id"));
```

Within the Serverless.yml the following  will need to be added to the events function:
``` yml
events:
      - http:
          path: /{proxy+}
          method: ANY
          authorizer:
            arn: ${ssm:/api-authenticator/${self:provider.stage}/arn}
            type: request
            resultTtlInSeconds: 0
            identitySource: method.request.header.Authorization
            managedExternally: true
          cors:
            origin: '*'
            headers:
              - Content-Type
              - If-Match
              - X-Amz-Date
              - Authorization
              - X-Api-Key
              - X-Amz-Security-Token
              - X-Amz-User-Agent
              - x-correlation-id
            allowCredentials: false
```

## Microfrontends:

To forward the headers using legacy cache settings, follow these steps:
1. Open your distribution from the CloudFront console.
2. Choose the Behaviors tab.
3. Choose Create Behavior. Or, select an existing behavior, and then choose Edit.
4. Under Cache key and origin requests, select Legacy cache settings.
5. In the Headers dropdown list, choose the headers required by your origin. If needed, choose Add custom to add headers required by your origin that are not in the dropdown list.
6. Choose Save Changes. If you are creating the behavior, choose Create Behavior.

</TextToSpeech>