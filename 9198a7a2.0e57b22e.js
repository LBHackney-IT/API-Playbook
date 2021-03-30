(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),o=(t(0),t(86)),a={id:"api_implementation_guidelines",title:"Hackney API Implementation Guidelines"},l={unversionedId:"api_implementation_guidelines",id:"api_implementation_guidelines",isDocsHomePage:!1,title:"Hackney API Implementation Guidelines",description:"Introduction",source:"@site/docs/api_implementation_guideliness.md",slug:"/api_implementation_guidelines",permalink:"/API-Playbook/api_implementation_guidelines",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/api_implementation_guideliness.md",version:"current",sidebar:"docs",previous:{title:"API Design Principles",permalink:"/API-Playbook/api_design_principles"},next:{title:"Naming Conventions",permalink:"/API-Playbook/naming_conventions"}},c=[],p={toc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Introduction"),Object(o.b)("p",null,"There are an increasing number of APIs being developed at Hackney and these guidelines are designed to provide a clear set of implementation guides to bring consistency between the different endpoints."),Object(o.b)("p",null,"They are based on the excellent set created by Zalando."),Object(o.b)("p",null,"Contents"),Object(o.b)("p",null,"Design Principles"),Object(o.b)("p",null,"General Guidelines"),Object(o.b)("p",null,"Security"),Object(o.b)("p",null,"Compatibility"),Object(o.b)("p",null,"Deprecation"),Object(o.b)("p",null,"Naming"),Object(o.b)("p",null,"HTTP"),Object(o.b)("p",null,"Resources"),Object(o.b)("p",null,"Pagination"),Object(o.b)("p",null,"Data Formats"),Object(o.b)("p",null,"Operation"),Object(o.b)("p",null,"References"),Object(o.b)("p",null,"Conventions"),Object(o.b)("p",null,'The requirement level keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" used in this document (case insensitive) are to be interpreted as described in RFC2119.'),Object(o.b)("p",null,"The titles are marked with the corresponding labels."))}u.isMDXComponent=!0},86:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,m=s["".concat(a,".").concat(d)]||s[d]||b[d]||o;return t?i.a.createElement(m,l(l({ref:n},p),{},{components:t})):i.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);