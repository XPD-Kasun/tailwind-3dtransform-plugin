"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(v,s(s({ref:t},c),{},{components:r})):a.createElement(v,s({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8073:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=function(e){let{children:t,className:r}=e;return a.createElement("div",{className:r},t)}},4101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),i=r(8073);const s={sidebar_position:2},o="Perspective",l={unversionedId:"guide/perspective",id:"guide/perspective",title:"Perspective",description:"Utilities for specifying the perspective for an element.",source:"@site/docs/guide/perspective.md",sourceDirName:"guide",slug:"/guide/perspective",permalink:"/tailwind-3dtransform-plugin/guide/perspective",draft:!1,editUrl:"https://github.com/XPD-Kasun/tailwind-3dtransform-plugin/edit/website/docs/guide/perspective.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/tailwind-3dtransform-plugin/category/guide"},next:{title:"Rotate",permalink:"/tailwind-3dtransform-plugin/guide/rotate"}},p={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Customizing Your Theme",id:"customizing-your-theme",level:2},{value:"Arbitrary Values",id:"arbitrary-values",level:2},{value:"Read More",id:"read-more",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"perspective"},"Perspective"),(0,n.kt)("p",null,"Utilities for specifying the perspective for an element."),(0,n.kt)("div",{className:"table-container"},(0,n.kt)("table",{className:"stripped-table",style:{width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Class"),(0,n.kt)("td",null,"Properties"))),(0,n.kt)("tbody",null,Object.keys(function(e,t,r){let a={};for(let n=e;n<=t;n+=r)a[n]=n.toString();return a}(0,1600,200)).map(((e,t)=>(0,n.kt)("tr",{key:t},(0,n.kt)("td",null,"perspective-",e),(0,n.kt)("td",null,"perspective: ",e,"px"))))))),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"perspective-")," classes on the ",(0,n.kt)("strong",{parentName:"p"},"parent")," to set the desired perspective value for the child. "),(0,n.kt)(i.Z,{className:"my-10",mdxType:"CodeBlock"},(0,n.kt)("div",{className:"flex"},(0,n.kt)("div",{className:"perspective-400"},(0,n.kt)("div",{className:"transform rotate-y-30 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow "},(0,n.kt)("svg",{className:"w-10 h-10 mb-2 text-gray-500","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},(0,n.kt)("path",{fillRule:"evenodd",d:"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",clipRule:"evenodd"}),(0,n.kt)("path",{d:"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"})),(0,n.kt)("h5",{className:"mb-2 text-2xl font-semibold text-gray-900"},"perspective-400"),(0,n.kt)("p",null,"transform rotate-y-30"))),(0,n.kt)("div",{className:"perspective-800"},(0,n.kt)("div",{className:"transform rotate-y-30 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow "},(0,n.kt)("svg",{class:"w-10 h-10 mb-2 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},(0,n.kt)("path",{fillRule:"evenodd",d:"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",clipRule:"evenodd"}),(0,n.kt)("path",{d:"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"})),(0,n.kt)("h5",{Name:"mb-2 text-2xl font-semibold text-gray-900"},"perspective-800"),(0,n.kt)("p",null,"transform rotate-y-30"))),(0,n.kt)("div",{className:"perspective-1600"},(0,n.kt)("div",{className:"transform rotate-y-30 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow "},(0,n.kt)("svg",{className:"w-10 h-10 mb-2 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},(0,n.kt)("path",{fillRule:"evenodd",d:"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",clipRule:"evenodd"}),(0,n.kt)("path",{d:"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"})),(0,n.kt)("h5",{className:"mb-2 text-2xl font-semibold text-gray-900"},"perspective-1600"),(0,n.kt)("p",null,"transform rotate-y-30"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Effect of using different perspective values"',title:'"Effect',of:!0,using:!0,different:!0,perspective:!0,'values"':!0},'\n<div className="flex">\n  <div className="perspective-400">\n    <div class="transform rotate-y-30">\n      \x3c!-- ... --\x3e\n      <p>transform rotate-y-30</p>\n    </div>\n  </div>\n  <div className="perspective-800">\n    <div class="transform rotate-y-30">\n      \x3c!-- ... --\x3e\n      <p>transform rotate-y-30</p>\n    </div>\n  </div>\n  <div className="perspective-1600">\n    <div class="transform rotate-y-30">\n      \x3c!-- ... --\x3e\n      <p>transform rotate-y-30</p>\n    </div>\n  </div>\n</div>\n\n')),(0,n.kt)("h2",{id:"customizing-your-theme"},"Customizing Your Theme"),(0,n.kt)("p",null,"Plugin configures the default theme with key ",(0,n.kt)("inlineCode",{parentName:"p"},"perspective")," with values from 0 to 1600. You customize this value by editing ",(0,n.kt)("inlineCode",{parentName:"p"},"theme.perspective")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="tailwind.config.js"',title:'"tailwind.config.js"'},"module.exports = {\n  theme: {\n    extend: {\n      perspective: {\n        300: '300px',\n      }\n    }\n  }\n}\n")),(0,n.kt)("h2",{id:"arbitrary-values"},"Arbitrary Values"),(0,n.kt)("p",null,"You can add an arbitrary value for ",(0,n.kt)("inlineCode",{parentName:"p"},"perpective")," in your html file in the following way."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<div class="perspective-[300px]">\n\x3c!-- Your code ---\x3e\n</div>\n')),(0,n.kt)("p",null,"Learn more about arbitrary values from ",(0,n.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values"},"using arbitrary values"),"."),(0,n.kt)("h2",{id:"read-more"},"Read More"),(0,n.kt)("p",null,"Perspective sets the distance how far the user is placed to relative to z=0 plane.\n",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/perspective"},"Read more on perspective.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can use modifiers such as ",(0,n.kt)("inlineCode",{parentName:"p"},"md:perspective-800")," to target media queries, hover, active... etc. You can read about modifiers ",(0,n.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/hover-focus-and-other-states"},"here"),".")))}m.isMDXComponent=!0}}]);