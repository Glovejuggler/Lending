/*! For license information please see app.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[773],{7029:(e,t,o)=>{"use strict";var n=o(821),r=o(9038),i=o(1966),a={class:"min-h-screen bg-gray-100",style:{transition:"all 0.5s ease"}};var l={class:"logo-details",style:{margin:"6px 14px 0 14px"}},s=["src"],c={class:"logo_name"},d={style:{display:"flex","flex-direction":"column","justify-content":"space-between","flex-grow":"1","max-height":"calc(100% - 60px)"}},u={id:"my-scroll",style:{margin:"6px 14px 0 14px"}},p={class:"nav-list",style:{overflow:"visible"}},h={class:"links_name"},f={class:"tooltip"},m={key:0,class:"profile"},g={class:"profile-details"},v={key:0,src:"images/photo.jpg",alt:"profileImg"},y={key:1,class:"bx bxs-user-rectangle"},x={class:"name_job"},b={class:"name"},w=(0,n.createElementVNode)("div",{class:"job"}," Admin ",-1),k={key:0,class:"bx bx-log-out",id:"log_out"};const L={name:"SidebarMenuAkahon",components:{Link:r.rU},props:{isMenuOpen:{type:Boolean,default:!0},menuTitle:{type:String,default:"Lending"},menuLogo:{type:String,default:""},menuIcon:{type:String,default:"bx-analyse"},isPaddingLeft:{type:Boolean,default:!0},menuOpenedPaddingLeftBody:{type:String,default:"250px"},menuClosedPaddingLeftBody:{type:String,default:"78px"},menuItems:{type:Array,default:function(){return[{link:route("dashboard"),name:"Dashboard",tooltip:"Dashboard",icon:"bx-grid-alt",parent:"Dashboard"},{link:route("lendees.index"),name:"Lendees",tooltip:"Lendees",icon:"bx-user",parent:"Lendees"},{link:route("subsidiaries.index"),name:"Subsidiaries",tooltip:"Subsidiaries",icon:"bx-hive",parent:"Subsidiaries"}]}},profileImg:{type:String,default:o(6966)},profileName:{type:String,default:"Admin"},profileRole:{type:String,default:"Frontend vue developer"},isExitButton:{type:Boolean,default:!0},isLoggedIn:{type:Boolean,default:!0},bgColor:{type:String,default:"#11101d"},secondaryColor:{type:String,default:"#1d1b31"},homeSectionColor:{type:String,default:"#e4e9f7"},logoTitleColor:{type:String,default:"#fff"},iconsColor:{type:String,default:"#fff"},itemsTooltipColor:{type:String,default:"#e4e9f7"},searchInputTextColor:{type:String,default:"#fff"},menuItemsHoverColor:{type:String,default:"#fff"},menuItemsTextColor:{type:String,default:"#fff"},menuFooterTextColor:{type:String,default:"#fff"}},data:function(){return{isOpened:!1}},mounted:function(){var e=window.innerWidth>0?window.innerWidth:screen.width;this.isOpened=e>768?this.isMenuOpen:this.isOpened,window.document.body.style.paddingLeft=this.isOpened?this.menuOpenedPaddingLeftBody:this.menuClosedPaddingLeftBody},computed:{cssVars:function(){return{"--bg-color":this.bgColor,"--secondary-color":this.secondaryColor,"--home-section-color":this.homeSectionColor,"--logo-title-color":this.logoTitleColor,"--icons-color":this.iconsColor,"--items-tooltip-color":this.itemsTooltipColor,"--serach-input-text-color":this.searchInputTextColor,"--menu-items-hover-color":this.menuItemsHoverColor,"--menu-items-text-color":this.menuItemsTextColor,"--menu-footer-text-color":this.menuFooterTextColor}}},watch:{isOpened:function(){window.document.body.style.paddingLeft=this.isOpened&&this.isPaddingLeft?this.menuOpenedPaddingLeftBody:this.menuClosedPaddingLeftBody}}};var E=o(3379),S=o.n(E),C=o(3960),B={insert:"head",singleton:!1};S()(C.Z,B);C.Z.locals;var _=o(3744);const N={components:{SidebarMenuAkahon:(0,_.Z)(L,[["render",function(e,t,o,r,i,a){var L=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:(0,n.normalizeClass)(["sidebar",i.isOpened?"open":""]),style:(0,n.normalizeStyle)(a.cssVars)},[(0,n.createElementVNode)("div",l,[o.menuLogo?((0,n.openBlock)(),(0,n.createElementBlock)("img",{key:0,src:o.menuLogo,alt:"menu-logo",class:"menu-logo icon"},null,8,s)):((0,n.openBlock)(),(0,n.createElementBlock)("i",{key:1,class:(0,n.normalizeClass)(["bx icon",o.menuIcon])},null,2)),(0,n.createElementVNode)("div",c,(0,n.toDisplayString)(o.menuTitle),1),(0,n.createElementVNode)("i",{class:(0,n.normalizeClass)(["bx",i.isOpened?"bx-menu-alt-right":"bx-menu"]),id:"btn",onClick:t[0]||(t[0]=function(e){return i.isOpened=!i.isOpened})},null,2)]),(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("ul",p,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(o.menuItems,(function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("span",{key:o},[(0,n.createElementVNode)("li",null,[(0,n.createVNode)(L,{href:t.link,class:(0,n.normalizeClass)({active:e.$page.component.startsWith(t.parent)})},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("i",{class:(0,n.normalizeClass)(["bx",t.icon||"bx-square-rounded"])},null,2),(0,n.createElementVNode)("span",h,(0,n.toDisplayString)(t.name),1)]})),_:2},1032,["href","class"]),(0,n.createElementVNode)("span",f,(0,n.toDisplayString)(t.tooltip||t.name),1)])])})),128))])]),o.isLoggedIn?((0,n.openBlock)(),(0,n.createElementBlock)("div",m,[(0,n.createElementVNode)("div",g,[o.profileImg?((0,n.openBlock)(),(0,n.createElementBlock)("img",v)):((0,n.openBlock)(),(0,n.createElementBlock)("i",y)),(0,n.createElementVNode)("div",x,[(0,n.createElementVNode)("div",b,(0,n.toDisplayString)(e.$page.props.auth.user.name),1),w])]),(0,n.createVNode)(L,{as:"button",href:e.route("logout"),method:"post"},{default:(0,n.withCtx)((function(){return[o.isExitButton?((0,n.openBlock)(),(0,n.createElementBlock)("i",k)):(0,n.createCommentVNode)("",!0)]})),_:1},8,["href"])])):(0,n.createCommentVNode)("",!0)])],6)}]])}},O=(0,_.Z)(N,[["render",function(e,t,o,r,i,l){var s=(0,n.resolveComponent)("SidebarMenuAkahon");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("div",a,[(0,n.createVNode)(s),(0,n.createElementVNode)("main",null,[(0,n.renderSlot)(e.$slots,"default")])])])}]]);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}var V;function z(){z=function(){return e};var e={},t=Object.prototype,o=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function l(e,t,o){return Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,o){return e[t]=o}}function s(e,t,o,n){var r=t&&t.prototype instanceof u?t:u,i=Object.create(r.prototype),a=new L(n||[]);return i._invoke=function(e,t,o){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return S()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var l=b(a,o);if(l){if(l===d)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===n)throw n="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n="executing";var s=c(e,t,o);if("normal"===s.type){if(n=o.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:o.done}}"throw"===s.type&&(n="completed",o.method="throw",o.arg=s.arg)}}}(e,o,a),i}function c(e,t,o){try{return{type:"normal",arg:e.call(t,o)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function u(){}function p(){}function h(){}var f={};l(f,r,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==t&&o.call(g,r)&&(f=g);var v=h.prototype=u.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(r,i,a,l){var s=c(e[r],e,i);if("throw"!==s.type){var d=s.arg,u=d.value;return u&&"object"==P(u)&&o.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,l)}),(function(e){n("throw",e,a,l)})):t.resolve(u).then((function(e){d.value=e,a(d)}),(function(e){return n("throw",e,a,l)}))}l(s.arg)}var r;this._invoke=function(e,o){function i(){return new t((function(t,r){n(e,o,t,r)}))}return r=r?r.then(i,i):i()}}function b(e,t){var o=e.iterator[t.method];if(void 0===o){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=c(o,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function E(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=h,l(v,"constructor",h),l(h,"constructor",p),p.displayName=l(h,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,a,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(x.prototype),l(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,o,n,r,i){void 0===i&&(i=Promise);var a=new x(s(t,o,n,r),i);return e.isGeneratorFunction(o)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(v),l(v,a,"Generator"),l(v,r,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var o in e)t.push(o);return t.reverse(),function o(){for(;t.length;){var n=t.pop();if(n in e)return o.value=n,o.done=!1,o}return o.done=!0,o}},e.values=E,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(o,n){return a.type="throw",a.arg=e,t.next=o,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.finallyLoc===e)return this.complete(o.completion,o.afterLoc),k(o),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc===e){var n=o.completion;if("throw"===n.type){var r=n.arg;k(o)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:E(e),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=void 0),d}},e}function j(e,t,o,n,r,i,a){try{var l=e[i](a),s=l.value}catch(e){return void o(e)}l.done?t(s):Promise.resolve(s).then(n,r)}o(7333);var I,T,A=(null===(V=window.document.getElementsByTagName("title")[0])||void 0===V?void 0:V.innerText)||"Laravel";(0,r.yP)({title:function(e){return"".concat(e," - ").concat(A)},resolve:(I=z().mark((function e(t){var n;return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(1273)("./".concat(t,".vue"));case 2:return void 0===(n=e.sent.default).layout&&(n.layout=O),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})),T=function(){var e=this,t=arguments;return new Promise((function(o,n){var r=I.apply(e,t);function i(e){j(r,o,n,i,a,"next",e)}function a(e){j(r,o,n,i,a,"throw",e)}i(void 0)}))},function(e){return T.apply(this,arguments)}),setup:function(e){var t=e.el,o=e.app,r=e.props,i=e.plugin;return(0,n.createApp)({render:function(){return(0,n.h)(o,r)}}).use(i).mixin({methods:{route}}).mount(t)}}),i.I.init({delay:250,color:"#4B5563",includeCSS:!0,showSpinner:!0})},7333:(e,t,o)=>{window._=o(6486),window.axios=o(9669),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},3960:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(3645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap);"]),r.push([e.id,"@import url(https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css);"]),r.push([e.id,"*{box-sizing:border-box;font-family:Poppins,sans-serif;margin:0;padding:0}body{transition:all .5s ease}.menu-logo{margin:0 10px;width:30px}.sidebar{background:var(--bg-color);display:flex;flex-direction:column;height:100%;left:0;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content;position:relative;position:fixed;top:0;transition:all .5s ease;width:78px;z-index:1}.sidebar.open{width:250px}.sidebar .logo-details{align-items:center;display:flex;height:60px;position:relative}.sidebar .logo-details .icon{opacity:0;transition:all .5s ease}.sidebar .logo-details .logo_name{color:var(--logo-title-color);font-size:20px;font-weight:600;opacity:0;transition:all .5s ease}.sidebar.open .logo-details .icon,.sidebar.open .logo-details .logo_name{opacity:1}.sidebar .logo-details #btn{cursor:pointer;font-size:22px;font-size:23px;position:absolute;right:0;text-align:center;top:50%;transform:translateY(-50%);transition:all .4s ease;transition:all .5s ease}.sidebar.open .logo-details #btn{text-align:right}.sidebar i{color:var(--icons-color);font-size:28px;height:60px;line-height:60px;min-width:50px;text-align:center}.sidebar .nav-list{margin-top:20px}.sidebar li{list-style:none;margin:8px 0;position:relative}.sidebar li .tooltip{background:var(--items-tooltip-color);border-radius:4px;box-shadow:0 5px 10px rgba(0,0,0,.3);font-size:15px;font-weight:400;left:calc(100% + 15px);opacity:0;padding:6px 12px;pointer-events:none;position:absolute;top:-20px;transition:0s;white-space:nowrap;z-index:3}.sidebar li:hover .tooltip{opacity:1;pointer-events:auto;top:50%;transform:translateY(-50%);transition:all .4s ease}.sidebar.open li .tooltip{display:none}.sidebar input{background:var(--secondary-color);border:none;border-radius:12px;color:var(--serach-input-text-color);font-size:15px;font-weight:400;height:50px;outline:none;transition:all .5s ease;width:100%;width:50px}.sidebar li a{align-items:center;background:var(--bg-color);border-radius:12px;display:flex;height:100%;text-decoration:none;transition:all .4s ease;width:100%}.sidebar li a.active{background:hsla(0,0%,100%,.2)}.sidebar li a:hover{background:var(--menu-items-hover-color)}.sidebar li a .links_name{color:var(--menu-items-text-color);font-size:15px;font-weight:400;opacity:0;pointer-events:none;transition:.4s;white-space:nowrap}.sidebar.open li a .links_name{opacity:1;pointer-events:auto}.sidebar li a:hover .links_name,.sidebar li a:hover i{color:var(--bg-color);transition:all .5s ease}.sidebar li i{border-radius:12px;font-size:18px;height:50px;line-height:50px}.sidebar div.profile{background:var(--secondary-color);height:60px;overflow:hidden;padding:10px 14px;position:relative;transition:all .5s ease;width:78px}.sidebar.open div.profile{width:250px}.sidebar div .profile-details{align-items:center;display:flex;flex-wrap:nowrap}.sidebar div img{border-radius:6px;height:45px;margin-right:10px;-o-object-fit:cover;object-fit:cover;width:45px}.sidebar div.profile .job,.sidebar div.profile .name{color:var(--menu-footer-text-color);font-size:15px;font-weight:400;white-space:nowrap}.sidebar div.profile .job{font-size:12px}.sidebar .profile #log_out{background:var(--secondary-color);border-radius:0;height:60px;line-height:60px;position:absolute;right:0;top:50%;transform:translateY(-50%);transition:all .5s ease;width:100%}.sidebar.open .profile #log_out{background:var(--secondary-color);opacity:0;width:50px}.sidebar.open .profile:hover #log_out{opacity:1}.sidebar.open .profile #log_out:hover{color:red;opacity:1}.sidebar .profile #log_out:hover{color:red}.home-section{background:var(--home-section-color);left:78px;min-height:100vh;position:relative;top:0;transition:all .5s ease;width:calc(100% - 78px);z-index:2}.sidebar.open~.home-section{left:250px;width:calc(100% - 250px)}.home-section .text{color:var(--bg-color);display:inline-block;font-size:25px;font-weight:500;margin:18px}#my-scroll,.my-scroll-active{overflow-y:auto}#my-scroll{height:calc(100% - 60px)}#my-scroll::-webkit-scrollbar{display:none}@media (max-width:420px){.sidebar li .tooltip{display:none}}",""]);const i=r},6966:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});const n="/images/photo.jpg?3c228615607b28e0ae7ecd719f8f39fa"},2584:()=>{},1273:(e,t,o)=>{var n={"./Auth/ConfirmPassword.vue":[6027,27],"./Auth/ForgotPassword.vue":[5721,721],"./Auth/Login.vue":[2088,88],"./Auth/Register.vue":[97,97],"./Auth/ResetPassword.vue":[976,976],"./Auth/VerifyEmail.vue":[7836,836],"./Dashboard.vue":[189,189],"./Home.vue":[7034,34],"./Lendees/Create.vue":[4613,613],"./Lendees/Edit.vue":[8960,960],"./Lendees/Index.vue":[5468,898,468],"./Lendees/Show.vue":[4150,898,462],"./Loan/Create.vue":[9942,942],"./Loan/Edit.vue":[2275,275],"./Payment/Edit.vue":[9484,898,845],"./Subsidiaries/Index.vue":[488,488],"./Subsidiaries/Show.vue":[9004,4],"./Welcome.vue":[2520,520]};function r(e){if(!o.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(o.e)).then((()=>o(r)))}r.keys=()=>Object.keys(n),r.id=1273,e.exports=r},4654:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[170,898],(()=>(t(7029),t(2584))));e.O()}]);