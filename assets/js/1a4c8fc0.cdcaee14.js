"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[415],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,u=c["".concat(l,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(u,s(s({ref:t},d),{},{components:r})):n.createElement(u,s({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:10,title:"Why we add transform class?"},s="Why we add transform class?",i={unversionedId:"FAQ/whyTransform",id:"FAQ/whyTransform",title:"Why we add transform class?",description:"To apply the 3d transforms you need to apply transform class.",source:"@site/docs/FAQ/whyTransform.md",sourceDirName:"FAQ",slug:"/FAQ/whyTransform",permalink:"/tailwind-3dtransform-plugin/FAQ/whyTransform",draft:!1,editUrl:"https://github.com/XPD-Kasun/tailwind-3dtransform-plugin/docs/FAQ/whyTransform.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Why we add transform class?"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/tailwind-3dtransform-plugin/category/faq"},next:{title:"Basics Of CSS Axes System",permalink:"/tailwind-3dtransform-plugin/FAQ/axes"}},l={},p=[],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-we-add-transform-class"},"Why we add transform class?"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Always check whether ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"transform")," class is applied to your element"),(0,a.kt)("p",{parentName:"admonition"},"To apply the 3d transforms you need to apply ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," class.")),(0,a.kt)("p",null,"When we use default tailwindcss transform classes such as ",(0,a.kt)("inlineCode",{parentName:"p"},"rotate")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"translate"),", we don't neccessarily need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," class as well. So we can write html similar to follwing and expect it to rotate 45deg."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="rotate-45">Some Text Rotated 45 degrees</div>\n')),(0,a.kt)("p",null,"The reason is when tailwindcss generates a class for ",(0,a.kt)("inlineCode",{parentName:"p"},"rotate-45"),", it automatically adds transform property to the generated class similar to following,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"title:generated.css","title:generated.css":!0},".rotate-45 {\n       --tw-rotate: 45deg;\n       transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n")),(0,a.kt)("p",null,"This is done for the convenience so that we aren't required to add ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," class everytime we add a tranform related class. But doing so, adds lengthy transform property to each of those transform classes."),(0,a.kt)("p",null,"With this plugin, we use a transform property similar to the above. But the one we use has more components to it. We need  to add more components to support 3d transforms. Because of its length, we have decided not to include transform property into the transform classes. Instead we require explicit ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," class to be added to the class list."),(0,a.kt)("p",null,"So in order to make this plugin to work we need to modify the above html to include ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="transform rotate-45">Some Text Rotated 45 degrees</div>\n')),(0,a.kt)("p",null,"This is important and if you find transforms are not applied, then, checking whether the class list contains ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," is the first thing to do."),(0,a.kt)("p",null,"If you think this should be changed and implicit transform property should be applied instead, please vote here at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XPD-Kasun/tailwind-3dtransform-plugin/issues/2"},"tailwind-3dtransform-plugin")," repository."))}m.isMDXComponent=!0}}]);