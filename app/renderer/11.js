(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/renderer/assets/images/author.jpeg":function(e,t,a){e.exports=a.p+"dd03fa8d6242c13528f676b1a035c306.jpeg"},"./src/renderer/components/UserTutorial/index.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/tooltip/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/button/index.js"),react_joyride__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-joyride/es/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_shared_language__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/shared/language/index.js"),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);class UserTutorial extends react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent{constructor(e){super(e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"handleJoyrideSteps",({action:e,index:t,type:a})=>{const{showTutorial:r}=this.state;a===react_joyride__WEBPACK_IMPORTED_MODULE_4__.b.TOUR_END&&r?(this.setState({showTutorial:!1,tutorialCompleted:!0,stepIndex:0}),this.setTutorialStatus(),antd__WEBPACK_IMPORTED_MODULE_1__.a.success(Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-end"))):a!==react_joyride__WEBPACK_IMPORTED_MODULE_4__.b.STEP_AFTER&&a!==react_joyride__WEBPACK_IMPORTED_MODULE_4__.b.TARGET_NOT_FOUND||this.setState({stepIndex:t+(e===react_joyride__WEBPACK_IMPORTED_MODULE_4__.a.PREV?-1:1)})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"toggleTutorial",()=>{this.setState(({showTutorial:e})=>({showTutorial:!e}))}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"getTutorialStatus",()=>{let e=localStorage.getItem(this.props.id);const{id:t}=this.props;return e?(e=JSON.parse(e),e[t]||(e[t]=!1,localStorage.setItem(this.props.id,JSON.stringify(e)))):(e={[t]:!1},localStorage.setItem(this.props.id,JSON.stringify(e))),e[t]}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"setTutorialStatus",()=>{const{id:e}=this.props,t=localStorage.getItem(this.props.id);if(t){const a=JSON.parse(t);a[e]=!0,localStorage.setItem(this.props.id,JSON.stringify(a))}});const t=this.getTutorialStatus();this.state={showTutorial:!t,tutorialCompleted:t,stepIndex:0}}render(){const{showTutorial:e,tutorialCompleted:t,stepIndex:a}=this.state,{showUserTutorial:r,joyrideSteps:o}=this.props;return r?react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{placement:"leftTop",title:t?Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-completed"):Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-start")},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:this.toggleTutorial,type:"primary",size:"small",style:{background:t?"#52c41a":"#40a9ff",borderColor:t?"#52c41a":"#40a9ff",color:"white",...this.props.toggleButtonStyles},icon:t?"check-circle":"play-circle"}))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_joyride__WEBPACK_IMPORTED_MODULE_4__.c,{run:e,steps:o,styles:{options:{overlayColor:"rgba(0, 0, 0, 0.65)",primaryColor:"#1890ff",textColor:"rgba(0, 0, 0, 0.85)",zIndex:9999}},continuous:!0,showProgress:!0,showSkipButton:!0,stepIndex:a,callback:this.handleJoyrideSteps,locale:{back:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-back"),close:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-close"),last:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-last"),next:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-next"),skip:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-skip")}})):null}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}UserTutorial.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,showUserTutorial:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,joyrideSteps:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array},UserTutorial.defaultProps={showUserTutorial:!0,joyrideSteps:[]};const _default=UserTutorial;var reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&(reactHotLoader.register(UserTutorial,"UserTutorial","/code/once/once/src/renderer/components/UserTutorial/index.jsx"),reactHotLoader.register(_default,"default","/code/once/once/src/renderer/components/UserTutorial/index.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/routes/Introduce/index.jsx":function(e,t,a){"use strict";a.r(t),function(e){a("./node_modules/core-js/modules/web.dom.iterable.js");var r,o=a("./node_modules/styled-jsx/style.js"),n=a.n(o),_=a("./node_modules/antd/es/alert/index.js"),s=a("./node_modules/antd/es/row/index.js"),l=a("./node_modules/antd/es/col/index.js"),d=a("./node_modules/antd/es/divider/index.js"),c=a("./node_modules/antd/es/table/index.js"),i=a("./node_modules/antd/es/list/index.js"),u=a("./node_modules/antd/es/avatar/index.js"),p=a("./node_modules/antd/es/badge/index.js"),m=a("./src/shared/index.js"),E=a("./node_modules/react/index.js"),b=a.n(E),x=a("./src/renderer/components/UserTutorial/index.jsx"),g=a("./node_modules/lodash/lodash.js"),O=a.n(g),j=a("./src/shared/language/index.js"),h=a("./src/renderer/util/joyrideSteps.js"),y=a("./src/shared/debug.js"),M=a("electron");(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("./node_modules/react-hot-loader/index.js")).enterModule)&&r(e);const P={node:"Node.js",npm:"NPM",sh:"Bash",python:"Python",dev:"dev"},f={columns:[{title:"Command",dataIndex:"command"},{title:"Keybinding",dataIndex:"keybinding"}],data:[{command:"Immersive mode",keybinding:"⌘/Ctrl + L"},{command:"Trigger snippet",keybinding:"Space"},{command:"Create Group",keybinding:"⌘/Ctrl + T"},{command:"Create Snippet",keybinding:"⌘/Ctrl + I"},{command:"Quick Create Snippet",keybinding:"⌥/Alt + ]"},{command:"Search Snippet Bar",keybinding:"⌥/Alt + Space"},{command:"Hidden Group",keybinding:"⌥/Alt + 1"},{command:"Hidden Snippet List",keybinding:"⌥/Alt + 2"},{command:"Hidden Header Bar",keybinding:"⌥/Alt + 3"}]},D=({updateList:e})=>{const t=e?e.manifest:[],r=Object(E.useRef)(null);return Object(E.useEffect)(()=>{const e=Object(m.b)(["sh","node","python","npm"]);r.current=[],e.forEach(e=>{e.isExist||r.current.push(`${Object(j.a)("once.basic.install.env")} ${P[e.command]}`)})},[]),Object(y.a)("[SnippetIntroduce] rendering..."),b.a.createElement("div",{className:"jsx-2757173003 introduce"},b.a.createElement("div",{className:"jsx-2757173003 introduce-error-title"},m.d?b.a.createElement(_.a,{message:Object(j.a)("once.basic.tip"),description:b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"jsx-2757173003"}," - ",Object(j.a)("once.intro.warning.desc")),O.a.isEmpty(r.current)?null:b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"jsx-2757173003"}," - ",r.current.join("\n")),b.a.createElement("a",{onClick:e=>{e&&e.persist(),M.shell.openExternal("https://once.work/environmental#compile-functional-environment-support")},style:{paddingLeft:10},className:"jsx-2757173003"},Object(j.a)("once.basic.install.env.tip")))),type:"warning",closable:!0,onClose:()=>{}}):null),b.a.createElement(s.a,null,b.a.createElement(l.a,{xs:12,style:{paddingRight:30,paddingBottom:20}},b.a.createElement(d.a,{orientation:"left"},Object(j.a)("once.intro.tutorial.title")),b.a.createElement(s.a,{style:{boxShadow:"inset 0 0 0 0 rgba(0,0,0,.16), inset 0 0px 0 0 rgba(0,0,0,.08), 0px 1px 8px 2px rgba(0,0,0,.08)",padding:"8px 14px",borderRadius:"4px"}},b.a.createElement(l.a,{xs:4},b.a.createElement(x.a,{id:"tutorial-basic",joyrideSteps:h.a.basic})),b.a.createElement(l.a,{xs:20},b.a.createElement("span",{style:{height:24,lineHeight:"24px",fontSize:14,verticalAlign:"top"},className:"jsx-2757173003"},Object(j.a)("once.intro.tutorial.desc")))),b.a.createElement(d.a,{orientation:"left"},Object(j.a)("once.intro.usage.shortcut")),b.a.createElement(c.a,{rowKey:"command",pagination:!1,columns:f.columns,dataSource:f.data,size:"middle",style:{overflow:"auto",boxShadow:"inset 0 0 0 0 rgba(0,0,0,.16), inset 0 0px 0 0 rgba(0,0,0,.08), 0px 1px 8px 2px rgba(0,0,0,.08)",borderRadius:"4px"}})),b.a.createElement(l.a,{xs:12},b.a.createElement(d.a,{orientation:"left"},Object(j.a)("once.intro.updater.title")),b.a.createElement(i.a,{itemLayout:"horizontal",dataSource:t,style:{maxHeight:290,overflow:"auto",boxShadow:"inset 0 0 0 0 rgba(0,0,0,.16), inset 0 0px 0 0 rgba(0,0,0,.08), 0px 1px 8px 2px rgba(0,0,0,.08)",paddingLeft:14,borderRadius:"4px"},renderItem:e=>b.a.createElement(i.a.Item,null,b.a.createElement(i.a.Item.Meta,{avatar:b.a.createElement(u.a,{shape:"square",src:a("./src/renderer/assets/images/logo-gen.png"),style:{height:"95%",boxShadow:"rgba(0, 0, 0, 0.16) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.08) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.08) 0px 3px 10px 1px",transition:"box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)"}}),title:b.a.createElement("span",{className:"jsx-2757173003"},e.version),description:e.detail}))}),b.a.createElement(d.a,{orientation:"left"},Object(j.a)("once.basic.contact")),b.a.createElement(s.a,{style:{boxShadow:"inset 0 0 0 0 rgba(0,0,0,.16), inset 0 0px 0 0 rgba(0,0,0,.08), 0px 1px 8px 2px rgba(0,0,0,.08)",padding:"8px 14px",borderRadius:"4px"}},b.a.createElement(l.a,{xs:3},b.a.createElement(u.a,{src:a("./src/renderer/assets/images/author.jpeg")})),b.a.createElement(l.a,{xs:21},b.a.createElement(p.a,{status:"processing",text:Object(j.a)("once.basic.contact.name")}),b.a.createElement("br",{className:"jsx-2757173003"}),b.a.createElement(p.a,{status:"processing",text:Object(j.a)("once.basic.contact.email")}),b.a.createElement("br",{className:"jsx-2757173003"}),b.a.createElement(p.a,{status:"processing",text:Object(j.a)("once.basic.contact.website")}))))),b.a.createElement(n.a,{id:"2757173003"},".introduce.jsx-2757173003{width:calc(100% + 1px);height:100%;background-color:#fff;border:1px solid #e8e8e8;margin-bottom:-1px;padding:0 20px;position:absolute;bottom:0px;top:0px;overflow:auto;margin-left:-1px;}.introduce-error-title.jsx-2757173003{margin:20px 0 0 0;}"))},T=D;var L,I;t.default=T,(L=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("./node_modules/react-hot-loader/index.js")).default)&&(L.register(P,"commands","/code/once/once/src/renderer/routes/Introduce/index.jsx"),L.register(f,"shortcuts","/code/once/once/src/renderer/routes/Introduce/index.jsx"),L.register(D,"snippetIntroduce","/code/once/once/src/renderer/routes/Introduce/index.jsx"),L.register(T,"default","/code/once/once/src/renderer/routes/Introduce/index.jsx")),(I=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("./node_modules/react-hot-loader/index.js")).leaveModule)&&I(e)}.call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/renderer/util/joyrideSteps.js":function(e,t,a){"use strict";(function(e){var r,o=a("./node_modules/react/index.js"),n=a.n(o),_=a("./src/shared/language/index.js");(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("./node_modules/react-hot-loader/index.js")).enterModule)&&r(e);const s={basic:[{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-add-group")),target:"#tutorial-basic-add-group",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-add-snippet")),target:"#tutorial-basic-add-snippet",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-sync-all")),target:"#tutorial-basic-sync-all",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-sync-download")),target:"#tutorial-basic-sync-download",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-sync-upload")),target:"#tutorial-basic-sync-upload",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-sync-check")),target:"#tutorial-basic-sync-check",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-sync-welcome")),target:"#tutorial-basic-sync-welcome",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-verify-license")),target:"#tutorial-basic-verify-license",placement:"bottom"}]},l=s;var d,c;t.a=l,(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("./node_modules/react-hot-loader/index.js")).default)&&(d.register(s,"joyrideSteps","/code/once/once/src/renderer/util/joyrideSteps.js"),d.register(l,"default","/code/once/once/src/renderer/util/joyrideSteps.js")),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("./node_modules/react-hot-loader/index.js")).leaveModule)&&c(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);