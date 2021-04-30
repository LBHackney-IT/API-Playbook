(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(129)),i={id:"performance_monitoring",title:"Performance Monitoring"},c={unversionedId:"performance_monitoring",id:"performance_monitoring",isDocsHomePage:!1,title:"Performance Monitoring",description:"Performance monitoring",source:"@site/docs/performance_monitoring.md",slug:"/performance_monitoring",permalink:"/API-Playbook/performance_monitoring",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/performance_monitoring.md",version:"current",sidebar:"docs",previous:{title:"Centralised Logging and Monitoring",permalink:"/API-Playbook/centralised_logging"},next:{title:"Uptime Monitoring",permalink:"/API-Playbook/uptime_monitoring"}},m=[{value:"Performance monitoring",id:"performance-monitoring",children:[]}],l={toc:m};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"performance-monitoring"},"Performance monitoring"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"  AWS Lambda insights for performance monitoring\n")),Object(a.b)("p",null,"  ",Object(a.b)("strong",{parentName:"p"},"     What are Lambda insights? ")),Object(a.b)("p",null,"As per AWS\u2019s documentation:"),Object(a.b)("p",null,"The solution collects, aggregates, and summarizes system-level metrics including CPU time, memory, disk and network usage. It also collects, aggregates, and summarizes diagnostic information such as cold starts and Lambda worker shutdowns to help you isolate issues with your Lambda functions and resolve them quickly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"      How to enable Lambda insights ")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/monitoring-insights.html"},"https://docs.aws.amazon.com/lambda/latest/dg/monitoring-insights.html")),Object(a.b)("p",null,"  ",Object(a.b)("strong",{parentName:"p"},"        Lambda insights cost   ")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Standard CloudWatch cost strategy applies")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"It depends how many metrics are we monitoring")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"How much data volume of metrics logs has been ingested"),Object(a.b)("p",{parentName:"li"},"   a. AWS provides an example, where a Lambda function, which has all 8 metrics monitored and is invoked 1M times in a month will cost $2.92 per month for Lambda insights"),Object(a.b)("p",{parentName:"li"},"   b. We don\u2019t expect each individual Lambda to be invoked as many times each month;\nWe need to evaluate if we are interested in monitoring all 8 metrics"))))}s.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,d=p["".concat(i,".").concat(u)]||p[u]||b[u]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);