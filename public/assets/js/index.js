!function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e);r(0);class n{constructor(){this.currentStep=0,this.steps=Array.from(document.querySelectorAll('[id^="step-"]'))}switch(){this.steps.map(t=>t.getAttribute("id").includes(this.currentStep)?t.style.display="flex":t.style.display="none")}inc(){this.currentStep+1<=this.steps.length&&(this.currentStep++,this.switch())}dec(){this.currentStep++,this.currentStep-1>=1&&(this.currentStep--,this.switch())}}class s{constructor(t){this.form=t,this.data={},this.errors={},this.submit=!1,this.getAll()}getAll(){return Array.from(this.form.querySelectorAll("input")).map(t=>{const{name:e,type:r,value:n,required:s,checked:i}=t;return s&&0===n.length?errors[e]="Remplissez ce champ":"checkbox"===r?this.data[e]=i:void(this.data[e]&&!i||(this.data[e]=n))}),[this.data,this.errors]}request(t,e="GET"){return new Promise(r=>{Object.keys(this.errors).length||fetch(t,{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(this.data)}).then(t=>t.json()).then(t=>{"error"===t.type?(console.log(t),t.message||t.data):this.submit=!0,r(!0)})})}}(()=>{const t=new n,e=document.getElementById("qcmForm");t.inc(),Array.from(document.querySelectorAll("#step-1 .radio")).map(e=>{e.addEventListener("click",e=>{e.preventDefault(),e.target.querySelector("input").checked=!0,t.inc()})}),e.addEventListener("submit",r=>{r.preventDefault();const n=new s(e);n.request("/validate.php","POST").then(()=>{n.submit&&t.inc()})})})()}]);