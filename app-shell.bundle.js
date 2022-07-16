!function(e){function t(t){for(var n,i,s=t[0],o=t[1],a=0,l=[];a<s.length;a++)i=s[a],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={1:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=s);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+({0:"about-view",2:"view-404",3:"work-view"}[e]||e)+".bundle.js"}(e);var c=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var c=o;i(i.s=3)}([function(e,t,n){"use strict";n.d(t,"c",(function(){return U})),n.d(t,"b",(function(){return ee})),n.d(t,"a",(function(){return ne}));const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},s=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${s}--\x3e`,a=new RegExp(`${s}|${o}`);class c{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,c=-1,h=0;const{strings:u,values:{length:f}}=e;for(;h<f;){const e=i.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)l(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=u[h],n=p.exec(t)[2],r=n.toLowerCase()+"$lit$",i=e.getAttribute(r);e.removeAttribute(r);const s=i.split(a);this.parts.push({type:"attribute",index:c,name:n,strings:s}),h+=s.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const r=e.parentNode,i=t.split(a),s=i.length-1;for(let t=0;t<s;t++){let n,s=i[t];if(""===s)n=d();else{const e=p.exec(s);null!==e&&l(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(s)}r.insertBefore(n,e),this.parts.push({type:"node",index:++c})}""===i[s]?(r.insertBefore(d(),e),n.push(e)):e.data=i[s],h+=s}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&c!==o||(c++,t.insertBefore(d(),e)),o=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(n.push(e),c--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),h++}}else i.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const l=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},h=e=>-1!==e.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,133,null,!1);let s=m(r),o=r[s],a=-1,c=0;const l=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(l.push(e),null===h&&(h=e)),null!==h&&c++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-c,s=m(r,s),o=r[s]}l.forEach(e=>e.parentNode.removeChild(e))}const f=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},m=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(h(t))return n}return-1};const g=new WeakMap,v=e=>"function"==typeof e&&g.has(e),_={},y={};class w{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let s,o=0,a=0,c=i.nextNode();for(;o<n.length;)if(s=n[o],h(s)){for(;a<s.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=t.pop(),c=i.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),x=` ${s} `;class C{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const a=p.exec(e);t+=null===a?e+(n?x:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==b&&(t=b.createHTML(t)),e.innerHTML=t,e}}const S=e=>null===e||!("object"==typeof e||"function"==typeof e),A=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class E{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!A(e))return e}let r="";for(let i=0;i<t;i++){r+=e[i];const t=n[i];if(void 0!==t){const e=t.value;if(S(e)||!A(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===_||S(e)&&e===this.value||(this.value=e,v(e)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const e=this.value;this.value=_,e(this)}this.value!==_&&this.committer.commit()}}class R{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}const e=this.__pendingValue;e!==_&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof C?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):A(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{const n=new w(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)n=t[r],void 0===n&&(n=new R(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class k{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue===_)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=_}}class O extends E{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends P{}let M=!1;(()=>{try{const e={get capture(){return M=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class T{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue===_)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=L(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=_}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const L=e=>e&&(M?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function j(e){let t=z.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},z.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(s);return n=t.keyString.get(r),void 0===n&&(n=new c(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const z=new Map,B=new WeakMap;const V=new class{handleAttributeExpressions(e,t,n,r){const i=t[0];if("."===i){return new O(e,t.slice(1),n).parts}if("@"===i)return[new T(e,t.slice(1),r.eventContext)];if("?"===i)return[new k(e,t.slice(1),n)];return new E(e,t,n).parts}handleTextExpression(e){return new R(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const U=(e,...t)=>new C(e,t,"html",V),H=(e,t)=>`${e}--${t}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const $=e=>t=>{const n=H(t.type,e);let r=z.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},z.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(s);if(i=r.keyString.get(o),void 0===i){const n=t.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(n,e),i=new c(t,n),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i},F=["html","svg"],D=new Set,q=(e,t,n)=>{D.add(e);const r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:s}=i;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,e);const o=document.createElement("style");for(let e=0;e<s;e++){const t=i[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{F.forEach(t=>{const n=z.get(H(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),u(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const s=document.createTreeWalker(r,133,null,!1);let o=m(i),a=0,c=-1;for(;s.nextNode();){c++;for(s.currentNode===n&&(a=f(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===c;){if(a>0){for(;-1!==o;)i[o].index+=a,o=m(i,o);return}o=m(i,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),u(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const G={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Z=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:Z};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this.requestUpdateInternal(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=Z){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||G,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||G.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=W){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const i=this.constructor;n=n||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;const Y=Element.prototype;Y.msMatchesSelector||Y.webkitMatchesSelector;const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class Q{constructor(e,t){if(t!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new Q(n,X)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const te={};class ne extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!K){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Q(String(t),X)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ne.finalized=!0,ne.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,s=B.has(t),o=I&&11===t.nodeType&&!!t.host,a=o&&!D.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=B.get(t);void 0===r&&(i(t,t.firstChild),B.set(t,r=new R(Object.assign({templateFactory:j},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:$(r)},n)),a){const e=B.get(c);B.delete(c);const n=e.value instanceof w?e.value.template:void 0;q(r,c,n),i(t,t.firstChild),t.appendChild(c),B.set(t,e)}!s&&o&&window.ShadyCSS.styleElement(t.host)},ne.shadowRootOptions={mode:"open"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=n(0).b`
  :host {
    display: block;
    --app-blue-color: #0AC8FA;
    --app-grey-color: #24262E;
    --nav-bar-width: 70px;
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes falling {
    from { opacity: 0; margin-top: -300px; }
    to { opacity: 1; margin-top: -50px; }
  }

  @keyframes fromRight {
    from { opacity: 0; margin-right: -300px; }
    to { opacity: 1; margin-right: 0; }
  }

  @keyframes fromLeft {
    from { opacity: 0; margin-left: -300px; }
    to { opacity: 1; margin-left: 0; }
  }

  @keyframes flipIn {
    0% { transform: scaleX(0) }
    100% { transform: scaleX(1) }
  }
`},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(0);const i=r.c`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="33"
    height="20"
    viewBox="0 0 44 31"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="28.199"
        y1="33.742"
        x2="14.028"
        y2="-1.097"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#71d2ec" />
        <stop offset="1" stop-color="#0ac8fa" />
      </linearGradient>
    </defs>
    <g id="menu" transform="translate(-31 -34)">
      <g id="menu-2" data-name="menu">
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="37"
          height="3"
          transform="translate(31 34)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy_3"
          data-name="Rectangle 4 copy 3"
          width="3"
          height="3"
          transform="translate(72 34)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy_4"
          data-name="Rectangle 4 copy 4"
          width="3"
          height="3"
          transform="translate(31 48)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy"
          data-name="Rectangle 4 copy"
          width="37"
          height="3"
          transform="translate(38 48)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy_2"
          data-name="Rectangle 4 copy 2"
          width="17"
          height="3"
          transform="translate(31 62)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy_6"
          data-name="Rectangle 4 copy 6"
          width="16"
          height="3"
          transform="translate(59 62)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy_5"
          data-name="Rectangle 4 copy 5"
          width="3"
          height="3"
          transform="translate(52 62)"
          fill="#fff"
        />
      </g>
      <path
        id="Gradient_Overlay"
        data-name="Gradient Overlay"
        d="M59,65V62H75v3Zm-7,0V62h3v3ZM31,65V62H48v3Zm7-14V48H75v3Zm-7,0V48h3v3ZM72,37V34h3v3ZM31,37V34H68v3Z"
        fill="url(#linear-gradient)"
      />
    </g>
  </svg>
`,s=(r.c`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="67"
    height="26"
    viewBox="0 0 67 26"
  >
    <defs>
      <pattern
        id="pattern"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 67 26"
      >
        <image
          width="67"
          height="26"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAaCAYAAADsS+FMAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAQ6ADAAQAAAABAAAAGgAAAABEoOxkAAAG5ElEQVRYCbXXW+ilVRkG8D01ZWczNamJ+FfORUQFFQVFYHYghfAqCSpIIqqLkYiKuoguK7zKrJuIqC4CKQNJjSAa6SK8CKKTwojNMBqWZQfG7GCH5/ft7/m35nPv+W8oH3j2Wus9rfd91/q+vfehS+755+oxxrHEvyK88jHe538O/7gtESR/aXj9PI5mZAosbu1kwyjG3TOr5l/wxcb7d+YnZpl5Y9Nb4wi2YJ/aToJ8NE7XB46Ht1jcNsvbEM1RFLlNPh+CBOiMR0N6PvQtsL5sqjdvPOO4ZiMWGO0nJrtrw0JjyMBYH7HYWZvvjEM7PiZNSJGKgyZoLCR1OHxByAeW+uV6WTA/stFOnEKzPHJjoXJqo9w8eZCNjc3y3Nj2mAiITUhQcNrjNZ+Ew8eTMt8LPzXL6j8v9+P1ROnbNDZin17IyKE+itQII0Ib0ZFMzl2LO+5DX+znuOvN4CCZcdwW/Ezsvh2+O1xCguL0EVrq6Z4ZXhR2v9HmVVl8M3wkbC4aotg2JtMJvRUaYm7PPt4M2JPvY9dmOAkndnnYJIywKem1ZrX6ayZuS8HWI7B8EVZvvC88Mgsa+4GsHwyfGz591n0/45vCX4V7YcHHQSm2+1VnpJPDiKkxBzWDo2KeMfNkxr1wV/jefvwOxpqmQU8OH57HDGfhL1k9JRz1d2T9mrOsVquTWe/NsjbG0g3pWl3gpuzfjsOTaPPHeyJ2+veHPV3JHg9fEWrQQdilEWLIA/8R2mMTNAKeuB6mz2UjCPfCk/Mof/xdqBGg+PExbTOOHXQz/hzHG8IPh5L9TahACV0QFj21rreNu96Upf8jEdgf/rUeVtte/g9F/4fw/LCP1MOZO1Tg/6Jptlodmkcv/HdtCzjbrH6YyVvC80JNuDcEc4XZWKI9tSba0dVnA38Lu/kkGD7YizeiMcjGRoiBYv89XOKpETwvtB/8JJTjJaGYbUSmq7vCN4cfDA9vuxlfiPIb4fFQ4YUNXGXNkYw5fR8jm7XgjuOpRj2BnVh8x2tPSeeQjNADs5+Y/Pg0fuX1i2rKi5/4bTJ7Nm1spqs/hbeHLwlvHhVZT/h6Pl8ZvjPsBgKy1YQmIglosp1Lll2x3MOVfUKogU20tsY2wtg9yFt8m9cmVD7mIT7IX0OgtaxX67UbfWnoJl04BqjRhzJRDOfTs9CG3vgKlYR3BFkTs27ilUW0j+oINEeC/JeNimhC82qhlRvJUH6goWN8supGfzHHNTt+R0L5PKebjm/Xz0Zx40wdbuHmnH8bcm4CCtLhbtSx+qj2debi1MZ6tOt6KSNfQu7s2thR37rox2aN+7qhmva0UA2v46QR/WV2WeZHw1vCD4Se95PhqdCt8I7w1ddHJdONkATfc0EiLbojewmPSZNtwmg3+o+2bNxoeY/QIIfiUdVMuEUz2giCq0Ide2n4pfDC0M9jX1FsOeqkTZYFt3hyhdoMxkTNyxZjhCa86RtibfHfBi/fNc2ne2nAH0O10Mm9+2a6Ou4jkKev4VPhxm+T66LwlnUD3hdeHHJqNzOdoPg+8/Q23IRRJ6Gu24RNPmRs2djXIfCr76a92Glkv9n4a4ZHuM3zyLvhmiXmPeHrwwktpmvjR0MBOF4eaobNbw9fHXq50jl5/jYdk/v9rOsv1DaNDVsJS2R80bbIFs4OydkC3U3hZaEbu8ydXfcw8gUNbZ4a1bzk8bFwH5yWeEcEJ2bhLzPq5I9Czn7AuH5+2Lg5YLM+ItY2o4efh/eGTcx+ruWZcESTF4utwj029ct0ar7HWGyHAexGtHFk5mzFaEw33heAmyGHi8JPhBM2NYPyO+HHwxeGAvkv8vyQ81dDpzYm0iIinpLm89PwztA7ZzxFP/F7lTPdh1wa9/7M3cC+d2rEzztLw/3fcEAjrJc1Ne6D0T0QykWjPxl+Lvx0OGHpSPjy8P3hZ0LOTlISLfAjmbsdD4V3h9Arul6tb5MGvT18VvizWeFEjoRGOBP+OnT7wDNO5iZugxc+vaKctKbwU6DHG3pTHRiysY983O4fhF8Mz8KmZowGb8jiu7PgvEGhmLeGkinchF+EHgvfPteFoGEvm2brptK5MYo+HWrOTeHV4R3ht0JxHAIqpE03Xhu+NtSQ+8KLQwflFrXJHgXvrlPhV0KN+F7osX9jeFX4KGz7b1JD19YJw63hldPs7I8TWR4dROyc3m2zrH5GDYCr18OjPr8cyYtDDXhb2L0z3QqP4dfCZ4eadWN4czhCQ64ZBZvm47O8SS+ZK8LrNylnGf2IZcN6qhp0LFzqR9/3ZnFB6Eaca8/R58dZ3BDeFfYARr35gY1gdNDNYPP/hAJd812h0dsK3DXGznb/AfFf1t6kIRE6AAAAAElFTkSuQmCC"
        />
      </pattern>
    </defs>
    <path
      id="Layer_2"
      data-name="Layer 2"
      d="M0,0H67V26H0Z"
      fill="url(#pattern)"
    />
  </svg>
`,r.c`
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 4100 2100"
    style="enable-background:new 0 0 4100 2100;"
    xml:space="preserve"
  >
    <style type="text/css">
      .st0 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #f0f0f0;
      }
      .st1 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #0ac8fa;
      }
      .st2 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #076075;
      }
      .st3 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: url(#SVGID_1_);
      }
      .st4 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #9186dd;
      }
      .st5 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #442f86;
      }
      .st6 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #bbd1f5;
      }
      .st7 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: url(#SVGID_2_);
      }
    </style>
    <g>
      <g>
        <g>
          <path
            class="st0"
            d="M1816.8,852.8h-19.1c-13.1,0-23.7,10.6-23.7,23.7v38.4c0,13.1-10.6,23.7-23.7,23.7h-116.2c-13.1,0-23.7-10.6-23.7-23.7v-38.4c0-13.1-10.6-23.7-23.7-23.7h-212c-13.1,0-23.7-10.6-23.7-23.7V753c0-4.8,1.5-9.5,4.2-13.5l200.9-290.9c4.4-6.4,11.7-10.2,19.5-10.2H1692c18.9,0,30.2,21.1,19.7,36.8l-139.7,210c-10.5,15.7,0.8,36.8,19.7,36.8c13.1,0,23.7-10.6,23.7-23.7v-29.1c0-13.1,10.6-23.7,23.7-23.7h111.2c13.1,0,23.7,10.6,23.7,23.7v29.1c0,13.1,10.6,23.7,23.7,23.7h19.1c13.1,0,23.7,10.6,23.7,23.7v83.4C1840.5,842.1,1829.9,852.8,1816.8,852.8z"
          />
          <path
            class="st0"
            d="M1973,918.8c-34.1-20.7-60.7-50.7-80-90c-19.3-39.3-28.9-86.1-28.9-140.4c0-54.3,9.6-101.1,28.9-140.4c19.3-39.3,46-69.3,80-90c34-20.7,73.2-31.1,117.5-31.1c44.3,0,83.5,10.4,117.5,31.1c34,20.7,60.7,50.7,80,90c19.3,39.3,28.9,86.1,28.9,140.4c0,54.3-9.6,101.1-28.9,140.4c-19.3,39.3-46,69.3-80,90c-34.1,20.7-73.2,31.1-117.5,31.1C2046.2,949.9,2007,939.5,1973,918.8L1973,918.8z M2147.7,688.4L2147.7,688.4c0-84.3-19-126.4-57.1-126.4c-38.1,0-57.2,42.1-57.2,126.4c0,84.3,19,126.4,57.2,126.4C2128.6,814.9,2147.7,772.7,2147.7,688.4z"
          />
          <path
            class="st0"
            d="M2819.8,852.8h-19.1c-13.1,0-23.7,10.6-23.7,23.7v38.4c0,13.1-10.6,23.7-23.7,23.7h-116.2c-13.1,0-23.7-10.6-23.7-23.7v-38.4c0-13.1-10.6-23.7-23.7-23.7h-212c-13.1,0-23.7-10.6-23.7-23.7V753c0-4.8,1.5-9.5,4.2-13.5l200.9-290.9c4.4-6.4,11.7-10.2,19.5-10.2H2695c18.9,0,30.2,21.1,19.7,36.8l-139.7,210c-10.5,15.7,0.8,36.8,19.7,36.8c13.1,0,23.7-10.6,23.7-23.7v-29.1c0-13.1,10.6-23.7,23.7-23.7h111.2c13.1,0,23.7,10.6,23.7,23.7v29.1c0,13.1,10.6,23.7,23.7,23.7h19.1c13.1,0,23.7,10.6,23.7,23.7v83.4C2843.4,842.1,2832.8,852.8,2819.8,852.8z"
          />
        </g>
        <g>
          <path
            class="st1"
            d="M1800.2,850.2h-19.1c-13.1,0-23.7,10.6-23.7,23.7v38.4c0,13.1-10.6,23.7-23.7,23.7h-116.2c-13.1,0-23.7-10.6-23.7-23.7v-38.4c0-13.1-10.6-23.7-23.7-23.7h-212c-13.1,0-23.7-10.6-23.7-23.7v-76.1c0-4.8,1.5-9.5,4.2-13.5l200.9-290.9c4.4-6.4,11.7-10.2,19.5-10.2h116.3c18.9,0,30.2,21.1,19.7,36.8l-139.7,210c-10.5,15.7,0.8,36.8,19.7,36.8c13.1,0,23.7-10.6,23.7-23.7v-29.1c0-13.1,10.6-23.7,23.7-23.7h111.2c13.1,0,23.7,10.6,23.7,23.7v29.1c0,13.1,10.6,23.7,23.7,23.7h19.1c13.1,0,23.7,10.6,23.7,23.7v83.4C1823.9,839.6,1813.3,850.2,1800.2,850.2z"
          />
          <path
            class="st1"
            d="M1956.4,916.3c-34.1-20.7-60.7-50.7-80-90c-19.3-39.3-28.9-86.1-28.9-140.4c0-54.3,9.6-101.1,28.9-140.4c19.3-39.3,46-69.3,80-90c34-20.7,73.2-31.1,117.5-31.1c44.3,0,83.5,10.4,117.5,31.1c34,20.7,60.7,50.7,80,90c19.3,39.3,28.9,86.1,28.9,140.4c0,54.3-9.6,101.1-28.9,140.4c-19.3,39.3-46,69.3-80,90c-34.1,20.7-73.2,31.1-117.5,31.1C2029.6,947.4,1990.5,937,1956.4,916.3L1956.4,916.3z M2131.1,685.9L2131.1,685.9c0-84.3-19-126.4-57.1-126.4c-38.1,0-57.2,42.1-57.2,126.4c0,84.3,19,126.4,57.2,126.4C2112,812.3,2131.1,770.2,2131.1,685.9z"
          />
          <path
            class="st1"
            d="M2803.2,850.2h-19.1c-13.1,0-23.7,10.6-23.7,23.7v38.4c0,13.1-10.6,23.7-23.7,23.7h-116.2c-13.1,0-23.7-10.6-23.7-23.7v-38.4c0-13.1-10.6-23.7-23.7-23.7h-212c-13.1,0-23.7-10.6-23.7-23.7v-76.1c0-4.8,1.5-9.5,4.2-13.5l200.9-290.9c4.4-6.4,11.7-10.2,19.5-10.2h116.3c18.9,0,30.2,21.1,19.7,36.8l-139.7,210c-10.5,15.7,0.8,36.8,19.7,36.8c13.1,0,23.7-10.6,23.7-23.7v-29.1c0-13.1,10.6-23.7,23.7-23.7h111.2c13.1,0,23.7,10.6,23.7,23.7v29.1c0,13.1,10.6,23.7,23.7,23.7h19.1c13.1,0,23.7,10.6,23.7,23.7v83.4C2826.9,839.6,2816.3,850.2,2803.2,850.2z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            class="st2"
            d="M967.7,1244.7c73.3,0,133.8-23.5,183.7-70.9c59.6-56.7,94.1-137.3,127.5-215.3c37.7-88.1,73.3-171.4,138.4-192.2c28.7-9.2,54.7-6.1,79.7,9.4c109.8,68.3,151.4,340.3,151.8,343l37.1-5.5c-1.8-11.9-44.7-291.9-169.1-369.3c-34.4-21.4-71.7-25.9-110.9-13.3c-81.4,26-120.3,116.9-161.4,213.2c-64,149.5-130.1,304.1-360.4,253.6l-111.4-36c-9.9-3.2-20.4,2.2-23.6,12.1c-3.2,9.9,2.2,20.4,12.1,23.6l114,36.8C908,1241.1,938.8,1244.7,967.7,1244.7z"
          />
        </g>
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="1849.8013"
          y1="1204.4611"
          x2="1548.8699"
          y2="1273.9365"
        >
          <stop offset="0" style="stop-color:#60B0E2" />
          <stop offset="1" style="stop-color:#916EB0" />
        </linearGradient>
        <path
          class="st3"
          d="M1601.5,1429.9l-39.9-193.5c-13.8-66.8,25.1-133.2,90.2-153.9c72.7-23.1,150,19.5,169.3,93.3l49,187.7L1601.5,1429.9z"
        />
        <ellipse
          transform="matrix(-0.9722 0.2342 -0.2342 -0.9722 3755.0674 2358.7136)"
          class="st4"
          cx="1737.5"
          cy="1402.3"
          rx="139.8"
          ry="33.2"
        />
        <ellipse
          transform="matrix(-0.9843 -0.1767 0.1767 -0.9843 3305.9365 3068.8079)"
          class="st5"
          cx="1789.6"
          cy="1387.2"
          rx="26.4"
          ry="11.1"
        />
        <ellipse
          transform="matrix(-0.9843 -0.1767 0.1767 -0.9843 3113.0195 3109.6943)"
          class="st5"
          cx="1695"
          cy="1416.2"
          rx="26.4"
          ry="11.1"
        />
        <path
          class="st6"
          d="M1721.7,1105.2c0,0,57.9,21.1,76.3,81.6c18.4,60.5,34.2,138.2,34.2,138.2l-52.6,1.3L1721.7,1105.2z"
        />
        <polygon
          class="st2"
          points="1670.7,1036.6 1642.8,1085.5 1679.6,1076.9 		"
        />
      </g>
      <g>
        <g>
          <path
            class="st2"
            d="M3360.2,985.5l-14.9,33.1c-2.6-1.2-64.2-29.7-120.7-130.3c-16.3-29.1-41.4-63.1-68-60c-19.1,2.3-69.7,29.3-127.2,231.8c-62.7,220.8-196.9,365-398.7,428.7c-130.6,41.2-292.2-46.8-299-50.6l17.6-31.8c2,1.1,155,84.1,270.5,47.7c189.5-59.8,315.5-195.7,374.7-404c47.3-166.6,99-251,157.9-257.9c37.3-4.4,72.3,21.9,103.9,78.3C3307,960.8,3359.7,985.3,3360.2,985.5L3360.2,985.5z M2349.3,1406.5C2349.3,1406.5,2349.3,1406.5,2349.3,1406.5l-8.8,15.9L2349.3,1406.5L2349.3,1406.5z"
          />
        </g>
        <g>
          <path
            class="st2"
            d="M2012,1274.3l95.7,69.4c8,5.8,9.8,17,4,25c-5.8,8-17,9.8-25,4l-95.7-69.4c-8-5.8-9.8-17-4-25C1992.8,1270.2,2004,1268.5,2012,1274.3z"
          />
        </g>
        <g>
          <path
            class="st2"
            d="M2085.9,1168l95.7,69.4c8,5.8,9.8,17,4,25c-5.8,8-17,9.8-25,4l-95.7-69.4c-8-5.8-9.8-17-4-25C2066.7,1164,2077.9,1162.2,2085.9,1168z"
          />
        </g>
        <polygon
          class="st2"
          points="2420.9,1444.1 2361.5,1452.9 2377.9,1419.8 2434.1,1441.9 		"
        />
        <linearGradient
          id="SVGID_2_"
          gradientUnits="userSpaceOnUse"
          x1="2163.7832"
          y1="1491.4574"
          x2="2299.303"
          y2="1138.416"
        >
          <stop offset="0" style="stop-color:#60B0E2" />
          <stop offset="1" style="stop-color:#916EB0" />
        </linearGradient>
        <path
          class="st7"
          d="M2019.3,1373.5l165.6,107.7c57.2,37.2,133.2,25.2,176.2-27.9c48-59.3,36.5-146.8-25.2-191.7l-156.9-114L2019.3,1373.5z"
        />
        <path
          class="st6"
          d="M2074.8,1381.4l38.1-51.6l195.6,140.9c0,0-46.9,23.4-100.9-2.9C2153.8,1441.6,2074.8,1381.4,2074.8,1381.4z"
        />
      </g>
      <g>
        <path
          class="st1"
          d="M1492.6,1709c21.6,0,32.1-10.8,32.1-23.4c0-27.8-44-18.1-44-32.1c0-4.8,4-8.7,14.4-8.7c6.7,0,13.9,1.9,21,5.9l5.4-13.3c-7-4.4-16.7-6.7-26.2-6.7c-21.5,0-31.9,10.7-31.9,23.6c0,28.1,44,18.4,44,32.5c0,4.6-4.2,8.1-14.6,8.1c-9.1,0-18.6-3.2-24.9-7.9l-5.9,13.2C1468.5,1705.5,1480.6,1709,1492.6,1709z"
        />
        <path
          class="st1"
          d="M1563.2,1708.6c18.5,0,31.9-12.4,31.9-29.9c0-17.5-13.4-29.9-31.9-29.9c-18.5,0-32,12.4-32,29.9C1531.2,1696.2,1544.7,1708.6,1563.2,1708.6L1563.2,1708.6z M1563.2,1694.8c-8.4,0-14.9-6-14.9-16.1c0-10,6.5-16.1,14.9-16.1c8.4,0,14.8,6,14.8,16.1C1578,1688.7,1571.6,1694.8,1563.2,1694.8z"
        />
        <path
          class="st1"
          d="M1622.3,1657.3v-7.7h-16.1v58.1h16.8v-27.4c0-11.1,6.2-16.2,15.4-16.2c1.3,0,2.4,0.1,3.8,0.2v-15.6C1633.4,1648.8,1626.5,1651.7,1622.3,1657.3z"
        />
        <path
          class="st1"
          d="M1668.5,1657.3v-7.7h-16.1v58.1h16.8v-27.4c0-11.1,6.2-16.2,15.4-16.2c1.3,0,2.4,0.1,3.8,0.2v-15.6C1679.5,1648.8,1672.6,1651.7,1668.5,1657.3z"
        />
        <path
          class="st1"
          d="M1742,1649.6l-16.4,39.4l-16.3-39.4h-17.4l25.2,58.5l-0.2,0.5c-2.3,5.2-4.9,7.2-9.5,7.2c-3.3,0-6.9-1.4-9.5-3.7l-6.2,12c3.8,3.3,10.3,5.3,16.2,5.3c10.5,0,18.5-4.2,24.1-18.3l26.2-61.7H1742z"
        />
        <path
          class="st1"
          d="M1768.2,1687.7c-5.9,0-10.5,4.1-10.5,10.4c0,4.4,2.3,7.8,5.8,9.2l-4.8,17.2h10.7l6.2-15.6c2.5-5.9,2.9-8,2.9-10.8C1778.5,1691.9,1774.2,1687.7,1768.2,1687.7z"
        />
        <path
          class="st1"
          d="M1854.5,1632.1h-32.7v75.6h17.5v-20.8h15.2c20.2,0,32.8-10.5,32.8-27.3C1887.3,1642.6,1874.7,1632.1,1854.5,1632.1L1854.5,1632.1z M1853.5,1672.6h-14.3v-26.2h14.3c10.7,0,16.1,4.9,16.1,13.2C1869.6,1667.8,1864.2,1672.6,1853.5,1672.6z"
        />
        <path
          class="st1"
          d="M1921.4,1648.8c-9.3,0-18.7,2.5-25.1,7l6,11.8c4.2-3.3,10.6-5.4,16.7-5.4c9.1,0,13.4,4.2,13.4,11.4h-13.4c-17.7,0-24.9,7.1-24.9,17.4c0,10,8.1,17.6,21.7,17.6c8.5,0,14.6-2.8,17.7-8.1v7.2h15.8v-33.2C1949.4,1657,1939.1,1648.8,1921.4,1648.8L1921.4,1648.8z M1920.1,1697.3c-5.9,0-9.5-2.8-9.5-7c0-3.9,2.5-6.8,10.4-6.8h11.6v5.9C1930.6,1694.7,1925.7,1697.3,1920.1,1697.3z"
        />
        <path
          class="st1"
          d="M2009.2,1649.6v7.5c-4.4-5.6-11.1-8.3-19.2-8.3c-16.1,0-29.1,11.1-29.1,28.1c0,17,13,28.1,29.1,28.1c7.6,0,13.9-2.4,18.4-7.2v2.5c0,10.5-5.2,15.9-17.1,15.9c-7.5,0-15.6-2.6-20.5-6.6l-6.7,12.1c6.8,5.3,17.5,8,28.5,8c21,0,32.6-9.9,32.6-31.5v-48.4H2009.2L2009.2,1649.6z M1993.4,1691.1c-8.9,0-15.3-5.7-15.3-14.3c0-8.5,6.5-14.3,15.3-14.3c8.9,0,15.2,5.7,15.2,14.3C2008.6,1685.4,2002.2,1691.1,1993.4,1691.1z"
        />
        <path
          class="st1"
          d="M2097.8,1678.9c0-18.7-13.2-30.1-30.2-30.1c-17.7,0-31,12.5-31,29.9c0,17.3,13.1,29.9,33.2,29.9c10.5,0,18.6-3.2,24-9.4l-9-9.7c-4,3.8-8.4,5.6-14.6,5.6c-8.9,0-15-4.4-16.6-11.7h44C2097.6,1682,2097.8,1680.2,2097.8,1678.9L2097.8,1678.9z M2067.7,1661.5c7.6,0,13.1,4.8,14.3,12.1h-28.6C2054.5,1666.2,2060,1661.5,2067.7,1661.5z"
        />
        <polygon
          class="st1"
          points="2192.8,1632.1 2192.8,1678 2155.3,1632.1 2140.8,1632.1 2140.8,1707.7 2158.1,1707.7 2158.1,1661.8 2195.8,1707.7 2210.1,1707.7 2210.1,1632.1 		"
        />
        <path
          class="st1"
          d="M2254.5,1708.6c18.5,0,31.9-12.4,31.9-29.9c0-17.5-13.4-29.9-31.9-29.9s-32,12.4-32,29.9C2222.5,1696.2,2236,1708.6,2254.5,1708.6L2254.5,1708.6z M2254.5,1694.8c-8.4,0-14.9-6-14.9-16.1c0-10,6.5-16.1,14.9-16.1s14.8,6,14.8,16.1C2269.3,1688.7,2262.9,1694.8,2254.5,1694.8z"
        />
        <path
          class="st1"
          d="M2330.5,1693.1c-1.8,1.4-4.3,2.2-6.8,2.2c-4.5,0-7.2-2.7-7.2-7.7v-23.7h14.5v-13h-14.5v-14.1h-16.8v14.1h-9v13h9v23.9c0,13.8,8,20.8,21.7,20.8c5.2,0,10.3-1.2,13.7-3.7L2330.5,1693.1z"
        />
        <polygon
          class="st1"
          points="2433.5,1646.2 2433.5,1632.1 2376.3,1632.1 2376.3,1707.7 2393.8,1707.7 2393.8,1680.2 2428.8,1680.2 2428.8,1666.2 2393.8,1666.2 2393.8,1646.2 		"
        />
        <path
          class="st1"
          d="M2470.3,1708.6c18.5,0,31.9-12.4,31.9-29.9c0-17.5-13.4-29.9-31.9-29.9c-18.5,0-32,12.4-32,29.9C2438.3,1696.2,2451.8,1708.6,2470.3,1708.6L2470.3,1708.6z M2470.3,1694.8c-8.4,0-14.9-6-14.9-16.1c0-10,6.5-16.1,14.9-16.1c8.4,0,14.8,6,14.8,16.1C2485.1,1688.7,2478.7,1694.8,2470.3,1694.8z"
        />
        <path
          class="st1"
          d="M2555.1,1649.6v28.7c0,10.7-5.6,15.7-13.4,15.7c-7.5,0-11.8-4.3-11.8-14v-30.3h-16.8v32.8c0,17.9,10.3,26.1,24.8,26.1c7.1,0,13.6-2.7,18-7.8v6.9h16v-58.1H2555.1z"
        />
        <path
          class="st1"
          d="M2622.9,1648.8c-7.9,0-14.7,2.7-19.2,7.7v-6.8h-16.1v58.1h16.8V1679c0-10.7,5.8-15.7,13.9-15.7c7.5,0,11.8,4.3,11.8,13.7v30.7h16.8v-33.3C2647,1656.8,2636.6,1648.8,2622.9,1648.8z"
        />
        <path
          class="st1"
          d="M2705.2,1627.6v28.2c-4.2-4.8-10.3-7-17.4-7c-16.4,0-29.1,11.7-29.1,29.9c0,18.3,12.6,29.9,29.1,29.9c7.8,0,13.9-2.5,18.1-7.6v6.7h16.1v-80.1H2705.2L2705.2,1627.6z M2690.7,1694.8c-8.4,0-14.9-6-14.9-16.1c0-10,6.5-16.1,14.9-16.1c8.3,0,14.8,6,14.8,16.1C2705.5,1688.7,2699.1,1694.8,2690.7,1694.8z"
        />
      </g>
    </g>
  </svg>
`)},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1);class s extends r.a{static get styles(){return[i.a,r.b`
        :host {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 70px;
          z-index: 999;
        }

        nav {
          padding-right: 50px;
        }

        nav a {
          padding: 25px;
          margin: -25px 30px -25px -25px;
          text-decoration: none;
          color: #ffffff;
        }

        nav a[active] {
          color: var(--app-grey-color);
          background-image: url("https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588156329/marcomonzon/blue-splash.png");
          background-position-x: center;
          background-position-y: 45%;
          background-size: 90px;
          background-repeat: no-repeat;
          animation: fadeIn 0.5s ease;
        }
      `]}static get properties(){return{path:{type:String}}}constructor(){super(),this.path=location.pathname}render(){return r.c`
      <nav>
        <a
          href="/"
          ?active="${"/"===this.path||"/"===this.path}"
          @click="${()=>this._updatePath("/")}"
          >HOME</a
        >
        <a
          href="/work"
          ?active="${"/work"===this.path}"
          @click="${()=>this._updatePath("/work")}"
          >WORK</a
        >
        <a
          href="/about"
          ?active="${"/about"===this.path}"
          @click="${()=>this._updatePath("/about")}"
          >ABOUT</a
        >
        <a
          href="/contact"
          ?active="${"/contact"===this.path}"
          @click="${()=>this._updatePath("/contact")}"
          >CONTACT</a
        >
      </nav>
    `}_updatePath(e){this.path=e}}customElements.define("nav-bar",s);var o=n(2);class a extends r.a{static get styles(){return[i.a,r.b`
        :host {
          width: var(--nav-bar-width);
          height: 100vh;
          color: #ffffff50;
          position: absolute;
          left: 0;
          z-index: 10;
        }

        nav {
          --nav-padding: 22px;
          width: calc(var(--nav-bar-width) - var(--nav-padding) * 2);
          height: calc(100% - 2 * var(--nav-padding));
          background-color: var(--app-grey-color);
          box-shadow: 0 0 20px #13a6fb55;
          display: flex;
          flex-flow: column;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: var(--nav-padding);
          z-index: 10;
          transition: all 0.2s ease;
        }

        .menu-button {
          cursor: pointer;
        }

        .social-media-text {
          font-size: 11px;
          writing-mode: vertical-rl;
          text-orientation: upright;
        }

        .social-links {
          height: 170px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .opened {
          width: 300px;
          align-items: flex-end;
        }

        @media screen and (max-width: 720px) {
          :host {
            display: none;
          }
        }
      `]}static get properties(){return{assetsBasePath:{type:String}}}constructor(){super(),this.assetsBasePath="https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588156329/marcomonzon"}firstUpdated(){const e=this.shadowRoot.querySelectorAll("img");e.forEach(e=>e.addEventListener("mouseenter",this._mouseOverHandler)),e.forEach(e=>e.addEventListener("mouseleave",this._mouseOverHandler))}render(){return r.c`
      <nav>
        <div class="menu-button" @click="${this._toogleBar}">
          ${o.a}
        </div>
        <span class="social-media-text">SOCIAL MEDIA</span>
        <div class="social-links">
          <a href="https://github.com/marco238" target="_blank">
            <img src="${this.assetsBasePath}/github-logo.svg" width="34" alt="Github">
          </a>
          <a href="https://www.linkedin.com/in/marcomonzon/" target="_blank">
            <img src="${this.assetsBasePath}/linkedin-logo.svg" width="30" alt="Linkedin">
          </a>
          <a href="mailto:marcomonzip@gmail.com?Subject=Vengo%20desde%20tu%20web">
            <img src="${this.assetsBasePath}/email-logo.svg" width="30" alt="Email">
          </a>
          <a href="https://wa.me/692949758" target="_blank">
            <img src="${this.assetsBasePath}/whatsapp-logo.svg" width="30" alt="Whatsapp">
          </a>
        </div>
      </nav>
    `}_toogleBar(){this.shadowRoot.querySelector("nav").classList.toggle("opened")}_mouseOverHandler(e){"mouseenter"===e.type?this.dispatchEvent(new CustomEvent("showBadge",{composed:!0,detail:{alt:e.target.alt,top:e.clientY-30,left:e.clientX}})):"mouseleave"===e.type&&this.dispatchEvent(new CustomEvent("hideBadge",{composed:!0}))}}function c(e){return e=e||[],Array.isArray(e)?e:[e]}function l(e){return"[Vaadin.Router] "+e}customElements.define("social-media-bar",a);const h=["module","nomodule"];function d(e){if(!e.match(/.+\.[m]?js$/))throw new Error(l(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function p(e){if(!e||!_(e.path))throw new Error(l('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(v(e.action)||Array.isArray(e.children)||v(e.children)||g(t)||n.some(t=>_(e[t]))))throw new Error(l(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(_(t))d(t);else{if(!h.some(e=>e in t))throw new Error(l('Expected route bundle to include either "nomodule" or "module" keys, or both'));h.forEach(e=>e in t&&d(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(l(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function u(e){c(e).forEach(e=>p(e))}function f(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),"module"===t?n.setAttribute("type","module"):"nomodule"===t&&n.setAttribute("nomodule",""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function m(e,t){return!window.dispatchEvent(new CustomEvent("vaadin-router-"+e,{cancelable:"go"===e,detail:t}))}function g(e){return"object"==typeof e&&!!e}function v(e){return"function"==typeof e}function _(e){return"string"==typeof e}function y(e){const t=new Error(l(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const w=new class{};function b(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:r,search:i,hash:s}=t;m("go",{pathname:r,search:i,hash:s})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const x={activate(){window.document.addEventListener("click",b)},inactivate(){window.document.removeEventListener("click",b)}};function C(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;m("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!v(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const S={activate(){window.addEventListener("popstate",C)},inactivate(){window.removeEventListener("popstate",C)}};var A=B,E=N,P=function(e,t){return M(N(e,t))},R=M,k=z,O=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function N(e,t){for(var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/",c=t&&t.delimiters||"./",l=!1;null!==(n=O.exec(e));){var h=n[0],d=n[1],p=n.index;if(o+=e.slice(s,p),s=p+h.length,d)o+=d[1],l=!0;else{var u="",f=e[s],m=n[2],g=n[3],v=n[4],_=n[5];if(!l&&o.length){var y=o.length-1;c.indexOf(o[y])>-1&&(u=o[y],o=o.slice(0,y))}o&&(r.push(o),o="",l=!1);var w=""!==u&&void 0!==f&&f!==u,b="+"===_||"*"===_,x="?"===_||"*"===_,C=u||a,S=g||v;r.push({name:m||i++,prefix:u,delimiter:C,optional:x,repeat:b,partial:w,pattern:S?L(S):"[^"+T(C)+"]+?"})}}return(o||s<e.length)&&r.push(o+e.substr(s)),r}function M(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var i="",s=r&&r.encode||encodeURIComponent,o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var c,l=n?n[a.name]:void 0;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(c=s(l[h],a),!t[o].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(0===h?a.prefix:a.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(i+=a.prefix)}else{if(c=s(String(l),a),!t[o].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');i+=a.prefix+c}}else i+=a}return i}}function T(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function L(e){return e.replace(/([=!:$/()])/g,"\\$1")}function j(e){return e&&e.sensitive?"":"i"}function z(e,t,n){for(var r=(n=n||{}).strict,i=!1!==n.start,s=!1!==n.end,o=T(n.delimiter||"/"),a=n.delimiters||"./",c=[].concat(n.endsWith||[]).map(T).concat("$").join("|"),l=i?"^":"",h=0===e.length,d=0;d<e.length;d++){var p=e[d];if("string"==typeof p)l+=T(p),h=d===e.length-1&&a.indexOf(p[p.length-1])>-1;else{var u=p.repeat?"(?:"+p.pattern+")(?:"+T(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.partial?l+=T(p.prefix)+"("+u+")?":l+="(?:"+T(p.prefix)+"("+u+"))?":l+=T(p.prefix)+"("+u+")"}}return s?(r||(l+="(?:"+o+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+o+"(?="+c+"))?"),h||(l+="(?="+o+"|"+c+")")),new RegExp(l,j(n))}function B(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(B(e[i],t,n).source);return new RegExp("(?:"+r.join("|")+")",j(n))}(e,t,n):function(e,t,n){return z(N(e,n),t,n)}(e,t,n)}A.parse=E,A.compile=P,A.tokensToFunction=R,A.tokensToRegExp=k;const{hasOwnProperty:V}=Object.prototype,U=new Map;function H(e){try{return decodeURIComponent(e)}catch(t){return e}}function I(e,t,n,r,i){let s,o,a=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!s&&(s=function(e,t,n,r,i){const s=`${e}|${n=!!n}`;let o=U.get(s);if(!o){const t=[];o={keys:t,pattern:A(e,t,{end:n,strict:""===e})},U.set(s,o)}const a=o.pattern.exec(t);if(!a)return null;const c=Object.assign({},i);for(let e=1;e<a.length;e++){const t=o.keys[e-1],n=t.name,r=a[e];void 0===r&&V.call(c,n)||(t.repeat?c[n]=r?r.split(t.delimiter).map(H):[]:c[n]=r?H(r):r)}return{path:a[0],keys:(r||[]).concat(o.keys),params:c}}(c,t,!h,r,i),s))return{done:!1,value:{route:e,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;a<h.length;){if(!o){const r=h[a];r.parent=e;let i=s.path.length;i>0&&"/"===t.charAt(i)&&(i+=1),o=I(r,t.substr(i),n,s.keys,s.params)}const r=o.next(l);if(!r.done)return{done:!1,value:r.value};o=null,a++}return{done:!0}}}}function $(e){if(v(e.route.action))return e.route.action(e)}U.set("|false",{keys:[],pattern:/(?:)/});class F{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||$,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){u(e);const t=[...c(e)];this.root.__children=t}addRoutes(e){return u(e),this.root.__children.push(...c(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,_(e)?{pathname:e}:e),n=I(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let i=null,s=null,o=t;function a(e,c=i.value.route,l){const h=null===l&&i.value.route;return i=s||n.next(h),s=null,e||!i.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(c,i.value.route)?i.done?Promise.reject(y(t)):(o=Object.assign(o?{chain:o.chain?o.chain.slice(0):[]}:{},t,i.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(o,i.value),Promise.resolve(r(o)).then(t=>null!=t&&t!==w?(o.result=t.result||t,o):a(e,c,t))):(s=i,Promise.resolve(w))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(o);if(e?console.warn(t):e=new Error(t),e.context=e.context||o,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return o.result=this.errorHandler(e),o;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}F.pathToRegexp=A;const{pathToRegexp:D}=F,q=new Map;function G(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function Z(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function W(e,t={}){if(!(e instanceof F))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,i)=>{let s=G(n,r);if(!s&&(n.clear(),function e(t,n,r){const i=n.name||n.component;if(i&&(t.has(i)?t.get(i).push(n):t.set(i,[n])),Array.isArray(r))for(let i=0;i<r.length;i++){const s=r[i];s.parent=n,e(t,s,s.__children||s.children)}}(n,e.root,e.root.__children),s=G(n,r),!s))throw new Error(`Route "${r}" not found`);let o=q.get(s.fullPath);if(!o){let e=Z(s),t=s.parent;for(;t;){const n=Z(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=D.parse(e),r=D.tokensToFunction(n),i=Object.create(null);for(let e=0;e<n.length;e++)_(n[e])||(i[n[e].name]=!0);o={toPath:r,keys:i},q.set(e,o),s.fullPath=e}let a=o.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const e={},n=Object.keys(i);for(let t=0;t<n.length;t++){const r=n[t];o.keys[r]||(e[r]=i[r])}const r=t.stringifyQueryParams(e);r&&(a+="?"===r.charAt(0)?r:"?"+r)}return a}}let J=[];function Y(e){J.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),J=e}function K(e,t){return e.classList.add(t),new Promise(n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style","position: absolute; "+i),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}function X(e){return null!=e}function Q({pathname:e="",search:t="",hash:n="",chain:r=[],params:i={},redirectFrom:s,resolver:o},a){const c=r.map(e=>e.route);return{baseUrl:o&&o.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:a||c.length&&c[c.length-1]||null,params:i,redirectFrom:s,getUrl:(e={})=>ie(oe.pathToRegexp.compile(se(c))(Object.assign({},i,e)),o)}}function ee(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function te(e,t,n){if(v(e))return e.apply(n,t)}function ne(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?te(n[e],t,n):void 0}function re(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function ie(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function se(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class oe extends F{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&F.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const i=oe.NavigationTrigger;oe.setTriggers.apply(oe,Object.keys(i).map(e=>i[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Q({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();v(t.children)&&(n=n.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{X(e)||v(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!g(e))throw new Error(l(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=c(e);for(let e=0;e<n.length;e++)p(n[e]),t.__children.push(n[e])}(e,t)}));const r={redirect:t=>ee(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then(()=>{if(this.__isLatestRender(e))return te(t.action,[e,r],t)}).then(e=>{return X(e)&&(e instanceof HTMLElement||e.redirect||e===w)?e:_(t.redirect)?r.redirect(t.redirect):t.bundle?(n=t.bundle,_(n)?f(n):Promise.race(h.filter(e=>e in n).map(e=>f(n[e],e)))).then(()=>{},()=>{throw new Error(l(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0;var n}).then(e=>X(e)?e:_(t.component)?r.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},_(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=Q(e),t&&this.__updateBrowserHistory(e,1===n),m("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const i=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),i.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),re(this.__outlet&&this.__outlet.children),this.location=Q(Object.assign(r,{resolver:this})),m("error",Object.assign({router:this,error:e},r)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const r=n!==t?n:e,i=ie(se(n.chain),n.resolver)===n.pathname,s=(e,t=e.route,n)=>e.next(void 0,t,n).then(n=>null===n||n===w?i?e:null!==t.parent?s(e,t.parent,n):n:n);return s(n).then(e=>{if(null===e||e===w)throw y(r);return e&&e!==w&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=Q(e);const n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(l(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let i=Promise.resolve();const s=()=>({cancel:!0}),o=t=>ee(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},n[t]);for(let t=0;t<r.length;t++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:o},r[t]),n[t].element.location=Q(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=Q(e,n[t].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:o},r[t]),r[t].element&&(r[t].element.location=Q(e,r[t].route)));return i.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const i=Q(t);return e.then(e=>{if(this.__isLatestRender(t)){return ne("onBeforeLeave",[i,n,this],r.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,n,r){const i=Q(t,r.route);return e.then(e=>{if(this.__isLatestRender(t)){return ne("onBeforeEnter",[i,n,this],r.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(l("Too many redirects when rendering "+e.from));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(l(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const i=r?"replaceState":"pushState";window.history[i](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const i=t&&t.chain[r].element;if(i){if(i.parentNode!==n)break;e.chain[r].element=i,n=i}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const i=e.chain[t].element;i&&(r.appendChild(i),this.__addedByRouter.set(i,!0),r===n&&this.__appearingContent.push(i),r=i)}}__removeDisappearingContent(){this.__disappearingContent&&re(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(re(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=Q(e);te(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&re(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=Q(e,e.chain[t].route);te(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],i=e.chain;let s;for(let e=i.length;e>0;e--)if(i[e-1].route.animate){s=i[e-1].route.animate;break}if(t&&n&&s){const e=g(s)&&s.leave||"leaving",i=g(s)&&s.enter||"entering";r.push(K(t,e)),r.push(K(n,i))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;_(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){Y(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=W(this)),ie(this.__urlForName(e,t),this)}urlForPath(e,t){return ie(oe.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=_(e)?this.__createUrl(e,"http://a"):e;return m("go",{pathname:t,search:n,hash:r})}}const ae=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ce=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function le(e,t){if("function"!=typeof e)return;const n=ae.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const he=function(e,t){if(window.Vaadin.developmentMode)return le(e,t)};function de(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(ce?!function(){if(ce){if(Object.keys(ce).map(e=>ce[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!le((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),he(de),oe.NavigationTrigger={POPSTATE:S,CLICK:x};class pe extends r.a{static get styles(){return[i.a,r.b`
        :host {
          width: calc(98vw - var(--nav-bar-width));
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
        }

        .presentation-text {
          margin-top: -50px;
          margin-right: 50px;
          margin-left: 50px;
          animation: falling 0.5s ease;
        }

        .presentation-text p {
          font-size: 46px;
          margin: 0 0 15px 0;
        }

        .presentation-text h1 {
          font-family: "Playfair Display", serif;
          font-size: 62px;
          width: 380px;
          margin: 0 0 20px 0;
          line-height: 62px;
        }

        .presentation-text .description {
          display: block;
          font-size: 28px;
          width: 300px;
        }

        .presentation-buttons button,
        .presentation-buttons #hire-me {
          position: relative;
          font-size: 14px;
          margin: 20px 20px 0 0;
          cursor: pointer;
          transition: all 0.1s ease;
          border-radius: 0 0 10px 0;
        }

        .presentation-buttons button:hover,
        .presentation-buttons #hire-me:hover {
          box-shadow: 0 0 10px var(--app-blue-color);
        }

        .presentation-buttons button:focus {
          outline: none;
        }

        .presentation-buttons #hire-me {
          background-color: var(--app-blue-color);
          border: 1px solid var(--app-blue-color);
          color: var(--app-grey-color);
          padding: 10px 20px;
          font-weight: 700;
          text-decoration: none;
        }

        .presentation-buttons button {
          background-color: transparent;
          border: 1px solid var(--app-blue-color);
          color: var(--app-blue-color);
          padding: 10px 15px;
        }

        .presentation-buttons #hire-me span {
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: -7px;
          right: -7px;
          background-color: var(--app-grey-color);
          border-top: 1px solid var(--app-grey-color);
          transform: rotate(-45deg);
        }

        .presentation-buttons button span {
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: -6px;
          right: -6px;
          background-color: var(--app-grey-color);
          border-top: 1px solid var(--app-blue-color);
          transform: rotate(-45deg);
        }

        .feathers {
          position: relative;
          width: 500px;
          height: 400px;
          animation: fadeIn 1s ease-in;
        }

        img:first-child {
          position: absolute;
          width: 500px;
          transform: rotate(-30deg);
          z-index: 1;
        }

        img:nth-child(2) {
          position: absolute;
          width: 220px;
          transform: translate(40px, -50px) scaleX(-1);
          filter: blur(5px);
        }

        img:last-child {
          position: absolute;
          width: 550px;
          transform: rotate(-60deg) translate(0px, 100px);
          filter: blur(2px);
        }
      `]}static get properties(){return{name:{type:String},job:{type:String},mail:{type:String},assetsBasePath:{type:String}}}constructor(){super(),this.name="MARCOS A. MONZÓN",this.job="Frontend Web Developer",this.mail="marcomonzip@gmail.com",this.assetsBasePath="https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588156329/marcomonzon"}render(){return r.c`
      <div class="presentation-text">
        <p>I am,</p>
        <h1>${this.name}</h1>
        <span class="description"> => ${this.job}</span>
        <div class="presentation-buttons">
          <a
            id="hire-me"
            href="mailto:${this.mail}?Subject=Quiero%20contar%20con%20tus%20servicios"
            >HIRE ME</a
          >
          <a id="download-resume" @click="${this._downloadResume}">
            <button>DOWNLOAD RESUME</button>
          </a>
        </div>
      </div>
      <div class="feathers">
        <img src="${this.assetsBasePath}/feather-image.png" alt="Feather" />
        <img src="${this.assetsBasePath}/feather-image.png" alt="Feather" />
        <img src="${this.assetsBasePath}/feather-image.png" alt="Feather" />
      </div>
    `}_downloadResume(){fetch("https://res.cloudinary.com/dlmrvaeyh/image/upload/v1633832484/M.pdf").then(e=>e.blob()).then(e=>{let t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="Marcos_Monzon.pdf",n.click()})}}customElements.define("main-view",pe);class ue extends r.a{static get styles(){return[i.a,r.b`
        :host {
          display: block;
        }

        .badge {
          position: absolute;
          font-size: 12px;
          color: #fff;
          background: linear-gradient(
            45deg,
            var(--app-grey-color),
            var(--app-blue-color)
          );
          border-radius: 2px;
          padding: 2px 5px;
          z-index: 20;
          display: none;
        }

        @media screen and (min-width: 720px) {
          :host {
            padding-left: var(--nav-bar-width);
          }
        }
      `]}firstUpdated(){(e=>{new oe(e).setRoutes([{path:"/",component:"main-view"},{path:"/work",component:"work-view",action:()=>n.e(3).then(n.bind(null,7))},{path:"/about",component:"about-view",action:()=>n.e(0).then(n.bind(null,5))},{path:"(.*)",component:"view-404",action:()=>n.e(2).then(n.bind(null,6))}])})(this.shadowRoot.querySelector("main"))}connectedCallback(){super.connectedCallback(),this.addEventListener("showBadge",this._openBadge),this.addEventListener("hideBadge",this._hideBadge)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("showBadge",this._openBadge),this.removeEventListener("hideBadge",this._hideBadge)}render(){return r.c`
      <social-media-bar></social-media-bar>
      <nav-bar></nav-bar>
      <main></main>
      <span class="badge"></span>
    `}_openBadge(e){let t=this.shadowRoot.querySelector(".badge");t.textContent=e.detail.alt,t.style.display="block",t.style.top=e.detail.top+"px",t.style.left=e.detail.left+"px"}_hideBadge(){let e=this.shadowRoot.querySelector(".badge");e.textContent="",e.style.display="none",e.style.top=0,e.style.left=0}}customElements.define("app-shell",ue)}]);