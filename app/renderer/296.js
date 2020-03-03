(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{"./src/renderer/routes/Snippet/File/EditFilename.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/modal/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/button/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/input/index.js"),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),lodash__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__),filename_reserved_regex__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/filename-reserved-regex/index.js"),filename_reserved_regex__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(filename_reserved_regex__WEBPACK_IMPORTED_MODULE_7__),_shared_language__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/shared/language/index.js"),_shared_debug__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/shared/debug.js"),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);class snippetEditFilename extends react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent{constructor(e){super(e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"componentDidMount",()=>{const{sourceFilename:e}=this.props;this.setState({snippetFilename:e,newFilename:e})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"updateFileName",e=>{this.props.updateSnippet({filename:e},this.props.activeTab)}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onEditFileName",()=>{lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(this.state.newFilename)?antd__WEBPACK_IMPORTED_MODULE_1__.a.warn(Object(_shared_language__WEBPACK_IMPORTED_MODULE_8__.a)("snippet.tabs.edit.title.empty")):filename_reserved_regex__WEBPACK_IMPORTED_MODULE_7___default()().test(this.state.newFilename)?antd__WEBPACK_IMPORTED_MODULE_1__.a.error(Object(_shared_language__WEBPACK_IMPORTED_MODULE_8__.a)("once.basic.regex.filename")):(this.updateFileName(this.state.newFilename),this.props.toggleView())}),this.state={snippetFilename:"",newFilename:null}}render(){Object(_shared_debug__WEBPACK_IMPORTED_MODULE_9__.a)("[SnippetEditFilename] rendering...");const{visible:e,onEdit:_,toggleView:a,activeTab:t}=this.props;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{title:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_8__.a)("snippet.tabs.edit.title")}`,visible:e,onOk:this.onEditFileName,onCancel:()=>a(),okText:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_8__.a)("once.basic.yes")}`,footer:[react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.a,{key:"delete",type:"danger",onClick:()=>_(t,"remove")},Object(_shared_language__WEBPACK_IMPORTED_MODULE_8__.a)("snippet.tabs.delete.snippet")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.a,{key:"cancel",onClick:a},Object(_shared_language__WEBPACK_IMPORTED_MODULE_8__.a)("once.basic.no")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.a,{key:"submit",type:"primary",onClick:this.onEditFileName},Object(_shared_language__WEBPACK_IMPORTED_MODULE_8__.a)("once.basic.save"))]},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:{marginBottom:16}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.a,{prefix:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i",{className:"iconfont icon-filename"}),placeholder:this.state.snippetFilename,onChange:e=>{e.persist(),lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isNil(e.target.value)||this.setState({newFilename:e.target.value})},onPressEnter:this.onEditFileName,value:lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isNil(this.state.newFilename)?this.state.snippetFilename:this.state.newFilename})))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=snippetEditFilename;var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&(reactHotLoader.register(snippetEditFilename,"snippetEditFilename","/code/once/once/src/renderer/routes/Snippet/File/EditFilename.jsx"),reactHotLoader.register(_default,"default","/code/once/once/src/renderer/routes/Snippet/File/EditFilename.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);