webpackJsonp([5],{0:function(e,t,n){n("j1ja"),e.exports=n("NHnr")},"8eSG":function(e,t){},IcnI:function(e,t,n){"use strict";var a=n("NYxO");n("7+uW").default.use(a.a);var o=new a.a.Store({state:{token:"",id:+new Date},getters:{getToken:function(e){return e.token}},mutations:{login:function(e,t){window.sessionStorage.token=t,e.token=t},logout:function(e){sessionStorage.removeItem("token"),e.token=""}},actions:{}});t.a=o},NHnr:function(e,t,n){"use strict";function a(e){n("8eSG")}Object.defineProperty(t,"__esModule",{value:!0});var o=(n("j1ja"),n("7+uW")),i=n("TXmL"),u={name:"app"},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "),n("BackTop")],1)},l=[],c={render:r,staticRenderFns:l},s=c,m=n("VU/8"),p=a,f=m(u,s,!1,p,null,null),d=f.exports,g=n("YaEn"),h=n("woOf"),w=n.n(h),b=n("hyJX"),v=n.n(b),k=n("jIWC"),y=n.n(k),I={message:{hellow:"Hellow"},index:{about:"关于",home:"首页"},btn:{submit:"submit"},login:{noemptyname:"name can not be empty"}},P=I,T={message:{hellow:"你好"},index:{about:"About",home:"HOME"},btn:{submit:"提交"},login:{noemptyname:"姓名不能为空"}},j=T;o.default.use(i.a),o.default.locale=function(){};var x={en:w()(P,v.a),zh:w()(j,y.a)},E=window.localStorage.getItem("language")||window.navigator.language||navigator.browserLanguage,S=new i.a({locale:E.split("-")[0],messages:x}),A=S,B=n("BTaQ"),W=n.n(B),_=(n("PP5e"),n("IcnI"));o.default.config.productionTip=!1,o.default.use(W.a),o.default.use(i.a),new o.default({el:"#app",router:g.a,i18n:A,store:_.a,template:"<App/>",components:{App:d}})},PP5e:function(e,t){},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),o=n("/ocq"),i=n("BTaQ"),u=n.n(i),r=n("IcnI"),l=[{path:"/",meta:{title:"index"},component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("JXTs")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/about",meta:{title:"about"},component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("TKJ5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/login",meta:{requireAuth:!1,title:"login"},component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("W2Q3")];e.apply(null,t)}.bind(this)).catch(n.oe)}}];a.default.use(o.a);var c=new o.a({routes:l});c.beforeEach(function(e,t,n){u.a.LoadingBar.start(),e.meta.requireAuth?r.a.state.token?(document.title=e.meta.title,n()):n({path:"/login",query:{redirect:e.fullPath}}):(document.title=e.meta.title,n())}),c.afterEach(function(){u.a.LoadingBar.finish(),window.scrollTo(0,0)});t.a=c}},[0]);