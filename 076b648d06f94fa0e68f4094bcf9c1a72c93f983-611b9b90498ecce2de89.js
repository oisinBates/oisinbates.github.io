(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[75],{23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},69100:function(e,t,r){var n=r(99489),o=r(57067);function a(t,r,i){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(23646),o=r(46860),a=r(60379),i=r(98206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},92102:function(e,t,r){var n=r(92632);e.exports={MDXRenderer:n}},92632:function(e,t,r){var n=r(69100),o=r(319),a=r(59713),i=r(37316),l=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(67294),u=r(64983).mdx,g=r(76948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,l),c=g(t),d=p.useMemo((function(){if(!r)return null;var e=s({React:p,mdx:u},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return p.createElement(d,s({},a))}},97274:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(4942),o=r(67294),a=r(23431),i=r(70977),l=r(87825),c=r(9983),s=r(84829),p=r(95078),u=r(99105),g=function(e){var t=e.isDark,r=e.toggle;return(0,i.tZ)("button",{onClick:r,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},(0,i.tZ)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+(0,l.U2)(e,"colors.toggleIcon"):"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+(0,l.U2)(e,"colors.toggleIcon")},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+(0,l.U2)(e,"colors.toggleIcon"):"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 0 23px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 23px 0 0 "+(0,l.U2)(e,"colors.toggleIcon")+", -23px 0 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 15px 15px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", -15px 15px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 15px -15px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", -15px -15px 0 "+(0,l.U2)(e,"colors.toggleIcon")},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},d=r(1597),f=r(90944);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=function(e){var t=e.nav,r=(0,u.Z)().basePath;return(0,i.tZ)(o.Fragment,null,t&&t.length>0&&(0,i.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return(0,i.tZ)(d.Link,{activeClassName:"active",key:e.slug,sx:function(e){var t;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,f.Z)("/"+r+"/"+e.slug)},e.title)}))))},h=r(46938),x=function(){var e=(0,h.Z)().siteTitle,t=(0,u.Z)().basePath;return(0,i.tZ)(d.Link,{to:(0,f.Z)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,i.tZ)("div",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e))},y=function(){var e=(0,u.Z)().externalLinks;return(0,i.tZ)(o.Fragment,null,e&&e.length>0&&(0,i.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((function(e){return(0,i.tZ)(c.rU,{key:e.url,href:e.url},e.name)}))))},v=function(){var e=(0,u.Z)().navigation,t=(0,p.If)(),r=t[0],n=t[1],o="dark"===r;return(0,i.tZ)("header",{sx:{mb:[5,6]}},(0,i.tZ)(c.kC,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,i.tZ)(x,null),(0,i.tZ)(g,{isDark:o,toggle:function(e){e.preventDefault(),n(o?"light":"dark")}})),(0,i.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,i.tZ)(m,{nav:e}),(0,i.tZ)(y,null)))},k=function(){var e=(0,h.Z)().siteTitle;return(0,i.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,i.tZ)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),(0,i.tZ)("div",null,(0,i.tZ)(c.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"},"Theme")," ","by"," ",(0,i.tZ)(c.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")))},w=r(66795),O={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:(0,w.nV)("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:"2rem 1rem 1rem 1rem",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:"1rem"}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"rgb(1, 22, 39)"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:(0,w.nV)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".react-live-wrapper":{position:"relative"},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]}},j=r(63366),Z=["children"],S={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}},E=function(e){var t=e.children,r=(0,j.Z)(e,Z);return(0,i.tZ)("a",Object.assign({},r,{sx:S,href:"#skip-nav","data-skip-link":"true"}),t)};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){var t=e.children,r=e.className,n=void 0===r?"":r;return(0,i.tZ)(o.Fragment,null,(0,i.tZ)(a.xB,{styles:function(e){return{"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:(0,l.U2)(e,"colors.text"),color:(0,l.U2)(e,"colors.background")},a:{transition:"all 0.3s ease-in-out",color:"text"}}}}),(0,i.tZ)(s.Z,null),(0,i.tZ)(E,null,"Skip to content"),(0,i.tZ)(c.W2,null,(0,i.tZ)(v,null),(0,i.tZ)(c.xu,{id:"skip-nav",as:"main",variant:"layout.main",sx:D({},O),className:n},t),(0,i.tZ)(k,null)))}},84829:function(e,t,r){"use strict";var n=r(67294),o=r(35414),a=r(1597),i=r(46938);t.Z=function(e){var t=e.title,r=void 0===t?"":t,l=e.description,c=void 0===l?"":l,s=e.pathname,p=void 0===s?"":s,u=e.image,g=void 0===u?"":u,d=e.children,f=void 0===d?null:d,b=e.canonicalUrl,m=void 0===b?"":b,h=(0,i.Z)(),x=h.siteTitle,y=h.siteTitleAlt,v=h.siteUrl,k=h.siteDescription,w=h.siteLanguage,O=h.siteImage,j=h.author,Z={title:r||y,description:c||k,url:""+v+(p||""),image:""+v+(g||O)};return n.createElement(o.q,{title:r,defaultTitle:y,titleTemplate:"%s | "+x},n.createElement("html",{lang:w}),n.createElement("meta",{name:"description",content:Z.description}),n.createElement("meta",{name:"image",content:Z.image}),n.createElement("meta",{property:"og:title",content:Z.title}),n.createElement("meta",{property:"og:url",content:Z.url}),n.createElement("meta",{property:"og:description",content:Z.description}),n.createElement("meta",{property:"og:image",content:Z.image}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:image:alt",content:Z.description}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:Z.title}),n.createElement("meta",{name:"twitter:url",content:Z.url}),n.createElement("meta",{name:"twitter:description",content:Z.description}),n.createElement("meta",{name:"twitter:image",content:Z.image}),n.createElement("meta",{name:"twitter:image:alt",content:Z.description}),n.createElement("meta",{name:"twitter:creator",content:j}),n.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),n.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?n.createElement("link",{rel:"canonical",href:m}):null,f)}},46938:function(e,t,r){"use strict";var n=r(1597);t.Z=function(){return(0,n.useStaticQuery)("318001574").site.siteMetadata}},90944:function(e,t){"use strict";t.Z=function(e){return e.replace(/\/\/+/g,"/")}}}]);
//# sourceMappingURL=076b648d06f94fa0e68f4094bcf9c1a72c93f983-611b9b90498ecce2de89.js.map