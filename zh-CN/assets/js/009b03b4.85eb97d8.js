"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[4643],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(t),d=a,y=g["".concat(p,".").concat(d)]||g[d]||c[d]||l;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2552:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(58168),a=(t(96540),t(15680));const l={id:"version-upgrade",title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",sidebar_position:13},i=void 0,o={unversionedId:"user-guide/version-upgrade",id:"user-guide/version-upgrade",title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",description:"\u5347\u7ea7\u524d\u51c6\u5907",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/13-version-upgrade.md",sourceDirName:"user-guide",slug:"/user-guide/version-upgrade",permalink:"/zh-CN/docs/user-guide/version-upgrade",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/13-version-upgrade.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{id:"version-upgrade",title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/zh-CN/docs/user-guide/platformBasicUsage"},next:{title:"\u7f16\u7a0b\u6a21\u578b",permalink:"/zh-CN/docs/development/dev-model"}},p={},s=[{value:"\u5347\u7ea7\u524d\u51c6\u5907",id:"\u5347\u7ea7\u524d\u51c6\u5907",level:3},{value:"\u627e\u5230\u5347\u7ea7\u811a\u672c",id:"\u627e\u5230\u5347\u7ea7\u811a\u672c",level:3},{value:"\u6267\u884c\u5347\u7ea7\u811a\u672c",id:"\u6267\u884c\u5347\u7ea7\u811a\u672c",level:3},{value:"\u793a\u4f8b\uff1a\u4ece 2.0.0 \u5347\u7ea7\u5230 2.1.2",id:"\u793a\u4f8b\u4ece-200-\u5347\u7ea7\u5230-212",level:4},{value:"\u9a8c\u8bc1\u5347\u7ea7",id:"\u9a8c\u8bc1\u5347\u7ea7",level:3},{value:"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e",id:"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e",level:3},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:3}],u={toc:s},g="wrapper";function c(e){let{components:r,...t}=e;return(0,a.yg)(g,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u5347\u7ea7\u524d\u51c6\u5907"},"\u5347\u7ea7\u524d\u51c6\u5907"),(0,a.yg)("p",null,"\u5728\u5f00\u59cb\u5347\u7ea7\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u5b8c\u6210\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\uff0c\u4ee5\u786e\u4fdd\u5347\u7ea7\u8fc7\u7a0b\u987a\u5229\u8fdb\u884c\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u5907\u4efd\u6570\u636e\u5e93"),"\uff1a\u975e\u5e38\u91cd\u8981\u7684\u4e00\u6b65\uff0c\u786e\u4fdd\u6709\u5b8c\u6574\u7684\u6570\u636e\u5e93\u5907\u4efd\uff0c\u4ee5\u4fbf\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\u65f6\u53ef\u4ee5\u6062\u590d\u5230\u5347\u7ea7\u524d\u7684\u72b6\u6001\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u68c0\u67e5\u7248\u672c\u517c\u5bb9\u6027"),"\uff1a\u786e\u8ba4\u5f53\u524d\u7684\u7248\u672c\u53f7\uff0c\u5e76\u786e\u4fdd\u5347\u7ea7\u8def\u5f84\u4e0e\u60a8\u7684\u7248\u672c\u517c\u5bb9\u3002\u672c\u6307\u5357\u9002\u7528\u4e8e\u4ece ",(0,a.yg)("inlineCode",{parentName:"li"},"1.2.3")," \u7248\u672c\u5f00\u59cb\u7684\u5347\u7ea7\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u786e\u8ba4\u73af\u5883\u8981\u6c42"),"\uff1a\u786e\u4fdd\u60a8\u7684\u670d\u52a1\u5668\u6ee1\u8db3\u65b0\u7248\u672c\u7684\u7cfb\u7edf\u8981\u6c42\u3002")),(0,a.yg)("h3",{id:"\u627e\u5230\u5347\u7ea7\u811a\u672c"},"\u627e\u5230\u5347\u7ea7\u811a\u672c"),(0,a.yg)("p",null,"\u5347\u7ea7\u811a\u672c\u4f4d\u4e8e ",(0,a.yg)("inlineCode",{parentName:"p"},"script/upgrade")," \u76ee\u5f55\u3002\u60a8\u9700\u8981\u6839\u636e\u5f53\u524d\u7248\u672c\u548c\u76ee\u6807\u7248\u672c\u9009\u62e9\u6b63\u786e\u7684\u811a\u672c\u8fdb\u884c\u5347\u7ea7\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-plaintext"},"script\n\u2514\u2500\u2500 upgrade\n      \u251c\u2500\u2500 mysql\n      |     \u251c\u2500\u2500 1.2.3.sql\n      |     \u251c\u2500\u2500 2.0.0.sql\n      |     \u251c\u2500\u2500 2.1.0.sql\n      |     \u2514\u2500\u2500 2.1.2.sql\n      \u2514\u2500\u2500 pgsql\n            \u251c\u2500\u2500 2.1.0.sql\n            \u251c\u2500\u2500 2.1.2.sql\n            \u2514\u2500\u2500 2.1.3.sql\n")),(0,a.yg)("h3",{id:"\u6267\u884c\u5347\u7ea7\u811a\u672c"},"\u6267\u884c\u5347\u7ea7\u811a\u672c"),(0,a.yg)("p",null,"\u4f7f\u7528\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\uff08\u5982 MySQL Workbench\u3001pgAdmin\u3001JetBrains dataGrip\uff09\u8fde\u63a5\u5230\u6570\u636e\u5e93\uff0c\u5e76\u4f9d\u6b21\u6267\u884c\u5347\u7ea7\u811a\u672c\u3002"),(0,a.yg)("h4",{id:"\u793a\u4f8b\u4ece-200-\u5347\u7ea7\u5230-212"},"\u793a\u4f8b\uff1a\u4ece 2.0.0 \u5347\u7ea7\u5230 2.1.2"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u5347\u7ea7\u5230 2.1.0"),"\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# \u547d\u4ee4\u884c\u6216\u7528\u60a8\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\u6267\u884c 2.1.2.sql \u811a\u672c\nmysql -h 127.0.0.1 -P 3306 -u root --password=streampark streampark < ./script/upgrade/mysql/2.1.0.sql\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u5347\u7ea7\u5230 2.1.2"),"\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# \u63a5\u7740\uff0c\u6267\u884c 2.1.2.sql \u811a\u672c\u5b8c\u6210\u5347\u7ea7\nmysql -h 127.0.0.1 -P 3306 -u root --password=streampark streampark < ./script/upgrade/mysql/2.1.2.sql\n")),(0,a.yg)("h3",{id:"\u9a8c\u8bc1\u5347\u7ea7"},"\u9a8c\u8bc1\u5347\u7ea7"),(0,a.yg)("p",null,"\u5347\u7ea7\u5b8c\u6210\u540e\uff0c\u767b\u5f55\u5230\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5e76\u68c0\u67e5\u662f\u5426\u4e00\u5207\u6b63\u5e38\u8fd0\u884c\u3002\u60a8\u53ef\u4ee5\u67e5\u770b\u5e94\u7528\u65e5\u5fd7\u6216\u68c0\u67e5\u65b0\u7248\u672c\u7684\u529f\u80fd\u662f\u5426\u6309\u9884\u671f\u5de5\u4f5c\u3002"),(0,a.yg)("h3",{id:"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e"},"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e"),(0,a.yg)("p",null,"\u5982\u679c\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u53c2\u8003\u5b98\u65b9\u6587\u6863"),"\uff1a\u67e5\u627e\u53ef\u80fd\u7684\u9519\u8bef\u6d88\u606f\u548c\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u6062\u590d\u5907\u4efd"),"\uff1a\u5982\u679c\u5347\u7ea7\u5931\u8d25\uff0c\u4f7f\u7528\u4e4b\u524d\u5907\u4efd\u7684\u6570\u636e\u5e93\u6062\u590d\u5230\u5347\u7ea7\u524d\u7684\u72b6\u6001\u3002"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u5bfb\u6c42\u5e2e\u52a9"),"\uff1a\u5982\u679c\u95ee\u9898\u4ecd\u7136\u65e0\u6cd5\u89e3\u51b3\uff0c\u60a8\u53ef\u4ee5\u5728 Apache StreamPark \u7684\u5b98\u65b9\u8bba\u575b\u6216\u793e\u533a\u6c42\u52a9\u3002")),(0,a.yg)("h3",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,a.yg)("p",null,"\u5347\u7ea7\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u6839\u636e\u65b0\u7248\u672c\u7684\u7279\u6027\u548c\u6539\u8fdb\uff0c\u8c03\u6574\u548c\u4f18\u5316\u60a8\u7684\u5e94\u7528\u914d\u7f6e\u548c\u6027\u80fd\u8bbe\u7f6e\u3002"))}c.isMDXComponent=!0}}]);