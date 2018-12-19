webpackJsonp([56],{1654:function(e,s,t){e.exports=t(3685)},3685:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(3686),n=t(58),r=n(null,a.a,!1,null,null,null);s.default=r.exports},3686:function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",[e._v("Use in vue-cli 3")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[e._v("vue-cli")]),e._v(" is one of the best Vue application development tools. We are going to use "),t("code",{pre:!0},[e._v("antd")]),e._v(" within it and modify the webpack config for some customized needs.")]),e._v(" "),t("h2",{attrs:{id:"Install-and-Initialization"}},[e._v("Install and Initialization "),t("a",{staticClass:"anchor",attrs:{href:"#Install-and-Initialization","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("p",[e._v("We need to install "),t("code",{pre:!0},[e._v("vue-cli")]),e._v(" first, you may need install "),t("a",{attrs:{href:"https://github.com/yarnpkg/yarn/"}},[e._v("yarn")]),e._v(" too.")]),e._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[e._v("$ npm install -g @vue/cli\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# OR")]),e._v("\n$ yarn global add @vue/cli\n")])]),e._v(" "),t("p",[e._v("Create a new project named "),t("code",{pre:!0},[e._v("antd-demo")]),e._v(".")]),e._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[e._v("$ vue create antd-demo\n")])]),e._v(" "),t("p",[e._v("And, setup your vue project configuration.")]),e._v(" "),t("p",[e._v("The tool will create and initialize environment and dependencies automatically,"),t("br"),e._v("\nplease try config your proxy setting or use another npm registry if any network errors happen during it."),t("br")]),e._v(" "),t("p",[e._v("Then we go inside "),t("code",{pre:!0},[e._v("antd-demo")]),e._v(" and start it.")]),e._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[e._v("$ "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" antd-demo\n$ npm run serve\n")])]),e._v(" "),t("p",[e._v('Open the browser at http://localhost:8080/. It renders a header saying "Welcome to Your Vue.js App" on the page.')]),e._v(" "),t("h2",{attrs:{id:"Import-antd"}},[e._v("Import antd "),t("a",{staticClass:"anchor",attrs:{href:"#Import-antd","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("p",[e._v("Below is the default directory structure.")]),e._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("├── README.md\n├── babel.config\n├── package.json\n├── public\n│   ├── favicon.ico\n│   └── index.html\n├── src\n│   ├── assets\n│   │   └── logo.png\n│   ├── components\n│   │   └── HelloWorld.vue\n│   ├── App.vue\n│   └── main.js\n└── yarn.lock\n")])]),e._v(" "),t("p",[e._v("Now we install "),t("code",{pre:!0},[e._v("ant-design-vue")]),e._v(" from yarn or npm.")]),e._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[e._v("$ yarn add ant-design-vue\n")])]),e._v(" "),t("p",[e._v("Modify "),t("code",{pre:!0},[e._v("src/main.js")]),e._v(", import Button component from "),t("code",{pre:!0},[e._v("antd")]),e._v(".")]),e._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'vue'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Button "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'ant-design-vue/lib/button'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'ant-design-vue/dist/antd.css'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" App "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'./App'")]),e._v("\n\nVue.component(Button.name, Button)\n\nVue.config.productionTip = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("/* eslint-disable no-new */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Vue({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("el")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'#app'")]),e._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("components")]),e._v(": { App },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("template")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'<App/>'")]),e._v("\n})\n")])]),e._v(" "),t("p",[e._v("Modify "),t("code",{pre:!0},[e._v("src/App.vue")]),e._v("。")]),e._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[e._v("<template>\n  "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("id")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"app"')]),e._v(">")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("img")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("src")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"./assets/logo.png"')]),e._v(">")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("a-button")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"primary"')]),e._v(">")]),e._v("Button>"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("a-button")]),e._v(">")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("router-view")]),e._v("/>")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n...\n")])])]),e._v(" "),t("p",[e._v("Ok, you should now see a blue primary button displayed on the page. Next you can choose any components of "),t("code",{pre:!0},[e._v("antd")]),e._v(" to develop your application. Visit other workflows of "),t("code",{pre:!0},[e._v("vue-cli")]),e._v(" at its "),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/master/README.md"}},[e._v("User Guide ")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"Advanced-Guides"}},[e._v("Advanced Guides "),t("a",{staticClass:"anchor",attrs:{href:"#Advanced-Guides","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("p",[e._v("We are successfully running antd components now but in the real world, there are still lots of problems about antd-demo."),t("br"),e._v("\nFor instance, we actually import all styles of components in the project which may be a network performance issue."),t("br")]),e._v(" "),t("p",[e._v("Now we need to customize the default webpack config.")]),e._v(" "),t("h3",{attrs:{id:"Use-babel-plugin-import"}},[e._v("Use babel-plugin-import "),t("a",{staticClass:"anchor",attrs:{href:"#Use-babel-plugin-import","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[e._v("babel-plugin-import")]),e._v(" is a babel plugin for importing components on demand ("),t("a",{attrs:{href:"/ant-design-vue/docs/vue/getting-started/#Import-on-Demand"}},[e._v("How does it work?")]),e._v(").")]),e._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[e._v("$ yarn add babel-plugin-import --dev\n")])]),e._v(" "),t("p",[e._v("Modify "),t("code",{pre:!0},[e._v(".babelrc")]),e._v(".")]),e._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-diff"}},[e._v('  {\n    "presets": [\n      ["env", {\n        "modules": false,\n        "targets": {\n          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]\n        }\n      }],\n      "stage-2"\n    ],\n'),t("span",{pre:!0,attrs:{class:"hljs-deletion"}},[e._v('-   "plugins": ["transform-vue-jsx", "transform-runtime"]')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[e._v('+   "plugins": [')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[e._v('+     "transform-vue-jsx",')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[e._v('+     "transform-runtime",')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[e._v('+     ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[e._v("+   ]")]),e._v("\n  }\n")])]),e._v(" "),t("p",[e._v("Remove the "),t("code",{pre:!0},[e._v("import 'ant-design-vue/dist/antd.css';")]),e._v(" statement added before because "),t("code",{pre:!0},[e._v("babel-plugin-import")]),e._v(" will import styles and import components like below:")]),e._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-diff"}},[e._v("  // src/main.js\n  import Vue from 'vue'\n"),t("span",{pre:!0,attrs:{class:"hljs-deletion"}},[e._v("- import Button from 'ant-design-vue/lib/button';")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[e._v("+ import { Button } from 'ant-design-vue';")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-deletion"}},[e._v("- import 'ant-design-vue/dist/antd.css'")]),e._v("\n  import App from './App'\n\n  Vue.component(Button.name, Button)\n\n  Vue.config.productionTip = false\n\n  /* eslint-disable no-new */\n  new Vue({\n    el: '#app',\n    components: { App },\n    template: '<App/>'\n  })\n")])]),e._v(" "),t("p",[e._v("Then reboot with "),t("code",{pre:!0},[e._v("npm run dev")]),e._v(" and visit the demo page, you should not find any "),t("a",{attrs:{href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"}},[e._v("warning messages")]),e._v(" in the console, which prove that the "),t("code",{pre:!0},[e._v("import on demand")]),e._v(" config is working now. You will find more info about it in "),t("a",{attrs:{href:"/ant-design-vue/docs/vue/getting-started/#Import-on-Demand"}},[e._v("this guide")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"Customize-Theme"}},[e._v("Customize Theme "),t("a",{staticClass:"anchor",attrs:{href:"#Customize-Theme","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("p",[e._v("According to the "),t("a",{attrs:{href:"/ant-design-vue/docs/vue/customize-theme"}},[e._v("Customize Theme documentation")]),e._v(", to customize the theme, we need to modify "),t("code",{pre:!0},[e._v("less")]),e._v(" variables with tools such as "),t("a",{attrs:{href:"https://github.com/webpack/less-loader"}},[e._v("less-loader")]),e._v(".")])])}],r={render:a,staticRenderFns:n};s.a=r}});