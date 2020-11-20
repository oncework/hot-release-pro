(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/renderer/routes/Snippet/Editor/MarkdownEditor/Preview.jsx":function(e,r,o){"use strict";(function(e){var t,d=o("./node_modules/highlight.js/lib/index.js"),i=o.n(d),n=o("./node_modules/markdown-it/index.js"),a=o.n(n),l=o("./node_modules/markdown-it-task-lists/index.js"),_=o.n(l),s=o("./node_modules/markdown-it-katex/index.js"),m=o.n(s);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const p=a()({highlight:(e,r)=>i.a.highlightAuto(e).value}).use(_.a).use(m.a,{throwOnError:!1,errorColor:" #cc0000"}).use(o("./node_modules/markdown-it-abbr/index.js")).use(o("./node_modules/markdown-it-container/index.js"),"warning").use(o("./node_modules/markdown-it-deflist/index.js")).use(o("./node_modules/markdown-it-emoji/index.js")).use(o("./node_modules/markdown-it-footnote/index.js")).use(o("./node_modules/markdown-it-ins/index.js")).use(o("./node_modules/markdown-it-mark/index.js")).use(o("./node_modules/markdown-it-sub/index.js")).use(o("./node_modules/markdown-it-sup/index.js")),c=p;var h,k;r.a=c,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(p,"Md","/Users/dxu/job/once/src/renderer/routes/Snippet/Editor/MarkdownEditor/Preview.jsx"),h.register(c,"default","/Users/dxu/job/once/src/renderer/routes/Snippet/Editor/MarkdownEditor/Preview.jsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,o("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/renderer/routes/Snippet/Editor/MarkdownEditor/index.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),_Preview__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/renderer/routes/Snippet/Editor/MarkdownEditor/Preview.jsx"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_shared_debug__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/debug.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/message/index.js"),electron__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("electron"),electron__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_6__),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};class MarkdownEditor extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(...e){super(...e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"markdownEditor",react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef()),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"mdHtml",null),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"mdSrc",null),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"permalink",null),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"scrollMap",null),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"state",{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!0,typographer:!0,_highlight:!0,_strict:!1,_view:"html",content:""}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"updateContent",async e=>{this.removeALink(),this.removeAnchor(),await this.setStateAsync({content:e}),this.onALink(),this.onAnchor()}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"listenLink",(e,r)=>{r.preventDefault(),electron__WEBPACK_IMPORTED_MODULE_6__.shell.openExternal(e)}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"listenAnchor",e=>{e.preventDefault(),antd__WEBPACK_IMPORTED_MODULE_5__.a.warning("Function not implemented, just waiting...")}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onALink",()=>{this.markdownEditor.current.querySelectorAll('a[href^="http"]').forEach(e=>e.addEventListener("click",this.listenLink.bind(this,e.href)))}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"removeALink",()=>{this.markdownEditor.current.querySelectorAll('a[href^="http"]').forEach(e=>e.removeEventListener("click",this.listenLink.bind(this,e.href)))}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onAnchor",()=>{this.markdownEditor.current.querySelectorAll('a[href^="#"]').forEach(e=>e.addEventListener("click",this.listenAnchor))}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"removeAnchor",()=>{this.markdownEditor.current.querySelectorAll('a[href^="#"]').forEach(e=>e.removeEventListener("click",this.listenAnchor))})}setStateAsync(e){return new Promise(r=>{this.setState(e,r)})}async componentDidMount(){this.props.onRef(this),await this.setStateAsync({content:this.props.content||""}),this.onALink(),this.onAnchor()}componentWillUnmount(){this.removeALink(),this.removeAnchor()}render(){return Object(_shared_debug__WEBPACK_IMPORTED_MODULE_4__.a)("[MarkdownEditor] rendering..."),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{ref:this.markdownEditor,style:{height:this.props.height},dangerouslySetInnerHTML:{__html:`<div class='markdown-editor' style='height: ${this.props.height}px; overflow: auto;'>${_Preview__WEBPACK_IMPORTED_MODULE_2__.a.render(this.state.content)}</div>`},className:"jsx-3900670357 editor-area"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a,{id:"3900670357"},'.markdown-editor{padding:15px 20px;}.markdown-editor pre{font-size:13px !important;}.markdown-editor body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Segoe UI Symbol";font-size:14px;line-height:1.6 !important;padding-top:10px;padding-bottom:10px;background-color:white;padding:30px;}.markdown-editor body > *:first-child{margin-top:0 !important;}.markdown-editor body > *:last-child{margin-bottom:0 !important;}.markdown-editor a{color:#4183c4;-webkit-text-decoration:none;text-decoration:none;}.markdown-editor a.absent{color:#cc0000;}.markdown-editor a.anchor{display:block;padding-left:30px;margin-left:-30px;cursor:pointer;position:absolute;top:0;left:0;bottom:0;}.markdown-editor h1,.markdown-editor h2,.markdown-editor h3,.markdown-editor h4,.markdown-editor h5,.markdown-editor h6{margin:20px 0 10px;padding:0;font-weight:bold;-webkit-font-smoothing:antialiased;cursor:text;position:relative;}.markdown-editor h2:first-child,.markdown-editor h1:first-child,.markdown-editor h1:first-child + h2,.markdown-editor h3:first-child,.markdown-editor h4:first-child,.markdown-editor h5:first-child,.markdown-editor h6:first-child{margin-top:0;padding-top:0;}.markdown-editor h1:hover a.anchor,.markdown-editor h2:hover a.anchor,.markdown-editor h3:hover a.anchor,.markdown-editor h4:hover a.anchor,.markdown-editor h5:hover a.anchor,.markdown-editor h6:hover a.anchor{-webkit-text-decoration:none;text-decoration:none;}.markdown-editor h1 tt,.markdown-editor h1 code{font-size:inherit;}.markdown-editor h2 tt,.markdown-editor h2 code{font-size:inherit;}.markdown-editor h3 tt,.markdown-editor h3 code{font-size:inherit;}.markdown-editor h4 tt,.markdown-editor h4 code{font-size:inherit;}.markdown-editor h5 tt,.markdown-editor h5 code{font-size:inherit;}.markdown-editor h6 tt,.markdown-editor h6 code{font-size:inherit;}.markdown-editor h1{font-size:28px;}.markdown-editor h2{font-size:24px;border-bottom:1px solid #cccccc;}.markdown-editor h3{font-size:18px;}.markdown-editor h4{font-size:16px;}.markdown-editor h5{font-size:14px;}.markdown-editor h6{color:#777777;font-size:14px;}.markdown-editor p,.markdown-editor blockquote,.markdown-editor ul,.markdown-editor ol,.markdown-editor dl,.markdown-editor li,.markdown-editor table,.markdown-editor pre{margin:5px 0;line-height:1.5;}.markdown-editor li{margin:0;list-style-type:disc;}.markdown-editor hr{background:transparent repeat-x 0 0;border:0 none;color:#cccccc;height:4px;padding:0;}.markdown-editor body > h2:first-child{margin-top:0;padding-top:0;}.markdown-editor body > h1:first-child{margin-top:0;padding-top:0;}.markdown-editor body > h1:first-child + h2{margin-top:0;padding-top:0;}.markdown-editor body > h3:first-child,.markdown-editor body > h4:first-child,.markdown-editor body > h5:first-child,.markdown-editor body > h6:first-child{margin-top:0;padding-top:0;}.markdown-editor a:first-child h1,.markdown-editor a:first-child h2,.markdown-editor a:first-child h3,.markdown-editor a:first-child h4,.markdown-editor a:first-child h5,.markdown-editor a:first-child h6{margin-top:0;padding-top:0;}.markdown-editor h1 p,.markdown-editor h2 p,.markdown-editor h3 p,.markdown-editor h4 p,.markdown-editor h5 p,.markdown-editor h6 p{margin-top:0;}.markdown-editor li p.first{display:inline-block;}.markdown-editor ul,.markdown-editor ol{padding-left:30px;}.markdown-editor ul :first-child,.markdown-editor ol :first-child{margin-top:0;}.markdown-editor ul :last-child,.markdown-editor ol :last-child{margin:0;}.markdown-editor dl{padding:0;}.markdown-editor dl dt{font-size:14px;font-weight:bold;font-style:italic;padding:0;margin:15px 0 5px;}.markdown-editor dl dt:first-child{padding:0;}.markdown-editor dl dt > :first-child{margin-top:0;}.markdown-editor dl dt > :last-child{margin-bottom:0;}.markdown-editor dl dd{margin:0 0 15px;padding:0 15px;}.markdown-editor dl dd > :first-child{margin-top:0;}.markdown-editor dl dd > :last-child{margin-bottom:0;}.markdown-editor blockquote{border-left:4px solid #dddddd;padding:0 15px;color:#777777;font-size:12px;}.markdown-editor blockquote > :first-child{margin-top:0;}.markdown-editor blockquote > :last-child{margin-bottom:0;}.markdown-editor table{padding:0;}.markdown-editor table tr{border-top:1px solid #cccccc;background-color:white;margin:0;padding:0;}.markdown-editor table tr:nth-child(2n){background-color:#f8f8f8;}.markdown-editor table tr th{font-weight:bold;border:1px solid #cccccc;text-align:left;margin:0;padding:6px 13px;}.markdown-editor table tr td{border:1px solid #cccccc;text-align:left;margin:0;padding:6px 13px;}.markdown-editor table tr th :first-child,.markdown-editor table tr td :first-child{margin-top:0;}.markdown-editor table tr th :last-child,.markdown-editor table tr td :last-child{margin-bottom:0;}.markdown-editor img{max-width:100%;}.markdown-editor span.frame{display:block;overflow:hidden;}.markdown-editor span.frame > span{border:1px solid #dddddd;display:block;float:left;overflow:hidden;margin:13px 0 0;padding:7px;width:auto;}.markdown-editor span.frame span img{display:block;float:left;}.markdown-editor span.frame span span{clear:both;display:block;padding:5px 0 0;}.markdown-editor span.align-center{display:block;overflow:hidden;clear:both;}.markdown-editor span.align-center > span{display:block;overflow:hidden;margin:13px auto 0;text-align:center;}.markdown-editor span.align-center span img{margin:0 auto;text-align:center;}.markdown-editor span.align-right{display:block;overflow:hidden;clear:both;}.markdown-editor span.align-right > span{display:block;overflow:hidden;margin:13px 0 0;text-align:right;}.markdown-editor span.align-right span img{margin:0;text-align:right;}.markdown-editor span.float-left{display:block;margin-right:13px;overflow:hidden;float:left;}.markdown-editor span.float-left span{margin:13px 0 0;}.markdown-editor span.float-right{display:block;margin-left:13px;overflow:hidden;float:right;}.markdown-editor span.float-right > span{display:block;overflow:hidden;margin:13px auto 0;text-align:right;}.markdown-editor code,.markdown-editor tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f7fa;border-radius:3px;}.markdown-editor pre code{margin:0;padding:0;white-space:pre-wrap;border:none;background:transparent;}.markdown-editor .highlight pre{background-color:#f8f7fa;border:1px solid #dadee3;font-size:13px;line-height:19px;overflow:auto;padding:12px 12px;border-radius:3px;}.markdown-editor pre{background-color:#f8f7fa;border:1px solid #dadee3;font-size:13px;line-height:19px;overflow:auto;padding:12px 12px;border-radius:3px;}.markdown-editor pre code,.markdown-editor pre tt{background-color:transparent;border:none;}.markdown-editor img{max-width:80%;display:block;margin:0 auto;}.markdown-editor .emoji{height:1.2em;}.markdown-editor .demo-options{margin-bottom:30px;}.markdown-editor .opt__strict .not-strict{opacity:0.3;}.markdown-editor .checkbox{margin-right:10px;}.markdown-editor .source{width:100%;font-family:Menlo,Monaco,Consolas,"Courier New",monospace;font-size:13px;padding:2px;}.markdown-editor .result-html{padding:2px 10px;overflow:auto;background-color:#fff;border:1px solid #ccc;border-radius:4px;}.markdown-editor .result-html img{max-width:35%;}.markdown-editor .result-src,.markdown-editor .result-debug{display:none;}.markdown-editor .result-src-content,.markdown-editor .result-debug-content{white-space:pre;}.markdown-editor .result-as-html .result-html{display:block;}.markdown-editor .result-as-html .result-src,.markdown-editor .result-as-html .result-debug{display:none;}.markdown-editor .result-as-src .result-src{display:block;}.markdown-editor .result-as-src .result-html,.markdown-editor .result-as-src .result-debug{display:none;}.markdown-editor .result-as-debug .result-debug{display:block;}.markdown-editor .result-as-debug .result-html,.markdown-editor .result-as-debug .result-src{display:none;}.markdown-editor .demo-control{position:absolute;right:15px;top:-17px;border-radius:6px 6px 0 0;font-size:12px;background-color:#ddd;}.markdown-editor .demo-control a{padding:0 20px;}.markdown-editor .demo-control a:first-child{padding-left:30px;}.markdown-editor .demo-control a:last-child{padding-right:30px;}.markdown-editor .hljs{padding:9.5px;}.markdown-editor .hljs code{white-space:pre;}.markdown-editor .footnotes{-moz-column-count:2;-webkit-column-count:2;-webkit-column-count:2;column-count:2;}.markdown-editor .footnotes-list{padding-left:2em;}.markdown-editor .warning{background-color:#ff8;padding:20px;border-radius:6px;}.markdown-editor .gh-ribbon{display:block;position:absolute;right:-60px;top:44px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);width:230px;z-index:10000;white-space:nowrap;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;background-color:#686868;box-shadow:0 0 2px rgba(102,102,102,0.4);padding:1px 0;}.markdown-editor .gh-ribbon a{-webkit-text-decoration:none !important;text-decoration:none !important;border:1px solid #ccc;color:#fff;display:block;font-size:13px;font-weight:700;outline:medium none;padding:4px 50px 2px;text-align:center;}.markdown-editor .form-inline .radio,.markdown-editor .form-inline .checkbox{display:inline-block;margin-bottom:0;margin-top:0;}.markdown-editor .form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle;}.markdown-editor .form-inline .form-control{display:inline-block;vertical-align:middle;width:auto;}'))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=MarkdownEditor;var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(MarkdownEditor,"MarkdownEditor","/Users/dxu/job/once/src/renderer/routes/Snippet/Editor/MarkdownEditor/index.jsx"),reactHotLoader.register(_default,"default","/Users/dxu/job/once/src/renderer/routes/Snippet/Editor/MarkdownEditor/index.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);