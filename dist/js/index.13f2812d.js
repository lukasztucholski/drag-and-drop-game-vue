(function(e){function t(t){for(var a,o,i=t[0],c=t[1],d=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={index:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2ba5":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticClass:"app"},[r("v-container",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"10"}},[e.gameIsOver?r("v-img",{attrs:{src:e.$store.state.selectedProvider.cardsBackroundUrl}}):[r("PickupArea"),r("ResultArea")],r("v-snackbar",{staticClass:"text-uppercase",attrs:{value:e.gameIsOver,timeout:1e4,color:"success",top:""}},[e._v(" You won with time "+e._s(e.$store.state.scoreArea.scoreTime)+" seconds! Gratulations! Game will restart after 10 seconds ")])],2),r("v-col",{attrs:{cols:"2"}},[r("ScoreArea"),e.gameIsOver?e._e():r("TaskArea",{staticClass:"mt-4"})],1)],1)],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("span",{staticClass:"title d-block mb-5"},[e._v("Pick A Card:")]),r("PreparedCards",{attrs:{area:"pickup"}})],1)},i=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[e.isResultArea?r("v-snackbar",{staticClass:"text-uppercase",attrs:{timeout:5e3,color:"red",top:""},model:{value:e.warning,callback:function(t){e.warning=t},expression:"warning"}},[e._v(" The selected card is not the card you are looking for or you choose wrong slot! ")]):e._e(),e._l(e.cardsCount,(function(t,a){return r("SingleCard",{key:"card_"+e.area+"_"+a,attrs:{id:"card_"+e.area+"_"+a,width:e.selectedProvider.cardsSize.width,height:e.selectedProvider.cardsSize.height,"background-url":e.isResultArea?null:e.selectedProvider.cardsBackroundUrl,"background-position-x":e.selectedProvider.cardsBackgroundPosition[e.isTaskArea?e.searchedCardIndex:a],reversed:!!e.isPickupArea&&!e.cardsFoundStatuses[a],"is-draggable":e.isPickupArea&&!e.cardsFoundStatuses[a],"searched-card-index":e.searchedCardIndex},on:{warning:function(t){e.warning=!0}}})}))],2)},d=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["default-card",{"hidden-card":e.reversed,"not-draggable":!e.isDraggable}],style:e.computedStyles,attrs:{draggable:e.isDraggable},on:{dragstart:e.onDragStart,dragend:e.onDragEnd,dragover:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),e.onDrop(t)}}})},l=[],p=(r("99af"),r("fb6a"),r("a9e3"),{name:"SingleCard",props:{isDraggable:{type:Boolean,default:!0},reversed:{type:Boolean,default:!1},width:{type:[String,Number],default:100},height:{type:[String,Number],default:100},backgroundUrl:{type:String,default:"transparent"},backgroundPositionX:{type:[String,Number],default:0},searchedCardIndex:{type:Number,default:0}},computed:{computedStyles:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),backgroundImage:"url(".concat(this.backgroundUrl,")"),backgroundPositionX:"".concat(this.backgroundPositionX,"px"),order:this.isDraggable?Math.floor(10*Math.random()):0,margin:this.isDraggable?"\n              ".concat(this.getRandomMargin("y"),"px\n              ").concat(this.getRandomMargin("x"),"px\n              ").concat(this.getRandomMargin("y"),"px\n              ").concat(this.getRandomMargin("x"),"px\n            "):0}}},methods:{getRandomMargin:function(e){return"x"===e?Math.floor(10*Math.random())+Math.floor(10*Math.random()):3*(Math.floor(10*Math.random())+Math.floor(10*Math.random()))},onDragStart:function(e){0===this.$store.state.scoreArea.scoreTime&&this.$store.dispatch("scoreArea/startScoreTimer"),e.dataTransfer.setData("text/html",e.target.id),setTimeout((function(){return e.target.classList.add("is-dragged")}),1)},onDragEnd:function(e){e.target.classList.remove("is-dragged")},onDrop:function(e){if(!this.isDraggable){var t=e.dataTransfer.getData("text/html"),r=t.slice(-1),a=e.target,n=a.id.slice(-1);if(r===n&&r==this.searchedCardIndex){var s=document.getElementById(t);s.draggable=!1,a.replaceWith(s),this.$store.commit("resultArea/SET_CARD_STATUS",r)}else this.$emit("warning"),this.$store.commit("scoreArea/INCREMENT_SCORE_TIME",10);this.$store.dispatch("taskArea/randomCardToSearch")}}}}),f=p,h=(r("fac9"),r("2877")),m=Object(h["a"])(f,u,l,!1,null,"6f208ccf",null),g=m.exports,v={name:"PreparedCards",components:{SingleCard:g},props:{area:{type:String,required:!0}},data:function(){return{warning:!1}},computed:{selectedProvider:function(){return this.$store.state.selectedProvider},cardsFoundStatuses:function(){return this.$store.state.resultArea.cardsFoundStatuses},searchedCardIndex:function(){return this.$store.state.taskArea.searchedCardIndex},isPickupArea:function(){return"pickup"===this.area},isResultArea:function(){return"result"===this.area},isTaskArea:function(){return"task"===this.area},cardsCount:function(){return this.isTaskArea?1:this.selectedProvider.cardsCount}}},S=v,b=r("6544"),A=r.n(b),T=r("0fd9"),C=r("2db4"),_=Object(h["a"])(S,c,d,!1,null,null,null),k=_.exports;A()(_,{VRow:T["a"],VSnackbar:C["a"]});var x={name:"PickupArea",components:{PreparedCards:k}},w=x,P=Object(h["a"])(w,o,i,!1,null,null,null),I=P.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("span",{staticClass:"title d-block mb-5"},[e._v("Drag And Drop To Correct Slot:")]),r("PreparedCards",{attrs:{area:"result"}})],1)},E=[],O={name:"ResultArea",components:{PreparedCards:k}},R=O,D=Object(h["a"])(R,y,E,!1,null,null,null),M=D.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("span",{staticClass:"title d-block mb-5"},[e._v(" Score: "+e._s(e.$store.state.scoreArea.scoreTime)+" seconds ")])])},j=[],N={name:"ScoreArea"},F=N,V=Object(h["a"])(F,$,j,!1,null,null,null),U=V.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("span",{staticClass:"title d-block mb-5"},[e._v("Find This Card:")]),r("PreparedCards",{attrs:{area:"task"}})],1)},L=[],G={name:"TaskArea",components:{PreparedCards:k}},X=G,z=Object(h["a"])(X,B,L,!1,null,null,null),H=z.exports,J={name:"App",components:{PickupArea:I,ResultArea:M,ScoreArea:U,TaskArea:H},computed:{gameIsOver:function(){return this.$store.getters["resultArea/gameIsOver"]}},watch:{gameIsOver:function(){this.gameIsOver&&(setTimeout(this.initGame,1e4),this.$store.dispatch("scoreArea/stopScoreTimer"))}},mounted:function(){this.initApp()},methods:{initApp:function(){this.$store.dispatch("resultArea/initCardsStatuses"),this.$store.dispatch("taskArea/randomCardToSearch")},initGame:function(){this.initApp(),this.$store.dispatch("scoreArea/startScoreTimer")}}},q=J,W=(r("5c0b"),r("7496")),Y=r("62ad"),K=r("a523"),Q=r("adda"),Z=Object(h["a"])(q,n,s,!1,null,null,null),ee=Z.exports;A()(Z,{VApp:W["a"],VCol:Y["a"],VContainer:K["a"],VImg:Q["a"],VRow:T["a"],VSnackbar:C["a"]});var te=r("f309");a["a"].use(te["a"]);var re=new te["a"]({}),ae=r("2f62"),ne=-19,se=5,oe={width:160,height:280},ie=[ne,ne-oe.width,ne-2*oe.width,3*-oe.width,4*-oe.width],ce=r("9265"),de={cardsCount:se,cardsSize:oe,cardsBackgroundPosition:ie,cardsBackroundUrl:ce},ue=de,le={namespaced:!0,state:function(){return{searchedCardIndex:null}},mutations:{SET_SEARCHED_CARD_INDEX:function(e,t){e.searchedCardIndex=t}},actions:{randomCardToSearch:function(e){var t=e.commit,r=e.dispatch,a=e.state,n=e.rootState,s=e.rootGetters;if(!s["resultArea/gameIsOver"]){var o=Math.floor(Math.random()*n.selectedProvider.cardsCount);o!==a.searchedCardIndex?n.resultArea.cardsFoundStatuses[o]?r("randomCardToSearch"):t("SET_SEARCHED_CARD_INDEX",o):r("randomCardToSearch")}}},getters:{}},pe=(r("caad"),r("2532"),r("2909")),fe={namespaced:!0,state:function(){return{cardsFoundStatuses:[]}},mutations:{INIT_CARDS_STATUSES:function(e,t){e.cardsFoundStatuses=[],e.cardsFoundStatuses.length=t},SET_CARD_STATUS:function(e,t){e.cardsFoundStatuses[t]=!0,e.cardsFoundStatuses=Object(pe["a"])(e.cardsFoundStatuses)}},actions:{initCardsStatuses:function(e){var t=e.commit,r=e.rootState;t("INIT_CARDS_STATUSES",r.selectedProvider.cardsCount)}},getters:{gameIsOver:function(e){return!e.cardsFoundStatuses.includes(void 0)&&e.cardsFoundStatuses.includes(!0)}}},he={namespaced:!0,state:function(){return{scoreTime:0,interval:void 0}},mutations:{START_INTERVAL:function(e){e.scoreTime=0,e.interval=setInterval((function(){e.scoreTime+=1}),1e3)},STOP_INTERVAL:function(e){clearInterval(e.interval),e.interval=void 0},INCREMENT_SCORE_TIME:function(e,t){e.scoreTime+=t}},actions:{startScoreTimer:function(e){var t=e.commit;t("START_INTERVAL")},stopScoreTimer:function(e){var t=e.commit;t("STOP_INTERVAL")}}};a["a"].use(ae["a"]);var me=new ae["a"].Store({state:{selectedProvider:ue},mutations:{},actions:{},getters:{},modules:{taskArea:le,resultArea:fe,scoreArea:he}});a["a"].config.productionTip=!1,new a["a"]({vuetify:re,store:me,render:function(e){return e(ee)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("7694"),n=r.n(a);n.a},7694:function(e,t,r){},9265:function(e,t,r){e.exports=r.p+"img/zoovu-logo.526ae4fe.png"},fac9:function(e,t,r){"use strict";var a=r("2ba5"),n=r.n(a);n.a}});
//# sourceMappingURL=index.13f2812d.js.map