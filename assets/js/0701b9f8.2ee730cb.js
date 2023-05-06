"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[834],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8073:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);const n=function(e){let{children:t,className:a}=e;return r.createElement("div",{className:a},t)}},4673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=a(7462),n=a(7294),o=a(3905),i=a(8073);const s={sidebar_position:3},l="Rotate",d={unversionedId:"guide/rotate",id:"guide/rotate",title:"Rotate",description:"Utilities for rotating an element on all three axis.",source:"@site/docs/guide/rotate.md",sourceDirName:"guide",slug:"/guide/rotate",permalink:"/tailwind-3dtransform-plugin/guide/rotate",draft:!1,editUrl:"https://github.com/XPD-Kasun/tailwind-3dtransform-plugin/docs/guide/rotate.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Perspective",permalink:"/tailwind-3dtransform-plugin/guide/perspective"},next:{title:"Scale",permalink:"/tailwind-3dtransform-plugin/guide/scale"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Using rotate-3d class",id:"using-rotate-3d-class",level:2},{value:"Customizing Your Theme",id:"customizing-your-theme",level:2},{value:"Arbitrary Values",id:"arbitrary-values",level:2},{value:"Read More",id:"read-more",level:2}],p={toc:u},m="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rotate"},"Rotate"),(0,o.kt)("p",null,"Utilities for rotating an element on all three axis."),(0,o.kt)("div",{className:"table-container"},(0,o.kt)("table",{className:"stripped-table",style:{width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Class"),(0,o.kt)("td",null,"Properties"))),(0,o.kt)("tbody",null,[0,1,2,3,6,12,30,45,60,90,135,180,270].map(((e,t)=>(0,o.kt)(n.Fragment,{key:t},["x","y","z"].map(((a,r)=>(0,o.kt)("tr",{key:t+" "+r},(0,o.kt)("td",null,"rotate-",a,"-",e),(0,o.kt)("td",null,"transform: rotate",a.toUpperCase(),"(",e,"deg);"))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"rotate-3d-[1,0,1,30deg]"),(0,o.kt)("td",null,"transform: rotate3d(1,0,1,30deg);"))))),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"Rotation classes are used to rotate an element relative to an axis. The rotation axis is determined by the value of transform-origin class applied which is set center as default. Also you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"perspective")," class to the parent of the element that you transform to get the 3d look. The syntax for above classes is rotation-{axis}-{angle}. Hover on below example to see it in action."),(0,o.kt)("admonition",{title:"Remember to add transform class",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Plugin requires you to add ",(0,o.kt)("inlineCode",{parentName:"p"},"transform")," class along with other transform classes to apply the effect.",(0,o.kt)("br",null),"\nFor example, instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate-x-45"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"transform rotate-x-45"),".",(0,o.kt)("br",null),"\nRead more on this ",(0,o.kt)("a",{parentName:"p",href:"/faq/whyTransform"},"here"),".")),(0,o.kt)(i.Z,{className:"my-5",mdxType:"CodeBlock"},(0,o.kt)("div",{className:"flex space-x-5"},(0,o.kt)("div",{className:"perspective-800"},(0,o.kt)("div",{className:"transform transition hover:rotate-y-30 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow "},(0,o.kt)("h5",{className:"mb-2 text-2xl font-semibold text-gray-900"},"Rotate Around Y"),(0,o.kt)("p",null,"transform hover:rotate-y-60"))),(0,o.kt)("div",{className:"perspective-800"},(0,o.kt)("div",{className:"transform transition hover:rotate-x-45 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow "},(0,o.kt)("h5",{className:"mb-2 text-2xl font-semibold text-gray-900"},"Rotate Around X"),(0,o.kt)("p",null,"transform hover:rotate-x-45"))),(0,o.kt)("div",{className:"perspective-800"},(0,o.kt)("div",{className:"transform transition hover:rotate-z-30 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow "},(0,o.kt)("h5",{className:"mb-2 text-2xl font-semibold text-gray-900"},"Rotate Around Z"),(0,o.kt)("p",null,"transform hover:rotate-z-30"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Using rotation classes for cards (Above cards use hover: to apply rotation on hover. We exclude it for simplicity)"',title:'"Using',rotation:!0,classes:!0,for:!0,cards:!0,"(Above":!0,use:!0,"hover:":!0,to:!0,apply:!0,on:!0,"hover.":!0,We:!0,exclude:!0,it:!0,'simplicity)"':!0},'<div class="flex">\n  <div class="perspective-800">\n    <div class="transform rotate-y-30">\n      \x3c!--...--\x3e\n    </div>\n  </div>\n  <div class="perspective-800">\n    <div class="transform rotate-x-45">\n      \x3c!--...--\x3e\n    </div>\n  </div>\n  <div class="perspective-800">\n    <div class="transform rotate-z-30">\n      \x3c!--...--\x3e\n    </div>\n  </div>\n</div>\n')),(0,o.kt)("p",null,"Here in this card example, we use multiple perspective containers. Instead, you can add perspective to the flex container above and make cards direct children of flex container also. But then the same perspective will effect all three cards. Here we provide separate perspective containers to each card. This choice depends on your requirements and goals."),(0,o.kt)("h2",{id:"using-rotate-3d-class"},"Using rotate-3d class"),(0,o.kt)("p",null,"It certain situation, you might need to directly leverage functionality of rotate-3d transform function.\nFor this, we have provided ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate-3d")," class which you can use freely to specify the value you need and achieve the full control over rotate-3d function."),(0,o.kt)("p",null,"For instance, to implement following css,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"  .some-class {\n    transform: rotate-3d(1,1,0,20deg);\n  }\n")),(0,o.kt)("p",null,"you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate-3d")," class as follows,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="rotate-3d-[1,1,0,20deg]">content...</div>\n')),(0,o.kt)("p",null,"This class is does not support theme defaults. Instead, it works only with arbitrary values provided in the correct format."),(0,o.kt)("h2",{id:"customizing-your-theme"},"Customizing Your Theme"),(0,o.kt)("p",null,"We extend the default theme by adding additional values for ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate")," key. You can add any custom values from ",(0,o.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=tailwind.config.js",title:"tailwind.config.js"},"module.exports = {\n  theme: {\n    extend: {\n      rotate: {\n        '20': '20deg',\n      }\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"arbitrary-values"},"Arbitrary Values"),(0,o.kt)("p",null,"If you need to use an custom value for rotation, you can use the following syntax."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="rotate-y-[20deg]">\n  \x3c!-- More Items --\x3e\n</div>\n')),(0,o.kt)("p",null,"Learn more about arbitrary value support in the tailwindcss ",(0,o.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values"},"arbitrary values")," documentation."),(0,o.kt)("h2",{id:"read-more"},"Read More"),(0,o.kt)("p",null,"To learn more about rotate css transform refer ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate"},"here"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can use modifiers such as ",(0,o.kt)("inlineCode",{parentName:"p"},"md:rotate-x-60")," to target media queries, hover, active... etc. You can read about modifiers ",(0,o.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/hover-focus-and-other-states"},"here"),".")))}f.isMDXComponent=!0}}]);