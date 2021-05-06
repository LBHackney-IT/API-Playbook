(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return a?r.a.createElement(h,s(s({ref:t},l),{},{components:a})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},175:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/proxy_methods-6459c27c7238899e40009151050fe6e8.png"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(127)),o={id:"api_keys",title:"API Keys"},s={unversionedId:"api_keys",id:"api_keys",isDocsHomePage:!1,title:"API Keys",description:"Introduction",source:"@site/docs/api_keys.md",slug:"/api_keys",permalink:"/API-Playbook/api_keys",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/api_keys.md",version:"current",sidebar:"docs",previous:{title:"Request Tracing with AWS XRay",permalink:"/API-Playbook/x_ray"},next:{title:"Lambda Authoriser",permalink:"/API-Playbook/lambda_authoriser"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"What is an API key?",id:"what-is-an-api-key",children:[]},{value:"What is a stage?",id:"what-is-a-stage",children:[]},{value:"What is a usage plan and how to use it?\xdf",id:"what-is-a-usage-plan-and-how-to-use-it\xdf",children:[]},{value:"Enabling and Disabling API keys",id:"enabling-and-disabling-api-keys",children:[]},{value:"How are API keys added to our Lambda based APIs?",id:"how-are-api-keys-added-to-our-lambda-based-apis",children:[]}],l={toc:c};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Some of our APIs still use API keys to manage access to the APIs. This was our initial approach, but it has proven to be insufficient as it does not allow for granular access control and reporting, and it is associated with a big maintenance overhead."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html"},"AWS documentation on API keys and Usage plans")),Object(i.b)("h2",{id:"what-is-an-api-key"},"What is an API key?"),Object(i.b)("p",null,"An API key in this context is a solution provided by AWS for managing access when using AWS API Gateway. Each resource (endpoint) within an API can be set to require an API key to be supplied, when making a request."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:a(175).default})),Object(i.b)("p",null,"When this option is enabled, the API will return a status code of 401 Unauthorized if the consumer has not supplied the API key value within an \u2018x-api-key\u2019 HTTP header."),Object(i.b)("h2",{id:"what-is-a-stage"},"What is a stage?"),Object(i.b)("p",null,"Before API is deployed to the API gateway, it must have a stage. Depending on the account setup, API typically has either one or three stages. If an account is set up to use one API per environment (development, staging and production), then API will have only one stage. Sometimes we have just one API for all three environments, in which case we use three different stages."),Object(i.b)("p",null,"Stages are used to define the connection between the API and other AWS resources. Our stages will typically have three variables that define where the requests made for the API should go. These are: VPC link, load balancer URL and port. When the API is called, the stage name in the URL is used to direct the traffic to the specific stage in the API, which in turns then uses the stage configuration to direct the traffic to the correct AWS service."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Typical URL for an API looks like: ")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"https://{API _ID}.execute-api.{AWS_REGION}.amazonaws.com/development/api/")),Object(i.b)("p",null,"Development in the above URL indicates the stage that the client is trying to access."),Object(i.b)("h2",{id:"what-is-a-usage-plan-and-how-to-use-it\xdf"},"What is a usage plan and how to use it?\xdf"),Object(i.b)("p",null,"Once the API key has been created, it can be attached to a usage plan to control its usage. Rather controlling the access from an authentication point of view, usage plans control the amount and frequency of calls that can be made to API stages using the key."),Object(i.b)("p",null,"Usage plans can have multiple API keys attached to them, but we typically create a usage plan per API key and API stage. That way we have more granular control over the usage of individual API stages."),Object(i.b)("p",null,"Usage plans control the quota (requests per day/week/month), rate (requests per second) and burst (capacity of a token bucket) values for the given API stage."),Object(i.b)("p",null,"Throttling can be made more granular by enabling method throttling for a stage, which means that different HTTP methods for the API stage can have different limits."),Object(i.b)("h2",{id:"enabling-and-disabling-api-keys"},"Enabling and Disabling API keys"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1RVJ8f4T6-2m0QqJ9xO-f15FSP7AT4xv0ts8CZGvGR6Y/edit?usp=sharing"},"Guide describing how to enable and disable API key requirement")),Object(i.b)("h2",{id:"how-are-api-keys-added-to-our-lambda-based-apis"},"How are API keys added to our Lambda based APIs?"),Object(i.b)("p",null,"For any API, where we use Lambda as our hosting option, the configuration to use API keys is automated using Serverless. Each API generates its own unique key and associates it with the deployment stage."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiKeys:\n  - secureAccess:\n    - api-key-$(self:service)-${self:provider.stage}\nusagePlan:\n  - secureAccess:\n    throttle:\n      burstLimit: 200\n      rateLimit: 100\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/lbh-base-api/blob/59df843bf70d1ec20bbf7420f2e80c881e789dfc/BaseApi/serverless.yml#L8"},Object(i.b)("strong",{parentName:"a"},"Ref"))),Object(i.b)("p",null,"For APIs that use EC2/Fargate, we create and add API keys via Terraform."))}u.isMDXComponent=!0}}]);