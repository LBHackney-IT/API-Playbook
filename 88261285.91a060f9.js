(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(3),r=n(7),a=(n(0),n(86)),o={id:"api_design_principles",title:"API Design Principles"},s={unversionedId:"api_design_principles",id:"api_design_principles",isDocsHomePage:!1,title:"API Design Principles",description:"Comparing SOA web service interfacing style of SOAP vs. REST, the former tend to be centered around operations that are usually use-case specific and specialized. In contrast, REST is centered around business (data) entities exposed as resources that are identified via URIs and can be manipulated via standardized CRUD-like methods using different representations, and hypermedia. RESTful APIs tend to be less use-case specific and comes with less rigid client / server coupling and are more suitable for an ecosystem of (core) services providing a platform of APIs to build diverse new business services. We apply the RESTful web service principles to all kind of application (micro-) service components, independently from whether they provide functionality via the internet or intranet.",source:"@site/docs/api_design_principles.md",slug:"/api_design_principles",permalink:"/API-Playbook/api_design_principles",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/api_design_principles.md",version:"current",sidebar:"docs",previous:{title:"API Documentation",permalink:"/API-Playbook/documentation"},next:{title:"Hackney API Implementation Guidelines",permalink:"/API-Playbook/api_implementation_guidelines"}},c=[],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Comparing SOA web service interfacing style of SOAP vs. REST, the former tend to be centered around operations that are usually use-case specific and specialized. In contrast, REST is centered around business (data) entities exposed as resources that are identified via URIs and can be manipulated via standardized CRUD-like methods using different representations, and hypermedia. RESTful APIs tend to be less use-case specific and comes with less rigid client / server coupling and are more suitable for an ecosystem of (core) services providing a platform of APIs to build diverse new business services. We apply the RESTful web service principles to all kind of application (micro-) service components, independently from whether they provide functionality via the internet or intranet."),Object(a.b)("p",null,"We prefer REST-based APIs with JSON payloads.\nAn important principle for API design and usage is Postel\u2019s Law, aka The Robustness Principle (see also RFC 1122):"),Object(a.b)("p",null,"Be liberal in what you accept, be conservative in what you send\nReadings: Some interesting reads on the RESTful API design style and service architecture:"),Object(a.b)("p",null,"Book: Irresistable APIs: Designing web APIs that developers will love"),Object(a.b)("p",null,"Book: REST in Practice: Hypermedia and Systems Architecture"),Object(a.b)("p",null,"Book: Build APIs You Won\u2019t Hate"),Object(a.b)("p",null,"InfoQ eBook: Web APIs: From Start to Finish"),Object(a.b)("p",null,"Lessons-learned blog: Thoughts on RESTful API Design"),Object(a.b)("p",null,"Fielding Dissertation: Architectural Styles and the Design of Network-Based Software Architectures"),Object(a.b)("p",null,"Designing APIs\nAPIs should adhere to the same design principles as any well managed product:"),Object(a.b)("p",null,"Treat your API as product and act like a product owner"),Object(a.b)("p",null,"Put yourself into the place of your customers; be an advocate for their needs"),Object(a.b)("p",null,"Emphasize simplicity, comprehensibility, and usability of APIs to make them irresistible for client engineers"),Object(a.b)("p",null,"Actively improve and maintain API consistency over the long term"),Object(a.b)("p",null,"Make use of customer feedback and provide service level support"),Object(a.b)("p",null,"Understand the concrete use cases of your API consumers and carefully check the trade-offs of your API design variants with a product mindset. Avoid short-term implementation optimizations at the expense of unnecessary client side obligations, and have a high attention on API quality and client developer experience."),Object(a.b)("p",null,"API First\nAPI First is one of our principles. In a nutshell API First requires two aspects:"),Object(a.b)("p",null,"define APIs first, before coding its implementation, using a standard specification language"),Object(a.b)("p",null,"get early review feedback from peers and client developers"),Object(a.b)("p",null,"By defining APIs outside the code, we want to facilitate early review feedback and also a development discipline that focus service interface design on..."),Object(a.b)("p",null,"profound understanding of the domain and required functionality"),Object(a.b)("p",null,"generalized business entities / resources, i.e. avoidance of use case specific APIs"),Object(a.b)("p",null,"clear separation of WHAT vs. HOW concerns, i.e. abstraction from implementation aspects \u2014 APIs should be stable even if we replace complete service implementation including its underlying technology stack"),Object(a.b)("p",null,"Moreover, API definitions with standardized specification format also facilitate..."),Object(a.b)("p",null,"single source of truth for the API specification; it is a crucial part of a contract between service provider and client users"),Object(a.b)("p",null,"infrastructure tooling for API discovery, API GUIs, API documents, automated quality checks"),Object(a.b)("p",null,"Elements of API First are also these standards and a standardized API review process (TBC) as to get early review feedback from peers and client developers. Peer review is important for us to get high quality APIs, to enable architectural and design alignment and to supported development of client applications decoupled from service provider engineering life cycle."),Object(a.b)("p",null,"It is important to learn, that API First is not in conflict with the agile development principles that we love. Applications should evolve incrementally \u2014 and so its APIs. Of course, our API specification will and should evolve iteratively in different cycles; however, each starting with draft status and early team and peer review feedback. API may change and profit from implementation concerns and automated testing feedback. API evolution during development life cycle may include breaking changes for not yet productive features and as long as we have aligned the changes with the clients. Hence, API First does not mean that you must have 100% domain and requirement understanding and can never produce code before you have defined the complete API and get it confirmed by peer review. On the other hand, API First obviously is in conflict with the bad practice of publishing API definition and asking for peer review after the service integration or even the service productive operation has started. It is crucial to request and get early feedback \u2014 as early as possible, but not before the API changes are comprehensive with focus to the next evolution step and have a certain quality (including API Guideline compliance), already confirmed via team internal reviews."))}d.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=i,b=p["".concat(o,".").concat(f)]||p[f]||u[f]||a;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);