(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},176:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/docker1-4ed1ca685765838dc06a35f3da35f2ef.png"},177:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/docker2-be7272f3391aa5d9785daa00320b185d.png"},178:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/environment-5a9aa492a8745b72f03b1cea6d6ff878.png"},179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/composition-a6ab076e073eb83515883cdc9cab1a77.png"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(119)),i={id:"multiple_docker_containers",title:"Composing Your Application With Multiple Docker Containers"},c={unversionedId:"multiple_docker_containers",id:"multiple_docker_containers",isDocsHomePage:!1,title:"Composing Your Application With Multiple Docker Containers",description:"Purpose",source:"@site/docs/multiple_docker_containers.md",slug:"/multiple_docker_containers",permalink:"/API-Playbook/multiple_docker_containers",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/multiple_docker_containers.md",version:"current",sidebar:"docs",previous:{title:"Lambda Functions Use and Good Practice",permalink:"/API-Playbook/lambda_best_practices"},next:{title:"Alerting",permalink:"/API-Playbook/alerting"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Docker Tutorial",id:"docker-tutorial",children:[]},{value:"Composing Your Application",id:"composing-your-application",children:[]},{value:"Running Your Composition",id:"running-your-composition",children:[]},{value:"Cleaning Up",id:"cleaning-up",children:[]}],s={toc:l};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"purpose"},"Purpose"),Object(a.b)("p",null,"The purpose of this document is to outline how and when best to orchestrate the creation and linking of multiple containers using docker-compose"),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"You may already be aware that Docker is used extensively within HackIt when building APIs and services.",Object(a.b)("br",{parentName:"p"}),"\n","You may also already know how we would go about spinning up a container for an application.",Object(a.b)("br",{parentName:"p"}),"\n","For many of our use cases, spinning up the application in a container by itself is not sufficient.",Object(a.b)("br",{parentName:"p"}),"\n","The application may require access to other external resources such as a database or an API.\nIn order to do this there needs to be a way to spin up multiple containers and make them accessible to each other."),Object(a.b)("h2",{id:"docker-tutorial"},"Docker Tutorial"),Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Kz-tTwSePoI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(a.b)("p",null,"Here is where docker-compose comes in."),Object(a.b)("h2",{id:"composing-your-application"},"Composing Your Application"),Object(a.b)("p",null,"When you have an application in a docker container you can simply run the command docker run your-application to get it up and running.",Object(a.b)("br",{parentName:"p"}),"\n","However, by default this container won\u2019t be all you need to test an application.  It is likely that there would be additional resources, for example a database, that your application would need access to.\nIf you have a database image available you can spin this up and link it to your application using docker-compose."),Object(a.b)("p",null,"In your container project you will need the ",Object(a.b)("strong",{parentName:"p"}," Dockerfile ")," for each container in your project.\nYou will also need to have a ",Object(a.b)("strong",{parentName:"p"}," docker-compose.yml ")," file in your project where you will define all of the services that are required for your application."),Object(a.b)("p",null,"An example docker-compose file taken from our BaseAPI looks like the following:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"alt text",src:n(176).default}),"\n",Object(a.b)("img",{alt:"alt text",src:n(177).default})),Object(a.b)("p",null,"The following is a breakdown of the various aspects of the base api docker-compose file (you can visit this link for all of the available configuration items for version 3 of docker-compose):"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Version: "),"  The version of the docker-compose format being used."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Services: ")," These are the various containerised components of the application.\nFor example base-api is the section that describes the container that is created for the application itself while dev-database is the section that describes the container where the database will run.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"}," Image: "),"  The name that Docker will give to the image when it is built (this could alternatively be the tag of the image if a build step is configured).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"}," Build: ")," This provides the source  and context for the configuration items Docker needs to build the application image.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"}," Environment: "),"  Here you can specify any environment variables required for your application to run including database connection information.  This can also be supplied using environment variables specified in the env_file section.  It is strongly advised not to include environment variables within the docker-compose file itself outside of your development environment.  Instead, you can instruct Docker to get environment variables from the local environment where the container is being run.  For example to supply a connection string from your local environment the following configuration can be used."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",{alt:"alt text",src:n(178).default}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"}," Ports: ")," If you need to expose any ports outside the containerised environment you can specify them here with the container port being the port the application actually listens on in the container and the mapped port being the port you will use in your local environment."))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Links: "),"  Any related service that the main application would connect to can be spun up in parallel using these links."),Object(a.b)("h2",{id:"running-your-composition"},"Running Your Composition"),Object(a.b)("p",null," ",Object(a.b)("img",{alt:"alt text",src:n(179).default})),Object(a.b)("h2",{id:"cleaning-up"},"Cleaning Up"),Object(a.b)("p",null,"It is important to periodically clean up your docker image cache using docker system prune or by clearing down unused images from the Docker dashboard.",Object(a.b)("br",{parentName:"p"}),"\n","This will ensure that your computer doesn\u2019t grind to a halt from lack of resources."))}p.isMDXComponent=!0}}]);