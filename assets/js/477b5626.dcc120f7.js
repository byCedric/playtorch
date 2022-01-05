"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3542],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),d=function(e){return function(n){var t=s(n.components);return a.createElement(e,r({},n,{components:t}))}},s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},x=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,x=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return t?a.createElement(x,o(o({ref:n},p),{},{components:t})):a.createElement(x,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=x;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}x.displayName="MDXCreateElement"},7681:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),l=["components"],o={id:"model-spec",sidebar_position:5},m="Model Specification",p={unversionedId:"api/model-spec",id:"api/model-spec",title:"Model Specification",description:"Model specification specifies the structure of model input and output, allowing the use of prebuilt transformations.",source:"@site/docs/api/model-spec.md",sourceDirName:"api",slug:"/api/model-spec",permalink:"/live/docs/api/model-spec",editUrl:"https://github.com/pytorch/live/edit/main/website/docs/api/model-spec.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"model-spec",sidebar_position:5},sidebar:"api",previous:{title:"CLI",permalink:"/live/docs/api/cli"}},d=[{value:"Pack, Input preprocessing",id:"pack-input-preprocessing",children:[{value:"Types",id:"types",children:[],level:3},{value:"Type <code>ImageTransform</code>:",id:"type-imagetransform",children:[],level:3}],level:2},{value:"Unpack, Output post processing.",id:"unpack-output-post-processing",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],s={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"model-specification"},"Model Specification"),(0,r.mdx)("div",{className:"tutorial-page"},(0,r.mdx)("p",null,"Model specification specifies the structure of model input and output, allowing the use of prebuilt transformations."),(0,r.mdx)("p",null,"It is stored as ",(0,r.mdx)("a",{parentName:"p",href:"https://pytorch.org/docs/stable/generated/torch.jit.load.html#torch.jit.load"},"extra_file of the model")," 'model/live.spec.json'."),(0,r.mdx)("p",null,"Example of model with specification preparation:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-py",metastring:"title=make_model.py",title:"make_model.py"},'from pathlib import Path\n\nimport torch\nimport torchvision\nfrom torch.utils.mobile_optimizer import optimize_for_mobile\n\nmodel = torchvision.models.mobilenet_v3_small(pretrained=True)\nmodel.eval()\nscript_model = torch.jit.script(model)\nscript_model_opt = optimize_for_mobile(script_model)\nspec = Path("live.spec.json").read_text()\nextra_files = {}\nextra_files["model/live.spec.json"] = spec\nscript_model_opt._save_for_lite_interpreter("model_with_spec.ptl", _extra_files=extra_files)\n')),(0,r.mdx)("p",null,"'model/live.spec.json' is a valid JSON file.\nWhich contains ",(0,r.mdx)("inlineCode",{parentName:"p"},"pack")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"unpack")," objects and may contain other root objects that will be used by both pack (input preprocessing) and unpack (model output post processing) functionality."),(0,r.mdx)("p",null,"The JavaScript side calls the model to forward specifying a plain javascript object that contains ",(0,r.mdx)("inlineCode",{parentName:"p"},"$key")," members of predefined types (Image, double, integer, string)."),(0,r.mdx)("p",null,"'model/live.spec.json' contains ",(0,r.mdx)("inlineCode",{parentName:"p"},'"$key"')," stubs that will be replaced with the values from the specified javascript object."),(0,r.mdx)("p",null,"Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json",metastring:"title=model/live.spec.json",title:"model/live.spec.json"},'{\n "pack": {\n   "type": "tuple",\n   "items": [\n     {\n       "type": "tensor_from_image",\n       "image": "image",\n       "transforms": [\n         {\n           "type": "image_to_image",\n           "name": "center_crop",\n           "width": "$cropWidth",\n           "height": "$cropHeight"\n         },\n         {\n           "type": "image_to_image",\n           "name": "scale",\n           "width": "$scaleWidth",\n           "height": "$scaleHeight"\n         },\n         {\n           "type": "image_to_tensor",\n           "name": "rgb_norm",\n           "mean": [0.0, 0.0, 0.0],\n           "std": [1.0, 1.0, 1.0]\n         }\n       ]\n     },\n     {\n       "type": "tensor",\n       "dtype": "float",\n       "sizes": [1, 3],\n       "items": [\n         "$scaleWidth",\n         "$scaleHeight",\n         "$scale"\n       ]\n     },\n     {\n       "type": "tensor",\n       "dtype": "float",\n       "sizes": [\n         1\n       ],\n       "items": [\n         "$should_run_track"\n       ]\n     },\n     {\n       "type": "tensor",\n       "dtype": "float",\n       "sizes": ["$rois_n", 4],\n       "items": "$rois"\n     }\n   ]\n },\n "unpack": {\n   "type": "tensor",\n   "dtype": "float",\n   "key": "scores"\n }\n}\n')),(0,r.mdx)("p",null,"Respective JavaScript for this spec:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const {\n  result: {scores: scores},\n  inferenceTime: time,\n} = await MobileModel.execute(modelInfo.model, {\n  image: image,\n  cropWidth: 448,\n  cropHeight: 448,\n  scaleWidth: 224,\n  scaleHeight: 224,\n  scale: 1.0,\n  rois_n: 3,\n  rois: [0, 0, 20, 20, 10, 10, 50, 50, 30, 30, 60, 60],\n  should_run_track: 0.0\n});\n")),(0,r.mdx)("h2",{id:"pack-input-preprocessing"},"Pack, Input preprocessing"),(0,r.mdx)("p",null,"Specified by ",(0,r.mdx)("inlineCode",{parentName:"p"},"pack")," object. Which represents the structure of the model input (which is torchscript (python) object that may contain PyTorch Tensors and plain python types (scalars, arrays, lists). Every object in ",(0,r.mdx)("inlineCode",{parentName:"p"},"pack")," has a ",(0,r.mdx)("inlineCode",{parentName:"p"},"type")," field, other fields are specific to that ",(0,r.mdx)("inlineCode",{parentName:"p"},"type"),"."),(0,r.mdx)("h3",{id:"types"},"Types"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tuple"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"items"),": array of the tuple items"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"scalar_bool"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value"),": true or false"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"scalar_long"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value"),": long value"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"scalar_double"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value"),": double value"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tensor"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"dtype"),': data type of the tensor "float" or "long"'),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"items"),": array of tensor data of specified dtype"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tensor_from_image"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"image"),": js image object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"transforms"),": array of chained transformations on the input image, the type ",(0,r.mdx)("inlineCode",{parentName:"li"},"ImageTransform"),":"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tensor_from_string"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tokenizer"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"bert"),":\nPrepares tensor dtype=long of token ids using bert vocabulary from  ",(0,r.mdx)("inlineCode",{parentName:"li"},".vocabulary_bert")," of spec json."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"gpt2"),":\nPrepares tensor dtype=long of token ids using bert vocabulary from  ",(0,r.mdx)("inlineCode",{parentName:"li"},".vocabulary_gpt2")," of spec json.")))))),(0,r.mdx)("h3",{id:"type-imagetransform"},"Type ",(0,r.mdx)("inlineCode",{parentName:"h3"},"ImageTransform"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},'type: "image_to_image" or "image_to_tensor"'),(0,r.mdx)("li",{parentName:"ul"},"name: the name of transformation"),(0,r.mdx)("li",{parentName:"ul"},"additional parameters specific to the particular type and name")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"image_to_image")," type:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"name"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"center_crop"),"\nCrops from the center part of the image with specified width and height.\nparameters:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"width"),": width of the result cropped image"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"height"),": width of the result cropped image"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"name"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"scale"),"\nScales input image to specified width and height.\nparameters:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"width"),": width of the result scaled image"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"height"),": height of the result scaled image")))),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"image_to_tensor")," type:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"name: ",(0,r.mdx)("inlineCode",{parentName:"li"},"rgb_norm"),"\nThe output is NCHW tensor from input image, normalized by specified mean and std.\nparameters:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"mean"),": array of 3 float numbers with values of mean for normalization"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"std"),": array of 3 float numbers with values of std for normalization")))),(0,r.mdx)("h2",{id:"unpack-output-post-processing"},"Unpack, Output post processing."),(0,r.mdx)("p",null,"The result of post processing is a plain javascript object (will call it output_jsmap further)."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"unpack")," object is the recursive structure of objects of predefined ",(0,r.mdx)("inlineCode",{parentName:"p"},"type"),"s."),(0,r.mdx)("p",null,"unpack type:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tuple"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"items"),": tuple items to unpack"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"list"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"items"),": list items to unpack"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"dict_string_key"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"items"),": tuple items to unpack"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tensor"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"key"),": key of the array of specified data type that contains tensor items in NCHW format."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"dtype"),': data of the tensor "float" or "long"'))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"scalar_long"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"key"),": key of the long value in output_jsmap"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"scalar_float"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"key"),": key of the double value in output_jsmap"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"scalar_bool"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"key"),": key of the bool value in output_jsmap"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"string"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"key"),": key of the string in output_jsmap"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tensor_to_string"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"key"),": key of the result string in output_jsmap"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"decoder"),":\n",(0,r.mdx)("inlineCode",{parentName:"li"},"gpt2"),":\nExpects tensor of long data type containing tokenIds. Decodes tokenIds using vocabulary in ",(0,r.mdx)("inlineCode",{parentName:"li"},".vocabulary_gpt2")," in the spec."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"bert_decode_qa_answer"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"key"),": key of the result string in output_jsmap")))),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},".vocabulary_gpt2")," expected json object containing ",(0,r.mdx)("inlineCode",{parentName:"p"},'\\"key\\"=id')),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},".vocabulary_bert")," expected string containing bert tokens separated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json",metastring:"title=bert_qa.json",title:"bert_qa.json"},'{\n  "vocabulary_bert": "[PAD]\\n[unused0]\\n[unused1]\\n[unused2]\\n[unused3]\\n[unused4]\\n[unused5]\\n...",\n  "pack": {\n    "type": "tensor_from_string",\n    "tokenizer": "bert",\n    "string": "$string",\n    "model_input_length": "$model_input_length"\n  },\n  "unpack": {\n    "type": "bert_decode_qa_answer",\n    "key": "bert_answer"\n  }\n}\n')),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json",metastring:"title=gpt2.json",title:"gpt2.json"},'{\n  "vocabulary_gpt2": { "!": 0, "\\"": 1, "#": 2, "$": 3, "%": 4, "&": 5, ... ,"<|endoftext|>": 50256},\n  "pack": {\n    "type": "tensor_from_string",\n    "tokenizer": "gpt2",\n    "string": "$string"\n  },\n  "unpack": {\n    "type": "tensor_to_string",\n    "decoder": "gpt2",\n    "key": "text"\n  }\n}\n'))))}u.isMDXComponent=!0}}]);