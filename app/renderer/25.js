(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./node_modules/antd/es/list/index.js":function(e,_,t){"use strict";t.d(_,"a",(function(){return g}));var a=t("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),r=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),n=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=t("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=t("./node_modules/@babel/runtime/helpers/esm/typeof.js"),c=t("./node_modules/react/index.js"),i=t("./node_modules/classnames/index.js"),l=t.n(i),d=t("./node_modules/antd/es/spin/index.js"),E=t("./node_modules/antd/es/grid/hooks/useBreakpoint.js"),u=t("./node_modules/antd/es/_util/responsiveObserve.js"),m=t("./node_modules/antd/es/config-provider/context.js"),O=t("./node_modules/antd/es/pagination/index.js"),p=t("./node_modules/antd/es/grid/row.js"),P=t("./node_modules/antd/es/grid/col.js"),M=t("./node_modules/antd/es/_util/reactNode.js"),D=function(e,_){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&_.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)_.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},h=function(e){var _,t=e.prefixCls,a=e.children,o=e.actions,s=e.extra,i=e.className,d=e.colStyle,E=D(e,["prefixCls","children","actions","extra","className","colStyle"]),u=c.useContext(g),O=u.grid,p=u.itemLayout,h=c.useContext(m.b).getPrefixCls,f=h("list",t),b=o&&o.length>0&&c.createElement("ul",{className:"".concat(f,"-item-action"),key:"actions"},o.map((function(e,_){return c.createElement("li",{key:"".concat(f,"-item-action-").concat(_)},e,_!==o.length-1&&c.createElement("em",{className:"".concat(f,"-item-action-split")}))}))),C=O?"div":"li",L=c.createElement(C,Object(r.a)({},E,{className:l()("".concat(f,"-item"),Object(n.a)({},"".concat(f,"-item-no-flex"),!("vertical"===p?s:(c.Children.forEach(a,(function(e){"string"==typeof e&&(_=!0)})),!(_&&c.Children.count(a)>1)))),i)}),"vertical"===p&&s?[c.createElement("div",{className:"".concat(f,"-item-main"),key:"content"},a,b),c.createElement("div",{className:"".concat(f,"-item-extra"),key:"extra"},s)]:[a,b,Object(M.a)(s,{key:"extra"})]);return O?c.createElement(P.a,{flex:1,style:d},L):L};h.Meta=function(e){var _=e.prefixCls,t=e.className,a=e.avatar,n=e.title,o=e.description,s=D(e,["prefixCls","className","avatar","title","description"]),i=(0,c.useContext(m.b).getPrefixCls)("list",_),d=l()("".concat(i,"-item-meta"),t),E=c.createElement("div",{className:"".concat(i,"-item-meta-content")},n&&c.createElement("h4",{className:"".concat(i,"-item-meta-title")},n),o&&c.createElement("div",{className:"".concat(i,"-item-meta-description")},o));return c.createElement("div",Object(r.a)({},s,{className:d}),a&&c.createElement("div",{className:"".concat(i,"-item-meta-avatar")},a),(n||o)&&E)};var f=h,b=function(e,_){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&_.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)_.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},g=c.createContext({});g.Consumer;function C(e){var _,t=e.pagination,i=void 0!==t&&t,P=e.prefixCls,M=e.bordered,D=void 0!==M&&M,h=e.split,f=void 0===h||h,C=e.className,L=e.children,x=e.itemLayout,I=e.loadMore,y=e.grid,A=e.dataSource,T=void 0===A?[]:A,U=e.size,R=e.header,B=e.footer,K=e.loading,W=void 0!==K&&K,j=e.rowKey,v=e.renderItem,k=e.locale,w=b(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),S=i&&"object"===Object(s.a)(i)?i:{},N=c.useState(S.defaultCurrent||1),q=Object(o.a)(N,2),z=q[0],H=q[1],G=c.useState(S.defaultPageSize||10),F=Object(o.a)(G,2),J=F[0],$=F[1],Q=c.useContext(m.b),V=Q.getPrefixCls,X=Q.renderEmpty,Y=Q.direction,Z={},ee=function(e){return function(_,t){H(_),$(t),i&&i[e]&&i[e](_,t)}},_e=ee("onChange"),te=ee("onShowSizeChange"),ae=V("list",P),re=W;"boolean"==typeof re&&(re={spinning:re});var ne=re&&re.spinning,oe="";switch(U){case"large":oe="lg";break;case"small":oe="sm"}var se=l()(ae,(_={},Object(n.a)(_,"".concat(ae,"-vertical"),"vertical"===x),Object(n.a)(_,"".concat(ae,"-").concat(oe),oe),Object(n.a)(_,"".concat(ae,"-split"),f),Object(n.a)(_,"".concat(ae,"-bordered"),D),Object(n.a)(_,"".concat(ae,"-loading"),ne),Object(n.a)(_,"".concat(ae,"-grid"),!!y),Object(n.a)(_,"".concat(ae,"-something-after-last-item"),!!(I||i||B)),Object(n.a)(_,"".concat(ae,"-rtl"),"rtl"===Y),_),C),ce=Object(r.a)(Object(r.a)(Object(r.a)({},{current:1,total:0}),{total:T.length,current:z,pageSize:J}),i||{}),ie=Math.ceil(ce.total/ce.pageSize);ce.current>ie&&(ce.current=ie);var le=i?c.createElement("div",{className:"".concat(ae,"-pagination")},c.createElement(O.a,Object(r.a)({},ce,{onChange:_e,onShowSizeChange:te}))):null,de=Object(a.a)(T);i&&T.length>(ce.current-1)*ce.pageSize&&(de=Object(a.a)(T).splice((ce.current-1)*ce.pageSize,ce.pageSize));var Ee=Object(E.a)(),ue=c.useMemo((function(){for(var e=0;e<u.b.length;e+=1){var _=u.b[e];if(Ee[_])return _}}),[Ee]),me=c.useMemo((function(){if(y){var e=ue&&y[ue]?y[ue]:y.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null==y?void 0:y.column,ue]),Oe=ne&&c.createElement("div",{style:{minHeight:53}});if(de.length>0){var pe=de.map((function(e,_){return function(e,_){return v?((t="function"==typeof j?j(e):"string"==typeof j?e[j]:e.key)||(t="list-item-".concat(_)),Z[_]=t,v(e,_)):null;var t}(e,_)})),Pe=c.Children.map(pe,(function(e,_){return c.createElement("div",{key:Z[_],style:me},e)}));Oe=y?c.createElement(p.a,{gutter:y.gutter},Pe):c.createElement("ul",{className:"".concat(ae,"-items")},pe)}else L||ne||(Oe=function(e,_){return c.createElement("div",{className:"".concat(e,"-empty-text")},k&&k.emptyText||_("List"))}(ae,X));var Me=ce.position||"bottom";return c.createElement(g.Provider,{value:{grid:y,itemLayout:x}},c.createElement("div",Object(r.a)({className:se},w),("top"===Me||"both"===Me)&&le,R&&c.createElement("div",{className:"".concat(ae,"-header")},R),c.createElement(d.a,re,Oe,L),B&&c.createElement("div",{className:"".concat(ae,"-footer")},B),I||("bottom"===Me||"both"===Me)&&le))}C.Item=f;_.b=C},"./src/renderer/routes/Store/index.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/modal/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/row/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/col/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/button/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/list/index.js"),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/avatar/index.js"),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/antd/es/tooltip/index.js"),react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),dva__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/dva/index.js"),dva__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_12__),_shared_language__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/shared/language/index.js"),moment__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__),electron__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("electron"),electron__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_15__),_util_main_mid__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/renderer/util/main.mid.js"),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const{Search:Search}=antd__WEBPACK_IMPORTED_MODULE_2__.a;class Store extends react__WEBPACK_IMPORTED_MODULE_11___default.a.PureComponent{constructor(...e){super(...e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"state",{list:[],categories:[],fetchLoading:!1,openReadme:!1,currSnippetIndex:0,category:"All",search:""}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onJumpUrl",e=>{electron__WEBPACK_IMPORTED_MODULE_15__.shell.openExternal(e)}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onFork",e=>{const _=this;antd__WEBPACK_IMPORTED_MODULE_3__.a.confirm({title:""+Object(_shared_language__WEBPACK_IMPORTED_MODULE_13__.a)("once.basic.tip"),content:""+Object(_shared_language__WEBPACK_IMPORTED_MODULE_13__.a)("store-fork"),okText:""+Object(_shared_language__WEBPACK_IMPORTED_MODULE_13__.a)("once.basic.yes"),okType:"danger",cancelText:""+Object(_shared_language__WEBPACK_IMPORTED_MODULE_13__.a)("once.basic.no"),async onOk(){await _.props.dispatch({type:"snippet/forkSnippet",payload:{gist:e}}),await _.props.dispatch({type:"gist/loadSnippetsFromGist",payload:{since:moment__WEBPACK_IMPORTED_MODULE_14___default()().add(-1,"days").toDate()}})}})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onChangeSearch",e=>{this.setState({search:e.target.value})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this,"onCategory",e=>{this.setState({category:e})})}async componentDidMount(){await this.fetchStore()}toggleReadme(e){this.setState({currSnippetIndex:e,openReadme:!this.state.openReadme})}async fetchStore(){this.setState({fetchLoading:!0}),await _util_main_mid__WEBPACK_IMPORTED_MODULE_16__.snippetsStore.fetchSnippetStore(),this.setState({list:_util_main_mid__WEBPACK_IMPORTED_MODULE_16__.snippetsStore.list,categories:[{name:"All",count:_util_main_mid__WEBPACK_IMPORTED_MODULE_16__.snippetsStore.categories.reduce((e,_)=>e+_.count,0),slug:"all"},..._util_main_mid__WEBPACK_IMPORTED_MODULE_16__.snippetsStore.categories],fetchLoading:!1}),antd__WEBPACK_IMPORTED_MODULE_4__.b.success(Object(_shared_language__WEBPACK_IMPORTED_MODULE_13__.a)("store-update-success"))}render(){return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.a,{className:"store-container"},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.a,{className:"store-header",xs:24},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{className:"store-header-fetch",type:"primary",loading:this.state.fetchLoading,onClick:this.fetchStore.bind(this)},Object(_shared_language__WEBPACK_IMPORTED_MODULE_13__.a)("store-update")),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.a,{className:"store-header-share",type:"link",ghost:!0,onClick:this.onJumpUrl.bind(this,"https://github.com/oncework/codeexpander-snippets")},Object(_shared_language__WEBPACK_IMPORTED_MODULE_13__.a)("store-share"))),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.a,{className:"store-left-search",xs:6},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.a,{xs:24},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Search,{placeholder:"Search...",onChange:this.onChangeSearch,style:{width:"100%"}})),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.a,{xs:24},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{style:{fontSize:20,padding:"12px 0 0 0"},className:"jsx-1132401669"},Object(_shared_language__WEBPACK_IMPORTED_MODULE_13__.a)("store-categories"))),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.a,{className:"store-left-list",xs:24},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.b,{itemLayout:"horizontal",dataSource:this.state.categories,renderItem:e=>react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.b.Item,{onClick:this.onCategory.bind(this,e.name),extra:react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"jsx-1132401669 store-left-list-extra"},e.count)},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"jsx-1132401669"},e.name))}))),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.a,{className:"store-right-list",xs:18},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.b,{itemLayout:"horizontal",dataSource:this.state.list.filter(e=>"All"!==this.state.category?e.category===this.state.category&&(-1!==e.description.indexOf(this.state.search)||-1!==e.name.indexOf(this.state.search)||-1!==e.keywords[0].indexOf(this.state.search)):"All"===this.state.category?-1!==e.description.indexOf(this.state.search)||-1!==e.name.indexOf(this.state.search)||-1!==e.keywords[0].indexOf(this.state.search):void 0),renderItem:(e,_)=>react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.b.Item,{actions:[react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a",{onClick:this.onFork.bind(this,e.gist),className:"jsx-1132401669"},"Fork"),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a",{onClick:this.onJumpUrl.bind(this,e.repository),className:"jsx-1132401669"},"Detail")]},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.b.Item.Meta,{avatar:react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.a,{shape:"square",src:`https://github.com/oncework/codeexpander-snippets/blob/master/apps/${e.slug}/${e.icon64}?raw=true`}),title:react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a",{style:{textTransform:"uppercase"},className:"jsx-1132401669"},e.name),description:react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.a,{placement:"bottom",title:e.description},e.description)}))}))),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,{id:"1132401669"},".store-container{border-top:1px solid #e8e8e8;background:#fff;height:100%;}.store-header{padding:12px 0 0 0;}.store-header-fetch{float:right;right:12px;}.store-header-share{color:rgba(0,0,0,.7) !important;float:right;right:12px;font-size:13px;}.store-left-search{padding:0 12px 12px 12px;}.store-left-list{padding:0 12px 0 12px;height:calc(100vh - 169px);overflow:auto;}.store-left-list-extra{float:right;right:0;position:absolute;font-size:14px;font-weight:600;}.store-right-list{padding:0 12px 12px 12px;height:calc(100vh - 95px);overflow:auto;}.store-right-list .ant-list-item:first-child{padding:0 0 12px 0;}.store-left-list .ant-list-item{cursor:pointer;}"))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=Object(dva__WEBPACK_IMPORTED_MODULE_12__.connect)()(Store);var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Search,"Search","/Users/dxu/my/once/src/renderer/routes/Store/index.jsx"),reactHotLoader.register(Store,"Store","/Users/dxu/my/once/src/renderer/routes/Store/index.jsx"),reactHotLoader.register(_default,"default","/Users/dxu/my/once/src/renderer/routes/Store/index.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);