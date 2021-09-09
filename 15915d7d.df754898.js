(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||s[b]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(139)),a={id:"first_end_point_dynamo",title:"DynamoDB End to End Training"},c={unversionedId:"first_end_point_dynamo",id:"first_end_point_dynamo",isDocsHomePage:!1,title:"DynamoDB End to End Training",description:"Introduction",source:"@site/docs/first_end_point_dynamodb.md",slug:"/first_end_point_dynamo",permalink:"/API-Playbook/first_end_point_dynamo",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/first_end_point_dynamodb.md",version:"current",sidebar:"docs",previous:{title:"Postgres End to End Training",permalink:"/API-Playbook/first_end_point_postgres"},next:{title:"Developer API Hub",permalink:"/API-Playbook/developer_hub"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Video Tutorial",id:"video-tutorial",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"We have created a video that gives developers a good understanding of how we build API Endpoints using DynamoDB from beginning to end, following best practices. "),Object(i.b)("p",null,"The video below will go through the following steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Creating a repository using Hackney\u2019s Base API template"),Object(i.b)("li",{parentName:"ul"},"Using our Renamer Script to rename the repository"),Object(i.b)("li",{parentName:"ul"},"Setting up your object"),Object(i.b)("li",{parentName:"ul"},"Get by ID endpoint with TDD"),Object(i.b)("li",{parentName:"ul"},"POST endpoint with TDD"),Object(i.b)("li",{parentName:"ul"},"PATCH endpoint with TDD"),Object(i.b)("li",{parentName:"ul"},"Authentication & Security"),Object(i.b)("li",{parentName:"ul"},"How to deploy your endpoint to AWS")),Object(i.b)("h2",{id:"video-tutorial"},"Video Tutorial"),Object(i.b)("p",null,"Note: To go back a forth between the videos please use the playlist button available"),Object(i.b)("figure",{class:"video-container"},Object(i.b)("iframe",{width:"100%",src:"https://www.youtube.com/embed/videoseries?list=PL1mVZlA7eC8SviOMxwqErxi9sF8FXwFSj",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}p.isMDXComponent=!0}}]);