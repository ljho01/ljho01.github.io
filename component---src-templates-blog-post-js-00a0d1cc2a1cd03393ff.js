"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{9357:function(e,t,n){var a=n(7294),r=n(1883);t.Z=e=>{var t,n,l;let{description:o,title:c,children:i}=e;const{site:m}=(0,r.useStaticQuery)("2841359383"),s=o||m.siteMetadata.description,d=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?c+" | "+d:c),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:c}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(l=n.social)||void 0===l?void 0:l.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:c}),a.createElement("meta",{name:"twitter:description",content:s}),i)}},2607:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return s}});var a=n(7294),r=n(1883),l=n(2474),o=n(8678),c=n(9357);var i=e=>{const t=e.data;return""===t?a.createElement(a.Fragment,null):a.createElement("nav",{className:"tocnav"},a.createElement("span",null,"Table of Contents"),a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))};const m=e=>{let{data:{markdownRemark:t}}=e;return a.createElement(c.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var s=e=>{var t;let{data:{previous:n,next:c,site:m,markdownRemark:s,allMarkdownRemark:d},location:p}=e;const u=(null===(t=m.siteMetadata)||void 0===t?void 0:t.title)||"Title",E=s.tableOfContents;console.log(d);const f=d.group,v=d.totalCount;return a.createElement(o.Z,{location:p,title:u},a.createElement(l.Z,{title:s.frontmatter.title,date:s.frontmatter.date,categories:f,count:v,location:s.frontmatter.category}),a.createElement("div",{className:"blogpostwrapper"},a.createElement("div",{className:"post-toc-wrapper"},a.createElement("div",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},s.frontmatter.title),a.createElement("p",null,s.frontmatter.date)),a.createElement("section",{dangerouslySetInnerHTML:{__html:s.html},itemProp:"articleBody"}),a.createElement("footer",null)),a.createElement(i,{data:E})),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,n&&a.createElement(r.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.createElement("li",null,c&&a.createElement(r.Link,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →"))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-00a0d1cc2a1cd03393ff.js.map