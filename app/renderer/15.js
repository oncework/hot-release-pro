(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./node_modules/antd/es/radio/index.js":function(e,_,t){"use strict";var o=t("./node_modules/react/index.js"),r=t("./node_modules/prop-types/index.js"),n=t("./node_modules/rc-checkbox/es/index.js"),a=t("./node_modules/classnames/index.js"),l=t.n(a),i=t("./node_modules/shallowequal/index.js"),s=t.n(i),d=t("./node_modules/antd/es/config-provider/index.js");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}function p(){return(p=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function E(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function f(e,_){for(var t=0;t<_.length;t++){var o=_[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,_){return!_||"object"!==u(_)&&"function"!=typeof _?M(e):_}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,_){return(h=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}var m=function(e,_){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&_.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)_.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},P=function(e){function _(){var e;return E(this,_),(e=O(this,b(_).apply(this,arguments))).saveCheckbox=function(_){e.rcCheckbox=_},e.onChange=function(_){e.props.onChange&&e.props.onChange(_),e.context.radioGroup&&e.context.radioGroup.onChange&&e.context.radioGroup.onChange(_)},e.renderRadio=function(_){var t,r=_.getPrefixCls,a=M(e),i=a.props,s=a.context,d=i.prefixCls,u=i.className,E=i.children,f=i.style,O=m(i,["prefixCls","className","children","style"]),b=s.radioGroup,h=r("radio",d),P=p({},O);b&&(P.name=b.name,P.onChange=e.onChange,P.checked=i.value===b.value,P.disabled=i.disabled||b.disabled);var D=l()(u,(c(t={},"".concat(h,"-wrapper"),!0),c(t,"".concat(h,"-wrapper-checked"),P.checked),c(t,"".concat(h,"-wrapper-disabled"),P.disabled),t));return(o.createElement("label",{className:D,style:f,onMouseEnter:i.onMouseEnter,onMouseLeave:i.onMouseLeave},o.createElement(n.a,p({},P,{prefixCls:h,ref:e.saveCheckbox})),void 0!==E?o.createElement("span",null,E):null))},e}var t,r,a;return function(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&h(e,_)}(_,e),t=_,(r=[{key:"shouldComponentUpdate",value:function(e,_,t){return!s()(this.props,e)||!s()(this.state,_)||!s()(this.context.radioGroup,t.radioGroup)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return o.createElement(d.a,null,this.renderRadio)}}])&&f(t.prototype,r),a&&f(t,a),_}(o.Component);P.defaultProps={type:"radio"},P.contextTypes={radioGroup:r.any};var D=t("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,_){for(var t=0;t<_.length;t++){var o=_[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,_){return(T=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}function v(e){var _=null,t=!1;return o.Children.forEach(e,(function(e){e&&e.props&&e.props.checked&&(_=e.props.value,t=!0)})),t?{value:_}:void 0}var w=function(e){function _(e){var t,r,n,a;if(function(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}(this,_),r=this,n=I(_).call(this,e),(t=!n||"object"!==y(n)&&"function"!=typeof n?L(r):n).onRadioChange=function(e){var _=t.state.value,o=e.target.value;"value"in t.props||t.setState({value:o});var r=t.props.onChange;r&&o!==_&&r(e)},t.renderGroup=function(e){var _=e.getPrefixCls,r=L(t).props,n=r.prefixCls,a=r.className,i=void 0===a?"":a,s=r.options,d=r.buttonStyle,u=_("radio",n),c="".concat(u,"-group"),p=l()(c,"".concat(c,"-").concat(d),function(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}({},"".concat(c,"-").concat(r.size),r.size),i),E=r.children;return s&&s.length>0&&(E=s.map((function(e){return"string"==typeof e?o.createElement(P,{key:e,prefixCls:u,disabled:t.props.disabled,value:e,checked:t.state.value===e},e):o.createElement(P,{key:"radio-group-value-options-".concat(e.value),prefixCls:u,disabled:e.disabled||t.props.disabled,value:e.value,checked:t.state.value===e.value},e.label)}))),o.createElement("div",{className:p,style:r.style,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,id:r.id},E)},"value"in e)a=e.value;else if("defaultValue"in e)a=e.defaultValue;else{var i=v(e.children);a=i&&i.value}return t.state={value:a},t}var t,r,n;return function(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&T(e,_)}(_,e),t=_,n=[{key:"getDerivedStateFromProps",value:function(e){if("value"in e)return{value:e.value};var _=v(e.children);return _?{value:_.value}:null}}],(r=[{key:"getChildContext",value:function(){return{radioGroup:{onChange:this.onRadioChange,value:this.state.value,disabled:this.props.disabled,name:this.props.name}}}},{key:"shouldComponentUpdate",value:function(e,_){return!s()(this.props,e)||!s()(this.state,_)}},{key:"render",value:function(){return o.createElement(d.a,null,this.renderGroup)}}])&&C(t.prototype,r),n&&C(t,n),_}(o.Component);w.defaultProps={buttonStyle:"outline"},w.childContextTypes={radioGroup:r.any},Object(D.polyfill)(w);var g=w;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(){return(B=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function R(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function k(e,_){for(var t=0;t<_.length;t++){var o=_[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function K(e,_){return!_||"object"!==x(_)&&"function"!=typeof _?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):_}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,_){return(A=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}var W=function(e,_){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&_.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)_.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},j=function(e){function _(){var e;return R(this,_),(e=K(this,U(_).apply(this,arguments))).renderRadioButton=function(_){var t=_.getPrefixCls,r=e.props,n=r.prefixCls,a=W(r,["prefixCls"]),l=t("radio-button",n);return e.context.radioGroup&&(a.checked=e.props.value===e.context.radioGroup.value,a.disabled=e.props.disabled||e.context.radioGroup.disabled),o.createElement(P,B({prefixCls:l},a))},e}var t,r,n;return function(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&A(e,_)}(_,e),t=_,(r=[{key:"render",value:function(){return o.createElement(d.a,null,this.renderRadioButton)}}])&&k(t.prototype,r),n&&k(t,n),_}(o.Component);j.contextTypes={radioGroup:r.any},P.Button=j,P.Group=g;_.a=P},"./src/renderer/components/SnippetTool/FormItem.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return SnippetToolFormItem}));var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/form/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_Layout_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/renderer/components/Layout/Tooltip.jsx"),_shared_language__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/language/index.js"),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);const FormItem=antd__WEBPACK_IMPORTED_MODULE_1__.a.Item;class SnippetToolFormItem extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent{render(){const{formItemLayout:e,children:_,label:t,tip:o}=this.props,r=e||{labelCol:{span:7},wrapperCol:{span:15}};return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},r,{label:o?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Layout_Tooltip__WEBPACK_IMPORTED_MODULE_3__.a,{title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_4__.a)(o)},Object(_shared_language__WEBPACK_IMPORTED_MODULE_4__.a)(t)):Object(_shared_language__WEBPACK_IMPORTED_MODULE_4__.a)(t)}),_)}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}var reactHotLoader,leaveModule;reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&(reactHotLoader.register(FormItem,"FormItem","/code/once/once/src/renderer/components/SnippetTool/FormItem.jsx"),reactHotLoader.register(SnippetToolFormItem,"SnippetToolFormItem","/code/once/once/src/renderer/components/SnippetTool/FormItem.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/components/SnippetTool/Modal.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return SnippetToolModal}));var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/modal/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),lodash__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__),_shared_language__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/shared/language/index.js"),enterModule,reactHotLoader,leaveModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);class SnippetToolModal extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent{constructor(...e){super(...e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"state",{width:"100%"})}componentDidMount(){const e=document.getElementById("snippet");this.setState({width:e.offsetWidth})}componentDidUpdate(){const e=document.getElementsByClassName("snippet-tool-modal")[0];e&&(e.style.width=`${this.state.width}px`,e.style.height=`${this.props.windowHeight-123}px`,e.style.top="127px",e.style.left=`calc(100vw - ${this.state.width}px)`)}render(){const{children:e,title:_,visible:t,toggleView:o,windowHeight:r,onOk:n,keyboard:a}=this.props;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{wrapClassName:"snippet-tool-modal",title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(_),visible:t,onCancel:()=>o(),destroyOnClose:!0,maskStyle:{height:r-123,top:127,left:`calc(100vw - ${this.state.width}px)`,width:this.state.width},zIndex:500,style:{top:20},okText:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)("once.basic.yes"),cancelText:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)("once.basic.no"),onOk:n,keyboard:!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isBoolean(a)||a},e),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a,{id:"664393512"},".snippet-tool-modal .ant-modal-close-x{width:39px !important;height:39px !important;line-height:39px !important;}.snippet-tool-modal .ant-modal-footer{padding:5px 8px !important;}.snippet-tool-modal .ant-modal-header{padding:8px 18px !important;}.snippet-tool-modal .ant-modal-body{padding:12px !important;}"))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&reactHotLoader.register(SnippetToolModal,"SnippetToolModal","/code/once/once/src/renderer/components/SnippetTool/Modal.jsx"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/routes/Snippet/ToolBar/FillIn/Menu.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/radio/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/icon/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/switch/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/input-number/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/form/index.js"),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/renderer/components/SnippetTool/FormItem.jsx"),_components_SnippetTool_Modal__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/renderer/components/SnippetTool/Modal.jsx"),_shared_language__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/shared/language/index.js"),_shared_debug__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/shared/debug.js"),query_string__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/query-string/index.js"),query_string__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_13__),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);const RadioGroup=antd__WEBPACK_IMPORTED_MODULE_2__.a.Group;class SnippetFillMenu extends react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent{constructor(...e){super(...e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"state",{isCheck:!1,selected:0,addKey:2,optGroup:["Option A","Option B",""],existFillIn:{name:null,info:null,width:null}}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onOk",()=>{this.props.form.validateFields((e,_)=>{if(!e&&_){this.props.toggleView();let e=this.state.optGroup.filter(e=>e);e=e.map(e=>`&opt=${e}`);const t=`%fillmenu&name=${_.name}${`&default=${this.state.optGroup[this.state.selected]}`}${_.info?`&info=${_.info}`:""}${e.join("")}${this.state.isCheck?"&isCheck=1":"&isCheck=0"}${_.width?`&width=${_.width}`:""}%`;this.props.existFillIn?this.props.getSnippetEditor().updateExistFillIn(t,this.props.existFillIn):this.props.getSnippetEditor().onInsertText(t)}})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onChange",e=>{if(e===this.state.addKey){const _=this.state.optGroup;this.setState({optGroup:[..._,""],addKey:e+1,selected:e})}else this.setState({selected:e})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onInputChange",lodash__WEBPACK_IMPORTED_MODULE_1___default.a.debounce((e,_)=>{const t=this.state.optGroup;t[_]=e,this.setState({optGroup:t})},500)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"removeByIndex",(e,_)=>e.slice(0,_).concat(e.slice(_+1))),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"onRemove",e=>{let _=this.state.optGroup;_=this.removeByIndex(_,e);const t=this.state.addKey-1;this.setState({optGroup:_,addKey:t})})}componentDidMount(){const e=this.props.existFillIn;let _;e&&(_=query_string__WEBPACK_IMPORTED_MODULE_13___default.a.parse(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.unescape(e.abbr.substring(1,e.length-1)))),this.setState({...this.props.existFillIn&&{existFillIn:_},...this.props.existFillIn&&_.opt&&{optGroup:[..._.opt,""],addKey:_.opt.length,selected:Number(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(_.opt,e=>e===_.default)),isCheck:!!Number(_.isCheck)}})}render(){Object(_shared_debug__WEBPACK_IMPORTED_MODULE_12__.a)("[SnippetFillMenu] rendering...");const{visible:e,toggleView:_,windowHeight:t,form:o}=this.props,{getFieldDecorator:r}=o,{existFillIn:n}=this.state;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SnippetTool_Modal__WEBPACK_IMPORTED_MODULE_10__.a,{title:"fill-in-Popup-menu",visible:e,toggleView:_,windowHeight:t,onOk:this.onOk},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_9__.a,{label:"fill-in-name"},r("name",{rules:[{required:!0}],initialValue:n.name})(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.a,{placeholder:Object(_shared_language__WEBPACK_IMPORTED_MODULE_11__.a)("fill-in-name-show")}))),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_9__.a,{label:"fill-in-info"},r("info",{rules:[{required:!1}],initialValue:n.info})(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.a,{placeholder:Object(_shared_language__WEBPACK_IMPORTED_MODULE_11__.a)("fill-in-info-show")}))),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_9__.a,{label:"fill-in-value"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(RadioGroup,{onChange:e=>this.onChange(e.target.value),value:this.state.selected},this.state.optGroup.map((e,_)=>react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{key:`RadioGroup_${_}_${e}`},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{value:_},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.a,{autoFocus:_===this.state.selected,style:{width:215,marginLeft:10},defaultValue:e,onChange:e=>{e.persist(),this.onInputChange(e.target.value,_)},onFocus:()=>this.onChange(_)})),_!==this.state.addKey&&react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.a,{type:"delete",theme:"outlined",style:{cursor:"pointer"},onClick:()=>this.onRemove(_)}))))),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_9__.a,{label:"fill-in-option-section-isCheck"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.a,{checkedChildren:react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.a,{type:"check"}),unCheckedChildren:react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.a,{type:"close"}),checked:this.state.isCheck,onChange:()=>{this.setState({isCheck:!this.state.isCheck})}})),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_9__.a,{label:"fill-in-width"},r("width",{initialValue:n.width})(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.a,{placeholder:100,min:10,max:500}))))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=antd__WEBPACK_IMPORTED_MODULE_7__.a.create()(SnippetFillMenu);var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&(reactHotLoader.register(RadioGroup,"RadioGroup","/code/once/once/src/renderer/routes/Snippet/ToolBar/FillIn/Menu.jsx"),reactHotLoader.register(SnippetFillMenu,"SnippetFillMenu","/code/once/once/src/renderer/routes/Snippet/ToolBar/FillIn/Menu.jsx"),reactHotLoader.register(_default,"default","/code/once/once/src/renderer/routes/Snippet/ToolBar/FillIn/Menu.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);