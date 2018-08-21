var ngageDisplayMode=0;
var WebsiteID='111-128-39-108-35-240-75-140';
var ngageLang='en';
var main_url = "\x6d\x65\x73\x73\x65\x6e\x67\x65\x72\x2e\x6e\x67\x61\x67\x65\x69\x63\x73\x2e\x63\x6f\x6d";
var main_chat_url = "\x73\x65\x63\x75\x72\x65\x2e\x6e\x67\x61\x67\x65\x6c\x69\x76\x65\x2e\x63\x6f\x6d\x2f\x63\x68\x61\x74";
var ngage_whitelabel = false;
var ngageUseIntegratedChat = false;
var ngage_date_obj = {"day":29,"weekday":2,"month":5,"hourminutes":1552,"dst":true};
var has_general_image = false;
var ngage_debug = false;
var ngage_chat_window_height = 600;
var ngage_chat_window_width = 475;

var jsExtender=jsExtender||(function(){var d=Object.prototype.hasOwnProperty,b=Object.getOwnPropertyNames,c=Object.getPrototypeOf,l=Object.keys,m=Object.prototype.constructor;if(typeof(b)==="undefined"||b===null){b=function(p){var n=[];for(var o in p){if(d.call(p,o)){n.push(o)}}return n}}function g(n){return m===n}function i(n){return typeof(n)==="undefined"}function j(n){return i(n)||n==null}function f(n){return typeof(n)==="object"}function h(n){return typeof(n)==="string"}function e(n){return typeof(n)==="function"}function a(s,q){if(!f(s)){throw"source must be an instance of an object."}if(!e(q)){throw"propCallback must be a function."}var r=b(s);for(var n=0;n<r.length;n++){var o=r[n];if(!q(o,s[o])){break}}}var k=function(v){function x(D){function E(){}E.prototype=D;return new E()}function A(D){return(f(D))?D:D.prototype}function w(D,E){a(E,function(F,G){if(F==="constructor"){return true}D[F]=G;return true})}function C(D,E){return function(){var F=this.base;this.base=D;var G=E.apply(this,arguments);this.base=F;return G}}function y(G,D){var F=null,E=D,H;while(F===null&&E){if(e(E)){H=E.prototype;if(d.call(H,G)){F=H[G]}}else{if(f(E)){H=c(E);if(d.call(E,G)){F=E[G]}else{if(d.call(H,G)){F=H[G]}}}}E=E.parent}return{found:F,currentClass:E}}function t(G,D,K){var I=D,L=null,F=[];if(K&&d.call(K,G)&&e(K[G])){F.push(K[G])}var J=y(G,I),E=J.found;while(E){if(e(E)){F.unshift(E)}J=y(G,J.currentClass);E=J.found}for(var H=0;H<F.length;H++){L=C(L,F[H])}return L}function p(E,D,F){w(E.prototype,D);E.parent=F;E.prototype.parent=F;E.extend=function(H){var G=A(H);var I=z(G,E);I.prototype=x(E.prototype);I.constructor=I;I.prototype.constructor=I;p(I,G,E.prototype);return I};q(E)}function q(D){o(D);n(D);r(D)}function o(D){D.create=function(){var E=x(D.prototype);E=(D.apply(E,arguments)||E);return E}}function r(D){if(D.prototype.wrapAllFunctions){return}D.prototype.wrapAllFunctions=function(){var F=c(this),E={},G=this;while(F&&!g(F.constructor)){a(F,function(H,I){if(H==="constructor"||!e(I)){return true}if(!E[H]){E[H]=0}E[H]+=1;return true});F=c(F)}a(E,function(H){var I=/^appendFunction(s){0,1}$/gi;if(I.test(H)){return true}G[H]=t(H,c(G));return true})}}function n(D){var E=D.prototype;E.appendFunction=function(G,F){if(!h(G)){throw"funcName must be a string."}if(!e(F)){throw"fn must be a function."}if(E&&F&&!d.call(E,G)){E[G]=F}};E.appendFunctions=function(F){a(F,function(G,H){if(!e(H)){return true}E.appendFunction(G,H);return true})}}function z(G,E){function H(){}var F=H,D=H;if(j(G)||!e(G.constructor)){return H}if(!g(G.constructor)){F=G.constructor}if(!j(E)&&e(E.constructor)){D=E.constructor}return B(G,F,E,D)}function B(F,G,D,E){return function(){E.apply(this,arguments);G.apply(this,arguments);var I=c(this),J=c(I).constructor,H=!j(D);if((H&&J!==E)||(!H&&J!==G)){return}this.wrapAllFunctions()}}if(!v){v={}}var s=A(v),u=z(s);u.prototype=x(s);u.constructor=u;u.prototype.constructor=u;p(u,s);return u};k.hasOwnProperty=d;k.getOwnPropertyNames=b;k.keys=l;k.isObjectConstructor=g;k.isUndefined=i;k.isUndefinedOrNull=j;k.isObject=f;k.isFunction=e;k.forEachProperty=a;k.getPrototypeOf=c;k.isString=h;return k})();var ngage=ngage||(function(){var b={desktop:1,mobile:2,tablet:3};function c(){var k=navigator.userAgent.toLowerCase();var j=b.desktop;if(k.match(/android.* chrome\/[.0-9]* mobile|android.* [.0-9]*; mobile|blackberry|bb10|iemobile|opera mini|iphone|ipod/i)){j=b.mobile}else{if(k.match(/android.* chrome\/[.0-9]* (?!mobile)|android.* [.0-9]*; (?!mobile)|ipad|tablet/i)){j=b.tablet}}return j}function g(){var j=c();return j===b.mobile}function h(){var j=c();return j===b.tablet}function f(){var j=c();return j===b.desktop}function e(){if(window.XMLHttpRequest){return new XMLHttpRequest()}else{if(window.ActiveXObject){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(j){try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(j){try{return ActiveXObject("Microsoft.XMLHTTP")}catch(j){return null}}}}else{return null}}}function i(l,m){var j=document.getElementsByTagName("head")[0];if(!j){return null}var k=document.createElement("script");k.type="text/javascript";k.src=l;if(typeof m==="function"){k.onreadystatechange=function(){if(k.readyState==="complete"||k.readyState==="loaded"){k.onload=null;k.onreadystatechange=null;m()}};k.onload=function(){k.onload=null;k.onreadystatechange=null;m()}}j.appendChild(k);return k}function a(k){if(typeof(k)==="string"){k=document.getElementById(k)}var j="Copyright (c) 2016 MH Sub I, LLC. All Rights Reserved";if(typeof(k)==="undefined"||k==null){return j}k.innerHTML=j;return j}function d(j,m){if(!m){m=window.location.href}j=j.replace(/[\[\]]/g,"\\$&");var k=new RegExp("[?&]"+j+"(=([^&#]*)|&|#|$)"),l=k.exec(m);if(!l){return null}if(!l[2]){return""}return decodeURIComponent(l[2].replace(/\+/g," "))}return{isMobile:g,isTablet:h,isDesktop:f,getXmlHttpObject:e,loadScript:i,copyright:a,deviceTypes:b,getDeviceType:c,getParameterByName:d}})();ngage.server=ngage.server||{serverApiUrl:"",serverApiSecureUrl:"",debug:false,getServerApiUrl:function(){if(ngage.server.debug){return(document.location.protocol==="https:")?ngage.server.serverApiSecureUrl:ngage.server.serverApiUrl}return ngage.server.serverApiSecureUrl}};ngage.server.visitor=ngage.server.visitor||(function(){var h=null,o=null,k=null,d=false,i=null,b=null,f=null,g=false,j=null,c=0,l=60000,n=300000,m=1000,e=5,a=[];function q(K){var M="",L=false;jsExtender.forEachProperty(K,function(N,P){var O=(!L)?"?":"&";P=P!==null?P:"";M+=O+N+"="+P;L=true;return true});return M}function x(K){return typeof(K)==="undefined"}function y(K){return x(K)||K===null}function v(){return o}function t(){return h}function w(){ngage.cookies.readCookies();var K=ngage.cookies.getCookie("ngageId");if(typeof(Storage)==="undefined"){return K}var M=null;try{M=localStorage.getItem("ngageId")}catch(L){}if(K===null&&M===null){return null}if(y(K)&&!y(M)){ngage.cookies.setCookie("ngageId",M,365*5);K=M}if(!y(K)&&y(M)){try{localStorage.setItem("ngageId",K)}catch(L){}M=K}return(M===K)?M:null}function D(L){o=L;ngage.cookies.setCookie("ngageId",o,365*5);if(typeof(Storage)==="undefined"){return}try{localStorage.setItem("ngageId",o)}catch(K){}}function H(){if(d){b=encodeURIComponent(document.referrer.toString());f=b}else{b=encodeURIComponent(document.location.toString());f=encodeURIComponent(document.referrer.toString())}}function B(N){N=N||{};if(y(N.url)){return}var M=(!y(N.method))?N.method:"GET",K=(!y(N.data))?N.data:"",P=(!y(N.success))?N.success:function(){},L=(!y(N.fail))?N.fail:function(){},R=(!y(N.urlParams))?N.urlParams:{},Q=N.url+q(R);if(typeof(XDomainRequest)==="undefined"||XDomainRequest===null){if(!jsExtender.isUndefinedOrNull(L)){L()}return}var S=new XDomainRequest();S.onerror=function(){if(!jsExtender.isUndefinedOrNull(L)){L(S.responseText)}};S.onload=function(){if(!jsExtender.isUndefinedOrNull(P)){P(S.responseText)}};S.ontimeout=function(){if(!jsExtender.isUndefinedOrNull(L)){L()}};S.onprogress=function(){};var O=ngage.server.serverApiUrl;if(document.location.protocol==="https:"){O=ngage.server.getServerApiUrl()}S.open(M,O+Q);S.send(JSON.stringify(K))}function A(S){S=S||{};if(y(S.url)){return}var Q=(!y(S.method))?S.method:"GET",M=(!y(S.data))?S.data:"",L=(!y(S.contentType))?S.contentType:"text/plain",K=(!y(S.async))?S.async:true,T=(!y(S.success))?S.success:function(){},O=(!y(S.fail))?S.fail:function(){},V=(!y(S.urlParams))?S.urlParams:{},U=S.url+q(V);if(typeof(XDomainRequest)!=="undefined"&&XDomainRequest!==null){B(S);return}try{var R=ngage.getXmlHttpObject();R.onreadystatechange=function(){if(R.readyState!==4){return}if(R.status!==200&&R.status!==304){if(!jsExtender.isUndefinedOrNull(O)){O(R.responseText)}return}if(!jsExtender.isUndefinedOrNull(T)){T(R.responseText)}};var P=U.length;if(P>0&&U[0]!=="/"){U="/"+U}R.open(Q,ngage.server.getServerApiUrl()+U,K);R.setRequestHeader("Content-Type",L);R.send(JSON.stringify(M))}catch(N){if(!jsExtender.isUndefinedOrNull(O)){O(N)}}}function G(M,K){var L={url:"/Tracker/Visitor/Update",urlParams:{siteId:h,visitorId:o,fromChat:d,currentUrl:b,referringUrl:f},async:true,success:M,fail:K};A(L)}function p(){h=null;g=false;if(j!==null){clearTimeout(j);j=null}ngage.events.dom.unbind(window,"unload",k,true)}function r(M,L){var K={siteId:h,visitorId:o};if(navigator&&navigator.sendBeacon){navigator.sendBeacon(ngage.server.getServerApiUrl()+"/Tracker/Visitor/Exit"+q(K));if(!jsExtender.isUndefinedOrNull(M)){M()}}else{A({url:"/Tracker/Visitor/Exit",urlParams:K,async:false,success:M,fail:function(){A({url:"/Tracker/Visitor/Exit",urlParams:K,async:true,success:M,fail:L})}})}}function F(){if(h===null){return}r(function(){p()},function(){p()})}function I(K){if(!g){return}var L=K;if(i!==null){L=m}j=setTimeout(function(){if(!g){return}G(function(){if(i!==null){i();i=null}c=0;I(K)},function(){c++;if(c>=e){F();return}setTimeout(function(){I(K)},l)})},L)}function J(M,K){var L={siteId:h,visitorId:o};A({url:"/Tracker/Visitor/IsValidTrackingGuid",urlParams:L,async:true,success:function(N){c=0;M(JSON.parse(N))},fail:function(){c++;if(c>=e){F();K();return}setTimeout(function(){J(M,K)},l)}})}function z(M,O,N,K){var L={siteId:M,visitorId:O};A({url:"/Tracker/Visitor/IsValidTrackingGuid",urlParams:L,async:true,success:function(P){N(JSON.parse(P))},fail:K})}function u(L,K){A({url:"/Tracker/Visitor/GetTrackingGuid",async:true,success:function(M){c=0;D(M);L()},fail:function(){c++;if(c>=e){F();return}setTimeout(function(){u(L,K)},l)}})}function C(K){a.push(K)}function s(){while(a.length>0){var K=a.shift();if(typeof(K)==="function"){K()}}}function E(L,M,K){if(h!==null&&h!==L){F()}if(h!==null){return}if(!jsExtender.isUndefinedOrNull(K)){d=K}H();g=true;i=M||function(){};h=L;o=w();ngage.events.dom.bind(window,"unload",k,true);J(function(N){if(N.IsValid){s();I(n);return}u(function(){s();I(n)},function(){})},function(){})}k=function(){F()};return{start:E,stop:F,getVisitorId:v,isValidTrackingGuid:z,getSiteId:t,onConnected:C}})();ngage.server.tag=ngage.server.tag||(function(){function a(g){var i="",h=false;jsExtender.forEachProperty(g,function(j,l){var k=(!h)?"?":"&";l=l!=null?l:"";i+=k+j+"="+l;h=true;return true});return i}function b(g){return typeof(g)==="undefined"}function c(g){return b(g)||g==null}function e(j){j=j||{};if(c(j.url)){return}var i=(!c(j.method))?j.method:"GET",g=(!c(j.data))?j.data:"",l=(!c(j.success))?j.success:function(){},h=(!c(j.fail))?j.fail:function(){},n=(!c(j.urlParams))?j.urlParams:{},m=j.url+a(n);if(typeof(XDomainRequest)==="undefined"||XDomainRequest==null){if(!jsExtender.isUndefinedOrNull(h)){h()}return}var o=new XDomainRequest();o.onerror=function(){if(!jsExtender.isUndefinedOrNull(h)){h(o.responseText)}};o.onload=function(){if(!jsExtender.isUndefinedOrNull(l)){l(o.responseText)}};o.ontimeout=function(){if(!jsExtender.isUndefinedOrNull(h)){h()}};o.onprogress=function(){};var k=ngage.server.serverApiUrl;if(document.location.protocol==="https:"){k=ngage.server.getServerApiUrl()}o.open(i,k+m);o.send(JSON.stringify(g))}function d(o){o=o||{};if(c(o.url)){return}var m=(!c(o.method))?o.method:"GET",i=(!c(o.data))?o.data:"",h=(!c(o.contentType))?o.contentType:"text/plain",g=(!c(o.async))?o.async:true,p=(!c(o.success))?o.success:function(){},k=(!c(o.fail))?o.fail:function(){},r=(!c(o.urlParams))?o.urlParams:{},q=o.url+a(r);if(typeof(XDomainRequest)!=="undefined"&&XDomainRequest!=null){e(o);return}try{var n=ngage.getXmlHttpObject();n.onreadystatechange=function(){if(n.readyState!==4){return}if(n.status!==200&&n.status!==304){if(!jsExtender.isUndefinedOrNull(k)){k(n.responseText)}return}if(!jsExtender.isUndefinedOrNull(p)){p(n.responseText)}};var l=q.length;if(l>0&&q[0]!=="/"){q="/"+q}n.open(m,ngage.server.getServerApiUrl()+q,g);n.setRequestHeader("Content-Type",h);n.send(JSON.stringify(i))}catch(j){if(!jsExtender.isUndefinedOrNull(k)){k(j)}}}function f(h,l,k,g){var m=ngage.server.visitor.getVisitorId();var j=ngage.server.visitor.getSiteId();if(m==null){return}var i={url:"/Tracker/Tag/Visitor",urlParams:{name:h,value:l,encryptedSiteId:j,visitorId:m,tagCreationType:1,tagRelationType:4},async:true,success:k,fail:g};d(i)}return{visitor:f}})();ngage.events=ngage.events||(function(){function eventListener(eventType,fn){fn=wrapEventStr(fn);var fireEvent=function(){if(typeof(fn)==="function"){try{fn.apply(this,arguments)}catch(e){}}};var matchesType=function(type){return eventType===type};var matchesFunction=function(func){return func===fn};function wrapEventStr(str){if(typeof(str)==="function"){return str}if(typeof(str)!="string"){return function(){}}var wrappedCallback=function(){eval(str)};return wrappedCallback}return{fire:fireEvent,matchesType:matchesType,eventType:function(){return eventType},matchesFunction:matchesFunction}}var eventTypes={chat:{initializationComplete:-1,conversationStarted:0,conversationEnded:1,visitorJoined:2,visitorLeft:3,operatorJoined:4,operatorTyping:7,messageReceived:8,windowResized:10,orientationChanged:11,inputGainedFocus:12,inputLostFocus:13,connectionStatusChanged:14,sendFailed:15},chatClient:{visitorEmailReceived:19,visitorPhoneReceived:20,visitorPhoneEmailReceived:21,visitorMessageReceived:22,visitorFirstMessageReceived:23},tracker:{chatButtonClick:16,yesButtonClick:17,noButtonClick:18}};var eventListeners=[];function fire(eventType){for(var i=0,count=eventListeners.length;i<count;i++){var listener=eventListeners[i];if(listener.matchesType(eventType)){listener.fire.apply(this,Array.prototype.slice.call(arguments,1))}}}function bind(eventType,fn){eventListeners.push(new eventListener(eventType,fn))}function unbind(fn){var i=eventListeners.length;while(i--){if(eventListeners[i].matchesFunction(fn)){eventListeners.splice(i,1)}}}return{bind:bind,unbind:unbind,fire:fire,eventTypes:eventTypes}});ngage.events.dom=ngage.events.dom||(function(){function a(c,d,e,f){if(c.addEventListener){c.addEventListener(d,e,f)}else{c.attachEvent("on"+d,e)}}function b(c,d,e,f){if(c.removeEventListener){c.removeEventListener(d,e,f)}else{c.detachEvent(d,e)}}return{bind:a,unbind:b}})();ngage.errorReporting=ngage.errorReporting||(function(){var c="Tracker";function k(l){c=l}function e(){return c}function f(l){if(!l||typeof(l)!=="function"){return}if(window.addEventListener){window.addEventListener("error",l,false)}else{window.attachEvent("onerror",l)}}function d(m,n,o){var l=h(m);if(!l.filename){if(m.fileName){l.filename=m.fileName}else{if(m.filename){l.filename=m.filename}else{if(n){l.filename=n}}}}if(!l.lineNum){if(m.lineNumber){l.lineNum=m.lineNumber}if(m.lineno){l.lineNum=m.lineno}else{if(o){l.lineNum=o}}}return l}function g(o,m,n){if(typeof _gaq==="undefined"||typeof _gaq.push==="undefined"){return}if(!o){return}if(!m){m="Unknown Filename"}if(!n){n="0"}var l="["+m+" ("+n+")] "+o;_gaq.push(["ngage._trackEvent",c,"Error",l])}function b(l){return(function(){try{l.apply(this,arguments)}catch(n){var m=d(n);g(n.message,m.filename,m.lineNum)}})}function h(l){var q={message:null,filename:null,lineNum:null};if(typeof(l)==="string"){q.message=l;return q}else{if(l.message){q.message=l.message}}if(!l.stack){return q}var n=/([^(\s+|@)]*):(\d+):(\d+)/i;var p=l.stack.split("\n");for(var m=0;m<p.length;m++){var o=n.exec(p[m]);if(o!=null){q.filename=o[1];q.lineNum=o[2];break}}return q}function j(l,n){var m=b(l);return setTimeout(m,n)}function i(l,n){var m=b(l);return setTimeout(m,n)}function a(l,m,o,p){var n=b(o);ngage.events.dom.bind(l,m,n,p);return n}return{getErrorDetails:d,createErrorFunc:b,globalReporting:f,setTimeout:j,setInterval:i,addEventListener:a,pushErrorReport:g,setEventName:k,getEventName:e}})();ngage.cookies=ngage.cookies||(function(){var b=null;function a(h,j,g,i){if(typeof(i)==="undefined"||i==null){i="/"}this.name=h;this.value=j;this.path=i;this.setExpires(g)}a.prototype.toString=function(){var g="";if(this.expires!=null){g=" expires = "+this.expires.toUTCString()+";"}return this.name+"="+this.value+";"+g+" path="+this.path+";"};a.prototype.setExpires=function(h){var g=null;if(typeof(h)!=="undefined"&&h!=null){g=new Date();g.setTime(g.getTime()+(h*24*60*60*1000))}this.expires=g};a.prototype.save=function(){document.cookie=this.toString();b[this.name]=this};a.prototype.remove=function(){if(!b.hasOwnProperty(this.name)){return}document.cookie=this.name+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";delete b[this.name]};function d(){b={};var g=document.cookie.split(";");var h=g.length;for(var k=0;k<h;k++){var j=g[k].split("=");if(j.length===2){var l=j[0].replace(/^\s+|\s+$/g,"");var m=j[1].replace(/^\s+|\s+$/g,"");b[l]=new a(l,m)}}}function f(i,k,h,j){if(b.hasOwnProperty(i)){e(i,false)}var g=new a(i,k,h,j);g.save()}function c(g){if(!Object.prototype.hasOwnProperty.call(b,g)){return null}return b[g].value}function e(g){if(!b.hasOwnProperty(g)){return}b[g].remove()}d();return{readCookies:d,setCookie:f,getCookie:c,removeCookie:e,cookie:a}})();var ngage=ngage||(function(){})();ngage.analytics=ngage.analytics||(function(l){var c=null,m=l||[],b={setAccount:"._setAccount",setAllowLinker:"._setAllowLinker",trackPageView:"._trackPageview",trackEvent:"._trackEvent"},e={emailReceived:["Chat","Conversion","Email Received"],messageReceived:["Chat","Conversion","Visitor Chats"],chatButtonClicked:["Chat","Answer","Requested Chat"],noClicked:["Chat","Answer","No",undefined,undefined,true],yesClicked:["Chat","Answer","Yes"]};function d(){if(typeof _gaq==="undefined"){(function(){var t=document.createElement("script");t.type="text/javascript";t.async=true;t.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var u=document.getElementsByTagName("script")[0];u.parentNode.insertBefore(t,u)})()}_gaq=_gaq||[];c=_gaq;for(var r in m){h(m[r])}}function a(r){h(r);m.push(r)}function g(s){for(var r in m){if(m[r].name===s){m.splice(r,1);break}}}function q(r){if(typeof(r)==="undefined"){j(e.yesClicked)}else{k(r,e.yesClicked)}}function n(r){if(typeof(r)==="undefined"){j(e.noClicked)}else{k(r,e.noClicked)}}function i(r){if(typeof(r)==="undefined"){j(e.chatButtonClicked)}else{k(r,e.chatButtonClicked)}}function p(r){if(typeof(r)==="undefined"){j(e.messageReceived)}else{k(r,e.messageReceived)}}function o(r){if(typeof(r)==="undefined"){j(e.emailReceived)}else{k(r,e.emailReceived)}}function h(r){f(r.name,b.setAccount,r.uaCode);f(r.name,b.setAllowLinker,r.allowLinker);if(r.trackPageView){f(r.name,b.trackPageView)}}function f(t,s){var r=[];r.push(t+s);if(arguments.length>2){var u=Array.prototype.slice.call(arguments,2);Array.prototype.push.apply(r,u)}c.push(r)}function j(r){for(var s in m){k(m[s].name,r)}}function k(s,r){var t=[s,b.trackEvent];Array.prototype.push.apply(t,r);f.apply(this,t)}d();return{addTracker:a,removeTracker:g,trackYesClick:q,trackNoClick:n,trackChatButtonClick:i,trackVisitorMessageSent:p,trackVisitorEmailSent:o,trackCustomEvent:j,trackCustomEventByName:k}});ngage.analytics.tracker=ngage.analytics.tracker||(function(b,d,a,c){return{name:b,uaCode:d,allowLinker:a,trackPageView:c}});ngage.custom=ngage.custom||(function(){var b=1;var d={};function c(g,j){var h=g.replace(/ /g,"");if(!j&&(h.match(".ngageMobileFloat{display:none!important;}")||h.match("#ngageMobileInvite{display:none!important;}"))&&!ngage.isMobile()){return false}var e;try{e=document.createElement("style");e.type="text/css";if(e.styleSheet){e.styleSheet.cssText=g}else{e.appendChild(document.createTextNode(g))}}catch(i){e=document.createElement("link");e.setAttribute("rel","stylesheet");e.setAttribute("type","text/css");e.setAttribute("href","https://scripting.ngagelive.com/ngagecss.php?css="+window.btoa(g))}var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(e,f);return e}function a(h,f,g){if(typeof _gaq==="undefined"){(function(){var i=document.createElement("script");i.type="text/javascript";i.async=true;i.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var j=document.getElementsByTagName("script")[0];j.parentNode.insertBefore(i,j)})()}var e=b;window._gaq=window._gaq||[];_gaq.push(["ngage"+e+"._setAccount",h]);_gaq.push(["ngage"+e+"._setAllowLinker",true]);if(f!==false&&(f||ngage.chat)){_gaq.push(["ngage"+e+"._trackPageview"])}if(ngage.chat){ngage.chat.events.chatClient.onVisitorPhoneEmailReceived(function(){_gaq.push(["ngage"+e+"._trackEvent","Chat","Conversion","Email Received "])});ngage.chat.events.chatClient.onVisitorFirstMessageReceived(function(){_gaq.push(["ngage"+e+"._trackEvent","Chat","Conversion","Visitor Chats "])})}else{if(ngage.tracker){window.ngGANT=window.ngGANT||"";window.ngGAYT=window.ngGAYT||"";window.ngGARC=window.ngGARC||"";ngage.tracker.events.onYesClick(function(){_gaq.push(["ngage"+e+"._trackEvent","Chat","Answer","Yes"])});if(!g){ngage.tracker.events.onNoClick(function(){_gaq.push(["ngage"+e+"._trackEvent","Chat","Answer","No"])})}ngage.tracker.events.onChatButtonClick(function(){_gaq.push(["ngage"+e+"._trackEvent","Chat","Answer","Requested Chat"])})}}b++}return{appendNgageCSS:c,addAnalytics:a}})();ngage.motion=ngage.motion||(function(){function a(d){var e=ngage.events(),f={started:0,ended:1,animate:2};function c(g){e.fire(f.animate,d,g)}return{eventTypes:f,events:e,animate:c}}function b(i,h,l){var g,n=false,f=0,e=a(i),j=e.events,k=e.eventTypes,q=null;function p(){if(!n){j.fire(k.started,i)}n=false;c()}function c(){g=f/h;e.animate(g);f+=l;if(!n&&f<=h){q=setTimeout(c,l)}else{j.fire(k.ended,i)}}function m(){n=true;if(q==null){return}clearTimeout(q);q=null}function o(){f=0}return{eventTypes:k,events:j,start:p,pause:m,reset:o}}return{createAnimation:a,createTimedAnimation:b}})();ngage.tracker=ngage.tracker||(function(){var h=null,c=null,a={standard:0,side:1,top:2,bottom:3};function g(){if(c===null){try{c=document.getElementsByTagName("head")[0]}catch(i){}}}function e(k,n,l){var m=/ilnksrvr/ig;try{var i=ngage.errorReporting.getErrorDetails(k,n,l);if(i.filename){if(!m.test(k.filename)){return}}ngage.errorReporting.pushErrorReport(i.message,i.filename,i.lineNum)}catch(j){}}function b(){if(!ngage.isMobile()){return}if(h===null){h=document.getElementsByName("viewport");if(h.length===0){h=document.createElement("meta");h.name="viewport";c.appendChild(h);h.oldContent=""}else{h=h[0];h.oldContent=h.content}}h.content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width, height=device-height"}function f(){if(h===null){return}h.content=h.oldContent}function d(){if(!ngage.isMobile()){return}var i=document.getElementById("nGageLH");if(i===null||typeof i==="undefined"||i.style.position!=="fixed"){return}if(i.parentNode===null||typeof i.parentNode==="undefined"){return}i.parentNode.removeChild(i)}ngage.errorReporting.setEventName("Tracker");ngage.errorReporting.globalReporting(e);g();d();return{forceZoomOut:b,resetZoomLevel:f,buttonStyles:a,buttonDisplayStyle:a.side}})();ngage.tracker.custom=ngage.tracker.custom||(function(){function a(){window.ngage_ap_timeint=window.ngage_ap_timeint||0;DenyAutoPopup();var g=true;StartNgageChat=function(){};appendNgageCSS("#ngageInviteBackground {display:none !important;}  .ngageMobileFloat { display:none !important; } #ngageInvite {display:none !important;}  .liveChatFloatingButtonMobile {display:none !important;} #nGageLH {display:none !important;} .liveChatFloatingButton { display:none !important;} .liveChatFloatingButtonTop { display:none !important;} .liveChatFloatingButtonBottom { display:none !important;}",true);ngage.tracker.buttonDisplayStyle=ngage.tracker.buttonStyles.standard;var e=document.getElementById("nGageLH");e&&(e.style.display="none");var f=document.getElementsByClassName("liveChatFloatingButton")[0];f&&(f.style.display="none");ngage.tracker.chatInvite.hideInvite()}function b(d){for(var c=0;c<d.length;c++){if(window.location.href.match(d[c])){a()}}}return{killNgage:a,killOnPage:b}})();ngage.tracker.events=ngage.tracker.events||(function(){var a=ngage.events(),b=a.eventTypes.tracker;function h(i){a.bind(b.yesButtonClick,i)}function g(i){a.bind(b.noButtonClick,i)}function f(i){a.bind(b.chatButtonClick,i)}function e(){a.fire(b.yesButtonClick)}function d(){a.fire(b.noButtonClick)}function c(){a.fire(b.chatButtonClick)}return{eventsCore:a,eventTypes:a.eventTypes.tracker,onYesClick:h,onNoClick:g,onChatButtonClick:f,fire:{yesEvent:e,noEvent:d,chatButtonEvent:c},bind:a.bind,unbind:a.unbind}})();ngage.tracker.chatInvite=ngage.tracker.chatInvite||(function(){var i="/Images/mobile.png",e="Hi, we are here to help if you have questions.",q="No, thanks",z=ngage.isMobile()?"<div class='ngageStrong'>YES</div><span>, start now!</span>":"<div>Yes, start now!</div>",f=ngage.isMobile()?"<div class='ngageStrong'>LIVE CHATS</div>":"<div class='ngageStrong'><span class='ngage-live-chat-headline'>LIVE CHATS</span> - ONLINE NOW</div>",s=300,k=false,l=null,y=null,n=null,p=false,x=null,w=false,o=ngage.tracker,m={customHtml:e,yesHtml:z,noHtml:q,headerHtml:f,imageUrl:null,killBottom:false,barColor:false,scrollAmount:s,scrollTimer:5000,useCookies:true,bottomSlider:false,defaultImage:false};if(!ngage.isMobile()){i="/Images/new_mobile.png"}function u(A){switch(A){case"es":if(m.customHtml===e){m.customHtml="Hola, estamos aquí para ayudar si usted tiene preguntas."}if(m.yesHtml===z){m.yesHtml="<div class='ngageStrong'>Sí</div><span>, ¡comience ahora!</span>"}if(m.noHtml===q){m.noHtml="No Gracias"}if(m.headerHtml===f){m.headerHtml=ngage.isMobile()?"<div class='ngageStrong'>CHARLA AHORA</div>":"<div class='ngageStrong'><span class='ngage-live-chat-headline'>CHARLA AHORA</span> - EN LINEA AHORA</div>"}break}}function d(){var E=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;var D=m.scrollAmount;if(typeof m.scrollAmount==="function"){D=m.scrollAmount()}if(typeof D!=="number"){D=300}if(E>=D&&(new Date()-n>m.scrollTimer)){document.removeEventListener("scroll",d);w=true;setTimeout(function(){if(!p){ngage.tracker.events.fire.noEvent()}},5000);a();var B=m.bottomSlider&&ngage.isMobile()?"ngageMobileFloatBottom":"ngageMobileFloat";var C=document.getElementsByClassName(B);if(C&&C.length>0){if(m.bottomSlider){C[0].style.bottom="0px";C[0].style.top="auto"}else{C[0].style.top="0px"}x.style.height=C[0].getBoundingClientRect().height+"px"}if(m.killBottom){var A=document.getElementsByClassName("liveChatFloatingButtonMobile");if(A&&A.length>0){A[0].style.bottom="-100px"}}}}function a(){if(x===null||ngage.isMobile()){return}if(m.bottomSlider){document.body.appendChild(x)}else{document.body.insertBefore(x,document.body.firstChild)}}function g(){x.style.height="0px";var A=m.bottomSlider&&ngage.isMobile()?"ngageMobileFloatBottom":"ngageMobileFloat";var B=document.getElementsByClassName(A);if(B&&B.length>0){if(m.bottomSlider){B[0].style.bottom="-450px"}else{B[0].style.top="-450px"}}}function r(){setNgageCookie("NgageAutoPopup","false",5);g();ngage.tracker.events.fire.noEvent();if(m.killBottom){var A=document.getElementsByClassName("liveChatFloatingButtonMobile");if(A&&A.length>0){A[0].style.bottom="0px"}}}function b(){if(y===null){var A=document.head||document.getElementsByTagName("head")[0];y=document.createElement("link");y.rel="stylesheet";y.type="text/css";if(m.bottomSlider&&ngage.isMobile()){y.href=httpsPreFix+main_url+"/Content/Style/mobileSlider.css"}else{if(!ngage.isMobile()){y.href=httpsPreFix+main_url+"/Content/Style/desktopInvite.css"}else{y.href=httpsPreFix+main_url+"/Content/Style/mobileInvite.css"}}y.media="all";A.appendChild(y)}}function c(){if(l===null){l=document.createElement("div");l.id="ngageMobileInvite";var E=document.createElement("div");if(m.bottomSlider&&ngage.isMobile()){E.className="ngageMobileFloatBottom"}else{E.className="ngageMobileFloat"}l.appendChild(E);var C=document.createElement("a");C.className="ngageBoxClose";C.id="ngageBoxClose";C.onclick=r;if(ngage.isMobile()){E.appendChild(C)}var J=document.createElement("div");J.className="ngageText";E.appendChild(J);var H=document.createElement("div");H.className="ngageMobilePicContainer";J.appendChild(H);if(m.imageUrl===i&&ngage.isMobile()){H.style.borderRadius="0px";H.style.border="0px"}if(ngage.isMobile()||m.imageUrl!==i||!m.defaultImage){var G=document.createElement("img");G.src=m.imageUrl;G.id="ngageMobilePic";G.alt="Image of Professional";H.appendChild(G)}else{var I="url("+httpsPreFix+main_url+"/ImageRetrievers/PopupBG.aspx?websiteid="+WebsiteID+")";if(m.defaultImage=="small"){I+="90% 0% / 211px 155px no-repeat"}else{I+="90% 0% / 300% no-repeat"}H.style.background=I;H.style.borderRadius="20%"}var F=document.createElement("div");F.className="ngageHeader";F.innerHTML=m.headerHtml;J.appendChild(F);if(!ngage.isMobile()){m.barColor=m.barColor||"rgb(240,140,2)";m.imageUrl=m.imageUrl||i;J.style.textAlign="center"}var D=document.createElement("div");D.innerHTML=m.customHtml;J.appendChild(D);D.className="ngage-description-text";var B=document.createElement("div");B.className="ngageMobileBar";var K=document.createElement("div");K.className="ngageMobileBarNo";if(m.barColor){B.style.backgroundColor=m.barColor}if(m.bottomSlider){B.style.top="-1em";B.style.bottom="auto";J.style.paddingTop="1.5em";E.style.top="auto";E.style.bottom="-450px";K.style.top="-1em";K.style.bottom="auto";H.style.marginTop="20px";B.style.boxShadow="0 -3px 4px 0 #9f9f9f";K.style.boxShadow="0 -3px 4px 0 #9f9f9f";J.style.marginBottom="5px"}B.onclick=function(){p=true;AcceptAutoPopup()};J.onclick=function(){p=true;AcceptAutoPopup()};K.onclick=r;B.innerHTML=m.yesHtml;E.appendChild(B);K.innerHTML=m.noHtml;if(!ngage.isMobile()){E.appendChild(K)}x=document.createElement("div");x.className="liveChatFloatingButtonSpacer";x.style.height="0px";document.body.appendChild(l)}if(getNgageCookie("NgageAutoPopup")===""){document.addEventListener("scroll",d);var A=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);if(m.scrollAmount==s&&A-window.innerHeight<s){m.scrollAmount=0}setTimeout(function(){if(!w){d()}},m.scrollTimer+1)}}function h(){o.events.onYesClick(function(){g()})}function v(A){for(var B in A){if(A.hasOwnProperty(B)&&m.hasOwnProperty(B)){m[B]=A[B]}}}function t(A){if(typeof m.imageUrl!=="undefined"&&m.imageUrl!==null&&m.imageUrl.length>0){if(A){A()}return}if(typeof has_general_image!=="undefined"&&has_general_image){var B=httpsPreFix+main_url+"/ImageRetrievers/GeneralImage.aspx?websiteid="+WebsiteID;m.imageUrl=B}else{m.imageUrl=i}if(A){A()}}function j(){if(k){return}k=true;h();n=new Date();i=httpsPreFix+main_url+i;window.ngageLang=(typeof window.ngageLang!=="undefined")?window.ngageLang:"en";u(window.ngageLang);b();t(c)}return{init:j,hookEvents:h,setInviteSettings:v,removeSlider:r,hideInvite:g}})();ngage.tracker.chatWindow=ngage.tracker.chatWindow||(function(){var i=window.location.protocol+"//",a,p=false,h,g=true,s=false,c=null,m=false,z=null,q=document,r=null,b=null;function d(D){D.stopPropagation();x(r,{name:"CloseWindow"})}function e(){s=false;if(p){A(event)}y();q.getElementById("ngageChatDiv").style.display="none";q.getElementById("ngageChatMessages").style.display="none";q.getElementById("ngageChatMessages").removeChild(r);r=null}function f(){var F=q.getElementById("ngageChatHeader");var H=F.style;var D=H.backgroundColor;var E="red";var G=false;if(!g){h=setInterval(function(){H.backgroundColor=G?D:E;G=!G},500);g=true}}function k(){if(z!==null){return}z=document.createElement("link");z.type="text/css";z.href=i+main_url+"/Template/ChatIframe.css";z.rel="stylesheet";document.getElementsByTagName("head")[0].appendChild(z)}function C(H){var G=[],D=0,F=H.length,I,E;while(D<F){I=H.charCodeAt(D++);if((I&63488)==55296&&D<F){E=H.charCodeAt(D++);if((E&64512)==56320){G.push(((I&1023)<<10)+(E&1023)+65536)}else{G.push(I,E)}}else{G.push(I)}}return G}function j(){var E='<div id="ngageChatHeader" class="chatHeader" onclick="ngage.tracker.chatWindow.restoreChat(event);">';E+='<div class="chatHeaderLeft">';E+="<a>Chat</a>";E+="</div>";E+='<div class="chatHeaderRight">';E+='<a id="minimizeButton" style="display: inline-block;" class="chatButton" title="Minimize" onclick="ngage.tracker.chatWindow.minimize(event)"> &#95 </a>';E+='<a id="maximizeButton" style="display: none;" class="chatButton" title="Restore" onclick="ngage.tracker.chatWindow.maximize(event)">&EmptySmallSquare;</a>';E+='<a class="chatButton" title="Pop-Out" onclick="ngage.tracker.chatWindow.popOutClick(event,\'ngageChatDiv\')">\u2197</a>';E+='<a class="chatButton" title="Close" onclick="ngage.tracker.chatWindow.close(event)">\u2715</a>';E+="</div>";E+='<div style="clear: both"></div>';E+="</div>";E+='<div class="chatContainer">';E+='<div id="loadingAnimation" class="loadingAnimation">';E+='<div id="circular3dG">';E+='<div id="circular3d_1G" class="circular3dG"></div>';E+='<div id="circular3d_2G" class="circular3dG"></div>';E+='<div id="circular3d_3G" class="circular3dG"></div>';E+='<div id="circular3d_4G" class="circular3dG"></div>';E+='<div id="circular3d_5G" class="circular3dG"></div>';E+='<div id="circular3d_6G" class="circular3dG"></div>';E+='<div id="circular3d_7G" class="circular3dG"></div>';E+='<div id="circular3d_8G" class="circular3dG"></div>';E+="</div>";E+='<div class="loadingText">';E+="<a>Please Wait, We are loading your Chat<a>";E+="</div>";E+="</div>";E+='<div id="ngageChatMessages" class="chatMessages" style="display: none;">';E+="</div>";E+="</div>";var D=document.createElement("div");D.id="ngageChatDiv";D.className="chatDiv";D.style.display="none";D.innerHTML=E;document.body.appendChild(D)}function l(E,F){if(!(ngage.isMobile()||!F)){if(!(s||m)){B("ngageChatDiv");B("ngageChatMessages");q.getElementById("loadingAnimation").style.display="inline-block";chatIframeURL=E;var D=q.getElementById("ngageChatMessages");D.innerHTML="<iframe id='ngageChatFrame' class='ngageChatFrame' src='"+E+"' width='"+ngage_chat_window_width+"' height='"+ngage_chat_window_height+"'></iframe>";r=q.getElementById("ngageChatFrame");ngage.events.dom.bind(r,"load",v);if(p){A(event)}q.getElementById("ngageChatMessages").style.display="inline-block";q.getElementById("minimizeButton").style.display="inline-block";q.getElementById("maximizeButton").style.display="none";y();s=true}else{if(b!=null&&m){b.focus()}}}else{c=window.open(E,"chatwin"+WebsiteID.replace(/\-/g,""),"toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=no,width="+ngage_chat_window_width+",height="+ngage_chat_window_height);if(c!==null){m=true;c.focus()}}}function v(){q.getElementById("loadingAnimation").style.display="none"}function o(D){if(!p){A(D)}}function n(D){if(p){A(D)}}function t(D){D.stopPropagation();p=true;x(r,{name:"PopOutWindow"})}function w(D){D.stopPropagation();if(p){A(D)}}function y(){if(h){q.getElementById("ngageChatHeader").style.backgroundColor="dimGrey";g=false;clearInterval(h)}}function A(D){if(D){D.stopPropagation()}B("minimizeButton");B("maximizeButton");B("ngageChatMessages");if(p){y()}p=p?false:true}function B(E){var D=q.getElementById(E);if(D.style.display==="inline-block"){D.style.display="none"}else{D.style.display="inline-block"}}function u(D){var E=D.data;switch(E.name){case"flicker":if(p){f()}break;case"endChatIframe":e();break;case"popOutWindow":if(!m){b=window.open(chatIframeURL,"chatwin"+WebsiteID.replace(/\-/g,""),"toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=no,width="+ngage_chat_window_width+",height="+ngage_chat_window_height);if(b!=null){b.focus();m=true;B("ngageChatDiv");s=false;if(p){A(D)}}}break;case"chatWindowClosed":m=false;b=null;break;default:break}}function x(D,E){D.contentWindow.postMessage(E,"*")}if(window.addEventListener){window.addEventListener("message",u,false)}else{window.attachEvent("onmessage",u)}return{init:l,minimize:o,popOutClick:t,close:d,includeChatIframeHtml:j,includeChatIframeStyleSheet:k,restoreChat:w,maximize:n}})();var ngageSideButton=ngageSideButton||(function(){var e=null,f=null,c=52,n=null,p=[],o={top:0,bottom:1},i=false,j=ngage.tracker;function b(q){if(n!==null){return}if(typeof(q)==="undefined"){q=o.top}n=document.createElement("div");n.className="liveChatFloatingButtonSpacer";switch(q){case o.top:document.body.insertBefore(n,document.body.firstChild);break;case o.bottom:document.body.appendChild(n);break}}function m(){if(ngage.isMobile()){return}a();function r(){s();var w=document.getElementsByTagName("*");for(var u=0;u<w.length;u++){var v=w[u],x=window.getComputedStyle(v,null);if(v.id==="DisableBackgroundDiv"){break}if(x.getPropertyValue("display")==="none"){continue}if(v.className=="liveChatFloatingButtonTop"||v.className=="liveChatFloatingButtonSpacer"||v.className==="ngageMobileFloat"){continue}if(x.getPropertyValue("position")!="fixed"||v.offsetTop>=c){continue}q(v);var y=parseFloat(x.getPropertyValue("top"));v.style.top=y+c+"px"}}function s(){for(var u=p.length-1;u>=0;u--){var w=p[u],v=window.getComputedStyle(w.node,null);if(v.getPropertyValue("position")==="fixed"){continue}w.node.style.top=w.originalTop;p.splice(u,1)}}function t(v){for(var u=0;u<p.length;u++){if(v===p[u].node){return true}}return false}function q(u){if(t(u)){return}p.push({node:u,originalTop:u.style.top})}r();b(o.top);e.className="liveChatFloatingButtonTop";e.innerHTML="CLICK HERE TO CHAT LIVE";if(ngageLang==="es"){e.innerHTML="Haga clic aquí, para asistencia en español."}ngage.events.dom.bind(window,"scroll",r)}function l(){if(ngage.isMobile()){return}a();b(o.bottom);e.className="liveChatFloatingButtonMobile";e.innerHTML="CLICK HERE TO CHAT LIVE";if(ngageLang==="es"){e.innerHTML="Haga clic aquí, para asistencia en español."}var q=document.getElementById("nGageLH");if(q&&q.style.position==="fixed"&&q.style.bottom==="0px"){q.style.display="none"}}function a(){f=document.createElement("a");var r="liveChatFloatingButton";f.href="javascript:StartNgageChat();";e=document.createElement("div");if(ngage.isMobile()){r+="Mobile";b(o.bottom)}e.className=r;e.innerHTML="LIVE CHAT <img src='chat.svg' alt='chat' width='32'  height='32' style='padding-bottom: 9px;'> ";if(ngageLang==="es"){e.innerHTML="Charla Ahora"}var x=document.getElementsByTagName("head")[0];var u=document.getElementsByTagName("body")[0];try{var q=document.createElement("link");q.rel="stylesheet";q.type="text/css";q.href=httpsPreFix+main_url+"/Template/ngageSideButton.css";x.appendChild(q);var t=d();window.ng_float_background_color=(typeof window.ng_float_background_color!=="undefined")?window.ng_float_background_color:t.bg;window.ng_float_hover_color=(typeof window.ng_float_hover_color!=="undefined")?window.ng_float_hover_color:t.hover;window.ng_float_text_color=(typeof window.ng_float_text_color!=="undefined")?window.ng_float_text_color:t.text;var s=".liveChatFloatingButton {background-color: "+ng_float_background_color+";}";s+=".liveChatFloatingButton:hover {background-color: "+ng_float_hover_color+";} ";s+=".liveChatFloatingButton { color: "+ng_float_text_color+"; border: 1px solid "+ng_float_text_color+";}";q=document.createElement("style");q.type="text/css";q.innerHTML=s;q.style.border="0";x.appendChild(q)}catch(v){f.style.display="block";f.style.padding="0";f.style.position="fixed";f.style.left="0px";f.style.bottom="45%";f.style.zIndex="5000";e.innerHTML="<img src='https://messenger.ngageics.com/Images/floatingbutton.jpg'>"}var w=document.getElementById("nGageLH");if(w){if(w.style.left=="0px"&&parseInt(w.style.bottom)>0){w.style.zIndex="-1";w.style.visibility="hidden";w.style.display="none"}}f.appendChild(e);u.appendChild(f)}function d(){var v={};try{var q=window.getComputedStyle(document.getElementsByTagName("body")[0]).backgroundColor,t=[],r=0;q=q.replace("rgb(","").replace("rgba(","").split(",");for(var u=0;u<3;u++){q[u]=parseInt(q[u]);r+=q[u];t[u]=q[u]<180?(q[u]+70):(q[u]-70);q[u]=q[u]<200?(q[u]+50):(q[u]-50)}v.bg="rgb("+q[0]+","+q[1]+","+q[2]+")";v.hover="rgb("+t[0]+","+t[1]+","+t[2]+")";v.text=r>377?"#000":"#FFF"}catch(s){v.bg="#474747";v.hover="#575757";v.text="#e8e8e8"}return v}function k(){if(!f){return}f.style.display="block"}function g(){if(!f){return}f.style.display="none"}function h(){if(i){return}i=true;var q=j.buttonDisplayStyle;if(ngage.isMobile()){q=j.buttonDisplayStyle=j.buttonStyles.side}else{if(typeof(window.ng_no_float)!=="undefined"){q=j.buttonStyles.standard}}if(q!==j.buttonStyles.standard){switch(q){case j.buttonStyles.side:a();break;case j.buttonStyles.top:m();break;case j.buttonStyles.bottom:l();break}}}return{init:h,show:k,hide:g}})();
ngage.server.serverApiUrl = 'http://server.ngagelive.com';
ngage.server.serverApiSecureUrl = 'https://server.ngagelive.com';

var pageLoc = document.location.toString(),
    ng_doc = document,
    httpsPreFix = "https://",
    ngageStarted = false;

if (ngage_debug) {
    httpsPreFix = window.location.protocol + "//";
}

var ChatURL = httpsPreFix + main_chat_url + "/index.aspx?websiteid=" + WebsiteID + "&alt=false" + "&wl=" + ngage_whitelabel + "&loc=" + escape(pageLoc);
var PresenceURL = httpsPreFix + main_url + "/ImageRetrievers/ChatButton.aspx?websiteid=" + WebsiteID + "&useAlt=false";
var ChatInvitationYesButtonURL = httpsPreFix + main_url + "/ImageRetrievers/PopupButtons.aspx?websiteid=" + WebsiteID + "&type=yes&useAlt=false";
var ChatInvitationNoButtonURL = httpsPreFix + main_url + "/ImageRetrievers/PopupButtons.aspx?websiteid=" + WebsiteID + "&type=no&useAlt=false";
var ChatInvitationBackgroundURL = httpsPreFix + main_url + "/ImageRetrievers/PopupBG.aspx?websiteid=" + WebsiteID + "&useAlt=false";
var ChatInvitationBackground = "background-image: url(\"" + ChatInvitationBackgroundURL + "\");";
var screen_dim = escape(screen.width + 'x' + screen.height);

if (typeof (ng_globalHeaderScript) === 'undefined') {
    ng_globalHeaderScript = ngage.loadScript(httpsPreFix + main_url + '/GlobalScript.aspx?type=GlobalTrackerScriptHeader');
}

// Functions for creating, reading, and erasing cookies
function getNgageCookie(cName) {
    if (ng_doc.cookie.length > 0) {
        var cStart = ng_doc.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
            cStart = cStart + cName.length + 1;
            var cEnd = ng_doc.cookie.indexOf(";", cStart);
            if (cEnd === -1) cEnd = ng_doc.cookie.length;
            return unescape(ng_doc.cookie.substring(cStart, cEnd));
        }
    }
    return "";
}

function setNgageCookie(c_name, value, expiremins) {
    var exdate = new Date();
    exdate.setMinutes(exdate.getMinutes() + expiremins);
    ng_doc.cookie = c_name + "=" + escape(value) +
        ((expiremins == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/";
}

function startNgage() {
    if (ngageStarted) {
        return;
    }

    var presenceLoaded = false;
    ngageStarted = true;

    ngage.server.visitor.start(WebsiteID);

    function start() {
        if (ng_doc.getElementById('nGageLH')) {
            executeLoadPresence();
        } else {
            if (typeof ng_doc.body !== "undefined" && ng_doc.body !== null) {
                ngage.tracker.chatInvite.init();
                ngageSideButton.init();
            }

            try {
                window.addEventListener('load', executeLoadPresence, false);
            } catch (e) {
                window.attachEvent('onload', executeLoadPresence);
            }
            setTimeout(executeLoadPresence, 5000);
        }
    }

    function executeLoadPresence() {
        if (presenceLoaded)
            return;

        presenceLoaded = true;
        LoadPresence();
    }

    start();
}

function openWindow(url, isIntegrated, useIntegratedChat) {
    ngage.tracker.openWindowFailed = true;
    useIntegratedChat = typeof useIntegratedChat !== 'undefined' ? useIntegratedChat : false;

    // Include the visitor Id for the chat.
    url += '&visitorId=' + ngage.server.visitor.getVisitorId();

    // Fix URL for google analytics users.
    if (typeof _gaq != 'undefined' &&
        typeof _gaq.push != 'undefined' &&
        typeof _gat != 'undefined' &&
        typeof _gat._getTrackerByName != 'undefined') {

        _gaq.push(function () {
            var pageTracker = _gat._getTrackerByName(); // Gets the default tracker.
            url = pageTracker._getLinkerUrl(url);
        });
    }

    if (isIntegrated == true) {
        var integrated_chat_div = ng_doc.getElementById('NgageIntegratedChat');

        if (integrated_chat_div) {
            integrated_chat_div.innerHTML = "<iframe id='frameChatInvite' scrolling='no' frameborder='0' src='" + url + "' width='" + ngage_chat_window_width + "' height='" + ngage_chat_window_height + "'></iframe>";
        }
    } else {
        ngage.tracker.chatWindow.init(url, useIntegratedChat);
    }

    ngage.tracker.openWindowFailed = false;
}

function LoadPresence() {
    //Load Image
    var img_tag = "";
    var img_adv1_tag = "";

    try {

        if (ng_doc.getElementById('nGageLH')) {
            img_tag = "<a href='javascript:StartNgageChat();'/>"
                + "<img onload='DisplayPresence();' border='0' " + "src='" + PresenceURL + "' name='imgng1' alt='Click for live chat!'></a>";

            img_adv1_tag = "<img onload='DisplayPresence();' border='0' " + "src='" + PresenceURL + "' name='imgng1' alt='Live Chat!'>";

            if (ngageDisplayMode == 0)
                ng_doc.getElementById('nGageLH').innerHTML = img_tag;
            else if (ngageDisplayMode == 2)
                ng_doc.getElementById('nGageLH').innerHTML = img_adv1_tag;
            else {
                var scripts = ng_doc.getElementsByTagName("script");
                for (var i = 0; i < scripts.length; i++) {
                    var sourceTemp = scripts[i].getAttribute("src");
                    if (sourceTemp != null) {
                        var source = sourceTemp.toLowerCase();
                        if (source.indexOf("ilnksrvr.aspx") >= 1) {
                            var element = null;
                            try {
                                element = ng_doc.createElement("<a href='javascript:StartNgageChat();'/>");
                            } catch (e) {
                            }

                            if (!element || element.nodeName != "A") {
                                element = ng_doc.createElement('a');
                                element.setAttribute("id", "ngageChatLnk");
                                element.setAttribute("href", "javascript:StartNgageChat();");
                            }

                            element.innerHTML = '<i' + 'mg border="0" ' + 'src="' + PresenceURL + '" name="imgng1" />';
                            scripts[i].parentNode.insertBefore(element, scripts[i]);
                            break;
                        }
                    }
                }
            }

            ngage.tracker.chatWindow.includeChatIframeHtml();
            ngage.tracker.chatWindow.includeChatIframeStyleSheet();

        }
    } catch (e) {
        //Only will error if javascript is disable
        //or using Ngage VIEWER HTML
    }

    ngage.tracker.chatInvite.init();

    if (typeof (ng_globalFooterScript) === 'undefined') {
        window.ng_globalFooterScript = ngage.loadScript(httpsPreFix + main_url + '/GlobalScript.aspx?type=GlobalTrackerScriptFooter');
    }

    ngageSideButton.init();
}

function DisplayPresence() {
    ng_doc.getElementById('nGageLH').style.visibility = "visible";
}

function DenyAutoPopup() {
    ngage.tracker.events.fire.noEvent();
    return false;
}

function StartNgageChat() {
    ngage.tracker.events.fire.chatButtonEvent();
    openWindow(ChatURL, false, ngageUseIntegratedChat); 
}

function AcceptAutoPopup() {
    ngage.tracker.events.fire.yesEvent();
    openWindow(ChatURL + "&mode=AutoEngage", false);
    return false;
}

function StartIntegratedChat() {
    setNgageCookie('NgageAutoPopup', 'false', 120);

    ngage.tracker.events.fire.yesEvent();
    openWindow(ChatURL + "&mode=AutoEngage", true);

    return false;
}

function HideIntegratedChat() {
    setNgageCookie('NgageAutoPopup', 'false', 120);

    ngage.tracker.events.fire.noEvent();
    var integrated_chat_div = ng_doc.getElementById('NgageIntegratedChat');

    if (integrated_chat_div) {
        // clear the InnerHTML
        integrated_chat_div.innerHTML = "";
    }

    return false;
}

function NgageIntegratedInvite(InviteMsg) {
    var integrated_chat_div = ng_doc.getElementById('NgageIntegratedChat');
    var ChatDivHTML = "";

    var RunNgageAutoPopup = getNgageCookie('NgageAutoPopup');

    if (RunNgageAutoPopup == "") {
        if (integrated_chat_div) {
            //Build Integrated Chat Invite
            ChatDivHTML = ChatDivHTML + "<table id=\"ngagepopup\" border=\"0\" style=\"text-align:center !important; margin:0 !important; padding:0 !important; border: 0px !important; border-collapse: separate !important; width:365px !important; height: 275px !important; background-color: transparent !important;\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><table style=\"" + ChatInvitationBackground + " width:375px !important; height:275px !important; margin:0 !important; padding:0 !important; border: 0px !important; border-collapse: separate !important; background-color: transparent !important;\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">";
            ChatDivHTML = ChatDivHTML + "<tr style=\"background-color: transparent !important; background: none !important;\"><td style=\"padding:0 !important; margin:0 !important; width:365px !important; vertical-align:middle !important; height:275px !important; text-align:center !important; background-color: transparent !important;\">";
            ChatDivHTML = ChatDivHTML + "<font style=\"color: #000000;\" class=\"HeaderLabel\"><b>" + InviteMsg + "</b></font>";
            ChatDivHTML = ChatDivHTML + "</td></tr></table><tr><td style=\"padding:0 !important; margin:0 !important; text-align:center !important; vertical-align:middle !important; border: 0px !important; background-color: transparent !important;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:365px !important; margin:0 !important; padding:0 !important; border: 0px !important; border-collapse: separate !important; background-color: transparent !important;\"><tr>";
            ChatDivHTML = ChatDivHTML + "<td height=\"3px\" style=\"padding:0 !important; margin:0 !important; border: 0px !important;\"><a href=\"javascript:void(0)\" onclick=\"StartIntegratedChat()\"><img style=\"padding: 0px !important; border: 0px !important; margin: 0px !important;\" alt=\"Yes\" src=\"" + ChatInvitationYesButtonURL + "\" border=\"0\" name=\"btnChatNow\"></a></td>";
            ChatDivHTML = ChatDivHTML + "<td height=\"3px\" style=\"padding:0 !important; margin:0 !important; border: 0px !important;\"><a href=\"javascript:void(0)\" onclick=\"HideIntegratedChat()\"><img style=\"padding: 0px !important; border: 0px !important; margin: 0px !important;\" alt=\"No\" src=\"" + ChatInvitationNoButtonURL + "\" border=\"0\" name=\"btnNoThanks\"></a></td>";
            ChatDivHTML = ChatDivHTML + "</tr></table></td></tr></table>";

            integrated_chat_div.innerHTML = ChatDivHTML;
        }
    }
}

function NgageKillScript() {
    // Shut down mobile popup
    if (ngage.tracker.chatInvite) {
        ngage.tracker.chatInvite.hideInvite();        
    }

    // Shut down floating buttons
    if (typeof ngageSideButton !== 'undefined' && ngageSideButton !== null) {
        ngageSideButton.hide();
    }

    ngage.server.visitor.stop();
    ngageLoaded = false;
}
try {
var ngGANT = "if (pageTracker) { pageTracker._trackEvent('Chat', 'Answer', 'No'); }"; // Track No Invite Click 
var ngGAYT = "if (pageTracker) { pageTracker._trackEvent('Chat', 'Answer', 'Yes'); }"; // Track Yes Invite Click 
var ngGARC = "if (pageTracker) { pageTracker._trackEvent('Chat', 'Answer', 'Requested Chat'); }"; // Track Chat Request Button Click

function customFunction() {
ngage.customNgageLibrary.addAnalytics("UA-56236104-1");
ngage.customNgageLibrary.appendNgageCSS("#divAutoChatInvFloater {z-index:99999999 !important;}");
ngage.customNgageLibrary.appendNgageCSS("#DisableBackgroundDiv {z-index:99999998 !important;}");
ngage.customNgageLibrary.appendNgageCSS(".liveChatFloatingButton {z-index:99999998 !important;}");

}
(function(a,b){ if(a==='https:') { b="https://scripting.ngagelive.com/dev/customNgageLibrary.js";} ngage.loadScript(b,customFunction);})(location.protocol,'https://scripting.ngagelive.com/dev/customNgageLibrary.js');




var inviteSettings = inviteSettings || {}; inviteSettings.barColor = inviteSettings.barColor || 'rgb(106,3,3)'; inviteSettings.defaultImage = inviteSettings.defaultImage || 'small';ngage.tracker.chatInvite.setInviteSettings(inviteSettings);
} catch (ex) { if (console && console.log) { console.log(ex); }
}
if (typeof ngage.tracker === 'object' && typeof ngage.tracker.events === 'object') {
if (typeof ngGARC !== 'undefined') ngage.tracker.events.onChatButtonClick(ngGARC);
if (typeof ngGAYT !== 'undefined') ngage.tracker.events.onYesClick(ngGAYT);
if (typeof ngGANT !== 'undefined') ngage.tracker.events.onNoClick(ngGANT);
}
startNgage();
