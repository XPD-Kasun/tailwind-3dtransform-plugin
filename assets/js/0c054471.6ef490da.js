"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[383],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,f=p["".concat(o,".").concat(u)]||p[u]||b[u]||n;return a?i.createElement(f,l(l({ref:t},d),{},{components:a})):i.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<n;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8073:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(7294);const r=function(e){let{children:t,className:a}=e;return i.createElement("div",{className:a},t)}},5734:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=a(7462),r=(a(7294),a(3905)),n=a(8073);const l={sidebar_position:7,title:"Backface Visibility"},s="Backface Visibility",o={unversionedId:"guide/backface",id:"guide/backface",title:"Backface Visibility",description:"Utilities for setting backface visibility css property.",source:"@site/docs/guide/backface.md",sourceDirName:"guide",slug:"/guide/backface",permalink:"/tailwind-3dtransform-plugin/guide/backface",draft:!1,editUrl:"https://github.com/XPD-Kasun/tailwind-3dtransform-plugin/edit/website/docs/guide/backface.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Backface Visibility"},sidebar:"tutorialSidebar",previous:{title:"Flip",permalink:"/tailwind-3dtransform-plugin/guide/flip"},next:{title:"Transform Box",permalink:"/tailwind-3dtransform-plugin/guide/transformBox"}},c={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Read More",id:"read-more",level:2}],p={toc:d},b="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backface-visibility"},"Backface Visibility"),(0,r.kt)("p",null,"Utilities for setting backface visibility css property."),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",{className:"stripped-table",style:{width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Class"),(0,r.kt)("td",null,"Properties"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"backface-visible"),(0,r.kt)("td",null,"backface-visibility: visible")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"backface-hidden"),(0,r.kt)("td",null,"backface-visibility: hidden")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"backface-inherit"),(0,r.kt)("td",null,"backface-visibility: inherit")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"backface-unset"),(0,r.kt)("td",null,"backface-visibility: unset"))))),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"backface-visible")," to set the backface visibility and ",(0,r.kt)("inlineCode",{parentName:"p"},"backface-hidden")," to hide the backface visibility."),(0,r.kt)(n.Z,{className:"my-10",mdxType:"CodeBlock"},(0,r.kt)("div",{className:"flex space-x-5"},(0,r.kt)("div",{className:"perspective-800 group"},(0,r.kt)("div",{className:"transform transition group-hover:rotate-y-180 p-6 bg-white border border-gray-400 rounded-lg shadow"},(0,r.kt)("h5",{className:"mb-2 text-2xl font-semibold text-gray-900"},"backface-visible"),(0,r.kt)("p",null,"Default is backface visible"))),(0,r.kt)("div",{className:"perspective-800 group"},(0,r.kt)("div",{className:"transform transition group-hover:rotate-y-180 p-6 bg-white border border-gray-400 rounded-lg shadow"},(0,r.kt)("h5",{className:"mb-2 text-2xl font-semibold text-gray-900 backface-hidden"},"backface-hidden"),(0,r.kt)("p",{className:"backface-hidden"},"Backface Visibility Hidden"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Adding backface-visible and backface-hidden"',title:'"Adding',"backface-visible":!0,and:!0,'backface-hidden"':!0},'<div className="flex space-x-5">\n  <div className="perspective-800 group">\n    <div className="transform transition group-hover:rotate-y-180 p-6 bg-white border border-gray-400 rounded-lg shadow">\n      <h5 className="mb-2 text-2xl font-semibold text-gray-900">backface-visible</h5>\n      <p>Default is backface visible</p>\n    </div>\n  </div>\n  <div className="perspective-800 group">\n    <div className="transform transition group-hover:rotate-y-180 p-6 bg-white border border-gray-400 rounded-lg shadow">\n      <h5 className="mb-2 text-2xl font-semibold text-gray-900 backface-hidden">backface-hidden</h5>\n      <p className="backface-hidden">Backface Visibility Hidden</p>\n    </div>\n  </div>\n</div>\n')),(0,r.kt)("p",null,"We can use this to implement card effects like revealing cards on hover."),(0,r.kt)(n.Z,{className:"my-10",mdxType:"CodeBlock"},(0,r.kt)("div",{className:"flex space-x-5"},(0,r.kt)("div",{className:"group w-[250px] h-[150px] perspective-800 group"},(0,r.kt)("div",{className:"will-change-transform p-6 bg-white border transform transition duration-[1.5s] group-hover:rotate-y-180 border-gray-400 rounded-lg shadow absolute t-0"},(0,r.kt)("h5",{className:"mb-2 text-2xl font-semibold text-gray-900"},"Front Side"),(0,r.kt)("p",null,"Hover on this card and see the backside")),(0,r.kt)("div",{className:"will-change-transform p-6 bg-white border transform transition duration-[1.5s] -rotate-y-180 border-gray-400 group-hover:rotate-y-0 rounded-lg shadow absolute t-0"},(0,r.kt)("h5",{className:"mb-2 text-2xl font-semibold text-gray-900"},"Back Side"),(0,r.kt)("p",null,"Have you tried tailwind-3dtransform-plugin?"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Cards flip on hover"',title:'"Cards',flip:!0,on:!0,'hover"':!0},'<div className="flex space-x-5">\n  <div className="group w-[250px] h-[150px] perspective-800 group" >\n    <div className="p-6 bg-white border transform transition duration-[1.5s] group-hover:rotate-y-180 border-gray-400 rounded-lg shadow absolute t-0">\n      <h5 className="mb-2 text-2xl font-semibold text-gray-900">Front Side</h5>\n      <p>Hover on this card and see the backside</p>\n    </div>\n    <div className="p-6 bg-white border transform transition duration-[1.5s] -rotate-y-180 border-gray-400 group-hover:rotate-y-0 rounded-lg shadow absolute t-0">\n      <h5 className="mb-2 text-2xl font-semibold text-gray-900">Back Side</h5>\n      <p>Have you tried tailwind-3dtransform-plugin?</p>\n    </div>\n  </div>\n</div>\n')),(0,r.kt)("h2",{id:"read-more"},"Read More"),(0,r.kt)("p",null,"Backface visibility determines whether the back side of an element(the side you cannot see unless you rotate it around x or y axis) is visible or not."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility"},"See more on backface visibility.")))}u.isMDXComponent=!0}}]);