(()=>{var t={666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),l=new T(r||[]);return o(a,"_invoke",{value:x(t,n,l)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",p="suspendedYield",g="executing",h="completed",v={};function y(){}function m(){}function b(){}var w={};s(w,a,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(k([])));L&&L!==n&&r.call(L,a)&&(w=L);var S=b.prototype=y.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function F(t,e){function n(o,i,a,l){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,a,l)}),(function(t){n("throw",t,a,l)})):e.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,l)}))}l(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function x(t,e,n){var r=d;return function(o,i){if(r===g)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return J()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=_(a,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=g;var c=f(t,e,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function _(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=f(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:J}}function J(){return{value:e,done:!0}}return m.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},j(F.prototype),s(F.prototype,l,(function(){return this})),t.AsyncIterator=F,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new F(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),s(S,c,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(()=>{"use strict";n(666);const t={jobEntries:[...JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')],filterQuery:[],isFilterOpen:!1};function e(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t.filter((t=>n.includes(t[e])))}function r(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return o===e.length?i:(t.filterQuery.forEach((t=>e[o][n].includes(t)&&i.push(e[o]))),r(e,n,o+1,i))}async function o(n){await async function(e){if(e)return t.filterQuery.includes(e)?t.filterQuery.splice(t.filterQuery.indexOf(e),1):t.filterQuery.push(e)}(n);const o=e(t.jobEntries,"role",t.filterQuery);const i=function(t,n){return e(t,"level",n)}(t.jobEntries,t.filterQuery),a=function(t){return r(t,"tools")}(t.jobEntries),l=function(t){return r(t,"languages")}(t.jobEntries),c=(s=[...o,...i,...l,...a],Array.from(new Set(s)));var s;const u=function(t,e){return t.filter((t=>function(t,e){return e.includes(t.role)}(t,e)&&function(t,e){return e.includes(t.level)}(t,e)&&function(t,e){return t.languages.some((t=>e.includes(t)))}(t,e)||function(t,e){return e.some((e=>t.tools.includes(e)))}(t,e)))}(t.jobEntries,t.filterQuery);return 0===u.length?c:u}function i(t,e,n){return t.insertAdjacentHTML(n,e)}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return window.getComputedStyle(t,n)[e]}const l=document.getElementById("content");function c(t){if(!t||0===t.length)return"";const e=Array.from([t]).flat();let n="";return e.forEach((t=>n+=`<button class="btn btn--tablet" type="button" value=${t}>${t}</button>`)),n}const s=document.getElementById("content");function u(t,e){let n=document.createDocumentFragment();return e.forEach((t=>n.append(function(t){return`\n      <section class="card job-listing ${t.new?"job-listing--new":""}" data-id="${t.id}">\n        <div class="job-listing__company-logo">\n          <img src="${t.logo}" alt="${t.company}-logo" />\n        </div>\n\n        <div class="job-info">\n          <div>\n            <p class="job-info__company-name">${t.company}</p>\n            ${function(t){let e="";return t.featured&&(e+='<p class="job-info__label" data-label="featured">Featured</p>'),t.new&&(e+='<p class="job-info__label" data-label="new">New!</p>'),e}(t)}\n          </div> \n          <p class="job-info__job-title">${t.position}</p>\n          <div>\n            <p class="job-info__post-time">${t.postedAt}</p>\n            <p class="job-info__contract">${t.contract}</p>\n            <p class="job-info__location">${t.location}</p>\n          </div>\n        </div>\n\n        <div class="job-listing__tablets">\n          ${c(t.role)}\n          ${c(t.level)}\n          ${c(t.languages)}\n          ${c(t.tools)}\n        </div>\n\n      </section>\n    `}(t)))),i(t,n.textContent,"beforeend")}function f(){document.querySelectorAll(".job-listing").forEach((t=>t.remove()))}function d(){!function(t){if(!t)throw new Error("Check if filter is defined or visible!");t.classList.contains("open")&&(t.classList.remove("open"),t.classList.add("shrinking"),setTimeout((()=>{t.classList.remove("shrinking"),t.classList.add("hidden")}),230))}(document.getElementById("filter"))}function p(){document.querySelector(".btn--clear").remove()}function g(t){return document.querySelector(`.btn--filter[value=${t}]`).remove()}function h(){document.querySelector("#filter > div").innerHTML=""}var v;i(s,'\n  <div id="filter" class="card job-listing-filter">\n    <div></div>\n  </div>\n  ',"afterbegin"),v=async function(e){var n;if(g(e.target.value),n=e.target.value,t.filterQuery=t.filterQuery.filter((t=>t!==n)),f(),t.isFilterOpen=!1,0===t.filterQuery.length)return h(),p(),d(),u(s,t.jobEntries);const r=await o(null);u(s,r)},document.getElementById("filter").addEventListener("click",(t=>{t.target.matches(".btn--filter")&&!t.target.matches(".btn--clear")&&v(t)})),document.getElementById("filter").addEventListener("click",(e=>{e.target.matches(".btn--clear")&&async function(){t.filterQuery=[],f(),h(),p(),t.isFilterOpen=!1,d(),u(s,t.jobEntries)}()})),l.addEventListener("click",(e=>{e.target.matches(".btn--tablet")&&async function(e){const n=e.target.value;t.filterQuery.includes(n)?g(n):function(t){!function(t,e){const n=e.getBoundingClientRect().width,r=function(t,e){return e.getBoundingClientRect().width-2*+a(e,"paddingInline").replace("px","")-(+a(t,"paddingInlineStart").replace("px","")+ +a(t,"paddingInlineEnd").replace("px",""))}(t,e);t.classList.contains("open")||(t.style.width=r+"px",t.classList.remove("hidden"),t.classList.add("open")),setTimeout((()=>{t.style.width=100*r/n+"%"}),200)}(document.getElementById("filter"),document.getElementById("content"));const e=document.querySelector("#filter > div"),n=function(t){return`<button class="btn btn--filter" value="${t}">${t}</button>`}(t);i(e,n,"beforeend")}(n);const r=await o(n);if(0===r.length)return f(),h(),p(),d(),t.isFilterOpen=!1,u(s,t.jobEntries);t.isFilterOpen||(i(document.getElementById("filter"),'<button class="btn btn--clear">Clear</button>',"beforeend"),t.isFilterOpen=!0),f(),u(s,r)}(e)})),async function(){u(s,t.jobEntries)}()})()})();