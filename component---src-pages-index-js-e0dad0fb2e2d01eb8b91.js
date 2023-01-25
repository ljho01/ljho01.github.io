"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8032:function(e,t,a){a.d(t,{G:function(){return P},L:function(){return p},M:function(){return k},P:function(){return b},_:function(){return o},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return s}});var n=a(7294),r=(a(2369),a(5697)),l=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,l,o,s){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),s&&(c.objectPosition=s);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],g=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=o(e,m);return n.createElement(n.Fragment,null,n.createElement(g,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:l="",shouldLoad:s}=e,c=o(e,h);return n.createElement("img",i({},c,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:l}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,l=o(e,f);const s=l.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,i({},l,t,{sizes:s,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return n.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:s})})),c):c};var w;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],b=function(e){let{fallback:t}=e,a=o(e,v);return t?n.createElement(E,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};b.displayName="Placeholder",b.propTypes={fallback:r.string,sources:null==(w=E.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(E,i({},e)),n.createElement("noscript",null,n.createElement(E,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=E.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],N=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:l().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],I=new Set;let O,j;const A=function(e){let{as:t="div",image:r,style:l,backgroundColor:d,className:u,class:m,onStartLoad:g,onLoad:p,onError:h}=e,f=o(e,T);const{width:y,height:E,layout:w}=r,v=c(y,E,w),{style:b,className:k}=v,C=o(v,x),L=(0,n.useRef)(),N=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(u=m);const S=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,y,E);return(0,n.useEffect)((()=>{O||(O=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(N);if(j&&I.has(N))return;let t,n;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:I.has(N),image:r},f)),I.has(N)||(t=requestAnimationFrame((()=>{L.current&&(n=o(L.current,N,I,l,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{I.has(N)&&j&&(L.current.innerHTML=j(i({isLoading:I.has(N),isLoaded:I.has(N),image:r},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},C,{style:i({},b,l,{backgroundColor:d}),className:k+(u?" "+u:""),ref:L,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},P=(0,n.memo)((function(e){return e.image?(0,n.createElement)(A,e):null}));P.propTypes=_,P.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function F(e){return function(t){let{src:a,__imageData:r,__error:l}=t,s=o(t,M);return l&&console.warn(l),r?n.createElement(e,i({image:r},s)):(console.warn("Image not loaded",a),null)}}const R=F((function(e){let{as:t="div",className:a,class:r,style:l,image:s,loading:m="lazy",imgClassName:g,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:E}=e,w=o(e,C);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),h=i({objectFit:y,objectPosition:E,backgroundColor:f},h);const{width:v,height:S,layout:_,images:T,placeholder:x,backgroundColor:I}=s,O=c(v,S,_),{style:j,className:A}=O,P=o(O,L),M={fallback:void 0,sources:[]};return T.fallback&&(M.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?N(T.fallback.srcSet):void 0})),T.sources&&(M.sources=T.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),n.createElement(t,i({},P,{style:i({},j,l,{backgroundColor:f}),className:A+(a?" "+a:"")}),n.createElement(p,{layout:_,width:v,height:S},n.createElement(b,i({},u(x,!1,_,v,S,I,y,E))),n.createElement(k,i({"data-gatsby-image-ssr":"",className:g},w,d("eager"===m,!1,M,m,h)))))})),q=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),H={src:l().string.isRequired,alt:S,width:q,height:q,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=H;const W=F(P);W.displayName="StaticImage",W.propTypes=H},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,n=!1;for(let r=0;r<e.length;r++){const l=e[r];t&&/[a-zA-Z]/.test(l)&&l.toUpperCase()===l?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(l)&&l.toLowerCase()===l?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=l.toLowerCase()===l&&l.toUpperCase()!==l,n=a,a=l.toUpperCase()===l&&l.toLowerCase()!==l)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},8678:function(e,t,a){var n=a(7294);a(1883);t.Z=e=>{let{location:t,title:a,children:r}=e;const l="/"===t.pathname;return n.createElement("div",{className:"global-wrapper","data-is-root-path":l},n.createElement("main",null,r),n.createElement("footer",{className:"footer"},n.createElement("span",null,"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},2474:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(1883);var l=()=>{const e="undefined"!=typeof window?window.__theme:null,{0:t,1:a}=(0,n.useState)(e);(0,n.useEffect)((()=>{a(window.__theme),window.__onThemeChange=()=>{a(window.__theme)}}),[]);return n.createElement(n.Fragment,null,n.createElement("button",{onClick:()=>{window.__setPreferredTheme("dark"===e?"light":"dark")},id:"tog"}),n.createElement("label",{className:"toggleback",htmlFor:"tog"},n.createElement("div",{className:"togglecon"})))};var i=e=>{const t=e.title?e.title:n.createElement(n.Fragment,null),a=e.date?e.date:n.createElement(n.Fragment,null);if((0,n.useEffect)((()=>(document.getElementById("nav").style.top="0px",()=>{document.getElementById("nav").style.top="0px"})),[]),"undefined"!=typeof window){let e=window.pageYOffset;window.onscroll=function(){const t=document.body.clientHeight-window.innerHeight;let a=window.pageYOffset,n=window.pageYOffset<200?0:1;document.getElementById("navlocation").style.opacity=""+n,document.getElementById("nav").style.top=t>0&&e>a&&e<=t||t<=0&&e>a||e<=0&&a<=0?"0px":"-60px",e=a}}return n.createElement("div",{id:"nav",className:"navmaster"},n.createElement(r.Link,{to:"/",className:"navlogo",itemProp:"url"},"abcde.io"),n.createElement("div",{id:"navlocation"},n.createElement("span",{className:"navtitle"},t),n.createElement("span",{className:"navdate"},a)),n.createElement(l,null),n.createElement("div",{id:"navline",className:"navline"}))}},9357:function(e,t,a){var n=a(7294),r=a(1883);t.Z=e=>{var t,a,l;let{description:i,title:o,children:s}=e;const{site:c}=(0,r.useStaticQuery)("2841359383"),d=i||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,u?o+" | "+u:o),n.createElement("meta",{name:"description",content:d}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:d}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(l=a.social)||void 0===l?void 0:l.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{name:"twitter:description",content:d}),s)}},8828:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u},default:function(){return d}});var n=a(7294),r=a(1883),l=a(2474),i=a(8678),o=a(9357);var s=e=>{let{data:t,count:a,location:l}=e;const i="/"===l?"active":"non-active",o=t;return n.createElement("div",{className:"sidecategory"},n.createElement("ol",null,n.createElement("li",{key:"category_All"},n.createElement(r.Link,{to:"/",className:i},"All(",a,")")),o.map((e=>{const t=e.fieldValue===l?"active":"non-active";return n.createElement("li",{key:e.fieldValue},n.createElement(r.Link,{to:"",className:t},e.fieldValue,"(",e.totalCount,")"))}))))},c=a(8032);var d=e=>{var t;let{data:a,location:o}=e;const d=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=a.allMarkdownRemark.nodes,m=a.allMarkdownRemark.group,g=a.allMarkdownRemark.totalCount;return 0===u.length?n.createElement(i.Z,{location:o,title:d},n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(i.Z,{location:o,title:d},n.createElement(l.Z,null),n.createElement("div",{className:"box37"},n.createElement(s,{data:m,count:g,location:"/"}),n.createElement("ol",{style:{listStyle:"none"}},u.map((e=>{const t=e.frontmatter.title||e.fields.slug;let a;return a=null!=e.frontmatter.thumbnail?n.createElement(c.G,{image:e.frontmatter.thumbnail.childImageSharp.gatsbyImageData,alt:"Thumbnail"}):n.createElement(n.Fragment,null),n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("div",{className:"post-list-leftside"},n.createElement("header",null,n.createElement("h2",null,n.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))),n.createElement("div",{className:"post-list-rightside"},a)))})))))};const u=()=>n.createElement(o.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-e0dad0fb2e2d01eb8b91.js.map