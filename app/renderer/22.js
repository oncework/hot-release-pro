(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/renderer/components/SnippetTool/FormItem.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return SnippetToolFormItem}));var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/form/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_Layout_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/renderer/components/Layout/Tooltip.jsx"),_shared_language__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/language/index.js"),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);const FormItem=antd__WEBPACK_IMPORTED_MODULE_1__.a.Item;class SnippetToolFormItem extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent{render(){const{formItemLayout:_,children:e,label:a,tip:t}=this.props,r=_||{labelCol:{span:7},wrapperCol:{span:15}};return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},r,{label:t?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Layout_Tooltip__WEBPACK_IMPORTED_MODULE_3__.a,{title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_4__.a)(t)},Object(_shared_language__WEBPACK_IMPORTED_MODULE_4__.a)(a)):Object(_shared_language__WEBPACK_IMPORTED_MODULE_4__.a)(a)}),e)}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}var reactHotLoader,leaveModule;reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&(reactHotLoader.register(FormItem,"FormItem","/code/once/once/src/renderer/components/SnippetTool/FormItem.jsx"),reactHotLoader.register(SnippetToolFormItem,"SnippetToolFormItem","/code/once/once/src/renderer/components/SnippetTool/FormItem.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/routes/Group/ExpandIn.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/transfer/index.js"),lodash__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__),_util_main_mid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/renderer/util/main.mid.js"),_shared_debug__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/shared/debug.js"),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);class groupExpandIn extends react__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(..._){super(..._),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"state",{applications:[],targetKeys:[]}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"getExpandInData",async()=>{const{value:_}=this.props.expandIn;Object(_shared_debug__WEBPACK_IMPORTED_MODULE_5__.a)(`[GroupExpandIn] applications: ${_}`);let e=await _util_main_mid__WEBPACK_IMPORTED_MODULE_4__.appIcon.getAppList(),a=_.map(_=>lodash__WEBPACK_IMPORTED_MODULE_3___default.a.findIndex(e,e=>e.app===_));this.setState&&this.setState({applications:e.map((_,e)=>({key:e,..._})),targetKeys:a}),e=null,a=null}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onChange",_=>{this.setState({targetKeys:_});const e=_.reduce((_,e)=>(e>=0&&_.push(this.state.applications[e].app),_),[]);this.props.onUpdateConfig(e)}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"renderItem",_=>({label:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"custom-item"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:`${_.icns}`,style:{width:16,height:16,margin:"2px 4px 4px -4px"}}),_.app.split(_util_main_mid__WEBPACK_IMPORTED_MODULE_4__.appIcon.appPath)[1]),value:_.app}))}async componentDidMount(){await this.getExpandInData()}componentWillUnmount(){this.setState=null}render(){return Object(_shared_debug__WEBPACK_IMPORTED_MODULE_5__.a)("[groupExpandIn] rendering..."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{showSearch:!0,listStyle:{width:181},dataSource:this.state.applications,targetKeys:this.state.targetKeys,onChange:this.onChange,render:this.renderItem})}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=groupExpandIn;var reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&(reactHotLoader.register(groupExpandIn,"groupExpandIn","/code/once/once/src/renderer/routes/Group/ExpandIn.jsx"),reactHotLoader.register(_default,"default","/code/once/once/src/renderer/routes/Group/ExpandIn.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/routes/Group/index.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/core-js/modules/web.dom.iterable.js"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__),styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/select/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/form/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/switch/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/button/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/modal/index.js"),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/message/index.js"),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/renderer/components/SnippetTool/FormItem.jsx"),_ExpandIn__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/renderer/routes/Group/ExpandIn.jsx"),lodash__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__),dva__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/dva/index.js"),dva__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_14__),_util_main_mid__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/renderer/util/main.mid.js"),_shared_utils__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/shared/utils.js"),_shared_language__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/shared/language/index.js"),_shared_debug__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/shared/debug.js"),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);const{TextArea:TextArea}=antd__WEBPACK_IMPORTED_MODULE_3__.a,Option=antd__WEBPACK_IMPORTED_MODULE_4__.a.Option;class Group extends react__WEBPACK_IMPORTED_MODULE_10__.Component{constructor(_){super(_),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onUpdateConfig",lodash__WEBPACK_IMPORTED_MODULE_13___default.a.debounce(async(_,e)=>{const a=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.setWith(this.state.groupProp,_,e,Object);await this.props.dispatch({type:"layout/syncUserConfig",payload:{data:[this.state.groupPath,a]}}),this.setState({groupProp:a})},1500)),this.state={getGroupKey:"",groupPath:"",groupProp:{active:!1,description:"",expandIn:{type:"*",value:[]},prefix:""},loading:!1,uploading:!1},this.expandIn={"*":Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-expandIn-*"),"-":Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-expandIn--"),"@":Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-expandIn-@"),"^":Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-expandIn-^")}}async componentDidMount(){const{groupKey:_}=this.props;let e,a;"ALL"===_?(a="ALL",e=["group","ALL"]):_.includes("GROUP")&&(a=Object(_shared_utils__WEBPACK_IMPORTED_MODULE_16__.a)(_,"_"),e=["group","GROUP",`${a}`]);const t=await _util_main_mid__WEBPACK_IMPORTED_MODULE_15__.db.getOrCreateConfig(e,_util_main_mid__WEBPACK_IMPORTED_MODULE_15__.db.initGroupValue("ALL"===a));Object(_shared_debug__WEBPACK_IMPORTED_MODULE_18__.a)(`[Group] targetGroup: ${JSON.stringify(t)}`),this.setState({groupProp:t,groupPath:e,getGroupKey:a})}render(){const{getFieldDecorator:_}=this.props.form,{groupProp:e}=this.state;return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div",{className:"jsx-2948309931 group-container"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3",{className:"jsx-2948309931"},Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-setting")),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.a,{layout:"horizontal"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__.a,{label:"group-active"},_("active",{initialValue:e.active,valuePropName:"checked"})(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.a,{disabled:!("ALL"!==this.state.getGroupKey),onChange:_=>{this.onUpdateConfig("active",_)}}))),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__.a,{label:"group-description"},_("description",{initialValue:e.description})(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(TextArea,{rows:4,onChange:_=>{_.preventDefault(),this.onUpdateConfig("description",_.target.value)}}))),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__.a,{label:"group-expand-in"},_("expandIn",{initialValue:e.expandIn.type})(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.a,{style:{minWidth:150},onChange:_=>{this.onUpdateConfig(["expandIn","type"],_)}},Object.keys(this.expandIn).map(_=>react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Option,{key:_,value:_},this.expandIn[_]))))),("@"===this.state.groupProp.expandIn.type||"-"===this.state.groupProp.expandIn.type)&&react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__.a,{label:"group-expand-in-data"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_ExpandIn__WEBPACK_IMPORTED_MODULE_12__.a,{expandIn:this.state.groupProp.expandIn,onUpdateConfig:_=>{this.onUpdateConfig(["expandIn","value"],_)}})),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__.a,{label:"group-prefix"},_("prefix",{initialValue:e.prefix})(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.a,{onChange:_=>{_.preventDefault(),this.onUpdateConfig("prefix",_.target.value)}}))),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__.a,{label:"group-sync"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{type:"primary",loading:this.state.loading,onClick:async()=>{this.setState({loading:!0});const _=await _util_main_mid__WEBPACK_IMPORTED_MODULE_15__.db.getCloudConfig();if(_)if(lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(_))antd__WEBPACK_IMPORTED_MODULE_8__.a.confirm({title:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("once.basic.tip")}`,content:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-load-tip")}`,okText:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-load-create")}`,okType:"danger",cancelText:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("once.basic.no")}`,onCancel:()=>{this.setState({loading:!1})},onOk:async()=>{const _=await _util_main_mid__WEBPACK_IMPORTED_MODULE_15__.db.createCloudConfig();await _util_main_mid__WEBPACK_IMPORTED_MODULE_15__.db.createSnippet({createBody:_}),this.setState({loading:!1})}});else{const e=await _util_main_mid__WEBPACK_IMPORTED_MODULE_15__.db.updateConfigByGistConfig(JSON.parse(_.content));console.warn(e)}else antd__WEBPACK_IMPORTED_MODULE_9__.a.warn(Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-load-tip"));this.setState({loading:!1})},style:{marginRight:10},ghost:!0},Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-load")),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{type:"primary",loading:this.state.uploading,onClick:async()=>{this.setState({uploading:!0});const _=await _util_main_mid__WEBPACK_IMPORTED_MODULE_15__.db.getCloudConfig();antd__WEBPACK_IMPORTED_MODULE_8__.a.confirm({title:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("once.basic.tip")}`,content:_&&lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(_)?`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-upload-confirm")}`:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-upload-warn")}`,okText:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-upload")}`,okType:"danger",cancelText:`${Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("once.basic.no")}`,onCancel:()=>{this.setState({uploading:!1})},onOk:async()=>{if(_)if(lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(_)){const _=await _util_main_mid__WEBPACK_IMPORTED_MODULE_15__.db.createCloudConfig();await _util_main_mid__WEBPACK_IMPORTED_MODULE_15__.db.createSnippet({createBody:_})}else _.flag=2,await _util_main_mid__WEBPACK_IMPORTED_MODULE_15__.db.setCloudConfig(_);else antd__WEBPACK_IMPORTED_MODULE_9__.a.warn(Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-load-tip"));this.setState({uploading:!1})}})},ghost:!0},Object(_shared_language__WEBPACK_IMPORTED_MODULE_17__.a)("group-upload"))))),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a,{id:"2948309931"},".group-container.jsx-2948309931{min-height:100%;border-top:1px solid #ebebeb;background-color:white;}.group-container.jsx-2948309931>h3.jsx-2948309931{padding:12px 18px;font-size:20px;}.group-container.jsx-2948309931>form{height:566px;width:100%;overflow:auto;}"))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const wrapGroup=antd__WEBPACK_IMPORTED_MODULE_5__.a.create()(Group),_default=Object(dva__WEBPACK_IMPORTED_MODULE_14__.connect)()(wrapGroup);var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&(reactHotLoader.register(TextArea,"TextArea","/code/once/once/src/renderer/routes/Group/index.jsx"),reactHotLoader.register(Option,"Option","/code/once/once/src/renderer/routes/Group/index.jsx"),reactHotLoader.register(Group,"Group","/code/once/once/src/renderer/routes/Group/index.jsx"),reactHotLoader.register(wrapGroup,"wrapGroup","/code/once/once/src/renderer/routes/Group/index.jsx"),reactHotLoader.register(_default,"default","/code/once/once/src/renderer/routes/Group/index.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);