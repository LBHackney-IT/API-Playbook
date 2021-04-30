(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(3),r=n(7),a=(n(0),n(129)),o={id:"general_guidelines",title:"General Guidelines"},c={unversionedId:"general_guidelines",id:"general_guidelines",isDocsHomePage:!1,title:"General Guidelines",description:"MUST Follow API First Principle",source:"@site/docs/general_guidelines.md",slug:"/general_guidelines",permalink:"/API-Playbook/general_guidelines",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/general_guidelines.md",version:"current"},l=[{value:"MUST Follow API First Principle",id:"must-follow-api-first-principle",children:[]},{value:"MUST Provide API Specification using OpenAPI",id:"must-provide-api-specification-using-openapi",children:[]},{value:"MAY Provide API User Guide",id:"may-provide-api-user-guide",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"must-follow-api-first-principle"},"MUST Follow API First Principle"),Object(a.b)("p",null,"You must follow the ",Object(a.b)("a",{parentName:"p",href:"/API-Playbook/api_design_principles#api-first"},"API First Principle"),", more specifically:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You must define APIs first, before coding its implementation, ",Object(a.b)("a",{parentName:"p",href:"#must-provide-api-specification-using-openapi"},"using OpenAPI as specification language"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You must design your APIs consistently with this guidelines")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You must call for early review feedback from peers and client developers"))),Object(a.b)("h2",{id:"must-provide-api-specification-using-openapi"},"MUST Provide API Specification using OpenAPI"),Object(a.b)("p",null,"We use the ",Object(a.b)("a",{parentName:"p",href:"https://www.openapis.org"},"OpenAPI specification v3.0")," as standard to define API specifications files. API designers have to provide the API specification files using ",Object(a.b)("strong",{parentName:"p"},"YAML")," to improve readability."),Object(a.b)("p",null,"The API specification files should be subject to version control using a source code management system - best together with the implementing sources."),Object(a.b)("p",null,"You MUST publish the API specification with the deployment of the implementing service."),Object(a.b)("h2",{id:"may-provide-api-user-guide"},"MAY Provide API User Guide"),Object(a.b)("p",null,"In addition to the API Specification, if the API is expected to be widely used, it is good practice to provide an API user guide to improve client developer experience, especially for engineers that are less experienced in using this API. A helpful API user guide typically describes the following API aspects:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"API scope, purpose, and use cases")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"concrete examples of API usage")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"edge cases, error situation details, and repair hints")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"architecture context and major dependencies - including figures and sequence flows"))))}s.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=i,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return n?r.a.createElement(f,c(c({ref:t},p),{},{components:n})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);