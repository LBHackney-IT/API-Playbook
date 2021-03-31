(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return p}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(a),b=n,p=h["".concat(i,".").concat(b)]||h[b]||d[b]||r;return a?o.a.createElement(p,s(s({ref:t},c),{},{components:a})):o.a.createElement(p,s({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},121:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/proxy_methods-6459c27c7238899e40009151050fe6e8.png"},122:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/api_keys-98c681ebdfb58ad722c7a84c45236c1d.png"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),r=(a(0),a(111)),i={id:"generating_tokens",title:"Generating Tokens"},s={unversionedId:"generating_tokens",id:"generating_tokens",isDocsHomePage:!1,title:"Generating Tokens",description:"Securing our APIs",source:"@site/docs/generating_tokens.md",slug:"/generating_tokens",permalink:"/API-Playbook/generating_tokens",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/generating_tokens.md",version:"current",sidebar:"docs",previous:{title:"API Keys",permalink:"/API-Playbook/api_keys"},next:{title:"Preferred Tech Stack",permalink:"/API-Playbook/preferred_tech_stack"}},l=[{value:"Securing our APIs",id:"securing-our-apis",children:[]},{value:"Securing our APIs",id:"securing-our-apis-1",children:[]},{value:"Custom implementation of a Lambda authorizer",id:"custom-implementation-of-a-lambda-authorizer",children:[]},{value:"When is a token valid",id:"when-is-a-token-valid",children:[]},{value:"When to use?",id:"when-to-use",children:[]},{value:"Google Groups based authorization",id:"google-groups-based-authorization",children:[]},{value:"API keys to secure our APIs",id:"api-keys-to-secure-our-apis",children:[]},{value:"\xa0What is an API key?",id:"what-is-an-api-key",children:[]},{value:"What is a stage?",id:"what-is-a-stage",children:[]},{value:"What is a usage plan and how to use it?",id:"what-is-a-usage-plan-and-how-to-use-it",children:[]},{value:"Guide for enabling and disabling API keys",id:"guide-for-enabling-and-disabling-api-keys",children:[]}],c={toc:l};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"securing-our-apis"},"Securing our APIs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," What to cover: ")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"What to use to secure our APIs (explain new solution and that it should be used going forward + some APIs still use old solution)"),Object(r.b)("li",{parentName:"ol"},"Exbisting approach to securing our APIs\na) API keys - what are those and how to use\nb) Specify that when you select the option to use an API key, the API within the API Gateway needs to be deployed for the changes to apply\nc) What is a usage plan and how to use it\nd) What is a stage and how to use it\ne) Reference to serverless.yml and how by default an API key is added to each new API\nf) Link to step-by-step guide of how to apply/modify"),Object(r.b)("li",{parentName:"ol"},"New approach - Lambda authorizer\na) What is a Lambda authorizer (include AWS diagram), what is Hackney\u2019s solution and how to use it\nb) Link to authorizer repo\nc) Flow chart to explain flow of authorizer (Hackney\u2019s implementation for an authorizer)\nd) When to use it\ne) Link to step-by-step guide of how to apply for new APIs\n4) Google auth (TK)\na) What is it and how to use\nb) Which projects use it\nc) When to use\nd) Sample implementations?")),Object(r.b)("h2",{id:"securing-our-apis-1"},"Securing our APIs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"   What do we use to secure our APIs ")),Object(r.b)("p",null,"  We have now changed our approach to using a Lambda authorizer function to secure our APIs."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," What is a Lambda authorizer? ")),Object(r.b)("p",null,"  AWS documentation:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"      https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html\n")),Object(r.b)("h2",{id:"custom-implementation-of-a-lambda-authorizer"},"Custom implementation of a Lambda authorizer"),Object(r.b)("p",null,"For a Lambda authorizer, we use a  custom Lambda function that has been developed in-house. Repository:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"          https://github.com/LBHackney-IT/api-auth-token-generator\n")),Object(r.b)("p",null,"It allows for granular access control per API endpoint per environment. To gain access to a given API endpoint, the consuming service will need to supply an authorization token as part of the request, passed in the HTTP header \u201cAuthorisation\u201d."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," In the first iteration of this solution, the following applies: ")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tokens are issued per service"),Object(r.b)("li",{parentName:"ul"},"Tokens do not expire")),Object(r.b)("p",null,"Each time a consumer makes an API request and supplies the JWT auth token, our custom Lambda function takes the token, validates and decrypts it, retrieves data about the token from the database and compares the data from the database to the API request information."),Object(r.b)("h2",{id:"when-is-a-token-valid"},"When is a token valid"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"If the \u201cEnabled\u201d flag is set to true"),Object(r.b)("li",{parentName:"ol"},"This means that the token has not been revoked"),Object(r.b)("li",{parentName:"ol"},"If a token has an expiry date, it should not be a past date"),Object(r.b)("li",{parentName:"ol"},"The environment recorded in the database should match the one from the request"),Object(r.b)("li",{parentName:"ol"},"The API name should match the one from the request"),Object(r.b)("li",{parentName:"ol"},"he HTTP method (GET/POST/etc) should match the one from the request")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," NB: The Lambda authorizer approach described above is a new solution and not all APIs have been updated to use it. ")),Object(r.b)("p",null,"Lambda authorizer documentation:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"        https://docs.google.com/document/d/1mpTY-sfYwR2brIF_8KjxiYzW6zgkjbv4Pi-9Y5LRlBA/edit#\n")),Object(r.b)("h2",{id:"when-to-use"},"When to use?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"HackIT\u2019s custom Lambda authorizer should be used for all new APIs that are to be created. It has been created in a generic way, making it possible to be used across multiple APIs.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The only configuration required would be to insert the lookup values into the lookup tables (API name, API endpoint).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The above is to be automated as part of our API Hub upcoming work."))),Object(r.b)("h2",{id:"google-groups-based-authorization"},"Google Groups based authorization"),Object(r.b)("p",null,"In addition to the custom build lambda authorizer mentioned above, we have also implemented Google groups based authorization in some of our projects.\nWhen developing APIs for internal use, the most convenient way to authenticate users is to use Google SSO. Once the user/client has been authenticated, authorization can be handled at the API level to ensure the user/client has access to the requested resource.\nSample implementation with serverless and .NET Core can be found here:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"          https://github.com/LBHackney-IT/comino-printing\n")),Object(r.b)("p",null,"In the above solution, each Lambda function that is deployed to API gateway has the authorizer set to the custom API authorizer."),Object(r.b)("p",null,"Each time a request is made to one of the end points in question, the authorizer will take the provided JWT token and check what Google Groups the client is in. If the client is authenticated and is in one of the allowed groups, the request is authorized. Otherwise access is denied. In both cases the standard AWS IAM policy statement is returned indicating whether the request was authorized or not, and then depending on the result either the requested Lambda resource is called or the client gets an unauthorized response."),Object(r.b)("p",null,"Implementing authorization this way requires a bit more development work, but completely takes a way the necessity to manage API keys in the infrastructure. This also gives the business the power to manage their own resources and determine who has access to them."),Object(r.b)("h2",{id:"api-keys-to-secure-our-apis"},"API keys to secure our APIs"),Object(r.b)("p",null,"Some of our APIs still use API keys to manage access to the APIs. This was our initial approach, but it has proven to be insufficient as it does not allow for granular access control and reporting, and it is associated with a big maintenance overhead."),Object(r.b)("p",null,"AWS documentation on API keys and Usage plans:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\n")),Object(r.b)("h2",{id:"what-is-an-api-key"},"\xa0What is an API key?"),Object(r.b)("p",null,"An API key in this context is a solution provided by AWS for managing access when using AWS API Gateway. Each resource (endpoint) within an API can be set to require an API key to be supplied, when making a request."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt text",src:a(121).default})),Object(r.b)("p",null,"When this option is enabled, the API will return a status code of 401 Unauthorized if the consumer has not supplied the API key value within an \u2018x-api-key\u2019 HTTP header."),Object(r.b)("h2",{id:"what-is-a-stage"},"What is a stage?"),Object(r.b)("p",null,"Before API is deployed to the API gateway, it must have a stage. Depending on the account setup, API typically has either one or three stages. If an account is set up to use one API per environment (development, staging and production), then API will have only one stage. Sometimes we have just one API for all three environments, in which case we use three different stages."),Object(r.b)("p",null,"Stages are used to define the connection between the API and other AWS resources. Our stages will typically have three variables that define where the requests made for the API should go. These are: VPC link, load balancer URL and port. When the API is called, the stage name in the URL is used to direct the traffic to the specific stage in the API, which in turns then uses the stage configuration to direct the traffic to the correct AWS service."),Object(r.b)("p",null,"Typical URL for an API looks like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    https://{API _ID}.execute-api.{AWS_REGION}.amazonaws.com/development/api/\n")),Object(r.b)("p",null,"Development in the above URL indicates the stage that the client is trying to access."),Object(r.b)("h2",{id:"what-is-a-usage-plan-and-how-to-use-it"},"What is a usage plan and how to use it?"),Object(r.b)("p",null,"Once the API key has been created, it can be attached to a usage plan to control its usage. Rather controlling the access from an authentication point of view, usage plans control the amount and frequency of calls that can be made to API stages using the key."),Object(r.b)("p",null,"Usage plans can have multiple API keys attached to them, but we typically create a usage plan per API key and API stage. That way we have more granular control over the usage of individual API stages."),Object(r.b)("p",null,"Usage plans control the quota (requests per day/week/month), rate (requests per second) and burst (capacity of a token bucket) values for the given API stage."),Object(r.b)("p",null,"Throttling can be made more granular by enabling method throttling for a stage, which means that different HTTP methods for the API stage can have different limits."),Object(r.b)("h2",{id:"guide-for-enabling-and-disabling-api-keys"},"Guide for enabling and disabling API keys"),Object(r.b)("p",null,"Guide describing how to enable and disable API key requirement:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"            https://docs.google.com/document/d/1RVJ8f4T6-2m0QqJ9xO-f15FSP7AT4xv0ts8CZGvGR6Y/edit?usp=sharing\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," How are API keys added to our Lambda based APIs? ")),Object(r.b)("p",null,"For any API, where we use Lambda as our hosting option, the configuration to use API keys is automated using Serverless. Each API generates its own unique key and associates it with the deployment stage."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt text",src:a(122).default})),Object(r.b)("p",null,"Ref:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"          https://github.com/LBHackney-IT/lbh-base-api/blob/59df843bf70d1ec20bbf7420f2e80c881e789dfc/BaseApi/serverless.yml#L8\n")),Object(r.b)("p",null,"For APIs that use EC2/Fargate, we create and add API keys via Terraform."))}u.isMDXComponent=!0}}]);