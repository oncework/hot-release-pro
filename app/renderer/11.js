(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/renderer/assets/images/author.jpeg":function(e,t,a){e.exports=a.p+"dd03fa8d6242c13528f676b1a035c306.jpeg"},"./src/renderer/components/UserTutorial/index.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/tooltip/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/button/index.js"),react_joyride__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-joyride/es/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_shared_language__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/shared/language/index.js"),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};class UserTutorial extends react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent{constructor(e){super(e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"handleJoyrideSteps",({action:e,index:t,type:a})=>{const{showTutorial:r}=this.state;a===react_joyride__WEBPACK_IMPORTED_MODULE_4__.b.TOUR_END&&r?(this.setState({showTutorial:!1,tutorialCompleted:!0,stepIndex:0}),this.setTutorialStatus(),antd__WEBPACK_IMPORTED_MODULE_1__.a.success(Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-end"))):a!==react_joyride__WEBPACK_IMPORTED_MODULE_4__.b.STEP_AFTER&&a!==react_joyride__WEBPACK_IMPORTED_MODULE_4__.b.TARGET_NOT_FOUND||this.setState({stepIndex:t+(e===react_joyride__WEBPACK_IMPORTED_MODULE_4__.a.PREV?-1:1)})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"toggleTutorial",()=>{this.setState(({showTutorial:e})=>({showTutorial:!e}))}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"getTutorialStatus",()=>{let e=localStorage.getItem(this.props.id);const{id:t}=this.props;return e?(e=JSON.parse(e))[t]||(e[t]=!1,localStorage.setItem(this.props.id,JSON.stringify(e))):(e={[t]:!1},localStorage.setItem(this.props.id,JSON.stringify(e))),e[t]}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"setTutorialStatus",()=>{const{id:e}=this.props,t=localStorage.getItem(this.props.id);if(t){const a=JSON.parse(t);a[e]=!0,localStorage.setItem(this.props.id,JSON.stringify(a))}});const t=this.getTutorialStatus();this.state={showTutorial:!t,tutorialCompleted:t,stepIndex:0}}render(){const{showTutorial:e,tutorialCompleted:t,stepIndex:a}=this.state,{showUserTutorial:r,joyrideSteps:o}=this.props;return r?react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,{placement:"leftTop",title:t?Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-completed"):Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-start")},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:this.toggleTutorial,type:"primary",size:"small",style:{background:t?"#52c41a":"#40a9ff",borderColor:t?"#52c41a":"#40a9ff",color:"white",...this.props.toggleButtonStyles},icon:t?"check-circle":"play-circle"}))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_joyride__WEBPACK_IMPORTED_MODULE_4__.c,{run:e,steps:o,styles:{options:{overlayColor:"rgba(0, 0, 0, 0.65)",primaryColor:"#1890ff",textColor:"rgba(0, 0, 0, 0.85)",zIndex:9999}},continuous:!0,showProgress:!0,showSkipButton:!0,stepIndex:a,callback:this.handleJoyrideSteps,locale:{back:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-back"),close:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-close"),last:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-last"),next:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-next"),skip:Object(_shared_language__WEBPACK_IMPORTED_MODULE_7__.a)("joyride-local-skip")}})):null}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}UserTutorial.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,showUserTutorial:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,joyrideSteps:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array},UserTutorial.defaultProps={showUserTutorial:!0,joyrideSteps:[]};const _default=UserTutorial;var reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(UserTutorial,"UserTutorial","F:\\func\\once\\src\\renderer\\components\\UserTutorial\\index.jsx"),reactHotLoader.register(_default,"default","F:\\func\\once\\src\\renderer\\components\\UserTutorial\\index.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/renderer/routes/Introduce/index.jsx":function(e,t,a){"use strict";a.r(t),function(e){var r,o=a("./node_modules/antd/es/alert/index.js"),n=a("./node_modules/antd/es/row/index.js"),_=a("./node_modules/antd/es/col/index.js"),l=a("./node_modules/antd/es/divider/index.js"),s=a("./node_modules/antd/es/table/index.js"),d=a("./node_modules/antd/es/list/index.js"),i=a("./node_modules/antd/es/avatar/index.js"),c=a("./node_modules/antd/es/badge/index.js"),u=a("./src/shared/index.js"),p=a("./node_modules/react/index.js"),E=a.n(p),b=a("./src/renderer/components/UserTutorial/index.jsx"),m=a("./node_modules/lodash/lodash.js"),g=a.n(m),O=a("./src/shared/language/index.js"),x=a("./src/renderer/util/joyrideSteps.js"),y=a("./src/shared/debug.js"),f=a("electron");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const M={node:"Node.js",npm:"NPM",sh:"Bash",python:"Python",dev:"dev"},P={columns:[{title:"Command",dataIndex:"command"},{title:"Keybinding",dataIndex:"keybinding"}],data:[{command:"Immersive mode",keybinding:"⌘/Ctrl + L"},{command:"Trigger snippet",keybinding:"Space"},{command:"Create Group",keybinding:"⌘/Ctrl + T"},{command:"Create Snippet",keybinding:"⌘/Ctrl + I"},{command:"Quick Create Snippet",keybinding:"⌥/Alt + ]"},{command:"Search Snippet Bar",keybinding:"⌥/Alt + Space"},{command:"Hidden Group",keybinding:"⌥/Alt + 1"},{command:"Hidden Snippet List",keybinding:"⌥/Alt + 2"},{command:"Hidden Header Bar",keybinding:"⌥/Alt + 3"}]},h=({updateList:e})=>{Object(y.a)("[SnippetIntroduce] rendering...");const t=e?e.manifest:[],r=Object(u.b)(["sh","node","python","npm"]),p=[];return r.forEach(e=>{e.isExist||p.push(`${Object(O.a)("once.basic.install.env")} ${M[e.command]}`)}),E.a.createElement("div",{className:"introduce"},E.a.createElement("div",{className:"introduce-error-title"},u.d?E.a.createElement(o.a,{message:Object(O.a)("once.basic.tip"),description:E.a.createElement(E.a.Fragment,null,E.a.createElement("p",null," - ",Object(O.a)("once.intro.warning.desc")),g.a.isEmpty(p)?null:E.a.createElement(E.a.Fragment,null,E.a.createElement("p",null," - ",p.join("\n")),E.a.createElement("a",{onClick:e=>{e&&e.persist(),f.shell.openExternal("https://once.work/environmental#compile-functional-environment-support")},style:{paddingLeft:10}},Object(O.a)("once.basic.install.env.tip")))),type:"warning",closable:!0,onClose:()=>{}}):null),E.a.createElement(n.a,null,E.a.createElement(_.a,{xs:12,style:{paddingRight:30,paddingBottom:20}},E.a.createElement(l.a,{orientation:"left"},Object(O.a)("once.intro.tutorial.title")),E.a.createElement(n.a,{style:{boxShadow:"inset 0 0 0 0 rgba(0,0,0,.16), inset 0 0px 0 0 rgba(0,0,0,.08), 0px 1px 8px 2px rgba(0,0,0,.08)",padding:"8px 14px",borderRadius:"4px"}},E.a.createElement(_.a,{xs:4},E.a.createElement(b.a,{id:"tutorial-basic",joyrideSteps:x.a.basic})),E.a.createElement(_.a,{xs:20},E.a.createElement("span",{style:{height:24,lineHeight:"24px",fontSize:14,verticalAlign:"top"}},Object(O.a)("once.intro.tutorial.desc")))),E.a.createElement(l.a,{orientation:"left"},Object(O.a)("once.intro.usage.shortcut")),E.a.createElement(s.a,{rowKey:"command",pagination:!1,columns:P.columns,dataSource:P.data,size:"middle",style:{overflow:"auto",boxShadow:"inset 0 0 0 0 rgba(0,0,0,.16), inset 0 0px 0 0 rgba(0,0,0,.08), 0px 1px 8px 2px rgba(0,0,0,.08)",borderRadius:"4px"}})),E.a.createElement(_.a,{xs:12},E.a.createElement(l.a,{orientation:"left"},Object(O.a)("once.intro.updater.title")),E.a.createElement(d.a,{itemLayout:"horizontal",dataSource:t,style:{maxHeight:290,overflow:"auto",boxShadow:"inset 0 0 0 0 rgba(0,0,0,.16), inset 0 0px 0 0 rgba(0,0,0,.08), 0px 1px 8px 2px rgba(0,0,0,.08)",paddingLeft:14,borderRadius:"4px"},renderItem:e=>E.a.createElement(d.a.Item,null,E.a.createElement(d.a.Item.Meta,{avatar:E.a.createElement(i.a,{shape:"square",src:a("./src/renderer/assets/images/logo-gen.png"),style:{height:"95%",boxShadow:"rgba(0, 0, 0, 0.16) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.08) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.08) 0px 3px 10px 1px",transition:"box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)"}}),title:E.a.createElement("span",null,e.version),description:e.detail}))}),E.a.createElement(l.a,{orientation:"left"},Object(O.a)("once.basic.contact")),E.a.createElement(n.a,{style:{boxShadow:"inset 0 0 0 0 rgba(0,0,0,.16), inset 0 0px 0 0 rgba(0,0,0,.08), 0px 1px 8px 2px rgba(0,0,0,.08)",padding:"8px 14px",borderRadius:"4px"}},E.a.createElement(_.a,{xs:3},E.a.createElement(i.a,{src:a("./src/renderer/assets/images/author.jpeg")})),E.a.createElement(_.a,{xs:21},E.a.createElement(c.a,{status:"processing",text:Object(O.a)("once.basic.contact.name")}),E.a.createElement("br",null),E.a.createElement(c.a,{status:"processing",text:Object(O.a)("once.basic.contact.email")}),E.a.createElement("br",null),E.a.createElement(c.a,{status:"processing",text:Object(O.a)("once.basic.contact.website")}))))))},j=h;var D,L;t.default=j,(D="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(D.register(M,"commands","F:\\func\\once\\src\\renderer\\routes\\Introduce\\index.jsx"),D.register(P,"shortcuts","F:\\func\\once\\src\\renderer\\routes\\Introduce\\index.jsx"),D.register(h,"snippetIntroduce","F:\\func\\once\\src\\renderer\\routes\\Introduce\\index.jsx"),D.register(j,"default","F:\\func\\once\\src\\renderer\\routes\\Introduce\\index.jsx")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}.call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/renderer/util/joyrideSteps.js":function(e,t,a){"use strict";(function(e){var r,o=a("./node_modules/react/index.js"),n=a.n(o),_=a("./src/shared/language/index.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const l={basic:[{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-add-group")),target:"#tutorial-basic-add-group",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-add-snippet")),target:"#tutorial-basic-add-snippet",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-sync-all")),target:"#tutorial-basic-sync-all",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-sync-download")),target:"#tutorial-basic-sync-download",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-sync-upload")),target:"#tutorial-basic-sync-upload",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-sync-check")),target:"#tutorial-basic-sync-check",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-sync-welcome")),target:"#tutorial-basic-sync-welcome",placement:"bottom"},{content:n.a.createElement("span",null,Object(_.a)("tutorial-basic-verify-license")),target:"#tutorial-basic-verify-license",placement:"bottom"}]},s=l;var d,i;t.a=s,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(l,"joyrideSteps","F:\\func\\once\\src\\renderer\\util\\joyrideSteps.js"),d.register(s,"default","F:\\func\\once\\src\\renderer\\util\\joyrideSteps.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);