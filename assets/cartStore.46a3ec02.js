import{f as nh,h as py}from"./entry.4fe45cf4.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},my=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):my(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new gy;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const I=u<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _y=function(n){const e=pf(n);return mf.encodeByteArray(e,!0)},lo=function(n){return _y(n).replace(/\./g,"")},gf=function(n){try{return mf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ho(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!yy(t)||(n[t]=ho(n[t],e[t]));return n}function yy(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=()=>Iy().__FIREBASE_DEFAULTS__,wy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ty=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gf(n[1]);return e&&JSON.parse(e)},nu=()=>{try{return vy()||wy()||Ty()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_f=()=>{var n;return(n=nu())===null||n===void 0?void 0:n.config},Ey=n=>{var e;return(e=nu())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[lo(JSON.stringify(t)),lo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ry(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function ru(){var n;const e=(n=nu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function by(){return typeof self=="object"&&self.self===self}function If(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function iu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vf(){const n=te();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Sy(){return!ru()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xi(){try{return typeof indexedDB=="object"}catch{return!1}}function Py(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="FirebaseError";class ke extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Cy,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ky(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ke(i,a,r)}}function ky(n,e){return n.replace(Dy,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Dy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ny(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function uc(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(ih(s)&&ih(o)){if(!uc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ih(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _r(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function mi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function wf(n,e){const t=new Vy(n,e);return t.subscribe.bind(t)}class Vy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ma),i.error===void 0&&(i.error=Ma),i.complete===void 0&&(i.complete=Ma);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ma(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(n){return n&&n._delegate?n._delegate:n}class et{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ay;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(My(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ly(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ly(n){return n===wn?void 0:n}function My(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Oy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=[];var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const Tf={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Uy=L.INFO,By={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},qy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=By[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uo{constructor(e){this.name=e,this._logLevel=Uy,this._logHandler=qy,this._userLogHandler=null,su.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}function $y(n){su.forEach(e=>{e.setLogLevel(n)})}function zy(n,e){for(const t of su){let r=null;e&&e.level&&(r=Tf[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&n({level:L[s].toLowerCase(),message:a,args:o,type:i.name})}}}const jy=(n,e)=>e.some(t=>n instanceof t);let sh,oh;function Gy(){return sh||(sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wy(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ef=new WeakMap,lc=new WeakMap,Af=new WeakMap,Fa=new WeakMap,ou=new WeakMap;function Ky(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Zt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ef.set(t,n)}).catch(()=>{}),ou.set(e,n),e}function Hy(n){if(lc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});lc.set(n,e)}let hc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return lc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Af.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Qy(n){hc=n(hc)}function Yy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ua(this),e,...t);return Af.set(r,e.sort?e.sort():[e]),Zt(r)}:Wy().includes(n)?function(...e){return n.apply(Ua(this),e),Zt(Ef.get(this))}:function(...e){return Zt(n.apply(Ua(this),e))}}function Jy(n){return typeof n=="function"?Yy(n):(n instanceof IDBTransaction&&Hy(n),jy(n,Gy())?new Proxy(n,hc):n)}function Zt(n){if(n instanceof IDBRequest)return Ky(n);if(Fa.has(n))return Fa.get(n);const e=Jy(n);return e!==n&&(Fa.set(n,e),ou.set(e,n)),e}const Ua=n=>ou.get(n);function Xy(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Zt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Zt(o.result),c.oldVersion,c.newVersion,Zt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Zy=["get","getKey","getAll","getAllKeys","count"],eI=["put","add","delete","clear"],Ba=new Map;function ah(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ba.get(e))return Ba.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=eI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zy.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Ba.set(e,s),s}Qy(n=>({...n,get:(e,t,r)=>ah(e,t)||n.get(e,t,r),has:(e,t)=>!!ah(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function nI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dc="@firebase/app",ch="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Uo("@firebase/app"),rI="@firebase/app-compat",iI="@firebase/analytics-compat",sI="@firebase/analytics",oI="@firebase/app-check-compat",aI="@firebase/app-check",cI="@firebase/auth",uI="@firebase/auth-compat",lI="@firebase/database",hI="@firebase/database-compat",dI="@firebase/functions",fI="@firebase/functions-compat",pI="@firebase/installations",mI="@firebase/installations-compat",gI="@firebase/messaging",_I="@firebase/messaging-compat",yI="@firebase/performance",II="@firebase/performance-compat",vI="@firebase/remote-config",wI="@firebase/remote-config-compat",TI="@firebase/storage",EI="@firebase/storage-compat",AI="@firebase/firestore",RI="@firebase/firestore-compat",bI="firebase",SI="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="[DEFAULT]",PI={[dc]:"fire-core",[rI]:"fire-core-compat",[sI]:"fire-analytics",[iI]:"fire-analytics-compat",[aI]:"fire-app-check",[oI]:"fire-app-check-compat",[cI]:"fire-auth",[uI]:"fire-auth-compat",[lI]:"fire-rtdb",[hI]:"fire-rtdb-compat",[dI]:"fire-fn",[fI]:"fire-fn-compat",[pI]:"fire-iid",[mI]:"fire-iid-compat",[gI]:"fire-fcm",[_I]:"fire-fcm-compat",[yI]:"fire-perf",[II]:"fire-perf-compat",[vI]:"fire-rc",[wI]:"fire-rc-compat",[TI]:"fire-gcs",[EI]:"fire-gcs-compat",[AI]:"fire-fst",[RI]:"fire-fst-compat","fire-js":"fire-js",[bI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Map,Oi=new Map;function fo(n,e){try{n.container.addComponent(e)}catch(t){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Rf(n,e){n.container.addOrOverwriteComponent(e)}function xt(n){const e=n.name;if(Oi.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;Oi.set(e,n);for(const t of tn.values())fo(t,n);return!0}function bf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function CI(n,e,t=en){bf(n,e).clearInstance(t)}function kI(){Oi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new Jn("app","Firebase",DI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=SI;function au(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:en,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(t||(t=_f()),!t)throw Dt.create("no-options");const s=tn.get(i);if(s){if(uc(t,s.options)&&uc(r,s.config))return s;throw Dt.create("duplicate-app",{appName:i})}const o=new Fy(i);for(const c of Oi.values())o.addComponent(c);const a=new NI(t,r,o);return tn.set(i,a),a}function VI(n=en){const e=tn.get(n);if(!e&&n===en&&_f())return au();if(!e)throw Dt.create("no-app",{appName:n});return e}function xI(){return Array.from(tn.values())}async function Sf(n){const e=n.name;tn.has(e)&&(tn.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Ze(n,e,t){var r;let i=(r=PI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(a.join(" "));return}xt(new et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Pf(n,e){if(n!==null&&typeof n!="function")throw Dt.create("invalid-log-argument");zy(n,e)}function Cf(n){$y(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="firebase-heartbeat-database",LI=1,Li="firebase-heartbeat-store";let qa=null;function kf(){return qa||(qa=Xy(OI,LI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Li)}}}).catch(n=>{throw Dt.create("idb-open",{originalErrorMessage:n.message})})),qa}async function MI(n){try{return await(await kf()).transaction(Li).objectStore(Li).get(Df(n))}catch(e){if(e instanceof ke)Fn.warn(e.message);else{const t=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(t.message)}}}async function uh(n,e){try{const r=(await kf()).transaction(Li,"readwrite");await r.objectStore(Li).put(e,Df(n)),await r.done}catch(t){if(t instanceof ke)Fn.warn(t.message);else{const r=Dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fn.warn(r.message)}}}function Df(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=1024,UI=30*24*60*60*1e3;class BI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $I(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=UI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lh(),{heartbeatsToSend:r,unsentEntries:i}=qI(this._heartbeatsCache.heartbeats),s=lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lh(){return new Date().toISOString().substring(0,10)}function qI(n,e=FI){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),hh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class $I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xi()?Py().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await MI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hh(n){return lo(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(n){xt(new et("platform-logger",e=>new tI(e),"PRIVATE")),xt(new et("heartbeat",e=>new BI(e),"PRIVATE")),Ze(dc,ch,n),Ze(dc,ch,"esm2017"),Ze("fire-js","")}zI("");const jI=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Ft,_DEFAULT_ENTRY_NAME:en,_addComponent:fo,_addOrOverwriteComponent:Rf,_apps:tn,_clearComponents:kI,_components:Oi,_getProvider:bf,_registerComponent:xt,_removeServiceInstance:CI,deleteApp:Sf,getApp:VI,getApps:xI,initializeApp:au,onLog:Pf,registerVersion:Ze,setLogLevel:Cf,FirebaseError:ke},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,t){this._delegate=e,this.firebase=t,fo(e,new et("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Sf(this._delegate)))}_getService(e,t=en){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=en){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){fo(this._delegate,e)}_addOrOverwriteComponent(e){Rf(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},dh=new Jn("app-compat","Firebase",WI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Ze,setLogLevel:Cf,onLog:Pf,apps:null,SDK_VERSION:Ft,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:jI}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||en,!rh(e,u))throw dh.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=au(u,l);if(rh(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(xt(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw dh.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&ho(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(){const n=KI(GI);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Nf,extendNamespace:e,createSubscribe:wf,ErrorFactory:Jn,deepExtend:ho});function e(t){ho(n,t)}return n}const HI=Nf();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Uo("@firebase/app-compat"),QI="@firebase/app-compat",YI="0.2.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(n){Ze(QI,YI,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(by()&&self.firebase!==void 0){fh.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&fh.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const At=HI;JI();var XI="firebase",ZI="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.registerVersion(XI,ZI,"app-compat");function cu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const ii={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},sr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is incorrect, malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend.",["unsupported-password-policy-schema-version"]:"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",["password-does-not-meet-requirements"]:"The password does not meet the requirements."}}function Vf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tv=ev,nv=Vf,xf=new Jn("auth","Firebase",Vf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Uo("@firebase/auth");function rv(n,...e){po.logLevel<=L.WARN&&po.warn(`Auth (${Ft}): ${n}`,...e)}function Zs(n,...e){po.logLevel<=L.ERROR&&po.error(`Auth (${Ft}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n,...e){throw uu(n,...e)}function Ae(n,...e){return uu(n,...e)}function Of(n,e,t){const r=Object.assign(Object.assign({},nv()),{[e]:t});return new Jn("auth","Firebase",r).create(e,{appName:n.name})}function zr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&be(n,"argument-error"),Of(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return xf.create(n,...e)}function w(n,e,...t){if(!n)throw uu(e,...t)}function ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Zs(e),new Error(e)}function it(n,e){n||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function lu(){return ph()==="http:"||ph()==="https:"}function ph(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lu()||If()||"connection"in navigator)?navigator.onLine:!0}function sv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.shortDelay=e,this.longDelay=t,it(t>e,"Short delay should be less than long delay!"),this.isMobile=Ry()||iu()}get(){return iv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n,e){it(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=new ds(3e4,6e4);function ae(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ce(n,e,t,r,i={}){return Mf(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$r(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Lf.fetch()(Ff(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Mf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ov),e);try{const i=new uv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw gi(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Of(n,l,u);be(n,l)}}catch(i){if(i instanceof ke)throw i;be(n,"network-request-failed",{message:String(i)})}}async function Ut(n,e,t,r,i={}){const s=await ce(n,e,t,r,i);return"mfaPendingCredential"in s&&be(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ff(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?hu(n.config,i):`${n.config.apiScheme}://${i}`}function cv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ae(this.auth,"network-request-failed")),av.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ae(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n){return n!==void 0&&n.getResponse!==void 0}function gh(n){return n!==void 0&&n.enterprise!==void 0}class lv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(n){return(await ce(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function dv(n,e){return ce(n,"GET","/v2/recaptchaConfig",ae(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(n,e){return ce(n,"POST","/v1/accounts:delete",e)}async function pv(n,e){return ce(n,"POST","/v1/accounts:update",e)}async function mv(n,e){return ce(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gv(n,e=!1){const t=b(n),r=await t.getIdToken(e),i=Bo(r);w(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ei($a(i.auth_time)),issuedAtTime:Ei($a(i.iat)),expirationTime:Ei($a(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $a(n){return Number(n)*1e3}function Bo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Zs("JWT malformed, contained fewer than 3 sections"),null;try{const i=gf(t);return i?JSON.parse(i):(Zs("Failed to decode base64 JWT payload"),null)}catch(i){return Zs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _v(n){const e=Bo(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ke&&yv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function yv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ot(n,mv(t,{idToken:r}));w(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Tv(s.providerUserInfo):[],a=wv(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Uf(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function vv(n){const e=b(n);await Fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Tv(n){return n.map(e=>{var{providerId:t}=e,r=cu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(n,e){const t=await Mf(n,{},async()=>{const r=$r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Ff(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Av(n,e){return ce(n,"POST","/v2/accounts:revokeToken",ae(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_v(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ev(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ui;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Iv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ot(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gv(this,e)}reload(){return vv(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Fi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ot(this,fv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=t.createdAt)!==null&&u!==void 0?u:void 0,D=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:C,emailVerified:V,isAnonymous:$,providerData:B,stsTokenManager:ee}=t;w(C&&ee,e,"internal-error");const Be=Ui.fromJSON(this.name,ee);w(typeof C=="string",e,"internal-error"),Gt(h,e.name),Gt(d,e.name),w(typeof V=="boolean",e,"internal-error"),w(typeof $=="boolean",e,"internal-error"),Gt(f,e.name),Gt(I,e.name),Gt(v,e.name),Gt(y,e.name),Gt(k,e.name),Gt(D,e.name);const Rt=new Vn({uid:C,auth:e,email:d,emailVerified:V,displayName:h,isAnonymous:$,photoURL:I,phoneNumber:f,tenantId:v,stsTokenManager:Be,createdAt:k,lastLoginAt:D});return B&&Array.isArray(B)&&(Rt.providerData=B.map(Fs=>Object.assign({},Fs))),y&&(Rt._redirectEventId=y),Rt}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ui;i.updateFromServerResponse(t);const s=new Vn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Map;function Ke(n){it(n instanceof Function,"Expected a class definition");let e=_h.get(n);return e?(it(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_h.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bf.type="NONE";const Sr=Bf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(n,e,t){return`firebase:${n}:${e}:${t}`}class Ir{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xn(this.userKey,i.apiKey,s),this.fullPersistenceKey=xn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ir(Ke(Sr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ke(Sr);const o=xn(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=Vn._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ir(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ir(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jf(e))return"Blackberry";if(Gf(e))return"Webos";if(du(e))return"Safari";if((e.includes("chrome/")||$f(e))&&!e.includes("edge/"))return"Chrome";if(fs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qf(n=te()){return/firefox\//i.test(n)}function du(n=te()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $f(n=te()){return/crios\//i.test(n)}function zf(n=te()){return/iemobile/i.test(n)}function fs(n=te()){return/android/i.test(n)}function jf(n=te()){return/blackberry/i.test(n)}function Gf(n=te()){return/webos/i.test(n)}function jr(n=te()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Rv(n=te()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function bv(n=te()){var e;return jr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sv(){return vf()&&document.documentMode===10}function Wf(n=te()){return jr(n)||fs(n)||Gf(n)||jf(n)||/windows phone/i.test(n)||zf(n)}function Pv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n,e=[]){let t;switch(n){case"Browser":t=yh(te());break;case"Worker":t=`${yh(te())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ft}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(n,e={}){return ce(n,"GET","/v2/passwordPolicy",ae(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=6;class Nv{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Dv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ih(this),this.idTokenSubscription=new Ih(this),this.beforeStateQueue=new Cv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ke(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ir.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?b(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kv(this),t=new Nv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Av(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ke(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await Ir.create(this,[Ke(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ie(n){return b(n)}class Ih{constructor(e){this.auth=e,this.observer=null,this.addObserver=wf(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function fu(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ae("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",xv().appendChild(r)})}function Hf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Ov="https://www.google.com/recaptcha/enterprise.js?render=",Lv="recaptcha-enterprise",Mv="NO_RECAPTCHA";class Fv{constructor(e){this.type=Lv,this.auth=ie(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{dv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new lv(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;gh(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Mv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&gh(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}fu(Ov+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function vh(n,e,t,r=!1){const i=new Fv(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bi(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await vh(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vh(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function Uv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ke);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Bv(n,e,t){const r=ie(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Qf(e),{host:o,port:a}=qv(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$v()}function Qf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qv(n){const e=Qf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:wh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:wh(o)}}}function wh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $v(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(n,e){return ce(n,"POST","/v1/accounts:resetPassword",ae(n,e))}async function zv(n,e){return ce(n,"POST","/v1/accounts:update",e)}async function jv(n,e){return ce(n,"POST","/v1/accounts:signUp",e)}async function Gv(n,e){return ce(n,"POST","/v1/accounts:update",ae(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(n,e){return Ut(n,"POST","/v1/accounts:signInWithPassword",ae(n,e))}async function qo(n,e){return ce(n,"POST","/v1/accounts:sendOobCode",ae(n,e))}async function Kv(n,e){return qo(n,e)}async function Hv(n,e){return qo(n,e)}async function Qv(n,e){return qo(n,e)}async function Yv(n,e){return qo(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(n,e){return Ut(n,"POST","/v1/accounts:signInWithEmailLink",ae(n,e))}async function Xv(n,e){return Ut(n,"POST","/v1/accounts:signInWithEmailLink",ae(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Gr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new qi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new qi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bi(e,t,"signInWithPassword",Wv);case"emailLink":return Jv(e,{email:this._email,oobCode:this._password});default:be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bi(e,r,"signUpPassword",jv);case"emailLink":return Xv(e,{idToken:t,email:this._email,oobCode:this._password});default:be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(n,e){return Ut(n,"POST","/v1/accounts:signInWithIdp",ae(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="http://localhost";class wt extends Gr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=cu(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new wt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Nt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}buildRequest(){const e={requestUri:Zv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$r(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(n,e){return ce(n,"POST","/v1/accounts:sendVerificationCode",ae(n,e))}async function tw(n,e){return Ut(n,"POST","/v1/accounts:signInWithPhoneNumber",ae(n,e))}async function nw(n,e){const t=await Ut(n,"POST","/v1/accounts:signInWithPhoneNumber",ae(n,e));if(t.temporaryProof)throw gi(n,"account-exists-with-different-credential",t);return t}const rw={USER_NOT_FOUND:"user-not-found"};async function iw(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ut(n,"POST","/v1/accounts:signInWithPhoneNumber",ae(n,t),rw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Gr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new On({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new On({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tw(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nw(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return iw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new On({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ow(n){const e=_r(mi(n)).link,t=e?_r(mi(e)).deep_link_id:null,r=_r(mi(n)).deep_link_id;return(r?_r(mi(r)).link:null)||r||t||e||n}class $o{constructor(e){var t,r,i,s,o,a;const c=_r(mi(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=sw((i=c.mode)!==null&&i!==void 0?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=ow(e);try{return new $o(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.providerId=dn.PROVIDER_ID}static credential(e,t){return qi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=$o.parseLink(t);return w(r,"argument-error"),qi._fromEmailAndCode(e,r.code,r.tenantId)}}dn.PROVIDER_ID="password";dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Bt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class vr extends Wr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return w("providerId"in t&&"signInMethod"in t,"argument-error"),wt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),wt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return vr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return vr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new vr(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Wr{constructor(){super("facebook.com")}static credential(e){return wt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ct.credential(t,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Wr{constructor(){super("github.com")}static credential(e){return wt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="http://localhost";class Pr extends Gr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Nt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Pr(r,s)}static _create(e,t){return new Pr(e,t)}buildRequest(){return{requestUri:aw,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="saml.";class mo extends Bt{constructor(e){w(e.startsWith(cw),"argument-error"),super(e)}static credentialFromResult(e){return mo.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return mo.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Pr.fromJSON(e);return w(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Pr._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Wr{constructor(){super("twitter.com")}static credential(e,t){return wt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return lt.credential(t,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(n,e){return Ut(n,"POST","/v1/accounts:signUp",ae(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=Th(r);return new tt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Th(r);return new tt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Th(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(n){var e;const t=ie(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new tt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Jf(t,{returnSecureToken:!0}),i=await tt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends ke{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new go(e,t,r,i)}}function Xf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(n,e){const t=b(n);await zo(!0,t,e);const{providerUserInfo:r}=await pv(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Zf(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function pu(n,e,t=!1){const r=await Ot(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return tt._forOperation(n,"link",r)}async function zo(n,e,t){await Fi(e);const r=Zf(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";w(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Ot(n,Xf(r,i,e,n),t);w(s.idToken,r,"internal-error");const o=Bo(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),tt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&be(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(n,e,t=!1){const r="signIn",i=await Xf(n,r,e),s=await tt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function jo(n,e){return tp(ie(n),e)}async function np(n,e){const t=b(n);return await zo(!1,t,e.providerId),pu(t,e)}async function rp(n,e){return ep(b(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(n,e){return Ut(n,"POST","/v1/accounts:signInWithCustomToken",ae(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(n,e){const t=ie(n),r=await hw(t,{token:e,returnSecureToken:!0}),i=await tt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?mu._fromServerResponse(e,t):"totpInfo"in t?gu._fromServerResponse(e,t):be(e,"internal-error")}}class mu extends ps{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new mu(t)}}class gu extends ps{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new gu(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n,e,t){var r;w(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),w(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(w(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(w(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(n){const e=ie(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fw(n,e,t){const r=ie(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Go(r,i,t),await Bi(r,i,"getOobCode",Hv)}async function pw(n,e,t){await Yf(b(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_u(n),r})}async function mw(n,e){await Gv(b(n),{oobCode:e})}async function ip(n,e){const t=b(n),r=await Yf(t,{oobCode:e}),i=r.requestType;switch(w(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(r.mfaInfo,t,"internal-error");default:w(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=ps._fromServerResponse(ie(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function gw(n,e){const{data:t}=await ip(b(n),e);return t.email}async function _w(n,e,t){const r=ie(n),o=await Bi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jf).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&_u(n),c}),a=await tt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function yw(n,e,t){return jo(b(n),dn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_u(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(n,e,t){const r=ie(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){w(a.handleCodeInApp,r,"argument-error"),a&&Go(r,o,a)}s(i,t),await Bi(r,i,"getOobCode",Qv)}function vw(n,e){const t=$o.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function ww(n,e,t){const r=b(n),i=dn.credentialWithLink(e,t||Mi());return w(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),jo(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(n,e){return ce(n,"POST","/v1/accounts:createAuthUri",ae(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(n,e){const t=lu()?Mi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await Tw(b(n),r);return i||[]}async function Aw(n,e){const t=b(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Go(t.auth,i,e);const{email:s}=await Kv(t.auth,i);s!==n.email&&await n.reload()}async function Rw(n,e,t){const r=b(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Go(r.auth,s,t);const{email:o}=await Yv(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(n,e){return ce(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=b(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ot(r,bw(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Pw(n,e){return sp(b(n),e,null)}function Cw(n,e){return sp(b(n),null,e)}async function sp(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Ot(n,zv(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n==null?void 0:n.idToken)){const o=(t=(e=Bo(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new wr(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new Dw(s,i);case"github.com":return new Nw(s,i);case"google.com":return new Vw(s,i);case"twitter.com":return new xw(s,i,n.screenName||null);case"custom":case"anonymous":return new wr(s,null);default:return new wr(s,r,i)}}class wr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class op extends wr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class Dw extends wr{constructor(e,t){super(e,"facebook.com",t)}}class Nw extends op{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Vw extends wr{constructor(e,t){super(e,"google.com",t)}}class xw extends op{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Ow(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:kw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new Pn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Pn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Pn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Pn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=ie(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ps._fromServerResponse(r,a));w(i.mfaPendingCredential,r,"internal-error");const o=Pn._fromMfaPendingCredential(i.mfaPendingCredential);return new yu(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await tt._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return w(t.user,r,"internal-error"),tt._forOperation(t.user,t.operationType,u);default:be(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Lw(n,e){var t;const r=b(n),i=e;return w(e.customData.operationType,r,"argument-error"),w((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),yu._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(n,e){return ce(n,"POST","/v2/accounts/mfaEnrollment:start",ae(n,e))}function Fw(n,e){return ce(n,"POST","/v2/accounts/mfaEnrollment:finalize",ae(n,e))}function Uw(n,e){return ce(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ae(n,e))}class Iu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>ps._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Iu(e)}async getSession(){return Pn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Ot(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Ot(this.user,Uw(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const za=new WeakMap;function Bw(n){const e=b(n);return za.has(e)||za.set(e,Iu._fromUser(e)),za.get(e)}const _o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(){const n=te();return du(n)||jr(n)}const $w=1e3,zw=10;class cp extends ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qw()&&Pv(),this.fallbackToPolling=Wf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Sv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zw):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},$w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cp.type="LOCAL";const vu=cp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}up.type="SESSION";const Un=up;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Wo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await jw(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ms("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return window}function Ww(n){de().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){return typeof de().WorkerGlobalScope<"u"&&typeof de().importScripts=="function"}async function Kw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Qw(){return wu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="firebaseLocalStorageDb",Yw=1,yo="firebaseLocalStorage",hp="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ko(n,e){return n.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function Jw(){const n=indexedDB.deleteDatabase(lp);return new gs(n).toPromise()}function fc(){const n=indexedDB.open(lp,Yw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(yo,{keyPath:hp})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(yo)?e(r):(r.close(),await Jw(),e(await fc()))})})}async function Eh(n,e,t){const r=Ko(n,!0).put({[hp]:e,value:t});return new gs(r).toPromise()}async function Xw(n,e){const t=Ko(n,!1).get(e),r=await new gs(t).toPromise();return r===void 0?null:r.value}function Ah(n,e){const t=Ko(n,!0).delete(e);return new gs(t).toPromise()}const Zw=800,eT=3;class dp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>eT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wo._getInstance(Qw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Kw(),!this.activeServiceWorker)return;this.sender=new Gw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fc();return await Eh(e,_o,"1"),await Ah(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Xw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ah(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ko(i,!1).getAll();return new gs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dp.type="LOCAL";const $i=dp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(n,e){return ce(n,"POST","/v2/accounts/mfaSignIn:start",ae(n,e))}function nT(n,e){return ce(n,"POST","/v2/accounts/mfaSignIn:finalize",ae(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=500,iT=6e4,Us=1e12;class sT{constructor(e){this.auth=e,this.counter=Us,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new oT(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Us;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Us;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Us;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class oT{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;w(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=aT(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},iT)},rT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function aT(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=Hf("rcb"),cT=new ds(3e4,6e4),uT="https://www.google.com/recaptcha/api.js?";class lT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=de().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return w(hT(t),e,"argument-error"),this.shouldResolveImmediately(t)&&mh(de().grecaptcha)?Promise.resolve(de().grecaptcha):new Promise((r,i)=>{const s=de().setTimeout(()=>{i(Ae(e,"network-request-failed"))},cT.get());de()[ja]=()=>{de().clearTimeout(s),delete de()[ja];const a=de().grecaptcha;if(!a||!mh(a)){i(Ae(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${uT}?${$r({onload:ja,render:"explicit",hl:t})}`;fu(o).catch(()=>{clearTimeout(s),i(Ae(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=de().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function hT(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class dT{async load(e){return new sT(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="recaptcha",fT={theme:"light",type:"image"};class pT{constructor(e,t,r=Object.assign({},fT)){this.parameters=r,this.type=fp,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ie(e),this.isInvisible=this.parameters.size==="invisible",w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;w(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new dT:new lT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=de()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(lu()&&!wu(),this.auth,"internal-error"),await mT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await hv(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function mT(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=On._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function gT(n,e,t){const r=ie(n),i=await Ho(r,e,b(t));return new Tu(i,s=>jo(r,s))}async function _T(n,e,t){const r=b(n);await zo(!1,r,"phone");const i=await Ho(r.auth,e,b(t));return new Tu(i,s=>np(r,s))}async function yT(n,e,t){const r=b(n),i=await Ho(r.auth,e,b(t));return new Tu(i,s=>rp(r,s))}async function Ho(n,e,t){var r;const i=await t.verify();try{w(typeof i=="string",n,"argument-error"),w(t.type===fp,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return w(o.type==="enroll",n,"internal-error"),(await Mw(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{w(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return w(a,n,"missing-multi-factor-info"),(await tT(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await ew(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function IT(n,e){await pu(b(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.providerId=rt.PROVIDER_ID,this.auth=ie(e)}verifyPhoneNumber(e,t){return Ho(this.auth,e,b(t))}static credential(e,t){return On._fromVerification(e,t)}static credentialFromResult(e){const t=e;return rt.credentialFromTaggedObject(t)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?On._fromTokenResponse(t,r):null}}rt.PROVIDER_ID="phone";rt.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n,e){return e?Ke(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends Gr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vT(n){return tp(n.auth,new Eu(n),n.bypassAuthState)}function wT(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),ep(t,new Eu(n),n.bypassAuthState)}async function TT(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),pu(t,new Eu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vT;case"linkViaPopup":case"linkViaRedirect":return TT;case"reauthViaPopup":case"reauthViaRedirect":return wT;default:be(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=new ds(2e3,1e4);async function AT(n,e,t){const r=ie(n);zr(n,e,Bt);const i=Xn(r,t);return new St(r,"signInViaPopup",e,i).executeNotNull()}async function RT(n,e,t){const r=b(n);zr(r.auth,e,Bt);const i=Xn(r.auth,t);return new St(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function bT(n,e,t){const r=b(n);zr(r.auth,e,Bt);const i=Xn(r.auth,t);return new St(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class St extends pp{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,St.currentPopupAction&&St.currentPopupAction.cancel(),St.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=ms();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,St.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ET.get())};e()}}St.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="pendingRedirect",Ai=new Map;class PT extends pp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ai.get(this.auth._key());if(!e){try{const r=await CT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ai.set(this.auth._key(),e)}return this.bypassAuthState||Ai.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CT(n,e){const t=gp(e),r=mp(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Au(n,e){return mp(n)._set(gp(e),"true")}function kT(){Ai.clear()}function Ru(n,e){Ai.set(n._key(),e)}function mp(n){return Ke(n._redirectPersistence)}function gp(n){return xn(ST,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(n,e,t){return NT(n,e,t)}async function NT(n,e,t){const r=ie(n);zr(n,e,Bt),await r._initializationPromise;const i=Xn(r,t);return await Au(i,r),i._openRedirect(r,e,"signInViaRedirect")}function VT(n,e,t){return xT(n,e,t)}async function xT(n,e,t){const r=b(n);zr(r.auth,e,Bt),await r.auth._initializationPromise;const i=Xn(r.auth,t);await Au(i,r.auth);const s=await _p(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function OT(n,e,t){return LT(n,e,t)}async function LT(n,e,t){const r=b(n);zr(r.auth,e,Bt),await r.auth._initializationPromise;const i=Xn(r.auth,t);await zo(!1,r,e.providerId),await Au(i,r.auth);const s=await _p(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function MT(n,e){return await ie(n)._initializationPromise,Qo(n,e,!1)}async function Qo(n,e,t=!1){const r=ie(n),i=Xn(r,e),o=await new PT(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function _p(n){const e=ms(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=10*60*1e3;class yp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ip(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ae(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rh(e))}saveEventToCache(e){this.cachedEventUids.add(Rh(e)),this.lastProcessedEventTime=Date.now()}}function Rh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ip({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ip(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(n,e={}){return ce(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qT=/^https?/;async function $T(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vp(n);for(const t of e)try{if(zT(t))return}catch{}be(n,"unauthorized-domain")}function zT(n){const e=Mi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!qT.test(t))return!1;if(BT.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=new ds(3e4,6e4);function bh(){const n=de().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function GT(n){return new Promise((e,t)=>{var r,i,s;function o(){bh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bh(),t(Ae(n,"network-request-failed"))},timeout:jT.get()})}if(!((i=(r=de().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=de().gapi)===null||s===void 0)&&s.load)o();else{const a=Hf("iframefcb");return de()[a]=()=>{gapi.load?o():t(Ae(n,"network-request-failed"))},fu(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw eo=null,e})}let eo=null;function WT(n){return eo=eo||GT(n),eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=new ds(5e3,15e3),HT="__/auth/iframe",QT="emulator/auth/iframe",YT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XT(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hu(e,QT):`https://${n.config.authDomain}/${HT}`,r={apiKey:e.apiKey,appName:n.name,v:Ft},i=JT.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${$r(r).slice(1)}`}async function ZT(n){const e=await WT(n),t=de().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:XT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ae(n,"network-request-failed"),a=de().setTimeout(()=>{s(o)},KT.get());function c(){de().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tE=500,nE=600,rE="_blank",iE="http://localhost";class Sh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sE(n,e,t,r=tE,i=nE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},eE),{width:r.toString(),height:i.toString(),top:s,left:o}),u=te().toLowerCase();t&&(a=$f(u)?rE:t),qf(u)&&(e=e||iE,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,I])=>`${d}${f}=${I},`,"");if(bv(u)&&a!=="_self")return oE(e||"",a),new Sh(null);const h=window.open(e||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new Sh(h)}function oE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="__/auth/handler",cE="emulator/auth/handler",uE=encodeURIComponent("fac");async function pc(n,e,t,r,i,s){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ft,eventId:i};if(e instanceof Bt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ny(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Wr){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${uE}=${encodeURIComponent(c)}`:"";return`${lE(n)}?${$r(a).slice(1)}${u}`}function lE({config:n}){return n.emulator?hu(n,cE):`https://${n.authDomain}/${aE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="webStorageSupport";class hE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Un,this._completeRedirectFn=Qo,this._overrideRedirectResult=Ru}async _openPopup(e,t,r,i){var s;it((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await pc(e,t,r,Mi(),i);return sE(e,o,ms())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await pc(e,t,r,Mi(),i);return Ww(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(it(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ZT(e),r=new yp(e);return t.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ga,{type:Ga},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ga];o!==void 0&&t(!!o),be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$T(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wf()||du()||jr()}}const dE=hE;class fE{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ft("unexpected MultiFactorSessionType")}}}class bu extends fE{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new bu(e)}_finalizeEnroll(e,t,r){return Fw(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return nT(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wp{constructor(){}static assertion(e){return bu._fromCredential(e)}}wp.FACTOR_ID="phone";var Ph="@firebase/auth",Ch="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gE(n){xt(new et("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kf(n)},u=new Vv(r,i,s,c);return Uv(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xt(new et("auth-internal",e=>{const t=ie(e.getProvider("auth").getImmediate());return(r=>new pE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Ph,Ch,mE(n)),Ze(Ph,Ch,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=5*60;Ey("authIdTokenMaxAge");gE("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=2e3;async function IE(n,e,t){var r;const{BuildInfo:i}=Bn();it(e.sessionId,"AuthEvent did not contain a session ID");const s=await AE(e.sessionId),o={};return jr()?o.ibi=i.packageName:fs()?o.apn=i.packageName:be(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,pc(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function vE(n){const{BuildInfo:e}=Bn(),t={};jr()?t.iosBundleId=e.packageName:fs()?t.androidPackageName=e.packageName:be(n,"operation-not-supported-in-this-environment"),await vp(n,t)}function wE(n){const{cordova:e}=Bn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,Rv()?"_blank":"_system","location=yes"),t(i)})})}async function TE(n,e,t){const{cordova:r}=Bn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Ae(n,"redirect-cancelled-by-user"))},yE))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),fs()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function EE(n){var e,t,r,i,s,o,a,c,u,l;const h=Bn();w(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function AE(n){const e=RE(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function RE(n){if(it(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=20;class SE extends yp{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function PE(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:DE(),postBody:null,tenantId:n.tenantId,error:Ae(n,"no-auth-event")}}function CE(n,e){return mc()._set(gc(n),e)}async function kh(n){const e=await mc()._get(gc(n));return e&&await mc()._remove(gc(n)),e}function kE(n,e){var t,r;const i=VE(e);if(i.includes("/__/auth/callback")){const s=to(i),o=s.firebaseError?NE(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Ae(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function DE(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<bE;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function mc(){return Ke(vu)}function gc(n){return xn("authEvent",n.config.apiKey,n.name)}function NE(n){try{return JSON.parse(n)}catch{return null}}function VE(n){const e=to(n),t=e.link?decodeURIComponent(e.link):void 0,r=to(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return to(i).link||i||r||t||n}function to(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return _r(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=500;class OE{constructor(){this._redirectPersistence=Un,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Qo,this._overrideRedirectResult=Ru}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new SE(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){be(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){EE(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),kT(),await this._originValidation(e);const o=PE(e,r,i);await CE(e,o);const a=await IE(e,o,t),c=await wE(a);return TE(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vE(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Bn(),o=setTimeout(async()=>{await kh(e),t.onEvent(Dh())},xE),a=async l=>{clearTimeout(o);const h=await kh(e);let d=null;h&&(l==null?void 0:l.url)&&(d=kE(h,l.url)),t.onEvent(d||Dh())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Bn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const LE=OE;function Dh(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ae("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n,e){ie(n)._logFramework(e)}var FE="@firebase/auth-compat",UE="0.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=1e3;function Ri(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function qE(){return Ri()==="http:"||Ri()==="https:"}function Tp(n=te()){return!!((Ri()==="file:"||Ri()==="ionic:"||Ri()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function $E(){return iu()||ru()}function zE(){return vf()&&(document==null?void 0:document.documentMode)===11}function jE(n=te()){return/Edge\/\d+/.test(n)}function GE(n=te()){return zE()||jE(n)}function Ep(){try{const n=self.localStorage,e=ms();if(n)return n.setItem(e,"1"),n.removeItem(e),GE()?xi():!0}catch{return Su()&&xi()}return!1}function Su(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Wa(){return(qE()||If()||Tp())&&!$E()&&Ep()&&!Su()}function Ap(){return Tp()&&typeof document<"u"}async function WE(){return Ap()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},BE);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function KE(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We={LOCAL:"local",NONE:"none",SESSION:"session"},si=w,Rp="persistence";function HE(n,e){if(si(Object.values(We).includes(e),n,"invalid-persistence-type"),iu()){si(e!==We.SESSION,n,"unsupported-persistence-type");return}if(ru()){si(e===We.NONE,n,"unsupported-persistence-type");return}if(Su()){si(e===We.NONE||e===We.LOCAL&&xi(),n,"unsupported-persistence-type");return}si(e===We.NONE||Ep(),n,"unsupported-persistence-type")}async function _c(n){await n._initializationPromise;const e=bp(),t=xn(Rp,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function QE(n,e){const t=bp();if(!t)return[];const r=xn(Rp,n,e);switch(t.getItem(r)){case We.NONE:return[Sr];case We.LOCAL:return[$i,Un];case We.SESSION:return[Un];default:return[]}}function bp(){var n;try{return((n=KE())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=w;class Jt{constructor(){this.browserResolver=Ke(dE),this.cordovaResolver=Ke(LE),this.underlyingResolver=null,this._redirectPersistence=Un,this._completeRedirectFn=Qo,this._overrideRedirectResult=Ru}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Ap()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return YE(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await WE();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n){return n.unwrap()}function JE(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(n){return Pp(n)}function ZE(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new eA(n,Lw(n,e))}else if(r){const i=Pp(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Pp(n){const{_tokenResponse:e}=n instanceof ke?n.customData:n;if(!e)return null;if(!(n instanceof ke)&&"temporaryProof"in e&&"phoneNumber"in e)return rt.credentialFromResult(n);const t=e.providerId;if(!t||t===ii.PASSWORD)return null;let r;switch(t){case ii.GOOGLE:r=ct;break;case ii.FACEBOOK:r=at;break;case ii.GITHUB:r=ut;break;case ii.TWITTER:r=lt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Pr._create(t,a):wt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new vr(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof ke?r.credentialFromError(n):r.credentialFromResult(n)}function qe(n,e){return e.catch(t=>{throw t instanceof ke&&ZE(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:XE(t),additionalUserInfo:Ow(t),user:Pt.getOrCreate(i)}})}async function yc(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>qe(n,t.confirm(r))}}class eA{constructor(e,t){this.resolver=t,this.auth=JE(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return qe(Sp(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._delegate=e,this.multiFactor=Bw(e)}static getOrCreate(e){return Pt.USER_MAP.has(e)||Pt.USER_MAP.set(e,new Pt(e)),Pt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return qe(this.auth,np(this._delegate,e))}async linkWithPhoneNumber(e,t){return yc(this.auth,_T(this._delegate,e,t))}async linkWithPopup(e){return qe(this.auth,bT(this._delegate,e,Jt))}async linkWithRedirect(e){return await _c(ie(this.auth)),OT(this._delegate,e,Jt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return qe(this.auth,rp(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return yc(this.auth,yT(this._delegate,e,t))}reauthenticateWithPopup(e){return qe(this.auth,RT(this._delegate,e,Jt))}async reauthenticateWithRedirect(e){return await _c(ie(this.auth)),VT(this._delegate,e,Jt)}sendEmailVerification(e){return Aw(this._delegate,e)}async unlink(e){return await lw(this._delegate,e),this}updateEmail(e){return Pw(this._delegate,e)}updatePassword(e){return Cw(this._delegate,e)}updatePhoneNumber(e){return IT(this._delegate,e)}updateProfile(e){return Sw(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Rw(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Pt.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=w;class Ic{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;oi(r,"invalid-api-key",{appName:e.name}),oi(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Jt:void 0;this._delegate=t.initialize({options:{persistence:tA(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(tv),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Pt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Bv(this._delegate,e,t)}applyActionCode(e){return mw(this._delegate,e)}checkActionCode(e){return ip(this._delegate,e)}confirmPasswordReset(e,t){return pw(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return qe(this._delegate,_w(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Ew(this._delegate,e)}isSignInWithEmailLink(e){return vw(this._delegate,e)}async getRedirectResult(){oi(Wa(),this._delegate,"operation-not-supported-in-this-environment");const e=await MT(this._delegate,Jt);return e?qe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){ME(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Nh(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Nh(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return Iw(this._delegate,e,t)}sendPasswordResetEmail(e,t){return fw(this._delegate,e,t||void 0)}async setPersistence(e){HE(this._delegate,e);let t;switch(e){case We.SESSION:t=Un;break;case We.LOCAL:t=await Ke($i)._isAvailable()?$i:vu;break;case We.NONE:t=Sr;break;default:return be("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return qe(this._delegate,uw(this._delegate))}signInWithCredential(e){return qe(this._delegate,jo(this._delegate,e))}signInWithCustomToken(e){return qe(this._delegate,dw(this._delegate,e))}signInWithEmailAndPassword(e,t){return qe(this._delegate,yw(this._delegate,e,t))}signInWithEmailLink(e,t){return qe(this._delegate,ww(this._delegate,e,t))}signInWithPhoneNumber(e,t){return yc(this._delegate,gT(this._delegate,e,t))}async signInWithPopup(e){return oi(Wa(),this._delegate,"operation-not-supported-in-this-environment"),qe(this._delegate,AT(this._delegate,e,Jt))}async signInWithRedirect(e){return oi(Wa(),this._delegate,"operation-not-supported-in-this-environment"),await _c(this._delegate),DT(this._delegate,e,Jt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return gw(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Ic.Persistence=We;function Nh(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Pt.getOrCreate(o)),error:e,complete:t}}function tA(n,e){const t=QE(n,e);if(typeof self<"u"&&!t.includes($i)&&t.push($i),typeof window<"u")for(const r of[vu,Un])t.includes(r)||t.push(r);return t.includes(Sr)||t.push(Sr),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.providerId="phone",this._delegate=new rt(Sp(At.auth()))}static credential(e,t){return rt.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Pu.PHONE_SIGN_IN_METHOD=rt.PHONE_SIGN_IN_METHOD;Pu.PROVIDER_ID=rt.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=w;class rA{constructor(e,t,r=At.app()){var i;nA((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new pT(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="auth-compat";function sA(n){n.INTERNAL.registerComponent(new et(iA,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Ic(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:sr.EMAIL_SIGNIN,PASSWORD_RESET:sr.PASSWORD_RESET,RECOVER_EMAIL:sr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:sr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:sr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:sr.VERIFY_EMAIL}},EmailAuthProvider:dn,FacebookAuthProvider:at,GithubAuthProvider:ut,GoogleAuthProvider:ct,OAuthProvider:vr,SAMLAuthProvider:mo,PhoneAuthProvider:Pu,PhoneMultiFactorGenerator:wp,RecaptchaVerifier:rA,TwitterAuthProvider:lt,Auth:Ic,AuthCredential:Gr,Error:ke}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(FE,UE)}sA(At);var oA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Cu=Cu||{},N=oA||self;function Yo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function _s(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function aA(n){return Object.prototype.hasOwnProperty.call(n,Ka)&&n[Ka]||(n[Ka]=++cA)}var Ka="closure_uid_"+(1e9*Math.random()>>>0),cA=0;function uA(n,e,t){return n.call.apply(n.bind,arguments)}function lA(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function De(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?De=uA:De=lA,De.apply(null,arguments)}function Bs(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ye(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function fn(){this.s=this.s,this.o=this.o}var hA=0;fn.prototype.s=!1;fn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),hA!=0)&&aA(this)};fn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cp=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ku(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Vh(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Yo(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Ne(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var dA=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const t=()=>{};N.addEventListener("test",t,e),N.removeEventListener("test",t,e)}catch{}return n}();function zi(n){return/^[\s\xa0]*$/.test(n)}function Jo(){var n=N.navigator;return n&&(n=n.userAgent)?n:""}function ht(n){return Jo().indexOf(n)!=-1}function Du(n){return Du[" "](n),n}Du[" "]=function(){};function fA(n,e){var t=sR;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var pA=ht("Opera"),Cr=ht("Trident")||ht("MSIE"),kp=ht("Edge"),vc=kp||Cr,Dp=ht("Gecko")&&!(Jo().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge"))&&!(ht("Trident")||ht("MSIE"))&&!ht("Edge"),mA=Jo().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge");function Np(){var n=N.document;return n?n.documentMode:void 0}var wc;e:{var Ha="",Qa=function(){var n=Jo();if(Dp)return/rv:([^\);]+)(\)|;)/.exec(n);if(kp)return/Edge\/([\d\.]+)/.exec(n);if(Cr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(mA)return/WebKit\/(\S+)/.exec(n);if(pA)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Qa&&(Ha=Qa?Qa[1]:""),Cr){var Ya=Np();if(Ya!=null&&Ya>parseFloat(Ha)){wc=String(Ya);break e}}wc=Ha}var Tc;if(N.document&&Cr){var xh=Np();Tc=xh||parseInt(wc,10)||void 0}else Tc=void 0;var gA=Tc;function ji(n,e){if(Ne.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Dp){e:{try{Du(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:_A[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ji.$.h.call(this)}}ye(ji,Ne);var _A={2:"touch",3:"pen",4:"mouse"};ji.prototype.h=function(){ji.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ys="closure_listenable_"+(1e6*Math.random()|0),yA=0;function IA(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++yA,this.fa=this.ia=!1}function Xo(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Nu(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function vA(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Vp(n){const e={};for(const t in n)e[t]=n[t];return e}const Oh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xp(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Oh.length;s++)t=Oh[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Zo(n){this.src=n,this.g={},this.h=0}Zo.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ac(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new IA(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Ec(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Cp(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xo(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ac(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Vu="closure_lm_"+(1e6*Math.random()|0),Ja={};function Op(n,e,t,r,i){if(r&&r.once)return Mp(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Op(n,e[s],t,r,i);return null}return t=Lu(t),n&&n[ys]?n.O(e,t,_s(r)?!!r.capture:!!r,i):Lp(n,e,t,!1,r,i)}function Lp(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=_s(i)?!!i.capture:!!i,a=Ou(n);if(a||(n[Vu]=a=new Zo(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=wA(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)dA||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Up(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function wA(){function n(t){return e.call(n.src,n.listener,t)}const e=TA;return n}function Mp(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Mp(n,e[s],t,r,i);return null}return t=Lu(t),n&&n[ys]?n.P(e,t,_s(r)?!!r.capture:!!r,i):Lp(n,e,t,!0,r,i)}function Fp(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Fp(n,e[s],t,r,i);else r=_s(r)?!!r.capture:!!r,t=Lu(t),n&&n[ys]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Ac(s,t,r,i),-1<t&&(Xo(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Ou(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ac(e,t,r,i)),(t=-1<n?e[n]:null)&&xu(t))}function xu(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[ys])Ec(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Up(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Ou(e))?(Ec(t,n),t.h==0&&(t.src=null,e[Vu]=null)):Xo(n)}}}function Up(n){return n in Ja?Ja[n]:Ja[n]="on"+n}function TA(n,e){if(n.fa)n=!0;else{e=new ji(e,this);var t=n.listener,r=n.la||n.src;n.ia&&xu(n),n=t.call(r,e)}return n}function Ou(n){return n=n[Vu],n instanceof Zo?n:null}var Xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lu(n){return typeof n=="function"?n:(n[Xa]||(n[Xa]=function(e){return n.handleEvent(e)}),n[Xa])}function _e(){fn.call(this),this.i=new Zo(this),this.S=this,this.J=null}ye(_e,fn);_e.prototype[ys]=!0;_e.prototype.removeEventListener=function(n,e,t,r){Fp(this,n,e,t,r)};function Re(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Ne(e,n);else if(e instanceof Ne)e.target=e.target||n;else{var i=e;e=new Ne(r,n),xp(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=qs(o,r,!0,e)&&i}if(o=e.g=n,i=qs(o,r,!0,e)&&i,i=qs(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=qs(o,r,!1,e)&&i}_e.prototype.N=function(){if(_e.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Xo(t[r]);delete n.g[e],n.h--}}this.J=null};_e.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};_e.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function qs(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Ec(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Mu=N.JSON.stringify;class EA{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function AA(){var n=Fu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class RA{constructor(){this.h=this.g=null}add(e,t){const r=Bp.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Bp=new EA(()=>new bA,n=>n.reset());class bA{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function SA(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function PA(n){N.setTimeout(()=>{throw n},0)}let Gi,Wi=!1,Fu=new RA,qp=()=>{const n=N.Promise.resolve(void 0);Gi=()=>{n.then(CA)}};var CA=()=>{for(var n;n=AA();){try{n.h.call(n.g)}catch(t){PA(t)}var e=Bp;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Wi=!1};function ea(n,e){_e.call(this),this.h=n||1,this.g=e||N,this.j=De(this.qb,this),this.l=Date.now()}ye(ea,_e);A=ea.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Re(this,"tick"),this.ga&&(Uu(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uu(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}A.N=function(){ea.$.N.call(this),Uu(this),delete this.g};function Bu(n,e,t){if(typeof n=="function")t&&(n=De(n,t));else if(n&&typeof n.handleEvent=="function")n=De(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function $p(n){n.g=Bu(()=>{n.g=null,n.i&&(n.i=!1,$p(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class kA extends fn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$p(this)}N(){super.N(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(n){fn.call(this),this.h=n,this.g={}}ye(Ki,fn);var Lh=[];function zp(n,e,t,r){Array.isArray(t)||(t&&(Lh[0]=t.toString()),t=Lh);for(var i=0;i<t.length;i++){var s=Op(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function jp(n){Nu(n.g,function(e,t){this.g.hasOwnProperty(t)&&xu(e)},n),n.g={}}Ki.prototype.N=function(){Ki.$.N.call(this),jp(this)};Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ta(){this.g=!0}ta.prototype.Ea=function(){this.g=!1};function DA(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function NA(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function yr(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+xA(n,t)+(r?" "+r:"")})}function VA(n,e){n.info(function(){return"TIMEOUT: "+e})}ta.prototype.info=function(){};function xA(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mu(t)}catch{return e}}var Zn={},Mh=null;function na(){return Mh=Mh||new _e}Zn.Ta="serverreachability";function Gp(n){Ne.call(this,Zn.Ta,n)}ye(Gp,Ne);function Hi(n){const e=na();Re(e,new Gp(e))}Zn.STAT_EVENT="statevent";function Wp(n,e){Ne.call(this,Zn.STAT_EVENT,n),this.stat=e}ye(Wp,Ne);function Me(n){const e=na();Re(e,new Wp(e,n))}Zn.Ua="timingevent";function Kp(n,e){Ne.call(this,Zn.Ua,n),this.size=e}ye(Kp,Ne);function Is(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var ra={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Hp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qu(){}qu.prototype.h=null;function Fh(n){return n.h||(n.h=n.i())}function Qp(){}var vs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $u(){Ne.call(this,"d")}ye($u,Ne);function zu(){Ne.call(this,"c")}ye(zu,Ne);var Rc;function ia(){}ye(ia,qu);ia.prototype.g=function(){return new XMLHttpRequest};ia.prototype.i=function(){return{}};Rc=new ia;function ws(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Ki(this),this.P=OA,n=vc?125:void 0,this.V=new ea(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Yp}function Yp(){this.i=null,this.g="",this.h=!1}var OA=45e3,Jp={},bc={};A=ws.prototype;A.setTimeout=function(n){this.P=n};function Sc(n,e,t){n.L=1,n.A=oa(Lt(e)),n.u=t,n.S=!0,Xp(n,null)}function Xp(n,e){n.G=Date.now(),Ts(n),n.B=Lt(n.A);var t=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),om(t.i,"t",r),n.o=0,t=n.l.J,n.h=new Yp,n.g=Sm(n.l,t?e:null,!n.u),0<n.O&&(n.M=new kA(De(n.Pa,n,n.g),n.O)),zp(n.U,n.g,"readystatechange",n.nb),e=n.I?Vp(n.I):{},n.u?(n.v||(n.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,e)):(n.v="GET",n.g.ha(n.B,n.v,null,e)),Hi(),DA(n.j,n.v,n.B,n.m,n.W,n.u)}A.nb=function(n){n=n.target;const e=this.M;e&&pt(n)==3?e.l():this.Pa(n)};A.Pa=function(n){try{if(n==this.g)e:{const l=pt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||vc||this.g&&(this.h.h||this.g.ja()||$h(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Hi(3):Hi(2)),sa(this);var t=this.g.da();this.ca=t;t:if(Zp(this)){var r=$h(this.g);n="";var i=r.length,s=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),bi(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,NA(this.j,this.v,this.B,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zi(a)){var u=a;break t}}u=null}if(t=u)yr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pc(this,t);else{this.i=!1,this.s=3,Me(12),Cn(this),bi(this);break e}}this.S?(em(this,l,o),vc&&this.i&&l==3&&(zp(this.U,this.V,"tick",this.mb),this.V.start())):(yr(this.j,this.m,o,null),Pc(this,o)),l==4&&Cn(this),this.i&&!this.J&&(l==4?Em(this.l,this):(this.i=!1,Ts(this)))}else nR(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),Cn(this),bi(this)}}}catch{}finally{}};function Zp(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function em(n,e,t){let r=!0,i;for(;!n.J&&n.o<t.length;)if(i=LA(n,t),i==bc){e==4&&(n.s=4,Me(14),r=!1),yr(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Jp){n.s=4,Me(15),yr(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else yr(n.j,n.m,i,null),Pc(n,i);Zp(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),e!=4||t.length!=0||n.h.h||(n.s=1,Me(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Qu(e),e.M=!0,Me(11))):(yr(n.j,n.m,t,"[Invalid Chunked Response]"),Cn(n),bi(n))}A.mb=function(){if(this.g){var n=pt(this.g),e=this.g.ja();this.o<e.length&&(sa(this),em(this,n,e),this.i&&n!=4&&Ts(this))}};function LA(n,e){var t=n.o,r=e.indexOf(`
`,t);return r==-1?bc:(t=Number(e.substring(t,r)),isNaN(t)?Jp:(r+=1,r+t>e.length?bc:(e=e.slice(r,r+t),n.o=r+t,e)))}A.cancel=function(){this.J=!0,Cn(this)};function Ts(n){n.Y=Date.now()+n.P,tm(n,n.P)}function tm(n,e){if(n.C!=null)throw Error("WatchDog timer not null");n.C=Is(De(n.lb,n),e)}function sa(n){n.C&&(N.clearTimeout(n.C),n.C=null)}A.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(VA(this.j,this.B),this.L!=2&&(Hi(),Me(17)),Cn(this),this.s=2,bi(this)):tm(this,this.Y-n)};function bi(n){n.l.H==0||n.J||Em(n.l,n)}function Cn(n){sa(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Uu(n.V),jp(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Pc(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Cc(t.i,n))){if(!n.K&&Cc(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)wo(t),la(t);else break e;Hu(t),Me(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Is(De(t.ib,t),6e3));if(1>=um(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else kn(t,11)}else if((n.K||t.g==n)&&wo(t),!zi(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const I=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ju(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,K(r.I,r.F,v))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=bm(r,r.J?r.pa:null,r.Y),o.K){lm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(sa(a),Ts(a)),r.g=o}else wm(r);0<t.j.length&&ha(t)}else u[0]!="stop"&&u[0]!="close"||kn(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kn(t,7):Ku(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Hi(4)}catch{}}function MA(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Yo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function FA(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Yo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function nm(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Yo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=FA(n),r=MA(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UA(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ln(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Ln){this.h=n.h,Io(this,n.j),this.s=n.s,this.g=n.g,vo(this,n.m),this.l=n.l;var e=n.i,t=new Qi;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Uh(this,t),this.o=n.o}else n&&(e=String(n).match(rm))?(this.h=!1,Io(this,e[1]||"",!0),this.s=_i(e[2]||""),this.g=_i(e[3]||"",!0),vo(this,e[4]),this.l=_i(e[5]||"",!0),Uh(this,e[6]||"",!0),this.o=_i(e[7]||"")):(this.h=!1,this.i=new Qi(null,this.h))}Ln.prototype.toString=function(){var n=[],e=this.j;e&&n.push(yi(e,Bh,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(yi(e,Bh,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(yi(t,t.charAt(0)=="/"?$A:qA,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",yi(t,jA)),n.join("")};function Lt(n){return new Ln(n)}function Io(n,e,t){n.j=t?_i(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function vo(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Uh(n,e,t){e instanceof Qi?(n.i=e,GA(n.i,n.h)):(t||(e=yi(e,zA)),n.i=new Qi(e,n.h))}function K(n,e,t){n.i.set(e,t)}function oa(n){return K(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function _i(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function yi(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,BA),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function BA(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Bh=/[#\/\?@]/g,qA=/[#\?:]/g,$A=/[#\?]/g,zA=/[#\?@]/g,jA=/#/g;function Qi(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function pn(n){n.g||(n.g=new Map,n.h=0,n.i&&UA(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}A=Qi.prototype;A.add=function(n,e){pn(this),this.i=null,n=Kr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function im(n,e){pn(n),e=Kr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function sm(n,e){return pn(n),e=Kr(n,e),n.g.has(e)}A.forEach=function(n,e){pn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};A.ta=function(){pn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};A.Z=function(n){pn(this);let e=[];if(typeof n=="string")sm(this,n)&&(e=e.concat(this.g.get(Kr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};A.set=function(n,e){return pn(this),this.i=null,n=Kr(this,n),sm(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};A.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function om(n,e,t){im(n,e),0<t.length&&(n.i=null,n.g.set(Kr(n,e),ku(t)),n.h+=t.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Kr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function GA(n,e){e&&!n.j&&(pn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(im(this,r),om(this,i,t))},n)),n.j=e}var WA=class{constructor(n,e){this.g=n,this.map=e}};function am(n){this.l=n||KA,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ka&&N.g.Ka()&&N.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KA=10;function cm(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function um(n){return n.h?1:n.g?n.g.size:0}function Cc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ju(n,e){n.g?n.g.add(e):n.h=e}function lm(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}am.prototype.cancel=function(){if(this.i=hm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function hm(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return ku(n.i)}var HA=class{stringify(n){return N.JSON.stringify(n,void 0)}parse(n){return N.JSON.parse(n,void 0)}};function QA(){this.g=new HA}function YA(n,e,t){const r=t||"";try{nm(n,function(i,s){let o=i;_s(i)&&(o=Mu(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function JA(n,e){const t=new ta;if(N.Image){const r=new Image;r.onload=Bs($s,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Bs($s,t,r,"TestLoadImage: error",!1,e),r.onabort=Bs($s,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Bs($s,t,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function $s(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function aa(n){this.l=n.ec||null,this.j=n.ob||!1}ye(aa,qu);aa.prototype.g=function(){return new ca(this.l,this.j)};aa.prototype.i=function(n){return function(){return n}}({});function ca(n,e){_e.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Gu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ye(ca,_e);var Gu=0;A=ca.prototype;A.open=function(n,e){if(this.readyState!=Gu)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Yi(this)};A.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||N).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=Gu};A.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dm(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function dm(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}A.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Es(this):Yi(this),this.readyState==3&&dm(this)}};A.Za=function(n){this.g&&(this.response=this.responseText=n,Es(this))};A.Ya=function(n){this.g&&(this.response=n,Es(this))};A.ka=function(){this.g&&Es(this)};function Es(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Yi(n)}A.setRequestHeader=function(n,e){this.v.append(n,e)};A.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Yi(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var XA=N.JSON.parse;function se(n){_e.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fm,this.L=this.M=!1}ye(se,_e);var fm="",ZA=/^https?$/i,eR=["POST","PUT"];A=se.prototype;A.Oa=function(n){this.M=n};A.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rc.g(),this.C=this.u?Fh(this.u):Fh(Rc),this.g.onreadystatechange=De(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){qh(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=N.FormData&&n instanceof N.FormData,!(0<=Cp(eR,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{gm(this),0<this.B&&((this.L=tR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=De(this.ua,this)):this.A=Bu(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){qh(this,s)}};function tR(n){return Cr&&typeof n.timeout=="number"&&n.ontimeout!==void 0}A.ua=function(){typeof Cu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function qh(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,pm(n),ua(n)}function pm(n){n.F||(n.F=!0,Re(n,"complete"),Re(n,"error"))}A.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Re(this,"complete"),Re(this,"abort"),ua(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ua(this,!0)),se.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?mm(this):this.kb())};A.kb=function(){mm(this)};function mm(n){if(n.h&&typeof Cu<"u"&&(!n.C[1]||pt(n)!=4||n.da()!=2)){if(n.v&&pt(n)==4)Bu(n.La,0,n);else if(Re(n,"readystatechange"),pt(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(rm)[1]||null;!i&&N.self&&N.self.location&&(i=N.self.location.protocol.slice(0,-1)),r=!ZA.test(i?i.toLowerCase():"")}t=r}if(t)Re(n,"complete"),Re(n,"success");else{n.m=6;try{var s=2<pt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",pm(n)}}finally{ua(n)}}}}function ua(n,e){if(n.g){gm(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Re(n,"ready");try{t.onreadystatechange=r}catch{}}}function gm(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}A.isActive=function(){return!!this.g};function pt(n){return n.g?n.g.readyState:0}A.da=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),XA(e)}};function $h(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case fm:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function nR(n){const e={};n=(n.g&&2<=pt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(zi(n[r]))continue;var t=SA(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}vA(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _m(n){let e="";return Nu(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Wu(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=_m(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):K(n,e,t))}function ai(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function ym(n){this.Ga=0,this.j=[],this.l=new ta,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ai("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ai("baseRetryDelayMs",5e3,n),this.hb=ai("retryDelaySeedMs",1e4,n),this.eb=ai("forwardChannelMaxRetries",2,n),this.xa=ai("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new am(n&&n.concurrentRequestLimit),this.Ja=new QA,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=ym.prototype;A.ra=8;A.H=1;function Ku(n){if(Im(n),n.H==3){var e=n.W++,t=Lt(n.I);if(K(t,"SID",n.K),K(t,"RID",e),K(t,"TYPE","terminate"),As(n,t),e=new ws(n,n.l,e),e.L=2,e.A=oa(Lt(t)),t=!1,N.navigator&&N.navigator.sendBeacon)try{t=N.navigator.sendBeacon(e.A.toString(),"")}catch{}!t&&N.Image&&(new Image().src=e.A,t=!0),t||(e.g=Sm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ts(e)}Rm(n)}function la(n){n.g&&(Qu(n),n.g.cancel(),n.g=null)}function Im(n){la(n),n.u&&(N.clearTimeout(n.u),n.u=null),wo(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function ha(n){if(!cm(n.i)&&!n.m){n.m=!0;var e=n.Na;Gi||qp(),Wi||(Gi(),Wi=!0),Fu.add(e,n),n.C=0}}function rR(n,e){return um(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Is(De(n.Na,n,e),Am(n,n.C)),n.C++,!0)}A.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new ws(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Vp(s),xp(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=vm(this,i,e),t=Lt(this.I),K(t,"RID",n),K(t,"CVER",22),this.F&&K(t,"X-HTTP-Session-Id",this.F),As(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(_m(s)))+"&"+e:this.o&&Wu(t,this.o,s)),ju(this.i,i),this.bb&&K(t,"TYPE","init"),this.P?(K(t,"$req",e),K(t,"SID","null"),i.aa=!0,Sc(i,t,null)):Sc(i,t,e),this.H=2}}else this.H==3&&(n?zh(this,n):this.j.length==0||cm(this.i)||zh(this))};function zh(n,e){var t;e?t=e.m:t=n.W++;const r=Lt(n.I);K(r,"SID",n.K),K(r,"RID",t),K(r,"AID",n.V),As(n,r),n.o&&n.s&&Wu(r,n.o,n.s),t=new ws(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=vm(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),ju(n.i,t),Sc(t,r,e)}function As(n,e){n.na&&Nu(n.na,function(t,r){K(e,r,t)}),n.h&&nm({},function(t,r){K(e,r,t)})}function vm(n,e,t){t=Math.min(n.j.length,t);var r=n.h?De(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{YA(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function wm(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Gi||qp(),Wi||(Gi(),Wi=!0),Fu.add(e,n),n.A=0}}function Hu(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Is(De(n.Ma,n),Am(n,n.A)),n.A++,!0)}A.Ma=function(){if(this.u=null,Tm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Is(De(this.jb,this),n)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Me(10),la(this),Tm(this))};function Qu(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function Tm(n){n.g=new ws(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Lt(n.wa);K(e,"RID","rpc"),K(e,"SID",n.K),K(e,"AID",n.V),K(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&K(e,"TO",n.qa),K(e,"TYPE","xmlhttp"),As(n,e),n.o&&n.s&&Wu(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.A=oa(Lt(e)),t.u=null,t.S=!0,Xp(t,n)}A.ib=function(){this.v!=null&&(this.v=null,la(this),Hu(this),Me(19))};function wo(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function Em(n,e){var t=null;if(n.g==e){wo(n),Qu(n),n.g=null;var r=2}else if(Cc(n.i,e))t=e.F,lm(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.u?e.u.length:0,e=Date.now()-e.G;var i=n.C;r=na(),Re(r,new Kp(r,t)),ha(n)}else wm(n);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&rR(n,e)||r==2&&Hu(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:kn(n,5);break;case 4:kn(n,10);break;case 3:kn(n,6);break;default:kn(n,2)}}}function Am(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function kn(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=De(n.pb,n);t||(t=new Ln("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||Io(t,"https"),oa(t)),JA(t.toString(),r)}else Me(2);n.H=0,n.h&&n.h.za(e),Rm(n),Im(n)}A.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Me(2)):(this.l.info("Failed to ping google.com"),Me(1))};function Rm(n){if(n.H=0,n.ma=[],n.h){const e=hm(n.i);(e.length!=0||n.j.length!=0)&&(Vh(n.ma,e),Vh(n.ma,n.j),n.i.i.length=0,ku(n.j),n.j.length=0),n.h.ya()}}function bm(n,e,t){var r=t instanceof Ln?Lt(t):new Ln(t);if(r.g!="")e&&(r.g=e+"."+r.g),vo(r,r.m);else{var i=N.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ln(null);r&&Io(s,r),e&&(s.g=e),i&&vo(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&K(r,t,e),K(r,"VER",n.ra),As(n,r),r}function Sm(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n.Ha&&!n.va?new se(new aa({ob:t})):new se(n.va),e.Oa(n.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function Pm(){}A=Pm.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function To(){if(Cr&&!(10<=Number(gA)))throw Error("Environmental error: no available transport.")}To.prototype.g=function(n,e){return new He(n,e)};function He(n,e){_e.call(this),this.g=new ym(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!zi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zi(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Hr(this)}ye(He,_e);He.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Me(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=bm(n,null,n.Y),ha(n)};He.prototype.close=function(){Ku(this.g)};He.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Mu(n),n=t);e.j.push(new WA(e.fb++,n)),e.H==3&&ha(e)};He.prototype.N=function(){this.g.h=null,delete this.j,Ku(this.g),delete this.g,He.$.N.call(this)};function Cm(n){$u.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ye(Cm,$u);function km(){zu.call(this),this.status=1}ye(km,zu);function Hr(n){this.g=n}ye(Hr,Pm);Hr.prototype.Ba=function(){Re(this.g,"a")};Hr.prototype.Aa=function(n){Re(this.g,new Cm(n))};Hr.prototype.za=function(n){Re(this.g,new km)};Hr.prototype.ya=function(){Re(this.g,"b")};function iR(){this.blockSize=-1}function st(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ye(st,iR);st.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Za(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}st.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Za(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Za(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Za(this,r),i=0;break}}this.h=i,this.i+=e};st.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function j(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var sR={};function Yu(n){return-128<=n&&128>n?fA(n,function(e){return new j([e|0],0>e?-1:0)}):new j([n|0],0>n?-1:0)}function mt(n){if(isNaN(n)||!isFinite(n))return Tr;if(0>n)return Te(mt(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=kc;return new j(e,0)}function Dm(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Te(Dm(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=mt(Math.pow(e,8)),r=Tr,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=mt(Math.pow(e,s)),r=r.R(s).add(mt(o))):(r=r.R(t),r=r.add(mt(o)))}return r}var kc=4294967296,Tr=Yu(0),Dc=Yu(1),jh=Yu(16777216);A=j.prototype;A.ea=function(){if(Ye(this))return-Te(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:kc+r)*e,e*=kc}return n};A.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ct(this))return"0";if(Ye(this))return"-"+Te(this).toString(n);for(var e=mt(Math.pow(n,6)),t=this,r="";;){var i=Ao(t,e).g;t=Eo(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Ct(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ct(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Ye(n){return n.h==-1}A.X=function(n){return n=Eo(this,n),Ye(n)?-1:Ct(n)?0:1};function Te(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new j(t,~n.h).add(Dc)}A.abs=function(){return Ye(this)?Te(this):this};A.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new j(t,t[t.length-1]&-2147483648?-1:0)};function Eo(n,e){return n.add(Te(e))}A.R=function(n){if(Ct(this)||Ct(n))return Tr;if(Ye(this))return Ye(n)?Te(this).R(Te(n)):Te(Te(this).R(n));if(Ye(n))return Te(this.R(Te(n)));if(0>this.X(jh)&&0>n.X(jh))return mt(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,zs(t,2*r+2*i),t[2*r+2*i+1]+=s*c,zs(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,zs(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,zs(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new j(t,0)};function zs(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function ci(n,e){this.g=n,this.h=e}function Ao(n,e){if(Ct(e))throw Error("division by zero");if(Ct(n))return new ci(Tr,Tr);if(Ye(n))return e=Ao(Te(n),e),new ci(Te(e.g),Te(e.h));if(Ye(e))return e=Ao(n,Te(e)),new ci(Te(e.g),e.h);if(30<n.g.length){if(Ye(n)||Ye(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Dc,r=e;0>=r.X(n);)t=Gh(t),r=Gh(r);var i=or(t,1),s=or(r,1);for(r=or(r,2),t=or(t,2);!Ct(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=or(r,1),t=or(t,1)}return e=Eo(n,i.R(e)),new ci(i,e)}for(i=Tr;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=mt(t),o=s.R(e);Ye(o)||0<o.X(n);)t-=r,s=mt(t),o=s.R(e);Ct(s)&&(s=Dc),i=i.add(s),n=Eo(n,o)}return new ci(i,n)}A.gb=function(n){return Ao(this,n).h};A.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new j(t,this.h&n.h)};A.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new j(t,this.h|n.h)};A.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new j(t,this.h^n.h)};function Gh(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new j(t,n.h)}function or(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new j(i,n.h)}To.prototype.createWebChannel=To.prototype.g;He.prototype.send=He.prototype.u;He.prototype.open=He.prototype.m;He.prototype.close=He.prototype.close;ra.NO_ERROR=0;ra.TIMEOUT=8;ra.HTTP_ERROR=6;Hp.COMPLETE="complete";Qp.EventType=vs;vs.OPEN="a";vs.CLOSE="b";vs.ERROR="c";vs.MESSAGE="d";_e.prototype.listen=_e.prototype.O;se.prototype.listenOnce=se.prototype.P;se.prototype.getLastError=se.prototype.Sa;se.prototype.getLastErrorCode=se.prototype.Ia;se.prototype.getStatus=se.prototype.da;se.prototype.getResponseJson=se.prototype.Wa;se.prototype.getResponseText=se.prototype.ja;se.prototype.send=se.prototype.ha;se.prototype.setWithCredentials=se.prototype.Oa;st.prototype.digest=st.prototype.l;st.prototype.reset=st.prototype.reset;st.prototype.update=st.prototype.j;j.prototype.add=j.prototype.add;j.prototype.multiply=j.prototype.R;j.prototype.modulo=j.prototype.gb;j.prototype.compare=j.prototype.X;j.prototype.toNumber=j.prototype.ea;j.prototype.toString=j.prototype.toString;j.prototype.getBits=j.prototype.D;j.fromNumber=mt;j.fromString=Dm;var oR=function(){return new To},aR=function(){return na()},ec=ra,cR=Hp,uR=Zn,Wh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},js=Qp,lR=se,hR=st,Er=j;const Kh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Uo("@firebase/firestore");function dr(){return nn.logLevel}function dR(n){nn.setLogLevel(n)}function _(n,...e){if(nn.logLevel<=L.DEBUG){const t=e.map(Ju);nn.debug(`Firestore (${Qr}): ${n}`,...t)}}function ue(n,...e){if(nn.logLevel<=L.ERROR){const t=e.map(Ju);nn.error(`Firestore (${Qr}): ${n}`,...t)}}function ot(n,...e){if(nn.logLevel<=L.WARN){const t=e.map(Ju);nn.warn(`Firestore (${Qr}): ${n}`,...t)}}function Ju(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(n="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+n;throw ue(e),new Error(e)}function S(n,e){n||R()}function fR(n,e){n||R()}function E(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends ke{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(me.UNAUTHENTICATED))}shutdown(){}}class mR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gR{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ge;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ge,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ge)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(S(typeof r.accessToken=="string"),new Nm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string"),new me(e)}}class _R{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yR{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new _R(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(S(typeof t.token=="string"),this.R=t.token,new IR(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=wR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function x(n,e){return n<e?-1:n>e?1:0}function kr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function xm(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new g(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Z(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new Z(0,0))}static max(){return new P(new Z(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,r){t===void 0?t=0:t>e.length&&R(),r===void 0?r=e.length-t:r>e.length-t&&R(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ji.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ji?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class U extends Ji{construct(e,t,r){return new U(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new g(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new U(t)}static emptyPath(){return new U([])}}const TR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends Ji{construct(e,t,r){return new J(e,t,r)}static isValidIdentifier(e){return TR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new g(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new g(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new g(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new g(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new J(t)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(U.fromString(e))}static fromName(e){return new T(U.fromString(e).popFirst(5))}static empty(){return new T(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&U.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new U(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Nc(n){return n.fields.find(e=>e.kind===2)}function Tn(n){return n.fields.filter(e=>e.kind!==2)}Ro.UNKNOWN_ID=-1;class no{constructor(e,t){this.fieldPath=e,this.kind=t}}class Xi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Xi(0,Qe.min())}}function Om(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=P.fromTimestamp(r===1e9?new Z(t+1,0):new Z(t,r));return new Qe(i,T.empty(),e)}function Lm(n){return new Qe(n.readTime,n.key,-1)}class Qe{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qe(P.min(),T.empty(),-1)}static max(){return new Qe(P.max(),T.empty(),-1)}}function Xu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=T.comparator(n.documentKey,e.documentKey),t!==0?t:x(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==Mm)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,r)=>{t(e)})}static reject(e){return new p((t,r)=>{r(e)})}static waitFor(e){return new p((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=p.resolve(!1);for(const r of e)t=t.next(i=>i?p.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new p((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new p((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ge,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Si(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Zu(r.target.error);this.V.reject(new Si(e,i))}}static open(e,t,r,i){try{return new da(t,e.transaction(i,r))}catch(s){throw new Si(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new AR(t)}}class nt{constructor(e,t,r){this.name=e,this.version=t,this.p=r,nt.S(te())===12.2&&ue("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),En(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xi())return!1;if(nt.C())return!0;const e=te(),t=nt.S(e),r=0<t&&t<10,i=nt.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Si(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new g(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new g(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Si(e,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=da.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),p.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ER{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return En(this.k.delete())}}class Si extends g{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function gn(n){return n.name==="IndexedDbTransactionError"}class AR{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),En(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),En(this.store.add(e))}get(e){return En(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),En(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),En(this.store.count())}W(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new p((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new p((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.G(i,t)}Z(e){const t=this.cursor({});return new p((r,i)=>{t.onerror=s=>{const o=Zu(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,t){const r=[];return new p((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new ER(a),u=t(a.primaryKey,a.value,c);if(u instanceof p){const l=u.catch(h=>(c.done(),p.reject(h)));r.push(l)}c.isDone?i():c.$===null?a.continue():a.continue(c.$)}}).next(()=>p.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function En(n){return new p((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Zu(r.target.error);t(i)}})}let Hh=!1;function Zu(n){const e=nt.S(te());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new g("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Hh||(Hh=!0,setTimeout(()=>{throw r},0)),r}}return n}class RR{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){_("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(t){gn(t)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await mn(t)}await this.ee(6e4)})}}class bR{constructor(e,t){this.localStore=e,this.persistence=t}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ne(t,e))}ne(e,t){const r=new Set;let i=t,s=!0;return p.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}re(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ie(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Lm(s);Xu(o,r)>0&&(r=o)}),new Qe(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}ze._e=-1;function Rs(n){return n==null}function Zi(n){return n===0&&1/n==-1/0}function Um(n){return typeof n=="number"&&Number.isInteger(n)&&!Zi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qh(e)),e=SR(n.get(t),e);return Qh(e)}function SR(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Qh(n){return n+""}function gt(n){const e=n.length;if(S(e>=2),e===2)return S(n.charAt(0)===""&&n.charAt(1)===""),U.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&R(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:R()}s=o+2}return new U(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n,e){return[n,Fe(e)]}function Bm(n,e,t){return[n,Fe(e),t]}const PR={},CR=["prefixPath","collectionGroup","readTime","documentId"],kR=["prefixPath","collectionGroup","documentId"],DR=["collectionGroup","readTime","prefixPath","documentId"],NR=["canonicalId","targetId"],VR=["targetId","path"],xR=["path","targetId"],OR=["collectionId","parent"],LR=["indexId","uid"],MR=["uid","sequenceNumber"],FR=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],UR=["indexId","uid","orderedDocumentKey"],BR=["userId","collectionPath","documentId"],qR=["userId","collectionPath","largestBatchId"],$R=["userId","collectionGroup","largestBatchId"],qm=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zR=[...qm,"documentOverlays"],$m=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zm=$m,jR=[...zm,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Fm{constructor(e,t){super(),this.ae=e,this.currentSequenceNumber=t}}function Ie(n,e){const t=E(n);return nt.M(t.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function er(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new W(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new W(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gs(this.root,e,this.comparator,!0)}}class Gs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:we.RED,this.left=i!=null?i:we.EMPTY,this.right=s!=null?s:we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new we(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return we.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,r,i,s){return this}insert(e,t,r){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.comparator=e,this.data=new W(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xh(this.data.getIterator())}getIteratorFrom(e){return new Xh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof G)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new G(this.comparator);return t.data=e,t}}class Xh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ar(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.fields=e,e.sort(J.comparator)}static empty(){return new je([])}unionWith(e){let t=new G(J.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Gm("Invalid base64 string: "+s):s}}(e);return new fe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const WR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(n){if(S(!!n),typeof n=="string"){let e=0;const t=WR.exec(n);if(S(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sn(n){return typeof n=="string"?fe.fromBase64String(n):fe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function el(n){const e=n.mapValue.fields.__previous_value__;return fa(e)?el(e):e}function es(n){const e=rn(n.mapValue.fields.__local_write_time__.timestampValue);return new Z(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class on{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new on("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof on&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},io={nullValue:"NULL_VALUE"};function qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fa(n)?4:Wm(n)?9007199254740991:10:R()}function Tt(n,e){if(n===e)return!0;const t=qn(n);if(t!==qn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return es(n).isEqual(es(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=rn(i.timestampValue),a=rn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return sn(i.bytesValue).isEqual(sn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return re(i.geoPointValue.latitude)===re(s.geoPointValue.latitude)&&re(i.geoPointValue.longitude)===re(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return re(i.integerValue)===re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=re(i.doubleValue),a=re(s.doubleValue);return o===a?Zi(o)===Zi(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return kr(n.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Jh(o)!==Jh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Tt(o[c],a[c])))return!1;return!0}(n,e);default:return R()}}function ts(n,e){return(n.values||[]).find(t=>Tt(t,e))!==void 0}function an(n,e){if(n===e)return 0;const t=qn(n),r=qn(e);if(t!==r)return x(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return x(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=re(s.integerValue||s.doubleValue),c=re(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Zh(n.timestampValue,e.timestampValue);case 4:return Zh(es(n),es(e));case 5:return x(n.stringValue,e.stringValue);case 6:return function(s,o){const a=sn(s),c=sn(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=x(a[u],c[u]);if(l!==0)return l}return x(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=x(re(s.latitude),re(o.latitude));return a!==0?a:x(re(s.longitude),re(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=an(a[u],c[u]);if(l)return l}return x(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Xt.mapValue&&o===Xt.mapValue)return 0;if(s===Xt.mapValue)return 1;if(o===Xt.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=x(c[h],l[h]);if(d!==0)return d;const f=an(a[c[h]],u[l[h]]);if(f!==0)return f}return x(c.length,l.length)}(n.mapValue,e.mapValue);default:throw R()}}function Zh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return x(n,e);const t=rn(n),r=rn(e),i=x(t.seconds,r.seconds);return i!==0?i:x(t.nanos,r.nanos)}function Dr(n){return xc(n)}function xc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=rn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return sn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return T.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=xc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${xc(t.fields[o])}`;return i+"}"}(n.mapValue):R()}function $n(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Oc(n){return!!n&&"integerValue"in n}function ns(n){return!!n&&"arrayValue"in n}function ed(n){return!!n&&"nullValue"in n}function td(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function so(n){return!!n&&"mapValue"in n}function Pi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return er(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Pi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Wm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function HR(n){return"nullValue"in n?io:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?$n(on.empty(),T.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:R()}function QR(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?$n(on.empty(),T.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Xt:R()}function nd(n,e){const t=an(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function rd(n,e){const t=an(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.value=e}static empty(){return new Ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!so(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pi(t)}setAll(e){let t=J.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Pi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());so(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];so(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){er(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ee(Pi(this.value))}}function Km(n){const e=[];return er(n.fields,(t,r)=>{const i=new J([t]);if(so(r)){const s=Km(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new H(e,0,P.min(),P.min(),P.min(),Ee.empty(),0)}static newFoundDocument(e,t,r,i){return new H(e,1,t,P.min(),r,i,0)}static newNoDocument(e,t){return new H(e,2,t,P.min(),P.min(),Ee.empty(),0)}static newUnknownDocument(e,t){return new H(e,3,t,P.min(),P.min(),Ee.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof H&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new H(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.position=e,this.inclusive=t}}function id(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),t.key):r=an(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t="asc"){this.field=e,this.dir=t}}function YR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{}class M extends Hm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new JR(e,t,r):t==="array-contains"?new eb(e,r):t==="in"?new eg(e,r):t==="not-in"?new tb(e,r):t==="array-contains-any"?new nb(e,r):new M(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new XR(e,r):new ZR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(an(t,this.value)):t!==null&&qn(this.value)===qn(t)&&this.matchesComparison(an(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class z extends Hm{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new z(e,t)}matches(e){return Nr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Nr(n){return n.op==="and"}function Lc(n){return n.op==="or"}function tl(n){return Qm(n)&&Nr(n)}function Qm(n){for(const e of n.filters)if(e instanceof z)return!1;return!0}function Mc(n){if(n instanceof M)return n.field.canonicalString()+n.op.toString()+Dr(n.value);if(tl(n))return n.filters.map(e=>Mc(e)).join(",");{const e=n.filters.map(t=>Mc(t)).join(",");return`${n.op}(${e})`}}function Ym(n,e){return n instanceof M?function(r,i){return i instanceof M&&r.op===i.op&&r.field.isEqual(i.field)&&Tt(r.value,i.value)}(n,e):n instanceof z?function(r,i){return i instanceof z&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Ym(o,i.filters[a]),!0):!1}(n,e):void R()}function Jm(n,e){const t=n.filters.concat(e);return z.create(t,n.op)}function Xm(n){return n instanceof M?function(t){return`${t.field.canonicalString()} ${t.op} ${Dr(t.value)}`}(n):n instanceof z?function(t){return t.op.toString()+" {"+t.getFilters().map(Xm).join(" ,")+"}"}(n):"Filter"}class JR extends M{constructor(e,t,r){super(e,t,r),this.key=T.fromName(r.referenceValue)}matches(e){const t=T.comparator(e.key,this.key);return this.matchesComparison(t)}}class XR extends M{constructor(e,t){super(e,"in",t),this.keys=Zm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ZR extends M{constructor(e,t){super(e,"not-in",t),this.keys=Zm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>T.fromName(r.referenceValue))}class eb extends M{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ns(t)&&ts(t.arrayValue,this.value)}}class eg extends M{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ts(this.value.arrayValue,t)}}class tb extends M{constructor(e,t){super(e,"not-in",t)}matches(e){if(ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ts(this.value.arrayValue,t)}}class nb extends M{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ns(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ts(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Fc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new rb(n,e,t,r,i,s,o)}function zn(n){const e=E(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Mc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Dr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Dr(r)).join(",")),e.ce=t}return e.ce}function bs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!YR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ym(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sd(n.startAt,e.startAt)&&sd(n.endAt,e.endAt)}function bo(n){return T.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function So(n,e){return n.filters.filter(t=>t instanceof M&&t.field.isEqual(e))}function od(n,e,t){let r=io,i=!0;for(const s of So(n,e)){let o=io,a=!0;switch(s.op){case"<":case"<=":o=HR(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=io}nd({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];nd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function ad(n,e,t){let r=Xt,i=!0;for(const s of So(n,e)){let o=Xt,a=!0;switch(s.op){case">=":case">":o=QR(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Xt}rd({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];rd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function tg(n,e,t,r,i,s,o,a){return new qt(n,e,t,r,i,s,o,a)}function Yr(n){return new qt(n)}function cd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nl(n){return n.collectionGroup!==null}function Ar(n){const e=E(n);if(e.le===null){e.le=[];const t=new Set;for(const s of e.explicitOrderBy)e.le.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new G(J.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.le.push(new rs(s,r))}),t.has(J.keyField().canonicalString())||e.le.push(new rs(J.keyField(),r))}return e.le}function Ue(n){const e=E(n);return e.he||(e.he=ib(e,Ar(n))),e.he}function ib(n,e){if(n.limitType==="F")return Fc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rs(i.field,s)});const t=n.endAt?new cn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new cn(n.startAt.position,n.startAt.inclusive):null;return Fc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Uc(n,e){const t=n.filters.concat([e]);return new qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Po(n,e,t){return new qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ss(n,e){return bs(Ue(n),Ue(e))&&n.limitType===e.limitType}function ng(n){return`${zn(Ue(n))}|lt:${n.limitType}`}function fr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Xm(i)).join(", ")}]`),Rs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Dr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Dr(i)).join(",")),`Target(${r})`}(Ue(n))}; limitType=${n.limitType})`}function Ps(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):T.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Ar(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=id(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Ar(r),i)||r.endAt&&!function(o,a,c){const u=id(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Ar(r),i))}(n,e)}function rg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ig(n){return(e,t)=>{let r=!1;for(const i of Ar(n)){const s=sb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function sb(n,e,t){const r=n.field.isKeyField()?T.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?an(c,u):R()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){er(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=new W(T.comparator);function Ge(){return ob}const sg=new W(T.comparator);function Ii(...n){let e=sg;for(const t of n)e=e.insert(t.key,t);return e}function og(n){let e=sg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function _t(){return Ci()}function ag(){return Ci()}function Ci(){return new _n(n=>n.toString(),(n,e)=>n.isEqual(e))}const ab=new W(T.comparator),cb=new G(T.comparator);function O(...n){let e=cb;for(const t of n)e=e.add(t);return e}const ub=new G(x);function rl(){return ub}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zi(e)?"-0":e}}function ug(n){return{integerValue:""+n}}function lg(n,e){return Um(e)?ug(e):cg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this._=void 0}}function lb(n,e,t){return n instanceof Vr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fa(s)&&(s=el(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof jn?dg(n,e):n instanceof Gn?fg(n,e):function(i,s){const o=hg(i,s),a=ud(o)+ud(i.Ie);return Oc(o)&&Oc(i.Ie)?ug(a):cg(i.serializer,a)}(n,e)}function hb(n,e,t){return n instanceof jn?dg(n,e):n instanceof Gn?fg(n,e):t}function hg(n,e){return n instanceof xr?function(r){return Oc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vr extends pa{}class jn extends pa{constructor(e){super(),this.elements=e}}function dg(n,e){const t=pg(e);for(const r of n.elements)t.some(i=>Tt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Gn extends pa{constructor(e){super(),this.elements=e}}function fg(n,e){let t=pg(e);for(const r of n.elements)t=t.filter(i=>!Tt(i,r));return{arrayValue:{values:t}}}class xr extends pa{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ud(n){return re(n.integerValue||n.doubleValue)}function pg(n){return ns(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.field=e,this.transform=t}}function db(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof jn&&i instanceof jn||r instanceof Gn&&i instanceof Gn?kr(r.elements,i.elements,Tt):r instanceof xr&&i instanceof xr?Tt(r.Ie,i.Ie):r instanceof Vr&&i instanceof Vr}(n.transform,e.transform)}class fb{constructor(e,t){this.version=e,this.transformResults=t}}class X{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new X}static exists(e){return new X(void 0,e)}static updateTime(e){return new X(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ma{}function mg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Xr(n.key,X.none()):new Jr(n.key,n.data,X.none());{const t=n.data,r=Ee.empty();let i=new G(J.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new $t(n.key,r,new je(i.toArray()),X.none())}}function pb(n,e,t){n instanceof Jr?function(i,s,o){const a=i.value.clone(),c=hd(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof $t?function(i,s,o){if(!oo(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=hd(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(gg(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ki(n,e,t,r){return n instanceof Jr?function(s,o,a,c){if(!oo(s.precondition,o))return a;const u=s.value.clone(),l=dd(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof $t?function(s,o,a,c){if(!oo(s.precondition,o))return a;const u=dd(s.fieldTransforms,c,o),l=o.data;return l.setAll(gg(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return oo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function mb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=hg(r.transform,i||null);s!=null&&(t===null&&(t=Ee.empty()),t.set(r.field,s))}return t||null}function ld(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&kr(r,i,(s,o)=>db(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Jr extends ma{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $t extends ma{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function hd(n,e,t){const r=new Map;S(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hb(o,a,t[i]))}return r}function dd(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,lb(s,o,e))}return r}class Xr extends ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class il extends ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pb(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ki(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ki(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ag();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=mg(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),O())}isEqual(e){return this.batchId===e.batchId&&kr(this.mutations,e.mutations,(t,r)=>ld(t,r))&&kr(this.baseMutations,e.baseMutations,(t,r)=>ld(t,r))}}class ol{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){S(e.mutations.length===r.length);let i=function(){return ab}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ol(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,F;function _g(n){switch(n){default:return R();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function yg(n){if(n===void 0)return ue("GRPC error has no .code"),m.UNKNOWN;switch(n){case he.OK:return m.OK;case he.CANCELLED:return m.CANCELLED;case he.UNKNOWN:return m.UNKNOWN;case he.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case he.INTERNAL:return m.INTERNAL;case he.UNAVAILABLE:return m.UNAVAILABLE;case he.UNAUTHENTICATED:return m.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case he.NOT_FOUND:return m.NOT_FOUND;case he.ALREADY_EXISTS:return m.ALREADY_EXISTS;case he.PERMISSION_DENIED:return m.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case he.ABORTED:return m.ABORTED;case he.OUT_OF_RANGE:return m.OUT_OF_RANGE;case he.UNIMPLEMENTED:return m.UNIMPLEMENTED;case he.DATA_LOSS:return m.DATA_LOSS;default:return R()}}(F=he||(he={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=new Er([4294967295,4294967295],0);function fd(n){const e=Ig().encode(n),t=new hR;return t.update(e),new Uint8Array(t.digest())}function pd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Er([t,r],0),new Er([i,s],0)]}class cl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new vi(`Invalid padding: ${t}`);if(r<0)throw new vi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new vi(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Er.fromNumber(this.Te)}de(e,t,r){let i=e.add(t.multiply(Er.fromNumber(r)));return i.compare(_b)===1&&(i=new Er([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=fd(e),[r,i]=pd(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new cl(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=fd(e),[r,i]=pd(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ds.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ks(P.min(),i,new W(x),Ge(),O())}}class Ds{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ds(r,t,O(),O(),O())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,r,i){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=i}}class vg{constructor(e,t){this.targetId=e,this.fe=t}}class wg{constructor(e,t,r=fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class md{constructor(){this.ge=0,this.pe=_d(),this.ye=fe.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=O(),t=O(),r=O();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:R()}}),new Ds(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=_d()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,S(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class yb{constructor(e){this.Le=e,this.ke=new Map,this.qe=Ge(),this.Qe=gd(),this.Ke=new W(x)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:R()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.fe.count,i=this.Ye(t);if(i){const s=i.target;if(bo(s))if(r===0){const o=new T(s.path);this.We(t,o,H.newNoDocument(o,P.min()))}else S(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=sn(r).toUint8Array()}catch(c){if(c instanceof Gm)return ot("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new cl(o,i,s)}catch(c){return ot(c instanceof vi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&bo(a.target)){const c=new T(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,H.newNoDocument(c,e))}s.De&&(t.set(o,s.ve()),s.Fe())}});let r=O();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new ks(e,t,this.Ke,this.qe,r);return this.qe=Ge(),this.Qe=gd(),this.Ke=new W(x),i}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new md,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new G(x),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new md),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function gd(){return new W(T.comparator)}function _d(){return new W(T.comparator)}const Ib=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wb=(()=>({and:"AND",or:"OR"}))();class Tb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bc(n,e){return n.useProto3Json||Rs(e)?e:{value:e}}function Or(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Eb(n,e){return Or(n,e.toTimestamp())}function le(n){return S(!!n),P.fromTimestamp(function(t){const r=rn(t);return new Z(r.seconds,r.nanos)}(n))}function ul(n,e){return function(r){return new U(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Eg(n){const e=U.fromString(n);return S(Ng(e)),e}function is(n,e){return ul(n.databaseId,e.path)}function yt(n,e){const t=Eg(e);if(t.get(1)!==n.databaseId.projectId)throw new g(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new g(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new T(Rg(t))}function qc(n,e){return ul(n.databaseId,e)}function Ag(n){const e=Eg(n);return e.length===4?U.emptyPath():Rg(e)}function ss(n){return new U(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Rg(n){return S(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function yd(n,e,t){return{name:is(n,e),fields:t.value.mapValue.fields}}function bg(n,e,t){const r=yt(n,e.name),i=le(e.updateTime),s=e.createTime?le(e.createTime):P.min(),o=new Ee({mapValue:{fields:e.fields}}),a=H.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Ab(n,e){return"found"in e?function(r,i){S(!!i.found),i.found.name,i.found.updateTime;const s=yt(r,i.found.name),o=le(i.found.updateTime),a=i.found.createTime?le(i.found.createTime):P.min(),c=new Ee({mapValue:{fields:i.found.fields}});return H.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){S(!!i.missing),S(!!i.readTime);const s=yt(r,i.missing),o=le(i.readTime);return H.newNoDocument(s,o)}(n,e):R()}function Rb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(S(l===void 0||typeof l=="string"),fe.fromBase64String(l||"")):(S(l===void 0||l instanceof Uint8Array),fe.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?m.UNKNOWN:yg(u.code);return new g(l,u.message||"")}(o);t=new wg(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yt(n,r.document.name),s=le(r.document.updateTime),o=r.document.createTime?le(r.document.createTime):P.min(),a=new Ee({mapValue:{fields:r.document.fields}}),c=H.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new ao(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yt(n,r.document),s=r.readTime?le(r.readTime):P.min(),o=H.newNoDocument(i,s),a=r.removedTargetIds||[];t=new ao([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yt(n,r.document),s=r.removedTargetIds||[];t=new ao([],s,i,null)}else{if(!("filter"in e))return R();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gb(i,s),a=r.targetId;t=new vg(a,o)}}return t}function os(n,e){let t;if(e instanceof Jr)t={update:yd(n,e.key,e.value)};else if(e instanceof Xr)t={delete:is(n,e.key)};else if(e instanceof $t)t={update:yd(n,e.key,e.data),updateMask:Db(e.fieldMask)};else{if(!(e instanceof il))return R();t={verify:is(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Vr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof jn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw R()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Eb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:R()}(n,e.precondition)),t}function $c(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?X.updateTime(le(s.updateTime)):s.exists!==void 0?X.exists(s.exists):X.none()}(e.currentDocument):X.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)S(a.setToServerValue==="REQUEST_TIME"),c=new Vr;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new jn(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Gn(l)}else"increment"in a?c=new xr(o,a.increment):R();const u=J.fromServerFormat(a.fieldPath);return new Cs(u,c)}(n,i)):[];if(e.update){e.update.name;const i=yt(n,e.update.name),s=new Ee({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new je(u.map(l=>J.fromServerFormat(l)))}(e.updateMask);return new $t(i,s,o,t,r)}return new Jr(i,s,t,r)}if(e.delete){const i=yt(n,e.delete);return new Xr(i,t)}if(e.verify){const i=yt(n,e.verify);return new il(i,t)}return R()}function bb(n,e){return n&&n.length>0?(S(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?le(i.updateTime):le(s);return o.isEqual(P.min())&&(o=le(s)),new fb(o,i.transformResults||[])}(t,e))):[]}function Sg(n,e){return{documents:[qc(n,e.path)]}}function Pg(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=qc(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=qc(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Dg(z.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:pr(h.field),direction:Pb(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Bc(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Cg(n){let e=Ag(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){S(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=kg(h);return d instanceof z&&tl(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(I){return new rs(mr(I.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Rs(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new cn(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new cn(f,d)}(t.endAt)),tg(e,i,o,s,a,"F",c,u)}function Sb(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=mr(t.unaryFilter.field);return M.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mr(t.unaryFilter.field);return M.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mr(t.unaryFilter.field);return M.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mr(t.unaryFilter.field);return M.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(n):n.fieldFilter!==void 0?function(t){return M.create(mr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return z.create(t.compositeFilter.filters.map(r=>kg(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return R()}}(t.compositeFilter.op))}(n):R()}function Pb(n){return Ib[n]}function Cb(n){return vb[n]}function kb(n){return wb[n]}function pr(n){return{fieldPath:n.canonicalString()}}function mr(n){return J.fromServerFormat(n.fieldPath)}function Dg(n){return n instanceof M?function(t){if(t.op==="=="){if(td(t.value))return{unaryFilter:{field:pr(t.field),op:"IS_NAN"}};if(ed(t.value))return{unaryFilter:{field:pr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(td(t.value))return{unaryFilter:{field:pr(t.field),op:"IS_NOT_NAN"}};if(ed(t.value))return{unaryFilter:{field:pr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pr(t.field),op:Cb(t.op),value:t.value}}}(n):n instanceof z?function(t){const r=t.getFilters().map(i=>Dg(i));return r.length===1?r[0]:{compositeFilter:{op:kb(t.op),filters:r}}}(n):R()}function Db(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ng(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,r,i,s=P.min(),o=P.min(),a=fe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.ut=e}}function Nb(n,e){let t;if(e.document)t=bg(n.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=T.fromSegments(e.noDocument.path),i=Kn(e.noDocument.readTime);t=H.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return R();{const r=T.fromSegments(e.unknownDocument.path),i=Kn(e.unknownDocument.version);t=H.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Z(i[0],i[1]);return P.fromTimestamp(s)}(e.readTime)),t}function Id(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Co(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:is(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Or(s,o.version.toTimestamp()),createTime:Or(s,o.createTime.toTimestamp())}}(n.ut,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Wn(e.version)};else{if(!e.isUnknownDocument())return R();r.unknownDocument={path:t.path.toArray(),version:Wn(e.version)}}return r}function Co(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Wn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Kn(n){const e=new Z(n.seconds,n.nanoseconds);return P.fromTimestamp(e)}function An(n,e){const t=(e.baseMutations||[]).map(s=>$c(n.ut,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>$c(n.ut,s)),i=Z.fromMillis(e.localWriteTimeMs);return new sl(e.batchId,i,t,r)}function wi(n){const e=Kn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Kn(n.lastLimboFreeSnapshotVersion):P.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return S(s.documents.length===1),Ue(Yr(Ag(s.documents[0])))}(n.query):function(s){return Ue(Cg(s))}(n.query),new kt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,fe.fromBase64String(n.resumeToken))}function xg(n,e){const t=Wn(e.snapshotVersion),r=Wn(e.lastLimboFreeSnapshotVersion);let i;i=bo(e.target)?Sg(n.ut,e.target):Pg(n.ut,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:zn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ll(n){const e=Cg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Po(e,e.limit,"L"):e}function tc(n,e){return new al(e.largestBatchId,$c(n.ut,e.overlayMutation))}function vd(n,e){const t=e.path.lastSegment();return[n,Fe(e.path.popLast()),t]}function wd(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Wn(r.readTime),documentKey:Fe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{getBundleMetadata(e,t){return Td(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Kn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Td(e).put(function(i){return{bundleId:i.id,createTime:Wn(le(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ed(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:ll(s.bundledQuery),readTime:Kn(s.readTime)}}(r)})}saveNamedQuery(e,t){return Ed(e).put(function(i){return{name:i.name,readTime:Wn(le(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Td(n){return Ie(n,"bundles")}function Ed(n){return Ie(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.serializer=e,this.userId=t}static ct(e,t){const r=t.uid||"";return new ga(e,r)}getOverlay(e,t){return ui(e).get(vd(this.userId,t)).next(r=>r?tc(this.serializer,r):null)}getOverlays(e,t){const r=_t();return p.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new al(t,o);i.push(this.lt(e,a))}),p.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Fe(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ui(e).H("collectionPathOverlayIndex",a))}),p.waitFor(s)}getOverlaysForCollection(e,t,r){const i=_t(),s=Fe(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ui(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=tc(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=_t();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ui(e).Y({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=tc(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}lt(e,t){return ui(e).put(function(i,s,o){const[a,c,u]=vd(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:os(i.ut,o.mutation)}}(this.serializer,this.userId,t))}}function ui(n){return Ie(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(re(e.integerValue));else if("doubleValue"in e){const r=re(e.doubleValue);isNaN(r)?this.Tt(t,13):(this.Tt(t,15),Zi(r)?t.Et(0):t.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(t,20),typeof r=="string"?t.dt(r):(t.dt(`${r.seconds||""}`),t.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(sn(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(t,45),t.Et(r.latitude||0),t.Et(r.longitude||0)}else"mapValue"in e?Wm(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):R()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){const r=e.fields||{};this.Tt(t,55);for(const i of Object.keys(r))this.At(i,t),this.Pt(r[i],t)}yt(e,t){const r=e.values||[];this.Tt(t,50);for(const i of r)this.Pt(i,t)}ft(e,t){this.Tt(t,37),T.fromName(e).path.forEach(r=>{this.Tt(t,60),this.wt(r,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}Rn.St=new Rn;function xb(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Ad(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=xb(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class Ob{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Dt(r.value),r=t.next();this.Ct()}vt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=t.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(e){const t=this.Bt(e),r=Ad(t);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}kt(e){const t=this.Bt(e),r=Ad(t);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Dt(e){const t=255&e;t===0?(this.Qt(0),this.Qt(255)):t===255?(this.Qt(255),this.Qt(0)):this.Qt(t)}Ft(e){const t=255&e;t===0?(this.$t(0),this.$t(255)):t===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Lb{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class Mb{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class li{constructor(){this.Wt=new Ob,this.Gt=new Lb(this.Wt),this.zt=new Mb(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Ht(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new bn(this.indexId,this.documentKey,this.arrayValue,r)}}function Wt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Rd(n.arrayValue,e.arrayValue),t!==0?t:(t=Rd(n.directionalValue,e.directionalValue),t!==0?t:T.comparator(n.documentKey,e.documentKey)))}function Rd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.Jt=new G((t,r)=>J.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(S(e.collectionGroup===this.collectionId),this.Xt)return!1;const t=Nc(e);if(t!==void 0&&!this.tn(t))return!1;const r=Tn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const c=r[s];if(!this.nn(a,c)||!this.rn(this.Yt[o++],c))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let e=new G(J.comparator);const t=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new no(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new no(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new no(r.field,r.dir==="asc"?0:1)));return new Ro(Ro.UNKNOWN_ID,this.collectionId,t,Xi.empty())}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(n){var e,t;if(S(n instanceof M||n instanceof z),n instanceof M){if(n instanceof eg){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>M.create(n.field,"==",s)))||[];return z.create(i,"or")}return n}const r=n.filters.map(i=>Og(i));return z.create(r,n.op)}function Fb(n){if(n.getFilters().length===0)return[];const e=Gc(Og(n));return S(Lg(e)),zc(e)||jc(e)?[e]:e.getFilters()}function zc(n){return n instanceof M}function jc(n){return n instanceof z&&tl(n)}function Lg(n){return zc(n)||jc(n)||function(t){if(t instanceof z&&Lc(t)){for(const r of t.getFilters())if(!zc(r)&&!jc(r))return!1;return!0}return!1}(n)}function Gc(n){if(S(n instanceof M||n instanceof z),n instanceof M)return n;if(n.filters.length===1)return Gc(n.filters[0]);const e=n.filters.map(r=>Gc(r));let t=z.create(e,n.op);return t=ko(t),Lg(t)?t:(S(t instanceof z),S(Nr(t)),S(t.filters.length>1),t.filters.reduce((r,i)=>hl(r,i)))}function hl(n,e){let t;return S(n instanceof M||n instanceof z),S(e instanceof M||e instanceof z),t=n instanceof M?e instanceof M?function(i,s){return z.create([i,s],"and")}(n,e):Sd(n,e):e instanceof M?Sd(e,n):function(i,s){if(S(i.filters.length>0&&s.filters.length>0),Nr(i)&&Nr(s))return Jm(i,s.getFilters());const o=Lc(i)?i:s,a=Lc(i)?s:i,c=o.filters.map(u=>hl(u,a));return z.create(c,"or")}(n,e),ko(t)}function Sd(n,e){if(Nr(e))return Jm(e,n.getFilters());{const t=e.filters.map(r=>hl(n,r));return z.create(t,"or")}}function ko(n){if(S(n instanceof M||n instanceof z),n instanceof M)return n;const e=n.getFilters();if(e.length===1)return ko(e[0]);if(Qm(n))return n;const t=e.map(i=>ko(i)),r=[];return t.forEach(i=>{i instanceof M?r.push(i):i instanceof z&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:z.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.on=new dl}addToCollectionParentIndex(e,t){return this.on.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}deleteAllFieldIndexes(e){return p.resolve()}createTargetIndexes(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve(Qe.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve(Qe.min())}updateCollectionGroup(e,t,r){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class dl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new G(U.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new G(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Uint8Array(0);class Bb{constructor(e,t){this.user=e,this.databaseId=t,this._n=new dl,this.an=new _n(r=>zn(r),(r,i)=>bs(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this._n.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this._n.add(t)});const s={collectionId:r,parent:Fe(i)};return Pd(e).put(s)}return p.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[xm(t),""],!1,!0);return Pd(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(gt(o.parent))}return r})}addFieldIndex(e,t){const r=hi(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=ur(e);return s.next(a=>{o.put(wd(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=hi(e),i=ur(e),s=cr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=hi(e),r=cr(e),i=ur(e);return t.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,t){return p.forEach(this.un(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new bd(r).sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=cr(e);let i=!0;const s=new Map;return p.forEach(this.un(t),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=O();const a=[];return p.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(C){return`id=${C.indexId}|cg=${C.collectionGroup}|f=${C.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(c)} to execute ${zn(t)}`);const l=function(C,V){const $=Nc(V);if($===void 0)return null;for(const B of So(C,$.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(u,c),h=function(C,V){const $=new Map;for(const B of Tn(V))for(const ee of So(C,B.fieldPath))switch(ee.op){case"==":case"in":$.set(B.fieldPath.canonicalString(),ee.value);break;case"not-in":case"!=":return $.set(B.fieldPath.canonicalString(),ee.value),Array.from($.values())}return null}(u,c),d=function(C,V){const $=[];let B=!0;for(const ee of Tn(V)){const Be=ee.kind===0?od(C,ee.fieldPath,C.startAt):ad(C,ee.fieldPath,C.startAt);$.push(Be.value),B&&(B=Be.inclusive)}return new cn($,B)}(u,c),f=function(C,V){const $=[];let B=!0;for(const ee of Tn(V)){const Be=ee.kind===0?ad(C,ee.fieldPath,C.endAt):od(C,ee.fieldPath,C.endAt);$.push(Be.value),B&&(B=Be.inclusive)}return new cn($,B)}(u,c),I=this.ln(c,u,d),v=this.ln(c,u,f),y=this.hn(c,u,h),k=this.Pn(c.indexId,l,I,d.inclusive,v,f.inclusive,y);return p.forEach(k,D=>r.j(D,t.limit).next(C=>{C.forEach(V=>{const $=T.fromSegments(V.documentKey);o.has($)||(o=o.add($),a.push($))})}))}).next(()=>a)}return p.resolve(null)})}un(e){let t=this.an.get(e);return t||(e.filters.length===0?t=[e]:t=Fb(z.create(e.filters,"and")).map(r=>Fc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,t),t)}Pn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.In(t[h/u]):Ws,f=this.Tn(e,d,r[h%u],i),I=this.En(e,d,s[h%u],o),v=a.map(y=>this.Tn(e,d,y,!0));l.push(...this.createRange(f,I,v))}return l}Tn(e,t,r,i){const s=new bn(e,T.empty(),t,r);return i?s:s.Ht()}En(e,t,r,i){const s=new bn(e,T.empty(),t,r);return i?s.Ht():s}cn(e,t){const r=new bd(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.un(t);return p.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new G(J.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}dn(e,t){const r=new li;for(const i of Tn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);Rn.St.ht(s,o)}return r.Ut()}In(e){const t=new li;return Rn.St.ht(e,t.jt(0)),t.Ut()}An(e,t){const r=new li;return Rn.St.ht($n(this.databaseId,t),r.jt(function(s){const o=Tn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Ut()}hn(e,t,r){if(r===null)return[];let i=[];i.push(new li);let s=0;for(const o of Tn(e)){const a=r[s++];for(const c of i)if(this.Rn(t,o.fieldPath)&&ns(a))i=this.Vn(i,o,a);else{const u=c.jt(o.kind);Rn.St.ht(a,u)}}return this.mn(i)}ln(e,t,r){return this.hn(e,t,r.position)}mn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Ut();return t}Vn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new li;c.seed(a.Ut()),Rn.St.ht(o,c.jt(t.kind)),s.push(c)}return s}Rn(e,t){return!!e.filters.find(r=>r instanceof M&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=hi(e),i=ur(e);return(t?r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.W()).next(s=>{const o=[];return p.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Xi(h.sequenceNumber,new Qe(Kn(h.readTime),new T(gt(h.documentKey)),h.largestBatchId)):Xi.empty(),f=l.fields.map(([I,v])=>new no(J.fromServerFormat(I),v));return new Ro(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:x(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=hi(e),s=ur(e);return this.fn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>p.forEach(a,c=>s.put(wd(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return p.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?p.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),p.forEach(a,c=>this.gn(e,i,c).next(u=>{const l=this.pn(s,c);return u.isEqual(l)?p.resolve():this.yn(e,s,c,u,l)}))))})}wn(e,t,r,i){return cr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,t.key),documentKey:t.key.path.toArray()})}Sn(e,t,r,i){return cr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,t.key),t.key.path.toArray()])}gn(e,t,r){const i=cr(e);let s=new G(Wt);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,t)])},(o,a)=>{s=s.add(new bn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(e,t){let r=new G(Wt);const i=this.dn(t,e);if(i==null)return r;const s=Nc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(ns(o))for(const a of o.arrayValue.values||[])r=r.add(new bn(t.indexId,e.key,this.In(a),i))}else r=r.add(new bn(t.indexId,e.key,Ws,i));return r}yn(e,t,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),I=u.getIterator();let v=ar(f),y=ar(I);for(;v||y;){let k=!1,D=!1;if(v&&y){const C=l(v,y);C<0?D=!0:C>0&&(k=!0)}else v!=null?D=!0:k=!0;k?(h(y),y=ar(I)):D?(d(v),v=ar(f)):(v=ar(f),y=ar(I))}}(i,s,Wt,a=>{o.push(this.wn(e,t,r,a))},a=>{o.push(this.Sn(e,t,r,a))}),p.waitFor(o)}fn(e){let t=1;return ur(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Wt(o,a)).filter((o,a,c)=>!a||Wt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Wt(o,e),c=Wt(o,t);if(a===0)i[0]=e.Ht();else if(a>0&&c<0)i.push(o),i.push(o.Ht());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ws,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ws,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,t){return Wt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Cd)}getMinOffset(e,t){return p.mapArray(this.un(t),r=>this.cn(e,r).next(i=>i||R())).next(Cd)}}function Pd(n){return Ie(n,"collectionParents")}function cr(n){return Ie(n,"indexEntries")}function hi(n){return Ie(n,"indexConfiguration")}function ur(n){return Ie(n,"indexState")}function Cd(n){S(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Xu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Qe(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class $e{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new $e(e,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Y({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{S(a===1)}));const u=[];for(const l of t.mutations){const h=Bm(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return p.waitFor(s).next(()=>u)}function Do(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw R();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e.DEFAULT_COLLECTION_PERCENTILE=10,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$e.DEFAULT=new $e(41943040,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$e.DISABLED=new $e(-1,0,0);class _a{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(e,t,r,i){S(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new _a(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kt(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=gr(e),o=Kt(e);return o.add({}).next(a=>{S(typeof a=="number");const c=new sl(a,t,r,i),u=function(f,I,v){const y=v.baseMutations.map(D=>os(f.ut,D)),k=v.mutations.map(D=>os(f.ut,D));return{userId:I,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:y,mutations:k}}(this.serializer,this.userId,c),l=[];let h=new G((d,f)=>x(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Bm(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,PR))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Dn[a]=c.keys()}),p.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Kt(e).get(t).next(r=>r?(S(r.userId===this.userId),An(this.serializer,r)):null)}Cn(e,t){return this.Dn[t]?p.resolve(this.Dn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Dn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Kt(e).Y({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(S(a.batchId>=r),s=An(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Kt(e).Y({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Kt(e).W("userMutationsIndex",t).next(r=>r.map(i=>An(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ro(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return gr(e).Y({range:i},(o,a,c)=>{const[u,l,h]=o,d=gt(l);if(u===this.userId&&t.path.isEqual(d))return Kt(e).get(h).next(f=>{if(!f)throw R();S(f.userId===this.userId),s.push(An(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new G(x);const i=[];return t.forEach(s=>{const o=ro(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=gr(e).Y({range:a},(u,l,h)=>{const[d,f,I]=u,v=gt(f);d===this.userId&&s.path.isEqual(v)?r=r.add(I):h.done()});i.push(c)}),p.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=ro(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new G(x);return gr(e).Y({range:o},(c,u,l)=>{const[h,d,f]=c,I=gt(d);h===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Kt(e).get(s).next(o=>{if(o===null)throw R();S(o.userId===this.userId),r.push(An(this.serializer,o))}))}),p.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Mg(e.ae,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Fn(t.batchId)}),p.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return p.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return gr(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=gt(s[1]);i.push(c)}else a.done()}).next(()=>{S(i.length===0)})})}containsKey(e,t){return Fg(e,this.userId,t)}Mn(e){return Ug(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Fg(n,e,t){const r=ro(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return gr(n).Y({range:s,J:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Kt(n){return Ie(n,"mutations")}function gr(n){return Ie(n,"documentMutations")}function Ug(n){return Ie(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Hn(0)}static Nn(){return new Hn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{const r=new Hn(t.highestTargetId);return t.highestTargetId=r.next(),this.Ln(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(t=>P.fromTimestamp(new Z(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Ln(e,i)))}addTargetData(e,t){return this.kn(e,t).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(t,r),this.Ln(e,r))))}updateTargetData(e,t){return this.kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>lr(e).delete(t.targetId)).next(()=>this.Bn(e)).next(r=>(S(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return lr(e).Y((o,a)=>{const c=wi(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>p.waitFor(s)).next(()=>i)}forEachTarget(e,t){return lr(e).Y((r,i)=>{const s=wi(i);t(s)})}Bn(e){return Dd(e).get("targetGlobalKey").next(t=>(S(t!==null),t))}Ln(e,t){return Dd(e).put("targetGlobalKey",t)}kn(e,t){return lr(e).put(xg(this.serializer,t))}qn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=zn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return lr(e).Y({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=wi(a);bs(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Qt(e);return t.forEach(o=>{const a=Fe(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),p.waitFor(i)}removeMatchingKeys(e,t,r){const i=Qt(e);return p.forEach(t,s=>{const o=Fe(s.path);return p.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Qt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Qt(e);let s=O();return i.Y({range:r,J:!0},(o,a,c)=>{const u=gt(o[1]),l=new T(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Fe(t.path),i=IDBKeyRange.bound([r],[xm(r)],!1,!0);let s=0;return Qt(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,t){return lr(e).get(t).next(r=>r?wi(r):null)}}function lr(n){return Ie(n,"targets")}function Dd(n){return Ie(n,"targetGlobal")}function Qt(n){return Ie(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd([n,e],[t,r]){const i=x(n,t);return i===0?x(e,r):i}class $b{constructor(e){this.Qn=e,this.buffer=new G(Nd),this.Kn=0}$n(){return++this.Kn}Un(e){const t=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Nd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gn(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await mn(t)}await this.Gn(3e5)})}}class jb{constructor(e,t){this.zn=e,this.params=t}calculateTargetCount(e,t){return this.zn.jn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return p.resolve(ze._e);const r=new $b(t);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),p.resolve(kd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kd):this.Jn(e,t))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),dr()<=L.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),p.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function Gb(n,e){return new jb(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,t){this.db=e,this.garbageCollector=Gb(this,t)}jn(e){const t=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Yn(e){let t=0;return this.Hn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Hn(e,t){return this.Zn(e,(r,i)=>t(i))}addReference(e,t,r){return Ks(e,r)}removeReference(e,t,r){return Ks(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ks(e,t)}Xn(e,t){return function(i,s){let o=!1;return Ug(i).Z(a=>Fg(i,a,s).next(c=>(c&&(o=!0),p.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,P.min()),Qt(e).delete(function(h){return[0,Fe(h.path)]}(o))))});i.push(c)}}).next(()=>p.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ks(e,t)}Zn(e,t){const r=Qt(e);let i,s=ze._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==ze._e&&t(new T(gt(i)),s),s=u,i=c):s=ze._e}).next(()=>{s!==ze._e&&t(new T(gt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ks(n,e){return Qt(n).put(function(r,i){return{targetId:0,path:Fe(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.changes=new _n(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,H.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?p.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return vn(e).put(r)}removeEntry(e,t,r){return vn(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Co(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.er(e,r)))}getEntry(e,t){let r=H.newInvalidDocument(t);return vn(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(di(t))},(i,s)=>{r=this.tr(t,s)}).next(()=>r)}nr(e,t){let r={size:0,document:H.newInvalidDocument(t)};return vn(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(di(t))},(i,s)=>{r={document:this.tr(t,s),size:Do(s)}}).next(()=>r)}getEntries(e,t){let r=Ge();return this.rr(e,t,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,t){let r=Ge(),i=new W(T.comparator);return this.rr(e,t,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,Do(o))}).next(()=>({documents:r,sr:i}))}rr(e,t,r){if(t.isEmpty())return p.resolve();let i=new G(Od);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(di(i.first()),di(i.last())),o=i.getIterator();let a=o.getNext();return vn(e).Y({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=T.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Od(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.U(di(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Co(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return vn(e).W(IDBKeyRange.bound(a,c,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let l=Ge();for(const h of u){const d=this.tr(T.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Ps(t,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,t,r,i){let s=Ge();const o=xd(t,r),a=xd(t,Qe.max());return vn(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.tr(T.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new Hb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Vd(e).get("remoteDocumentGlobalKey").next(t=>(S(!!t),t))}er(e,t){return Vd(e).put("remoteDocumentGlobalKey",t)}tr(e,t){if(t){const r=Nb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(P.min())))return r}return H.newInvalidDocument(e)}}function qg(n){return new Kb(n)}class Hb extends Bg{constructor(e,t){super(),this._r=e,this.trackRemovals=t,this.ar=new _n(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new G((s,o)=>x(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(t.push(this._r.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Id(this._r.serializer,o);i=i.add(s.path.popLast());const u=Do(c);r+=u-a.size,t.push(this._r.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Id(this._r.serializer,o.convertToNoDocument(P.min()));t.push(this._r.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),t.push(this._r.updateMetadata(e,r)),p.waitFor(t)}getFromCache(e,t){return this._r.nr(e,t).next(r=>(this.ar.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this._r.ir(e,t).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Vd(n){return Ie(n,"remoteDocumentGlobal")}function vn(n){return Ie(n,"remoteDocumentsV14")}function di(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function xd(n,e){const t=e.documentKey.path.toArray();return[n,Co(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Od(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=x(t[s],r[s]),i)return i;return i=x(t.length,r.length),i||(i=x(t[t.length-2],r[r.length-2]),i||x(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ki(r.mutation,i,je.empty(),Z.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,O()).next(()=>r))}getLocalViewOfDocuments(e,t,r=O()){const i=_t();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ii();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=_t();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,O()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ge();const o=Ci(),a=function(){return Ci()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof $t)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),ki(l.mutation,u,l.mutation.getFieldMask(),Z.now())):o.set(u.key,je.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new Qb(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Ci();let i=new W((o,a)=>o-a),s=O();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||je.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||O()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ag();l.forEach(d=>{if(!s.has(d)){const f=mg(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return T.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):p.resolve(_t());let a=-1,c=s;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,O())).next(l=>({batchId:a,changes:og(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new T(t)).next(r=>{let i=Ii();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Ii();return this.indexManager.getCollectionParents(e,s).next(a=>p.forEach(a,c=>{const u=function(h,d){return new qt(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,H.newInvalidDocument(l)))});let a=Ii();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&ki(l.mutation,u,je.empty(),Z.now()),Ps(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return p.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(i){return{id:i.id,version:i.version,createTime:le(i.createTime)}}(t)),p.resolve()}getNamedQuery(e,t){return p.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(i){return{name:i.name,query:ll(i.bundledQuery),readTime:le(i.readTime)}}(t)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.overlays=new W(T.comparator),this.lr=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const r=_t();return p.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.lt(e,t,s)}),p.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),p.resolve()}getOverlaysForCollection(e,t,r){const i=_t(),s=t.length+1,o=new T(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new W((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=_t(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=_t(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return p.resolve(a)}lt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new al(t,r));let s=this.lr.get(t);s===void 0&&(s=O(),this.lr.set(t,s)),this.lr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.hr=new G(pe.Pr),this.Ir=new G(pe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.dr(new pe(e,t))}Ar(e,t){e.forEach(r=>this.removeReference(r,t))}Rr(e){const t=new T(new U([])),r=new pe(t,e),i=new pe(t,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new T(new U([])),r=new pe(t,e),i=new pe(t,e+1);let s=O();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new pe(e,0),r=this.hr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return T.comparator(e.key,t.key)||x(e.gr,t.gr)}static Tr(e,t){return x(e.gr,t.gr)||T.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new G(pe.Pr)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sl(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Sr(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),i=new pe(t,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new G(x);return t.forEach(i=>{const s=new pe(i,0),o=new pe(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),p.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new pe(new T(s),0);let a=new G(x);return this.yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.gr)),!0)},o),p.resolve(this.br(a))}br(e){const t=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){S(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return p.forEach(t.mutations,i=>{const s=new pe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){const r=new pe(t,0),i=this.yr.firstAfterOrEqual(r);return p.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.Cr=e,this.docs=function(){return new W(T.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return p.resolve(r?r.document.mutableCopy():H.newInvalidDocument(t))}getEntries(e,t){let r=Ge();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():H.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ge();const o=t.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Xu(Lm(l),r)<=0||(i.has(l.key)||Ps(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(e,t,r,i){R()}vr(e,t){return p.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new eS(this)}getSize(e){return p.resolve(this.size)}}class eS extends Bg{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),p.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.persistence=e,this.Fr=new _n(t=>zn(t),bs),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Mr=0,this.Or=new fl,this.targetCount=0,this.Nr=Hn.On()}forEachTarget(e,t){return this.Fr.forEach((r,i)=>t(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),p.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Hn(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.kn(t),p.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const r=this.Fr.get(t)||null;return p.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),p.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),p.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Or.mr(t);return p.resolve(r)}containsKey(e,t){return p.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t){this.Br={},this.overlays={},this.Lr=new ze(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new tS(this),this.indexManager=new Ub,this.remoteDocumentCache=function(i){return new Zb(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Vg(t),this.Kr=new Yb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Jb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new Xb(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const i=new nS(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,t){return p.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class nS extends Fm{constructor(e){super(),this.currentSequenceNumber=e}}class ya{constructor(e){this.persistence=e,this.Gr=new fl,this.zr=null}static jr(e){return new ya(e)}get Hr(){if(this.zr)return this.zr;throw R()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),p.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),p.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Hr,r=>{const i=T.fromPath(r);return this.Jr(e,i).next(s=>{s||t.removeEntry(i,P.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(r=>{r?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return p.or([()=>p.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.serializer=e}N(e,t,r,i){const s=new da("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yh,{unique:!0}),c.createObjectStore("documentMutations")}(e),Ld(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=p.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Ld(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:P.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").W().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yh,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return p.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:BR});u.createIndex("collectionPathOverlayIndex",qR,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",$R,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:CR});u.createIndex("documentKeyIndex",kR),u.createIndex("collectionGroupIndex",DR)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:LR}).createIndex("sequenceNumberIndex",MR,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:FR}).createIndex("documentKeyIndex",UR,{unique:!1})}(e))),o}Xr(e){let t=0;return e.store("remoteDocuments").Y((r,i)=>{t+=Do(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.W().next(i=>p.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>p.forEach(a,c=>{S(c.userId===s.userId);const u=An(this.serializer,c);return Mg(e,s.userId,u).next(()=>{})}))}))}ei(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const c=new U(o),u=function(h){return[0,Fe(h)]}(c);s.push(t.get(u).next(l=>l?p.resolve():(h=>t.put({targetId:0,path:Fe(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>p.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:OR});const r=t.store("collectionParents"),i=new dl,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Fe(c)})}};return t.store("remoteDocuments").Y({J:!0},(o,a)=>{const c=new U(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Y({J:!0},([o,a,c],u)=>{const l=gt(a);return s(l.popLast())}))}ni(e){const t=e.store("targets");return t.Y((r,i)=>{const s=wi(i),o=xg(this.serializer,s);return t.put(o)})}ri(e,t){const r=t.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new T(U.fromString(h.document.name).popFirst(5)):h.noDocument?T.fromSegments(h.noDocument.path):h.unknownDocument?T.fromSegments(h.unknownDocument.path):R()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>p.waitFor(i))}ii(e,t){const r=t.store("mutations"),i=qg(this.serializer),s=new zg(ya.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:O();An(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),p.forEach(a,(c,u)=>{const l=new me(u),h=ga.ct(this.serializer,l),d=s.getIndexManager(l),f=_a.ct(l,this.serializer,d,s.referenceDelegate);return new $g(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Vc(t,ze._e),c).next()})})}}function Ld(n){n.createObjectStore("targetDocuments",{keyPath:VR}).createIndex("documentTargetsIndex",xR,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",NR,{unique:!0}),n.createObjectStore("targetGlobal")}const nc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class pl{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=l,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!pl.D())throw new g(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Wb(this,i),this.Ii=t+"main",this.serializer=new Vg(c),this.Ti=new nt(this.Ii,this.ai,new rS(this.serializer)),this.qr=new qb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=qg(this.serializer),this.Kr=new Vb,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,l===!1&&ue("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new g(m.FAILED_PRECONDITION,nc);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new ze(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Hs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(t=>this.isPrimary&&!t?this.pi(e).next(()=>!1):!!t&&this.yi(e).next(()=>!0))).catch(e=>{if(gn(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return fi(e).get("owner").next(t=>p.resolve(this.wi(t)))}Si(e){return Hs(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ie(t,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return p.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const t of e)this.Ei.removeItem(this.vi(t.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?p.resolve(!0):fi(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)){if(this.wi(t)&&this.networkEnabled)return!0;if(!this.wi(t)){if(!t.allowTabSynchronization)throw new g(m.FAILED_PRECONDITION,nc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hs(e).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Vc(e,ze._e);return this.pi(t).next(()=>this.Si(t))}),this.Ti.close(),this.Ni()}Ci(e,t){return e.filter(r=>this.Di(r.updateTimeMs,t)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Hs(e).W().next(t=>this.Ci(t,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,t){return _a.ct(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Bb(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return ga.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===15?jR:c===14?zm:c===13?$m:c===12?zR:c===11?qm:void R()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,a=>(o=new Vc(a,this.Lr?this.Lr.next():ze._e),t==="readwrite-primary"?this.fi(o).next(c=>!!c||this.gi(o)).next(c=>{if(!c)throw ue(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new g(m.FAILED_PRECONDITION,Mm);return r(o)}).next(c=>this.yi(o).next(()=>c)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return fi(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)&&!this.wi(t)&&!(this._i||this.allowTabSynchronization&&t.allowTabSynchronization))throw new g(m.FAILED_PRECONDITION,nc)})}yi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return fi(e).put("owner",t)}static D(){return nt.D()}pi(e){const t=fi(e);return t.get("owner").next(r=>this.wi(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):p.resolve())}Di(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ue(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const t=/(?:Version|Mobile)\/1[456]/;Sy()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var t;try{const r=((t=this.Ei)===null||t===void 0?void 0:t.getItem(this.vi(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ue("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){ue("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function fi(n){return Ie(n,"owner")}function Hs(n){return Ie(n,"clientMetadata")}function ml(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=i}static Qi(e,t){let r=O(),i=O();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gl(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.zi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new iS;return this.Hi(e,t,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,t,o,a.size)})}).next(()=>s.result)}Ji(e,t,r,i){return r.documentReadCount<this.Ui?(dr()<=L.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",fr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),p.resolve()):(dr()<=L.DEBUG&&_("QueryEngine","Query:",fr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(dr()<=L.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",fr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ue(t))):p.resolve())}zi(e,t){if(cd(t))return p.resolve(null);let r=Ue(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Po(t,null,"F"),r=Ue(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=O(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Yi(t,a);return this.Zi(t,u,o,c.readTime)?this.zi(e,Po(t,null,"F")):this.Xi(e,u,t,c)}))})))}ji(e,t,r,i){return cd(t)||i.isEqual(P.min())?p.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(t,s);return this.Zi(t,o,r,i)?p.resolve(null):(dr()<=L.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fr(t)),this.Xi(e,o,t,Om(i,-1)).next(a=>a))})}Yi(e,t){let r=new G(ig(e));return t.forEach((i,s)=>{Ps(e,s)&&(r=r.add(s))}),r}Zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,t,r){return dr()<=L.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",fr(t)),this.Gi.getDocumentsMatchingQuery(e,t,Qe.min(),r)}Xi(e,t,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,r,i){this.persistence=e,this.es=t,this.serializer=i,this.ts=new W(x),this.ns=new _n(s=>zn(s),bs),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $g(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}function Gg(n,e,t,r){return new sS(n,e,t,r)}async function Wg(n,e){const t=E(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.os(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=O();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function oS(n,e){const t=E(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=p.resolve();return d.forEach(I=>{f=f.next(()=>l.getEntry(c,I)).next(v=>{const y=u.docVersions.get(I);S(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),l.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=O();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Kg(n){const e=E(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function aS(n,e){const t=E(n),r=e.snapshotVersion;let i=t.ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.ss.newChangeBuffer({trackRemovals:!0});i=t.ts;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.qr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(fe.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(v,y,k){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,f,l)&&a.push(t.qr.updateTargetData(s,f))});let c=Ge(),u=O();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Hg(s,o,e.documentUpdates).next(l=>{c=l.us,u=l.cs})),!r.isEqual(P.min())){const l=t.qr.getLastRemoteSnapshotVersion(s).next(h=>t.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.ts=i,s))}function Hg(n,e,t){let r=O(),i=O();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ge();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{us:o,cs:i}})}function cS(n,e){const t=E(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Lr(n,e){const t=E(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.qr.getTargetData(r,e).next(s=>s?(i=s,p.resolve(i)):t.qr.allocateTargetId(r).next(o=>(i=new kt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ts=t.ts.insert(r.targetId,r),t.ns.set(e,r.targetId)),r})}async function Mr(n,e,t){const r=E(n),i=r.ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!gn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function No(n,e,t){const r=E(n);let i=P.min(),s=O();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=E(c),d=h.ns.get(l);return d!==void 0?p.resolve(h.ts.get(d)):h.qr.getTargetData(u,l)}(r,o,Ue(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,t?i:P.min(),t?s:O())).next(a=>(Jg(r,rg(e),a),{documents:a,ls:s})))}function Qg(n,e){const t=E(n),r=E(t.qr),i=t.ts.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function Yg(n,e){const t=E(n),r=t.rs.get(e)||P.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.ss.getAllFromCollectionGroup(i,e,Om(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Jg(t,e,i),i))}function Jg(n,e,t){let r=n.rs.get(e)||P.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(e,r)}async function uS(n,e,t,r){const i=E(n);let s=O(),o=Ge();for(const u of t){const l=e.hs(u.metadata.name);u.document&&(s=s.add(l));const h=e.Ps(u);h.setReadTime(e.Is(u.metadata.readTime)),o=o.insert(l,h)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),c=await Lr(i,function(l){return Ue(Yr(U.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Hg(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.qr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.qr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.us,l.cs)).next(()=>l.us)))}async function lS(n,e,t=O()){const r=await Lr(n,Ue(ll(e.bundledQuery))),i=E(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=le(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,e);const a=r.withResumeToken(fe.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,t,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function Md(n,e){return`firestore_clients_${n}_${e}`}function Fd(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function rc(n,e){return`firestore_targets_${n}_${e}`}class Vo{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Ts(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new g(i.error.code,i.error.message))),o?new Vo(e,t,i.state,s):(ue("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Di{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ts(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new g(r.error.code,r.error.message))),s?new Di(e,r.state,i):(ue("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ts(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=rl();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Um(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new xo(e,s):(ue("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class _l{constructor(e,t){this.clientId=e,this.onlineState=t}static Ts(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new _l(t.clientId,t.onlineState):(ue("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Wc{constructor(){this.activeTargetIds=rl()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ic{constructor(e,t,r,i,s){this.window=e,this.si=t,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new W(x),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=Md(this.persistenceKey,this.Rs),this.ws=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new Wc),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.vs=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const i=this.getItem(Md(this.persistenceKey,r));if(i){const s=xo.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const t=this.storage.getItem(this.Cs);if(t){const r=this.Ms(t);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let t=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,t,r){this.Ns(e,t,r),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(rc(this.persistenceKey,e));if(r){const i=Di.Ts(e,r);i&&(t=i.state)}}return this.Ls.ds(e),this.Fs(),t}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(rc(this.persistenceKey,e))}updateQueryState(e,t,r){this.ks(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ys)return void ue("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ss.test(t.key)){if(t.newValue==null){const r=this.Ks(t.key);return this.$s(r,null)}{const r=this.Us(t.key,t.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(t.key)){if(t.newValue!==null){const r=this.Ws(t.key,t.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(t.key)){if(t.newValue!==null){const r=this.zs(t.key,t.newValue);if(r)return this.js(r)}}else if(t.key===this.Cs){if(t.newValue!==null){const r=this.Ms(t.newValue);if(r)return this.xs(r)}}else if(t.key===this.ws){const r=function(s){let o=ze._e;if(s!=null)try{const a=JSON.parse(s);S(typeof a=="number"),o=a}catch(a){ue("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==ze._e&&this.sequenceNumberHandler(r)}else if(t.key===this.vs){const r=this.Hs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(t)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,t,r){const i=new Vo(this.currentUser,e,t,r),s=Fd(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Es())}Bs(e){const t=Fd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}qs(e){const t={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(t))}ks(e,t,r){const i=rc(this.persistenceKey,e),s=new Di(e,t,r);this.setItem(i,s.Es())}Qs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.vs,t)}Ks(e){const t=this.Ss.exec(e);return t?t[1]:null}Us(e,t){const r=this.Ks(e);return xo.Ts(r,t)}Ws(e,t){const r=this.bs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Vo.Ts(new me(s),i,t)}zs(e,t){const r=this.Ds.exec(e),i=Number(r[1]);return Di.Ts(i,t)}Ms(e){return _l.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,t){const r=t?this.gs.insert(e,t):this.gs.remove(e),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let t=rl();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Xg{constructor(){this.eo=new Wc,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,r){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Wc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs=null;function sc(){return Qs===null?Qs=function(){return 268435456+Math.round(2147483648*Math.random())}():Qs++,"0x"+Qs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection";class pS extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+t.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(t,r,i,s,o){const a=sc(),c=this.So(t,r);_("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(t,c,u,i).then(l=>(_("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw ot("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}Co(t,r,i,s,o,a){return this.wo(t,r,i,s,o)}bo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}So(t,r){const i=dS[t];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,r,i){const s=sc();return new Promise((o,a)=>{const c=new lR;c.setWithCredentials(!0),c.listenOnce(cR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ec.NO_ERROR:const l=c.getResponseJson();_(Pe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case ec.TIMEOUT:_(Pe,`RPC '${e}' ${s} timed out`),a(new g(m.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:const h=c.getStatus();if(_(Pe,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const I=function(y){const k=y.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(k)>=0?k:m.UNKNOWN}(f.status);a(new g(I,f.message))}else a(new g(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new g(m.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{_(Pe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);_(Pe,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}vo(e,t,r){const i=sc(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=oR(),a=aR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(Pe,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const I=new fS({co:y=>{f?_(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(_(Pe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(Pe,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},lo:()=>h.close()}),v=(y,k,D)=>{y.listen(k,C=>{try{D(C)}catch(V){setTimeout(()=>{throw V},0)}})};return v(h,js.EventType.OPEN,()=>{f||_(Pe,`RPC '${e}' stream ${i} transport opened.`)}),v(h,js.EventType.CLOSE,()=>{f||(f=!0,_(Pe,`RPC '${e}' stream ${i} transport closed`),I.Ro())}),v(h,js.EventType.ERROR,y=>{f||(f=!0,ot(Pe,`RPC '${e}' stream ${i} transport errored:`,y),I.Ro(new g(m.UNAVAILABLE,"The operation could not be completed")))}),v(h,js.EventType.MESSAGE,y=>{var k;if(!f){const D=y.data[0];S(!!D);const C=D,V=C.error||((k=C[0])===null||k===void 0?void 0:k.error);if(V){_(Pe,`RPC '${e}' stream ${i} received error:`,V);const $=V.status;let B=function(Rt){const Fs=he[Rt];if(Fs!==void 0)return yg(Fs)}($),ee=V.message;B===void 0&&(B=m.INTERNAL,ee="Unknown error status: "+$+" with message "+V.message),f=!0,I.Ro(new g(B,ee)),h.close()}else _(Pe,`RPC '${e}' stream ${i} received:`,D),I.Vo(D)}}),v(a,uR.STAT_EVENT,y=>{y.stat===Wh.PROXY?_(Pe,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Wh.NOPROXY&&_(Pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Ao()},0),I}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(){return typeof window<"u"?window:null}function co(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(n){return new Tb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=t,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,t-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t,r,i,s,o,a,c){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new yl(e,t)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(ue(t.toString()),ue("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===t&&this.s_(r,i)},r=>{e(()=>{const i=new g(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,t){const r=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mS extends e_{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=Rb(this.serializer,e),r=function(s){if(!("targetChange"in s))return P.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?le(o.readTime):P.min()}(e);return this.listener.a_(t,r)}u_(e){const t={};t.database=ss(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=bo(c)?{documents:Sg(s,c)}:{query:Pg(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Tg(s,o.resumeToken);const u=Bc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=Or(s,o.snapshotVersion.toTimestamp());const u=Bc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Sb(this.serializer,e);r&&(t.labels=r),this.e_(t)}c_(e){const t={};t.database=ss(this.serializer),t.removeTarget=e,this.e_(t)}}class gS extends e_{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(S(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=bb(e.writeResults,e.commitTime),r=le(e.commitTime);return this.listener.I_(r,t)}return S(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=ss(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>os(this.serializer,r))};this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new g(m.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(m.UNKNOWN,i.toString())})}Co(e,t,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new g(m.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class yS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(ue(t),this.f_=!1):_("OnlineStateTracker",t)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{yn(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=E(c);u.C_.add(4),await Zr(u),u.M_.set("Unknown"),u.C_.delete(4),await Vs(u)}(this))})}),this.M_=new yS(r,i)}}async function Vs(n){if(yn(n))for(const e of n.v_)await e(!0)}async function Zr(n){for(const e of n.v_)await e(!1)}function Ia(n,e){const t=E(n);t.D_.has(e.targetId)||(t.D_.set(e.targetId,e),wl(t)?vl(t):ti(t).Ho()&&Il(t,e))}function as(n,e){const t=E(n),r=ti(t);t.D_.delete(e),r.Ho()&&t_(t,e),t.D_.size===0&&(r.Ho()?r.Zo():yn(t)&&t.M_.set("Unknown"))}function Il(n,e){if(n.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ti(n).u_(e)}function t_(n,e){n.x_.Oe(e),ti(n).c_(e)}function vl(n){n.x_=new yb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.D_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),ti(n).start(),n.M_.g_()}function wl(n){return yn(n)&&!ti(n).jo()&&n.D_.size>0}function yn(n){return E(n).C_.size===0}function n_(n){n.x_=void 0}async function vS(n){n.D_.forEach((e,t)=>{Il(n,e)})}async function wS(n,e){n_(n),wl(n)?(n.M_.w_(e),vl(n)):n.M_.set("Unknown")}async function TS(n,e,t){if(n.M_.set("Online"),e instanceof wg&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oo(n,r)}else if(e instanceof ao?n.x_.$e(e):e instanceof vg?n.x_.Je(e):n.x_.Ge(e),!t.isEqual(P.min()))try{const r=await Kg(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.D_.get(u);l&&s.D_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.D_.get(c);if(!l)return;s.D_.set(c,l.withResumeToken(fe.EMPTY_BYTE_STRING,l.snapshotVersion)),t_(s,c);const h=new kt(l.target,c,u,l.sequenceNumber);Il(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Oo(n,r)}}async function Oo(n,e,t){if(!gn(e))throw e;n.C_.add(1),await Zr(n),n.M_.set("Offline"),t||(t=()=>Kg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.C_.delete(1),await Vs(n)})}function r_(n,e){return e().catch(t=>Oo(n,t,e))}async function ei(n){const e=E(n),t=un(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;ES(e);)try{const i=await cS(e.localStore,r);if(i===null){e.b_.length===0&&t.Zo();break}r=i.batchId,AS(e,i)}catch(i){await Oo(e,i)}i_(e)&&s_(e)}function ES(n){return yn(n)&&n.b_.length<10}function AS(n,e){n.b_.push(e);const t=un(n);t.Ho()&&t.h_&&t.P_(e.mutations)}function i_(n){return yn(n)&&!un(n).jo()&&n.b_.length>0}function s_(n){un(n).start()}async function RS(n){un(n).E_()}async function bS(n){const e=un(n);for(const t of n.b_)e.P_(t.mutations)}async function SS(n,e,t){const r=n.b_.shift(),i=ol.from(r,e,t);await r_(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ei(n)}async function PS(n,e){e&&un(n).h_&&await async function(r,i){if(function(o){return _g(o)&&o!==m.ABORTED}(i.code)){const s=r.b_.shift();un(r).Yo(),await r_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ei(r)}}(n,e),i_(n)&&s_(n)}async function Bd(n,e){const t=E(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=yn(t);t.C_.add(3),await Zr(t),r&&t.M_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.C_.delete(3),await Vs(t)}async function Kc(n,e){const t=E(n);e?(t.C_.delete(2),await Vs(t)):e||(t.C_.add(2),await Zr(t),t.M_.set("Unknown"))}function ti(n){return n.O_||(n.O_=function(t,r,i){const s=E(t);return s.A_(),new mS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:vS.bind(null,n),Io:wS.bind(null,n),a_:TS.bind(null,n)}),n.v_.push(async e=>{e?(n.O_.Yo(),wl(n)?vl(n):n.M_.set("Unknown")):(await n.O_.stop(),n_(n))})),n.O_}function un(n){return n.N_||(n.N_=function(t,r,i){const s=E(t);return s.A_(),new gS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:RS.bind(null,n),Io:PS.bind(null,n),T_:bS.bind(null,n),I_:SS.bind(null,n)}),n.v_.push(async e=>{e?(n.N_.Yo(),await ei(n)):(await n.N_.stop(),n.b_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Tl(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ni(n,e){if(ue("AsyncQueue",`${e}: ${n}`),gn(n))return new g(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||T.comparator(t.key,r.key):(t,r)=>T.comparator(t.key,r.key),this.keyedMap=Ii(),this.sortedSet=new W(this.comparator)}static emptySet(e){return new Rr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Rr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.B_=new W(T.comparator)}track(e){const t=e.doc.key,r=this.B_.get(t);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(t,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(t):e.type===1&&r.type===2?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):R():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Fr{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Fr(e,t,Rr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ss(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(){this.k_=void 0,this.listeners=[]}}class kS{constructor(){this.queries=new _n(e=>ng(e),Ss),this.onlineState="Unknown",this.q_=new Set}}async function El(n,e){const t=E(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new CS),i)try{s.k_=await t.onListen(r)}catch(o){const a=ni(o,`Initialization of query '${fr(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Q_(t.onlineState),s.k_&&e.K_(s.k_)&&Rl(t)}async function Al(n,e){const t=E(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function DS(n,e){const t=E(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Rl(t)}function NS(n,e,t){const r=E(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Rl(n){n.q_.forEach(e=>{e.next()})}class bl{constructor(e,t,r){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}H_(e){e=Fr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t){this.Y_=e,this.byteLength=t}Z_(){return"metadata"in this.Y_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.serializer=e}hs(e){return yt(this.serializer,e)}Ps(e){return e.metadata.exists?bg(this.serializer,e.document,!1):H.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return le(e)}}class xS{constructor(e,t,r){this.X_=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=o_(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++t;const r=U.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ta(e){const t=new Map,r=new $d(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||O()).add(s);t.set(o,a)}}return t}async complete(){const e=await uS(this.localStore,new $d(this.serializer),this.documents,this.X_.id),t=this.ta(this.documents);for(const r of this.queries)await lS(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function o_(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.key=e}}class c_{constructor(e){this.key=e}}class u_{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=O(),this.mutatedKeys=O(),this._a=ig(e),this.aa=new Rr(this._a)}get ua(){return this.ia}ca(e,t){const r=t?t.la:new qd,i=t?t.aa:this.aa;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Ps(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?I!==v&&(r.track({type:3,doc:f}),y=!0):this.ha(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this._a(f,c)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||u)&&(a=!0)),y&&(f?(o=o.add(f),s=v?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((l,h)=>function(f,I){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return v(f)-v(I)}(l.type,h.type)||this._a(l.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=t&&!i?this.Ia():[],c=this.oa.size===0&&this.current&&!i?1:0,u=c!==this.sa;return this.sa=c,o.length!==0||u?{snapshot:new Fr(this.query,e.aa,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new qd,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(t=>this.ia=this.ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ia=this.ia.delete(t)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=O(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const t=[];return e.forEach(r=>{this.oa.has(r)||t.push(new c_(r))}),this.oa.forEach(r=>{e.has(r)||t.push(new a_(r))}),t}da(e){this.ia=e.ls,this.oa=O();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return Fr.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class OS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class LS{constructor(e){this.key=e,this.Ra=!1}}class MS{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new _n(a=>ng(a),Ss),this.fa=new Map,this.ga=new Set,this.pa=new W(T.comparator),this.ya=new Map,this.wa=new fl,this.Sa={},this.ba=new Map,this.Da=Hn.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function FS(n,e){const t=Dl(n);let r,i;const s=t.ma.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await Lr(t.localStore,Ue(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Sl(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Ia(t.remoteStore,o)}return i}async function Sl(n,e,t,r,i){n.va=(h,d,f)=>async function(v,y,k,D){let C=y.view.ca(k);C.Zi&&(C=await No(v.localStore,y.query,!1).then(({documents:ee})=>y.view.ca(ee,C)));const V=D&&D.targetChanges.get(y.targetId),$=D&&D.targetMismatches.get(y.targetId)!=null,B=y.view.applyChanges(C,v.isPrimaryClient,V,$);return Hc(v,y.targetId,B.Ta),B.snapshot}(n,h,d,f);const s=await No(n.localStore,e,!0),o=new u_(e,s.ls),a=o.ca(s.documents),c=Ds.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Hc(n,t,u.Ta);const l=new OS(e,t,o);return n.ma.set(e,l),n.fa.has(t)?n.fa.get(t).push(e):n.fa.set(t,[e]),u.snapshot}async function US(n,e){const t=E(n),r=t.ma.get(e),i=t.fa.get(r.targetId);if(i.length>1)return t.fa.set(r.targetId,i.filter(s=>!Ss(s,e))),void t.ma.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Mr(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),as(t.remoteStore,r.targetId),Ur(t,r.targetId)}).catch(mn)):(Ur(t,r.targetId),await Mr(t.localStore,r.targetId,!0))}async function BS(n,e,t){const r=Nl(n);try{const i=await function(o,a){const c=E(o),u=Z.now(),l=a.reduce((f,I)=>f.add(I.key),O());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let I=Ge(),v=O();return c.ss.getEntries(f,l).next(y=>{I=y,I.forEach((k,D)=>{D.isValidDocument()||(v=v.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,I)).next(y=>{h=y;const k=[];for(const D of a){const C=mb(D,h.get(D.key).overlayedDocument);C!=null&&k.push(new $t(D.key,C,Km(C.value.mapValue),X.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,k,a)}).next(y=>{d=y;const k=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(f,y.batchId,k)})}).then(()=>({batchId:d.batchId,changes:og(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Sa[o.currentUser.toKey()];u||(u=new W(x)),u=u.insert(a,c),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,t),await zt(r,i.changes),await ei(r.remoteStore)}catch(i){const s=ni(i,"Failed to persist write");t.reject(s)}}async function l_(n,e){const t=E(n);try{const r=await aS(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.ya.get(s);o&&(S(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?S(o.Ra):i.removedDocuments.size>0&&(S(o.Ra),o.Ra=!1))}),await zt(t,r,e)}catch(r){await mn(r)}}function zd(n,e,t){const r=E(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=E(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&Rl(c)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qS(n,e,t){const r=E(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new W(T.comparator);o=o.insert(s,H.newNoDocument(s,P.min()));const a=O().add(s),c=new ks(P.min(),new Map,new W(x),o,a);await l_(r,c),r.pa=r.pa.remove(s),r.ya.delete(e),kl(r)}else await Mr(r.localStore,e,!1).then(()=>Ur(r,e,t)).catch(mn)}async function $S(n,e){const t=E(n),r=e.batch.batchId;try{const i=await oS(t.localStore,e);Cl(t,r,null),Pl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await zt(t,i)}catch(i){await mn(i)}}async function zS(n,e,t){const r=E(n);try{const i=await function(o,a){const c=E(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(S(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);Cl(r,e,t),Pl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await zt(r,i)}catch(i){await mn(i)}}async function jS(n,e){const t=E(n);yn(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=E(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ba.get(r)||[];i.push(e),t.ba.set(r,i)}catch(r){const i=ni(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Pl(n,e){(n.ba.get(e)||[]).forEach(t=>{t.resolve()}),n.ba.delete(e)}function Cl(n,e,t){const r=E(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Ur(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.fa.get(e))n.ma.delete(r),t&&n.Va.Fa(r,t);n.fa.delete(e),n.isPrimaryClient&&n.wa.Rr(e).forEach(r=>{n.wa.containsKey(r)||h_(n,r)})}function h_(n,e){n.ga.delete(e.path.canonicalString());const t=n.pa.get(e);t!==null&&(as(n.remoteStore,t),n.pa=n.pa.remove(e),n.ya.delete(t),kl(n))}function Hc(n,e,t){for(const r of t)r instanceof a_?(n.wa.addReference(r.key,e),GS(n,r)):r instanceof c_?(_("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,e),n.wa.containsKey(r.key)||h_(n,r.key)):R()}function GS(n,e){const t=e.key,r=t.path.canonicalString();n.pa.get(t)||n.ga.has(r)||(_("SyncEngine","New document in limbo: "+t),n.ga.add(r),kl(n))}function kl(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const e=n.ga.values().next().value;n.ga.delete(e);const t=new T(U.fromString(e)),r=n.Da.next();n.ya.set(r,new LS(t)),n.pa=n.pa.insert(t,r),Ia(n.remoteStore,new kt(Ue(Yr(t.path)),r,"TargetPurposeLimboResolution",ze._e))}}async function zt(n,e,t){const r=E(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=gl.Qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Va.a_(i),await async function(c,u){const l=E(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(u,d=>p.forEach(d.ki,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>p.forEach(d.qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!gn(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.ts.get(d),I=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(I);l.ts=l.ts.insert(d,v)}}}(r.localStore,s))}async function WS(n,e){const t=E(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await Wg(t.localStore,e);t.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(c=>{c.reject(new g(m.CANCELLED,o))})}),s.ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zt(t,r._s)}}function KS(n,e){const t=E(n),r=t.ya.get(e);if(r&&r.Ra)return O().add(r.key);{let i=O();const s=t.fa.get(e);if(!s)return i;for(const o of s){const a=t.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function HS(n,e){const t=E(n),r=await No(t.localStore,e.query,!0),i=e.view.da(r);return t.isPrimaryClient&&Hc(t,e.targetId,i.Ta),i}async function QS(n,e){const t=E(n);return Yg(t.localStore,e).then(r=>zt(t,r))}async function YS(n,e,t,r){const i=E(n),s=await function(a,c){const u=E(a),l=E(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Cn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):p.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await ei(i.remoteStore):t==="acknowledged"||t==="rejected"?(Cl(i,e,r||null),Pl(i,e),function(a,c){E(E(a).mutationQueue).Fn(c)}(i.localStore,e)):R(),await zt(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function JS(n,e){const t=E(n);if(Dl(t),Nl(t),e===!0&&t.Ca!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await jd(t,r.toArray());t.Ca=!0,await Kc(t.remoteStore,!0);for(const s of i)Ia(t.remoteStore,s)}else if(e===!1&&t.Ca!==!1){const r=[];let i=Promise.resolve();t.fa.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ur(t,o),Mr(t.localStore,o,!0))),as(t.remoteStore,o)}),await i,await jd(t,r),function(o){const a=E(o);a.ya.forEach((c,u)=>{as(a.remoteStore,u)}),a.wa.Vr(),a.ya=new Map,a.pa=new W(T.comparator)}(t),t.Ca=!1,await Kc(t.remoteStore,!1)}}async function jd(n,e,t){const r=E(n),i=[],s=[];for(const o of e){let a;const c=r.fa.get(o);if(c&&c.length!==0){a=await Lr(r.localStore,Ue(c[0]));for(const u of c){const l=r.ma.get(u),h=await HS(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await Qg(r.localStore,o);a=await Lr(r.localStore,u),await Sl(r,d_(u),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function d_(n){return tg(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function XS(n){return function(t){return E(E(t).persistence).Bi()}(E(n).localStore)}async function ZS(n,e,t,r){const i=E(n);if(i.Ca)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Yg(i.localStore,rg(s[0])),a=ks.createSynthesizedRemoteEventForCurrentChange(e,t==="current",fe.EMPTY_BYTE_STRING);await zt(i,o,a);break}case"rejected":await Mr(i.localStore,e,!0),Ur(i,e,r);break;default:R()}}async function eP(n,e,t){const r=Dl(n);if(r.Ca){for(const i of e){if(r.fa.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await Qg(r.localStore,i),o=await Lr(r.localStore,s);await Sl(r,d_(s),o.targetId,!1,o.resumeToken),Ia(r.remoteStore,o)}for(const i of t)r.fa.has(i)&&await Mr(r.localStore,i,!1).then(()=>{as(r.remoteStore,i),Ur(r,i)}).catch(mn)}}function Dl(n){const e=E(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=l_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qS.bind(null,e),e.Va.a_=DS.bind(null,e.eventManager),e.Va.Fa=NS.bind(null,e.eventManager),e}function Nl(n){const e=E(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$S.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zS.bind(null,e),e}function tP(n,e,t){const r=E(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,I){const v=E(f),y=le(I.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",k=>v.Kr.getBundleMetadata(k,I.id)).then(k=>!!k&&k.createTime.compareTo(y)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(o_(c));const u=new xS(c,s.localStore,o.serializer);let l=await o.Ma();for(;l;){const d=await u.ea(l);d&&a._updateProgress(d),l=await o.Ma()}const h=await u.complete();return await zt(s,h.ra,void 0),await function(f,I){const v=E(f);return v.persistence.runTransaction("Save bundle","readwrite",y=>v.Kr.saveBundleMetadata(y,I))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.na)}catch(c){return ot("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Qc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ns(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Gg(this.persistence,new jg,e.initialUser,this.serializer)}createPersistence(e){return new zg(ya.jr,this.serializer)}createSharedClientState(e){return new Xg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class f_ extends Qc{constructor(e,t,r){super(),this.xa=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await Nl(this.xa.syncEngine),await ei(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Gg(this.persistence,new jg,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new zb(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new bR(t,this.persistence);return new RR(e.asyncQueue,r)}createPersistence(e){const t=ml(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?$e.withCacheSize(this.cacheSizeBytes):$e.DEFAULT;return new pl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Zg(),co(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Xg}}class nP extends f_{constructor(e,t){super(e,t,!1),this.xa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xa.syncEngine;this.sharedClientState instanceof ic&&(this.sharedClientState.syncEngine={Ys:YS.bind(null,t),Zs:ZS.bind(null,t),Xs:eP.bind(null,t),Bi:XS.bind(null,t),Js:QS.bind(null,t)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await JS(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Zg();if(!ic.D(t))throw new g(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ml(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ic(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Vl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WS.bind(null,this.syncEngine),await Kc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kS}()}createDatastore(e){const t=Ns(e.databaseInfo.databaseId),r=function(s){return new pS(s)}(e.databaseInfo);return function(s,o,a,c){return new _S(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new IS(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>zd(this.syncEngine,t,0),function(){return Ud.D()?new Ud:new hS}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new MS(i,s,o,a,c,u);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=E(t);_("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Zr(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):ue("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,t){this.Ba=e,this.serializer=t,this.metadata=new ge,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const t=this.La.decode(e),r=Number(t);isNaN(r)&&this.Qa(`length string (${t}) is not valid number`);const i=await this.Ka(r);return new VS(JSON.parse(i),e.length+r)}$a(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const t=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new g(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const o=E(i),a=ss(o.serializer)+"/documents",c={documents:s.map(d=>is(o.serializer,d))},u=await o.Co("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=Ab(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());S(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Xr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=T.fromPath(r);this.mutations.push(new il(i,this.precondition(i)))}),await async function(r,i){const s=E(r),o=ss(s.serializer)+"/documents",a={writes:i.map(c=>os(s.serializer,c))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw R();t=P.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new g(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(P.min())?X.exists(!1):X.updateTime(t):X.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(P.min()))throw new g(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return X.updateTime(t)}return X.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new yl(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new iP(this.datastore),t=this.za(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const t=this.updateFunction(e);return!Rs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!_g(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=Vm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ni(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uo(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Wg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Yc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xl(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Bd(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Bd(e.remoteStore,s)),n._onlineComponents=e}function p_(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function xl(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await uo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!p_(t))throw t;ot("Error using user provided cache. Falling back to memory cache: "+t),await uo(n,new Qc)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await uo(n,new Qc);return n._offlineComponents}async function wa(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Yc(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Yc(n,new Vl))),n._onlineComponents}function m_(n){return xl(n).then(e=>e.persistence)}function Ol(n){return xl(n).then(e=>e.localStore)}function g_(n){return wa(n).then(e=>e.remoteStore)}function Ll(n){return wa(n).then(e=>e.syncEngine)}function aP(n){return wa(n).then(e=>e.datastore)}async function Br(n){const e=await wa(n),t=e.eventManager;return t.onListen=FS.bind(null,e.syncEngine),t.onUnlisten=US.bind(null,e.syncEngine),t}function cP(n){return n.asyncQueue.enqueue(async()=>{const e=await m_(n),t=await g_(n);return e.setNetworkEnabled(!0),function(i){const s=E(i);return s.C_.delete(0),Vs(s)}(t)})}function uP(n){return n.asyncQueue.enqueue(async()=>{const e=await m_(n),t=await g_(n);return e.setNetworkEnabled(!1),async function(i){const s=E(i);s.C_.add(0),await Zr(s),s.M_.set("Offline")}(t)})}function lP(n,e){const t=new ge;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=E(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new g(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=ni(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await Ol(n),e,t)),t.promise}function __(n,e,t={}){const r=new ge;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new va({next:d=>{o.enqueueAndForget(()=>Al(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new g(m.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new g(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new bl(Yr(a.path),l,{includeMetadataChanges:!0,J_:!0});return El(s,h)}(await Br(n),n.asyncQueue,e,t,r)),r.promise}function hP(n,e){const t=new ge;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await No(i,s,!0),c=new u_(s,a.ls),u=c.ca(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=ni(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await Ol(n),e,t)),t.promise}function y_(n,e,t={}){const r=new ge;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new va({next:d=>{o.enqueueAndForget(()=>Al(s,h)),d.fromCache&&c.source==="server"?u.reject(new g(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new bl(a,l,{includeMetadataChanges:!0,J_:!0});return El(s,h)}(await Br(n),n.asyncQueue,e,t,r)),r.promise}function dP(n,e){const t=new va(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){E(i).q_.add(s),s.next()}(await Br(n),t)),()=>{t.Na(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){E(i).q_.delete(s)}(await Br(n),t))}}function fP(n,e,t,r){const i=function(o,a){let c;return c=typeof o=="string"?Ig().encode(o):o,function(l,h){return new rP(l,h)}(function(l,h){if(l instanceof Uint8Array)return Gd(l,h);if(l instanceof ArrayBuffer)return Gd(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,Ns(e));n.asyncQueue.enqueueAndForget(async()=>{tP(await Ll(n),i,r)})}function pP(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=E(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await Ol(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(n,e,t){if(!t)throw new g(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function v_(n,e,t,r){if(e===!0&&r===!0)throw new g(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kd(n){if(!T.isDocumentKey(n))throw new g(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hd(n){if(T.isDocumentKey(n))throw new g(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ta(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R()}function q(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new g(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ta(n);throw new g(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function w_(n,e){if(e<=0)throw new g(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new g(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}v_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=I_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new g(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new g(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new g(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pR;switch(r.type){case"firstParty":return new yR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new g(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Wd.get(t);r&&(_("ComponentProvider","Removing Datastore"),Wd.delete(t),r.terminate())}(this),Promise.resolve()}}function mP(n,e,t,r={}){var i;const s=(n=q(n,xs))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ot("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=me.MOCK_USER;else{a=yf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new g(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new me(u)}n._authCredentials=new mR(new Nm(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Se(this.firestore,e,this._query)}}class Q{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Q(this.firestore,e,this._key)}}class It extends Se{constructor(e,t,r){super(e,t,Yr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Q(this.firestore,null,new T(e))}withConverter(e){return new It(this.firestore,e,this._path)}}function T_(n,e,...t){if(n=b(n),Ml("collection","path",e),n instanceof xs){const r=U.fromString(e,...t);return Hd(r),new It(n,null,r)}{if(!(n instanceof Q||n instanceof It))throw new g(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(U.fromString(e,...t));return Hd(r),new It(n.firestore,null,r)}}function gP(n,e){if(n=q(n,xs),Ml("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new g(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Se(n,null,function(r){return new qt(U.emptyPath(),r)}(e))}function Lo(n,e,...t){if(n=b(n),arguments.length===1&&(e=Vm.newId()),Ml("doc","path",e),n instanceof xs){const r=U.fromString(e,...t);return Kd(r),new Q(n,null,new T(r))}{if(!(n instanceof Q||n instanceof It))throw new g(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(U.fromString(e,...t));return Kd(r),new Q(n.firestore,n instanceof It?n.converter:null,new T(r))}}function E_(n,e){return n=b(n),e=b(e),(n instanceof Q||n instanceof It)&&(e instanceof Q||e instanceof It)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function A_(n,e){return n=b(n),e=b(e),n instanceof Se&&e instanceof Se&&n.firestore===e.firestore&&Ss(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new yl(this,"async_queue_retry"),this.iu=()=>{const t=co();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const e=co();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=co();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new ge;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!gn(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ue("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=t,t}enqueueAfterDelay(e,t,r){this.su(),this.ru.indexOf(e)>-1&&(t=0);const i=Tl.createAndSchedule(this,e,t,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&R()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function Jc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class yP{constructor(){this._progressObserver={},this._taskCompletionResolver=new ge,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=-1;class oe extends xs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new _P}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||R_(this),this._firestoreClient.terminate()}}function ve(n){return n._firestoreClient||R_(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function R_(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new KR(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,I_(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new oP(n._authCredentials,n._appCheckCredentials,n._queue,s),((t=i.localCache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function vP(n,e){S_(n=q(n,oe));const t=ve(n);if(t._uninitializedComponentsProvider)throw new g(m.FAILED_PRECONDITION,"SDK cache is already specified.");ot("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Vl;return b_(t,i,new f_(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function wP(n){S_(n=q(n,oe));const e=ve(n);if(e._uninitializedComponentsProvider)throw new g(m.FAILED_PRECONDITION,"SDK cache is already specified.");ot("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Vl;return b_(e,r,new nP(r,t.cacheSizeBytes))}function b_(n,e,t){const r=new ge;return n.asyncQueue.enqueue(async()=>{try{await uo(n,t),await Yc(n,e),r.resolve()}catch(i){const s=i;if(!p_(s))throw s;ot("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function TP(n){if(n._initialized&&!n._terminated)throw new g(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ge;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!nt.D())return Promise.resolve();const i=r+"main";await nt.delete(i)}(ml(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function EP(n){return function(t){const r=new ge;return t.asyncQueue.enqueueAndForget(async()=>jS(await Ll(t),r)),r.promise}(ve(n=q(n,oe)))}function AP(n){return cP(ve(n=q(n,oe)))}function RP(n){return uP(ve(n=q(n,oe)))}function bP(n,e){const t=ve(n=q(n,oe)),r=new yP;return fP(t,n._databaseId,e,r),r}function SP(n,e){return pP(ve(n=q(n,oe)),e).then(t=>t?new Se(n,null,t.query):null)}function S_(n){if(n._initialized||n._terminated)throw new g(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Et(fe.fromBase64String(e))}catch(t){throw new g(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Et(fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=/^__.*__$/;class CP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $t(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jr(e,this.data,t,this.fieldTransforms)}}class P_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new $t(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function C_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class Aa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Aa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Mo(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(C_(this.Iu)&&PP.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class kP{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ns(e)}pu(e,t,r,i=!1){return new Aa({Iu:e,methodName:t,gu:r,path:J.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nr(n){const e=n._freezeSettings(),t=Ns(n._databaseId);return new kP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ra(n,e,t,r,i,s={}){const o=n.pu(s.merge||s.mergeFields?2:0,e,t,i);ql("Data must be an object, but it was:",o,r);const a=N_(r,o);let c,u;if(s.merge)c=new je(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Xc(e,h,t);if(!o.contains(d))throw new g(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);x_(l,d)||l.push(d)}c=new je(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new CP(new Ee(a),c,u)}class Os extends tr{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Os}}function k_(n,e,t){return new Aa({Iu:3,gu:e.settings.gu,methodName:n._methodName,du:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Fl extends tr{_toFieldTransform(e){return new Cs(e.path,new Vr)}isEqual(e){return e instanceof Fl}}class DP extends tr{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=k_(this,e,!0),r=this.yu.map(s=>rr(s,t)),i=new jn(r);return new Cs(e.path,i)}isEqual(e){return this===e}}class NP extends tr{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=k_(this,e,!0),r=this.yu.map(s=>rr(s,t)),i=new Gn(r);return new Cs(e.path,i)}isEqual(e){return this===e}}class VP extends tr{constructor(e,t){super(e),this.wu=t}_toFieldTransform(e){const t=new xr(e.serializer,lg(e.serializer,this.wu));return new Cs(e.path,t)}isEqual(e){return this===e}}function Ul(n,e,t,r){const i=n.pu(1,e,t);ql("Data must be an object, but it was:",i,r);const s=[],o=Ee.empty();er(r,(c,u)=>{const l=$l(e,c,t);u=b(u);const h=i.Ru(l);if(u instanceof Os)s.push(l);else{const d=rr(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new je(s);return new P_(o,a,i.fieldTransforms)}function Bl(n,e,t,r,i,s){const o=n.pu(1,e,t),a=[Xc(e,r,t)],c=[i];if(s.length%2!=0)throw new g(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Xc(e,s[d])),c.push(s[d+1]);const u=[],l=Ee.empty();for(let d=a.length-1;d>=0;--d)if(!x_(u,a[d])){const f=a[d];let I=c[d];I=b(I);const v=o.Ru(f);if(I instanceof Os)u.push(f);else{const y=rr(I,v);y!=null&&(u.push(f),l.set(f,y))}}const h=new je(u);return new P_(l,h,o.fieldTransforms)}function D_(n,e,t,r=!1){return rr(t,n.pu(r?4:3,e))}function rr(n,e){if(V_(n=b(n)))return ql("Unsupported field value:",e,n),N_(n,e);if(n instanceof tr)return function(r,i){if(!C_(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=rr(a,i.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=b(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Z.fromDate(r);return{timestampValue:Or(i.serializer,s)}}if(r instanceof Z){const s=new Z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Or(i.serializer,s)}}if(r instanceof Ea)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Et)return{bytesValue:Tg(i.serializer,r._byteString)};if(r instanceof Q){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ul(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Ta(r)}`)}(n,e)}function N_(n,e){const t={};return jm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):er(n,(r,i)=>{const s=rr(i,e.Eu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function V_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Z||n instanceof Ea||n instanceof Et||n instanceof Q||n instanceof tr)}function ql(n,e,t){if(!V_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ta(t);throw r==="an object"?e.mu(n+" a custom object"):e.mu(n+" "+r)}}function Xc(n,e,t){if((e=b(e))instanceof ln)return e._internalPath;if(typeof e=="string")return $l(n,e);throw Mo("Field path arguments must be of type string or ",n,!1,void 0,t)}const xP=new RegExp("[~\\*/\\[\\]]");function $l(n,e,t){if(e.search(xP)>=0)throw Mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ln(...e.split("."))._internalPath}catch{throw Mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Mo(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new g(m.INVALID_ARGUMENT,a+n+c)}function x_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Q(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ba("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OP extends cs{data(){return super.data()}}function ba(n,e){return typeof e=="string"?$l(n,e):e instanceof ln?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new g(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zl{}class Ls extends zl{}function Ht(n,e,...t){let r=[];e instanceof zl&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof jl).length,a=s.filter(c=>c instanceof Sa).length;if(o>1||o>0&&a>0)throw new g(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Sa extends Ls{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Sa(e,t,r)}_apply(e){const t=this._parse(e);return M_(e._query,t),new Se(e.firestore,e.converter,Uc(e._query,t))}_parse(e){const t=nr(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new g(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Jd(h,l);const f=[];for(const I of h)f.push(Yd(c,s,I));d={arrayValue:{values:f}}}else d=Yd(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Jd(h,l),d=D_(a,o,h,l==="in"||l==="not-in");return M.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function LP(n,e,t){const r=e,i=ba("where",n);return Sa._create(i,r,t)}class jl extends zl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new jl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:z.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)M_(o,c),o=Uc(o,c)}(e._query,t),new Se(e.firestore,e.converter,Uc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gl extends Ls{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Gl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new g(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new g(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rs(s,o)}(e._query,this._field,this._direction);return new Se(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new qt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function MP(n,e="asc"){const t=e,r=ba("orderBy",n);return Gl._create(r,t)}class Pa extends Ls{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Pa(e,t,r)}_apply(e){return new Se(e.firestore,e.converter,Po(e._query,this._limit,this._limitType))}}function FP(n){return w_("limit",n),Pa._create("limit",n,"F")}function UP(n){return w_("limitToLast",n),Pa._create("limitToLast",n,"L")}class Ca extends Ls{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ca(e,t,r)}_apply(e){const t=L_(e,this.type,this._docOrFields,this._inclusive);return new Se(e.firestore,e.converter,function(i,s){return new qt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function BP(...n){return Ca._create("startAt",n,!0)}function qP(...n){return Ca._create("startAfter",n,!1)}class ka extends Ls{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ka(e,t,r)}_apply(e){const t=L_(e,this.type,this._docOrFields,this._inclusive);return new Se(e.firestore,e.converter,function(i,s){return new qt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function $P(...n){return ka._create("endBefore",n,!1)}function zP(...n){return ka._create("endAt",n,!0)}function L_(n,e,t,r){if(t[0]=b(t[0]),t[0]instanceof cs)return function(s,o,a,c,u){if(!c)throw new g(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of Ar(s))if(h.field.isKeyField())l.push($n(o,c.key));else{const d=c.data.field(h.field);if(fa(d))throw new g(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new g(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new cn(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=nr(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new g(m.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let I=0;I<l.length;I++){const v=l[I];if(d[I].field.isKeyField()){if(typeof v!="string")throw new g(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!nl(o)&&v.indexOf("/")!==-1)throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const y=o.path.child(U.fromString(v));if(!T.isDocumentKey(y))throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const k=new T(y);f.push($n(a,k))}else{const y=D_(c,u,v);f.push(y)}}return new cn(f,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Yd(n,e,t){if(typeof(t=b(t))=="string"){if(t==="")throw new g(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nl(e)&&t.indexOf("/")!==-1)throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(U.fromString(t));if(!T.isDocumentKey(r))throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $n(n,new T(r))}if(t instanceof Q)return $n(n,t._key);throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ta(t)}.`)}function Jd(n,e){if(!Array.isArray(n)||n.length===0)throw new g(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function M_(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new g(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Wl{convertValue(e,t="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return er(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ea(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=el(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(es(e));default:return null}}convertTimestamp(e){const t=rn(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=U.fromString(e);S(Ng(r));const i=new on(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(t)||ue(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class jP extends Wl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Q(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mt extends cs{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ni(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ba("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ni extends Mt{data(e={}){return super.data(e)}}class hn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Dn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ni(this._firestore,this._userDataWriter,r.key,r,new Dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new g(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Ni(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Dn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Ni(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Dn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:GP(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function GP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}function F_(n,e){return n instanceof Mt&&e instanceof Mt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof hn&&e instanceof hn&&n._firestore===e._firestore&&A_(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(n){n=q(n,Q);const e=q(n.firestore,oe);return __(ve(e),n._key).then(t=>Kl(e,n,t))}class ir extends Wl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Q(this.firestore,null,t)}}function KP(n){n=q(n,Q);const e=q(n.firestore,oe),t=ve(e),r=new ir(e);return lP(t,n._key).then(i=>new Mt(e,r,n._key,i,new Dn(i!==null&&i.hasLocalMutations,!0),n.converter))}function HP(n){n=q(n,Q);const e=q(n.firestore,oe);return __(ve(e),n._key,{source:"server"}).then(t=>Kl(e,n,t))}function QP(n){n=q(n,Se);const e=q(n.firestore,oe),t=ve(e),r=new ir(e);return O_(n._query),y_(t,n._query).then(i=>new hn(e,r,n,i))}function YP(n){n=q(n,Se);const e=q(n.firestore,oe),t=ve(e),r=new ir(e);return hP(t,n._query).then(i=>new hn(e,r,n,i))}function JP(n){n=q(n,Se);const e=q(n.firestore,oe),t=ve(e),r=new ir(e);return y_(t,n._query,{source:"server"}).then(i=>new hn(e,r,n,i))}function Xd(n,e,t){n=q(n,Q);const r=q(n.firestore,oe),i=Da(n.converter,e,t);return Ms(r,[Ra(nr(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,X.none())])}function Zd(n,e,t,...r){n=q(n,Q);const i=q(n.firestore,oe),s=nr(i);let o;return o=typeof(e=b(e))=="string"||e instanceof ln?Bl(s,"updateDoc",n._key,e,t,r):Ul(s,"updateDoc",n._key,e),Ms(i,[o.toMutation(n._key,X.exists(!0))])}function XP(n){return Ms(q(n.firestore,oe),[new Xr(n._key,X.none())])}function ZP(n,e){const t=q(n.firestore,oe),r=Lo(n),i=Da(n.converter,e);return Ms(t,[Ra(nr(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,X.exists(!1))]).then(()=>r)}function U_(n,...e){var t,r,i;n=b(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Jc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Jc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof Q)u=q(n.firestore,oe),l=Yr(n._key.path),c={next:h=>{e[o]&&e[o](Kl(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=q(n,Se);u=q(h.firestore,oe),l=h._query;const d=new ir(u);c={next:f=>{e[o]&&e[o](new hn(u,d,h,f))},error:e[o+1],complete:e[o+2]},O_(n._query)}return function(d,f,I,v){const y=new va(v),k=new bl(f,y,I);return d.asyncQueue.enqueueAndForget(async()=>El(await Br(d),k)),()=>{y.Na(),d.asyncQueue.enqueueAndForget(async()=>Al(await Br(d),k))}}(ve(u),l,a,c)}function e0(n,e){return dP(ve(n=q(n,oe)),Jc(e)?e:{next:e})}function Ms(n,e){return function(r,i){const s=new ge;return r.asyncQueue.enqueueAndForget(async()=>BS(await Ll(r),i,s)),s.promise}(ve(n),e)}function Kl(n,e,t){const r=t.docs.get(e._key),i=new ir(n);return new Mt(n,i,e._key,r,new Dn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=nr(e)}set(e,t,r){this._verifyNotCommitted();const i=Yt(e,this._firestore),s=Da(i.converter,t,r),o=Ra(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,X.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Yt(e,this._firestore);let o;return o=typeof(t=b(t))=="string"||t instanceof ln?Bl(this._dataReader,"WriteBatch.update",s._key,t,r,i):Ul(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,X.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Yt(e,this._firestore);return this._mutations=this._mutations.concat(new Xr(t._key,X.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new g(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Yt(n,e){if((n=b(n)).firestore!==e)throw new g(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0 extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=nr(t)}get(t){const r=Yt(t,this._firestore),i=new jP(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return R();const o=s[0];if(o.isFoundDocument())return new cs(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new cs(this._firestore,i,r._key,null,r.converter);throw R()})}set(t,r,i){const s=Yt(t,this._firestore),o=Da(s.converter,r,i),a=Ra(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=Yt(t,this._firestore);let a;return a=typeof(r=b(r))=="string"||r instanceof ln?Bl(this._dataReader,"Transaction.update",o._key,r,i,s):Ul(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=Yt(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Yt(e,this._firestore),r=new ir(this._firestore);return super.get(e).then(i=>new Mt(this._firestore,r,t._key,i._document,new Dn(!1,!1),t.converter))}}function i0(n,e,t){n=q(n,oe);const r=Object.assign(Object.assign({},t0),t);return function(s){if(s.maxAttempts<1)throw new g(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new ge;return s.asyncQueue.enqueueAndForget(async()=>{const u=await aP(s);new sP(s.asyncQueue,u,a,o,c).run()}),c.promise}(ve(n),i=>e(new r0(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(){return new Os("deleteField")}function o0(){return new Fl("serverTimestamp")}function a0(...n){return new DP("arrayUnion",n)}function c0(...n){return new NP("arrayRemove",n)}function u0(n){return new VP("increment",n)}(function(e,t=!0){(function(i){Qr=i})(Ft),xt(new et("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new oe(new gR(r.getProvider("auth-internal")),new vR(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new g(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ze(Kh,"4.4.0",e),Ze(Kh,"4.4.0","esm2017")})();const l0="@firebase/firestore-compat",h0="0.3.23";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new g("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){if(typeof Uint8Array>"u")throw new g("unimplemented","Uint8Arrays are not available in this environment.")}function tf(){if(!GR())throw new g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class us{constructor(e){this._delegate=e}static fromBase64String(e){return tf(),new us(Et.fromBase64String(e))}static fromUint8Array(e){return ef(),new us(Et.fromUint8Array(e))}toBase64(){return tf(),this._delegate.toBase64()}toUint8Array(){return ef(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n){return d0(n,["next","error","complete"])}function d0(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{enableIndexedDbPersistence(e,t){return vP(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return wP(e._delegate)}clearIndexedDbPersistence(e){return TP(e._delegate)}}class B_{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof on||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&ot("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){mP(this._delegate,e,t,r)}enableNetwork(){return AP(this._delegate)}disableNetwork(){return RP(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,v_("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return EP(this._delegate)}onSnapshotsInSync(e){return e0(this._delegate,e)}get app(){if(!this._appCompat)throw new g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new qr(this,T_(this._delegate,e))}catch(t){throw Oe(t,"collection()","Firestore.collection()")}}doc(e){try{return new Je(this,Lo(this._delegate,e))}catch(t){throw Oe(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new xe(this,gP(this._delegate,e))}catch(t){throw Oe(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return i0(this._delegate,t=>e(new q_(this,t)))}batch(){return ve(this._delegate),new $_(new n0(this._delegate,e=>Ms(this._delegate,e)))}loadBundle(e){return bP(this._delegate,e)}namedQuery(e){return SP(this._delegate,e).then(t=>t?new xe(this,t):null)}}class Na extends Wl{constructor(e){super(),this.firestore=e}convertBytes(e){return new us(new Et(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Je.forKey(t,this.firestore,null)}}function p0(n){dR(n)}class q_{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Na(e)}get(e){const t=Nn(e);return this._delegate.get(t).then(r=>new ls(this._firestore,new Mt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Nn(e);return r?(Hl("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Nn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Nn(e);return this._delegate.delete(t),this}}class $_{constructor(e){this._delegate=e}set(e,t,r){const i=Nn(e);return r?(Hl("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Nn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Nn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Qn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ni(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new hs(this._firestore,r),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Qn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Qn(e,new Na(e),t),i.set(t,s)),s}}Qn.INSTANCES=new WeakMap;class Je{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Na(e)}static forPath(e,t,r){if(e.length%2!==0)throw new g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Je(t,new Q(t._delegate,r,new T(e)))}static forKey(e,t,r){return new Je(t,new Q(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new qr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new qr(this.firestore,T_(this._delegate,e))}catch(t){throw Oe(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=b(e),e instanceof Q?E_(this._delegate,e):!1}set(e,t){t=Hl("DocumentReference.set",t);try{return t?Xd(this._delegate,e,t):Xd(this._delegate,e)}catch(r){throw Oe(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Zd(this._delegate,e):Zd(this._delegate,e,t,...r)}catch(i){throw Oe(i,"updateDoc()","DocumentReference.update()")}}delete(){return XP(this._delegate)}onSnapshot(...e){const t=z_(e),r=j_(e,i=>new ls(this.firestore,new Mt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return U_(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=KP(this._delegate):(e==null?void 0:e.source)==="server"?t=HP(this._delegate):t=WP(this._delegate),t.then(r=>new ls(this.firestore,new Mt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Je(this.firestore,e?this._delegate.withConverter(Qn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Oe(n,e,t){return n.message=n.message.replace(e,t),n}function z_(n){for(const e of n)if(typeof e=="object"&&!Zc(e))return e;return{}}function j_(n,e){var t,r;let i;return Zc(n[0])?i=n[0]:Zc(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ls{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Je(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return F_(this._delegate,e._delegate)}}class hs extends ls{data(e){const t=this._delegate.data(e);return this._delegate._converter||fR(t!==void 0),t}}class xe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Na(e)}where(e,t,r){try{return new xe(this.firestore,Ht(this._delegate,LP(e,t,r)))}catch(i){throw Oe(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new xe(this.firestore,Ht(this._delegate,MP(e,t)))}catch(r){throw Oe(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new xe(this.firestore,Ht(this._delegate,FP(e)))}catch(t){throw Oe(t,"limit()","Query.limit()")}}limitToLast(e){try{return new xe(this.firestore,Ht(this._delegate,UP(e)))}catch(t){throw Oe(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new xe(this.firestore,Ht(this._delegate,BP(...e)))}catch(t){throw Oe(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new xe(this.firestore,Ht(this._delegate,qP(...e)))}catch(t){throw Oe(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new xe(this.firestore,Ht(this._delegate,$P(...e)))}catch(t){throw Oe(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new xe(this.firestore,Ht(this._delegate,zP(...e)))}catch(t){throw Oe(t,"endAt()","Query.endAt()")}}isEqual(e){return A_(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=YP(this._delegate):(e==null?void 0:e.source)==="server"?t=JP(this._delegate):t=QP(this._delegate),t.then(r=>new eu(this.firestore,new hn(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=z_(e),r=j_(e,i=>new eu(this.firestore,new hn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return U_(this._delegate,t,r)}withConverter(e){return new xe(this.firestore,e?this._delegate.withConverter(Qn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class m0{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new hs(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class eu{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new xe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new hs(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new m0(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new hs(this._firestore,r))})}isEqual(e){return F_(this._delegate,e._delegate)}}class qr extends xe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Je(this.firestore,e):null}doc(e){try{return e===void 0?new Je(this.firestore,Lo(this._delegate)):new Je(this.firestore,Lo(this._delegate,e))}catch(t){throw Oe(t,"doc()","CollectionReference.doc()")}}add(e){return ZP(this._delegate,e).then(t=>new Je(this.firestore,t))}isEqual(e){return E_(this._delegate,e._delegate)}withConverter(e){return new qr(this.firestore,e?this._delegate.withConverter(Qn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Nn(n){return q(n,Q)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(...e){this._delegate=new ln(...e)}static documentId(){return new Ql(J.keyField().canonicalString())}isEqual(e){return e=b(e),e instanceof ln?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._delegate=e}static serverTimestamp(){const e=o0();return e._methodName="FieldValue.serverTimestamp",new Sn(e)}static delete(){const e=s0();return e._methodName="FieldValue.delete",new Sn(e)}static arrayUnion(...e){const t=a0(...e);return t._methodName="FieldValue.arrayUnion",new Sn(t)}static arrayRemove(...e){const t=c0(...e);return t._methodName="FieldValue.arrayRemove",new Sn(t)}static increment(e){const t=u0(e);return t._methodName="FieldValue.increment",new Sn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0={Firestore:B_,GeoPoint:Ea,Timestamp:Z,Blob:us,Transaction:q_,WriteBatch:$_,DocumentReference:Je,DocumentSnapshot:ls,Query:xe,QueryDocumentSnapshot:hs,QuerySnapshot:eu,CollectionReference:qr,FieldPath:Ql,FieldValue:Sn,setLogLevel:p0,CACHE_SIZE_UNLIMITED:IP};function _0(n,e){n.INTERNAL.registerComponent(new et("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},g0)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(n){_0(n,(e,t)=>new B_(e,t,new f0)),n.registerVersion(l0,h0)}y0(At);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="firebasestorage.googleapis.com",W_="storageBucket",I0=2*60*1e3,v0=10*60*1e3,w0=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends ke{constructor(e,t,r=0){super(oc(e),`Firebase Storage: ${t} (${oc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return oc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Y;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Y||(Y={}));function oc(n){return"storage/"+n}function Yl(){const n="An unknown error occurred, please check the error payload for server response.";return new ne(Y.UNKNOWN,n)}function T0(n){return new ne(Y.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function E0(n){return new ne(Y.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function A0(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ne(Y.UNAUTHENTICATED,n)}function R0(){return new ne(Y.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function b0(n){return new ne(Y.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function K_(){return new ne(Y.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function H_(){return new ne(Y.CANCELED,"User canceled the upload/download.")}function S0(n){return new ne(Y.INVALID_URL,"Invalid URL '"+n+"'.")}function P0(n){return new ne(Y.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function C0(){return new ne(Y.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+W_+"' property when initializing the app?")}function Q_(){return new ne(Y.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function k0(){return new ne(Y.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function D0(){return new ne(Y.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function N0(n){return new ne(Y.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function br(n){return new ne(Y.INVALID_ARGUMENT,n)}function Y_(){return new ne(Y.APP_DELETED,"The Firebase app was deleted.")}function J_(n){return new ne(Y.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Vi(n,e){return new ne(Y.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function pi(n){throw new ne(Y.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ce.makeFromUrl(e,t)}catch{return new Ce(e,"")}if(r.path==="")return r;throw P0(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(V){V.path_=decodeURIComponent(V.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),I={bucket:1,path:3},v=t===G_?"(?:storage.googleapis.com|storage.cloud.google.com)":t,y="([^?#]*)",k=new RegExp(`^https?://${v}/${i}/${y}`,"i"),C=[{regex:a,indices:c,postModify:s},{regex:f,indices:I,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let V=0;V<C.length;V++){const $=C[V],B=$.regex.exec(e);if(B){const ee=B[$.indices.bucket];let Be=B[$.indices.path];Be||(Be=""),r=new Ce(ee,Be),$.postModify(r);break}}if(r==null)throw S0(e);return r}}class V0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,n(f,c())},y)}function d(){s&&clearTimeout(s)}function f(y,...k){if(u){d();return}if(y){d(),l.call(null,y,...k);return}if(c()||o){d(),l.call(null,y,...k);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,h(C)}let I=!1;function v(y){I||(I=!0,d(),!u&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},t),v}function O0(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(n){return n!==void 0}function M0(n){return typeof n=="function"}function F0(n){return typeof n=="object"&&!Array.isArray(n)}function Va(n){return typeof n=="string"||n instanceof String}function nf(n){return Jl()&&n instanceof Blob}function Jl(){return typeof Blob<"u"}function tu(n,e,t,r){if(r<e)throw br(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw br(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function X_(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Mn||(Mn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,t,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,I)=>{this.resolve_=f,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ys(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mn.NO_ERROR,c=s.getStatus();if(!a||Z_(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Mn.ABORT;r(!1,new Ys(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ys(u,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());L0(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Yl();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Y_():H_();o(c)}else{const c=K_();o(c)}};this.canceled_?t(!1,new Ys(!1,null,!0)):this.backoffId_=x0(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&O0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ys{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function B0(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function q0(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function $0(n,e){e&&(n["X-Firebase-GMPID"]=e)}function z0(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function j0(n,e,t,r,i,s,o=!0){const a=X_(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return $0(u,e),B0(u,t),q0(u,s),z0(u,r),new U0(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function W0(...n){const e=G0();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Jl())return new Blob(n);throw new ne(Y.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function K0(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(n){if(typeof atob>"u")throw N0("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ac{constructor(e,t){this.data=e,this.contentType=t||null}}function ey(n,e){switch(n){case Xe.RAW:return new ac(ty(e));case Xe.BASE64:case Xe.BASE64URL:return new ac(ny(n,e));case Xe.DATA_URL:return new ac(Y0(e),J0(e))}throw Yl()}function ty(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Q0(n){let e;try{e=decodeURIComponent(n)}catch{throw Vi(Xe.DATA_URL,"Malformed data URL.")}return ty(e)}function ny(n,e){switch(n){case Xe.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Vi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Xe.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Vi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=H0(e)}catch(i){throw i.message.includes("polyfill")?i:Vi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class ry{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Vi(Xe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=X0(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Y0(n){const e=new ry(n);return e.base64?ny(Xe.BASE64,e.rest):Q0(e.rest)}function J0(n){return new ry(n).contentType}function X0(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){let r=0,i="";nf(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(nf(this.data_)){const r=this.data_,i=K0(r,e,t);return i===null?null:new bt(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new bt(r,!0)}}static getBlob(...e){if(Jl()){const t=e.map(r=>r instanceof bt?r.data_:r);return new bt(W0.apply(null,t))}else{const t=e.map(o=>Va(o)?ey(Xe.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new bt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n){let e;try{e=JSON.parse(n)}catch{return null}return F0(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function eC(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function iy(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(n,e){return e}class Ve{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||tC}}let Js=null;function nC(n){return!Va(n)||n.length<2?n:iy(n)}function xa(){if(Js)return Js;const n=[];n.push(new Ve("bucket")),n.push(new Ve("generation")),n.push(new Ve("metageneration")),n.push(new Ve("name","fullPath",!0));function e(s,o){return nC(o)}const t=new Ve("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new Ve("size");return i.xform=r,n.push(i),n.push(new Ve("timeCreated")),n.push(new Ve("updated")),n.push(new Ve("md5Hash",null,!0)),n.push(new Ve("cacheControl",null,!0)),n.push(new Ve("contentDisposition",null,!0)),n.push(new Ve("contentEncoding",null,!0)),n.push(new Ve("contentLanguage",null,!0)),n.push(new Ve("contentType",null,!0)),n.push(new Ve("metadata","customMetadata",!0)),Js=n,Js}function rC(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Ce(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function iC(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return rC(r,n),r}function sy(n,e,t){const r=Xl(e);return r===null?null:iC(n,r,t)}function sC(n,e,t,r){const i=Xl(e);if(i===null||!Va(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=n.bucket,h=n.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=In(d,t,r),I=X_({alt:"media",token:u});return f+I})[0]}function Zl(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="prefixes",sf="items";function oC(n,e,t){const r={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[rf])for(const i of t[rf]){const s=i.replace(/\/$/,""),o=n._makeStorageReference(new Ce(e,s));r.prefixes.push(o)}if(t[sf])for(const i of t[sf]){const s=n._makeStorageReference(new Ce(e,i.name));r.items.push(s)}return r}function aC(n,e,t){const r=Xl(t);return r===null?null:oC(n,e,r)}class jt{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n){if(!n)throw Yl()}function Oa(n,e){function t(r,i){const s=sy(n,i,e);return vt(s!==null),s}return t}function cC(n,e){function t(r,i){const s=aC(n,e,i);return vt(s!==null),s}return t}function uC(n,e){function t(r,i){const s=sy(n,i,e);return vt(s!==null),sC(s,i,n.host,n._protocol)}return t}function ri(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=R0():i=A0():t.getStatus()===402?i=E0(n.bucket):t.getStatus()===403?i=b0(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function La(n){const e=ri(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=T0(n.path)),s.serverResponse=i.serverResponse,s}return t}function oy(n,e,t){const r=e.fullServerUrl(),i=In(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new jt(i,s,Oa(n,t),o);return a.errorHandler=La(e),a}function lC(n,e,t,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",t&&t.length>0&&(s.delimiter=t),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=In(o,n.host,n._protocol),c="GET",u=n.maxOperationRetryTime,l=new jt(a,c,cC(n,e.bucket),u);return l.urlParams=s,l.errorHandler=ri(e),l}function hC(n,e,t){const r=e.fullServerUrl(),i=In(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new jt(i,s,uC(n,t),o);return a.errorHandler=La(e),a}function dC(n,e,t,r){const i=e.fullServerUrl(),s=In(i,n.host,n._protocol),o="PATCH",a=Zl(t,r),c={"Content-Type":"application/json; charset=utf-8"},u=n.maxOperationRetryTime,l=new jt(s,o,Oa(n,r),u);return l.headers=c,l.body=a,l.errorHandler=La(e),l}function fC(n,e){const t=e.fullServerUrl(),r=In(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(c,u){}const a=new jt(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=La(e),a}function pC(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ay(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=pC(null,e)),r}function mC(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let V=0;V<2;V++)C=C+Math.random().toString().slice(2);return C}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=ay(e,r,i),l=Zl(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=bt.getBlob(h,r,d);if(f===null)throw Q_();const I={name:u.fullPath},v=In(s,n.host,n._protocol),y="POST",k=n.maxUploadRetryTime,D=new jt(v,y,Oa(n,t),k);return D.urlParams=I,D.headers=o,D.body=f.uploadData(),D.errorHandler=ri(e),D}class Fo{constructor(e,t,r,i){this.current=e,this.total=t,this.finalized=!!r,this.metadata=i||null}}function eh(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{vt(!1)}return vt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function gC(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o=ay(e,r,i),a={name:o.fullPath},c=In(s,n.host,n._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Zl(o,t),d=n.maxUploadRetryTime;function f(v){eh(v);let y;try{y=v.getResponseHeader("X-Goog-Upload-URL")}catch{vt(!1)}return vt(Va(y)),y}const I=new jt(c,u,f,d);return I.urlParams=a,I.headers=l,I.body=h,I.errorHandler=ri(e),I}function _C(n,e,t,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=eh(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{vt(!1)}h||vt(!1);const d=Number(h);return vt(!isNaN(d)),new Fo(d,r.size(),l==="final")}const o="POST",a=n.maxUploadRetryTime,c=new jt(t,o,s,a);return c.headers=i,c.errorHandler=ri(e),c}const of=256*1024;function yC(n,e,t,r,i,s,o,a){const c=new Fo(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw k0();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const I={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},v=r.slice(h,d);if(v===null)throw Q_();function y(V,$){const B=eh(V,["active","final"]),ee=c.current+l,Be=r.size();let Rt;return B==="final"?Rt=Oa(e,s)(V,$):Rt=null,new Fo(ee,Be,B==="final",Rt)}const k="POST",D=e.maxUploadRetryTime,C=new jt(t,k,y,D);return C.headers=I,C.body=v.uploadData(),C.progressCallback=a||null,C.errorHandler=ri(n),C}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={STATE_CHANGED:"state_changed"},Le={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function cc(n){switch(n){case"running":case"pausing":case"canceling":return Le.RUNNING;case"paused":return Le.PAUSED;case"success":return Le.SUCCESS;case"canceled":return Le.CANCELED;case"error":return Le.ERROR;default:return Le.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,t,r){if(M0(e)||t!=null||r!=null)this.next=e,this.error=t!=null?t:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class wC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw pi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TC extends wC{initXhr(){this.xhr_.responseType="text"}}function dt(){return new TC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=xa(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Y.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Z_(i.status,[]))if(s)i=K_();else{this.sleepTime=Math.max(this.sleepTime*2,w0),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Y.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=gC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,dt,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const i=_C(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,dt,t,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=of*this._chunkMultiplier,t=new Fo(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=yC(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,dt,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){of*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=oy(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,dt,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=mC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,dt,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=H_(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=cc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,i){const s=new vC(t||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(cc(this._state)){case Le.SUCCESS:hr(this._resolve.bind(null,this.snapshot))();break;case Le.CANCELED:case Le.ERROR:const t=this._reject;hr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(cc(this._state)){case Le.RUNNING:case Le.PAUSED:e.next&&hr(e.next.bind(e,this.snapshot))();break;case Le.SUCCESS:e.complete&&hr(e.complete.bind(e))();break;case Le.CANCELED:case Le.ERROR:e.error&&hr(e.error.bind(e,this._error))();break;default:e.error&&hr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t){this._service=e,t instanceof Ce?this._location=t:this._location=Ce.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Yn(e,t)}get root(){const e=new Ce(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iy(this._location.path)}get storage(){return this._service}get parent(){const e=Z0(this._location.path);if(e===null)return null;const t=new Ce(this._location.bucket,e);return new Yn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw J_(e)}}function EC(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new cy(n,new bt(e),t)}function AC(n){const e={prefixes:[],items:[]};return uy(n,e).then(()=>e)}async function uy(n,e,t){const i=await ly(n,{pageToken:t});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await uy(n,e,i.nextPageToken)}function ly(n,e){e!=null&&typeof e.maxResults=="number"&&tu("options.maxResults",1,1e3,e.maxResults);const t=e||{},r=lC(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(r,dt)}function RC(n){n._throwIfRoot("getMetadata");const e=oy(n.storage,n._location,xa());return n.storage.makeRequestWithTokens(e,dt)}function bC(n,e){n._throwIfRoot("updateMetadata");const t=dC(n.storage,n._location,e,xa());return n.storage.makeRequestWithTokens(t,dt)}function SC(n){n._throwIfRoot("getDownloadURL");const e=hC(n.storage,n._location,xa());return n.storage.makeRequestWithTokens(e,dt).then(t=>{if(t===null)throw D0();return t})}function PC(n){n._throwIfRoot("deleteObject");const e=fC(n.storage,n._location);return n.storage.makeRequestWithTokens(e,dt)}function hy(n,e){const t=eC(n._location.path,e),r=new Ce(n._location.bucket,t);return new Yn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(n){return/^[A-Za-z]+:\/\//.test(n)}function kC(n,e){return new Yn(n,e)}function dy(n,e){if(n instanceof th){const t=n;if(t._bucket==null)throw C0();const r=new Yn(t,t._bucket);return e!=null?dy(r,e):r}else return e!==void 0?hy(n,e):n}function DC(n,e){if(e&&CC(e)){if(n instanceof th)return kC(n,e);throw br("To use ref(service, url), the first argument must be a Storage instance.")}else return dy(n,e)}function af(n,e){const t=e==null?void 0:e[W_];return t==null?null:Ce.makeFromBucketSpec(t,n)}function NC(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:yf(i,n.app.options.projectId))}class th{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=G_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=I0,this._maxUploadRetryTime=v0,this._requests=new Set,i!=null?this._bucket=Ce.makeFromBucketSpec(i,this._host):this._bucket=af(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ce.makeFromBucketSpec(this._url,e):this._bucket=af(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){tu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){tu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new V0(Y_());{const o=j0(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const cf="@firebase/storage",uf="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC="storage";function xC(n,e,t){return n=b(n),EC(n,e,t)}function OC(n){return n=b(n),RC(n)}function LC(n,e){return n=b(n),bC(n,e)}function MC(n,e){return n=b(n),ly(n,e)}function FC(n){return n=b(n),AC(n)}function UC(n){return n=b(n),SC(n)}function BC(n){return n=b(n),PC(n)}function lf(n,e){return n=b(n),DC(n,e)}function qC(n,e){return hy(n,e)}function $C(n,e,t,r={}){NC(n,e,t,r)}function zC(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new th(t,r,i,e,Ft)}function jC(){xt(new et(VC,zC,"PUBLIC").setMultipleInstances(!0)),Ze(cf,uf,""),Ze(cf,uf,"esm2017")}jC();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Xs(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(r=>{if(e)return e(new Xs(r,this,this._ref))},t)}on(e,t,r,i){let s;return t&&(typeof t=="function"?s=o=>t(new Xs(o,this,this._ref)):s={next:t.next?o=>t.next(new Xs(o,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class df{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Vt(e,this._service))}get items(){return this._delegate.items.map(e=>new Vt(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=qC(this._delegate,e);return new Vt(t,this.storage)}get root(){return new Vt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Vt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new hf(xC(this._delegate,e,t),this)}putString(e,t=Xe.RAW,r){this._throwIfRoot("putString");const i=ey(t,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new hf(new cy(this._delegate,new bt(i.data,!0),s),this)}listAll(){return FC(this._delegate).then(e=>new df(e,this.storage))}list(e){return MC(this._delegate,e||void 0).then(t=>new df(t,this.storage))}getMetadata(){return OC(this._delegate)}updateMetadata(e){return LC(this._delegate,e)}getDownloadURL(){return UC(this._delegate)}delete(){return this._throwIfRoot("delete"),BC(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw J_(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(ff(e))throw br("ref() expected a child path but got a URL, use refFromURL instead.");return new Vt(lf(this._delegate,e),this)}refFromURL(e){if(!ff(e))throw br("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Ce.makeFromUrl(e,this._delegate.host)}catch{throw br("refFromUrl() expected a valid full URL but got an invalid one.")}return new Vt(lf(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){$C(this._delegate,e,t,r)}}function ff(n){return/^[A-Za-z]+:\/\//.test(n)}const GC="@firebase/storage-compat",WC="0.3.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="storage-compat";function HC(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),r=n.getProvider("storage").getImmediate({identifier:e});return new fy(t,r)}function QC(n){const e={TaskState:Le,TaskEvent:IC,StringFormat:Xe,Storage:fy,Reference:Vt};n.INTERNAL.registerComponent(new et(KC,HC,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion(GC,WC)}QC(At);const YC={apiKey:"AIzaSyAfAdJa0TnQe95YNI5mDTuqSQPIWErl4EE",authDomain:"yousef-firebase-ae727.firebaseapp.com",projectId:"yousef-firebase-ae727",storageBucket:"yousef-firebase-ae727.appspot.com",messagingSenderId:"805319693962",appId:"1:805319693962:web:90d5e2ae6e3d97d0a17f73"};At.initializeApp(YC);const Ti=At.firestore();At.firestore.FieldValue.serverTimestamp;const rk=At.storage(),JC=n=>{const e=nh([]),t=nh(null);return{posts:e,error:t,load:async()=>{try{const i=await Ti.collection(n).get();e.value=i.docs.map(s=>({...s.data(),id:s.id}))}catch(i){t.value=i.message,console.log(t.value)}}}},ik=py("cart",{state:()=>({cart:[]}),actions:{async getCart(){const{posts:n,error:e,load:t}=JC("cart");await t(),this.cart=n.value},async deleteFromCart(n){this.cart=this.cart.filter(e=>e.id!=n.id),await Ti.collection("cart").doc(n.id).delete()},async addToCart(n){this.cart.find(e=>e.id==n.id)?(this.incQuantity(n),console.log("found")):(this.cart.push({...n,quantity:1}),await Ti.collection("cart").add({...n,quantity:1}),console.log("added"))},async incQuantity(n){let e;this.cart=this.cart.map(t=>(t.id==n.id&&(t.quantity++,e=t),t)),await Ti.collection("cart").doc(n.id).update({quantity:e.quantity})},async decQuantity(n){n.quantity<=1&&this.deleteFromCart(n),n.quantity-=1,Ti.collection("cart").doc(n.id).update({quantity:n.quantity})}},getters:{total(){return this.cart.reduce((n,e)=>n+e.price*e.quantity,0)},length(){return this.cart.reduce((n,e)=>n+e.quantity,0)}}});export{JC as g,rk as p,ik as u};
