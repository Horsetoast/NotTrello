(function(e){function t(t){for(var r,o,s=t[0],c=t[1],d=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/NotTrello/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0935":function(e,t,n){"use strict";n("c668")},"0d88":function(e,t,n){"use strict";n("c44f")},"255e":function(e,t,n){},2779:function(e,t,n){},"2fb4":function(e,t,n){},3156:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavigationHeader"),n("router-view")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"header"}},[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("NotTrello™")])],1),n("a",{staticClass:"theme-toggle",attrs:{href:"#"},on:{click:e.toggleTheme}},[n("NightModeIcon",{attrs:{width:"20",height:"20"}})],1)])},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 125"}},e.$listeners),[n("path",{attrs:{d:"M52.32 86.68c-21.5 0-39-17.5-39-39 0-13.4 6.82-25.71 17.99-32.86a41.174 41.174 0 00-3.34 16.2c0 22.61 18.39 41 41 41 5.57 0 11.11-1.15 16.2-3.34a38.906 38.906 0 01-32.85 18z"}}),n("path",{attrs:{d:"M57.38 30.81c.33-.05.61-.25.75-.55l4.17-8.44 4.17 8.44c.15.3.43.5.75.55l9.32 1.35-6.74 6.57c-.24.23-.34.56-.29.89l1.59 9.28-8.33-4.38c-.29-.15-.64-.15-.93 0L53.5 48.9l1.59-9.28a.991.991 0 00-.29-.89l-6.74-6.57 9.32-1.35z"}})])},d=[],u=n("2877"),l={},f=Object(u["a"])(l,c,d,!1,null,null,null),m=f.exports,p={components:{NightModeIcon:m},data:function(){return{theme:"default"}},methods:{toggleTheme:function(){this.theme="default"===this.theme?"dark":"default",document.documentElement.setAttribute("data-theme",this.theme)}}},b=p,h=(n("0d88"),Object(u["a"])(b,o,s,!1,null,"c6765898",null)),v=h.exports,g={components:{NavigationHeader:v}},w=g,y=(n("5c0b"),Object(u["a"])(w,a,i,!1,null,null,null)),_=y.exports,N=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"boards-page"}},[n("h2",{staticClass:"page-title"},[e._v("Boards")]),e.loading?n("div",{key:"loading",staticClass:"boards-wrapper"},e._l(3,(function(e){return n("BoardCard",{key:e,attrs:{loading:""}})})),1):e.boards?n("div",{key:"loaded",staticClass:"boards-wrapper"},[e._l(e.boards,(function(e){return n("BoardCard",{key:e.id,attrs:{board:e}})})),n("BoardCard",{on:{createBoard:e.createBoard}})],2):e._e()])},O=[],j=n("1da1"),x=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board-card",class:{blank:!e.board,valid:e.isValid,"loading pulsating":e.loading}},[!e.loading&&e.board?n("router-link",{attrs:{to:"/board/"+e.board.id,tag:"div"}},[n("p",[e._v(e._s(e.board.name))])]):n("div",[e.board||e.loading?e._e():[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newBoardName,expression:"newBoardName"}],ref:"input",attrs:{type:"text",placeholder:"..."},domProps:{value:e.newBoardName},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createBoard(t)},blur:e.clearName,input:function(t){t.target.composing||(e.newBoardName=t.target.value)}}}),e.isValid?n("span",{staticClass:"add-icon",on:{click:e.createBoard}},[e._v("+")]):e._e()]],2)],1)}),B=[],C={props:{board:{type:Object,default:null},loading:{type:Boolean,default:!1}},data:function(){return{newBoardName:""}},computed:{isValid:function(){return this.newBoardName.length}},methods:{createBoard:function(){this.isValid&&(this.$emit("createBoard",this.newBoardName),this.newBoardName="",this.$refs["input"].blur())},clearName:function(){var e=this;setTimeout((function(){e.newBoardName=""}),100)}}},I=C,L=(n("0935"),Object(u["a"])(I,x,B,!1,null,"ca11f638",null)),$=L.exports,P=(n("d3b7"),n("7db0"),n("d81d"),n("6afe")),E=n("11c1"),T=n("2ef0"),V=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){return e()}),1e3)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:if(null==t){e.next=5;break}return n=P.boards.find((function(e){return e.id===t})),e.abrupt("return",Object(T["cloneDeep"])(n));case 5:return e.abrupt("return",Object(T["cloneDeep"])(P.boards));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t={name:e,id:Object(E["v4"])(),lists:[]};return P.boards.push(t),Object(T["cloneDeep"])(t)},R=function(e,t){var n={name:t,items:[],id:Object(E["v4"])()};return P.boards=P.boards.map((function(t){return t.id===e&&(t.lists||(t.lists=[]),t.lists.push(n)),t})),Object(T["cloneDeep"])(n)},S=function(e,t,n){var r={name:n,id:Object(E["v4"])()};return P.boards=P.boards.map((function(n){return n.id===e&&(n.lists=(n.lists||[]).map((function(e){return e.id===t&&(e.items||(e.items=[]),e.items.push(r)),e}))),n})),Object(T["cloneDeep"])(r)},A={components:{BoardCard:$},data:function(){return{loading:!0,boards:null}},created:function(){this.loadBoards()},methods:{createBoard:function(e){var t=M(e);this.boards.push(t)},loadBoards:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,D();case 3:e.boards=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()}}},z=A,J=(n("7c7c"),Object(u["a"])(z,k,O,!1,null,"50fb957a",null)),F=J.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"board-detail-page"}},[n("div",{staticClass:"board-detail-header"},[e.loading?n("span",{staticClass:"page-title loading pulsating"}):e.board?n("h2",{staticClass:"page-title"},[e._v(e._s(e.board.name))]):e._e()]),e.loading?n("div",{key:"loading",staticClass:"lists-wrapper"},e._l(3,(function(e){return n("ListCard",{key:e,attrs:{loading:""}})})),1):e.board?n("div",{key:"loaded",staticClass:"lists-wrapper"},[e._l(e.board.lists,(function(t){return n("ListCard",{key:t.id,attrs:{list:t},on:{createItem:e.createItem}})})),n("ListCard",{on:{createList:e.createList}})],2):e._e()])},q=[],U=n("5530"),G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-card",class:{blank:!e.list,valid:e.isValid,"loading pulsating":e.loading}},[!e.loading&&e.list?n("div",[n("p",[e._v(e._s(e.list.name))]),n("div",{staticClass:"list-items"},[e._l(e.list.items,(function(e){return n("ListItem",{key:e.id,attrs:{item:e}})})),n("ListItem",{on:{createItem:e.createItem}})],2)]):n("div",[e.list||e.loading?e._e():[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newListName,expression:"newListName"}],ref:"input",attrs:{type:"text",placeholder:"..."},domProps:{value:e.newListName},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createList(t)},blur:e.clearName,input:function(t){t.target.composing||(e.newListName=t.target.value)}}}),e.isValid?n("span",{staticClass:"add-icon",on:{click:e.createList}},[e._v("+")]):e._e()]],2)])},K=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item"},[e.item?n("p",[e._v(" "+e._s(e.item.name)+" ")]):n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItemName,expression:"newItemName"}],ref:"input",attrs:{type:"text",placeholder:"..."},domProps:{value:e.newItemName},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createItem(t)},blur:e.clearName,input:function(t){t.target.composing||(e.newItemName=t.target.value)}}})])},W=[],X={props:{item:{type:Object,default:null}},data:function(){return{newItemName:""}},computed:{isValid:function(){return this.newItemName.length}},methods:{createItem:function(){this.isValid&&(this.$emit("createItem",this.newItemName),this.newItemName="",this.$refs["input"].blur())},clearName:function(){this.newItemName=""}}},Y=X,Z=(n("6fbd"),Object(u["a"])(Y,Q,W,!1,null,"7c7e77f2",null)),ee=Z.exports,te={components:{ListItem:ee},props:{list:{type:Object,default:null},loading:{type:Boolean,default:!1}},data:function(){return{newListName:""}},computed:{isValid:function(){return this.newListName.length}},methods:{createList:function(){this.isValid&&(this.$emit("createList",this.newListName),this.newListName="",this.$refs["input"].blur())},createItem:function(e){var t=this.list.id;this.$emit("createItem",t,e)},clearName:function(){var e=this;setTimeout((function(){e.newListName=""}),100)}}},ne=te,re=(n("e58d"),Object(u["a"])(ne,G,K,!1,null,"6d9a8a75",null)),ae=re.exports,ie={components:{ListCard:ae},data:function(){return{loading:!0,board:null}},watch:{"$route.params.id":{immediate:!0,handler:function(e,t){e&&e!==t&&this.loadBoard(e)}}},methods:{loadBoard:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,D(e);case 3:t.board=n.sent,t.loading=!1;case 5:case"end":return n.stop()}}),n)})))()},createList:function(e){var t=this.board.id,n=R(t,e);this.board.lists||(this.board=Object(U["a"])(Object(U["a"])({},this.board),{},{lists:[]})),this.board.lists.push(n)},createItem:function(e,t){var n=this.board.id,r=S(n,e,t);this.board.lists=this.board.lists.map((function(t){return t.id===e&&(t.items||(t.items=[]),t.items.push(r)),t}))}}},oe=ie,se=(n("fea3"),Object(u["a"])(oe,H,q,!1,null,"5e2d8767",null)),ce=se.exports;r["a"].use(N["a"]);var de=[{path:"/",name:"Boards",component:F},{path:"/board/:id",name:"BoardDetail",component:ce}],ue=new N["a"]({mode:"hash",base:"/NotTrello/",routes:de}),le=ue,fe=(n("2fb4"),n("9483"));Object(fe["a"])("".concat("/NotTrello/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:le,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6afe":function(e){e.exports=JSON.parse('{"boards":[{"id":"698d5199-cda3-4438-ad5d-12eb19f47e56","name":"Prvý Board","lists":[{"id":"03ceea12-ec86-4159-8010-a3199c2b6a32","name":"TODO","items":[{"id":"b513a748-499d-4751-87c6-b67825b1e1cd","name":"Absolvovať pohovor"},{"id":"ffca0f14-b05d-49c2-81a2-ec1e6ee5dad9","name":"Podpísať zmluvu"},{"id":"f82b26a2-110a-450f-8c96-a48d0163f0e6","name":"Nastúpiť do práce"}]},{"id":"ff2c7f71-a0a0-4e07-b9f9-b527786f21a2","name":"In Progress","items":[{"id":"d75e9e02-cb75-4879-930f-5adef0748ac0","name":"Urobiť skúšobný príklad"}]},{"id":"722fb2dc-612b-45d9-839b-3f2def44882e","name":"Done","items":[]}]},{"id":"fce76b89-daeb-41f5-838b-d427cf01c3f9","name":"Druhý board"}]}')},"6fbd":function(e,t,n){"use strict";n("3156")},"7c7c":function(e,t,n){"use strict";n("2779")},9107:function(e,t,n){},"9c0c":function(e,t,n){},c44f:function(e,t,n){},c668:function(e,t,n){},e58d:function(e,t,n){"use strict";n("9107")},fea3:function(e,t,n){"use strict";n("255e")}});
//# sourceMappingURL=app.7574c71a.js.map