(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return t?a.a.createElement(m,i(i({ref:r},l),{},{components:t})):a.a.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},64:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(141)),s={id:"error_codes",title:"Error Codes"},i={unversionedId:"error_codes",id:"error_codes",isDocsHomePage:!1,title:"Error Codes",description:"Standardised Error Messages",source:"@site/docs/error_codes.md",slug:"/error_codes",permalink:"/API-Playbook/error_codes",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/error_codes.md",version:"current",sidebar:"docs",previous:{title:"API Design Principles",permalink:"/API-Playbook/api_design_principles"},next:{title:"General Guidelines",permalink:"/API-Playbook/general_guidelines"}},c=[{value:"Standardised Error Messages",id:"standardised-error-messages",children:[]},{value:"HTTP Status Codes",id:"http-status-codes",children:[]},{value:"Handling Errors",id:"handling-errors",children:[]}],l={toc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"standardised-error-messages"},"Standardised Error Messages"),Object(o.b)("h2",{id:"http-status-codes"},"HTTP Status Codes"),Object(o.b)("p",null,"When a client makes a request to an HTTP server \u2014 and the server successfully receives the request \u2014 the server must notify the client if the request was successfully handled or not. HTTP accomplishes this with five categories of status codes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"100-level (Informational)"),": Server acknowledges a request"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"200-level (Success)"),": Server completed the request as expected"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"204-level (No Content)"),": indicates that a request has succeeded"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"300-level (Redirection)"),": Client needs to perform further actions to complete the request"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"400-level (Client error)"),": Client sent an invalid request"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"401-level (unauthorized)"),": The request sent by the client could not be authenticated"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"500-level (Server error)"),": Server failed to fulfill a valid request due to an error with server"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"503-level (Service unavailable)"),": The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.")),Object(o.b)("h2",{id:"handling-errors"},"Handling Errors"),Object(o.b)("p",null,"At Hackney, we use the following Standardised Error messages for our APIs:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'404 - Not Found: If an item (requested resource was not found)\n{\n  "devErrorMessages": ["debug info or stack trace"],\n  "userErrorMessage": "The item you searched for was not found"\n}\n\n400 - Bad Request: When the client sent an invalid request \n(e.g. missing required header, body or parameter)\n{\n  "devErrorMessages": ["validation errors"],\n  "userErrorMessage": "Your item could not be created for the following reasons..."\n}\n\n500 - Internal Server Error: Generic error occured\n{\n  "devErrorMessages": ["debug info or stack trace"],\n  "userErrorMessage": "The item you searched for was not found"\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Basic Errors")))}u.isMDXComponent=!0}}]);