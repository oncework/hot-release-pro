(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{"./src/renderer/routes/Store/index.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/core-js/modules/es6.function.bind.js"),core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__),styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/modal/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/row/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/col/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/button/index.js"),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/list/index.js"),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/antd/es/avatar/index.js"),antd__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/antd/es/tooltip/index.js"),react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__),dva__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/dva/index.js"),dva__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_13__),_shared_language__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/shared/language/index.js"),moment__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__),electron__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("electron"),electron__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_16__),_util_main_mid__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/renderer/util/main.mid.js"),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _};const{Search:Search}=antd__WEBPACK_IMPORTED_MODULE_3__.a;class Store extends react__WEBPACK_IMPORTED_MODULE_12___default.a.PureComponent{constructor(..._){super(..._),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"state",{list:[],categories:[],fetchLoading:!1,openReadme:!1,currSnippetIndex:0,category:"All",search:""}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onJumpUrl",_=>{electron__WEBPACK_IMPORTED_MODULE_16__.shell.openExternal(_)}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onFork",_=>{const e=this;antd__WEBPACK_IMPORTED_MODULE_4__.a.confirm({title:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("once.basic.tip")}`,content:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("store-fork")}`,okText:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("once.basic.yes")}`,okType:"danger",cancelText:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("once.basic.no")}`,async onOk(){await e.props.dispatch({type:"snippet/forkSnippet",payload:{gist:_}}),await e.props.dispatch({type:"gist/loadSnippetsFromGist",payload:{since:moment__WEBPACK_IMPORTED_MODULE_15___default()().add(-1,"days").toDate()}})}})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onChangeSearch",_=>{this.setState({search:_.target.value})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onCategory",_=>{this.setState({category:_})})}async componentDidMount(){await this.fetchStore()}toggleReadme(_){this.setState({currSnippetIndex:_,openReadme:!this.state.openReadme})}async fetchStore(){this.setState({fetchLoading:!0}),await _util_main_mid__WEBPACK_IMPORTED_MODULE_17__.snippetsStore.fetchSnippetStore(),this.setState({list:_util_main_mid__WEBPACK_IMPORTED_MODULE_17__.snippetsStore.list,categories:[{name:"All",count:_util_main_mid__WEBPACK_IMPORTED_MODULE_17__.snippetsStore.categories.reduce((_,e)=>_+=e.count,0),slug:"all"},..._util_main_mid__WEBPACK_IMPORTED_MODULE_17__.snippetsStore.categories],fetchLoading:!1}),antd__WEBPACK_IMPORTED_MODULE_5__.a.success(Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("store-update-success"))}render(){return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.a,{className:"store-container"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{className:"store-header",xs:24},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.a,{className:"store-header-fetch",type:"primary",loading:this.state.fetchLoading,onClick:this.fetchStore.bind(this)},Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("store-update")),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.a,{className:"store-header-share",type:"link",ghost:!0,onClick:this.onJumpUrl.bind(this,"https://github.com/oncework/codeexpander-snippets")},Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("store-share"))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{className:"store-left-search",xs:6},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{xs:24},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Search,{placeholder:"Search...",onChange:this.onChangeSearch,style:{width:"100%"}})),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{xs:24},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{style:{fontSize:20,padding:"12px 0 0 0"},className:"jsx-1132401669"},Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("store-categories"))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{className:"store-left-list",xs:24},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.a,{itemLayout:"horizontal",dataSource:this.state.categories,renderItem:_=>react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.a.Item,{onClick:this.onCategory.bind(this,_.name),extra:react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"jsx-1132401669 store-left-list-extra"},_.count)},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"jsx-1132401669"},_.name))}))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{className:"store-right-list",xs:18},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.a,{itemLayout:"horizontal",dataSource:this.state.list.filter(_=>"All"!==this.state.category?_.category===this.state.category&&(-1!==_.description.indexOf(this.state.search)||-1!==_.name.indexOf(this.state.search)||-1!==_.keywords[0].indexOf(this.state.search)):"All"===this.state.category?-1!==_.description.indexOf(this.state.search)||-1!==_.name.indexOf(this.state.search)||-1!==_.keywords[0].indexOf(this.state.search):void 0),renderItem:(_,e)=>react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.a.Item,{actions:[react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a",{onClick:this.onFork.bind(this,_.gist),className:"jsx-1132401669"},"Fork"),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a",{onClick:this.onJumpUrl.bind(this,_.repository),className:"jsx-1132401669"},"Detail")]},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.a.Item.Meta,{avatar:react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.a,{shape:"square",src:`https://github.com/oncework/codeexpander-snippets/blob/master/apps/${_.slug}/${_.icon64}?raw=true`}),title:react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a",{style:{textTransform:"uppercase"},className:"jsx-1132401669"},_.name),description:react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__.a,{placement:"bottom",title:_.description},_.description)}))}))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a,{id:"1132401669"},".store-container{border-top:1px solid #e8e8e8;background:#fff;height:100%;}.store-header{padding:12px 0 0 0;}.store-header-fetch{float:right;right:12px;}.store-header-share{color:rgba(0,0,0,.7) !important;float:right;right:12px;font-size:13px;}.store-left-search{padding:0 12px 12px 12px;}.store-left-list{padding:0 12px 0 12px;height:calc(100vh - 169px);overflow:auto;}.store-left-list-extra{float:right;right:0;position:absolute;font-size:14px;font-weight:600;}.store-right-list{padding:0 12px 12px 12px;height:calc(100vh - 95px);overflow:auto;}.store-right-list .ant-list-item:first-child{padding:0 0 12px 0;}.store-left-list .ant-list-item{cursor:pointer;}"))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=Object(dva__WEBPACK_IMPORTED_MODULE_13__.connect)()(Store);var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Search,"Search","F:\\func\\once\\src\\renderer\\routes\\Store\\index.jsx"),reactHotLoader.register(Store,"Store","F:\\func\\once\\src\\renderer\\routes\\Store\\index.jsx"),reactHotLoader.register(_default,"default","F:\\func\\once\\src\\renderer\\routes\\Store\\index.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);