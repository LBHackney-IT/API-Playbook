(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/releases-9d07529ee6f171b4bf66e5de911d9367.png"},180:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/branches-fa7cf2fac714e87a7dd91c6f57a27df5.png"},181:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/github-df77e00480e1d69aaeb2eb1575f3faa4.png"},182:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deployment-c23d921eb742fe5f409f9c85dfd1ef07.png"},183:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/workflow-c60357a6effb6e1e2f1483630859dfe5.png"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(113)),i={id:"branching_strategy",title:"Hackney DevOps practices"},s={unversionedId:"branching_strategy",id:"branching_strategy",isDocsHomePage:!1,title:"Hackney DevOps practices",description:"Development",source:"@site/docs/branching_strategy.md",slug:"/branching_strategy",permalink:"/API-Playbook/branching_strategy",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/branching_strategy.md",version:"current",sidebar:"docs",previous:{title:"Naming Conventions",permalink:"/API-Playbook/naming_conventions"},next:{title:"DevOps Best Practices",permalink:"/API-Playbook/development"}},l=[],c={toc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Development"),Object(o.b)("p",null,"GitHub is used for version control and source code management."),Object(o.b)("p",null,"When a new repository is created:\nUse the lbh-base-api template if creating a new API\nEnsure you set the project up on CircleCI for CI/CD\nBy default, repositories should be kept public, unless there is a specific need and justification not to do so"),Object(o.b)("p",null,"Branch definitions:"),Object(o.b)("p",null,"GitFlow:"),Object(o.b)("p",null,"Note: GitFlow is not strictly followed throughout projects, projects can evaluate and choose a branching strategy suitable for their needs."),Object(o.b)("p",null,"Master branch:"),Object(o.b)("p",null,"The branch that holds the code currently in production"),Object(o.b)("p",null,"This branch should be a representation of what is running in production (although that might not be a case if a deployment to staging has happened but has not been released to production yet)"),Object(o.b)("p",null,"Development branch:"),Object(o.b)("p",null,"The branch that holds any changes currently in development stage that are not yet pushed to a staging or production environment"),Object(o.b)("p",null,"If using development and master branches, a release to Staging/Production environments happens by a PR from development to master"),Object(o.b)("p",null,"Feature branch:"),Object(o.b)("p",null,"A branch containing any new changes as per requirements for the given project;\nA feature branch should be created from the \u2018development\u2019 branch.\nOnce happy with the changes in the feature branch, a pull request to merge the changes into the \u2018development\u2019 branch should be made."),Object(o.b)("p",null,"Hot-fix branch:"),Object(o.b)("p",null,"A branch containing fixes to code already in production state;\nA hot-fix branch should be created from the master branch.\nAny changes in the hot-fix branch should be merged into the master branch following a pull request review.\nHot-fixes applied should be merged directly to master as this triggers separate CircleCI workflow that will ensure that any changes currently in development are not overwritten."),Object(o.b)("p",null,"Trunk Based Development (",Object(o.b)("a",{parentName:"p",href:"https://trunkbaseddevelopment.com/"},"https://trunkbaseddevelopment.com/"),")"),Object(o.b)("p",null,"Trunk based development is the most common branching strategy used for a microservice architecture. This is a fast workflow with minimal merging."),Object(o.b)("p",null,"Essentially in this model, master is the only branch which is maintained over time and other branches are considered transient and short lived."),Object(o.b)("p",null,"Feature branches should be as short lived as possible \u2013 the longer the branch is open for then the higher the risk of merge conflicts."),Object(o.b)("p",null,"All commits to feature branches should be built and tested on the CI/CD platform to provide fast feedback to developers, and any code being merged into the trunk must go through a pull-request peer review process. Typically feature branches do not publish any artefacts or trigger deployments as these slow down the feedback process."),Object(o.b)("p",null,"The cadence of release branches should align with an individual\u2019s services release schedule. Some projects may only create release branches at the end of a sprint, whilst others might create several per-week."),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:n(179).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:n(180).default})),Object(o.b)("p",null,"Trunk-based development is a mindset more than a practice.  It forces the developers to think early on about how not to break the build, instead of waiting to think about this when merging the branch. Trunk-based development becomes more natural to adopt when you use feature flags in your continuous integration pipeline.  Feature flags is a technique that will help you integrate code into a shared repository at least once a day and ship it, even if you haven't finished the feature yet. You'll be able to deploy at any time, but defer the decision to release for another day.  Turn off the feature flag and let the team continue working with a stable version and a healthy build."),Object(o.b)("p",null,"Environments:"),Object(o.b)("p",null,"  Pull requests;"),Object(o.b)("p",null,"  All tests need to be passing prior to merging code;"),Object(o.b)("p",null,"  GitHub PR template needs to be completed as detailed as possible, including a link to the JIRA ticket of the work done"),Object(o.b)("p",null,"  There needs to be a minimum of 1 approver per PR prior to merging;"),Object(o.b)("p",null,"  ",Object(o.b)("img",{alt:"alt text",src:n(181).default})),Object(o.b)("p",null,"Continuous testing:"),Object(o.b)("p",null,"At Hackney, unit and integration tests must be run as part of the CI/CD pipeline at the point of:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Code committed to remote branch"),Object(o.b)("li",{parentName:"ol"},"Deployment to different environments")),Object(o.b)("p",null,"We use Test Driven Development (TDD) approach when writing code. Each project\u2019s test suite must include tests produced as part of TDD as well as integration tests."),Object(o.b)("p",null,"More on practices in Hackney for writing tests here: ","[Link TBC in API playbook]"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," APIs ")),Object(o.b)("p",null,"For APIs, we use docker-compose to build image(s) and run the test suite."),Object(o.b)("p",null,"  -For the purpose of end-to-end tests, we create a docker image of a database to run tests against"),Object(o.b)("p",null,"Continuous Integration and Deployment:"),Object(o.b)("p",null,"Once a pull request has been merged, it will trigger a CircleCI workflow to automatically deploy to Development, Staging and Production respectively."),Object(o.b)("p",null,"Note: Deployment to Production requires a manual approval step within CircleCI first."),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:n(182).default})),Object(o.b)("p",null,"Staging and Production workflow:"),Object(o.b)("p",null,"Merging into the \u2018master\u2019 branch automatically deploys to the staging environment. For production release, a manual approval stage in CircleCI is required."),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:n(183).default})),Object(o.b)("p",null,"Continuous monitoring:"),Object(o.b)("p",null,"AWS CloudWatch:"),Object(o.b)("p",null,"  -Used for Application monitoring\n-Using alarms for when errors occur\n-Using Canaries for up-time monitoring\n-Integrated with slack channel to get notifications when an alarm is triggered"),Object(o.b)("p",null,"More on monitoring can be found in our API Playbook ","[Link TBC]"),Object(o.b)("p",null,"AWS Cloudtrail:\n-Used to monitor activities within our AWS accounts"),Object(o.b)("p",null,"AWS Security Hub:\n-Using AWS Security Hub to ensure our accounts are safe and resources adhere to AWS best security practices\n-Alerts us when a security configuration rule compliance has changed"),Object(o.b)("p",null,"  Infrastructure as code (IaC)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"More on IaC in our API playbook here [Link TBC]]\n\nEach API is responsible for maintaining its own infrastructure.\n\nOur IaC deployment process is automated via our CI/CD pipeline.\n")),Object(o.b)("p",null,"Serverless framework:"),Object(o.b)("p",null,"  We use the serverless framework to help us deploy Lambda functions and related resources."),Object(o.b)("p",null,"  The serverless framework configuration is stored within a serverless.yml file and should be responsible for provisioning resources related directly to the Lambda function that is to be deployed."),Object(o.b)("p",null,"  API Gateway for exposing the APIs."),Object(o.b)("p",null,"Lambda IAM role:"),Object(o.b)("p",null,"  Although serverless allows for other AWS resources to be provisioned using IaC approach, we use Terraform for provisioning other resources, such as DMS (Data migration service) tasks, S3 buckets, etc."),Object(o.b)("p",null,"  Terraform:"),Object(o.b)("p",null,"  Used for provisioning all other AWS resources, apart from the Lambda related resources listed above."),Object(o.b)("p",null,"  Terraform Hackney Guide - Note:\nThis will be evolving from its current state as currently the Cloud Deployment team are producing more Terraform templates."),Object(o.b)("p",null,"Still to do:"),Object(o.b)("p",null,"  Define and implement\t DevSecOps practices"))}u.isMDXComponent=!0}}]);