(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{129:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return a?r.a.createElement(d,s(s({ref:t},c),{},{components:a})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(129)),o={id:"pagination",title:"Pagination"},s={unversionedId:"pagination",id:"pagination",isDocsHomePage:!1,title:"Pagination",description:"MUST Support Pagination",source:"@site/docs/pagination.md",slug:"/pagination",permalink:"/API-Playbook/pagination",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/pagination.md",version:"current",sidebar:"docs",previous:{title:"Resources",permalink:"/API-Playbook/resources"},next:{title:"Data Formats",permalink:"/API-Playbook/data-formats"}},p=[{value:"MUST Support Pagination",id:"must-support-pagination",children:[]},{value:"SHOULD Assess whether cursor or offset based pagination is most suitable",id:"should-assess-whether-cursor-or-offset-based-pagination-is-most-suitable",children:[]}],c={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"must-support-pagination"},"MUST Support Pagination"),Object(i.b)("p",null,"Access to lists of data items must support pagination to protect the service against overload as well as for best client side iteration and batch processing experience. This holds true for all lists that are (potentially) larger than just a few hundred entries."),Object(i.b)("p",null,"There are two well known page iteration techniques:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://developer.infoconnect.com/paging-results"},"Offset/Limit-based pagination"),": numeric offset identifies the first page entry")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://dev.twitter.com/overview/api/cursoring"},"Cursor/Limit-based")," \u2014 aka key-based \u2014 pagination: a unique key element identifies the first page entry (see also ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api/using-graph-api/v2.4#paging"},"Facebook\u2019s guide"),")"))),Object(i.b)("p",null,"The technical conception of pagination should also consider user experience related issues. As mentioned in this\n",Object(i.b)("a",{parentName:"p",href:"https://www.smashingmagazine.com/2016/03/pagination-infinite-scrolling-load-more-buttons/"},"article"),", jumping to a specific page is far less used than navigation via ",Object(i.b)("inlineCode",{parentName:"p"},"next"),"/",Object(i.b)("inlineCode",{parentName:"p"},"prev")," page links. This favours cursor-based over offset-based pagination."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," To provide a consistent look and feel of pagination patterns, you must stick to the ",Object(i.b)("a",{parentName:"p",href:"/API-Playbook/naming_conventions#must-stick-to-conventional-query-parameters"},"common query parameter names"),"."),Object(i.b)("h2",{id:"should-assess-whether-cursor-or-offset-based-pagination-is-most-suitable"},"SHOULD Assess whether cursor or offset based pagination is most suitable"),Object(i.b)("p",null,"Cursor-based pagination is usually better and more efficient when compared to offset-based pagination. Especially when it comes to high-data volumes and / or storage in NoSQL databases. However, cursor based pagination can also be harder to use as an API consumer."),Object(i.b)("p",null,"Before choosing cursor-based pagination, consider the following trade-offs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Usability/framework support:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Offset / limit based pagination is more known than cursor-based pagination, so it has more framework support and is easier to use for API clients"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use case: Jump to a certain page"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If jumping to a particular page in a range (e.g., 51 of 100) is really a required use case, cursor-based navigation is not feasible"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Variability of data may lead to anomalies in result pages"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Offset-based pagination may create duplicates or lead to missing entries if rows are inserted or deleted between two subsequent paging requests.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"When using cursor-based pagination, paging cannot continue when the cursor entry has been deleted while fetching two pages")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Performance considerations - efficient server-side processing using offset-based pagination is hardly feasible for:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Higher data list volumes, especially if they do not reside in the database\u2019s main memory")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Sharded or NoSQL databases")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Cursor-based navigation may not work if you need the total count of results and / or backward iteration support"))),Object(i.b)("p",null,"Further reading:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://dev.twitter.com/rest/public/timelines"},"Twitter"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"http://use-the-index-luke.com/no-offset"},"Use the Index, Luke"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://www.citusdata.com/blog/1872-joe-nelson/409-five-ways-paginate-postgres-basic-exotic"},"Paging in PostgreSQL")))))}l.isMDXComponent=!0}}]);