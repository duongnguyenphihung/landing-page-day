var Ot=e=>{throw TypeError(e)};var vt=(e,t,s)=>t.has(e)||Ot("Cannot "+s);var i=(e,t,s)=>(vt(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?Ot("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),o=(e,t,s,r)=>(vt(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),P=(e,t,s)=>(vt(e,t,"access private method"),s);var dt=(e,t,s,r)=>({set _(n){o(e,t,n,s)},get _(){return i(e,t,r)}});import{w as _t,a as $t}from"./with-props-B1Bv_2nK.js";import{r as Kt,l as S,M as Vt,L as Jt,S as Wt,n as Xt,O as Yt,o as Zt}from"./chunk-D52XG6IA-C_PBXKmx.js";const te="/assets/app-BgO77I9T.css";var pt=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},mt=typeof window>"u"||"Deno"in globalThis;function R(){}function ee(e,t){return typeof e=="function"?e(t):e}function se(e){return typeof e=="number"&&e>=0&&e!==1/0}function re(e,t){return Math.max(e+(t||0)-Date.now(),0)}function St(e,t){return typeof e=="function"?e(t):e}function ie(e,t){return typeof e=="function"?e(t):e}function Ft(e,t){const{type:s="all",exact:r,fetchStatus:n,predicate:u,queryKey:h,stale:a}=e;if(h){if(r){if(t.queryHash!==wt(h,t.options))return!1}else if(!ot(t.queryKey,h))return!1}if(s!=="all"){const f=t.isActive();if(s==="active"&&!f||s==="inactive"&&f)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||n&&n!==t.state.fetchStatus||u&&!u(t))}function Ct(e,t){const{exact:s,status:r,predicate:n,mutationKey:u}=e;if(u){if(!t.options.mutationKey)return!1;if(s){if(ut(t.options.mutationKey)!==ut(u))return!1}else if(!ot(t.options.mutationKey,u))return!1}return!(r&&t.state.status!==r||n&&!n(t))}function wt(e,t){return((t==null?void 0:t.queryKeyHashFn)||ut)(e)}function ut(e){return JSON.stringify(e,(t,s)=>bt(s)?Object.keys(s).sort().reduce((r,n)=>(r[n]=s[n],r),{}):s)}function ot(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(s=>!ot(e[s],t[s])):!1}function kt(e,t){if(e===t)return e;const s=Et(e)&&Et(t);if(s||bt(e)&&bt(t)){const r=s?e:Object.keys(e),n=r.length,u=s?t:Object.keys(t),h=u.length,a=s?[]:{};let f=0;for(let w=0;w<h;w++){const m=s?w:u[w];(!s&&r.includes(m)||s)&&e[m]===void 0&&t[m]===void 0?(a[m]=void 0,f++):(a[m]=kt(e[m],t[m]),a[m]===e[m]&&e[m]!==void 0&&f++)}return n===h&&f===n?e:a}return t}function Et(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function bt(e){if(!Dt(e))return!1;const t=e.constructor;if(t===void 0)return!0;const s=t.prototype;return!(!Dt(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Dt(e){return Object.prototype.toString.call(e)==="[object Object]"}function ne(e){return new Promise(t=>{setTimeout(t,e)})}function ae(e,t,s){return typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?kt(e,t):t}function ue(e,t,s=0){const r=[...e,t];return s&&r.length>s?r.slice(1):r}function oe(e,t,s=0){const r=[t,...e];return s&&r.length>s?r.slice(0,-1):r}var Pt=Symbol();function Lt(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Pt?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var V,G,Y,qt,he=(qt=class extends pt{constructor(){super();l(this,V);l(this,G);l(this,Y);o(this,Y,t=>{if(!mt&&window.addEventListener){const s=()=>t();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){i(this,G)||this.setEventListener(i(this,Y))}onUnsubscribe(){var t;this.hasListeners()||((t=i(this,G))==null||t.call(this),o(this,G,void 0))}setEventListener(t){var s;o(this,Y,t),(s=i(this,G))==null||s.call(this),o(this,G,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){i(this,V)!==t&&(o(this,V,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(s=>{s(t)})}isFocused(){var t;return typeof i(this,V)=="boolean"?i(this,V):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},V=new WeakMap,G=new WeakMap,Y=new WeakMap,qt),Ht=new he,Z,N,tt,At,ce=(At=class extends pt{constructor(){super();l(this,Z,!0);l(this,N);l(this,tt);o(this,tt,t=>{if(!mt&&window.addEventListener){const s=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",r)}}})}onSubscribe(){i(this,N)||this.setEventListener(i(this,tt))}onUnsubscribe(){var t;this.hasListeners()||((t=i(this,N))==null||t.call(this),o(this,N,void 0))}setEventListener(t){var s;o(this,tt,t),(s=i(this,N))==null||s.call(this),o(this,N,t(this.setOnline.bind(this)))}setOnline(t){i(this,Z)!==t&&(o(this,Z,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return i(this,Z)}},Z=new WeakMap,N=new WeakMap,tt=new WeakMap,At),yt=new ce;function le(){let e,t;const s=new Promise((n,u)=>{e=n,t=u});s.status="pending",s.catch(()=>{});function r(n){Object.assign(s,n),delete s.resolve,delete s.reject}return s.resolve=n=>{r({status:"fulfilled",value:n}),e(n)},s.reject=n=>{r({status:"rejected",reason:n}),t(n)},s}function de(e){return Math.min(1e3*2**e,3e4)}function Gt(e){return(e??"online")==="online"?yt.isOnline():!0}var Nt=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function gt(e){return e instanceof Nt}function Bt(e){let t=!1,s=0,r=!1,n;const u=le(),h=c=>{var p;r||(y(new Nt(c)),(p=e.abort)==null||p.call(e))},a=()=>{t=!0},f=()=>{t=!1},w=()=>Ht.isFocused()&&(e.networkMode==="always"||yt.isOnline())&&e.canRun(),m=()=>Gt(e.networkMode)&&e.canRun(),d=c=>{var p;r||(r=!0,(p=e.onSuccess)==null||p.call(e,c),n==null||n(),u.resolve(c))},y=c=>{var p;r||(r=!0,(p=e.onError)==null||p.call(e,c),n==null||n(),u.reject(c))},D=()=>new Promise(c=>{var p;n=M=>{(r||w())&&c(M)},(p=e.onPause)==null||p.call(e)}).then(()=>{var c;n=void 0,r||(c=e.onContinue)==null||c.call(e)}),F=()=>{if(r)return;let c;const p=s===0?e.initialPromise:void 0;try{c=p??e.fn()}catch(M){c=Promise.reject(M)}Promise.resolve(c).then(d).catch(M=>{var I;if(r)return;const j=e.retry??(mt?0:3),g=e.retryDelay??de,Q=typeof g=="function"?g(s,M):g,T=j===!0||typeof j=="number"&&s<j||typeof j=="function"&&j(s,M);if(t||!T){y(M);return}s++,(I=e.onFail)==null||I.call(e,s,M),ne(Q).then(()=>w()?void 0:D()).then(()=>{t?y(M):F()})})};return{promise:u,cancel:h,continue:()=>(n==null||n(),u),cancelRetry:a,continueRetry:f,canStart:m,start:()=>(m()?F():D().then(F),u)}}function fe(){let e=[],t=0,s=a=>{a()},r=a=>{a()},n=a=>setTimeout(a,0);const u=a=>{t?e.push(a):n(()=>{s(a)})},h=()=>{const a=e;e=[],a.length&&n(()=>{r(()=>{a.forEach(f=>{s(f)})})})};return{batch:a=>{let f;t++;try{f=a()}finally{t--,t||h()}return f},batchCalls:a=>(...f)=>{u(()=>{a(...f)})},schedule:u,setNotifyFunction:a=>{s=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{n=a}}}var E=fe(),J,jt,zt=(jt=class{constructor(){l(this,J)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),se(this.gcTime)&&o(this,J,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(mt?1/0:5*60*1e3))}clearGcTimeout(){i(this,J)&&(clearTimeout(i(this,J)),o(this,J,void 0))}},J=new WeakMap,jt),et,st,A,O,ht,W,x,L,Rt,ye=(Rt=class extends zt{constructor(t){super();l(this,x);l(this,et);l(this,st);l(this,A);l(this,O);l(this,ht);l(this,W);o(this,W,!1),o(this,ht,t.defaultOptions),this.setOptions(t.options),this.observers=[],o(this,A,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,o(this,et,me(this.options)),this.state=t.state??i(this,et),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=i(this,O))==null?void 0:t.promise}setOptions(t){this.options={...i(this,ht),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&i(this,A).remove(this)}setData(t,s){const r=ae(this.state.data,t,this.options);return P(this,x,L).call(this,{data:r,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),r}setState(t,s){P(this,x,L).call(this,{type:"setState",state:t,setStateOptions:s})}cancel(t){var r,n;const s=(r=i(this,O))==null?void 0:r.promise;return(n=i(this,O))==null||n.cancel(t),s?s.then(R).catch(R):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(i(this,et))}isActive(){return this.observers.some(t=>ie(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Pt||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!re(this.state.dataUpdatedAt,t)}onFocus(){var s;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(s=i(this,O))==null||s.continue()}onOnline(){var s;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(s=i(this,O))==null||s.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),i(this,A).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(s=>s!==t),this.observers.length||(i(this,O)&&(i(this,W)?i(this,O).cancel({revert:!0}):i(this,O).cancelRetry()),this.scheduleGc()),i(this,A).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||P(this,x,L).call(this,{type:"invalidate"})}fetch(t,s){var f,w,m;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(s!=null&&s.cancelRefetch))this.cancel({silent:!0});else if(i(this,O))return i(this,O).continueRetry(),i(this,O).promise}if(t&&this.setOptions(t),!this.options.queryFn){const d=this.observers.find(y=>y.options.queryFn);d&&this.setOptions(d.options)}const r=new AbortController,n=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(o(this,W,!0),r.signal)})},u=()=>{const d=Lt(this.options,s),y={queryKey:this.queryKey,meta:this.meta};return n(y),o(this,W,!1),this.options.persister?this.options.persister(d,y,this):d(y)},h={fetchOptions:s,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};n(h),(f=this.options.behavior)==null||f.onFetch(h,this),o(this,st,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((w=h.fetchOptions)==null?void 0:w.meta))&&P(this,x,L).call(this,{type:"fetch",meta:(m=h.fetchOptions)==null?void 0:m.meta});const a=d=>{var y,D,F,c;gt(d)&&d.silent||P(this,x,L).call(this,{type:"error",error:d}),gt(d)||((D=(y=i(this,A).config).onError)==null||D.call(y,d,this),(c=(F=i(this,A).config).onSettled)==null||c.call(F,this.state.data,d,this)),this.scheduleGc()};return o(this,O,Bt({initialPromise:s==null?void 0:s.initialPromise,fn:h.fetchFn,abort:r.abort.bind(r),onSuccess:d=>{var y,D,F,c;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(p){a(p);return}(D=(y=i(this,A).config).onSuccess)==null||D.call(y,d,this),(c=(F=i(this,A).config).onSettled)==null||c.call(F,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,y)=>{P(this,x,L).call(this,{type:"failed",failureCount:d,error:y})},onPause:()=>{P(this,x,L).call(this,{type:"pause"})},onContinue:()=>{P(this,x,L).call(this,{type:"continue"})},retry:h.options.retry,retryDelay:h.options.retryDelay,networkMode:h.options.networkMode,canRun:()=>!0})),i(this,O).start()}},et=new WeakMap,st=new WeakMap,A=new WeakMap,O=new WeakMap,ht=new WeakMap,W=new WeakMap,x=new WeakSet,L=function(t){const s=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...pe(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const n=t.error;return gt(n)&&n.revert&&i(this,st)?{...i(this,st),fetchStatus:"idle"}:{...r,error:n,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=s(this.state),E.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),i(this,A).notify({query:this,type:"updated",action:t})})},Rt);function pe(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Gt(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function me(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,s=t!==void 0,r=s?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:s?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var U,xt,ve=(xt=class extends pt{constructor(t={}){super();l(this,U);this.config=t,o(this,U,new Map)}build(t,s,r){const n=s.queryKey,u=s.queryHash??wt(n,s);let h=this.get(u);return h||(h=new ye({cache:this,queryKey:n,queryHash:u,options:t.defaultQueryOptions(s),state:r,defaultOptions:t.getQueryDefaults(n)}),this.add(h)),h}add(t){i(this,U).has(t.queryHash)||(i(this,U).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const s=i(this,U).get(t.queryHash);s&&(t.destroy(),s===t&&i(this,U).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){E.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return i(this,U).get(t)}getAll(){return[...i(this,U).values()]}find(t){const s={exact:!0,...t};return this.getAll().find(r=>Ft(s,r))}findAll(t={}){const s=this.getAll();return Object.keys(t).length>0?s.filter(r=>Ft(t,r)):s}notify(t){E.batch(()=>{this.listeners.forEach(s=>{s(t)})})}onFocus(){E.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){E.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},U=new WeakMap,xt),K,C,X,k,H,Tt,ge=(Tt=class extends zt{constructor(t){super();l(this,k);l(this,K);l(this,C);l(this,X);this.mutationId=t.mutationId,o(this,C,t.mutationCache),o(this,K,[]),this.state=t.state||be(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){i(this,K).includes(t)||(i(this,K).push(t),this.clearGcTimeout(),i(this,C).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){o(this,K,i(this,K).filter(s=>s!==t)),this.scheduleGc(),i(this,C).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){i(this,K).length||(this.state.status==="pending"?this.scheduleGc():i(this,C).remove(this))}continue(){var t;return((t=i(this,X))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var n,u,h,a,f,w,m,d,y,D,F,c,p,M,j,g,Q,T,I,lt;o(this,X,Bt({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(b,$)=>{P(this,k,H).call(this,{type:"failed",failureCount:b,error:$})},onPause:()=>{P(this,k,H).call(this,{type:"pause"})},onContinue:()=>{P(this,k,H).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>i(this,C).canRun(this)}));const s=this.state.status==="pending",r=!i(this,X).canStart();try{if(!s){P(this,k,H).call(this,{type:"pending",variables:t,isPaused:r}),await((u=(n=i(this,C).config).onMutate)==null?void 0:u.call(n,t,this));const $=await((a=(h=this.options).onMutate)==null?void 0:a.call(h,t));$!==this.state.context&&P(this,k,H).call(this,{type:"pending",context:$,variables:t,isPaused:r})}const b=await i(this,X).start();return await((w=(f=i(this,C).config).onSuccess)==null?void 0:w.call(f,b,t,this.state.context,this)),await((d=(m=this.options).onSuccess)==null?void 0:d.call(m,b,t,this.state.context)),await((D=(y=i(this,C).config).onSettled)==null?void 0:D.call(y,b,null,this.state.variables,this.state.context,this)),await((c=(F=this.options).onSettled)==null?void 0:c.call(F,b,null,t,this.state.context)),P(this,k,H).call(this,{type:"success",data:b}),b}catch(b){try{throw await((M=(p=i(this,C).config).onError)==null?void 0:M.call(p,b,t,this.state.context,this)),await((g=(j=this.options).onError)==null?void 0:g.call(j,b,t,this.state.context)),await((T=(Q=i(this,C).config).onSettled)==null?void 0:T.call(Q,void 0,b,this.state.variables,this.state.context,this)),await((lt=(I=this.options).onSettled)==null?void 0:lt.call(I,void 0,b,t,this.state.context)),b}finally{P(this,k,H).call(this,{type:"error",error:b})}}finally{i(this,C).runNext(this)}}},K=new WeakMap,C=new WeakMap,X=new WeakMap,k=new WeakSet,H=function(t){const s=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=s(this.state),E.batch(()=>{i(this,K).forEach(r=>{r.onMutationUpdate(t)}),i(this,C).notify({mutation:this,type:"updated",action:t})})},Tt);function be(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var q,ct,It,we=(It=class extends pt{constructor(t={}){super();l(this,q);l(this,ct);this.config=t,o(this,q,new Map),o(this,ct,Date.now())}build(t,s,r){const n=new ge({mutationCache:this,mutationId:++dt(this,ct)._,options:t.defaultMutationOptions(s),state:r});return this.add(n),n}add(t){const s=ft(t),r=i(this,q).get(s)??[];r.push(t),i(this,q).set(s,r),this.notify({type:"added",mutation:t})}remove(t){var r;const s=ft(t);if(i(this,q).has(s)){const n=(r=i(this,q).get(s))==null?void 0:r.filter(u=>u!==t);n&&(n.length===0?i(this,q).delete(s):i(this,q).set(s,n))}this.notify({type:"removed",mutation:t})}canRun(t){var r;const s=(r=i(this,q).get(ft(t)))==null?void 0:r.find(n=>n.state.status==="pending");return!s||s===t}runNext(t){var r;const s=(r=i(this,q).get(ft(t)))==null?void 0:r.find(n=>n!==t&&n.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}clear(){E.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...i(this,q).values()].flat()}find(t){const s={exact:!0,...t};return this.getAll().find(r=>Ct(s,r))}findAll(t={}){return this.getAll().filter(s=>Ct(t,s))}notify(t){E.batch(()=>{this.listeners.forEach(s=>{s(t)})})}resumePausedMutations(){const t=this.getAll().filter(s=>s.state.isPaused);return E.batch(()=>Promise.all(t.map(s=>s.continue().catch(R))))}},q=new WeakMap,ct=new WeakMap,It);function ft(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function Mt(e){return{onFetch:(t,s)=>{var m,d,y,D,F;const r=t.options,n=(y=(d=(m=t.fetchOptions)==null?void 0:m.meta)==null?void 0:d.fetchMore)==null?void 0:y.direction,u=((D=t.state.data)==null?void 0:D.pages)||[],h=((F=t.state.data)==null?void 0:F.pageParams)||[];let a={pages:[],pageParams:[]},f=0;const w=async()=>{let c=!1;const p=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(t.signal.aborted?c=!0:t.signal.addEventListener("abort",()=>{c=!0}),t.signal)})},M=Lt(t.options,t.fetchOptions),j=async(g,Q,T)=>{if(c)return Promise.reject();if(Q==null&&g.pages.length)return Promise.resolve(g);const I={queryKey:t.queryKey,pageParam:Q,direction:T?"backward":"forward",meta:t.options.meta};p(I);const lt=await M(I),{maxPages:b}=t.options,$=T?oe:ue;return{pages:$(g.pages,lt,b),pageParams:$(g.pageParams,Q,b)}};if(n&&u.length){const g=n==="backward",Q=g?Pe:Qt,T={pages:u,pageParams:h},I=Q(r,T);a=await j(T,I,g)}else{const g=e??u.length;do{const Q=f===0?h[0]??r.initialPageParam:Qt(r,a);if(f>0&&Q==null)break;a=await j(a,Q),f++}while(f<g)}return a};t.options.persister?t.fetchFn=()=>{var c,p;return(p=(c=t.options).persister)==null?void 0:p.call(c,w,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s)}:t.fetchFn=w}}}function Qt(e,{pages:t,pageParams:s}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,s[r],s):void 0}function Pe(e,{pages:t,pageParams:s}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,s[0],s):void 0}var v,B,z,rt,it,_,nt,at,Ut,Oe=(Ut=class{constructor(e={}){l(this,v);l(this,B);l(this,z);l(this,rt);l(this,it);l(this,_);l(this,nt);l(this,at);o(this,v,e.queryCache||new ve),o(this,B,e.mutationCache||new we),o(this,z,e.defaultOptions||{}),o(this,rt,new Map),o(this,it,new Map),o(this,_,0)}mount(){dt(this,_)._++,i(this,_)===1&&(o(this,nt,Ht.subscribe(async e=>{e&&(await this.resumePausedMutations(),i(this,v).onFocus())})),o(this,at,yt.subscribe(async e=>{e&&(await this.resumePausedMutations(),i(this,v).onOnline())})))}unmount(){var e,t;dt(this,_)._--,i(this,_)===0&&((e=i(this,nt))==null||e.call(this),o(this,nt,void 0),(t=i(this,at))==null||t.call(this),o(this,at,void 0))}isFetching(e){return i(this,v).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return i(this,B).findAll({...e,status:"pending"}).length}getQueryData(e){var s;const t=this.defaultQueryOptions({queryKey:e});return(s=i(this,v).get(t.queryHash))==null?void 0:s.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),s=i(this,v).build(this,t),r=s.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&s.isStaleByTime(St(t.staleTime,s))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return i(this,v).findAll(e).map(({queryKey:t,state:s})=>{const r=s.data;return[t,r]})}setQueryData(e,t,s){const r=this.defaultQueryOptions({queryKey:e}),n=i(this,v).get(r.queryHash),u=n==null?void 0:n.state.data,h=ee(t,u);if(h!==void 0)return i(this,v).build(this,r).setData(h,{...s,manual:!0})}setQueriesData(e,t,s){return E.batch(()=>i(this,v).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,s)]))}getQueryState(e){var s;const t=this.defaultQueryOptions({queryKey:e});return(s=i(this,v).get(t.queryHash))==null?void 0:s.state}removeQueries(e){const t=i(this,v);E.batch(()=>{t.findAll(e).forEach(s=>{t.remove(s)})})}resetQueries(e,t){const s=i(this,v),r={type:"active",...e};return E.batch(()=>(s.findAll(e).forEach(n=>{n.reset()}),this.refetchQueries(r,t)))}cancelQueries(e,t={}){const s={revert:!0,...t},r=E.batch(()=>i(this,v).findAll(e).map(n=>n.cancel(s)));return Promise.all(r).then(R).catch(R)}invalidateQueries(e,t={}){return E.batch(()=>{if(i(this,v).findAll(e).forEach(r=>{r.invalidate()}),(e==null?void 0:e.refetchType)==="none")return Promise.resolve();const s={...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"};return this.refetchQueries(s,t)})}refetchQueries(e,t={}){const s={...t,cancelRefetch:t.cancelRefetch??!0},r=E.batch(()=>i(this,v).findAll(e).filter(n=>!n.isDisabled()).map(n=>{let u=n.fetch(void 0,s);return s.throwOnError||(u=u.catch(R)),n.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(r).then(R)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const s=i(this,v).build(this,t);return s.isStaleByTime(St(t.staleTime,s))?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(R).catch(R)}fetchInfiniteQuery(e){return e.behavior=Mt(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(R).catch(R)}ensureInfiniteQueryData(e){return e.behavior=Mt(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return yt.isOnline()?i(this,B).resumePausedMutations():Promise.resolve()}getQueryCache(){return i(this,v)}getMutationCache(){return i(this,B)}getDefaultOptions(){return i(this,z)}setDefaultOptions(e){o(this,z,e)}setQueryDefaults(e,t){i(this,rt).set(ut(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...i(this,rt).values()],s={};return t.forEach(r=>{ot(e,r.queryKey)&&Object.assign(s,r.defaultOptions)}),s}setMutationDefaults(e,t){i(this,it).set(ut(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...i(this,it).values()];let s={};return t.forEach(r=>{ot(e,r.mutationKey)&&(s={...s,...r.defaultOptions})}),s}defaultQueryOptions(e){if(e._defaulted)return e;const t={...i(this,z).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=wt(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Pt&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...i(this,z).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){i(this,v).clear(),i(this,B).clear()}},v=new WeakMap,B=new WeakMap,z=new WeakMap,rt=new WeakMap,it=new WeakMap,_=new WeakMap,nt=new WeakMap,at=new WeakMap,Ut),Se=Kt.createContext(void 0),Fe=({client:e,children:t})=>(Kt.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),S.jsx(Se.Provider,{value:e,children:t})),Ce=function(){return null};const qe=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"},{rel:"stylesheet",href:te}];function Ae({children:e}){return S.jsxs("html",{lang:"en",children:[S.jsxs("head",{children:[S.jsx("meta",{charSet:"utf-8"}),S.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),S.jsx(Vt,{}),S.jsx(Jt,{})]}),S.jsxs("body",{children:[e,S.jsx(Wt,{}),S.jsx(Xt,{})]})]})}const Ee=new Oe,je=_t(function(){return S.jsxs(Fe,{client:Ee,children:[S.jsx(Yt,{}),S.jsx(Ce,{initialIsOpen:!1})]})}),Re=$t(function({error:t}){let s="Oops!",r="An unexpected error occurred.",n;return Zt(t)&&(s=t.status===404?"404":"Error",r=t.status===404?"The requested page could not be found.":t.statusText||r),S.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[S.jsx("h1",{children:s}),S.jsx("p",{children:r}),n]})});export{Re as ErrorBoundary,Ae as Layout,je as default,qe as links};