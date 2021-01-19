(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./node_modules/@ant-design/icons/es/icons/SearchOutlined.js":function(e,_,a){"use strict";var t=a("./node_modules/react/index.js"),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},o=a("./node_modules/@ant-design/icons/es/components/AntdIcon.js"),r=function(e,_){return t.createElement(o.a,Object.assign({},e,{ref:_,icon:n}))};r.displayName="SearchOutlined";_.a=t.forwardRef(r)},"./node_modules/antd/es/auto-complete/index.js":function(e,_,a){"use strict";var t=a("./node_modules/react/index.js"),n=a("./node_modules/rc-util/es/Children/toArray.js"),o=a("./node_modules/classnames/index.js"),r=a.n(o),l=a("./node_modules/omit.js/es/index.js"),i=a("./node_modules/antd/es/select/index.js"),s=a("./node_modules/antd/es/config-provider/context.js"),d=a("./node_modules/antd/es/_util/warning.js");function c(){return(c=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var a=arguments[_];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=i.a.Option,p=i.a;function g(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var m=t.forwardRef((function(e,_){var a,o=e.prefixCls,m=e.className,M=e.children,O=e.dataSource,D=Object(n.a)(M),P=t.useRef();t.useImperativeHandle(_,(function(){return P.current})),1===D.length&&t.isValidElement(D[0])&&!g(D[0])&&(a=D[0]);var f,b=function(){return a};return f=D.length&&g(D[0])?M:O?O.map((function(e){if(t.isValidElement(e))return e;switch(u(e)){case"string":return t.createElement(E,{key:e,value:e},e);case"object":var _=e.value;return t.createElement(E,{key:_,value:_},e.text);default:throw new Error("AutoComplete[dataSource] only supports type `string[] | Object[]`.")}})):[],t.useEffect((function(){Object(d.a)(!("dataSource"in e),"AutoComplete","`dataSource` is deprecated, please use `options` instead."),Object(d.a)(!a||!("size"in e),"AutoComplete","You need to control style self instead of setting `size` when using customize input.")}),[]),t.createElement(s.a,null,(function(_){var a=(0,_.getPrefixCls)("select",o);return t.createElement(p,c({ref:P},Object(l.a)(e,["dataSource"]),{prefixCls:a,className:r()(m,"".concat(a,"-auto-complete")),mode:i.a.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:b}),f)}))}));m.Option=E,_.a=m},"./src/renderer/components/SnippetTool/FormItem.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return SnippetToolFormItem}));var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),_ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ant-design/compatible/es/form/index.js"),_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ant-design/compatible/assets/index.css"),_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_Layout_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/renderer/components/Layout/Tooltip.jsx"),_shared_language__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/shared/language/index.js"),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const FormItem=_ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__.a.Item;class SnippetToolFormItem extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent{render(){const{formItemLayout:e,children:_,label:a,tip:t}=this.props,n=e||{labelCol:{span:7},wrapperCol:{span:15}};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FormItem,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},n,{label:t?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout_Tooltip__WEBPACK_IMPORTED_MODULE_4__.a,{title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(t)},Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(a)):Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(a)}),_)}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}var reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(FormItem,"FormItem","/Users/dxu/my/once/src/renderer/components/SnippetTool/FormItem.jsx"),reactHotLoader.register(SnippetToolFormItem,"SnippetToolFormItem","/Users/dxu/my/once/src/renderer/components/SnippetTool/FormItem.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/components/SnippetTool/Modal.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return SnippetToolModal}));var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/modal/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),lodash__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__),_shared_language__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/shared/language/index.js"),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},reactHotLoader,leaveModule;class SnippetToolModal extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent{constructor(...e){super(...e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"state",{width:"100%"})}componentDidMount(){const e=document.getElementById("snippet");this.setState({width:e.offsetWidth})}componentDidUpdate(){const e=document.getElementsByClassName("snippet-tool-modal")[0];e&&(e.style.width=this.state.width+"px",e.style.height=this.props.windowHeight-123+"px",e.style.top="127px",e.style.left=`calc(100vw - ${this.state.width}px)`)}render(){const{children:e,title:_,visible:a,toggleView:t,windowHeight:n,onOk:o,keyboard:r}=this.props;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{wrapClassName:"snippet-tool-modal",title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)(_),visible:a,onCancel:()=>t(),destroyOnClose:!0,maskStyle:{height:n-123,top:127,left:`calc(100vw - ${this.state.width}px)`,width:this.state.width},zIndex:500,style:{top:20},okText:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)("once.basic.yes"),cancelText:Object(_shared_language__WEBPACK_IMPORTED_MODULE_5__.a)("once.basic.no"),onOk:o,keyboard:!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isBoolean(r)||r},e),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,{id:"664393512"},".snippet-tool-modal .ant-modal-close-x{width:39px !important;height:39px !important;line-height:39px !important;}.snippet-tool-modal .ant-modal-footer{padding:5px 8px !important;}.snippet-tool-modal .ant-modal-header{padding:8px 18px !important;}.snippet-tool-modal .ant-modal-body{padding:12px !important;}"))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(SnippetToolModal,"SnippetToolModal","/Users/dxu/my/once/src/renderer/components/SnippetTool/Modal.jsx"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/routes/Snippet/ToolBar/Date/DateLocal.js":function(e,_,a){"use strict";(function(e){var a;(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const t=[{region:"Afrikaans",lang:"af"},{region:"Albanian",lang:"sq"},{region:"Arabic",lang:"ar"},{region:"Arabic (Algeria)",lang:"ar-dz"},{region:"Arabic (Kuwait)",lang:"ar-kw"},{region:"Arabic (Lybia)",lang:"ar-ly"},{region:"Arabic (Morocco)",lang:"ar-ma"},{region:"Arabic (Saudi Arabia)",lang:"ar-sa"},{region:"Arabic (Tunisia)",lang:"ar-tn"},{region:"Armenian",lang:"hy-am"},{region:"Azerbaijani",lang:"az"},{region:"Bambara",lang:"bm"},{region:"Basque",lang:"eu"},{region:"Belarusian",lang:"be"},{region:"Bengali",lang:"bn"},{region:"Bosnian",lang:"bs"},{region:"Breton",lang:"br"},{region:"Bulgarian",lang:"bg"},{region:"Burmese",lang:"my"},{region:"Cambodian",lang:"km"},{region:"Catalan",lang:"ca"},{region:"Central Atlas Tamazight",lang:"tzm"},{region:"Central Atlas Tamazight Latin",lang:"tzm-latn"},{region:"Chinese (China)",lang:"zh-cn"},{region:"Chinese (Hong Kong)",lang:"zh-hk"},{region:"Chinese (Taiwan)",lang:"zh-tw"},{region:"Chuvash",lang:"cv"},{region:"Croatian",lang:"hr"},{region:"Czech",lang:"cs"},{region:"Danish",lang:"da"},{region:"Dutch",lang:"nl"},{region:"Dutch (Belgium)",lang:"nl-be"},{region:"English (Australia)",lang:"en-au"},{region:"English (Canada)",lang:"en-ca"},{region:"English (Ireland)",lang:"en-ie"},{region:"English (Israel)",lang:"en-il"},{region:"English (New Zealand)",lang:"en-nz"},{region:"English (United Kingdom)",lang:"en-gb"},{region:"English (United States)",lang:"en"},{region:"Esperanto",lang:"eo"},{region:"Estonian",lang:"et"},{region:"Faroese",lang:"fo"},{region:"Finnish",lang:"fi"},{region:"French",lang:"fr"},{region:"French (Canada)",lang:"fr-ca"},{region:"French (Switzerland)",lang:"fr-ch"},{region:"Frisian",lang:"fy"},{region:"Galician",lang:"gl"},{region:"Georgian",lang:"ka"},{region:"German",lang:"de"},{region:"German (Austria)",lang:"de-at"},{region:"German (Switzerland)",lang:"de-ch"},{region:"Greek",lang:"el"},{region:"Gujarati",lang:"gu"},{region:"Hebrew",lang:"he"},{region:"Hindi",lang:"hi"},{region:"Hungarian",lang:"hu"},{region:"Icelandic",lang:"is"},{region:"Indonesian",lang:"id"},{region:"Italian",lang:"it"},{region:"Japanese",lang:"ja"},{region:"Javanese",lang:"jv"},{region:"Kannada",lang:"kn"},{region:"Kazakh",lang:"kk"},{region:"Klingon",lang:"tlh"},{region:"Konkani Latin script",lang:"gom-latn"},{region:"Korean",lang:"ko"},{region:"Kurdish",lang:"ku"},{region:"Kyrgyz",lang:"ky"},{region:"Lao",lang:"lo"},{region:"Latvian",lang:"lv"},{region:"Lithuanian",lang:"lt"},{region:"Luxembourgish",lang:"lb"},{region:"Macedonian",lang:"mk"},{region:"Malay",lang:"ms-my"},{region:"Malay",lang:"ms"},{region:"Malayalam",lang:"ml"},{region:"Maldivian",lang:"dv"},{region:"Maltese (Malta)",lang:"mt"},{region:"Maori",lang:"mi"},{region:"Marathi",lang:"mr"},{region:"Mongolian",lang:"mn"},{region:"Montenegrin",lang:"me"},{region:"Nepalese",lang:"ne"},{region:"Northern Sami",lang:"se"},{region:"Norwegian Bokmål",lang:"nb"},{region:"Nynorsk",lang:"nn"},{region:"Persian",lang:"fa"},{region:"Polish",lang:"pl"},{region:"Portuguese",lang:"pt"},{region:"Portuguese (Brazil)",lang:"pt-br"},{region:"Pseudo",lang:"x-pseudo"},{region:"Punjabi (India)",lang:"pa-in"},{region:"Romanian",lang:"ro"},{region:"Russian",lang:"ru"},{region:"Scottish Gaelic",lang:"gd"},{region:"Serbian",lang:"sr"},{region:"Serbian Cyrillic",lang:"sr-cyrl"},{region:"Sindhi",lang:"sd"},{region:"Sinhalese",lang:"si"},{region:"Slovak",lang:"sk"},{region:"Slovenian",lang:"sl"},{region:"Spanish",lang:"es"},{region:"Spanish (Dominican Republic)",lang:"es-do"},{region:"Spanish (United States)",lang:"es-us"},{region:"Swahili",lang:"sw"},{region:"Swedish",lang:"sv"},{region:"Tagalog (Philippines)",lang:"tl-ph"},{region:"Tajik",lang:"tg"},{region:"Talossan",lang:"tzl"},{region:"Tamil",lang:"ta"},{region:"Telugu",lang:"te"},{region:"Tetun Dili (East Timor)",lang:"tet"},{region:"Thai",lang:"th"},{region:"Tibetan",lang:"bo"},{region:"Turkish",lang:"tr"},{region:"Ukrainian",lang:"uk"},{region:"Urdu",lang:"ur"},{region:"Uyghur (China)",lang:"ug-cn"},{region:"Uzbek",lang:"uz"},{region:"Uzbek Latin",lang:"uz-latn"},{region:"Vietnamese",lang:"vi"},{region:"Welsh",lang:"cy"},{region:"Yoruba Nigeria",lang:"yo"},{region:"siSwati",lang:"ss"}];var n,o;_.a=t,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(t,"default","/Users/dxu/my/once/src/renderer/routes/Snippet/ToolBar/Date/DateLocal.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/renderer/routes/Snippet/ToolBar/Date/index.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__),_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/SearchOutlined.js"),_ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ant-design/compatible/es/form/index.js"),_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ant-design/compatible/assets/index.css"),_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_ant_design_compatible_assets_index_css__WEBPACK_IMPORTED_MODULE_4__),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/select/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/auto-complete/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/input-number/index.js"),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/renderer/components/SnippetTool/FormItem.jsx"),_components_SnippetTool_Modal__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/renderer/components/SnippetTool/Modal.jsx"),lodash__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__),_shared_language__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/shared/language/index.js"),_DateLocal__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/renderer/routes/Snippet/ToolBar/Date/DateLocal.js"),_shared_debug__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/shared/debug.js"),moment__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__),query_string__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/query-string/index.js"),query_string__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_18__),electron__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("electron"),electron__WEBPACK_IMPORTED_MODULE_19___default=__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_19__),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const{Option:Option}=antd__WEBPACK_IMPORTED_MODULE_5__.a,{Option:AutoCompleteOption,OptGroup:OptGroup}=antd__WEBPACK_IMPORTED_MODULE_6__.a;class snippetDate extends react__WEBPACK_IMPORTED_MODULE_10___default.a.PureComponent{constructor(...e){super(...e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"formatTypes",[{title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("date-localized-formats"),children:[{format:"LT"},{format:"LTS"},{format:"L"},{format:"l"},{format:"LL"},{format:"ll"},{format:"LLL"},{format:"lll"},{format:"LLLL"},{format:"llll"}]},{title:Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("date-general-formats"),children:[{format:"YYYY-MM-DD"},{format:"YY-M-D"},{format:"DD-MM-YYYY"},{format:"D-M-YY"},{format:"E,MMM D,YY"},{format:"E,MMMM,DD,YYYY"},{format:"HH:mm:ss"},{format:"h:mm A"},{format:"h:mm A, Z"},{format:"hh [o'clock] A, Z "}]}]),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"state",{preview:moment__WEBPACK_IMPORTED_MODULE_17___default()().format(),potentialContent:{format:null,lang:"en",calc:0}}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onOk",()=>{this.props.form.validateFields((e,_)=>{if(!e&&_){this.props.toggleView();const e=`%date&format=${_.format}${_.lang?"&lang="+_.lang:""}${_.calc?"&calc="+_.calc:""}%`;this.props.potentialContent?this.props.getSnippetEditor().updateExistFillIn(e,this.props.potentialContent):this.props.getSnippetEditor().onInsertText(e)}})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onChangeMoment",(e,_)=>{try{switch(_){case"format":{moment__WEBPACK_IMPORTED_MODULE_17___default.a.locale(this.state.potentialContent.lang);const _=moment__WEBPACK_IMPORTED_MODULE_17___default()().format(e);this.props.form.setFieldsValue({format:e}),this.setState({preview:_,format:e})}break;case"lang":{moment__WEBPACK_IMPORTED_MODULE_17___default.a.locale(e);const _=moment__WEBPACK_IMPORTED_MODULE_17___default()().format(this.state.potentialContent.format);this.setState({preview:_,lang:e})}break;case"calc":{moment__WEBPACK_IMPORTED_MODULE_17___default.a.locale(this.state.potentialContent.lang);const _=(e>0?moment__WEBPACK_IMPORTED_MODULE_17___default()().add(e,"days"):moment__WEBPACK_IMPORTED_MODULE_17___default()().subtract(Math.abs(e),"days")).format(this.state.potentialContent.format);this.setState({preview:_,calc:e})}}}catch(e){antd__WEBPACK_IMPORTED_MODULE_7__.a.error(e.message)}}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"renderFormatOptions",()=>this.formatTypes.map(e=>react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OptGroup,{key:e.title,label:this.renderFormatOptionTitle(e.title)},e.children.map(e=>react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(AutoCompleteOption,{key:e.format,value:e.format},e.format,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span",{className:"snippet-date-search-item-count"},moment__WEBPACK_IMPORTED_MODULE_17___default()().format(e.format)))))))}componentDidMount(){const e=this.props.potentialContent;let _,a;e&&(_=query_string__WEBPACK_IMPORTED_MODULE_18___default.a.parse(lodash__WEBPACK_IMPORTED_MODULE_13___default.a.unescape(e.abbr.substring(1,e.length-1)))),_&&_.lang&&moment__WEBPACK_IMPORTED_MODULE_17___default.a.locale(_.lang),_&&lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isNumber(Number(_.calc))&&(a=_.calc>0?moment__WEBPACK_IMPORTED_MODULE_17___default()().add(_.calc,"days"):moment__WEBPACK_IMPORTED_MODULE_17___default()().subtract(Math.abs(_.calc),"days")),_&&_.format&&(a=a?a.format(_.format):moment__WEBPACK_IMPORTED_MODULE_17___default()().format(_.format)),this.setState({...this.props.potentialContent&&{potentialContent:_},...a&&{preview:a}})}renderFormatOptionTitle(e){return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span",null,e,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a",{style:{float:"right"},onClick:e=>{e&&e.preventDefault(),electron__WEBPACK_IMPORTED_MODULE_19__.shell.openExternal("https://momentjs.com/docs/#/displaying/format/")}},Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("date-formats-more")))}render(){Object(_shared_debug__WEBPACK_IMPORTED_MODULE_16__.a)("[SnippetDate] rendering...");const{visible:e,toggleView:_,windowHeight:a,form:t}=this.props,{getFieldDecorator:n}=t,{potentialContent:o}=this.state;return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_Modal__WEBPACK_IMPORTED_MODULE_12__.a,{title:"date-title",visible:e,toggleView:_,windowHeight:a,onOk:this.onOk},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__.a,{label:"date-preview-title"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.a,{disabled:!0,placeholder:this.state.preview})),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__.a,{label:"date-locale-title"},n("lang",{initialValue:o.lang})(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.a,{dropdownClassName:"snippet-type-select-dropdown",placeholder:"Please select a region",style:{width:250},onSelect:e=>this.onChangeMoment(e,"lang")},_DateLocal__WEBPACK_IMPORTED_MODULE_15__.a.map(e=>react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Option,{key:e.lang,value:e.lang},e.region))))),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__.a,{label:"date-format-title"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div",{style:{width:250},className:"jsx-4193680237 snippet-date-search-wrapper"},n("format",{rules:[{required:!0}],initialValue:o.format})(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.a,{className:"snippet-date-search",dropdownClassName:"snippet-date-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:370},style:{width:"100%"},dataSource:this.renderFormatOptions(),placeholder:Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("date-title-custom"),optionLabelProp:"value",onChange:e=>this.onChangeMoment(e,"format")},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.a,{suffix:react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.a,{className:"certain-category-icon"})}))))),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SnippetTool_FormItem__WEBPACK_IMPORTED_MODULE_11__.a,{label:"date-calendar-calc-title"},n("calc",{initialValue:o.calc})(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.a,{formatter:e=>`${e}${Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("date-calendar-calc-value")}`,parser:e=>e.replace(Object(_shared_language__WEBPACK_IMPORTED_MODULE_14__.a)("date-calendar-calc-value"),""),onChange:e=>this.onChangeMoment(e,"calc")})))),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,{id:"4193680237"},".snippet-date-search.ant-select-auto-complete.jsx-4193680237 .ant-input-affix-wrapper.jsx-4193680237 .ant-input-suffix.jsx-4193680237{right:12px;}.snippet-date-search-dropdown.jsx-4193680237{height:300;}.snippet-date-search-dropdown.jsx-4193680237 .ant-select-dropdown-menu-item-group-title.jsx-4193680237{color:#666;font-weight:bold;}.snippet-date-search-dropdown.jsx-4193680237 .ant-select-dropdown-menu-item-group.jsx-4193680237{border-bottom:1px solid #f6f6f6;}.snippet-date-search-dropdown.jsx-4193680237 .ant-select-dropdown-menu-item.jsx-4193680237{padding-left:16px;}.snippet-date-search-dropdown.jsx-4193680237 .ant-select-dropdown-menu-item.show-all.jsx-4193680237{text-align:center;cursor:default;}.snippet-date-search-dropdown.jsx-4193680237 .ant-select-dropdown-menu.jsx-4193680237{max-height:300px !important;}.snippet-date-search-item-count.jsx-4193680237{position:absolute;color:#999;right:16px;}.snippet-date-search.ant-select-focused.jsx-4193680237 .certain-category-icon.jsx-4193680237{color:#108ee9;}.certain-category-icon.jsx-4193680237{color:#6e6e6e;-webkit-transition:all 0.3s cubic-bezier(0.645,0.045,0.355,1);transition:all 0.3s cubic-bezier(0.645,0.045,0.355,1);font-size:16px;}"))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=_ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__.a.create()(snippetDate);var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Option,"Option","/Users/dxu/my/once/src/renderer/routes/Snippet/ToolBar/Date/index.jsx"),reactHotLoader.register(AutoCompleteOption,"AutoCompleteOption","/Users/dxu/my/once/src/renderer/routes/Snippet/ToolBar/Date/index.jsx"),reactHotLoader.register(OptGroup,"OptGroup","/Users/dxu/my/once/src/renderer/routes/Snippet/ToolBar/Date/index.jsx"),reactHotLoader.register(snippetDate,"snippetDate","/Users/dxu/my/once/src/renderer/routes/Snippet/ToolBar/Date/index.jsx"),reactHotLoader.register(_default,"default","/Users/dxu/my/once/src/renderer/routes/Snippet/ToolBar/Date/index.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);