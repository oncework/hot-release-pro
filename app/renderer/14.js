(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/renderer/components/SnippetTool/Modal.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return SnippetToolModal}));var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/modal/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),lodash__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__),_shared_language__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/shared/language/index.js"),enterModule,reactHotLoader,leaveModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);class SnippetToolModal extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent{constructor(...e){super(...e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"state",{width:"100%"})}componentDidMount(){const e=document.getElementById("snippet");this.setState({width:e.offsetWidth})}componentDidUpdate(){const e=document.getElementsByClassName("snippet-tool-modal")[0];e&&(e.style.width=`${this.state.width}px`,e.style.height=`${this.props.windowHeight-123}px`,e.style.top="127px",e.style.left=`calc(100vw - ${this.state.width}px)`)}render(){const{children:e,title:_,visible:t,toggleView:o,windowHeight:r,onOk:a,keyboard:n}=this.props;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{wrapClassName:"snippet-tool-modal",title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(_),visible:t,onCancel:()=>o(),destroyOnClose:!0,maskStyle:{height:r-123,top:127,left:`calc(100vw - ${this.state.width}px)`,width:this.state.width},zIndex:500,style:{top:20},okText:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)("once.basic.yes"),cancelText:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)("once.basic.no"),onOk:a,keyboard:!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isBoolean(n)||n},e),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a,{id:"664393512"},".snippet-tool-modal .ant-modal-close-x{width:39px !important;height:39px !important;line-height:39px !important;}.snippet-tool-modal .ant-modal-footer{padding:5px 8px !important;}.snippet-tool-modal .ant-modal-header{padding:8px 18px !important;}.snippet-tool-modal .ant-modal-body{padding:12px !important;}"))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&reactHotLoader.register(SnippetToolModal,"SnippetToolModal","/code/once/once/src/renderer/components/SnippetTool/Modal.jsx"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/routes/Snippet/ToolBar/Clavier.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/form/index.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/renderer/components/SnippetTool/FormItem.jsx"),_components_SnippetTool_Modal__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/renderer/components/SnippetTool/Modal.jsx"),_shared_language__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/shared/language/index.js"),_shared_debug__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/shared/debug.js"),query_string__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/query-string/index.js"),query_string__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_9__),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);const event2string=__webpack_require__("./node_modules/key-event-to-string/index.js");class snippetClavier extends react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent{constructor(...e){super(...e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"event2string",event2string({cmd:"command",ctrl:"control",alt:"alt",shift:"shift","]":"]","/":"/",joinWith:" + "})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"state",{potentialContent:{key:"",modifier:""}}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onOk",()=>{this.props.form.validateFields((e,_)=>{if(!e&&_){this.props.toggleView();const e=_.compositeKey.split(" + "),t=`%clavier&key=${e.pop()}${e.length>0?e.map(e=>`&modifier=${e}`).join(""):""}%`;this.props.potentialContent?this.props.getSnippetEditor().updateExistFillIn(t,this.props.potentialContent):this.props.getSnippetEditor().onInsertText(t)}})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"replaceKeys",e=>e=(e=(e=(e=e.replace(/Ý/,"]")).replace(/Û/,"[")).replace(/¿/,"/")).replace(/Ü/,"|")),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onListenEvent",async e=>{if(e){e.preventDefault(),e.persist();let _=this.event2string(e);Object(_shared_debug__WEBPACK_IMPORTED_MODULE_8__.a)(`[UserConfig] create keys: ${JSON.stringify(_)}`),_=this.replaceKeys(_),Object(_shared_debug__WEBPACK_IMPORTED_MODULE_8__.a)("keys",_),this.props.form.setFieldsValue({compositeKey:_})}})}componentDidMount(){const e=this.props.potentialContent;let _;e&&(_=query_string__WEBPACK_IMPORTED_MODULE_9___default.a.parse(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.unescape(e.abbr.substring(1,e.length-1)))),this.setState({...this.props.potentialContent&&{potentialContent:_}})}render(){Object(_shared_debug__WEBPACK_IMPORTED_MODULE_8__.a)("[snippetClavier] rendering...");const{visible:e,toggleView:_,windowHeight:t,form:o}=this.props,{getFieldDecorator:r}=o,{potentialContent:a}=this.state;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SnippetTool_Modal__WEBPACK_IMPORTED_MODULE_6__.a,{title:"clavier-title",visible:e,toggleView:_,windowHeight:t,onOk:this.onOk,keyboard:!1},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_5__.a,{label:"clavier-title-modifier"},r("compositeKey",{rules:[{required:!0}],initialValue:(Array.isArray(a.modifier)?a.modifier.join(" + "):(a.modifier?a.modifier+" + ":"")+a.key)||""})(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{onKeyDown:this.onListenEvent,placeholder:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("clavier-title-modifier-show")}))))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=antd__WEBPACK_IMPORTED_MODULE_3__.a.create()(snippetClavier);var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&(reactHotLoader.register(snippetClavier,"snippetClavier","/code/once/once/src/renderer/routes/Snippet/ToolBar/Clavier.jsx"),reactHotLoader.register(_default,"default","/code/once/once/src/renderer/routes/Snippet/ToolBar/Clavier.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);