(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./node_modules/@ant-design/icons-svg/es/asn/DeleteOutlined.js":function(e,_,t){"use strict";_.a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"}},"./node_modules/@ant-design/icons/es/icons/CheckOutlined.js":function(e,_,t){"use strict";var a=t("./node_modules/react/index.js"),o=t("./node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js"),n=t("./node_modules/@ant-design/icons/es/components/AntdIcon.js"),r=function(e,_){return a.createElement(n.a,Object.assign({},e,{ref:_,icon:o.a}))};r.displayName="CheckOutlined",_.a=a.forwardRef(r)},"./node_modules/@ant-design/icons/es/icons/CloseOutlined.js":function(e,_,t){"use strict";var a=t("./node_modules/react/index.js"),o=t("./node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js"),n=t("./node_modules/@ant-design/icons/es/components/AntdIcon.js"),r=function(e,_){return a.createElement(n.a,Object.assign({},e,{ref:_,icon:o.a}))};r.displayName="CloseOutlined",_.a=a.forwardRef(r)},"./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js":function(e,_,t){"use strict";var a=t("./node_modules/react/index.js"),o=t("./node_modules/@ant-design/icons-svg/es/asn/DeleteOutlined.js"),n=t("./node_modules/@ant-design/icons/es/components/AntdIcon.js"),r=function(e,_){return a.createElement(n.a,Object.assign({},e,{ref:_,icon:o.a}))};r.displayName="DeleteOutlined",_.a=a.forwardRef(r)},"./node_modules/antd/es/_util/getDataOrAriaProps.js":function(e,_,t){"use strict";function a(e){return Object.keys(e).reduce((function(_,t){return"data-"!==t.substr(0,5)&&"aria-"!==t.substr(0,5)&&"role"!==t||"data-__"===t.substr(0,7)||(_[t]=e[t]),_}),{})}t.d(_,"a",(function(){return a}))},"./node_modules/antd/es/radio/index.js":function(e,_,t){"use strict";var a=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),n=t("./node_modules/react/index.js"),r=t("./node_modules/rc-checkbox/es/index.js"),s=t("./node_modules/classnames/index.js"),l=t.n(s),d=t("./node_modules/antd/node_modules/rc-util/es/ref.js"),i=t("./node_modules/antd/es/config-provider/context.js"),c=n.createContext(null),u=c.Provider,p=c,E=t("./node_modules/antd/es/_util/devWarning.js"),O=function(e,_){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&_.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)_.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]])}return t},M=function(e,_){var t,s=n.useContext(p),c=n.useContext(i.b),u=c.getPrefixCls,M=c.direction,m=n.useRef(),P=Object(d.a)(_,m);n.useEffect((function(){Object(E.a)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var D=e.prefixCls,b=e.className,f=e.children,h=e.style,C=O(e,["prefixCls","className","children","style"]),L=u("radio",D),I=Object(o.a)({},C);s&&(I.name=s.name,I.onChange=function(_){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,_),null===(a=null==s?void 0:s.onChange)||void 0===a||a.call(s,_)},I.checked=e.value===s.value,I.disabled=e.disabled||s.disabled);var T=l()("".concat(L,"-wrapper"),(t={},Object(a.a)(t,"".concat(L,"-wrapper-checked"),I.checked),Object(a.a)(t,"".concat(L,"-wrapper-disabled"),I.disabled),Object(a.a)(t,"".concat(L,"-wrapper-rtl"),"rtl"===M),t),b);return n.createElement("label",{className:T,style:h,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},n.createElement(r.a,Object(o.a)({},I,{prefixCls:L,ref:P})),void 0!==f?n.createElement("span",null,f):null)},m=n.forwardRef(M);m.displayName="Radio",m.defaultProps={type:"radio"};var P=m,D=t("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),b=t("./node_modules/antd/node_modules/rc-util/es/hooks/useMergedState.js"),f=t("./node_modules/antd/es/config-provider/SizeContext.js"),h=t("./node_modules/antd/es/_util/getDataOrAriaProps.js"),C=n.forwardRef((function(e,_){var t=n.useContext(i.b),r=t.getPrefixCls,s=t.direction,d=n.useContext(f.b),c=Object(b.a)(e.defaultValue,{value:e.value}),p=Object(D.a)(c,2),E=p[0],O=p[1];return n.createElement(u,{value:{onChange:function(_){var t=E,a=_.target.value;"value"in e||O(a);var o=e.onChange;o&&a!==t&&o(_)},value:E,disabled:e.disabled,name:e.name}},function(){var t,i=e.prefixCls,c=e.className,u=void 0===c?"":c,p=e.options,O=e.optionType,M=e.buttonStyle,m=void 0===M?"outline":M,D=e.disabled,b=e.children,f=e.size,C=e.style,L=e.id,I=e.onMouseEnter,T=e.onMouseLeave,g=r("radio",i),R="".concat(g,"-group"),B=b;if(p&&p.length>0){var y="button"===O?"".concat(g,"-button"):g;B=p.map((function(e){return"string"==typeof e?n.createElement(P,{key:e,prefixCls:y,disabled:D,value:e,checked:E===e},e):n.createElement(P,{key:"radio-group-value-options-".concat(e.value),prefixCls:y,disabled:e.disabled||D,value:e.value,checked:E===e.value,style:e.style},e.label)}))}var A=f||d,K=l()(R,"".concat(R,"-").concat(m),(t={},Object(a.a)(t,"".concat(R,"-").concat(A),A),Object(a.a)(t,"".concat(R,"-rtl"),"rtl"===s),t),u);return n.createElement("div",Object(o.a)({},Object(h.a)(e),{className:K,style:C,onMouseEnter:I,onMouseLeave:T,id:L,ref:_}),B)}())})),L=n.memo(C),I=function(e,_){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&_.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)_.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]])}return t},T=function(e,_){var t=n.useContext(p),a=n.useContext(i.b).getPrefixCls,r=e.prefixCls,s=I(e,["prefixCls"]),l=a("radio-button",r);return t&&(s.checked=e.value===t.value,s.disabled=e.disabled||t.disabled),n.createElement(P,Object(o.a)({prefixCls:l},s,{type:"radio",ref:_}))},g=n.forwardRef(T),R=P;R.Button=g,R.Group=L;_.a=R},"./src/renderer/components/SnippetTool/FormItem.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return SnippetToolFormItem}));var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),_ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ant-design/compatible/es/form/index.js"),_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ant-design/compatible/assets/index.css"),_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_Layout_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/renderer/components/Layout/Tooltip.jsx"),_shared_language__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/shared/language/index.js"),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const FormItem=_ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__.a.Item;class SnippetToolFormItem extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent{render(){const{formItemLayout:e,children:_,label:t,tip:a}=this.props,o=e||{labelCol:{span:7},wrapperCol:{span:15}};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FormItem,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},o,{label:a?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout_Tooltip__WEBPACK_IMPORTED_MODULE_4__.a,{title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(a)},Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(t)):Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(t)}),_)}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}var reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(FormItem,"FormItem","/Users/dxu/my/once/src/renderer/components/SnippetTool/FormItem.jsx"),reactHotLoader.register(SnippetToolFormItem,"SnippetToolFormItem","/Users/dxu/my/once/src/renderer/components/SnippetTool/FormItem.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/components/SnippetTool/Modal.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return SnippetToolModal}));var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/modal/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),lodash__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__),_shared_language__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/shared/language/index.js"),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},reactHotLoader,leaveModule;class SnippetToolModal extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent{constructor(...e){super(...e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"state",{width:"100%"})}componentDidMount(){const e=document.getElementById("snippet");this.setState({width:e.offsetWidth})}componentDidUpdate(){const e=document.getElementsByClassName("snippet-tool-modal")[0];e&&(e.style.width=this.state.width+"px",e.style.height=this.props.windowHeight-123+"px",e.style.top="127px",e.style.left=`calc(100vw - ${this.state.width}px)`)}render(){const{children:e,title:_,visible:t,toggleView:a,windowHeight:o,onOk:n,keyboard:r}=this.props;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{wrapClassName:"snippet-tool-modal",title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(_),visible:t,onCancel:()=>a(),destroyOnClose:!0,maskStyle:{height:o-123,top:127,left:`calc(100vw - ${this.state.width}px)`,width:this.state.width},zIndex:500,style:{top:20},okText:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)("once.basic.yes"),cancelText:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)("once.basic.no"),onOk:n,keyboard:!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isBoolean(r)||r},e),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,{id:"664393512"},".snippet-tool-modal .ant-modal-close-x{width:39px !important;height:39px !important;line-height:39px !important;}.snippet-tool-modal .ant-modal-footer{padding:5px 8px !important;}.snippet-tool-modal .ant-modal-header{padding:8px 18px !important;}.snippet-tool-modal .ant-modal-body{padding:12px !important;}"))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(SnippetToolModal,"SnippetToolModal","/Users/dxu/my/once/src/renderer/components/SnippetTool/Modal.jsx"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/routes/Snippet/ToolBar/FillIn/Menu.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__),_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/CheckOutlined.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/CloseOutlined.js"),_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ant-design/compatible/es/form/index.js"),_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ant-design/compatible/assets/index.css"),_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_6__),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/radio/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/switch/index.js"),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/antd/es/input-number/index.js"),react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/renderer/components/SnippetTool/FormItem.jsx"),_components_SnippetTool_Modal__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/renderer/components/SnippetTool/Modal.jsx"),_shared_language__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/shared/language/index.js"),_shared_debug__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/shared/debug.js"),_shared_utils__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/shared/utils.js"),query_string__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/query-string/index.js"),query_string__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_17__),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const RadioGroup=antd__WEBPACK_IMPORTED_MODULE_7__.a.Group;class SnippetFillMenu extends react__WEBPACK_IMPORTED_MODULE_11___default.a.PureComponent{constructor(...e){super(...e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"state",{isCheck:!1,selected:0,addKey:2,optGroup:["Option A","Option B",""],existFillIn:{name:null,info:null,width:null}}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onOk",()=>{this.props.form.validateFields((e,_)=>{if(!e&&_){this.props.toggleView();let e=this.state.optGroup.filter(e=>e);e=e.map(e=>"&opt="+e);const t=`%fillmenu&name=${_.name}${"&default="+this.state.optGroup[this.state.selected]}${_.info?"&info="+_.info:""}${e.join("")}${this.state.isCheck?"&isCheck=1":"&isCheck=0"}${_.width?"&width="+_.width:""}%`;this.props.existFillIn?this.props.getSnippetEditor().updateExistFillIn(t,this.props.existFillIn):this.props.getSnippetEditor().onInsertText(t)}})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onChange",e=>{if(e===this.state.addKey){const _=this.state.optGroup;this.setState({optGroup:[..._,""],addKey:e+1,selected:e})}else this.setState({selected:e})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onInputChange",lodash__WEBPACK_IMPORTED_MODULE_1___default.a.debounce((e,_)=>{const t=this.state.optGroup;t[_]=e,this.setState({optGroup:t})},500)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"removeByIndex",(e,_)=>e.slice(0,_).concat(e.slice(_+1))),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onRemove",e=>{let _=this.state.optGroup;_=this.removeByIndex(_,e);const t=this.state.addKey-1;this.setState({optGroup:_,addKey:t})})}componentDidMount(){const e=this.props.existFillIn;let _;e&&(_=query_string__WEBPACK_IMPORTED_MODULE_17___default.a.parse(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.unescape(e.abbr.substring(1,e.length-1)))),this.setState({...this.props.existFillIn&&{existFillIn:_},...this.props.existFillIn&&_.opt&&{optGroup:[..._.opt,""],addKey:_.opt.length,selected:Number(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(_.opt,e=>e===_.default)),isCheck:!!Number(_.isCheck)}})}render(){Object(_shared_debug__WEBPACK_IMPORTED_MODULE_15__.a)("[SnippetFillMenu] rendering...");const{visible:e,toggleView:_,windowHeight:t,form:a}=this.props,{getFieldDecorator:o}=a,{existFillIn:n}=this.state;return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_SnippetTool_Modal__WEBPACK_IMPORTED_MODULE_13__.a,{title:"fill-in-Popup-menu",visible:e,toggleView:_,windowHeight:t,onOk:this.onOk},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_12__.a,{label:"fill-in-name"},o("name",{rules:[{required:!0}],initialValue:n.name||Object(_shared_utils__WEBPACK_IMPORTED_MODULE_16__.d)()})(react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.a,{placeholder:Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("fill-in-name-show")}))),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_12__.a,{label:"fill-in-info"},o("info",{rules:[{required:!1}],initialValue:n.info})(react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.a,{placeholder:Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("fill-in-info-show")}))),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_12__.a,{label:"fill-in-value"},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(RadioGroup,{onChange:e=>this.onChange(e.target.value),value:this.state.selected},this.state.optGroup.map((e,_)=>react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{key:`RadioGroup_${_}_${e}`},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{value:_},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.a,{autoFocus:_===this.state.selected,style:{width:215,marginLeft:10},defaultValue:e,onChange:e=>{e.persist(),this.onInputChange(e.target.value,_)},onFocus:()=>this.onChange(_)})),_!==this.state.addKey&&react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.a,{style:{cursor:"pointer"},onClick:()=>this.onRemove(_)}))))),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_12__.a,{label:"fill-in-option-section-isCheck"},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.a,{checkedChildren:react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.a,null),unCheckedChildren:react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.a,null),checked:this.state.isCheck,onChange:()=>{this.setState({isCheck:!this.state.isCheck})}})),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_12__.a,{label:"fill-in-width"},o("width",{initialValue:n.width})(react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.a,{placeholder:100,min:10,max:500}))))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__.a.create()(SnippetFillMenu);var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(RadioGroup,"RadioGroup","/Users/dxu/my/once/src/renderer/routes/Snippet/ToolBar/FillIn/Menu.jsx"),reactHotLoader.register(SnippetFillMenu,"SnippetFillMenu","/Users/dxu/my/once/src/renderer/routes/Snippet/ToolBar/FillIn/Menu.jsx"),reactHotLoader.register(_default,"default","/Users/dxu/my/once/src/renderer/routes/Snippet/ToolBar/FillIn/Menu.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);