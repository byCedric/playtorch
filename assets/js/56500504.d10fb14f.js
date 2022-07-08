"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1612],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){return function(t){var a=c(t.components);return n.createElement(e,i({},t,{components:a}))}},c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(g,d(d({ref:t},s),{},{components:a})):n.createElement(g,d({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},43868:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);const r="surveyLinkBox_bC1w";function i(e){let{docTitle:t}=e;return n.createElement("a",{href:"https://github.com/pytorch/live/issues/new?assignees=&labels=Tutorial+Feedback&template=tutorial_feedback.yml",target:"_blank"},n.createElement("div",{className:r},"Share what we can improve!"))}},49805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(83117),r=(a(67294),a(3905)),i=a(43868);const o={id:"add-package",sidebar_position:3,title:"Add Package to Existing App"},d=void 0,l={unversionedId:"tutorials/add-package",id:"version-0.2.0/tutorials/add-package",title:"Add Package to Existing App",description:"In this tutorial, you will learn how to add the PyTorch Live core package to an existing React Native project.",source:"@site/versioned_docs/version-0.2.0/tutorials/add-package.mdx",sourceDirName:"tutorials",slug:"/tutorials/add-package",permalink:"/live/docs/tutorials/add-package",draft:!1,editUrl:"https://github.com/pytorch/live/edit/main/website/versioned_docs/version-0.2.0/tutorials/add-package.mdx",tags:[],version:"0.2.0",sidebarPosition:3,frontMatter:{id:"add-package",sidebar_position:3,title:"Add Package to Existing App"},sidebar:"docs",previous:{title:"Get Started Manually",permalink:"/live/docs/tutorials/get-started-manually"},next:{title:"Image Classification",permalink:"/live/docs/tutorials/image-classification"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Additional Assets for Metro",id:"additional-assets-for-metro",level:3},{value:"Additional steps on Android",id:"additional-steps-on-android",level:3},{value:"Increase JVM Memory",id:"increase-jvm-memory",level:4},{value:"Sonatype Repository",id:"sonatype-repository",level:4},{value:"Packaging Options",id:"packaging-options",level:4},{value:"Give us feedback",id:"give-us-feedback",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("div",{className:"tutorial-page"},(0,r.mdx)("div",{className:"tutorial-oneliner"},"In this tutorial, you will learn how to add the PyTorch Live core package to an existing React Native project."),(0,r.mdx)("p",null,"If you have an existing React Native project and you want to add ML capabilities, you can add the ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-native-pytorch-core")," package. This package includes all code needed to run ML inference, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Canvas"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"Camera"),", and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ImageUtils"),"."),(0,r.mdx)("h2",{id:"installation"},"Installation"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"yarn add react-native-pytorch-core\n")),(0,r.mdx)("p",null,"On iOS you are done, but Android requires the following additional steps for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-native-pytorch-core")," package to work."),(0,r.mdx)("h3",{id:"additional-assets-for-metro"},"Additional Assets for Metro"),(0,r.mdx)("p",null,"If the PyTorch Mobile models are part of the React Native bundle, the Metro configuration needs to be changed to resolve the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ptl")," files."),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"This is only required if models are loaded from the bundle using ",(0,r.mdx)("inlineCode",{parentName:"p"},"require('./path/to/model.ptl')"),". It is not required if models are loaded from the local file system or via a URL."))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="metro.config.js"',title:'"metro.config.js"'},"// get defaults assetExts array\nconst defaultAssetExts = require('metro-config/src/defaults/defaults')\n  .assetExts;\n\nmodule.exports = {\n  // ...\n\n  resolver: {\n    assetExts: [...defaultAssetExts, 'ptl'],\n  },\n\n  // ...\n};\n\n")),(0,r.mdx)("h3",{id:"additional-steps-on-android"},"Additional steps on Android"),(0,r.mdx)("p",null,"For the ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-native-pytorch-core")," React Native package to work on Android, it requires three changes to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"gradle.properties")," and the two ",(0,r.mdx)("inlineCode",{parentName:"p"},"build.gradle")," files to increase JVM memory, add Sonatype repository, and packaging options with pick first rule."),(0,r.mdx)("h4",{id:"increase-jvm-memory"},"Increase JVM Memory"),(0,r.mdx)("p",null,"Increase the memory for the JVM to avoid OutOfMemory exceptions during the packaging process."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell",metastring:'title="./android/gradle.properties"',title:'"./android/gradle.properties"'},"org.gradle.jvmargs=-Xmx4g\n")),(0,r.mdx)("p",null,"Without the increased memory, the packaging process might fail with the following error:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"* What went wrong:\nExecution failed for task ':app:packageDebug'.\n> A failure occurred while executing com.android.build.gradle.tasks.PackageAndroidArtifact$IncrementalSplitterRunnable\n   > java.lang.OutOfMemoryError (no error message)\n")),(0,r.mdx)("h4",{id:"sonatype-repository"},"Sonatype Repository"),(0,r.mdx)("p",null,"The PyTorch Mobile for Android dependencies are in the Sonatype repository. Add the repository url to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"allprojects > repositories"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell",metastring:'title="./android/build.gradle"',title:'"./android/build.gradle"'},'allprojects {\n    repositories {\n        // ...\n\n        maven {\n          url("https://oss.sonatype.org/content/repositories/snapshots")\n        }\n\n        // ...\n    }\n}\n')),(0,r.mdx)("h4",{id:"packaging-options"},"Packaging Options"),(0,r.mdx)("p",null,"Add ",(0,r.mdx)("inlineCode",{parentName:"p"},"pickFirst")," rule to ",(0,r.mdx)("inlineCode",{parentName:"p"},"packagingOptions"),". This is required because both React Native and PyTorch Mobile for Android use ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbjni"),". This rule will pick the first shared object (dynamic) library."),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"The comment for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"packagingOptions")," shows the error that will show if ",(0,r.mdx)("inlineCode",{parentName:"p"},"pickFirst")," is not set."))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell",metastring:'title="./android/app/build.gradle"',title:'"./android/app/build.gradle"'},"android {\n    // ...\n\n    /**\n     * Without the packaging options, it will result in the following build error:\n     *\n     * * What went wrong:\n     * Execution failed for task ':app:mergeDebugNativeLibs'.\n     * > A failure occurred while executing com.android.build.gradle.internal.tasks.Workers$ActionFacade\n     *    > More than one file was found with OS independent path 'lib/x86/libfbjni.so'\n     */\n    packagingOptions {\n        pickFirst '**/*.so'\n    }\n\n    // ...\n}\n")),(0,r.mdx)("h2",{id:"give-us-feedback"},"Give us feedback"),(0,r.mdx)(i.Z,{docTitle:"Add Package to Existing App",mdxType:"SurveyLinkButton"})))}m.isMDXComponent=!0}}]);