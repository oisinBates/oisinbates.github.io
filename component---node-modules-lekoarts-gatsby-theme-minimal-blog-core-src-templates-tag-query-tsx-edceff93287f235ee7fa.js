"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[825],{41202:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(87462),o=r(67294),a=r(4942),i=r(70977),l=r(9983),c=r(1597),s=r(97274),p=r(99105),g=r(3691),u=r(90944),b=r(84829);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=e=>{let{posts:t,pageContext:r}=e;const{tagsPath:n,basePath:o}=(0,p.Z)();return(0,i.tZ)(s.Z,null,(0,i.tZ)(b.Z,{title:"Tag: "+r.name}),(0,i.tZ)(l.kC,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},(0,i.tZ)(l.X6,{as:"h1",variant:"styles.h1",sx:{marginY:2}},r.name),(0,i.tZ)(c.Link,{sx:e=>{var t;return d(d({},null===(t=e.styles)||void 0===t?void 0:t.a),{},{variant:"links.secondary",marginY:2})},to:(0,u.Z)("/"+o+"/"+n)},"View all tags")),(0,i.tZ)(g.Z,{posts:t,sx:{mt:[4,5]}}))};var h=function(e){let t=(0,n.Z)({},e);const{data:{allPost:r}}=t;return o.createElement(f,Object.assign({posts:r.nodes},t))}},73168:function(e,t,r){var n=r(4942),o=r(70977),a=r(67294),i=r(1597),l=r(99105),c=r(90944);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.Z=e=>{let{tags:t}=e;const{tagsPath:r,basePath:p}=(0,l.Z)();return(0,o.tZ)(a.Fragment,null,t.map(((e,t)=>(0,o.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,o.tZ)(i.Link,{sx:e=>{var t;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,c.Z)("/"+p+"/"+r+"/"+e.slug)},e.name)))))}},97274:function(e,t,r){r.d(t,{Z:function(){return z}});var n=r(4942),o=r(67294),a=r(23431),i=r(70977),l=r(87825),c=r(9983),s=r(84829),p=r(95078),g=r(99105);var u=e=>{let{isDark:t,toggle:r}=e;return(0,i.tZ)("button",{onClick:r,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},(0,i.tZ)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:e=>t?"4px solid "+(0,l.U2)(e,"colors.toggleIcon"):"none",backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:e=>t?"none":"inset 8px -8px 0px 0px "+(0,l.U2)(e,"colors.toggleIcon"),"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:e=>t?"2px solid "+(0,l.U2)(e,"colors.toggleIcon"):"none",borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:e=>"0 -23px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 0 23px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 23px 0 0 "+(0,l.U2)(e,"colors.toggleIcon")+", -23px 0 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 15px 15px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", -15px 15px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 15px -15px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", -15px -15px 0 "+(0,l.U2)(e,"colors.toggleIcon"),transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},b=r(1597),m=r(90944);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var f=e=>{let{nav:t}=e;const{basePath:r}=(0,g.Z)();return(0,i.tZ)(o.Fragment,null,t&&t.length>0&&(0,i.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((e=>(0,i.tZ)(b.Link,{activeClassName:"active",key:e.slug,sx:e=>{var t;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,m.Z)("/"+r+"/"+e.slug)},e.title)))))},h=r(46938);var y=()=>{const{siteTitle:e}=(0,h.Z)(),{basePath:t}=(0,g.Z)();return(0,i.tZ)(b.Link,{to:(0,m.Z)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,i.tZ)("div",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e))};var x=()=>{const{externalLinks:e}=(0,g.Z)();return(0,i.tZ)(o.Fragment,null,e&&e.length>0&&(0,i.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((e=>(0,i.tZ)(c.rU,{key:e.url,href:e.url},e.name)))))};var v=()=>{const{navigation:e}=(0,g.Z)(),[t,r]=(0,p.If)(),n="dark"===t;return(0,i.tZ)("header",{sx:{mb:[5,6]}},(0,i.tZ)(c.kC,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,i.tZ)(y,null),(0,i.tZ)(u,{isDark:n,toggle:e=>{e.preventDefault(),r(n?"light":"dark")}})),(0,i.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,i.tZ)(f,{nav:e}),(0,i.tZ)(x,null)))};var k=()=>{const{siteTitle:e}=(0,h.Z)();return(0,i.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,i.tZ)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),(0,i.tZ)("div",null,(0,i.tZ)(c.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"},"Theme")," ","by"," ",(0,i.tZ)(c.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")))},w=r(66795);var O={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:e=>e.space[3]+" !important"}},"[data-name='live-preview']":{padding:e=>"calc("+e.space[2]+" + 10px) !important",backgroundColor:(0,w.nV)("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:"2rem 1rem 1rem 1rem",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:"1rem"}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"rgb(1, 22, 39)"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:(0,w.nV)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".react-live-wrapper":{position:"relative"},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]}},Z=r(45987);const j=["children"],P={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}};var S=e=>{let{children:t}=e,r=(0,Z.Z)(e,j);return(0,i.tZ)("a",Object.assign({},r,{sx:P,href:"#skip-nav","data-skip-link":"true"}),t)};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=e=>{let{children:t,className:r=""}=e;return(0,i.tZ)(o.Fragment,null,(0,i.tZ)(a.xB,{styles:e=>({"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:(0,l.U2)(e,"colors.text"),color:(0,l.U2)(e,"colors.background")},a:{transition:"all 0.3s ease-in-out",color:"text"}})}),(0,i.tZ)(s.Z,null),(0,i.tZ)(S,null,"Skip to content"),(0,i.tZ)(c.W2,null,(0,i.tZ)(v,null),(0,i.tZ)(c.xu,{id:"skip-nav",as:"main",variant:"layout.main",sx:D({},O),className:r},t),(0,i.tZ)(k,null)))}},3691:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(70977),o=r(4942),a=r(67294),i=r(9983),l=r(1597),c=r(73168);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=e=>{let{post:t,showTags:r=!0}=e;return(0,n.tZ)(i.xu,{mb:4},(0,n.tZ)(l.Link,{to:t.slug,sx:e=>{var t;return p(p({},null===(t=e.styles)||void 0===t?void 0:t.a),{},{fontSize:[1,2,3],color:"text"})}},t.title),(0,n.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,n.tZ)("time",null,t.date),t.tags&&r&&(0,n.tZ)(a.Fragment,null," — ",(0,n.tZ)(c.Z,{tags:t.tags}))))};var u=e=>{let{posts:t,className:r="",showTags:o=!0}=e;return(0,n.tZ)("section",{sx:{mb:[5,6,7]},className:r},t.map((e=>(0,n.tZ)(g,{key:e.slug,post:e,showTags:o}))))}},84829:function(e,t,r){var n=r(67294),o=r(35414),a=r(1597),i=r(46938);t.Z=e=>{let{title:t="",description:r="",pathname:l="",image:c="",children:s=null,canonicalUrl:p=""}=e;const g=(0,i.Z)(),{siteTitle:u,siteTitleAlt:b,siteUrl:m,siteDescription:d,siteLanguage:f,siteImage:h,author:y}=g,x={title:t||b,description:r||d,url:""+m+(l||""),image:""+m+(c||h)};return n.createElement(o.q,{title:t,defaultTitle:b,titleTemplate:"%s | "+u},n.createElement("html",{lang:f}),n.createElement("meta",{name:"description",content:x.description}),n.createElement("meta",{name:"image",content:x.image}),n.createElement("meta",{property:"og:title",content:x.title}),n.createElement("meta",{property:"og:url",content:x.url}),n.createElement("meta",{property:"og:description",content:x.description}),n.createElement("meta",{property:"og:image",content:x.image}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:image:alt",content:x.description}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:x.title}),n.createElement("meta",{name:"twitter:url",content:x.url}),n.createElement("meta",{name:"twitter:description",content:x.description}),n.createElement("meta",{name:"twitter:image",content:x.image}),n.createElement("meta",{name:"twitter:image:alt",content:x.description}),n.createElement("meta",{name:"twitter:creator",content:y}),n.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),n.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),p?n.createElement("link",{rel:"canonical",href:p}):null,s)}},46938:function(e,t,r){var n=r(1597);t.Z=()=>(0,n.useStaticQuery)("318001574").site.siteMetadata},90944:function(e,t){t.Z=function(e){return e.replace(/\/\/+/g,"/")}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tag-query-tsx-edceff93287f235ee7fa.js.map