(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},161:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data_migration-d99e1aff824dc152a3e74a2cdeb92f16.png"},162:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data2-95eb403cb5525375efea31272715cea1.png"},163:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data3-f9c9181447b7fa7ea9b1c5c53f6bf365.png"},164:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data4-da7082192e5e80119a19ddec3adf760a.png"},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(119)),o={id:"data_migration",title:"Setting Up DMS"},s={unversionedId:"data_migration",id:"data_migration",isDocsHomePage:!1,title:"Setting Up DMS",description:"Data migration using AWS DMS",source:"@site/docs/data_migration.md",slug:"/data_migration",permalink:"/home/data_migration",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/data_migration.md",version:"current",sidebar:"docs",previous:{title:"Creating users in PostgreSQL",permalink:"/home/postgresql"},next:{title:"Pipeline Implementation",permalink:"/home/pipeline_implementation"}},l=[{value:"Data migration using AWS DMS",id:"data-migration-using-aws-dms",children:[]},{value:"What is AWS DMS?",id:"what-is-aws-dms",children:[]},{value:"Which AWS DMS set up to use?",id:"which-aws-dms-set-up-to-use",children:[]},{value:"How to set up DMS",id:"how-to-set-up-dms",children:[]},{value:"Data migration using a data pipeline",id:"data-migration-using-a-data-pipeline",children:[]}],c={toc:l};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"data-migration-using-aws-dms"},"Data migration using AWS DMS"),Object(i.b)("h2",{id:"what-is-aws-dms"},"What is AWS DMS?"),Object(i.b)("p",null,"AWS Data Migration Service (DMS) is a service that allows us to migrate data between a source (in our case, on-premises database) and a target (in our case, Postgres database hosted in AWS)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," DMS supported replication types: ")),Object(i.b)("u",null," 1. Continuous replication (CDC) "),Object(i.b)("p",null,"  a. When we want to do a one-off migration of all data and then continuously capture new inserts, updates and deletes and reflect them in our target database"),Object(i.b)("u",null," 2. One-off data migration "),Object(i.b)("p",null,"  b. When the goal is to migrate all data from a source, and is expected that changes will not be captured and reflected"),Object(i.b)("h2",{id:"which-aws-dms-set-up-to-use"},"Which AWS DMS set up to use?"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  ",Object(i.b)("u",null," For continuous migration: ")," ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  CDC ")),Object(i.b)("p",null,"  a. CDC is a SQL server feature, available only on Enterprise and Developer editions"),Object(i.b)("p",null,"  b. It allows for changes to be captured (inserts/updates/deletes)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  Use case ")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"When the source database does not have primary keys and you want to migrate data continuously.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"   MS Replication ")),Object(i.b)("p",null,"  c. MS Replication is a SQL server feature available on all editions"),Object(i.b)("p",null,"  d. It creates a \u201cdistribution\u201d database and every time there is a change, it is captured and stored in the \u201cdistribution\u201d database"),Object(i.b)("p",null,"  e. DMS will then read from that database to reflect the changes in the target database"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  f.NB! ")," The sql user created must have ",Object(i.b)("strong",{parentName:"p"}," sysadmin ")," permissions to set up replication"),Object(i.b)("p",null,"  g. ",Object(i.b)("u",null," Additional notes: ")," Configuration on the source database is required (please see below section). Additionally, SQL servers DO NOT come with MS replication\nfeatures pre-installed, so the server might require a set up."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  Use cases ")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When you want to migrate data continuously")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When the SQL server is not Enterprise/Developer edition")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When the source database has tables, which make use of primary keys"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  For one-off set up ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No database configuration is required")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The sql user must have at least db_owner permissions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The replication runs ones and migrates the data specified")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"There are no subsequent runs of the migration task, unless triggered with other means"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  Use cases ")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When only a one-off migration is required")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When the underlying source database is a reporting server and there are no possible ways to capture updates. In this scenario, we need to daily run a one-off migration, after the reporting server was updated with the latest data"))),Object(i.b)("h2",{id:"how-to-set-up-dms"},"How to set up DMS"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Database set up  ")),Object(i.b)("p",null," DMS with SQL CDC"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    https://docs.google.com/document/d/1EaZ-a8ejQwWQ40OGDGobxhTqtxXvtX9Ydk5mTFASUMo/edit\n")),Object(i.b)("p",null,"DMS with MS Replication"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    https://docs.google.com/document/d/14kNirloRWXCnla08brXiTihCMIm24chygc1lGUjNVbE/edit?usp=sharing\n")),Object(i.b)("p",null,"AWS DMS set up via Terraform"),Object(i.b)("p",null,"Both DMS and Postgres can be created via Terraform."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," DMS ")),Object(i.b)("p",null,"Template repository and example usage:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    https://github.com/LBHackney-IT/aws-dms-terraform\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:a(161).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  NB: ")),Object(i.b)("p",null,"  a. Follow the example usage, which also demonstrates how to add table mappings (specifying which tables are to be replicated)"),Object(i.b)("p",null,"  b. The source DB server should be specified with IP and not the server name"),Object(i.b)("p",null,"  c. DMS instance should be in the VPC, where the VPN is set up to ensure communication to on-prem is possible"),Object(i.b)("p",null,"  d. ",Object(i.b)("u",null,"  Make sure your DMS instance\u2019s subnet group has only private subnets in it! ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  Postgres ")),Object(i.b)("p",null,"  Template repository and example usage:\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/aws-hackney-common-terraform/tree/master/modules/database/postgres"},"https://github.com/LBHackney-IT/aws-hackney-common-terraform/tree/master/modules/database/postgres")),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:a(162).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," NB: ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DMS does not support Postgres version 12, so use version 11 or older."),Object(i.b)("li",{parentName:"ul"},"Always store passwords in parameter store and do not hardcode them"),Object(i.b)("li",{parentName:"ul"},"\u201cMulti_az\u201d should be true for production databases"),Object(i.b)("li",{parentName:"ul"},"\u201csubnet_ids\u201d requires subnets in 2 different AZs. Make sure those are private subnets to ensure that the database is secure."),Object(i.b)("li",{parentName:"ul"},"Currently not terraformed: To enable traffic from DMS to your Postgres instance, ensure you add to the ingress rules of the database\u2019s security group all traffic   from DMS security group.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:a(163).default})),Object(i.b)("h2",{id:"data-migration-using-a-data-pipeline"},"Data migration using a data pipeline"),Object(i.b)("p",null,"  ",Object(i.b)("strong",{parentName:"p"},"    What is a data pipeline? ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  A data pipeline is an automated flow that gets data stored in one location (source) and uploads it to a target destination.\n")),Object(i.b)("p",null,"  ",Object(i.b)("strong",{parentName:"p"},"      Data pipeline - csv to Postgres ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  As of 26/06/2020, we have implemented one data pipeline.\n\n  The pipeline takes data uploaded in an S3 bucket in .csv format and uploads the data into a Postgres database.\n")),Object(i.b)("p",null,"  ",Object(i.b)("img",{alt:"alt text",src:a(164).default})))}b.isMDXComponent=!0}}]);