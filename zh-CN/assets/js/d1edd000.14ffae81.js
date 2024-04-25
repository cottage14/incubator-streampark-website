"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[7097],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),y=a,d=c["".concat(p,".").concat(y)]||c[y]||m[y]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},36348:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={},o=void 0,l={type:"mdx",permalink:"/zh-CN/download/release-note/2.1.3",source:"@site/src/pages/download/release-note/2.1.3.md",description:"Release Notes 2.1.3",frontMatter:{}},p=[{value:"Release Notes 2.1.3",id:"release-notes-213",level:2},{value:"Bugfix",id:"bugfix",level:3},{value:"Improvements",id:"improvements",level:3}],s={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"release-notes-213"},"Release Notes 2.1.3"),(0,a.yg)("div",{style:{height:"30px"}}),(0,a.yg)("p",null,"Apache StreamPark (incubating) 2.1.3 is a bug-fix release that addresses some CVEs and all known historical bugs. It is a relatively stable version, and users are recommended to upgrade."),(0,a.yg)("div",{style:{height:"30px"}}),(0,a.yg)("h3",{id:"bugfix"},"Bugfix"),(0,a.yg)("hr",null),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed CVE-2023-51686,CVE-2023-52290,CVE-2023-52291 security vulnerability"),(0,a.yg)("li",{parentName:"ul"},"Fixed SQL injection vulnerability"),(0,a.yg)("li",{parentName:"ul"},"Fixed bug in maven_wrapper validation"),(0,a.yg)("li",{parentName:"ul"},"Fixed bug causing repeated start due to job failure restart."),(0,a.yg)("li",{parentName:"ul"},"Fixed bug clusterId parameter to be set incorrectly when create job from copy(on k8s session mode)"),(0,a.yg)("li",{parentName:"ul"},"Fixed the bug where some fields failed to update during job editing"),(0,a.yg)("li",{parentName:"ul"},"Fixed bug caused by upgrading script 2.1.2"),(0,a.yg)("li",{parentName:"ul"})),(0,a.yg)("h3",{id:"improvements"},"Improvements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Improve MySQL init DDL compatibility issue"),(0,a.yg)("li",{parentName:"ul"},"Improve job submit and status monitoring(flink on k8s)"),(0,a.yg)("li",{parentName:"ul"},"Improve JVM parameter setting in startup scripts"),(0,a.yg)("li",{parentName:"ul"},"Improve job startup for specifying cp/sp interaction (manual or historical record selection)"),(0,a.yg)("li",{parentName:"ul"},"Frontend i18n improvement"),(0,a.yg)("li",{parentName:"ul"},"Add input validation for docker|email in system settings"),(0,a.yg)("li",{parentName:"ul"},"Improve job status update logic to avoid frequent database updates"),(0,a.yg)("li",{parentName:"ul"},"Improve parameters for job status monitoring thread pool.")))}c.isMDXComponent=!0}}]);