"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[3491],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(58168),r=n(96540),o=n(20053),l=n(23104),i=n(56347),s=n(57485),c=n(31682),u=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function S(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(S,(0,a.A)({},e,t)))}function k(e){const t=(0,f.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},99243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(11470),l=n(19365);const i={id:"HTTP-Connector",title:"HTTP Connector",original:!0,sidebar_position:7},s=void 0,c={unversionedId:"connector/HTTP-Connector",id:"connector/HTTP-Connector",title:"HTTP Connector",description:"\u4e00\u4e9b\u540e\u53f0\u670d\u52a1\u901a\u8fc7 HTTP \u8bf7\u6c42\u63a5\u6536\u6570\u636e\uff0c\u8fd9\u79cd\u573a\u666f\u4e0b Apache Flink \u53ef\u4ee5\u901a\u8fc7 HTTP \u8bf7\u6c42\u5199\u5165\u7ed3\u679c\u6570\u636e\uff0c\u76ee\u524d Apache Flink \u5b98\u65b9\u672a\u63d0\u4f9b\u901a\u8fc7 HTTP \u8bf7\u6c42\u5199\u5165",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector/7-http.md",sourceDirName:"connector",slug:"/connector/HTTP-Connector",permalink:"/zh-CN/docs/connector/HTTP-Connector",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector/7-http.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"HTTP-Connector",title:"HTTP Connector",original:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Apache HBase Connector",permalink:"/zh-CN/docs/connector/HBase-Connector"},next:{title:"Redis Connector",permalink:"/zh-CN/docs/connector/Redis-Connector"}},u={},p=[{value:"HTTP \u5f02\u6b65\u5199\u5165",id:"http-\u5f02\u6b65\u5199\u5165",level:2},{value:"Apache StreamPark\u2122 \u65b9\u5f0f\u5199\u5165",id:"apache-streampark-\u65b9\u5f0f\u5199\u5165",level:2},{value:"http\u5f02\u6b65\u5199\u5165\u652f\u6301\u7c7b\u578b",id:"http\u5f02\u6b65\u5199\u5165\u652f\u6301\u7c7b\u578b",level:3},{value:"http\u5f02\u6b65\u5199\u5165\u914d\u7f6e\u53c2\u6570\u5217\u8868",id:"http\u5f02\u6b65\u5199\u5165\u914d\u7f6e\u53c2\u6570\u5217\u8868",level:3},{value:"http\u5f02\u6b65\u5199\u5165\u6570\u636e",id:"http\u5f02\u6b65\u5199\u5165\u6570\u636e",level:3},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4e00\u4e9b\u540e\u53f0\u670d\u52a1\u901a\u8fc7 HTTP \u8bf7\u6c42\u63a5\u6536\u6570\u636e\uff0c\u8fd9\u79cd\u573a\u666f\u4e0b Apache Flink \u53ef\u4ee5\u901a\u8fc7 HTTP \u8bf7\u6c42\u5199\u5165\u7ed3\u679c\u6570\u636e\uff0c\u76ee\u524d Apache Flink \u5b98\u65b9\u672a\u63d0\u4f9b\u901a\u8fc7 HTTP \u8bf7\u6c42\u5199\u5165\n\u6570\u636e\u7684\u8fde\u63a5\u5668\u3002Apache StreamPark \u57fa\u4e8e asynchttpclient \u5c01\u88c5\u4e86 HttpSink \u5f02\u6b65\u5b9e\u65f6\u5199\u5165\u6570\u636e\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"HttpSink")," \u5199\u5165\u4e0d\u652f\u6301\u4e8b\u52a1\uff0c\u5411\u76ee\u6807\u670d\u52a1\u5199\u5165\u6570\u636e\u53ef\u63d0\u4f9b\u81f3\u5c11\u4e00\u6b21\u7684\u5904\u7406\u8bed\u4e49\u3002\u5f02\u6b65\u5199\u5165\u91cd\u8bd5\u591a\u6b21\u5931\u8d25\u7684\u6570\u636e\u4f1a\u5199\u5165\u5916\u90e8\u7ec4\u4ef6\uff0c\u6700\u7ec8\u901a\u8fc7\u4eba\u4e3a\u4ecb\u5165\u6765\u6062\u590d\u6570\u636e\uff0c\u8fbe\u5230\u6700\u7ec8\u6570\u636e\u4e00\u81f4\u3002"),(0,r.yg)("h2",{id:"http-\u5f02\u6b65\u5199\u5165"},"HTTP \u5f02\u6b65\u5199\u5165"),(0,r.yg)("p",null,"\u5f02\u6b65\u5199\u5165\u91c7\u7528 asynchttpclient \u4f5c\u4e3a\u5ba2\u6237\u7aef\uff0c\u9700\u8981\u5148\u5bfc\u5165 asynchttpclient \u76f8\u5173\u4f9d\u8d56\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.asynchttpclient</groupId>\n    <artifactId>async-http-client</artifactId>\n    <optional>true</optional>\n</dependency>\n")),(0,r.yg)("h2",{id:"apache-streampark-\u65b9\u5f0f\u5199\u5165"},"Apache StreamPark\u2122 \u65b9\u5f0f\u5199\u5165"),(0,r.yg)("h3",{id:"http\u5f02\u6b65\u5199\u5165\u652f\u6301\u7c7b\u578b"},"http\u5f02\u6b65\u5199\u5165\u652f\u6301\u7c7b\u578b"),(0,r.yg)("p",null,"HttpSink \u652f\u6301http\u534f\u8bae\u7684get \u3001post \u3001patch \u3001put \u3001delete \u3001options \u3001trace \u5bf9\u5e94\u81f3HttpSink\u540c\u540d\u65b9\u6cd5\uff0c\u5177\u4f53\u4fe1\u606f\u5982\u4e0b:"),(0,r.yg)(l.A,{value:"Scala",label:"Scala",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"class HttpSink(@(transient@param) ctx: StreamingContext,\nheader: Map[String, String] = Map.empty[String, String],\nparallelism: Int = 0,\nname: String = null,\nuid: String = null) extends Sink {\n\ndef get(stream: DataStream[String]): DataStreamSink[String] = sink(stream, HttpGet.METHOD_NAME)\n\ndef post(stream: DataStream[String]): DataStreamSink[String] = sink(stream, HttpPost.METHOD_NAME)\n\ndef patch(stream: DataStream[String]): DataStreamSink[String] = sink(stream, HttpPatch.METHOD_NAME)\n\ndef put(stream: DataStream[String]): DataStreamSink[String] = sink(stream, HttpPut.METHOD_NAME)\n\ndef delete(stream: DataStream[String]): DataStreamSink[String] = sink(stream, HttpDelete.METHOD_NAME)\n\ndef options(stream: DataStream[String]): DataStreamSink[String] = sink(stream, HttpOptions.METHOD_NAME)\n\ndef trace(stream: DataStream[String]): DataStreamSink[String] = sink(stream, HttpTrace.METHOD_NAME)\n\nprivate[this] def sink(stream: DataStream[String], method: String): DataStreamSink[String] = {\nval params = ctx.parameter.toMap.filter(_._1.startsWith(HTTP_SINK_PREFIX)).map(x => x._1.drop(HTTP_SINK_PREFIX.length + 1) -> x._2)\nval sinkFun = new HttpSinkFunction(params, header, method)\nval sink = stream.addSink(sinkFun)\nafterSink(sink, parallelism, name, uid)\n}\n}\n\n"))),(0,r.yg)("h3",{id:"http\u5f02\u6b65\u5199\u5165\u914d\u7f6e\u53c2\u6570\u5217\u8868"},"http\u5f02\u6b65\u5199\u5165\u914d\u7f6e\u53c2\u6570\u5217\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'http.sink:\n  threshold:\n    numWriters: 3\n    queueCapacity: 10000 #\u961f\u5217\u6700\u5927\u5bb9\u91cf,\u89c6\u5355\u6761\u8bb0\u5f55\u5927\u5c0f\u800c\u81ea\u884c\u4f30\u91cf\u961f\u5217\u5927\u5c0f,\u5982\u503c\u592a\u5927,\u4e0a\u6e38\u6570\u636e\u6e90\u6765\u7684\u592a\u5feb,\u4e0b\u6e38\u5199\u5165\u6570\u636e\u8ddf\u4e0d\u4e0a\u53ef\u80fd\u4f1aOOM.\n    timeout: 100 #\u53d1\u9001http\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\n    retries: 3 #\u53d1\u9001\u5931\u8d25\u65f6\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\n    successCode: 200 #\u53d1\u9001\u6210\u529f\u72b6\u6001\u7801,\u8fd9\u91cc\u53ef\u4ee5\u6709\u591a\u4e2a\u503c,\u7528","\u53f7\u5206\u9694\n  failover:\n    table: record\n    storage: mysql #kafka,hbase,hdfs\n    jdbc: # \u4fdd\u5b58\u7c7b\u578b\u4e3aMySQL,\u5c06\u5931\u8d25\u7684\u6570\u636e\u4fdd\u5b58\u5230MySQL\n      jdbcUrl: jdbc:mysql://localhost:3306/test\n      username: root\n      password: 123456\n    kafka:\n      topic: bigdata\n      bootstrap.servers: localhost:9091,localhost:9092,localhost:9093\n    hbase:\n      zookeeper.quorum: localhost\n      zookeeper.property.clientPort: 2181\n    hdfs:\n      namenode: hdfs://localhost:8020 # namenode rpc address and port, e.g: hdfs://hadoop:8020 , hdfs://hadoop:9000\n      user: benjobs # user\n      path: /http/failover # save path\n      format: yyyy-MM-dd\n')),(0,r.yg)("h3",{id:"http\u5f02\u6b65\u5199\u5165\u6570\u636e"},"http\u5f02\u6b65\u5199\u5165\u6570\u636e"),(0,r.yg)("p",null,"\u8fd0\u884c\u7a0b\u5e8f\u6837\u4f8b\u4e3ascala"),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Scala",label:"Scala",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.HttpSink\nimport org.apache.flink.api.scala._\nimport org.apache.flink.streaming.api.scala.DataStream\n\nobject HttpSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n\n//\u63a5\u5165\u6570\u636e\n    val source = context.addSource(new TestSource)\n\n    val value: DataStream[String] = source.map(x => s"http://127.0.0.1:8080?userId=(${x.userId}&siteId=${x.siteId})")\n//    \u901a\u8fc7\u8c03\u7528HttpSink\u548chttp\u534f\u8bae\u5bf9\u5e94\u7684\u65b9\u6cd5\u6765\u5199\u5165\u6570\u636e\n    HttpSink().post(value).setParallelism(1)\n\n  }\n}\n\n')))),(0,r.yg)("admonition",{title:"\u8b66\u544a",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"\u7531\u4e8ehttp\u4e00\u6b21\u53ea\u80fd\u5199\u5165\u4e00\u6761\u6570\u636e\uff0c\u5ef6\u8fdf\u6bd4\u8f83\u9ad8\uff0c\u4e0d\u9002\u5408\u5927\u6570\u636e\u91cf\u5199\u5165\uff0c\u9700\u8bbe\u7f6e\u5408\u7406\u9608\u503c\u63d0\u9ad8\u6027\u80fd",(0,r.yg)("br",null),"\n\u7531\u4e8ehttpSink\u5f02\u6b65\u5199\u5165\u5931\u8d25\u4f1a\u91cd\u65b0\u5c06\u6570\u636e\u6dfb\u52a0\u81f3\u7f13\u5b58\u961f\u5217\uff0c\u53ef\u80fd\u9020\u6210\u540c\u4e00\u7a97\u53e3\u6570\u636e\u5206\u4e24\u6279\u6b21\u5199\u5165\uff0c\u5b9e\u65f6\u6027\u8981\u6c42\u9ad8\u7684\u573a\u666f\u5efa\u8bae\u5168\u9762\u6d4b\u8bd5",(0,r.yg)("br",null),"\n\u5f02\u6b65\u5199\u5165\u6570\u636e\u8fbe\u5230\u91cd\u8bd5\u6700\u5927\u503c\u540e\uff0c\u4f1a\u5c06\u6570\u636e\u5907\u4efd\u81f3\u5916\u90e8\u7ec4\u4ef6\uff0c\u5728\u6b64\u65f6\u624d\u4f1a\u521d\u59cb\u5316\u7ec4\u4ef6\u8fde\u63a5\uff0c\u5efa\u8bae\u786e\u4fddfailover \u7ec4\u4ef6\u7684\u53ef\u7528\u6027")),(0,r.yg)("h2",{id:"\u5176\u4ed6\u914d\u7f6e"},"\u5176\u4ed6\u914d\u7f6e"),(0,r.yg)("p",null,"\u5176\u4ed6\u7684\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5fc5\u987b\u9075\u5b88 ",(0,r.yg)("strong",{parentName:"p"},"StreamPark")," \u914d\u7f6e,\u5177\u4f53\u53ef\u914d\u7f6e\u9879\u548c\u5404\u4e2a\u53c2\u6570\u7684\u4f5c\u7528\u8bf7\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"/docs/development/config/"},"\u9879\u76ee\u914d\u7f6e")))}h.isMDXComponent=!0}}]);