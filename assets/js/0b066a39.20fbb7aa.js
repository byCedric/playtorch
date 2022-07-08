"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5768],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){return function(t){var n=m(t.components);return a.createElement(e,l({},t,{components:n}))}},m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,h=p["".concat(o,".").concat(u)]||p[u]||c[u]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26670:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{defaultEndpoint:t="http://127.0.0.1:5000/",defaultKey:n=""}=e;const[r,l]=(0,a.useState)(t),[o,i]=(0,a.useState)(n),[s,d]=(0,a.useState)(""),[p,m]=(0,a.useState)(!1),[u,c]=(0,a.useState)(null),[h,v]=(0,a.useState)(null);return a.createElement("div",null,a.createElement("form",{onSubmit:async function(e){e.preventDefault(),m(!0),c(null),v(null);const t=new FormData;t.set(o,s);const n=await fetch(r,{method:"POST",body:t});if(m(!1),n.ok){const e=await n.json();c(JSON.stringify(e,null,2))}else v("Something went wrong")}},a.createElement("label",null,"Endpoint:",a.createElement("input",{type:"text",value:r,onChange:e=>l(e.target.value)})),a.createElement("div",null,a.createElement("label",null,"Key:",a.createElement("input",{type:"text",value:o,onChange:e=>i(e.target.value)})),a.createElement("label",null,"Value:",a.createElement("input",{type:"text",value:s,onChange:e=>d(e.target.value)}))),a.createElement("input",{type:"submit",value:"Submit"})),p&&a.createElement("p",null,"Loading..."),h&&a.createElement("p",null,h),u&&a.createElement("div",null,a.createElement("pre",null,u)))}},43868:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const r="surveyLinkBox_bC1w";function l(e){let{docTitle:t}=e;return a.createElement("a",{href:"https://github.com/pytorch/live/issues/new?assignees=&labels=Tutorial+Feedback&template=tutorial_feedback.yml",target:"_blank"},a.createElement("div",{className:r},"Share what we can improve!"))}},84398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(83117),r=(n(67294),n(3905)),l=n(43868),o=n(26670);const i={id:"server-model",sidebar_position:5,title:"Server Model"},s=void 0,d={unversionedId:"tutorials/server-model",id:"version-0.1/tutorials/server-model",title:"Server Model",description:"In this tutorial, we will be creating a simple webserver with a Python framework called Flask to serve a pretrained text generation model.",source:"@site/versioned_docs/version-0.1/tutorials/server-model.mdx",sourceDirName:"tutorials",slug:"/tutorials/server-model",permalink:"/live/docs/0.1/tutorials/server-model",draft:!1,editUrl:"https://github.com/pytorch/live/edit/main/website/versioned_docs/version-0.1/tutorials/server-model.mdx",tags:[],version:"0.1",sidebarPosition:5,frontMatter:{id:"server-model",sidebar_position:5,title:"Server Model"},sidebar:"docs",previous:{title:"Prepare Custom Model",permalink:"/live/docs/0.1/tutorials/prepare-custom-model"},next:{title:"Connecting to a Server Model",permalink:"/live/docs/0.1/tutorials/connecting-to-a-server"}},p={},m=[{value:"In this tutorial, we will be creating a simple webserver with a Python framework called Flask to serve a pretrained text generation model.",id:"in-this-tutorial-we-will-be-creating-a-simple-webserver-with-a-python-framework-called-flask-to-serve-a-pretrained-text-generation-model",level:3},{value:"Set up environment",id:"set-up-environment",level:2},{value:"Run a pretrained model",id:"run-a-pretrained-model",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Instantiate model pipeline",id:"instantiate-model-pipeline",level:3},{value:"Test run model pipeline",id:"test-run-model-pipeline",level:3},{value:"Hello World Flask app",id:"hello-world-flask-app",level:2},{value:"Install dependencies",id:"install-dependencies-1",level:3},{value:"Write initial server code",id:"write-initial-server-code",level:3},{value:"Accepting input to the server",id:"accepting-input-to-the-server",level:3},{value:"Expose model via Flask server",id:"expose-model-via-flask-server",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Give us feedback",id:"give-us-feedback",level:2}],u={toc:m};function c(e){let{components:t,...i}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("div",{className:"tutorial-page"},(0,r.mdx)("h3",{id:"in-this-tutorial-we-will-be-creating-a-simple-webserver-with-a-python-framework-called-flask-to-serve-a-pretrained-text-generation-model"},"In this tutorial, we will be creating a simple webserver with a Python framework called Flask to serve a pretrained text generation model."),(0,r.mdx)("p",null,"We will walk through the following steps:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Set up environment"),(0,r.mdx)("li",{parentName:"ol"},"Run a pretrained model"),(0,r.mdx)("li",{parentName:"ol"},"Create Hello World Flask app"),(0,r.mdx)("li",{parentName:"ol"},"Expose model via Flask server")),(0,r.mdx)("h2",{id:"set-up-environment"},"Set up environment"),(0,r.mdx)("p",null,"First things first, let's create a directory where we can keep all of our code. To do that, open your terminal and make a new directory called ",(0,r.mdx)("inlineCode",{parentName:"p"},"ptl-server")," by running the following command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"mkdir ptl-server\n")),(0,r.mdx)("p",null,"Now that the directory is created, let's go into it by running:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"cd ptl-server\n")),(0,r.mdx)("p",null,"In this directory, we will create a Python virtual environment. Python 3 has built in support for virtual environments. Make sure you have Python 3 installed and then create your new virtual environment by running:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"python3 -m venv ./venv\n")),(0,r.mdx)("p",null,"Now if we check the contents of our directory by running ",(0,r.mdx)("inlineCode",{parentName:"p"},"ls")," we will see a new subdirectory called ",(0,r.mdx)("inlineCode",{parentName:"p"},"venv"),"."),(0,r.mdx)("p",null,"We can activate our virtual environment by running:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"source ./venv/bin/activate\n")),(0,r.mdx)("p",null,"Now that we have activated our virtual environment, any dependencies we install will stay local to this project. Isolating dependencies per project means we avoid any version management issues-- think cross contamination."),(0,r.mdx)("p",null,"You also can deactivate your virtual environment at anytime by running ",(0,r.mdx)("inlineCode",{parentName:"p"},"deactivate"),", but we want to remain in our virtual environment for now, so don't run that :) But if you do, just activate it again with the same command from before."),(0,r.mdx)("h2",{id:"run-a-pretrained-model"},"Run a pretrained model"),(0,r.mdx)("p",null,"For this tutorial, we will be using ",(0,r.mdx)("a",{parentName:"p",href:"https://huggingface.co/EleutherAI/gpt-neo-1.3B"},"Eleuther AI's GPT-3 model from Hugging Face")," to generate text based on a user submitted prompt."),(0,r.mdx)("h3",{id:"install-dependencies"},"Install dependencies"),(0,r.mdx)("p",null,"First, we need to install ",(0,r.mdx)("inlineCode",{parentName:"p"},"PyTorch")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"transformers"),", the library maintained created by Hugging Face that helps download and run models that they host. Install it by running:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"pip install torch transformers\n")),(0,r.mdx)("p",null,"Now, as a good practice to keep track of our dependencies, let's save our pip dependencies in a requirements file. We can do that by running:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"pip freeze > requirements.txt\n")),(0,r.mdx)("p",null,"If you check the ",(0,r.mdx)("inlineCode",{parentName:"p"},"requirements.txt")," file, you will notice ",(0,r.mdx)("inlineCode",{parentName:"p"},"torch")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"transformers")," are listed with their version numbers and the other entries are the packages they depend on."),(0,r.mdx)("h3",{id:"instantiate-model-pipeline"},"Instantiate model pipeline"),(0,r.mdx)("p",null,"Now let's write the code that interacts with the GPT-3 model."),(0,r.mdx)("p",null,"Make a new file in the directory called ",(0,r.mdx)("inlineCode",{parentName:"p"},"gpt.py"),". Import ",(0,r.mdx)("inlineCode",{parentName:"p"},"pipeline")," from ",(0,r.mdx)("inlineCode",{parentName:"p"},"transformers")," and define a function called ",(0,r.mdx)("inlineCode",{parentName:"p"},"generate")," that accepts a parameter called ",(0,r.mdx)("inlineCode",{parentName:"p"},"prompt"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="gpt.py"',title:'"gpt.py"'},"from transformers import pipeline\n\ndef generate(prompt):\n    pass\n")),(0,r.mdx)("p",null,"Now we need to instantiate a ",(0,r.mdx)("inlineCode",{parentName:"p"},"pipeline")," to run the GPT-3 model and use it within our function to generate text based off the ",(0,r.mdx)("inlineCode",{parentName:"p"},"prompt")," parameter."),(0,r.mdx)("p",null,"We'll add some print statements so we know what is happening when we run it."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'{3-5,8-12} title="gpt.py"',"{3-5,8-12}":!0,title:'"gpt.py"'},'from transformers import pipeline\n\nprint("Instantiating model...")\ngpt_pipeline = pipeline(\'text-generation\', model=\'EleutherAI/gpt-neo-1.3B\')\nprint("Model instantiated!")\n\ndef generate(prompt):\n    print("Running model with prompt: ", prompt)\n    model_output = gpt_pipeline(prompt, do_sample=True, min_length=50)\n    generated_text = model_output[0]["generated_text"]\n    print("Model done running!")\n    return generated_text\n')),(0,r.mdx)("h3",{id:"test-run-model-pipeline"},"Test run model pipeline"),(0,r.mdx)("p",null,"Now that we have are pipeline ready to run, let's write a small test file called ",(0,r.mdx)("inlineCode",{parentName:"p"},"test_gpt.py")," so we can see it in action. We won't do any assertions, we'll just be trying to see what the output is like."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="test_gpt.py"',title:'"test_gpt.py"'},'from gpt import generate\n\nresult = generate("I love chicken so much that")\nprint("Result: ", result)\n')),(0,r.mdx)("p",null,"We can run this from the terminal with the simple command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"python test_gpt.py\n")),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"The first time it runs, it will download the model which is about 5.3GB of data. Subsequent runs will go faster."),(0,r.mdx)("p",{parentName:"div"},"Also, when run from a script like this, the pipeline has to be created every run. That is an additional ~1-3 minutes of runtime. Once we have a server, that pipeline creation will happen once on start, so calls to the server won't have to wait."))),(0,r.mdx)("p",null,"You should see some kind of output like:"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Instantiating model..."),(0,r.mdx)("p",{parentName:"blockquote"},"Model instantiated!"),(0,r.mdx)("p",{parentName:"blockquote"},"Running model with prompt: I love chicken so much that"),(0,r.mdx)("p",{parentName:"blockquote"},"Model done running!"),(0,r.mdx)("p",{parentName:"blockquote"},"Result: I love chicken so much that I am always looking for it and that is why I often cook with my mom especially when my sister is visiting. There are so many good recipes for chicken (not that we have a lot!). My mom\u2019s")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("em",{parentName:"strong"},"We did it!"))," We got GPT-3 running! Now let's get a simple server going so we can make this model usable by other devices."),(0,r.mdx)("h2",{id:"hello-world-flask-app"},"Hello World Flask app"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/2.0.x/"},"Flask")," is a popular Python server framework. It enables us to connect to clients over http with just a few lines of code."),(0,r.mdx)("h3",{id:"install-dependencies-1"},"Install dependencies"),(0,r.mdx)("p",null,"To get started we need to install ",(0,r.mdx)("inlineCode",{parentName:"p"},"Flask")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"flask-cors")," with pip and then we will update our ",(0,r.mdx)("inlineCode",{parentName:"p"},"requirements.txt")," file to have our new dependencies."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"pip install Flask flask-cors\npip freeze > requirements.txt\n")),(0,r.mdx)("h3",{id:"write-initial-server-code"},"Write initial server code"),(0,r.mdx)("p",null,"With the dependencies installed, we are ready to create our server. Let's create a file called ",(0,r.mdx)("inlineCode",{parentName:"p"},"server.py")," and add the following code:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="server.py"',title:'"server.py"'},'from flask import Flask\nfrom flask_cors import CORS\n\napp = Flask(__name__)\nCORS(app)\n\n@app.route("/")\ndef hello_world():\n    return "<p>Hello, World!</p>"\n\napp.run(host="0.0.0.0")\n')),(0,r.mdx)("p",null,"Let's walk through what this code does:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"We import the ",(0,r.mdx)("inlineCode",{parentName:"li"},"Flask")," dependency and then the ",(0,r.mdx)("inlineCode",{parentName:"li"},"CORS")," dependency."),(0,r.mdx)("li",{parentName:"ul"},"We create a new ",(0,r.mdx)("inlineCode",{parentName:"li"},"Flask")," server instance that we call ",(0,r.mdx)("inlineCode",{parentName:"li"},"app"),"."),(0,r.mdx)("li",{parentName:"ul"},"We use the ",(0,r.mdx)("inlineCode",{parentName:"li"},"CORS")," function on our ",(0,r.mdx)("inlineCode",{parentName:"li"},"app")," to allow any device to access our server."),(0,r.mdx)("li",{parentName:"ul"},"We create a function called ",(0,r.mdx)("inlineCode",{parentName:"li"},"hello_world"),' that simply returns html that says "Hello, World!".'),(0,r.mdx)("li",{parentName:"ul"},"We tell the ",(0,r.mdx)("inlineCode",{parentName:"li"},"app")," to run our ",(0,r.mdx)("inlineCode",{parentName:"li"},"hello_world")," function when it gets a request to the ",(0,r.mdx)("em",{parentName:"li"},"index")," endpoint ",(0,r.mdx)("inlineCode",{parentName:"li"},'"/"'),"."),(0,r.mdx)("li",{parentName:"ul"},"We start our server by calling ",(0,r.mdx)("inlineCode",{parentName:"li"},'app.run(host="0.0.0.0")'),' and use `host="0.0.0.0" to make it accessible by external devices.')),(0,r.mdx)("p",null,"Let's run it and see what it does! Run the following command in your terminal:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"python server.py\n")),(0,r.mdx)("p",null,"You should get some output that looks like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"}," * Serving Flask app 'server' (lazy loading)\n * Environment: production\n   WARNING: This is a development server. Do not use it in a production deployment.\n   Use a production WSGI server instead.\n * Debug mode: off\n * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)\n")),(0,r.mdx)("p",null,"Let's open up our web browser to the ",(0,r.mdx)("a",{parentName:"p",href:"http://127.0.0.1:5000/"},"the link it provides"),". The link is just IP address that redirects to your local machine at port 5000."),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:n(25281).Z,width:"2072",height:"1640"})),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("em",{parentName:"strong"},"Voila!")),' Our server responds to our browser\'s request with the "Hello, World!" that we told it to.'),(0,r.mdx)("h3",{id:"accepting-input-to-the-server"},"Accepting input to the server"),(0,r.mdx)("p",null,"Now let's enhance our server to make it so we can receive input from a client."),(0,r.mdx)("p",null,"We'll do this by adding a new function to our server called ",(0,r.mdx)("inlineCode",{parentName:"p"},"echo")," that simply returns a JSON object containing what the user sent. We'll make it so a client can send a ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST")," request to the endpoint ",(0,r.mdx)("inlineCode",{parentName:"p"},"/echo")," to trigger our new function."),(0,r.mdx)("p",null,"Note that we also take a couple more dependencies from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"flask")," module on line 1."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'{1,11-16} title="server.py"',"{1,11-16}":!0,title:'"server.py"'},'from flask import Flask, jsonify, request\nfrom flask_cors import CORS\n\napp = Flask(__name__)\nCORS(app)\n\n@app.route("/")\ndef hello_world():\n    return "<p>Hello, World!</p>"\n\n@app.route("/echo", methods=["POST"])\ndef echo():\n    data = request.form\n    user_said = data["text"]\n    response = jsonify({"echo": user_said})\n    return response\n\napp.run(host="0.0.0.0")\n')),(0,r.mdx)("p",null,"Now that we have an endpoint ready to accept our input, let's run our server and test it out with the form below. Whatever you put in the ",(0,r.mdx)("strong",{parentName:"p"},"value")," box should come back from the server."),(0,r.mdx)(o.Z,{defaultEndpoint:"http://127.0.0.1:5000/echo",defaultKey:"text",mdxType:"HttpTester"}),(0,r.mdx)("h2",{id:"expose-model-via-flask-server"},"Expose model via Flask server"),(0,r.mdx)("p",null,"So we have gotten a machine learning model running and a server that we can talk to from any client. Now let's hook the two up so we can run ML from any client!"),(0,r.mdx)("p",null,"Let's make a new endpoint just like our ",(0,r.mdx)("inlineCode",{parentName:"p"},"/echo")," endpoint, but instead of just returning what we get from the client, let's return the GPT-3 model's output."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'{3,19-25} title="server.py"',"{3,19-25}":!0,title:'"server.py"'},'from flask import Flask, jsonify, request\nfrom flask_cors import CORS\nfrom gpt import generate\n\napp = Flask(__name__)\nCORS(app)\n\n@app.route("/")\ndef hello_world():\n    return "<p>Hello, World!</p>"\n\n@app.route("/echo", methods=["POST"])\ndef echo():\n    data = request.form\n    user_said = data["text"]\n    response = jsonify({"echo": user_said})\n    return response\n\n@app.route("/gpt", methods=["POST"])\ndef gpt():\n    data = request.form\n    prompt = data["prompt"]\n    generated_text = generate(prompt)\n    response = jsonify({"generated_text": generated_text})\n    return response\n\napp.run(host="0.0.0.0")\n')),(0,r.mdx)("p",null,"Once you add the new ",(0,r.mdx)("inlineCode",{parentName:"p"},"gpt")," function and make it accessible at the ",(0,r.mdx)("inlineCode",{parentName:"p"},"/gpt")," endpoint, your server should reload itself and you should see our print statements from earlier in your server logs."),(0,r.mdx)("p",null,"If not, kill your server by pressing ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctrl + c")," and restart it."),(0,r.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"It should take a while longer to start now that you are instantiating the pipeline."))),(0,r.mdx)("p",null,"Now let's test our text generation model with the form below. This time you should seen a JSON object with text that starts with your prompt and then continues with generated text!"),(0,r.mdx)(o.Z,{defaultEndpoint:"http://127.0.0.1:5000/gpt",defaultKey:"prompt",mdxType:"HttpTester"}),(0,r.mdx)("p",null,"You can find the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/tree/main/examples/gpt3-server-tutorials/ptl-server"},"completed versions of the source code")," we've written in this tutorial in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"examples")," folder Pytorch Live GitHub repo."),(0,r.mdx)("h2",{id:"next-steps"},"Next steps"),(0,r.mdx)("p",null,"Want see how to connect to this server from an app? Check out our tutorial for ",(0,r.mdx)("a",{parentName:"p",href:"/docs/tutorials/connecting-to-a-server"},"connecting to our server from a React Native app"),"."),(0,r.mdx)("p",null,"Want to enhance your server to support a model with more complex input like images? Check out our tutorial with VQGAN + CLIP to generate images from text descriptions."),(0,r.mdx)("h2",{id:"give-us-feedback"},"Give us feedback"),(0,r.mdx)(l.Z,{docTitle:"Server Model",mdxType:"SurveyLinkButton"})))}c.isMDXComponent=!0},25281:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/server-model-hello-world-998d9993c9acc45cbf5de6911b20d907.png"}}]);