!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("iU1Pc");i("ffdC6");const l={form:document.querySelector(".form"),delay:document.querySelector("[name=delay]"),delayStep:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]")},u={delay:0,step:0,amount:0};let a=0;function d(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}l.form.addEventListener("input",(function(e){u[e.target.name]=e.target.value})),l.form.addEventListener("submit",(function(t){t.preventDefault(),a=1;let{delay:o,step:n,amount:i}=u;d(a,o).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}));for(let t=1;t<i;t++)a+=1,o=Number(o)+Number(n),d(a,o).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}))}();
//# sourceMappingURL=03-promises.c434c8b3.js.map
