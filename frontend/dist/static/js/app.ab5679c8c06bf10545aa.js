webpackJsonp([1],{"05eA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.beginShareFlow=function(e,t){return new o.a(function(n,a){window.MessengerExtensions.beginShareFlow(function(e){n(e)},function(e,t){a(t)},e,t)})},t.getContext=function(e){return new o.a(function(t,n){window.MessengerExtensions.getContext(e,function(e){t(e)},function(e){n(e)})})},t.requestCloseBrowser=function(){window.MessengerExtensions.requestCloseBrowser()};var a=n("//Fk"),o=n.n(a)},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"app"},o,!1,function(e){n("aTrT")},null,null).exports,i=n("/ocq"),s={homeUrl:"https://messenger-debt-bot.herokuapp.com/",fbAppId:"135139390498529",apiUrl:""},u={LENT:0,BORROWED:1,LENT_PAYOFF:2,BORROWED_PAYOFF:3},d=void 0,c=(d=n("05eA")).beginShareFlow,l=d.getContext,p=d.requestCloseBrowser;function f(e){return"male"===e?"":"a"}function m(e,t,n,a,o){var r,i={attachment:{type:"template",payload:{template_type:"generic",elements:[{title:function(e,t,n,a){switch(n){case u.BORROWED:return e+" pożyczył"+f(t)+" od ciebie "+a+" zł";case u.LENT:return e+" pożyczył"+f(t)+" ci "+a+" zł";case u.BORROWED_PAYOFF:return e+" oddał"+f(t)+" ci "+a+" zł";case u.LENT_PAYOFF:return e+" otrzymał"+f(t)+" od ciebie "+a+" zł"}}(e,t,a,o),subtitle:(r=a,r===u.BORROWED_PAYOFF||r===u.LENT_PAYOFF?"Akceptuj aby zapisać spłatę":"Akceptuj dług aby otrzymać przypomnienie."),image_url:s.homeUrl+"assets/logo.png",default_action:{type:"web_url",url:s.homeUrl+"#/acceptDebt/"+n,messenger_extensions:!0,webview_height_ratio:"compact"},buttons:[{type:"web_url",url:s.homeUrl+"#/acceptDebt/"+n,title:"Akceptuj",messenger_extensions:!0,webview_height_ratio:"compact"}]}]}}};return c(i,"current_thread").then(function(e){return e.is_sent})}var v=n("//Fk"),_=n.n(v),h=n("mvHQ"),y=n.n(h);function w(e){return 200!==e.status?_.a.reject(new Error("HTTP error "+e.status)):e.json()}var g={name:"AddDebt",data:function(){var e=this;return{amount:10,debtTypes:u,isPayoffRadioValue:"0",isBorrowedRadioValue:"0",isPayoff:function(){return"0"!==e.isPayoffRadioValue},isBorrowed:function(){return"0"!==e.isBorrowedRadioValue},add:function(){var t,n,a=(t=e.isPayoff(),n=e.isBorrowed(),t?n?u.BORROWED_PAYOFF:u.LENT_PAYOFF:n?u.BORROWED:u.LENT);l(s.fbAppId).then(function(t){return n=t.psid,o=t.tid,r=a,i=e.amount,fetch(s.apiUrl+"/debts/add",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:y()({psid:n,threadId:o,debtType:r,amount:i})}).then(w);var n,o,r,i}).then(function(t){return m(t.userName,t.userGender,t.debtId,a,e.amount)}).then(function(e){return e?p():null}).catch(alert)}}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"adding-panel"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isPayoffRadioValue,expression:"isPayoffRadioValue"}],attrs:{type:"radio",value:"0",name:"isPayoff"},domProps:{checked:e._q(e.isPayoffRadioValue,"0")},on:{change:function(t){e.isPayoffRadioValue="0"}}}),e._v(" Pożyczka\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.isPayoffRadioValue,expression:"isPayoffRadioValue"}],attrs:{type:"radio",value:"1",name:"isPayoff"},domProps:{checked:e._q(e.isPayoffRadioValue,"1")},on:{change:function(t){e.isPayoffRadioValue="1"}}}),e._v(" Spłata\n      ")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isBorrowedRadioValue,expression:"isBorrowedRadioValue"}],attrs:{type:"radio",value:"0",name:"isBorrowed"},domProps:{checked:e._q(e.isBorrowedRadioValue,"0")},on:{change:function(t){e.isBorrowedRadioValue="0"}}}),e._v(" "),e.isPayoff()?n("span",[e._v(" Ktoś mi oddaje")]):n("span",[e._v(" Pożyczam komuś")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.isBorrowedRadioValue,expression:"isBorrowedRadioValue"}],attrs:{type:"radio",value:"1",name:"isBorrowed"},domProps:{checked:e._q(e.isBorrowedRadioValue,"1")},on:{change:function(t){e.isBorrowedRadioValue="1"}}}),e._v(" "),e.isPayoff()?n("span",[e._v(" Oddaję komuś")]):n("span",[e._v(" Pożyczam od kogoś")])]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{type:"number",id:"amount"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}})]),e._v(" "),n("div",[n("button",{on:{click:function(t){e.add()}}},[e._v("Send")])])])},staticRenderFns:[]};var P={name:"MainPage",components:{"add-debt":n("VU/8")(g,b,!1,function(e){n("xLJC")},"data-v-8f2edcdc",null).exports},data:function(){return{}}},R={render:function(){var e=this.$createElement;return(this._self._c||e)("add-debt")},staticRenderFns:[]},O=n("VU/8")(P,R,!1,null,null,null).exports,B={name:"AddDebt",data:function(){return{message:"Ładowanie...",close:function(){p()}}},created:function(){var e=this;l(s.fbAppId).then(function(t){return n=t.psid,a=e.$route.params.id,fetch(s.apiUrl+"/debts/accept/"+a,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:y()({psid:n})}).then(w);var n,a}).then(function(t){t.debt.user2?e.message="Dług został zapisany":e.message="Dług nie został jeszcze zaakceptoawny"}).catch(alert)}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"adding-panel"},[n("p",[e._v(e._s(e.message))]),e._v(" "),n("button",{on:{click:function(t){e.close()}}},[e._v("Ok")])])},staticRenderFns:[]};var F=n("VU/8")(B,E,!1,function(e){n("Or94")},"data-v-51408bed",null).exports;a.a.use(i.a);var A=new i.a({routes:[{path:"/",name:"HelloWorld",component:O},{path:"/acceptDebt/:id",name:"AcceptDebt",component:F}]});a.a.config.productionTip=!1,function(e,t,n){var a,o=e.getElementsByTagName("script")[0];e.getElementById("Messenger")||((a=e.createElement("script")).id="Messenger",a.src="//connect.facebook.com/en_US/messenger.Extensions.js",o.parentNode.insertBefore(a,o))}(document),window.extAsyncInit=function(){new a.a({el:"#app",router:A,template:"<App/>",components:{App:r}})}},Or94:function(e,t){},aTrT:function(e,t){},xLJC:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ab5679c8c06bf10545aa.js.map