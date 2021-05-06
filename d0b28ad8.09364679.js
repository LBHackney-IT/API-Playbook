(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(127)),a={id:"deployment_pipeline",title:"Deployment Pipeline"},l={unversionedId:"deployment_pipeline",id:"deployment_pipeline",isDocsHomePage:!1,title:"Deployment Pipeline",description:"Introduction",source:"@site/docs/deployment_pipeline.md",slug:"/deployment_pipeline",permalink:"/API-Playbook/deployment_pipeline",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/deployment_pipeline.md",version:"current",sidebar:"docs",previous:{title:"Branching Strategy",permalink:"/API-Playbook/branching_strategy"},next:{title:"Infrastucture as Code",permalink:"/API-Playbook/infrastructure"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Video Tutorial",id:"video-tutorial",children:[]},{value:"CI/CD",id:"cicd",children:[{value:"Continuous testing",id:"continuous-testing",children:[]}]},{value:"Environments",id:"environments",children:[{value:"Development",id:"development",children:[]},{value:"Staging and Production",id:"staging-and-production",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"A Deployment pipeline is the process of taking code from a version control repo, such as Github, and releasing a version or the master branch to our deployment environments in an automated fashion."),Object(i.b)("h2",{id:"video-tutorial"},"Video Tutorial"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," For an overview of our Deployment Pipeline setup using Circle CI, please watch our short video tutorial: ")),Object(i.b)("figure",{class:"video-container"},Object(i.b)("iframe",{width:"100%",src:"https://www.youtube.com/embed/X68e_wdII2c",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("h2",{id:"cicd"},"CI/CD"),Object(i.b)("p",null,"We use CI/CD in Hackney as an efficient way to build, test and deploy new code.\nCI/CD is short for ",Object(i.b)("strong",{parentName:"p"}," Continuous Integration and Continuous Delivery/Deployment ")," ."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," CI/CD works in conjunction with the following processes: ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Version control (branches, commits, merges)"),Object(i.b)("li",{parentName:"ul"},"Build automation/continuous integration"),Object(i.b)("li",{parentName:"ul"},"Test automation"),Object(i.b)("li",{parentName:"ul"},"Deploy automation")),Object(i.b)("p",null,"We use a combination of software functions in Github and Circle CI, configured via a YAML file to fully automate environment deployments. Our deployments will usually support a ",Object(i.b)("strong",{parentName:"p"},"development"),", ",Object(i.b)("strong",{parentName:"p"},"staging"),", and ",Object(i.b)("strong",{parentName:"p"},"production")," environment."),Object(i.b)("p",null,"The CI/CD YAML configuration is stored in a file in the ",Object(i.b)("inlineCode",{parentName:"p"},".circleci")," folder. The YAML configuration contains all the steps which will be carried out in Circle CI as part of the deployment."),Object(i.b)("h3",{id:"continuous-testing"},"Continuous testing"),Object(i.b)("p",null,"Unit and integration tests must be run as part of the CI/CD pipeline at the point of:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Code committed to remote branch"),Object(i.b)("li",{parentName:"ol"},"Deployment to different environments")),Object(i.b)("p",null,"We use the Test-Driven Development (TDD) approach when writing code."),Object(i.b)("p",null,"Each project\u2019s test suite must include units tests produced as part of TDD as well as integration tests."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," More on practices in Hackney for writing tests here: ",Object(i.b)("a",{parentName:"strong",href:"/tdd"},"TDD Practices")," ")),Object(i.b)("h2",{id:"environments"},"Environments"),Object(i.b)("h3",{id:"development"},"Development"),Object(i.b)("p",null,"The deployment process is initiated via a push to a feature branch in Github. All branch pushes are built and code tests are run. Branches with failing tests or builds cannot be merged into the master branch which is used for deployments."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Tests for code pushes",src:n(190).default}),"\n",Object(i.b)("em",{parentName:"p"},"Diagram of the process that happens when pushing code to GitHub")),Object(i.b)("h4",{id:"pull-requests"},"Pull requests"),Object(i.b)("p",null,"Before a feature branch can be merged into development, after a successful build and test, it is marked for code review via a PR (Pull Request) in Github. You can use the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/lbh-base-api/blob/master/pull_request_template.md"},"Base API PR template"),", which needs to be completed with as much detail as possible, including a link to the JIRA ticket of the work done. There needs to be a minimum of 1 approver per PR prior to merging. An approved and merged PR will then trigger a CircleCI workflow to automatically deploy to the Development enviroment."),Object(i.b)("h4",{id:"workflow"},"Workflow"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Development deployment workflow",src:n(191).default}),"\n",Object(i.b)("em",{parentName:"p"},"Merging into a \u2018development\u2019 branch triggers the \u2018development deployment\u2019 workflow")),Object(i.b)("p",null,"The first steps for a deployment are usually the code formatting check, code build and test, deployment software tools installation, assignment of necessary security roles for deployments to AWS Lambda."),Object(i.b)("p",null,"The successful completion of all of these steps will allow automated code deployment to the development environments."),Object(i.b)("h3",{id:"staging-and-production"},"Staging and Production"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Staging &amp; Prod Workflow",src:n(192).default}),"\n",Object(i.b)("em",{parentName:"p"},"Merging into the \u2018master\u2019 branch automatically deploys to the staging environment")),Object(i.b)("p",null,"In order to deploy to staging and production environments, manual approval in Circle CI is required as the final step."),Object(i.b)("p",null,Object(i.b)("img",{alt:"CircleCI Workflow",src:n(193).default}),"\n",Object(i.b)("em",{parentName:"p"},"The CircleCI workflow")),Object(i.b)("p",null,"The automation of the deployment to different environments gives flexibility in making small changes to the code and testing of features before deployment to a production environment."),Object(i.b)("p",null,"Deployment automation means we decrease the possibility of human error when releasing new versions of code to deployment environments."))}p.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},190:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pull_requests-7e9dca0fa61d11738541f59ce133544a.png"},191:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dev_workflow-3486433985b9ce4751a9b48d1ee27c84.png"},192:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/staging_workflow-01eb8ff54bdfa470e72ab8960692b7a2.png"},193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pull_request2-972976954fed4ea3f702df1a3846d8ae.png"}}]);