/** 
 * reLift-HTML v0.0.7
 * Copyright 2019 Mardix mcx2082@gmail.com
 * License: MIT
 * https://github.com/mardix/relift-html
 * Build date: 5/10/2019, 3:14:31 AM
 * 
 */
const t=(t,e,n)=>{let r=t;const o=e.split(".");for(;o.length;){const t=o.shift();r[t]=o.length?r[t]?r[t]:{}:n,r=r[t]}},e=(t,e)=>e.split(".").reduce((t,e)=>t&&t[e],t),n=(t,e)=>t&&"function"==typeof t[e],r=t=>"string"==typeof t?document.querySelector(t):t,o=t=>(new DOMParser).parseFromString(t,"text/html").body,i=(t,e)=>n=>n[t]=e({...n}),s=t=>Object.freeze(Array.from(t.attributes).map(t=>({[t.name]:t.value})).reduce((t,e)=>({...t,...e}),{})),a=(t=7)=>Math.random().toString(36).toLowerCase().substring(t),l=(t,e)=>{let n=!1,r=!1;const o=new WeakMap,i=()=>{n?r||(r=!0):e()},s={get(t,e,n){if("___target___"===e)return t;const r=Reflect.get(t,e,n);if((t=>null===t||!["function","object"].includes(typeof t))(r)||"constructor"===e)return r;const i=((t,e)=>{let n=o.get(t);if(n)return n;n=new Map,o.set(t,n);let r=n.get(e);return r||(r=Reflect.getOwnPropertyDescriptor(t,e),n.set(e,r)),r})(t,e);if(i&&!i.configurable){if(i.set&&!i.get)return;if(!1===i.writable)return r}return new Proxy(r,s)},set(t,e,n,r){n&&void 0!==n.___target___&&(n=n.___target___);const o=Reflect.get(t,e,r),s=Reflect.set(t,e,n);return o!==n&&i(),s},defineProperty(t,e,n){const r=Reflect.defineProperty(t,e,n);return i(),r},deleteProperty(t,e){const n=Reflect.deleteProperty(t,e);return i(),n},apply(t,o,i){if(!n){n=!0;const s=Reflect.apply(t,o,i);return r&&e(),n=r=!1,s}return Reflect.apply(t,o,i)}};return new Proxy(t,s)},c=(t,e)=>Array.from(t.childNodes).filter(t=>e(t)).map(t=>({[e(t)]:t})).reduce((t,e)=>({...t,...e}),{});const u=[];for(const t in document){const e=null===document[t]||"function"==typeof document[t];t.startsWith("on")&&e&&u.push(t.substring(2))}const d="r-e-list",f=t=>`r-on-${t}`;const p={$for:function(t,e,n){const r=/(.*)\s+(in)\s+(.*)$/.exec(e);if(4===r.length){const e=r[1].replace("(","").replace(")",""),o=r[3];$(t,`\${${o}.map(function(${e}) { return \``,"`}.bind(this)).join('')}"),g(t,n)}},$if:function(t,e,n){g(t,n),A(t,`\${${e} ? `);const r=t.nextElementSibling;r&&h(r,"else")?($(t,"`","`"),g(r,"else"),$(r,":`","`}")):$(t,"`","`:``}")}};const m=t=>`r-${t}`,h=(t,e)=>t.hasAttribute(m(e)),b=(t,e)=>t.getAttribute(m(e)),g=(t,e)=>t.removeAttribute(m(e)),y=(t,e)=>t.querySelectorAll(`[${m(e)}]`),A=(t,e)=>t.insertAdjacentText("beforebegin",e),$=(t,e,n)=>{A(t,e),((t,e)=>t.insertAdjacentText("afterend",e))(t,n)};const T=["data","el","isShadow","template","created","updated","removed","$store","props","prop","tagName"],N=t=>e=>(e.$store=t.getState(),t.subscribe(n=>e.$store=t.getState())),w=t=>{const e=o((t=>t.replace(/\$?\{([^\;\{]+)\}/g,(t,e)=>`\${${e}}`))(t));!function(t,e={}){const n={...e,...p};for(const e in n){const r=e.replace("$","");for(const o of y(t,r))if(h(o,r)){const t=b(o,r);n[e](o,t,r)}}}(e),function(t){for(const e of t.querySelectorAll("[\\@call], [\\@bind]")){let t=e.getAttribute("@call");const n=e.hasAttribute("@bind");e.removeAttribute("@call"),n&&(e.setAttribute("r-data-key",e.getAttribute("@bind")),e.removeAttribute("@bind"),t="__$bindInput");let r=["click"];e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?r=["input","paste"]:e instanceof HTMLSelectElement?r=["change"]:e instanceof HTMLFormElement?r=["submit"]:e instanceof HTMLAnchorElement&&e.setAttribute("href","javascript:void(0);");let o=(e.getAttribute(d)||"").split(",").filter(t=>t);o=o.concat(r),e.setAttribute(d,o.join(","));for(const n of r)e.setAttribute(f(n),t)}for(const e of u)for(const n of t.querySelectorAll(`[\\@${e}]`)){const t=(n.getAttribute(d)||"").split(",").filter(t=>t);t.push(e),n.setAttribute(d,t.join(",")),n.setAttribute(f(e),n.getAttribute(`@${e}`)),n.removeAttribute(`@${e}`),n instanceof HTMLAnchorElement&&n.setAttribute("href","javascript:void(0);")}}(e);const n=e.innerHTML,r=(t=>e=>new Function(`return \`${t}\``).call(e))(n);return{html:n,render:(t,e)=>{const n=o(r(e));return!t.isEqualNode(n)&&function t(e,n,r={}){if(r={key:t=>t.id,...r},"string"==typeof n){const t=n;(n=document.createElement(e.nodeName)).innerHTML=t}const o=c(e,r.key);let i;for(i=0;n.firstChild;i++){const a=n.removeChild(n.firstChild);if(i>=e.childNodes.length){e.appendChild(a);continue}let l=e.childNodes[i];const c=r.key(a);if(r.key(l)||c){const t=c&&c in o?o[c]:a;t!==l&&(l=e.insertBefore(t,l))}if(l.nodeType!==a.nodeType||l.tagName!==a.tagName)e.replaceChild(a,l);else if([Node.TEXT_NODE,Node.COMMENT_NODE].indexOf(l.nodeType)>=0)l.textContent!==a.textContent&&(l.textContent=a.textContent);else if(l!==a){const e=s(l),n=s(a);for(const t in e)t in n||l.removeAttribute(t);for(const t in n)t in e&&e[t]===n[t]||l.setAttribute(t,n[t]);t(l,a)}}for(;e.childNodes.length>i;)e.removeChild(e.lastChild);return!0}(t,n)}}};function v(n){const r=n.target,o=r.getAttribute("r-data-key");if("checkbox"===r.type){const n=e(this.data,o)||[];t(this.data,o,r.checked?n.concat(r.value):n.filter(t=>t!=r.value))}else r.options&&r.multiple?t(this.data,o,[].reduce.call(r,(t,e)=>e.selected?t.concat(e.value):t,[])):t(this.data,o,r.value)}function _(t={}){const e={isShadow:!1,tagName:null,data:{},template:null,$store:{getState:()=>{},subscribe:()=>()=>{}},created(){},updated(){},removed(){},...t},r=N(e.$store),o=w(e.template),a=Object.keys(e).filter(t=>!T.includes(t)).filter(t=>n(e,t)).reduce((t,n)=>({...t,[n]:e[n]}),{}),c=Object.keys(e.data).filter(t=>!n(e.data,t)).reduce((t,n)=>({...t,[n]:e.data[n]}),{}),u=Object.keys(e.data).filter(t=>n(e.data,t)).map(t=>i(t,e.data[t])),p=t=>u.forEach(e=>e(t));window.customElements.define(e.tagName.toLowerCase(),class extends HTMLElement{constructor(){super(),this.$root=e.isShadow?this.attachShadow({mode:"open"}):this}connectedCallback(){this.state={...this.state,...c,prop:s(this)};const t=l(this.state,()=>{p(this.state),o.render(this.$root,this.state)&&e.updated.call(this.context)});this.disconnectStore=r(t),this.$root.innerHTML=o.html,this.context={...a,data:t,el:this.$root,prop:this.state.prop},function(t,e){function n(t){Array.from(t.querySelectorAll(`[${d}]`)).map(t=>{(t.getAttribute(d)||"").split(",").filter(t=>t).map(n=>{t[`on${n}`]=(r=>{r.preventDefault();const o=t.getAttribute(f(n));e[o].call(e,r)})})})}const r=new MutationObserver(t=>{[...t].filter(t=>t.addedNodes.length>0).map(t=>t.target).map(t=>n(t))});r.observe(t,{attributes:!0,childList:!0,subtree:!0}),n(t)}(this.$root,{...this.context,__$bindInput:v}),p(this.state),o.render(this.$root,this.state),e.created.call(this.context)}disconnectedCallback(){e.removed.call(this.context),this.disconnectStore()}})}const S=t=>new Error(`reLift-HTML Error: ${t}`);export default function(t={}){const e={el:null,asTemplate:!1,tagName:null,isShadow:null,template:null,...t};let n=null;if(e.isShadow=null===e.isShadow?e.asTemplate:e.isShadow,e.template||((n=r(e.el)).style.display="block",e.template=e.asTemplate?n.innerHTML:n.outerHTML,e.tagName=e.tagName||(e.asTemplate?n.getAttribute("tag-name"):`relift-ce-${a()}`)),e.el&&!e.isShadow&&((n=r(e.el)).style.display="block",e.template=e.template||n.outerHTML,e.tagName=e.tagName||`relift-ce-${a()}`,n.parentNode.replaceChild(document.createElement(e.tagName),n)),!e.template)throw S("missing 'template' option or 'el' are not valid elements");if(!e.tagName)throw S("missing 'tagName'");_(e)}
