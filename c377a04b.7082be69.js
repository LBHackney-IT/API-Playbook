(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{80:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return c}));var r=o(3),a=o(7),n=(o(0),o(86)),i={id:"index",title:"Introduction",slug:"/"},s={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Introduction",description:"APIs have become an essential part of Hackney\u2019s digital transformation.  They are the building blocks of the majority of our newer internal systems and are part of the foundation of our cloud based architecture.  They provide the opportunity for reuse and the flexibility to combine data and services in new and previously unimaginable ways.",source:"@site/docs/index.md",slug:"/",permalink:"/API-Playbook/",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/index.md",version:"current",sidebar:"docs",next:{title:"API Standards",permalink:"/API-Playbook/api_standards"}},l=[{value:"Why a Playbook?",id:"why-a-playbook",children:[]},{value:"Our Playbook journey",id:"our-playbook-journey",children:[]},{value:"Who this Playbook is for",id:"who-this-playbook-is-for",children:[]},{value:"Help us improve",id:"help-us-improve",children:[]},{value:"For a better understanding of The Basic API, please watch our tutorial below:",id:"for-a-better-understanding-of-the-basic-api-please-watch-our-tutorial-below",children:[]}],u={toc:l};function c(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"APIs have become an essential part of Hackney\u2019s digital transformation.  They are the building blocks of the majority of our newer internal systems and are part of the foundation of our cloud based architecture.  They provide the opportunity for reuse and the flexibility to combine data and services in new and previously unimaginable ways."),Object(n.b)("p",null,"This API playbook will help readers to understand:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Why APIs have become so important to our software development process"),Object(n.b)("li",{parentName:"ul"},"How we go about building our APIs"),Object(n.b)("li",{parentName:"ul"},"How we support and maintain our APIs"),Object(n.b)("li",{parentName:"ul"},"Some best practices that we have adopted as standard in our development of APIs")),Object(n.b)("h2",{id:"why-a-playbook"},"Why a Playbook?"),Object(n.b)("p",null,"Some people may wonder why we have decided to establish a playbook.  Well during our journey of digital transformation we were fortunate to work with a number of partners/agencies from whom we gained a significant amount of knowledge and learned to do things in so many different ways.  What we also discovered was that the various ways APIs were implemented across our projects meant that there was no consistency, making it a bit of a challenge to maintain.  We decided that if we had a consistent standard of implementation, it would make it easier for us to maintain services as well as to get new developers onboard."),Object(n.b)("h2",{id:"our-playbook-journey"},"Our Playbook journey"),Object(n.b)("p",null,"Over the past few years we went through several iterations of our playbook.  These iterations were necessary as we grew in clarity over what we felt would be the best set of tools and practices for us as a development team.  Where we discovered we may have got some things wrong or could do with some improvement we worked on making it right.  For example, during the course of our journey we have transitioned from container based services running on EC2 machines to serverless functions.  We also reviewed our methods of authorisations on our APIs and implemented a custom authorisation solution.  We have continued to work with our agency partners to continuously improve our development practices and standards, and the playbook evolved as a result.  Today we have come to the point where our playbook has taken a more governance role and now leads more than it is led, and onboarding as ever been so easy. This also allowed us to justify the ROI on API strategy by bringing consistency and standardization across all APIs developed by internal/external developers for relevant services.  However, as technology changes and we learn new things, undoubtedly our playbook will continue to evolve."),Object(n.b)("h2",{id:"who-this-playbook-is-for"},"Who this Playbook is for"),Object(n.b)("p",null,"This playbook is primarily used to onboard new developers, whether they are new members of staff of new agency partners we work with.  However, we would be thrilled if this playbook is also read by a wider audience.  We are also always happy for contributions to make this even better."),Object(n.b)("h2",{id:"help-us-improve"},"Help us improve"),Object(n.b)("p",null,"We are always looking at ways we can improve. If you have any ideas or suggestions please share your feedback on our playbook Github repo suggesting ways we could improve these pages."),Object(n.b)("h2",{id:"for-a-better-understanding-of-the-basic-api-please-watch-our-tutorial-below"},"For a better understanding of The Basic API, please watch our tutorial below:"),Object(n.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/WggC6Rtz1CE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}c.isMDXComponent=!0},86:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return h}));var r=o(0),a=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),b=r,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||n;return o?a.a.createElement(h,s(s({ref:t},u),{},{components:o})):a.a.createElement(h,s({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);