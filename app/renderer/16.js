(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/renderer/components/SnippetTool/Modal.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return SnippetToolModal}));var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/modal/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),lodash__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__),_shared_language__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/shared/language/index.js"),enterModule,reactHotLoader,leaveModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);class SnippetToolModal extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent{constructor(..._){super(..._),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"state",{width:"100%"})}componentDidMount(){const _=document.getElementById("snippet");this.setState({width:_.offsetWidth})}componentDidUpdate(){const _=document.getElementsByClassName("snippet-tool-modal")[0];_&&(_.style.width=`${this.state.width}px`,_.style.height=`${this.props.windowHeight-123}px`,_.style.top="127px",_.style.left=`calc(100vw - ${this.state.width}px)`)}render(){const{children:_,title:e,visible:t,toggleView:a,windowHeight:o,onOk:r,keyboard:l}=this.props;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{wrapClassName:"snippet-tool-modal",title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(e),visible:t,onCancel:()=>a(),destroyOnClose:!0,maskStyle:{height:o-123,top:127,left:`calc(100vw - ${this.state.width}px)`,width:this.state.width},zIndex:500,style:{top:20},okText:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)("once.basic.yes"),cancelText:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)("once.basic.no"),onOk:r,keyboard:!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isBoolean(l)||l},_),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a,{id:"664393512"},".snippet-tool-modal .ant-modal-close-x{width:39px !important;height:39px !important;line-height:39px !important;}.snippet-tool-modal .ant-modal-footer{padding:5px 8px !important;}.snippet-tool-modal .ant-modal-header{padding:8px 18px !important;}.snippet-tool-modal .ant-modal-body{padding:12px !important;}"))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&reactHotLoader.register(SnippetToolModal,"SnippetToolModal","/code/once/once/src/renderer/components/SnippetTool/Modal.jsx"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/routes/Snippet/ToolBar/FillIn/Check.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/switch/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/icon/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/input-number/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/form/index.js"),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/renderer/components/SnippetTool/FormItem.jsx"),_components_SnippetTool_Modal__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/renderer/components/SnippetTool/Modal.jsx"),_shared_language__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/shared/language/index.js"),_shared_debug__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/shared/debug.js"),query_string__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/query-string/index.js"),query_string__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_12__),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);const{TextArea:TextArea}=antd__WEBPACK_IMPORTED_MODULE_2__.a;class snippetFillCheck extends react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent{constructor(..._){super(..._),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"state",{isCheck:!1,existFillIn:{name:null,default:null,width:null}}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onOk",()=>{this.props.form.validateFields((_,e)=>{if(!_&&e){this.props.toggleView();const _=`%fillcheck&name=${e.name}${e.default?`&default=${e.default}`:""}${this.state.isCheck?"&isCheck=1":"&isCheck=0"}${e.width?`&width=${e.width}`:""}%`;this.props.existFillIn?this.props.getSnippetEditor().updateExistFillIn(_,this.props.existFillIn):this.props.getSnippetEditor().onInsertText(_)}})})}componentDidMount(){const _=this.props.existFillIn;let e;_&&(e=query_string__WEBPACK_IMPORTED_MODULE_12___default.a.parse(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.unescape(_.abbr.substring(1,_.length-1)))),this.setState({...this.props.existFillIn&&{existFillIn:e,isCheck:!!Number(e.isCheck)}})}render(){Object(_shared_debug__WEBPACK_IMPORTED_MODULE_11__.a)("[SnippetFillCheck] rendering...");const{visible:_,toggleView:e,windowHeight:t,form:a}=this.props,{getFieldDecorator:o}=a,{existFillIn:r}=this.state;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SnippetTool_Modal__WEBPACK_IMPORTED_MODULE_9__.a,{title:"fill-in-option-section",visible:_,toggleView:e,windowHeight:t,onOk:this.onOk},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_8__.a,{label:"fill-in-name"},o("name",{rules:[{required:!0}],initialValue:r.name})(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{placeholder:Object(_shared_language__WEBPACK_IMPORTED_MODULE_10__.a)("fill-in-name-show")}))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_8__.a,{label:"fill-in-value"},o("default",{initialValue:r.default})(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TextArea,{placeholder:Object(_shared_language__WEBPACK_IMPORTED_MODULE_10__.a)("fill-in-value-show"),rows:4}))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_8__.a,{label:"fill-in-option-section-isCheck"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.a,{checkedChildren:react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.a,{type:"check"}),unCheckedChildren:react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.a,{type:"close"}),checked:this.state.isCheck,onChange:()=>{this.setState({isCheck:!this.state.isCheck})}})),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_8__.a,{label:"fill-in-width"},o("width",{initialValue:r.width})(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.a,{placeholder:100,min:10,max:500}))))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=antd__WEBPACK_IMPORTED_MODULE_6__.a.create()(snippetFillCheck);var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&(reactHotLoader.register(TextArea,"TextArea","/code/once/once/src/renderer/routes/Snippet/ToolBar/FillIn/Check.jsx"),reactHotLoader.register(snippetFillCheck,"snippetFillCheck","/code/once/once/src/renderer/routes/Snippet/ToolBar/FillIn/Check.jsx"),reactHotLoader.register(_default,"default","/code/once/once/src/renderer/routes/Snippet/ToolBar/FillIn/Check.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);