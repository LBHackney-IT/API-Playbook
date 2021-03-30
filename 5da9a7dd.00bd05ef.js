(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(f,a(a({ref:t},u),{},{components:n})):o.a.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},175:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/code1-13ab0416b9fd450c5139f888be8c612f.png"},176:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/code2-41a3f6c1576615651c505119be07965f.png"},177:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/code3-c8083aba84b3013af6080102cf88da7d.png"},178:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/code4-1e7e5b5fd0066935dfd1cca9f7b66119.png"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(113)),c={id:"unit_test",title:"Writing Unit Tests"},a={unversionedId:"unit_test",id:"unit_test",isDocsHomePage:!1,title:"Writing Unit Tests",description:"Introduction",source:"@site/docs/unit_test.md",slug:"/unit_test",permalink:"/API-Playbook/unit_test",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/unit_test.md",version:"current",sidebar:"docs",previous:{title:"API Boilerplate - Base API",permalink:"/API-Playbook/api_boilerplate"},next:{title:"How to write integration tests",permalink:"/API-Playbook/integration_tests"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Setting up and using mocks",id:"setting-up-and-using-mocks",children:[]}],u={toc:s};function l(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Unit tests are used to test the functionality of a class in isolation.\nSo if a class depends on another we will need to mock any interactions with that class. We are using ",Object(i.b)("u",null," dependency injection "),"  so any class which needs to interact with another will be passed an interface, which the depended on class subscribes to, in the constructor.\nIn the tests, we can then just pass in a mock implementation of this interface into the constructor instead."),Object(i.b)("p",null,"There is some good advice for mocking and writing unit tests here:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"      https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices\n")),Object(i.b)("h2",{id:"setting-up-and-using-mocks"},"Setting up and using mocks"),Object(i.b)("p",null,"You can use mocks to return a specific value for a given input. For example a test for the following code:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:n(175).default})),Object(i.b)("p",null,"might look like.."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:n(176).default})),Object(i.b)("p",null,"Or you can assert that they were called with the correct inputs. For example a test for the following code.."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:n(177).default})),Object(i.b)("p",null,"might look like.."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:n(178).default})),Object(i.b)("p",null,"These examples are just a couple of common use cases for using Moq, check out the documentation link below for more examples and use cases:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    https://github.com/Moq/moq4/wiki/Quickstart\n")))}l.isMDXComponent=!0}}]);