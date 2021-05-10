(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return c}));var n=a(3),o=a(7),r=(a(0),a(131)),i={id:"lambda_authoriser",title:"Lambda Authoriser"},s={unversionedId:"lambda_authoriser",id:"lambda_authoriser",isDocsHomePage:!1,title:"Lambda Authoriser",description:"What is a Lambda authorizer?",source:"@site/docs/lambda_authoriser.md",slug:"/lambda_authoriser",permalink:"/API-Playbook/lambda_authoriser",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/lambda_authoriser.md",version:"current",sidebar:"docs",previous:{title:"API Keys",permalink:"/API-Playbook/api_keys"},next:{title:"Debugging APIs in Production",permalink:"/API-Playbook/debugging_apis"}},u=[{value:"What is a Lambda authorizer?",id:"what-is-a-lambda-authorizer",children:[]},{value:"Custom implementation of a Lambda authorizer",id:"custom-implementation-of-a-lambda-authorizer",children:[]},{value:"When is a token valid",id:"when-is-a-token-valid",children:[]},{value:"When to use?",id:"when-to-use",children:[]},{value:"Google Groups based authorization:",id:"google-groups-based-authorization",children:[]}],l={toc:u};function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-a-lambda-authorizer"},"What is a Lambda authorizer?"),Object(r.b)("p",null,"Read more in the ",Object(r.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html"},"AWS documentation"),"!"),Object(r.b)("h2",{id:"custom-implementation-of-a-lambda-authorizer"},"Custom implementation of a Lambda authorizer"),Object(r.b)("p",null,"For a Lambda authorizer, we use a custom Lambda function that has been developed in-house."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/api-auth-token-generator"},Object(r.b)("strong",{parentName:"a"},"GitHub Repository"))),Object(r.b)("p",null,"It allows for granular access control per API endpoint per environment. To gain access to a given API endpoint, the consuming service will need to supply an authorization token as part of the request, passed in the HTTP header \u201cAuthorisation\u201d."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," In the first iteration of this solution, the following applies: ")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tokens are issued per service"),Object(r.b)("li",{parentName:"ul"},"Tokens do not expire")),Object(r.b)("p",null,"Each time a consumer makes an API request and supplies the JWT auth token, our custom Lambda function takes the token, validates and decrypts it, retrieves data about the token from the database and compares the data from the database to the API request information."),Object(r.b)("h2",{id:"when-is-a-token-valid"},"When is a token valid"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the ",Object(r.b)("inlineCode",{parentName:"li"},"Enabled")," flag is set to true",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This means that the token has not been revoked"))),Object(r.b)("li",{parentName:"ul"},"If a token has an expiry date, it should not be a past date"),Object(r.b)("li",{parentName:"ul"},"The environment recorded in the database should match the one from the request"),Object(r.b)("li",{parentName:"ul"},"The API name should match the one from the request"),Object(r.b)("li",{parentName:"ul"},"The HTTP method (GET, POST, etc.) should match the one from the request")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," NB: The Lambda authorizer approach described above is a new solution and not all APIs have been updated to use it. ")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1mpTY-sfYwR2brIF_8KjxiYzW6zgkjbv4Pi-9Y5LRlBA/edit#"},Object(r.b)("strong",{parentName:"a"},"Lambda Authorizer Documentation"))),Object(r.b)("h2",{id:"when-to-use"},"When to use?"),Object(r.b)("p",null,"HackIT\u2019s custom Lambda authorizer should be used for all new APIs that are to be created. It has been created in a generic way, making it possible to be used across multiple APIs."),Object(r.b)("p",null,"The only configuration required would be to insert the lookup values into the lookup tables (API name, API endpoint)."),Object(r.b)("p",null,"The above is to be automated as part of our API Hub upcoming work."),Object(r.b)("h2",{id:"google-groups-based-authorization"},"Google Groups based authorization:"),Object(r.b)("p",null,"In addition to the custom build lambda authorizer mentioned above, we have also implemented Google groups based authorization in some of our projects.\nWhen developing APIs for internal use, the most convenient way to authenticate users is to use Google SSO. Once the user/client has been authenticated, authorization can be handled at the API level to ensure the user/client has access to the requested resource."),Object(r.b)("p",null,"Sample implementation with serverless and .NET Core can be found ",Object(r.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/comino-printing"},"here"),"."),Object(r.b)("p",null,"In the above solution, each Lambda function that is deployed to API gateway has the authorizer set to the custom API authorizer."),Object(r.b)("p",null,"Each time a request is made to one of the end points in question, the authorizer will take the provided JWT token and check what Google Groups the client is in. If the client is authenticated and is in one of the allowed groups, the request is authorized. Otherwise access is denied. In both cases the standard AWS IAM policy statement is returned indicating whether the request was authorized or not, and then depending on the result either the requested Lambda resource is called or the client gets an unauthorized response."),Object(r.b)("p",null,"Implementing authorization this way requires a bit more development work, but completely takes a way the necessity to manage API keys in the infrastructure. This also gives the business the power to manage their own resources and determine who has access to them."))}c.isMDXComponent=!0},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return p}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,p=h["".concat(i,".").concat(d)]||h[d]||b[d]||r;return a?o.a.createElement(p,s(s({ref:t},l),{},{components:a})):o.a.createElement(p,s({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);