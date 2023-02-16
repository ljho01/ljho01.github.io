"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[280],{8816:function(e,t,a){var r,s,o,i,n,l,d,c,u,p=this&&this.__classPrivateFieldSet||function(e,t,a,r,s){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,a):s?s.value=a:t.set(e,a),a},h=this&&this.__classPrivateFieldGet||function(e,t,a,r){if("a"===a&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===a?r:"a"===a?r.call(e):r?r.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});const m=a(2197),b=a(3697),g=a(9576),y=a(557),f=a(3300),P=a(3797);class v{constructor(e){var t,a,h,b,k,q;r.set(this,void 0),s.set(this,void 0),o.set(this,void 0),i.set(this,void 0),n.set(this,void 0),l.set(this,void 0),d.set(this,void 0),c.set(this,void 0),u.set(this,void 0),this.blocks={retrieve:e=>this.request({path:y.getBlock.path(e),method:y.getBlock.method,query:(0,g.pick)(e,y.getBlock.queryParams),body:(0,g.pick)(e,y.getBlock.bodyParams),auth:null==e?void 0:e.auth}),update:e=>this.request({path:y.updateBlock.path(e),method:y.updateBlock.method,query:(0,g.pick)(e,y.updateBlock.queryParams),body:(0,g.pick)(e,y.updateBlock.bodyParams),auth:null==e?void 0:e.auth}),delete:e=>this.request({path:y.deleteBlock.path(e),method:y.deleteBlock.method,query:(0,g.pick)(e,y.deleteBlock.queryParams),body:(0,g.pick)(e,y.deleteBlock.bodyParams),auth:null==e?void 0:e.auth}),children:{append:e=>this.request({path:y.appendBlockChildren.path(e),method:y.appendBlockChildren.method,query:(0,g.pick)(e,y.appendBlockChildren.queryParams),body:(0,g.pick)(e,y.appendBlockChildren.bodyParams),auth:null==e?void 0:e.auth}),list:e=>this.request({path:y.listBlockChildren.path(e),method:y.listBlockChildren.method,query:(0,g.pick)(e,y.listBlockChildren.queryParams),body:(0,g.pick)(e,y.listBlockChildren.bodyParams),auth:null==e?void 0:e.auth})}},this.databases={list:e=>this.request({path:y.listDatabases.path(),method:y.listDatabases.method,query:(0,g.pick)(e,y.listDatabases.queryParams),body:(0,g.pick)(e,y.listDatabases.bodyParams),auth:null==e?void 0:e.auth}),retrieve:e=>this.request({path:y.getDatabase.path(e),method:y.getDatabase.method,query:(0,g.pick)(e,y.getDatabase.queryParams),body:(0,g.pick)(e,y.getDatabase.bodyParams),auth:null==e?void 0:e.auth}),query:e=>this.request({path:y.queryDatabase.path(e),method:y.queryDatabase.method,query:(0,g.pick)(e,y.queryDatabase.queryParams),body:(0,g.pick)(e,y.queryDatabase.bodyParams),auth:null==e?void 0:e.auth}),create:e=>this.request({path:y.createDatabase.path(),method:y.createDatabase.method,query:(0,g.pick)(e,y.createDatabase.queryParams),body:(0,g.pick)(e,y.createDatabase.bodyParams),auth:null==e?void 0:e.auth}),update:e=>this.request({path:y.updateDatabase.path(e),method:y.updateDatabase.method,query:(0,g.pick)(e,y.updateDatabase.queryParams),body:(0,g.pick)(e,y.updateDatabase.bodyParams),auth:null==e?void 0:e.auth})},this.pages={create:e=>this.request({path:y.createPage.path(),method:y.createPage.method,query:(0,g.pick)(e,y.createPage.queryParams),body:(0,g.pick)(e,y.createPage.bodyParams),auth:null==e?void 0:e.auth}),retrieve:e=>this.request({path:y.getPage.path(e),method:y.getPage.method,query:(0,g.pick)(e,y.getPage.queryParams),body:(0,g.pick)(e,y.getPage.bodyParams),auth:null==e?void 0:e.auth}),update:e=>this.request({path:y.updatePage.path(e),method:y.updatePage.method,query:(0,g.pick)(e,y.updatePage.queryParams),body:(0,g.pick)(e,y.updatePage.bodyParams),auth:null==e?void 0:e.auth}),properties:{retrieve:e=>this.request({path:y.getPageProperty.path(e),method:y.getPageProperty.method,query:(0,g.pick)(e,y.getPageProperty.queryParams),body:(0,g.pick)(e,y.getPageProperty.bodyParams),auth:null==e?void 0:e.auth})}},this.users={retrieve:e=>this.request({path:y.getUser.path(e),method:y.getUser.method,query:(0,g.pick)(e,y.getUser.queryParams),body:(0,g.pick)(e,y.getUser.bodyParams),auth:null==e?void 0:e.auth}),list:e=>this.request({path:y.listUsers.path(),method:y.listUsers.method,query:(0,g.pick)(e,y.listUsers.queryParams),body:(0,g.pick)(e,y.listUsers.bodyParams),auth:null==e?void 0:e.auth}),me:e=>this.request({path:y.getSelf.path(),method:y.getSelf.method,query:(0,g.pick)(e,y.getSelf.queryParams),body:(0,g.pick)(e,y.getSelf.bodyParams),auth:null==e?void 0:e.auth})},this.comments={create:e=>this.request({path:y.createComment.path(),method:y.createComment.method,query:(0,g.pick)(e,y.createComment.queryParams),body:(0,g.pick)(e,y.createComment.bodyParams),auth:null==e?void 0:e.auth}),list:e=>this.request({path:y.listComments.path(),method:y.listComments.method,query:(0,g.pick)(e,y.listComments.queryParams),body:(0,g.pick)(e,y.listComments.bodyParams),auth:null==e?void 0:e.auth})},this.search=e=>this.request({path:y.search.path(),method:y.search.method,query:(0,g.pick)(e,y.search.queryParams),body:(0,g.pick)(e,y.search.bodyParams),auth:null==e?void 0:e.auth}),p(this,r,null==e?void 0:e.auth,"f"),p(this,s,null!==(t=null==e?void 0:e.logLevel)&&void 0!==t?t:m.LogLevel.WARN,"f"),p(this,o,null!==(a=null==e?void 0:e.logger)&&void 0!==a?a:(0,m.makeConsoleLogger)(P.name),"f"),p(this,i,(null!==(h=null==e?void 0:e.baseUrl)&&void 0!==h?h:"https://api.notion.com")+"/v1/","f"),p(this,n,null!==(b=null==e?void 0:e.timeoutMs)&&void 0!==b?b:6e4,"f"),p(this,l,null!==(k=null==e?void 0:e.notionVersion)&&void 0!==k?k:v.defaultNotionVersion,"f"),p(this,d,null!==(q=null==e?void 0:e.fetch)&&void 0!==q?q:f.default,"f"),p(this,c,null==e?void 0:e.agent,"f"),p(this,u,`notionhq-client/${P.version}`,"f")}async request({path:e,method:t,query:a,body:r,auth:s}){this.log(m.LogLevel.INFO,"request start",{method:t,path:e});const o=r&&0!==Object.entries(r).length?JSON.stringify(r):void 0,p=new URL(`${h(this,i,"f")}${e}`);if(a)for(const[i,n]of Object.entries(a))void 0!==n&&(Array.isArray(n)?n.forEach((e=>p.searchParams.append(i,String(e)))):p.searchParams.append(i,String(n)));const g={...this.authAsHeaders(s),"Notion-Version":h(this,l,"f"),"user-agent":h(this,u,"f")};void 0!==o&&(g["content-type"]="application/json");try{const a=await b.RequestTimeoutError.rejectAfterTimeout(h(this,d,"f").call(this,p.toString(),{method:t.toUpperCase(),headers:g,body:o,agent:h(this,c,"f")}),h(this,n,"f")),r=await a.text();if(!a.ok)throw(0,b.buildRequestError)(a,r);const s=JSON.parse(r);return this.log(m.LogLevel.INFO,"request success",{method:t,path:e}),s}catch(y){if(!(0,b.isNotionClientError)(y))throw y;throw this.log(m.LogLevel.WARN,"request fail",{code:y.code,message:y.message}),(0,b.isHTTPResponseError)(y)&&this.log(m.LogLevel.DEBUG,"failed response body",{body:y.body}),y}}log(e,t,a){(0,m.logLevelSeverity)(e)>=(0,m.logLevelSeverity)(h(this,s,"f"))&&h(this,o,"f").call(this,e,t,a)}authAsHeaders(e){const t={},a=null!=e?e:h(this,r,"f");return void 0!==a&&(t.authorization=`Bearer ${a}`),t}}t.default=v,r=new WeakMap,s=new WeakMap,o=new WeakMap,i=new WeakMap,n=new WeakMap,l=new WeakMap,d=new WeakMap,c=new WeakMap,u=new WeakMap,v.defaultNotionVersion="2022-06-28"},557:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.listComments=t.createComment=t.search=t.createDatabase=t.listDatabases=t.queryDatabase=t.updateDatabase=t.getDatabase=t.appendBlockChildren=t.listBlockChildren=t.deleteBlock=t.updateBlock=t.getBlock=t.getPageProperty=t.updatePage=t.getPage=t.createPage=t.listUsers=t.getUser=t.getSelf=void 0,t.getSelf={method:"get",pathParams:[],queryParams:[],bodyParams:[],path:()=>"users/me"},t.getUser={method:"get",pathParams:["user_id"],queryParams:[],bodyParams:[],path:e=>`users/${e.user_id}`},t.listUsers={method:"get",pathParams:[],queryParams:["start_cursor","page_size"],bodyParams:[],path:()=>"users"},t.createPage={method:"post",pathParams:[],queryParams:[],bodyParams:["parent","properties","icon","cover","content","children"],path:()=>"pages"},t.getPage={method:"get",pathParams:["page_id"],queryParams:["filter_properties"],bodyParams:[],path:e=>`pages/${e.page_id}`},t.updatePage={method:"patch",pathParams:["page_id"],queryParams:[],bodyParams:["properties","icon","cover","archived"],path:e=>`pages/${e.page_id}`},t.getPageProperty={method:"get",pathParams:["page_id","property_id"],queryParams:["start_cursor","page_size"],bodyParams:[],path:e=>`pages/${e.page_id}/properties/${e.property_id}`},t.getBlock={method:"get",pathParams:["block_id"],queryParams:[],bodyParams:[],path:e=>`blocks/${e.block_id}`},t.updateBlock={method:"patch",pathParams:["block_id"],queryParams:[],bodyParams:["embed","type","archived","bookmark","image","video","pdf","file","audio","code","equation","divider","breadcrumb","table_of_contents","link_to_page","table_row","heading_1","heading_2","heading_3","paragraph","bulleted_list_item","numbered_list_item","quote","to_do","toggle","template","callout","synced_block","table"],path:e=>`blocks/${e.block_id}`},t.deleteBlock={method:"delete",pathParams:["block_id"],queryParams:[],bodyParams:[],path:e=>`blocks/${e.block_id}`},t.listBlockChildren={method:"get",pathParams:["block_id"],queryParams:["start_cursor","page_size"],bodyParams:[],path:e=>`blocks/${e.block_id}/children`},t.appendBlockChildren={method:"patch",pathParams:["block_id"],queryParams:[],bodyParams:["children"],path:e=>`blocks/${e.block_id}/children`},t.getDatabase={method:"get",pathParams:["database_id"],queryParams:[],bodyParams:[],path:e=>`databases/${e.database_id}`},t.updateDatabase={method:"patch",pathParams:["database_id"],queryParams:[],bodyParams:["title","description","icon","cover","properties","is_inline","archived"],path:e=>`databases/${e.database_id}`},t.queryDatabase={method:"post",pathParams:["database_id"],queryParams:["filter_properties"],bodyParams:["sorts","filter","start_cursor","page_size","archived"],path:e=>`databases/${e.database_id}/query`},t.listDatabases={method:"get",pathParams:[],queryParams:["start_cursor","page_size"],bodyParams:[],path:()=>"databases"},t.createDatabase={method:"post",pathParams:[],queryParams:[],bodyParams:["parent","properties","icon","cover","title","description","is_inline"],path:()=>"databases"},t.search={method:"post",pathParams:[],queryParams:[],bodyParams:["sort","query","start_cursor","page_size","filter"],path:()=>"search"},t.createComment={method:"post",pathParams:[],queryParams:[],bodyParams:["parent","rich_text","discussion_id"],path:()=>"comments"},t.listComments={method:"get",pathParams:[],queryParams:["block_id","start_cursor","page_size"],bodyParams:[],path:()=>"comments"}},3697:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.buildRequestError=t.APIResponseError=t.UnknownHTTPResponseError=t.isHTTPResponseError=t.RequestTimeoutError=t.isNotionClientError=t.ClientErrorCode=t.APIErrorCode=void 0;const r=a(9576);var s,o;!function(e){e.Unauthorized="unauthorized",e.RestrictedResource="restricted_resource",e.ObjectNotFound="object_not_found",e.RateLimited="rate_limited",e.InvalidJSON="invalid_json",e.InvalidRequestURL="invalid_request_url",e.InvalidRequest="invalid_request",e.ValidationError="validation_error",e.ConflictError="conflict_error",e.InternalServerError="internal_server_error",e.ServiceUnavailable="service_unavailable"}(s=t.APIErrorCode||(t.APIErrorCode={})),function(e){e.RequestTimeout="notionhq_client_request_timeout",e.ResponseError="notionhq_client_response_error"}(o=t.ClientErrorCode||(t.ClientErrorCode={}));class i extends Error{}function n(e){return(0,r.isObject)(e)&&e instanceof i}function l(e,t){return n(e)&&e.code in t}t.isNotionClientError=n;class d extends i{constructor(e="Request to Notion API has timed out"){super(e),this.code=o.RequestTimeout,this.name="RequestTimeoutError"}static isRequestTimeoutError(e){return l(e,{[o.RequestTimeout]:!0})}static rejectAfterTimeout(e,t){return new Promise(((a,r)=>{const s=setTimeout((()=>{r(new d)}),t);e.then(a).catch(r).then((()=>clearTimeout(s)))}))}}t.RequestTimeoutError=d;class c extends i{constructor(e){super(e.message),this.name="HTTPResponseError";const{code:t,status:a,headers:r,rawBodyText:s}=e;this.code=t,this.status=a,this.headers=r,this.body=s}}const u={[o.ResponseError]:!0,[s.Unauthorized]:!0,[s.RestrictedResource]:!0,[s.ObjectNotFound]:!0,[s.RateLimited]:!0,[s.InvalidJSON]:!0,[s.InvalidRequestURL]:!0,[s.InvalidRequest]:!0,[s.ValidationError]:!0,[s.ConflictError]:!0,[s.InternalServerError]:!0,[s.ServiceUnavailable]:!0};t.isHTTPResponseError=function(e){return!!l(e,u)};class p extends c{constructor(e){var t;super({...e,code:o.ResponseError,message:null!==(t=e.message)&&void 0!==t?t:`Request to Notion API failed with status: ${e.status}`}),this.name="UnknownHTTPResponseError"}static isUnknownHTTPResponseError(e){return l(e,{[o.ResponseError]:!0})}}t.UnknownHTTPResponseError=p;const h={[s.Unauthorized]:!0,[s.RestrictedResource]:!0,[s.ObjectNotFound]:!0,[s.RateLimited]:!0,[s.InvalidJSON]:!0,[s.InvalidRequestURL]:!0,[s.InvalidRequest]:!0,[s.ValidationError]:!0,[s.ConflictError]:!0,[s.InternalServerError]:!0,[s.ServiceUnavailable]:!0};class m extends c{constructor(){super(...arguments),this.name="APIResponseError"}static isAPIResponseError(e){return l(e,h)}}t.APIResponseError=m,t.buildRequestError=function(e,t){const a=function(e){if("string"!=typeof e)return;let t;try{t=JSON.parse(e)}catch(s){return}if(!(0,r.isObject)(t)||"string"!=typeof t.message||(a=t.code,"string"!=typeof a||!(a in h)))return;var a;return{...t,code:t.code,message:t.message}}(t);return void 0!==a?new m({code:a.code,message:a.message,headers:e.headers,status:e.status,rawBodyText:t}):new p({message:void 0,headers:e.headers,status:e.status,rawBodyText:t})}},1356:function(e,t){async function*a(e,t){let a=t.start_cursor;do{const r=await e({...t,start_cursor:a});yield*r.results,a=r.next_cursor}while(a)}Object.defineProperty(t,"__esModule",{value:!0}),t.isFullComment=t.isFullUser=t.isFullDatabase=t.isFullPage=t.isFullBlock=t.collectPaginatedAPI=t.iteratePaginatedAPI=void 0,t.iteratePaginatedAPI=a,t.collectPaginatedAPI=async function(e,t){const r=[];for await(const s of a(e,t))r.push(s);return r},t.isFullBlock=function(e){return"type"in e},t.isFullPage=function(e){return"url"in e},t.isFullDatabase=function(e){return"title"in e},t.isFullUser=function(e){return"type"in e},t.isFullComment=function(e){return"created_by"in e}},9267:function(e,t,a){t.KU=void 0;var r=a(8816);Object.defineProperty(t,"KU",{enumerable:!0,get:function(){return r.default}});var s=a(2197);var o=a(3697);var i=a(1356)},2197:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.logLevelSeverity=t.makeConsoleLogger=t.LogLevel=void 0;const r=a(9576);var s;!function(e){e.DEBUG="debug",e.INFO="info",e.WARN="warn",e.ERROR="error"}(s=t.LogLevel||(t.LogLevel={})),t.makeConsoleLogger=function(e){return(t,a,r)=>{console[t](`${e} ${t}:`,a,r)}},t.logLevelSeverity=function(e){switch(e){case s.DEBUG:return 20;case s.INFO:return 40;case s.WARN:return 60;case s.ERROR:return 80;default:return(0,r.assertNever)(e)}}},9576:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=t.pick=t.assertNever=void 0,t.assertNever=function(e){throw new Error(`Unexpected value should never occur: ${e}`)},t.pick=function(e,t){const a=t.map((t=>[t,null==e?void 0:e[t]]));return Object.fromEntries(a)},t.isObject=function(e){return"object"==typeof e&&null!==e}},6709:function(e,t,a){var r=a(7294),s=a(8032);t.Z=()=>r.createElement("div",{className:"wallpaperbox"},r.createElement(s.S,{class:"wallpaper-light",src:"../images/Wallpaper-light.png",alt:"wallpaper",__imageData:a(6136)}),r.createElement(s.S,{class:"wallpaper-dark",src:"../images/Wallpaper-dark.png",alt:"wallpaper",__imageData:a(4805)}))},3289:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m},default:function(){return h}});var r=a(7294),s=a(2474),o=a(8678),i=a(9357),n=a(1883);var l=e=>{let{data:t,count:a,location:s}=e;const o="/"===s?"active":"non-active",i=t;return r.createElement(r.Fragment,null,r.createElement("div",{className:"sidecategory"},r.createElement("ol",null,r.createElement("li",{key:"category_All"},r.createElement(n.Link,{to:"/",className:o},"All(",a,")")),i.map((e=>{const t=e.fieldValue===s?"active":"non-active";return r.createElement("li",{key:e.fieldValue},r.createElement(n.Link,{to:"",className:t},e.fieldValue,"(",e.totalCount,")"))})))))},d=a(8032);var c=e=>{const t=e.post,a=t.frontmatter.title||t.fields.slug;let s;return s=null!=t.frontmatter.thumbnail?r.createElement(d.G,{image:t.frontmatter.thumbnail.childImageSharp.gatsbyImageData,alt:"Thumbnail"}):r.createElement(r.Fragment,null),r.createElement("li",null,r.createElement(n.Link,{to:t.fields.slug,itemProp:"url"},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("div",{className:"post-list-leftside"},r.createElement("header",null,r.createElement("h2",null,r.createElement("span",{itemProp:"headline"},a)),r.createElement("small",null,t.frontmatter.date)),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"}))),r.createElement("div",{className:"post-list-rightside"},s))))},u=a(6709);const p=new(0,a(9267).KU)({auth:{}.GATSBY_NOTION_API_KEY});var h=e=>{var t;let{data:a,location:i}=e;(async()=>{const e=await p.databases.retrieve({database_id:{}.GATSBY_DB_ID});console.log(e)})();null===(t=a.site.siteMetadata)||void 0===t||t.title;const n=a.allMarkdownRemark.nodes,d=a.allMarkdownRemark.group,h=a.allMarkdownRemark.totalCount;return 0===n.length?r.createElement(o.Z,null,r.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):r.createElement(o.Z,null,r.createElement(s.Z,{categories:d,count:h,location:"/"}),r.createElement(u.Z,null),r.createElement("div",{className:"box37"},r.createElement(l,{data:d,count:h,location:"/"}),r.createElement("ol",{style:{listStyle:"none"}},n.map(((e,t)=>r.createElement(c,{post:e,key:t}))))))};const m=()=>r.createElement(i.Z,{title:"All posts"})},3300:function(e,t){var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==a)return a;throw new Error("unable to locate global object")}();e.exports=t=a.fetch,a.fetch&&(t.default=a.fetch.bind(a)),t.Headers=a.Headers,t.Request=a.Request,t.Response=a.Response},6136:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a7a640fe0c750b508abe620ae1eb703c/dec2a/Wallpaper-light.png","srcSet":"/static/a7a640fe0c750b508abe620ae1eb703c/9296c/Wallpaper-light.png 654w,\\n/static/a7a640fe0c750b508abe620ae1eb703c/a0e0b/Wallpaper-light.png 1307w,\\n/static/a7a640fe0c750b508abe620ae1eb703c/dec2a/Wallpaper-light.png 2614w","sizes":"(min-width: 2614px) 2614px, 100vw"},"sources":[{"srcSet":"/static/a7a640fe0c750b508abe620ae1eb703c/4957d/Wallpaper-light.webp 654w,\\n/static/a7a640fe0c750b508abe620ae1eb703c/2dbb6/Wallpaper-light.webp 1307w,\\n/static/a7a640fe0c750b508abe620ae1eb703c/dab95/Wallpaper-light.webp 2614w","type":"image/webp","sizes":"(min-width: 2614px) 2614px, 100vw"}]},"width":2614,"height":2024}')},4805:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/3cbe38ed390680f4b61b6240cdfb62c6/dec2a/Wallpaper-dark.png","srcSet":"/static/3cbe38ed390680f4b61b6240cdfb62c6/9296c/Wallpaper-dark.png 654w,\\n/static/3cbe38ed390680f4b61b6240cdfb62c6/a0e0b/Wallpaper-dark.png 1307w,\\n/static/3cbe38ed390680f4b61b6240cdfb62c6/dec2a/Wallpaper-dark.png 2614w","sizes":"(min-width: 2614px) 2614px, 100vw"},"sources":[{"srcSet":"/static/3cbe38ed390680f4b61b6240cdfb62c6/4957d/Wallpaper-dark.webp 654w,\\n/static/3cbe38ed390680f4b61b6240cdfb62c6/2dbb6/Wallpaper-dark.webp 1307w,\\n/static/3cbe38ed390680f4b61b6240cdfb62c6/dab95/Wallpaper-dark.webp 2614w","type":"image/webp","sizes":"(min-width: 2614px) 2614px, 100vw"}]},"width":2614,"height":2024}')},3797:function(e){e.exports=JSON.parse('{"name":"@notionhq/client","version":"2.2.3","description":"A simple and easy to use client for the Notion API","engines":{"node":">=12"},"homepage":"https://developers.notion.com/docs/getting-started","bugs":{"url":"https://github.com/makenotion/notion-sdk-js/issues"},"repository":{"type":"git","url":"https://github.com/makenotion/notion-sdk-js/"},"keywords":["notion","notionapi","rest","notion-api"],"main":"./build/src","types":"./build/src/index.d.ts","scripts":{"prepare":"npm run build","prepublishOnly":"npm run checkLoggedIn && npm run lint && npm run test","build":"tsc","prettier":"prettier --write .","lint":"prettier --check . && eslint . --ext .ts && cspell \'**/*\' ","test":"jest ./test","check-links":"git ls-files | grep md$ | xargs -n 1 markdown-link-check","prebuild":"npm run clean","clean":"rm -rf ./build","checkLoggedIn":"./scripts/verifyLoggedIn.sh"},"author":"","license":"MIT","files":["build/package.json","build/src/**"],"dependencies":{"@types/node-fetch":"^2.5.10","node-fetch":"^2.6.1"},"devDependencies":{"@types/jest":"^28.1.4","@typescript-eslint/eslint-plugin":"^5.39.0","@typescript-eslint/parser":"^5.39.0","cspell":"^5.4.1","eslint":"^7.24.0","jest":"^28.1.2","markdown-link-check":"^3.8.7","prettier":"^2.3.0","ts-jest":"^28.0.5","typescript":"^4.8.4"}}')}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-b2c76b4b1cc4befb7e2d.js.map