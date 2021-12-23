(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(140)),o={id:"eda",title:"Event Driven Architecture"},c={unversionedId:"eda",id:"eda",isDocsHomePage:!1,title:"Event Driven Architecture",description:"What is Event Driven Architecture",source:"@site/docs/eda.md",slug:"/eda",permalink:"/API-Playbook/eda",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/eda.md",version:"current",sidebar:"docs",previous:{title:"Lambda Authoriser",permalink:"/API-Playbook/lambda_authoriser"},next:{title:"Debugging APIs in Production",permalink:"/API-Playbook/debugging_apis"}},l=[{value:"What is Event Driven Architecture",id:"what-is-event-driven-architecture",children:[]},{value:"Vision",id:"vision",children:[]},{value:"When to use EDA",id:"when-to-use-eda",children:[{value:"Video Tutorial",id:"video-tutorial",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-event-driven-architecture"},"What is Event Driven Architecture"),Object(i.b)("p",null,"Event driven Architecture describes an approach for handling POST/PUT requests from an API. Rather than each dependent application needing to be updated on explicit calls, the requests are sent asynchronously. "),Object(i.b)("p",null,"This approach offers three benefits:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The user experience isn\u2019t compromised as the users waits whilst the data is updated in dependent applications."),Object(i.b)("li",{parentName:"ul"},"The dependent application can subscribe only  to events rather than needing to receive a larger dataset. "),Object(i.b)("li",{parentName:"ul"},"The events can be managed by the dependent application in order to control its own performance, whilst ensuring the data is not lost.")),Object(i.b)("h2",{id:"vision"},"Vision"),Object(i.b)("p",null,"To have :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Having loosely coupled architecture across all APIs and services."),Object(i.b)("li",{parentName:"ul"},"High availability of all components."),Object(i.b)("li",{parentName:"ul"},"Horizontal scaling of components"),Object(i.b)("li",{parentName:"ul"},"Better manageability of data used in an asynchronous manner. "),Object(i.b)("li",{parentName:"ul"},"Fault tolerance and better resilience "),Object(i.b)("li",{parentName:"ul"},"Processing components can be developed independently of each other."),Object(i.b)("li",{parentName:"ul"},"Ability to throttle workload."),Object(i.b)("li",{parentName:"ul"},"To have high \u201cfan out\u201d opportunities- Scenarios where one event will be processed by multiple components.")),Object(i.b)("p",null,"The event-driven architecture approach is a paradigm shift from more traditional architectures that closely couple data and services within one data store and monolithic application."),Object(i.b)("p",null,"If you want to reduce the number of tightly coupled dependencies within your application, you can move towards an event driven approach."),Object(i.b)("h2",{id:"when-to-use-eda"},"When to use EDA"),Object(i.b)("p",null,"Event-driven architecture  is to be used when an action needs to be taken when a record has been created, updated or deleted, for example if a user needs to be alerted or another record needs to be updated."),Object(i.b)("p",null,"A more specific example where event driven architecture is to be used is in the scenario, where you have a data record, that needs to maintain a subset of information from another data entity"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For example, each Tenure record in the Tenure data entity maintains a subset of Person data from the Person data entity that includes names, date of birth and ids."),Object(i.b)("li",{parentName:"ul"},"The subset is maintained to avoid making multiple additional API calls to retrieve the names of people under a specific tenure."),Object(i.b)("li",{parentName:"ul"},"In this example, we use EDA to ensure that the subset of person data is kept up-to-date by publishing events when the person data record is updated and ensuring that we listen for those events and update the data accordingly in the Tenure record.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NB:")," EDA should ",Object(i.b)("strong",{parentName:"p"},"not")," be used to ",Object(i.b)("strong",{parentName:"p"},"create a new data source"),", but only to maintain subsets within records of other domains. We always strive to have a single data source and source of truth. "),Object(i.b)("h3",{id:"video-tutorial"},"Video Tutorial"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Watch our overview on Event Driven Architecture below:")),Object(i.b)("figure",{class:"video-container"},Object(i.b)("iframe",{width:"100%",src:"https://www.youtube.com/embed/RyNOyt1sEF0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}u.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);