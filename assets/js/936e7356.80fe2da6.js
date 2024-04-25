"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[1151],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),g=n,h=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},46015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const o={slug:"streampark-usercase-bondex-with-paimon",title:"Based on Apache Paimon + Apache StreamPark\u2122's Streaming Data Warehouse Practice by Bondex",tags:["StreamPark","Production Practice","paimon","streaming-warehouse"]},i=void 0,s={permalink:"/blog/streampark-usercase-bondex-with-paimon",editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/blog/3-streampark-usercase-bondex-paimon.md",source:"@site/blog/3-streampark-usercase-bondex-paimon.md",title:"Based on Apache Paimon + Apache StreamPark\u2122's Streaming Data Warehouse Practice by Bondex",description:"Foreword: This article mainly introduces the implementation of a streaming data warehouse by Bondex, a supply chain logistics service provider, in the process of digital transformation using the Paimon + StreamPark platform. We provide an easy-to-follow operational manual with the Apache StreamPark integrated stream-batch platform to help users submit Flink tasks and quickly master the use of Paimon.",date:"2024-04-25T08:49:45.000Z",formattedDate:"April 25, 2024",tags:[{label:"StreamPark",permalink:"/blog/tags/stream-park"},{label:"Production Practice",permalink:"/blog/tags/production-practice"},{label:"paimon",permalink:"/blog/tags/paimon"},{label:"streaming-warehouse",permalink:"/blog/tags/streaming-warehouse"}],readingTime:27.235,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"streampark-usercase-bondex-with-paimon",title:"Based on Apache Paimon + Apache StreamPark\u2122's Streaming Data Warehouse Practice by Bondex",tags:["StreamPark","Production Practice","paimon","streaming-warehouse"]},prevItem:{title:"China Union's Flink Real-Time Computing Platform Ops Practice",permalink:"/blog/streampark-usercase-chinaunion"},nextItem:{title:"Apache StreamPark\u2122 in the Large-Scale Production Practice at Shunwang Technology",permalink:"/blog/streampark-usercase-shunwang"}},l={authorsImageUrls:[]},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.yg)(m,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(5569).A,width:"1080",height:"460"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Foreword: "),"This article mainly introduces the implementation of a streaming data warehouse by Bondex, a supply chain logistics service provider, in the process of digital transformation using the Paimon + StreamPark platform. We provide an easy-to-follow operational manual with the Apache StreamPark integrated stream-batch platform to help users submit Flink tasks and quickly master the use of Paimon."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Introduction to Company Business"),(0,n.yg)("li",{parentName:"ul"},"Pain Points and Selection in Big Data Technology"),(0,n.yg)("li",{parentName:"ul"},"Production Practice"),(0,n.yg)("li",{parentName:"ul"},"Troubleshooting Analysis"),(0,n.yg)("li",{parentName:"ul"},"Future Planning")))}u.isMDXComponent=!0},5569:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Bondex-b9280a2451e6984d91f7747acaa10b97.png"}}]);