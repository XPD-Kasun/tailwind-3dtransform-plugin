"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=l,f=u["".concat(o,".").concat(p)]||u[p]||m[p]||r;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:l,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8073:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const l=function(e){let{children:t,className:a}=e;return n.createElement("div",{className:a},t)}},659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(7462),l=(a(7294),a(3905)),r=a(8073);const s={sidebar_position:4,title:"Scale"},i="Scale",o={unversionedId:"guide/scale",id:"guide/scale",title:"Scale",description:"Utilities for scaling an element on all three axis.",source:"@site/docs/guide/scale.md",sourceDirName:"guide",slug:"/guide/scale",permalink:"/tailwind-3dtransform-plugin/guide/scale",draft:!1,editUrl:"https://github.com/XPD-Kasun/tailwind-3dtransform-plugin/docs/guide/scale.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Scale"},sidebar:"tutorialSidebar",previous:{title:"Rotate",permalink:"/tailwind-3dtransform-plugin/guide/rotate"},next:{title:"Translate",permalink:"/tailwind-3dtransform-plugin/guide/translate"}},c={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Customizing Your Theme",id:"customizing-your-theme",level:2},{value:"Arbitrary Values",id:"arbitrary-values",level:2},{value:"Read More",id:"read-more",level:2}],u={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scale"},"Scale"),(0,l.kt)("p",null,"Utilities for scaling an element on all three axis."),(0,l.kt)("div",{className:"table-container"},(0,l.kt)("table",{className:"stripped-table",style:{width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Class"),(0,l.kt)("td",null,"Properties"))),(0,l.kt)("tbody",null,[0,50,75,90,95,100,105,110,125,150].map((e=>["x","y","z"].map((t=>(0,l.kt)("tr",null,(0,l.kt)("td",null,"scale-",t,"-",e),(0,l.kt)("td",null,"transform: scale",t.toUpperCase(),"(",e/100,")")))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scale-value"),(0,l.kt)("td",null,"transform: scale3d(value, value, value);"))))),(0,l.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("p",null,"You can apply scaling on all axes. For instance to apply 0.5 scaling on x and 2 scaling on y, you can use following classes,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="scale-x-50 scale-y-200">\x3c!--Some Content--\x3e</div>\n')),(0,l.kt)("admonition",{title:"Remember to add transform class",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Plugin requires you to add ",(0,l.kt)("inlineCode",{parentName:"p"},"transform")," class along with other transform classes to apply the effect.",(0,l.kt)("br",null),"\nFor example, instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"scale-x-110"),", use ",(0,l.kt)("inlineCode",{parentName:"p"},"transform scale-x-110"),".",(0,l.kt)("br",null),"\nRead more on this ",(0,l.kt)("a",{parentName:"p",href:"/faq/whyTransform"},"here"),".")),(0,l.kt)(r.Z,{className:"my-10",mdxType:"CodeBlock"},(0,l.kt)("div",{className:"perspective-1000"},(0,l.kt)("div",{className:"flex space-x-10"},(0,l.kt)("div",{className:"w-52 h-52 bg-teal-400 rounded-xl flex text-white font-bold text-xl justify-center items-center"},"No Transform"),(0,l.kt)("div",{className:"w-52 h-52 bg-teal-400 rounded-xl flex text-white font-bold text-xl flex-col justify-center items-center scale-x-[0.8] scale-y-110 transform"},(0,l.kt)("div",null,"scale-x-[0.8]"),(0,l.kt)("div",null,"scale-y-110")),(0,l.kt)("div",{className:"w-52 h-52 bg-teal-400 rounded-xl flex text-white font-bold text-xl flex-col justify-center items-center scale-x-110 scale-y-[0.8] scale-z-110 transform"},(0,l.kt)("div",null,"scale-x-110"),(0,l.kt)("div",null,"scale-y-[0.8]"),(0,l.kt)("div",null,"scale-z-110"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Applying different scale classes"',title:'"Applying',different:!0,scale:!0,'classes"':!0},'\n<div className="perspective-1000">\n  <div className="flex space-x-10">  \n    <div className="w-52 h-52">No Transform</div>\n    <div className="w-52 h-52 scale-x-[0.8] scale-y-110 transform">\n      <div>scale-x-[0.8]</div>\n      <div>scale-y-110</div>\n    </div>\n    <div className="w-52 h-52 scale-x-110 scale-y-[0.8] scale-z-110 transform">\n      <div>scale-x-110</div>\n      <div>scale-y-[0.8]</div>\n      <div>scale-z-110</div>\n    </div>\n  </div>\n</div>\n')),(0,l.kt)("h2",{id:"customizing-your-theme"},"Customizing Your Theme"),(0,l.kt)("p",null,"We extend the default theme by adding additional values for ",(0,l.kt)("inlineCode",{parentName:"p"},"scale")," key. You can add any custom values from ",(0,l.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=tailwind.config.js",title:"tailwind.config.js"},"module.exports = {\n  theme: {\n    extend: {\n      scale: {\n        '20': '0.2',\n      }\n    }\n  }\n}\n")),(0,l.kt)("h2",{id:"arbitrary-values"},"Arbitrary Values"),(0,l.kt)("p",null,"If you need to use an custom value for scale, you can use the following method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="scale-x-[1.3]">\n  \x3c!-- More Items --\x3e\n</div>\n')),(0,l.kt)("p",null,"Learn more about arbitrary value support in the tailwindcss ",(0,l.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values"},"arbitrary values")," documentation."),(0,l.kt)("h2",{id:"read-more"},"Read More"),(0,l.kt)("p",null,"To learn more about scale css transform refer ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale3d"},"here"),"."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You can use modifiers such as ",(0,l.kt)("inlineCode",{parentName:"p"},"md:scale-x-60")," to target media queries, hover, active... etc. You can read about modifiers ",(0,l.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/hover-focus-and-other-states"},"here"),".")))}p.isMDXComponent=!0}}]);