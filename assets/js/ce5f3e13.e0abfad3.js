"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4334],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return p},withMDXComponents:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){return function(t){var n=p(t.components);return a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,d(d({ref:t},s),{},{components:n})):a.createElement(g,d({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},43868:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r="surveyLinkBox_YpLv";function i(e){e.docTitle;return a.createElement("a",{href:"https://github.com/pytorch/live/issues/new?assignees=&labels=Tutorial+Feedback&template=tutorial_feedback.yml",target:"_blank"},a.createElement("div",{className:r},"Share what we can improve!"))}},6597:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(43868),d=["components"],l={id:"add-package",sidebar_position:3,title:"Add Package to Existing App"},s=void 0,c={unversionedId:"tutorials/add-package",id:"tutorials/add-package",title:"Add Package to Existing App",description:"In this tutorial, you will learn how to add the PyTorch Live core package to an existing React Native project.",source:"@site/docs/tutorials/add-package.mdx",sourceDirName:"tutorials",slug:"/tutorials/add-package",permalink:"/live/docs/tutorials/add-package",editUrl:"https://github.com/pytorch/live/edit/main/website/docs/tutorials/add-package.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"add-package",sidebar_position:3,title:"Add Package to Existing App"},sidebar:"docs",previous:{title:"Get Started Manually",permalink:"/live/docs/tutorials/get-started-manually"},next:{title:"Image Classification",permalink:"/live/docs/tutorials/image-classification"}},p=[{value:"In this tutorial, you will learn how to add the PyTorch Live core package to an existing React Native project.",id:"in-this-tutorial-you-will-learn-how-to-add-the-pytorch-live-core-package-to-an-existing-react-native-project",children:[],level:3},{value:"Installation",id:"installation",children:[{value:"Additional Assets for Metro",id:"additional-assets-for-metro",children:[],level:3},{value:"Additional steps on Android",id:"additional-steps-on-android",children:[{value:"Increase JVM Memory",id:"increase-jvm-memory",children:[],level:4},{value:"Sonatype Repository",id:"sonatype-repository",children:[],level:4},{value:"Packaging Options",id:"packaging-options",children:[],level:4}],level:3}],level:2},{value:"Give us feedback",id:"give-us-feedback",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"tutorial-page"},(0,i.mdx)("h3",{id:"in-this-tutorial-you-will-learn-how-to-add-the-pytorch-live-core-package-to-an-existing-react-native-project"},"In this tutorial, you will learn how to add the PyTorch Live core package to an existing React Native project."),(0,i.mdx)("p",null,"If you have an existing React Native project and you want to add ML capabilities, you can add the ",(0,i.mdx)("inlineCode",{parentName:"p"},"react-native-pytorch-core")," package. This package includes all code needed to run ML inference, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Canvas"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"Camera"),", and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ImageUtils"),"."),(0,i.mdx)("h2",{id:"installation"},"Installation"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"yarn add react-native-pytorch-core\n")),(0,i.mdx)("p",null,"On iOS you are done, but Android requires the following additional steps for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"react-native-pytorch-core")," package to work."),(0,i.mdx)("h3",{id:"additional-assets-for-metro"},"Additional Assets for Metro"),(0,i.mdx)("p",null,"If the PyTorch Mobile models are part of the React Native bundle, the Metro configuration needs to be changed to resolve the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ptl")," files."),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"This is only required if models are loaded from the bundle using ",(0,i.mdx)("inlineCode",{parentName:"p"},"require('./path/to/model.ptl')"),". It is not required if models are loaded from the local file system or via a URL."))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="metro.config.js"',title:'"metro.config.js"'},"// get defaults assetExts array\nconst defaultAssetExts = require('metro-config/src/defaults/defaults')\n  .assetExts;\n\nmodule.exports = {\n  // ...\n\n  resolver: {\n    assetExts: [...defaultAssetExts, 'ptl'],\n  },\n\n  // ...\n};\n\n")),(0,i.mdx)("h3",{id:"additional-steps-on-android"},"Additional steps on Android"),(0,i.mdx)("p",null,"For the ",(0,i.mdx)("inlineCode",{parentName:"p"},"react-native-pytorch-core")," React Native package to work on Android, it requires three changes to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"gradle.properties")," and the two ",(0,i.mdx)("inlineCode",{parentName:"p"},"build.gradle")," files to increase JVM memory, add Sonatype repository, and packaging options with pick first rule."),(0,i.mdx)("h4",{id:"increase-jvm-memory"},"Increase JVM Memory"),(0,i.mdx)("p",null,"Increase the memory for the JVM to avoid OutOfMemory exceptions during the packaging process."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell",metastring:'title="./android/gradle.properties"',title:'"./android/gradle.properties"'},"org.gradle.jvmargs=-Xmx4g\n")),(0,i.mdx)("p",null,"Without the increased memory, the packaging process might fail with the following error:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"* What went wrong:\nExecution failed for task ':app:packageDebug'.\n> A failure occurred while executing com.android.build.gradle.tasks.PackageAndroidArtifact$IncrementalSplitterRunnable\n   > java.lang.OutOfMemoryError (no error message)\n")),(0,i.mdx)("h4",{id:"sonatype-repository"},"Sonatype Repository"),(0,i.mdx)("p",null,"The PyTorch Mobile for Android dependencies are in the Sonatype repository. Add the repository url to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"allprojects > repositories"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell",metastring:'title="./android/build.gradle"',title:'"./android/build.gradle"'},'allprojects {\n    repositories {\n        // ...\n\n        maven {\n          url("https://oss.sonatype.org/content/repositories/snapshots")\n        }\n\n        // ...\n    }\n}\n')),(0,i.mdx)("h4",{id:"packaging-options"},"Packaging Options"),(0,i.mdx)("p",null,"Add ",(0,i.mdx)("inlineCode",{parentName:"p"},"pickFirst")," rule to ",(0,i.mdx)("inlineCode",{parentName:"p"},"packagingOptions"),". This is required because both React Native and PyTorch Mobile for Android use ",(0,i.mdx)("inlineCode",{parentName:"p"},"fbjni"),". This rule will pick the first shared object (dynamic) library."),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"The comment for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"packagingOptions")," shows the error that will show if ",(0,i.mdx)("inlineCode",{parentName:"p"},"pickFirst")," is not set."))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell",metastring:'title="./android/app/build.gradle"',title:'"./android/app/build.gradle"'},"android {\n    // ...\n\n    /**\n     * Without the packaging options, it will result in the following build error:\n     *\n     * * What went wrong:\n     * Execution failed for task ':app:mergeDebugNativeLibs'.\n     * > A failure occurred while executing com.android.build.gradle.internal.tasks.Workers$ActionFacade\n     *    > More than one file was found with OS independent path 'lib/x86/libfbjni.so'\n     */\n    packagingOptions {\n        pickFirst '**/*.so'\n    }\n\n    // ...\n}\n")),(0,i.mdx)("h2",{id:"give-us-feedback"},"Give us feedback"),(0,i.mdx)(o.Z,{docTitle:"Add Package to Existing App",mdxType:"SurveyLinkButton"})))}u.isMDXComponent=!0}}]);