"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8600],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>v,useMDXComponents:()=>u,withMDXComponents:()=>s});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function m(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){return function(r){var n=u(r.components);return t.createElement(e,i({},r,{components:n}))}},u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=u(n),p=a,f=s["".concat(o,".").concat(p)]||s[p]||d[p]||i;return n?t.createElement(f,c(c({ref:r},l),{},{components:n})):t.createElement(f,c({ref:r},l))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var m in r)hasOwnProperty.call(r,m)&&(c[m]=r[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7758:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(83117),a=(n(67294),n(3905));const i={id:"cameraview.camerafacing",title:"Enumeration: CameraFacing",sidebar_label:"CameraFacing",custom_edit_url:null},o=void 0,c={unversionedId:"api/core/enums/cameraview.camerafacing",id:"version-0.1/api/core/enums/cameraview.camerafacing",title:"Enumeration: CameraFacing",description:"CameraView.CameraFacing",source:"@site/versioned_docs/version-0.1/api/core/enums/cameraview.camerafacing.md",sourceDirName:"api/core/enums",slug:"/api/core/enums/cameraview.camerafacing",permalink:"/docs/0.1/api/core/enums/cameraview.camerafacing",draft:!1,editUrl:null,tags:[],version:"0.1",frontMatter:{id:"cameraview.camerafacing",title:"Enumeration: CameraFacing",sidebar_label:"CameraFacing",custom_edit_url:null},sidebar:"api",previous:{title:"utils/CSSFontUtils",permalink:"/docs/0.1/api/core/modules/utils_cssfontutils"},next:{title:"Camera",permalink:"/docs/0.1/api/core/classes/cameraview.camera"}},m={},l=[{value:"Enumeration members",id:"enumeration-members",level:2},{value:"BACK",id:"back",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"FRONT",id:"front",level:3},{value:"Defined in",id:"defined-in-1",level:4}],s={toc:l};function u(e){let{components:r,...n}=e;return(0,a.mdx)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/docs/0.1/api/core/modules/cameraview"},"CameraView"),".CameraFacing"),(0,a.mdx)("p",null,"Direction the camera faces relative to the device's screen."),(0,a.mdx)("h2",{id:"enumeration-members"},"Enumeration members"),(0,a.mdx)("h3",{id:"back"},"BACK"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"BACK"),' = "back"'),(0,a.mdx)("p",null,"Camera facing the opposite direction as the device's screen."),(0,a.mdx)("h4",{id:"defined-in"},"Defined in"),(0,a.mdx)("p",null,"CameraView.tsx:45"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"front"},"FRONT"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"FRONT"),' = "front"'),(0,a.mdx)("p",null,"Camera facing the same direction as the device's screen."),(0,a.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,a.mdx)("p",null,"CameraView.tsx:50"))}u.isMDXComponent=!0}}]);