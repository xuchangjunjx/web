webpackJsonp([5],{0:function(e,t,n){n("j1ja"),e.exports=n("NHnr")},"8eSG":function(e,t){},IcnI:function(e,t,n){"use strict";var a=n("NYxO");n("7+uW").default.use(a.a);var o=new a.a.Store({state:{token:"",id:+new Date},getters:{getToken:function(e){return e.token}},mutations:{login:function(e,t){window.sessionStorage.token=t,e.token=t},logout:function(e){sessionStorage.removeItem("token"),e.token=""}},actions:{}});t.a=o},NHnr:function(e,t,n){"use strict";function a(e){n("8eSG")}Object.defineProperty(t,"__esModule",{value:!0});var o=(n("j1ja"),n("7+uW")),i=n("TXmL"),u={name:"app"},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "),n("BackTop")],1)},l=[],c={render:r,staticRenderFns:l},s=c,f=n("VU/8"),p=a,d=f(u,s,!1,p,null,null),m=d.exports,h=n("YaEn"),g=n("woOf"),w=n.n(g),v=n("hyJX"),b=n.n(v),k=n("jIWC"),P=n.n(k),T={message:{hellow:"Hellow"},index:{about:"关于",home:"首页"}},I=T,j={message:{hellow:"你好"},index:{about:"About",home:"HOME"}},x=j;o.default.use(i.a),o.default.locale=function(){};var y={en:w()(I,b.a),zh:w()(x,P.a)},E=window.navigator.language||navigator.browserLanguage,A=new i.a({locale:E.split("-")[0],messages:y}),B=A,S=n("BTaQ"),W=n.n(S),_=(n("PP5e"),n("IcnI"));o.default.config.productionTip=!1,o.default.use(W.a),o.default.use(i.a),new o.default({el:"#app",router:h.a,i18n:B,store:_.a,template:"<App/>",components:{App:m}})},PP5e:function(e,t){},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),o=n("/ocq"),i=n("BTaQ"),u=n.n(i),r=n("IcnI"),l=[{path:"/",meta:{title:"index"},component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("JXTs")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/about",meta:{title:"about"},component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("TKJ5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/login",meta:{requireAuth:!1,title:"login"},component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("W2Q3")];e.apply(null,t)}.bind(this)).catch(n.oe)}}];a.default.use(o.a);var c=new o.a({routes:l});c.beforeEach(function(e,t,n){u.a.LoadingBar.start(),e.meta.requireAuth?r.a.state.token?(document.title=e.meta.title,n()):n({path:"/login",query:{redirect:e.fullPath}}):(document.title=e.meta.title,n())}),c.afterEach(function(){u.a.LoadingBar.finish(),window.scrollTo(0,0)});t.a=c}},[0]);