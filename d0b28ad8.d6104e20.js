(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),y=n,f=d["".concat(a,".").concat(y)]||d[y]||s[y]||i;return r?o.a.createElement(f,c(c({ref:t},p),{},{components:r})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(106)),a={id:"deployment_pipeline",title:"Deployment Pipeline"},c={unversionedId:"deployment_pipeline",id:"deployment_pipeline",isDocsHomePage:!1,title:"Deployment Pipeline",description:"Video Tutorial",source:"@site/docs/deployment_pipeline.md",slug:"/deployment_pipeline",permalink:"/API-Playbook/deployment_pipeline",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/deployment_pipeline.md",version:"current",sidebar:"docs",previous:{title:"Static Code Analysis Tools Spike Notes",permalink:"/API-Playbook/static_code_analysis"},next:{title:"Infrastucture as Code",permalink:"/API-Playbook/infrastructure"}},l=[{value:"Video Tutorial",id:"video-tutorial",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"video-tutorial"},"Video Tutorial"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," For a better understanding of our Deployment Pipeline, please watch our short video tutorial: ")),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/X68e_wdII2c",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0}}]);