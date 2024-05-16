---
id: security
title: Security
---

import TextToSpeech from '../../../src/SpeechComponent.js';

<TextToSpeech>

## MUST Only expose APIs via SSL:

Any API service must be encrypted using the current best practice for SSL connectivity. Plain HTTP connections should not be redirected to HTTPS, rather they should return an error code (normally a 403 Forbidden error).
## SHOULD Use a standard authentication mechanism:

Access to an API should be controlled using a standard authentication mechanism such as OAuth/OpenID Connect.
## MUST Not expose Stack Traces:

Stack traces contain implementation details that are not part of an API, and on which clients should never rely. Moreover, stack traces can leak sensitive information that partners and third parties are not allowed to receive and may disclose insights about vulnerabilities to attackers.

</TextToSpeech>