(this["webpackJsonphackernews-react"]=this["webpackJsonphackernews-react"]||[]).push([[0],{26:function(n,t,e){n.exports=e(52)},52:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(21),i=e(4),c=e(5),u=e.n(c),s=e(6),l=e(7),f=e.n(l),d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.id,e=n.by,r=n.url,o=n.time,a=n.title;return{id:t,by:e,url:r,time:o,title:a}},b=" https://hacker-news.firebaseio.com/v0/",h="".concat(b,"newstories.json"),m="".concat(b,"item/"),p=function(){var n=Object(s.a)(u.a.mark((function n(t){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get("".concat(m+t,".json")).then((function(n){var t=n.data;return t&&d(t)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=Object(s.a)(u.a.mark((function n(){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get(h).then((function(n){return n.data}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=e(2),w=e(3);function y(){var n=Object(v.a)(["\n  font-weight: bold;\n  color: ",";\n"]);return y=function(){return n},n}function x(){var n=Object(v.a)(["\n  font-style: italic;\n  margin-left: 20px;\n\n  > span:first-child {\n    margin-right: 10px;\n  }\n\n  > span:not(:first-child):before {\n    content: '\u2022'\n    margin: 0 7px;\n  }\n\n  .story__meta-bold {\n    font-weight: bold;\n  }\n"]);return x=function(){return n},n}function j(){var n=Object(v.a)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n  line-height: 1.8;\n  margin-left: 20px;\n  text-decoration: none;\n  \n  a {\n    color: #283593;\n    /* background-color: #e8eaf6; */\n    text-decoration: none;\n  }\n"]);return j=function(){return n},n}function E(){var n=Object(v.a)(["\n  padding-top: 10px;\n  margin-bottom: 20px;\n  border-top: 1px solid #cccccc;\n\n  &:first-of-type {\n    border-top: 0;\n  }\n\n  &:last-of-type {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n"]);return E=function(){return n},n}var O=w.b.section(E()),k=w.b.h1(j()),S=w.b.div(x()),A=w.b.span(y(),(function(n){return n.color})),M=Object(r.memo)((function(n){var t=n.storyId,e=Object(r.useState)({}),a=Object(i.a)(e,2),c=a[0],u=a[1];return Object(r.useEffect)((function(){p(t).then((function(n){return n&&n.url&&u(n)}))}),[]),c&&c.url?o.a.createElement(O,{"data-testid":"story"},o.a.createElement(k,null,o.a.createElement("a",{href:c.url},c.title)),o.a.createElement(S,null,o.a.createElement("span",{"data-testid":"story-by"},o.a.createElement(A,{color:"#000"},"By:")," ",c.by),o.a.createElement("span",{"data-testid":"story-time"},o.a.createElement(A,{color:"#000"},"Posted:")," "," ",function(n){var t=Math.floor((new Date-1e3*n)/1e3),e=Math.floor(t/31536e3);return e>1?"".concat(e," years"):(e=Math.floor(t/2592e3))>1?"".concat(e," months"):(e=Math.floor(t/86400))>1?"".concat(e," days"):(e=Math.floor(t/3600))>1?"".concat(e," hours"):(e=Math.floor(t/60))>1?"".concat(e," minutes"):"".concat(Math.floor(t)," seconds")}(c.time)))):null}));function W(){var n=Object(v.a)(["\n  max-width: 1140px;\n  padding: 20px 15px;\n  margin: auto;\n"]);return W=function(){return n},n}function z(){var n=Object(v.a)(["\n  html {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n  *, *:before, *:after {\n    -webkit-box-sizing: inherit;\n            box-sizing: inherit;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n    color: #202020;\n    background-color: #fafafe;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n  }\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n"]);return z=function(){return n},n}var T=Object(w.a)(z()),H=w.b.main(W()),L=function(){var n=Object(r.useState)(!1),t=Object(i.a)(n,2),e=t[0],o=t[1],a=Object(r.useState)(30),c=Object(i.a)(a,2),u=c[0],s=c[1],l=function(n,t,e,r){var o;return function(){var a=e&&!o;clearTimeout(o),o=setTimeout((function(){o=null,e||n.apply(void 0,r)}),t),a&&n.apply(void 0,r)}}((function(){if(window.innerHeight+document.documentElement.scrollTop!==document.documentElement.offsetHeight||e)return!1;o(!0)}),200);return Object(r.useEffect)((function(){e&&(s(u+30>=500?500:u+30),o(!1))}),[e]),Object(r.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l)}}),[]),{count:u}},B=function(){var n=L().count,t=Object(r.useState)([]),e=Object(i.a)(t,2),a=e[0],c=e[1];return Object(r.useEffect)((function(){g().then((function(n){return c(n)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null),o.a.createElement(H,{"data-test-id":"stories-container"},o.a.createElement("h1",{style:{textAlign:"center"}},"Hacker News Stories"),a.slice(0,n).map((function(n){return o.a.createElement(M,{key:n,storyId:n})}))))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(n,t){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(n)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}Object(a.render)(o.a.createElement((function(){return o.a.createElement(B,null)}),null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");C?(!function(n,t){fetch(n).then((function(e){var r=e.headers.get("content-type");404===e.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):I(n,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,n)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.3dc4483f.chunk.js.map