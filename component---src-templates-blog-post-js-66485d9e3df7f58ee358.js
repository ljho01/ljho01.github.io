"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{8678:function(e,t,n){var a=n(7294);n(1883);t.Z=e=>{let{location:t,title:n,children:l}=e;const r="/"===t.pathname;return a.createElement("div",{className:"global-wrapper","data-is-root-path":r},a.createElement("main",null,l),a.createElement("footer",{className:"footer"},a.createElement("span",null,"© ",(new Date).getFullYear(),", Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},2474:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(1883);var r=()=>{const e="undefined"!=typeof window?window.__theme:null,{0:t,1:n}=(0,a.useState)(e);(0,a.useEffect)((()=>{n(window.__theme),window.__onThemeChange=()=>{n(window.__theme)}}),[]);return a.createElement(a.Fragment,null,a.createElement("button",{onClick:()=>{window.__setPreferredTheme("dark"===e?"light":"dark")},id:"tog"}),a.createElement("label",{className:"toggleback",htmlFor:"tog"},a.createElement("div",{className:"togglecon"})))};var o=e=>{const t=e.title?e.title:a.createElement(a.Fragment,null),n=e.date?e.date:a.createElement(a.Fragment,null);if((0,a.useEffect)((()=>(document.getElementById("nav").style.top="0px",()=>{document.getElementById("nav").style.top="0px"})),[]),"undefined"!=typeof window){let e=window.pageYOffset;window.onscroll=function(){const t=document.body.clientHeight-window.innerHeight;let n=window.pageYOffset,a=window.pageYOffset<200?0:1;document.getElementById("navlocation").style.opacity=""+a,document.getElementById("nav").style.top=t>0&&e>n&&e<=t||t<=0&&e>n||e<=0&&n<=0?"0px":"-60px",e=n}}return a.createElement("div",{id:"nav",className:"navmaster"},a.createElement(l.Link,{to:"/",className:"navlogo",itemProp:"url"},"abcde.io"),a.createElement("div",{id:"navlocation"},a.createElement("span",{className:"navtitle"},t),a.createElement("span",{className:"navdate"},n)),a.createElement(r,null),a.createElement("div",{id:"navline",className:"navline"}))}},9357:function(e,t,n){var a=n(7294),l=n(1883);t.Z=e=>{var t,n,r;let{description:o,title:i,children:c}=e;const{site:m}=(0,l.useStaticQuery)("2841359383"),s=o||m.siteMetadata.description,d=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?i+" | "+d:i),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:i}),a.createElement("meta",{name:"twitter:description",content:s}),c)}},2607:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return s}});var a=n(7294),l=n(1883),r=n(2474),o=n(8678),i=n(9357);var c=e=>{const t=e.data;return""===t?a.createElement(a.Fragment,null):a.createElement("nav",{className:"tocnav",dangerouslySetInnerHTML:{__html:t}})};const m=e=>{let{data:{markdownRemark:t}}=e;return a.createElement(i.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var s=e=>{var t;let{data:{previous:n,next:i,site:m,markdownRemark:s},location:d}=e;const u=(null===(t=m.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=s.tableOfContents;return a.createElement(o.Z,{location:d,title:u},a.createElement(r.Z,{title:s.frontmatter.title,date:s.frontmatter.date}),a.createElement("div",{className:"blogpostwrapper"},a.createElement("div",{className:"post-toc-wrapper"},a.createElement("div",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},s.frontmatter.title),a.createElement("p",null,s.frontmatter.date)),a.createElement("section",{dangerouslySetInnerHTML:{__html:s.html},itemProp:"articleBody"}),a.createElement("footer",null)),a.createElement(c,{data:p})),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,n&&a.createElement(l.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.createElement("li",null,i&&a.createElement(l.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-66485d9e3df7f58ee358.js.map