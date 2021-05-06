(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(127)),o={id:"application_logging",title:"Application Logging Guidelines"},l={unversionedId:"application_logging",id:"application_logging",isDocsHomePage:!1,title:"Application Logging Guidelines",description:"Introduction",source:"@site/docs/application_logging.md",slug:"/application_logging",permalink:"/API-Playbook/application_logging",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/application_logging.md",version:"current",sidebar:"docs",previous:{title:"Alerting",permalink:"/API-Playbook/alerting"},next:{title:"Centralised Logging",permalink:"/API-Playbook/centralised_logging"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Categories",id:"categories",children:[{value:"Application",id:"application",children:[]},{value:"Events",id:"events",children:[]},{value:"Exceptions",id:"exceptions",children:[]},{value:"Tracing and Context Correlation",id:"tracing-and-context-correlation",children:[]}]},{value:"Correlation Id",id:"correlation-id",children:[{value:"Tracing Context",id:"tracing-context",children:[]}]},{value:"Scopes",id:"scopes",children:[{value:"Application Instance",id:"application-instance",children:[]},{value:"Per Operation",id:"per-operation",children:[]},{value:"Per Log Entry",id:"per-log-entry",children:[]}]},{value:"Filters and Masking",id:"filters-and-masking",children:[{value:"Filters",id:"filters",children:[]},{value:"Masking",id:"masking",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This document defines a set of guidelines used to produce rich application logging for applications belonging to a microservice architecture.\nProviding rich logging information will make it easier to investigate issues without making use of intrusive approaches (i.e: debug, memory dump), also making visible the behaviour of services by using monitoring tools to extract and/or query these logs."),Object(r.b)("h2",{id:"categories"},"Categories"),Object(r.b)("h3",{id:"application"},"Application"),Object(r.b)("p",null,"Logs related to the application behaviour that does not result into exceptions and would not be visible externally if not logged. Common scenarios are conditional behaviours that will generate different outputs based on the contents of the command or state of the resource being manipulated. Application logs should be the only log level required within the application and must be used with caution to avoid excessive log entries without value for issues investigation."),Object(r.b)("h3",{id:"events"},"Events"),Object(r.b)("p",null,"Events are application notifications used to inform external components that an activity has happened within the application. In some cases the event will let external subscribers know if an operation happened successfully or failed. Every operation will raise at least two types of events, success or failure, but in some cases, it might generate different events based on the context of the operation. All events raised by an application are logged by the infrastructure components, so adding a log information to notify an event has happened is not required and will make the logging redundant."),Object(r.b)("h3",{id:"exceptions"},"Exceptions"),Object(r.b)("p",null,"Exceptions is an execution flow mechanism used to interrupt the current processing flow either because, the application or one of it\u2019s dependent components behaved unexpectedly and can\u2019t proceed, or an application logic is aware it can\u2019t proceed because doing so will/may cause issues. All exceptions raised by an application or it\u2019s dependencies are logged by the infrastructure components, so adding a log information to notify an exception has happened is not required and will make the logging redundant."),Object(r.b)("h3",{id:"tracing-and-context-correlation"},"Tracing and Context Correlation"),Object(r.b)("p",null,"Whether an application executes a task successfully or not is often highly dependent on the input from the user. As a result, this contextual information may be vital when trying to diagnose a fault."),Object(r.b)("p",null,'This can be achieved by setting a property of your logging platform during the startup of a component.\nThis allows to view the unified stream of "events", but also to segregate per role when required to troubleshoot an individual component.\nEvery operation in an application is initiated by a trigger either externally or internally (synchronous processing). In general, these triggers do not have visibility of the behaviour for each service, and just expect a result as output from a request.\nIn many cases, these operations may trigger operations into dependent services to accomplish the initial operation. These chain of events need to be correlated in order to identify possible failures or for auditing purposes. For this reason, enter into scene the CorrelationId and TracingContext.'),Object(r.b)("h2",{id:"correlation-id"},"Correlation Id"),Object(r.b)("p",null,"In order to identify any operation executed across different components and layers but that are part of the same context, there should be a correlationId sent from the client triggering the operation.\nCorrelationId is a global unique identifier (GUID) attribute provided by callers (or auto-generated when one is not provided) to identify the chain of calls between services.\nFor instance, an HTTP client should send a correlationId header for every call. The downstream systems should pass along this correlationId to any downstream layer so that all traces/logs can be identified as part of the same operation."),Object(r.b)("h3",{id:"tracing-context"},"Tracing Context"),Object(r.b)("p",null,"Tracing Context is the name given to the correlated chain of calls that happened from an initial trigger until it reached the current state. By default the Tracing Context will be using the CorrelationId to identify all events raised since the first trigger initiate the operation.\nCurrently, the correlation identify the events in a chronological order and events happening in parallel on separate services will be mixed up."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Additional Attributes to Consider (Custom Dimensions) ")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Attribute Name"),Object(r.b)("th",{parentName:"tr",align:null},"Attribute Name"),Object(r.b)("th",{parentName:"tr",align:null},"Attribute Name"),Object(r.b)("th",{parentName:"tr",align:null},"Attribute Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Domain *"),Object(r.b)("td",{parentName:"tr",align:null},"Application Instance"),Object(r.b)("td",{parentName:"tr",align:null},"tenure"),Object(r.b)("td",{parentName:"tr",align:null},"Domain name which the service belongs to")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Service *"),Object(r.b)("td",{parentName:"tr",align:null},"Application Instance"),Object(r.b)("td",{parentName:"tr",align:null},"tenure-listener / tenure-api"),Object(r.b)("td",{parentName:"tr",align:null},"The service name generating the logs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Environment *"),Object(r.b)("td",{parentName:"tr",align:null},"Application Instance"),Object(r.b)("td",{parentName:"tr",align:null},"dev"),Object(r.b)("td",{parentName:"tr",align:null},"Environment name")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Version *"),Object(r.b)("td",{parentName:"tr",align:null},"Application Instance"),Object(r.b)("td",{parentName:"tr",align:null},"1.2.345"),Object(r.b)("td",{parentName:"tr",align:null},"Semantic Version Number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"CorrelationId *"),Object(r.b)("td",{parentName:"tr",align:null},"Per Operation"),Object(r.b)("td",{parentName:"tr",align:null},"3fa85f64-5717-4562-b3fc-2c963f-66afa6"),Object(r.b)("td",{parentName:"tr",align:null},"Id used to chain events and logs executed by multiple operations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"OperationId"),Object(r.b)("td",{parentName:"tr",align:null},"Per Operation"),Object(r.b)("td",{parentName:"tr",align:null},"3fa85f64-5717-4562-b3fc-2c963f-66afa6"),Object(r.b)("td",{parentName:"tr",align:null},"Unique Id that identifies one occurrence of the operation i.e: Requestid")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"OperationName"),Object(r.b)("td",{parentName:"tr",align:null},"Per Operation"),Object(r.b)("td",{parentName:"tr",align:null},"Update Tenure"),Object(r.b)("td",{parentName:"tr",align:null},"Name of operation being executed")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UserId"),Object(r.b)("td",{parentName:"tr",align:null},"Per Operation"),Object(r.b)("td",{parentName:"tr",align:null},"KJS827HJS88S"),Object(r.b)("td",{parentName:"tr",align:null},"Id of user triggering the operation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Logger(SourceContext)"),Object(r.b)("td",{parentName:"tr",align:null},"Per Log Entry"),Object(r.b)("td",{parentName:"tr",align:null},"Company.Solution.ClassName"),Object(r.b)("td",{parentName:"tr",align:null},"Name of component or class generating the logs.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ResourceId"),Object(r.b)("td",{parentName:"tr",align:null},"Per Log Entry"),Object(r.b)("td",{parentName:"tr",align:null},"tenure-12345"),Object(r.b)("td",{parentName:"tr",align:null},"When an operation is being executred in the context of an existing resource (i.e. a repair) the logs should make the id of the order being modified available.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," NOTE: "),"\nAttributes marked with a * indicate ",Object(r.b)("em",{parentName:"p"},"high importance"),"."),Object(r.b)("h2",{id:"scopes"},"Scopes"),Object(r.b)("h3",{id:"application-instance"},"Application Instance"),Object(r.b)("p",null,"Each deployed instance of an application will provide the same log attributes to all log entries generated. It does not change in the scope of the operations generating\nthe logs."),Object(r.b)("h3",{id:"per-operation"},"Per Operation"),Object(r.b)("p",null,"When an operation is started (API request, message from a Queue), the attributes will be set and used throughout the chain of calls using the same attributes. It does not change based on the context within the application. In case the value does not come from external calls, should be generated internally."),Object(r.b)("h3",{id:"per-log-entry"},"Per Log Entry"),Object(r.b)("p",null,"Each class or logger will have it\u2019s own set of attributes used within it\u2019s context to identify the source component that is generating the logs. i.e: The class name writing to the logs, the Resource Id being manipulated, or any data available only in the context of the logger."),Object(r.b)("h2",{id:"filters-and-masking"},"Filters and Masking"),Object(r.b)("h3",{id:"filters"},"Filters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To reduce the high volume of log entries, the applications should add the following log filters:"),Object(r.b)("li",{parentName:"ul"},"Filter out healthcheck logs (keep errors)"),Object(r.b)("li",{parentName:"ul"},"Limit the log level to"),Object(r.b)("li",{parentName:"ul"},"Non production environments = Information"),Object(r.b)("li",{parentName:"ul"},"Production environments = Warning"),Object(r.b)("li",{parentName:"ul"},"Don't let ASP.NET Core Console Logging Slow your App down"),Object(r.b)("li",{parentName:"ul"},"Logging in .NET Core and ASP.NET Core")),Object(r.b)("h3",{id:"masking"},"Masking"),Object(r.b)("p",null,"Prevent log entries containing Personal Identifiable Information (PII) by removing the attributes, or, masking part of the value."))}p.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return n?i.a.createElement(g,l(l({ref:t},s),{},{components:n})):i.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);