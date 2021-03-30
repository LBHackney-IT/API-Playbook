(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(113)),i={id:"infrastructure",title:"Infrastucture as Code"},c={unversionedId:"infrastructure",id:"infrastructure",isDocsHomePage:!1,title:"Infrastucture as Code",description:"* What to cover: *",source:"@site/docs/infrastructure.md",slug:"/infrastructure",permalink:"/API-Playbook/infrastructure",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/infrastructure.md",version:"current",sidebar:"docs",previous:{title:"Deployment Pipeline",permalink:"/API-Playbook/deployment_pipeline"},next:{title:"AWS Lambda and when to use",permalink:"/API-Playbook/aws_lambda"}},s=[{value:"Terraform",id:"terraform",children:[]},{value:"HackIT Infrastructure as code",id:"hackit-infrastructure-as-code",children:[]},{value:"Terraform",id:"terraform-1",children:[]},{value:"What is a Terraform state file?",id:"what-is-a-terraform-state-file",children:[]},{value:"HackIT Terraform templates",id:"hackit-terraform-templates",children:[]},{value:"Common layer infrastructure",id:"common-layer-infrastructure",children:[]},{value:"Components per service layer infrastructure",id:"components-per-service-layer-infrastructure",children:[]},{value:"DMS Terraform",id:"dms-terraform",children:[]},{value:"Lambda APIs deployment",id:"lambda-apis-deployment",children:[]},{value:"Deployment per environment for APIs/apps",id:"deployment-per-environment-for-apisapps",children:[]},{value:"Deployment using CircleCI",id:"deployment-using-circleci",children:[]},{value:"How to apply Terraform manually",id:"how-to-apply-terraform-manually",children:[]},{value:"How to find what has been applied in our AWS accounts (non API specific Terraform)",id:"how-to-find-what-has-been-applied-in-our-aws-accounts-non-api-specific-terraform",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," What to cover: ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," ",Object(o.b)("u",null," Quick overview of what infrastructure as code means done "),"  ")),Object(o.b)("h2",{id:"terraform"},"Terraform"),Object(o.b)("p",null,"a.Links to existing guides/tutorials done"),Object(o.b)("p",null,"b.What goes in the main.tf (e.g. state file, provider, etc)"),Object(o.b)("p",null,"c.Introduction to LBH templates done"),Object(o.b)("p",null,"d.Deployment per environment (describe folder structure and the use of each subfolder/main.tf) done"),Object(o.b)("p",null,"e.Deployment via CircleCI (for API related resources) done"),Object(o.b)("p",null,"f.How to deploy terraform manually (not recommended)"),Object(o.b)("p",null,"g.Cross check spreadsheet with IP ranges used and available for network setup"),Object(o.b)("p",null,"h.Links to GitHub existing terraform templates?"),Object(o.b)("p",null,"  i. Common terraform done"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"    1. Account network setup\n\n    2. DB set up\n")),Object(o.b)("p",null,"  ii. DMS repo done"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"    https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit\n")),Object(o.b)("h2",{id:"hackit-infrastructure-as-code"},"HackIT Infrastructure as code"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," ",Object(o.b)("u",null," What is infrastructure as code (IaC)? ")," ")),Object(o.b)("p",null,"Infrastructure as code is the approach used within HackIT to manage and provision cloud resources with the use of scripted configuration files. It allows for easy maintenance and creation of the different cloud resources for large scale systems in a collaborative manner."),Object(o.b)("p",null,"When using infrastructure-as-code approach, any resources created have their state recorded within state files. Those files will be used by the tool used to manage the infrastructure as a comparison point whenever new resources are added or existing ones are amended."),Object(o.b)("p",null,"IaC is important as it allows for cloud infrastructure to be provisioned in a quick manner and it provides a code reference for the resources created and the configuration used to do so."),Object(o.b)("p",null,"For example, if a resource is accidentally terminated, the IaC can be used to re-provision that machine in exactly the configuration as before. Whereas, with manual provisioning, a developer would need to remember (or consult an external source for) the configuration of the resource, and then take the time to manually reconfigure that within the environment."),Object(o.b)("h2",{id:"terraform-1"},"Terraform"),Object(o.b)("p",null,"For more details, please read our HackIT Terraform Guide, containing all details of what Terraform is, how to use it, how we use Terraform and how to use our Terraform templates, including deployment steps:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit?usp=sharing\n")),Object(o.b)("p",null,"Video, providing an overview of Terraform and how we use it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      https://drive.google.com/file/d/1thdyJ6f7vHIwJsaK2-kAe4o-bEv45oJK/view\n")),Object(o.b)("p",null,"We use Terraform as our infrastructure-as-code tool - it is provider agnostic and makes use of HashiCorp Configuration Language (HCL)."),Object(o.b)("h2",{id:"what-is-a-terraform-state-file"},"What is a Terraform state file?"),Object(o.b)("p",null,"A Terraform state file stores the state of the infrastructure at the point of you applying it - this is the way Terraform knows what resources were created (via the given Terraform configuration). When an update to a resource has happened, Terraform will detect the difference between the state and the update and will change the resource (if you perform the \u201capply\u201d action)."),Object(o.b)("p",null,"If a new AWS resource is created not via your Terraform file, the state will not be aware of it. This means that resources created via separate Terraform files are independent of each other. If you destroy infrastructure via Terraform, it will not affect any of the other AWS resources not created by your Terraform file and state."),Object(o.b)("h2",{id:"hackit-terraform-templates"},"HackIT Terraform templates"),Object(o.b)("p",null,"We have three repositories with terraform templates. We use those for all the AWS resources we have identified are required by more than one service. These templates allow developers to simply provide configuration values for their particular instances, based on existing templates."),Object(o.b)("h2",{id:"common-layer-infrastructure"},"Common layer infrastructure"),Object(o.b)("p",null,"The \u2018common layer\u2019 is the infrastructure required to be set up for each account as \u201cbase\u201d infrastructure, including networking, load balancers, database (Postgres, DocumentDB)  and ECS clusters."),Object(o.b)("p",null,"  GitHub repository:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      https://github.com/LBHackney-IT/aws-hackney-common-terraform\n")),Object(o.b)("p",null,"  Detailed guide on how to use it, including screenshots and step-by-step instructions:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit#heading=h.553ntygln9sl\n")),Object(o.b)("h2",{id:"components-per-service-layer-infrastructure"},"Components per service layer infrastructure"),Object(o.b)("p",null,"  The components per service layer is all cloud resources that need to be created for any new Fargate/EC2 hosted API/app that is to be deployed."),Object(o.b)("p",null,"  For example, the template will create an ECS service, ECR repo, load balancer listener, security group and target group from developer supplied input values.. Those resources will be solely used for the API/app that to be deployed. They are independent of other APIs/apps and if they are destroyed or modified, they will not affect resources of any other API/app running."),Object(o.b)("p",null,"  GitHub repository:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      https://github.com/LBHackney-IT/aws-hackney-components-per-service-terraform\n")),Object(o.b)("p",null,"  Detailed guide on how to use it, including screenshots and step-by-step instructions:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit#heading=h.bbczall7icfy\n")),Object(o.b)("h2",{id:"dms-terraform"},"DMS Terraform"),Object(o.b)("p",null,"DMS is used by many of the platform APIs that require a data migration task and instance to be set up so data can be migrated from on-premise to our cloud environment."),Object(o.b)("p",null,"The template includes set up for both:"),Object(o.b)("p",null,"DMS task, when there is an existing DMS instance"),Object(o.b)("p",null,"DMS task and instance provisioning (full set up)"),Object(o.b)("p",null,"How to use notes, including example usage file can be found here:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"        https://github.com/LBHackney-IT/aws-dms-terraform\n")),Object(o.b)("h2",{id:"lambda-apis-deployment"},"Lambda APIs deployment"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," ",Object(o.b)("u",null," More on Lambda APIs ")," ")),Object(o.b)("p",null,"For any APIs that we have chosen Lambda as a serverless deployment option, we use Serverless as a way to provision the necessary resources"),Object(o.b)("p",null,"Lambda functions"),Object(o.b)("p",null,"Cloud watch logs"),Object(o.b)("p",null,"IAM roles"),Object(o.b)("p",null,"API Gateway, including usage plan and keys"),Object(o.b)("h2",{id:"deployment-per-environment-for-apisapps"},"Deployment per environment for APIs/apps"),Object(o.b)("p",null,"Each API/app is to maintain its own infrastructure. This is achieved by adding the Terraform files to the respective API/app repository."),Object(o.b)("p",null,"To support deployment per environment in multiple AWS accounts, the following folder structure has been introduced:"),Object(o.b)("p",null,"API/app repo"),Object(o.b)("p",null,"terraform"),Object(o.b)("p",null,"development"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"- main.tf\n")),Object(o.b)("p",null,"staging"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"- main.tf\n")),Object(o.b)("p",null,"production"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"- main.tf\n")),Object(o.b)("p",null,"  In this way, we have individual Terraform files for each AWS account (environment) we are deploying, ensuring that separate states and configurations are maintained."),Object(o.b)("h2",{id:"deployment-using-circleci"},"Deployment using CircleCI"),Object(o.b)("p",null,"The existing CircleCI pipeline has been set to generate AWS credentials per environment (account) based on the pipeline workflow step. For each account we deploy to, the pipeline is configured to look at the respective folder path\n(e.g. terraform/development/main.tf)."),Object(o.b)("p",null,"Each time a deployment occurs, terraform initializes the modules specified within the given main.tf and runs \u201capply\u201d."),Object(o.b)("p",null,"Note: the terraform apply -auto-approve is a command used to force apply (without being presented a confirmation question), which is required to achieve automation."),Object(o.b)("p",null,"More details can be found here:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit#heading=h.1q32ztqxg199\n")),Object(o.b)("h2",{id:"how-to-apply-terraform-manually"},"How to apply Terraform manually"),Object(o.b)("p",null,"  In some cases, we don\u2019t have a pipeline set up to automatically apply the Terraform configuration for us.\nIn this case, we need to run \u201capply\u201d manually."),Object(o.b)("p",null,"For example, our individual AWS account network set up is currently applied manually with no pipeline. In comparison, all Terraform resources maintained by the individual APIs/apps are applied using a CI/CD pipeline."),Object(o.b)("p",null,"More information and guide can be found here:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"    https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit#heading=h.pdxhd5fuwdpm\n")),Object(o.b)("h2",{id:"how-to-find-what-has-been-applied-in-our-aws-accounts-non-api-specific-terraform"},"How to find what has been applied in our AWS accounts (non API specific Terraform)"),Object(o.b)("p",null,"The networking set up and other shared resources have been created via our \u2018common Terraform\u2019 template repository. Every time someone makes a change a new PR needs to be created against the following repository:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"        https://github.com/LBHackney-IT/aws-hackney-common-terraform/tree/master/applied_terraform\n")),Object(o.b)("p",null,"This ensures that although there is a state file, developers will be able to see the configuration files of what has been applied and make changes to it, while being aware of what has previously been provisioned."))}u.isMDXComponent=!0},113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);