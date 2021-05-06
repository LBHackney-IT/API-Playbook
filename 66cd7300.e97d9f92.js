(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(h,i(i({ref:t},b),{},{components:n})):r.a.createElement(h,i({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gitflow-eb3f4dcf2519612fde7260fde99ace54.png"},182:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/devops-138b997132369820f035affaf1a3608c.png"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(127)),l={id:"branching_strategy",title:"Branching Strategy"},i={unversionedId:"branching_strategy",id:"branching_strategy",isDocsHomePage:!1,title:"Branching Strategy",description:"* GitHub is used for version control and source code management. *",source:"@site/docs/branching_strategy.md",slug:"/branching_strategy",permalink:"/API-Playbook/branching_strategy",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/branching_strategy.md",version:"current",sidebar:"docs",previous:{title:"Static Code Analysis",permalink:"/API-Playbook/static_code_analysis"},next:{title:"Deployment Pipeline",permalink:"/API-Playbook/deployment_pipeline"}},c=[{value:"Branch Definitions",id:"branch-definitions",children:[{value:"GitFlow",id:"gitflow",children:[]},{value:"Trunk Based Development",id:"trunk-based-development",children:[]}]}],b={toc:c};function s(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," GitHub is used for version control and source code management. ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," When a new repository is created: ")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the lbh-base-api template if creating a new API")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Ensure you set the project up on CircleCI for CI/CD")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"By default, repositories should be kept public, unless there is a specific need and justification not to do so."))),Object(o.b)("h2",{id:"branch-definitions"},"Branch Definitions"),Object(o.b)("h3",{id:"gitflow"},"GitFlow"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"},"Inrtoduction to Gitflow")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note: GitFlow is not strictly followed throughout projects, projects can evaluate and choose a branching strategy suitable for their needs.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Gitflow Diagram",src:n(181).default})),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"A simple gitflow diagram")),Object(o.b)("h4",{id:"master-branch"},"Master branch"),Object(o.b)("p",null,"The branch that holds the code currently in production."),Object(o.b)("p",null,"This branch should be a representation of what is running in production (although that might not be a case if a deployment to staging has happened but has not been released to production yet)"),Object(o.b)("h4",{id:"development-branch"},"Development branch"),Object(o.b)("p",null,"The branch that holds any changes currently in development stage that are not yet pushed to a staging or production environment."),Object(o.b)("p",null,"If using development and master branches, a release to Staging/Production environments happens by a Pull Request from development to master."),Object(o.b)("h4",{id:"feature-branch"},"Feature branch"),Object(o.b)("p",null,"A branch containing any new changes as per requirements for the given project."),Object(o.b)("p",null,"A feature branch should be created from the \u2018development\u2019 branch."),Object(o.b)("p",null,"Once happy with the changes in the feature branch, a pull request to merge the changes into the \u2018development\u2019 branch should be made."),Object(o.b)("h4",{id:"hot-fix-branch"},"Hot-fix branch"),Object(o.b)("p",null,"A branch containing fixes to code already in production state."),Object(o.b)("p",null,"A hot-fix branch should be created from the master branch."),Object(o.b)("p",null,"Any changes in the hot-fix branch should be merged into the master branch following a pull request review."),Object(o.b)("p",null,"Hot-fixes applied should be merged directly to master as this triggers separate CircleCI workflow that will ensure that any changes currently in development are not overwritten."),Object(o.b)("h3",{id:"trunk-based-development"},"Trunk Based Development"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://trunkbaseddevelopment.com/"},"Introduction to Trunk Based Development")),Object(o.b)("p",null,"Trunk based development is the most common branching strategy used for a microservice architecture. This is a fast workflow with minimal merging."),Object(o.b)("p",null,"Essentially in this model, master is the only branch which is maintained over time and other branches are considered transient and short lived."),Object(o.b)("p",null,"Feature branches should be as short lived as possible \u2013 the longer the branch is open for then the higher the risk of merge conflicts."),Object(o.b)("p",null,"All commits to feature branches should be built and tested on the CI/CD platform to provide fast feedback to developers, and any code being merged into the trunk must go through a pull-request peer review process. Typically feature branches do not publish any artefacts or trigger deployments as these slow down the feedback process."),Object(o.b)("p",null,"The cadence of release branches should align with an individual\u2019s services release schedule. Some projects may only create release branches at the end of a sprint, whilst others might create several per-week."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Truck Based Development Diagram",src:n(182).default}),"\n",Object(o.b)("em",{parentName:"p"},"A simple Trunk Based Development workflow diagram")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Branch Name"),Object(o.b)("th",{parentName:"tr",align:null},"Branch Policies"),Object(o.b)("th",{parentName:"tr",align:null},"Build & Test"),Object(o.b)("th",{parentName:"tr",align:null},"Publish Artefacts"),Object(o.b)("th",{parentName:"tr",align:null},"Deploy to Environments"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"feature/*"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"N/A")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"master"),Object(o.b)("td",{parentName:"tr",align:null},"Require pull request",Object(o.b)("br",null),"Build validation"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Development")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"release/*"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Staging",Object(o.b)("br",null),"Production")))),Object(o.b)("p",null,"Trunk-based development is a mindset more than a practice.  It forces the developers to think early on about how not to break the build, instead of waiting to think about this when merging the branch."),Object(o.b)("p",null,"Trunk-based development becomes more natural to adopt when you use feature flags in your continuous integration pipeline.  "),Object(o.b)("p",null,"Feature flags is a technique that will help you integrate code into a shared repository at least once a day and ship it,\neven if you haven't finished the feature yet. You'll be able to deploy at any time,\nbut defer the decision to release for another day.  Turn off the feature flag and let the team continue working with a stable version and a healthy build."))}s.isMDXComponent=!0}}]);