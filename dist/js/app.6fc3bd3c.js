(function(e){function n(n){for(var r,c,u=n[0],i=n[1],l=n[2],d=0,s=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(s.length)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-18a8ca44":"0e66f473","chunk-36fc1596":"2e7d33aa","chunk-374ddae6":"dfbdb14a","chunk-55f78cbf":"fbb8714d","chunk-712e8b18":"b81c80f2","chunk-bb68baa8":"45544768","chunk-e0e8b1cc":"cb08a42b","chunk-64d7e24b":"45b7975b","chunk-d034e9e4":"78a87951","chunk-fd8e333c":"4e3ea3b4","chunk-4174f0d4":"d604beb5"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;a=function(n){i.onerror=i.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}o[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Header"),t("router-view",{staticClass:"router-view"}),t("Background",{ref:"background"})],1)},a=[],c=(t("d3b7"),t("fb6a"),function(e){var n=this;window.onerror=function(e,n,t,r,o){console.log("冒泡阶段执行错误监听")},window.addEventListener("error",(function(e){console.log("捕获阶段执行错误监听"),n.add({time:Date.now(),type:e.type||"404",content:e.message||"找不到"+e.target.src,url:e.filename||""}),e.preventDefault()}),!0),window.addEventListener("unhandledrejection",(function(e){console.log("promise错误监听"),n.add({time:Date.now(),type:e.type||"404",content:"没有reject处理器",url:""}),e.preventDefault()})),e.config.errorHandler=function(e,t,r){console.log("vue错误监听"),n.add({time:Date.now(),type:"vue error",content:e.message,url:r})},e.config.warnHandler=function(e,t,r){console.log("vue警告监听"),n.add({time:Date.now(),type:"vue warn",content:e,url:r})}});c.prototype.get=function(){return JSON.parse(localStorage.getItem("$logs")||"[]")},c.prototype.add=function(e){var n=this.get();n.unshift(e),n=n.slice(0,100),localStorage.setItem("$logs",JSON.stringify(n))},c.prototype.clear=function(){localStorage.removeItem("$logs")};var u=c,i={components:{Header:function(){return t.e("chunk-18a8ca44").then(t.bind(null,"4d5d"))},Banner:function(){return t.e("chunk-36fc1596").then(t.bind(null,"c577"))},Background:function(){return t.e("chunk-bb68baa8").then(t.bind(null,"eb72"))}},provide:function(){return{changeBackground:this.changeBackground,monitor:new u(r["default"])}},data:function(){return{}},methods:{changeBackground:function(e){this.$refs.background.change(e)}}},l=i,d=t("2dba"),f=t.n(d),s=t("c788"),p=t.n(s),h={attributes:{shinmark:!0},insert:"head",singleton:!1},b=(f()(p.a,h),p.a.locals,t("2877")),g=Object(b["a"])(l,o,a,!1,null,"6fcc120a",null),m=g.exports,v=t("8c4f");r["default"].use(v["a"]);var y=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:function(){return t.e("chunk-712e8b18").then(t.bind(null,"bb51"))}},{path:"/demo",name:"Demo",component:function(){return t.e("chunk-374ddae6").then(t.bind(null,"680c"))}},{path:"/article",name:"Article",component:function(){return t.e("chunk-e0e8b1cc").then(t.bind(null,"3ad6"))}},{path:"/log",name:"Log",component:function(){return t.e("chunk-55f78cbf").then(t.bind(null,"f836"))}}],k=new v["a"]({routes:y}),w=k,x=t("2f62");r["default"].use(x["a"]);var O=new x["a"].Store({state:{},mutations:{},actions:{}}),S=t("77a0"),j=t.n(S),P={ops:{vuescroll:{wheelScrollDuration:200},scrollPanel:{scrollingX:!1},bar:{onlyShowBarOnScroll:!1,background:"#c1c1c1",size:"6px"},rail:{size:"6px"}}};r["default"].use(j.a,P);var B=t("7dce"),D=t.n(B),_={attributes:{shinmark:!0},insert:"head",singleton:!1},E=(f()(D.a,_),D.a.locals,t("4160"),t("ac1f"),t("5319"),t("159b"),{beforeMount:function(){var e=document.querySelectorAll("style[shinmark=true]");e.forEach((function(e,n){e.innerHTML=e.innerHTML.replace(/\$primary-color/gi,"RGBA(31,11,179,1)"),e.setAttribute("shinmark","false")}))}}),H=E;r["default"].mixin(H),r["default"].config.productionTip=!1,new r["default"]({router:w,store:O,render:function(e){return e(m)}}).$mount("#app")},"7dce":function(e,n,t){var r=t("24fb");n=r(!1),n.push([e.i,"*{margin:0;padding:0;box-sizing:border-box}body,html{width:100%;height:100%}ul{list-style:none}button{font-size:14px;border:none;border-radius:4px;line-height:1;outline:none;cursor:pointer}a{text-decoration:none;color:#000}",""]),e.exports=n},c788:function(e,n,t){var r=t("24fb");n=r(!1),n.push([e.i,".v-cloak[data-v-6fcc120a]{display:none}#app[data-v-6fcc120a]{position:relative;display:flex;flex-direction:column;height:100%}#app .banner[data-v-6fcc120a],#app .header[data-v-6fcc120a]{flex-shrink:0}#app .router-view[data-v-6fcc120a]{flex-shrink:0;flex-grow:1}",""]),e.exports=n}});
//# sourceMappingURL=app.6fc3bd3c.js.map