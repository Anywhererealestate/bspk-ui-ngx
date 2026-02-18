import{a as _r}from"./chunk-YQ6ATI5I.js";import{a as Gr}from"./chunk-A7XVIRA5.js";import{a as Or,b as Pr}from"./chunk-YLYDMEXW.js";import{a as Ur}from"./chunk-I7ZG5PUZ.js";import{a as Wr}from"./chunk-P672HPXA.js";import{a as Jt}from"./chunk-QU54ORJ7.js";import"./chunk-BHFJQBGW.js";import"./chunk-CGCXPBVB.js";import"./chunk-PB7SAKJX.js";import{a as Fr}from"./chunk-5RYNVKAX.js";import"./chunk-35L7DRY7.js";import{a as jr}from"./chunk-GTQRBUOE.js";import"./chunk-UPYYWTU3.js";import{a as Nr}from"./chunk-6APW2ANZ.js";import{a as $r}from"./chunk-HJCW6QCZ.js";import{a as Hr}from"./chunk-PEIK53MF.js";import"./chunk-GWCBBZPT.js";import{a as Br}from"./chunk-6T4FD2VU.js";import{a as Lr}from"./chunk-ADOYVMTN.js";import"./chunk-ETJ3TY2W.js";import"./chunk-H75ROQFO.js";import"./chunk-RZAM6B6G.js";import{a as lt,b as Mr,c as Ar,d as Dr,e as Xt,k as li,l as Yt,m as Kt,n as zr}from"./chunk-N6IMOQO3.js";import{$ as rr,$a as Oe,A as qe,Aa as pr,B as ue,Ba as hr,C as Vn,Ca as Ce,Cb as L,D as ze,Da as Ue,E as Le,Ea as fr,Eb as me,F as pe,Fa as ri,G as Xn,Ga as K,H as Qi,Ha as mr,I as er,J as tr,Ja as gr,K as U,L as Yn,La as ai,M as A,Ma as V,N as T,O as Kn,Oa as it,P as y,Pb as si,R as nr,S as I,Sa as br,T as v,Ta as yr,U as c,Ua as vr,V as _t,Va as wr,Vb as Cr,W as ir,Wa as ke,Wb as kr,X as he,Xa as rt,Xb as ge,Y as j,Ya as at,Yb as Wt,Z as jt,Zb as $t,_ as Bt,_b as Sr,a as p,ab as Pe,ac as Er,b as $,ba as Jn,bb as J,ca as E,cb as C,da as Zn,db as k,ea as Qn,eb as le,ec as Gt,fa as Ft,fb as ot,g as Xi,ga as ar,gb as st,gc as Rr,h as Yi,ha as B,hb as Tr,hc as Vt,i as Pt,ia as or,j as Hn,ja as sr,k as Wn,ka as tt,l as oe,la as ei,lb as oi,m as G,ma as lr,n as se,na as Ie,nb as fe,o as N,oa as dr,p as h,pa as ti,pb as Ne,q as et,qa as cr,r as Ki,ra as Ht,s as Ji,sa as ni,sb as xr,t as b,ta as ii,tb as qr,u as $n,ub as Ir,v as _,w as Gn,x as Zi,xa as ur,y as Nt,ya as z,z as te,za as nt}from"./chunk-3WAFZL3C.js";var dt=class{_doc;constructor(n){this._doc=n}manager},Zt=(()=>{class t extends dt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,a){return e.addEventListener(i,r,a),()=>this.removeEventListener(e,i,r,a)}removeEventListener(e,i,r,a){return e.removeEventListener(i,r,a)}static \u0275fac=function(i){return new(i||t)(v(E))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),en=new I(""),hi=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(o=>{o.manager=this});let r=e.filter(o=>!(o instanceof Zt));this._plugins=r.slice().reverse();let a=e.find(o=>o instanceof Zt);a&&this._plugins.push(a)}addEventListener(e,i,r,a){return this._findPluginFor(i).addEventListener(e,i,r,a)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(a=>a.supports(e)),!i)throw new T(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(v(en),v(Ue))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),di="ng-app-id";function Vr(t){for(let n of t)n.remove()}function Xr(t,n){let e=n.createElement("style");return e.textContent=t,e}function ho(t,n,e,i){let r=t.head?.querySelectorAll(`style[${di}="${n}"],link[${di}="${n}"]`);if(r)for(let a of r)a.removeAttribute(di),a instanceof HTMLLinkElement?i.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&e.set(a.textContent,{usage:0,elements:[a]})}function ui(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var fi=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,a={}){this.doc=e,this.appId=i,this.nonce=r,ho(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,Xr);i?.forEach(r=>this.addUsage(r,this.external,ui))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let a=i.get(e);a?a.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(Vr(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Vr(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,Xr(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,ui(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(v(E),v(ti),v(ni,8),v(Ht))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),ci={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},mi=/%COMP%/g;var Kr="%COMP%",fo=`_nghost-${Kr}`,mo=`_ngcontent-${Kr}`,go=!0,bo=new I("",{providedIn:"root",factory:()=>go});function yo(t){return mo.replace(mi,t)}function vo(t){return fo.replace(mi,t)}function Jr(t,n){return n.map(e=>e.replace(mi,t))}var gi=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,i,r,a,o,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=a,this.doc=o,this.ngZone=s,this.nonce=l,this.tracingService=d,this.platformIsServer=!1,this.defaultRenderer=new ct(e,o,s,this.platformIsServer,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Qt?r.applyToHost(e):r instanceof ut&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,a=r.get(i.id);if(!a){let o=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,m=this.platformIsServer,q=this.tracingService;switch(i.encapsulation){case ii.Emulated:a=new Qt(l,d,i,this.appId,u,o,s,m,q);break;case ii.ShadowDom:return new pi(l,d,e,i,o,s,this.nonce,m,q);default:a=new ut(l,d,i,u,o,s,m,q);break}r.set(i.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(v(hi),v(fi),v(ti),v(bo),v(E),v(Ue),v(ni),v(hr,8))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),ct=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r,a){this.eventManager=n,this.doc=e,this.ngZone=i,this.platformIsServer=r,this.tracingService=a}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(ci[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Yr(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(Yr(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new T(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let a=ci[r];a?n.setAttributeNS(a,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=ci[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(nt.DashCase|nt.Important)?n.style.setProperty(e,i,r&nt.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&nt.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=lt().getGlobalEventTarget(this.doc,n),!n))throw new T(5102,!1);let a=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(n,e,a)),this.eventManager.addEventListener(n,e,a,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Yr(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var pi=class extends ct{sharedStylesHost;hostEl;shadowRoot;constructor(n,e,i,r,a,o,s,l,d){super(n,a,o,l,d),this.sharedStylesHost=e,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Jr(r.id,u);for(let q of u){let S=document.createElement("style");s&&S.setAttribute("nonce",s),S.textContent=q,this.shadowRoot.appendChild(S)}let m=r.getExternalStyles?.();if(m)for(let q of m){let S=ui(q,a);s&&S.setAttribute("nonce",s),this.shadowRoot.appendChild(S)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ut=class extends ct{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,a,o,s,l,d){super(n,a,o,s,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=d?Jr(d,u):u,this.styleUrls=i.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&pr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Qt=class extends ut{contentAttr;hostAttr;constructor(n,e,i,r,a,o,s,l,d){let u=r+"-"+i.id;super(n,e,i,a,o,s,l,d,u),this.contentAttr=yo(u),this.hostAttr=vo(u)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var tn=class t extends Ar{supportsDOMEvents=!0;static makeCurrent(){Mr(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=wo();return e==null?null:To(e)}resetBaseElement(){pt=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Yt(document.cookie,n)}},pt=null;function wo(){return pt=pt||document.head.querySelector("base"),pt?pt.getAttribute("href"):null}function To(t){return new URL(t,document.baseURI).pathname}var xo=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Zr=["alt","control","meta","shift"],qo={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Io={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Qr=(()=>{class t extends dt{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,a){let o=t.parseEventName(i),s=t.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>lt().onAndCancel(e,o.domEventName,s,a))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let a=t._normalizeKey(i.pop()),o="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),o="code."),Zr.forEach(d=>{let u=i.indexOf(d);u>-1&&(i.splice(u,1),o+=d+".")}),o+=a,i.length!=0||a.length===0)return null;let l={};return l.domEventName=r,l.fullKey=o,l}static matchEventFullKeyCode(e,i){let r=qo[e.key]||e.key,a="";return i.indexOf("code.")>-1&&(r=e.code,a="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Zr.forEach(o=>{if(o!==r){let s=Io[o];s(e)&&(a+=o+".")}}),a+=r,a===i)}static eventCallback(e,i,r){return a=>{t.matchEventFullKeyCode(a,e)&&r.runGuarded(()=>i(a))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(v(E))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();function vi(t,n,e){let i=p({rootComponent:t,platformRef:e?.platformRef},Co(n));return Rr(i)}function Co(t){return{appProviders:[...Mo,...t?.providers??[]],platformProviders:Ro}}function ko(){tn.makeCurrent()}function So(){return new Qn}function Eo(){return dr(document),document}var Ro=[{provide:Ht,useValue:zr},{provide:cr,useValue:ko,multi:!0},{provide:E,useFactory:Eo}];var Mo=[{provide:ir,useValue:"root"},{provide:Qn,useFactory:So},{provide:en,useClass:Zt,multi:!0,deps:[E]},{provide:en,useClass:Qr,multi:!0,deps:[E]},gi,fi,hi,{provide:fr,useExisting:gi},{provide:Kt,useClass:xo},[]];var je=class{},mt=class{},Se=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),a=e.slice(i+1).trim();this.addHeaderEntry(r,a)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let a=n.value;if(!a)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(s=>a.indexOf(s)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(a=>a.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var rn=class{encodeKey(n){return ea(n)}encodeValue(n){return ea(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Do(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let a=r.indexOf("="),[o,s]=a==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,a)),n.decodeValue(r.slice(a+1))],l=e.get(o)||[];l.push(s),e.set(o,l)}),e}var zo=/%(\d[a-f0-9])/gi,Lo={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ea(t){return encodeURIComponent(t).replace(zo,(n,e)=>Lo[e]??n)}function nn(t){return`${t}`}var be=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new rn,n.fromString){if(n.fromObject)throw new T(2805,!1);this.map=Do(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(nn):[nn(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(a=>{e.push({param:i,value:a,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(nn(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(nn(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var an=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function Uo(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ta(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function na(t){return typeof Blob<"u"&&t instanceof Blob}function ia(t){return typeof FormData<"u"&&t instanceof FormData}function Oo(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var ra="Content-Type",aa="Accept",oa="X-Request-URL",sa="text/plain",la="application/json",Po=`${la}, ${sa}, */*`,ht=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let a;if(Uo(this.method)||r?(this.body=i!==void 0?i:null,a=r):a=i,a){if(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,this.keepalive=!!a.keepalive,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params),a.priority&&(this.priority=a.priority),a.cache&&(this.cache=a.cache),a.credentials&&(this.credentials=a.credentials),typeof a.timeout=="number"){if(a.timeout<1||!Number.isInteger(a.timeout))throw new T(2822,"");this.timeout=a.timeout}a.mode&&(this.mode=a.mode),a.redirect&&(this.redirect=a.redirect),a.integrity&&(this.integrity=a.integrity),a.referrer&&(this.referrer=a.referrer),this.transferCache=a.transferCache}if(this.headers??=new Se,this.context??=new an,!this.params)this.params=new be,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ta(this.body)||na(this.body)||ia(this.body)||Oo(this.body)?this.body:this.body instanceof be?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ia(this.body)?null:na(this.body)?this.body.type||null:ta(this.body)?null:typeof this.body=="string"?sa:this.body instanceof be?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?la:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,a=n.keepalive??this.keepalive,o=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,d=n.redirect||this.redirect,u=n.credentials||this.credentials,m=n.referrer||this.referrer,q=n.integrity||this.integrity,S=n.transferCache??this.transferCache,R=n.timeout??this.timeout,X=n.body!==void 0?n.body:this.body,g=n.withCredentials??this.withCredentials,x=n.reportProgress??this.reportProgress,P=n.headers||this.headers,Y=n.params||this.params,D=n.context??this.context;return n.setHeaders!==void 0&&(P=Object.keys(n.setHeaders).reduce((Te,xe)=>Te.set(xe,n.setHeaders[xe]),P)),n.setParams&&(Y=Object.keys(n.setParams).reduce((Te,xe)=>Te.set(xe,n.setParams[xe]),Y)),new t(e,i,X,{params:Y,headers:P,context:D,reportProgress:x,responseType:r,withCredentials:g,transferCache:S,keepalive:a,cache:s,priority:o,timeout:R,mode:l,redirect:d,credentials:u,referrer:m,integrity:q})}},_e=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(_e||{}),Be=class{headers;status;statusText;url;ok;type;redirected;constructor(n,e=200,i="OK"){this.headers=n.headers||new Se,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.ok=this.status>=200&&this.status<300}},on=class t extends Be{constructor(n={}){super(n)}type=_e.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},sn=class t extends Be{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=_e.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected})}},ft=class extends Be{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},No=200,_o=204;function wi(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer}}var jo=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let a;if(e instanceof ht)a=e;else{let l;r.headers instanceof Se?l=r.headers:l=new Se(r.headers);let d;r.params&&(r.params instanceof be?d=r.params:d=new be({fromObject:r.params})),a=new ht(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,integrity:r.integrity,timeout:r.timeout})}let o=h(a).pipe(ue(l=>this.handler.handle(l)));if(e instanceof ht||r.observe==="events")return o;let s=o.pipe(te(l=>l instanceof sn));switch(r.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return s.pipe(b(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new T(2806,!1);return l.body}));case"blob":return s.pipe(b(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new T(2807,!1);return l.body}));case"text":return s.pipe(b(l=>{if(l.body!==null&&typeof l.body!="string")throw new T(2808,!1);return l.body}));case"json":default:return s.pipe(b(l=>l.body))}case"response":return s;default:throw new T(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new be().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,wi(r,i))}post(e,i,r={}){return this.request("POST",e,wi(r,i))}put(e,i,r={}){return this.request("PUT",e,wi(r,i))}static \u0275fac=function(i){return new(i||t)(v(je))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var Bo=new I("");function Fo(t,n){return n(t)}function Ho(t,n,e){return(i,r)=>j(e,()=>n(i,a=>t(a,r)))}var da=new I(""),Wo=new I(""),ca=new I("",{providedIn:"root",factory:()=>!0});var ln=(()=>{class t extends je{backend;injector;chain=null;pendingTasks=c(sr);contributeToStability=c(ca);constructor(e,i){super(),this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(da),...this.injector.get(Wo,[])]));this.chain=i.reduceRight((r,a)=>Ho(r,a,this.injector),Fo)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Le(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(v(mt),v(he))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var $o=/^\)\]\}',?\n/,Go=RegExp(`^${oa}:`,"m");function Vo(t){return"responseURL"in t&&t.responseURL?t.responseURL:Go.test(t.getAllResponseHeaders())?t.getResponseHeader(oa):null}var Ti=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new T(-2800,!1);let i=this.xhrFactory;return h(null).pipe(U(()=>new Pt(a=>{let o=i.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((g,x)=>o.setRequestHeader(g,x.join(","))),e.headers.has(aa)||o.setRequestHeader(aa,Po),!e.headers.has(ra)){let g=e.detectContentTypeHeader();g!==null&&o.setRequestHeader(ra,g)}if(e.timeout&&(o.timeout=e.timeout),e.responseType){let g=e.responseType.toLowerCase();o.responseType=g!=="json"?g:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let g=o.statusText||"OK",x=new Se(o.getAllResponseHeaders()),P=Vo(o)||e.url;return l=new on({headers:x,status:o.status,statusText:g,url:P}),l},u=()=>{let{headers:g,status:x,statusText:P,url:Y}=d(),D=null;x!==_o&&(D=typeof o.response>"u"?o.responseText:o.response),x===0&&(x=D?No:0);let Te=x>=200&&x<300;if(e.responseType==="json"&&typeof D=="string"){let xe=D;D=D.replace($o,"");try{D=D!==""?JSON.parse(D):null}catch(po){D=xe,Te&&(Te=!1,D={error:po,text:D})}}Te?(a.next(new sn({body:D,headers:g,status:x,statusText:P,url:Y||void 0})),a.complete()):a.error(new ft({error:D,headers:g,status:x,statusText:P,url:Y||void 0}))},m=g=>{let{url:x}=d(),P=new ft({error:g,status:o.status||0,statusText:o.statusText||"Unknown Error",url:x||void 0});a.error(P)},q=m;e.timeout&&(q=g=>{let{url:x}=d(),P=new ft({error:new DOMException("Request timed out","TimeoutError"),status:o.status||0,statusText:o.statusText||"Request timeout",url:x||void 0});a.error(P)});let S=!1,R=g=>{S||(a.next(d()),S=!0);let x={type:_e.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(x.total=g.total),e.responseType==="text"&&o.responseText&&(x.partialText=o.responseText),a.next(x)},X=g=>{let x={type:_e.UploadProgress,loaded:g.loaded};g.lengthComputable&&(x.total=g.total),a.next(x)};return o.addEventListener("load",u),o.addEventListener("error",m),o.addEventListener("timeout",q),o.addEventListener("abort",m),e.reportProgress&&(o.addEventListener("progress",R),s!==null&&o.upload&&o.upload.addEventListener("progress",X)),o.send(s),a.next({type:_e.Sent}),()=>{o.removeEventListener("error",m),o.removeEventListener("abort",m),o.removeEventListener("load",u),o.removeEventListener("timeout",q),e.reportProgress&&(o.removeEventListener("progress",R),s!==null&&o.upload&&o.upload.removeEventListener("progress",X)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(i){return new(i||t)(v(Kt))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),ua=new I(""),Xo="XSRF-TOKEN",Yo=new I("",{providedIn:"root",factory:()=>Xo}),Ko="X-XSRF-TOKEN",Jo=new I("",{providedIn:"root",factory:()=>Ko}),gt=class{},Zo=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,i){this.doc=e,this.cookieName=i}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Yt(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)(v(E),v(Yo))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Qo=/^(?:https?:)?\/\//i;function es(t,n){if(!c(ua)||t.method==="GET"||t.method==="HEAD"||Qo.test(t.url))return n(t);let e=c(gt).getToken(),i=c(Jo);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function xi(...t){let n=[jo,Ti,ln,{provide:je,useExisting:ln},{provide:mt,useFactory:()=>c(Bo,{optional:!0})??c(Ti)},{provide:da,useValue:es,multi:!0},{provide:ua,useValue:!0},{provide:gt,useClass:Zo}];for(let e of t)n.push(...e.\u0275providers);return _t(n)}var pa=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(v(E))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var f="primary",At=Symbol("RouteTitle"),Si=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Me(t){return new Si(t)}function wa(t,n,e){let i=e.path.split("/");if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let r={};for(let a=0;a<i.length;a++){let o=i[a],s=t[a];if(o[0]===":")r[o.substring(1)]=s;else if(o!==s.path)return null}return{consumed:t.slice(0,i.length),posParams:r}}function ns(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!ne(t[e],n[e]))return!1;return!0}function ne(t,n){let e=t?Ei(t):void 0,i=n?Ei(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let a=0;a<e.length;a++)if(r=e[a],!Ta(t[r],n[r]))return!1;return!0}function Ei(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ta(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,a)=>i[a]===r)}else return t===n}function xa(t){return t.length>0?t[t.length-1]:null}function ce(t){return Ki(t)?t:yr(t)?N(Promise.resolve(t)):h(t)}var is={exact:Ia,subset:Ca},qa={exact:rs,subset:as,ignored:()=>!0};function ha(t,n,e){return is[e.paths](t.root,n.root,e.matrixParams)&&qa[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function rs(t,n){return ne(t,n)}function Ia(t,n,e){if(!Ee(t.segments,n.segments)||!un(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!Ia(t.children[i],n.children[i],e))return!1;return!0}function as(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Ta(t[e],n[e]))}function Ca(t,n,e){return ka(t,n,n.segments,e)}function ka(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Ee(r,e)||n.hasChildren()||!un(r,e,i))}else if(t.segments.length===e.length){if(!Ee(t.segments,e)||!un(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!Ca(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),a=e.slice(t.segments.length);return!Ee(t.segments,r)||!un(t.segments,r,i)||!t.children[f]?!1:ka(t.children[f],n,a,i)}}function un(t,n,e){return n.every((i,r)=>qa[e](t[r].parameters,i.parameters))}var re=class{root;queryParams;fragment;_queryParamMap;constructor(n=new w([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Me(this.queryParams),this._queryParamMap}toString(){return ls.serialize(this)}},w=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return pn(this)}},ye=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Me(this.parameters),this._parameterMap}toString(){return Ea(this)}};function os(t,n){return Ee(t,n)&&t.every((e,i)=>ne(e.parameters,n[i].parameters))}function Ee(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function ss(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===f&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==f&&(e=e.concat(n(r,i)))}),e}var Dt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>new Ae,providedIn:"root"})}return t})(),Ae=class{parse(n){let e=new Mi(n);return new re(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${bt(n.root,!0)}`,i=us(n.queryParams),r=typeof n.fragment=="string"?`#${ds(n.fragment)}`:"";return`${e}${i}${r}`}},ls=new Ae;function pn(t){return t.segments.map(n=>Ea(n)).join("/")}function bt(t,n){if(!t.hasChildren())return pn(t);if(n){let e=t.children[f]?bt(t.children[f],!1):"",i=[];return Object.entries(t.children).forEach(([r,a])=>{r!==f&&i.push(`${r}:${bt(a,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=ss(t,(i,r)=>r===f?[bt(t.children[f],!1)]:[`${r}:${bt(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[f]!=null?`${pn(t)}/${e[0]}`:`${pn(t)}/(${e.join("//")})`}}function Sa(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function dn(t){return Sa(t).replace(/%3B/gi,";")}function ds(t){return encodeURI(t)}function Ri(t){return Sa(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function hn(t){return decodeURIComponent(t)}function fa(t){return hn(t.replace(/\+/g,"%20"))}function Ea(t){return`${Ri(t.path)}${cs(t.parameters)}`}function cs(t){return Object.entries(t).map(([n,e])=>`;${Ri(n)}=${Ri(e)}`).join("")}function us(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${dn(e)}=${dn(r)}`).join("&"):`${dn(e)}=${dn(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var ps=/^[^\/()?;#]+/;function qi(t){let n=t.match(ps);return n?n[0]:""}var hs=/^[^\/()?;=#]+/;function fs(t){let n=t.match(hs);return n?n[0]:""}var ms=/^[^=?&#]+/;function gs(t){let n=t.match(ms);return n?n[0]:""}var bs=/^[^&#]+/;function ys(t){let n=t.match(bs);return n?n[0]:""}var Mi=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new w([],{}):new w([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(n.length>0||Object.keys(e).length>0)&&(i[f]=new w(n,e)),i}parseSegment(){let n=qi(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new T(4009,!1);return this.capture(n),new ye(hn(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=fs(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=qi(this.remaining);r&&(i=r,this.capture(i))}n[hn(e)]=hn(i)}parseQueryParam(n){let e=gs(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let o=ys(this.remaining);o&&(i=o,this.capture(i))}let r=fa(e),a=fa(i);if(n.hasOwnProperty(r)){let o=n[r];Array.isArray(o)||(o=[o],n[r]=o),o.push(a)}else n[r]=a}parseParens(n){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=qi(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new T(4010,!1);let a;i.indexOf(":")>-1?(a=i.slice(0,i.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=f);let o=this.parseChildren();e[a??f]=Object.keys(o).length===1&&o[f]?o[f]:new w([],o),this.consumeOptional("//")}return e}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new T(4011,!1)}};function Ra(t){return t.segments.length>0?new w([],{[f]:t}):t}function Ma(t){let n={};for(let[i,r]of Object.entries(t.children)){let a=Ma(r);if(i===f&&a.segments.length===0&&a.hasChildren())for(let[o,s]of Object.entries(a.children))n[o]=s;else(a.segments.length>0||a.hasChildren())&&(n[i]=a)}let e=new w(t.segments,n);return vs(e)}function vs(t){if(t.numberOfChildren===1&&t.children[f]){let n=t.children[f];return new w(t.segments.concat(n.segments),n.children)}return t}function ve(t){return t instanceof re}function Aa(t,n,e=null,i=null){let r=Da(t);return za(r,n,e,i)}function Da(t){let n;function e(a){let o={};for(let l of a.children){let d=e(l);o[l.outlet]=d}let s=new w(a.url,o);return a===t&&(n=s),s}let i=e(t.root),r=Ra(i);return n??r}function za(t,n,e,i){let r=t;for(;r.parent;)r=r.parent;if(n.length===0)return Ii(r,r,r,e,i);let a=ws(n);if(a.toRoot())return Ii(r,r,new w([],{}),e,i);let o=Ts(a,r,t),s=o.processChildren?vt(o.segmentGroup,o.index,a.commands):Ua(o.segmentGroup,o.index,a.commands);return Ii(r,o.segmentGroup,s,e,i)}function fn(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function xt(t){return typeof t=="object"&&t!=null&&t.outlets}function Ii(t,n,e,i,r){let a={};i&&Object.entries(i).forEach(([l,d])=>{a[l]=Array.isArray(d)?d.map(u=>`${u}`):`${d}`});let o;t===n?o=e:o=La(t,n,e);let s=Ra(Ma(o));return new re(s,a,r)}function La(t,n,e){let i={};return Object.entries(t.children).forEach(([r,a])=>{a===n?i[r]=e:i[r]=La(a,n,e)}),new w(t.segments,i)}var mn=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&fn(i[0]))throw new T(4003,!1);let r=i.find(xt);if(r&&r!==xa(i))throw new T(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ws(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new mn(!0,0,t);let n=0,e=!1,i=t.reduce((r,a,o)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let s={};return Object.entries(a.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!="string"?[...r,a]:o===0?(a.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,a]},[]);return new mn(e,n,i)}var We=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function Ts(t,n,e){if(t.isAbsolute)return new We(n,!0,0);if(!e)return new We(n,!1,NaN);if(e.parent===null)return new We(e,!0,0);let i=fn(t.commands[0])?0:1,r=e.segments.length-1+i;return xs(e,r,t.numberOfDoubleDots)}function xs(t,n,e){let i=t,r=n,a=e;for(;a>r;){if(a-=r,i=i.parent,!i)throw new T(4005,!1);r=i.segments.length}return new We(i,!1,r-a)}function qs(t){return xt(t[0])?t[0].outlets:{[f]:t}}function Ua(t,n,e){if(t??=new w([],{}),t.segments.length===0&&t.hasChildren())return vt(t,n,e);let i=Is(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let a=new w(t.segments.slice(0,i.pathIndex),{});return a.children[f]=new w(t.segments.slice(i.pathIndex),t.children),vt(a,0,r)}else return i.match&&r.length===0?new w(t.segments,{}):i.match&&!t.hasChildren()?Ai(t,n,e):i.match?vt(t,0,r):Ai(t,n,e)}function vt(t,n,e){if(e.length===0)return new w(t.segments,{});{let i=qs(e),r={};if(Object.keys(i).some(a=>a!==f)&&t.children[f]&&t.numberOfChildren===1&&t.children[f].segments.length===0){let a=vt(t.children[f],n,e);return new w(t.segments,a.children)}return Object.entries(i).forEach(([a,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[a]=Ua(t.children[a],n,o))}),Object.entries(t.children).forEach(([a,o])=>{i[a]===void 0&&(r[a]=o)}),new w(t.segments,r)}}function Is(t,n,e){let i=0,r=n,a={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return a;let o=t.segments[r],s=e[i];if(xt(s))break;let l=`${s}`,d=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!ga(l,d,o))return a;i+=2}else{if(!ga(l,{},o))return a;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ai(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let a=e[r];if(xt(a)){let l=Cs(a.outlets);return new w(i,l)}if(r===0&&fn(e[0])){let l=t.segments[n];i.push(new ye(l.path,ma(e[0]))),r++;continue}let o=xt(a)?a.outlets[f]:`${a}`,s=r<e.length-1?e[r+1]:null;o&&s&&fn(s)?(i.push(new ye(o,ma(s))),r+=2):(i.push(new ye(o,{})),r++)}return new w(i,{})}function Cs(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Ai(new w([],{}),0,i))}),n}function ma(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function ga(t,n,e){return t==e.path&&ne(n,e.parameters)}var wt="imperative",M=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(M||{}),H=class{id;url;constructor(n,e){this.id=n,this.url=e}},De=class extends H{type=M.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ee=class extends H{urlAfterRedirects;type=M.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},O=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(O||{}),qt=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(qt||{}),ie=class extends H{reason;code;type=M.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},de=class extends H{reason;code;type=M.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Ge=class extends H{error;target;type=M.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},It=class extends H{urlAfterRedirects;state;type=M.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gn=class extends H{urlAfterRedirects;state;type=M.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},bn=class extends H{urlAfterRedirects;state;shouldActivate;type=M.GuardsCheckEnd;constructor(n,e,i,r,a){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},yn=class extends H{urlAfterRedirects;state;type=M.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},vn=class extends H{urlAfterRedirects;state;type=M.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wn=class{route;type=M.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Tn=class{route;type=M.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},xn=class{snapshot;type=M.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qn=class{snapshot;type=M.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},In=class{snapshot;type=M.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Cn=class{snapshot;type=M.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ct=class{},Ve=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function ks(t){return!(t instanceof Ct)&&!(t instanceof Ve)}function Ss(t,n){return t.providers&&!t._injector&&(t._injector=ai(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Q(t){return t.outlet||f}function Es(t,n){let e=t.filter(i=>Q(i)===n);return e.push(...t.filter(i=>Q(i)!==n)),e}function Ke(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let n=t.parent;n;n=n.parent){let e=n.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var kn=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Ke(this.route?.snapshot)??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Je(this.rootInjector)}},Je=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new kn(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(v(he))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Sn=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Di(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Di(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=zi(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return zi(n,this._root).map(e=>e.value)}};function Di(t,n){if(t===n.value)return n;for(let e of n.children){let i=Di(t,e);if(i)return i}return null}function zi(t,n){if(t===n.value)return[n];for(let e of n.children){let i=zi(t,e);if(i.length)return i.unshift(n),i}return[]}var F=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function He(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var kt=class extends Sn{snapshot;constructor(n,e){super(n),this.snapshot=e,Bi(this,n)}toString(){return this.snapshot.toString()}};function Oa(t){let n=Rs(t),e=new G([new ye("",{})]),i=new G({}),r=new G({}),a=new G({}),o=new G(""),s=new W(e,i,a,o,r,f,t,n.root);return s.snapshot=n.root,new kt(new F(s,[]),n)}function Rs(t){let n={},e={},i={},a=new Re([],n,i,"",e,f,t,null,{});return new St("",new F(a,[]))}var W=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,a,o,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=a,this.outlet=o,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(b(d=>d[At]))??h(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(b(n=>Me(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(b(n=>Me(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function En(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:p(p({},n.params),t.params),data:p(p({},n.data),t.data),resolve:p(p(p(p({},t.data),n.data),r?.data),t._resolvedData)}:i={params:p({},t.params),data:p({},t.data),resolve:p(p({},t.data),t._resolvedData??{})},r&&Na(r)&&(i.resolve[At]=r.title),i}var Re=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[At]}constructor(n,e,i,r,a,o,s,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=a,this.outlet=o,this.component=s,this.routeConfig=l,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Me(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Me(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},St=class extends Sn{url;constructor(n,e){super(e),this.url=n,Bi(this,e)}toString(){return Pa(this._root)}};function Bi(t,n){n.value._routerState=t,n.children.forEach(e=>Bi(t,e))}function Pa(t){let n=t.children.length>0?` { ${t.children.map(Pa).join(", ")} } `:"";return`${t.value}${n}`}function Ci(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ne(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ne(n.params,e.params)||t.paramsSubject.next(e.params),ns(n.url,e.url)||t.urlSubject.next(e.url),ne(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Li(t,n){let e=ne(t.params,n.params)&&os(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Li(t.parent,n.parent))}function Na(t){return typeof t.title=="string"||t.title===null}var _a=new I(""),zt=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=f;activateEvents=new Ce;deactivateEvents=new Ce;attachEvents=new Ce;detachEvents=new Ce;routerOutletData=Er();parentContexts=c(Je);location=c(mr);changeDetector=c(Gt);inputBinder=c(Dn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new T(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new T(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new T(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new T(4013,!1);this._activatedRoute=e;let r=this.location,o=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new Ui(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=it({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[tt]})}return t})(),Ui=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===W?this.route:n===Je?this.childContexts:n===_a?this.outletData:this.parent.get(n,e)}},Dn=new I("");var Fi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&le(0,"router-outlet")},dependencies:[zt],encapsulation:2})}return t})();function Hi(t){let n=t.children&&t.children.map(Hi),e=n?$(p({},t),{children:n}):p({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==f&&(e.component=Fi),e}function Ms(t,n,e){let i=Et(t,n._root,e?e._root:void 0);return new kt(i,n)}function Et(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=As(t,n,e);return new F(i,r)}else{if(t.shouldAttach(n.value)){let a=t.retrieve(n.value);if(a!==null){let o=a.route;return o.value._futureSnapshot=n.value,o.children=n.children.map(s=>Et(t,s)),o}}let i=Ds(n.value),r=n.children.map(a=>Et(t,a));return new F(i,r)}}function As(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Et(t,i,r);return Et(t,i)})}function Ds(t){return new W(new G(t.url),new G(t.params),new G(t.queryParams),new G(t.fragment),new G(t.data),t.outlet,t.component,t)}var Xe=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},ja="ngNavigationCancelingError";function Rn(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=ve(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Ba(!1,O.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function Ba(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ja]=!0,e.cancellationCode=n,e}function zs(t){return Fa(t)&&ve(t.url)}function Fa(t){return!!t&&t[ja]}var Ls=(t,n,e,i)=>b(r=>(new Oi(n,r.targetRouterState,r.currentRouterState,e,i).activate(t),r)),Oi=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,a){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=a}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Ci(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=He(e);n.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,r[o],i),delete r[o]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,i)})}deactivateRoutes(n,e,i){let r=n.value,a=e?e.value:null;if(r===a)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(n,e,o.children)}else this.deactivateChildRoutes(n,e,i);else a&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,a=He(n);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:o,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,a=He(n);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=He(e);n.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],i),this.forwardEvent(new Cn(a.value.snapshot))}),n.children.length&&this.forwardEvent(new qn(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,a=e?e.value:null;if(Ci(r),r===a)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,o.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(s.contexts),o.attachRef=s.componentRef,o.route=s.route.value,o.outlet&&o.outlet.attach(s.componentRef,s.route.value),Ci(s.route.value),this.activateChildRoutes(n,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(n,null,o.children)}else this.activateChildRoutes(n,null,i)}},Mn=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},$e=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Us(t,n,e){let i=t._root,r=n?n._root:null;return yt(i,r,e,[i.value])}function Os(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Ze(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!nr(t)?t:n.get(t):i}function yt(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=He(n);return t.children.forEach(o=>{Ps(o,a[o.value.outlet],e,i.concat([o.value]),r),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,s])=>Tt(s,e.getContext(o),r)),r}function Ps(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=t.value,o=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let l=Ns(o,a,a.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Mn(i)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?yt(t,n,s?s.children:null,i,r):yt(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new $e(s.outlet.component,o))}else o&&Tt(n,s,r),r.canActivateChecks.push(new Mn(i)),a.component?yt(t,null,s?s.children:null,i,r):yt(t,null,e,i,r);return r}function Ns(t,n,e){if(typeof e=="function")return e(t,n);switch(e){case"pathParamsChange":return!Ee(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Ee(t.url,n.url)||!ne(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Li(t,n)||!ne(t.queryParams,n.queryParams);case"paramsChange":default:return!Li(t,n)}}function Tt(t,n,e){let i=He(t),r=t.value;Object.entries(i).forEach(([a,o])=>{r.component?n?Tt(o,n.children.getContext(a),e):Tt(o,null,e):Tt(o,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new $e(n.outlet.component,r)):e.canDeactivateChecks.push(new $e(null,r)):e.canDeactivateChecks.push(new $e(null,r))}function Lt(t){return typeof t=="function"}function _s(t){return typeof t=="boolean"}function js(t){return t&&Lt(t.canLoad)}function Bs(t){return t&&Lt(t.canActivate)}function Fs(t){return t&&Lt(t.canActivateChild)}function Hs(t){return t&&Lt(t.canDeactivate)}function Ws(t){return t&&Lt(t.canMatch)}function Ha(t){return t instanceof Ji||t?.name==="EmptyError"}var cn=Symbol("INITIAL_VALUE");function Ye(){return U(t=>$n(t.map(n=>n.pipe(ze(1),tr(cn)))).pipe(b(n=>{for(let e of n)if(e!==!0){if(e===cn)return cn;if(e===!1||$s(e))return e}return!0}),te(n=>n!==cn),ze(1)))}function $s(t){return ve(t)||t instanceof Xe}function Gs(t,n){return _(e=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:a,canDeactivateChecks:o}}=e;return o.length===0&&a.length===0?h($(p({},e),{guardsResult:!0})):Vs(o,i,r,t).pipe(_(s=>s&&_s(s)?Xs(i,a,t,n):h(s)),b(s=>$(p({},e),{guardsResult:s})))})}function Vs(t,n,e,i){return N(t).pipe(_(r=>Qs(r.component,r.route,e,n,i)),pe(r=>r!==!0,!0))}function Xs(t,n,e,i){return N(n).pipe(ue(r=>Zi(Ks(r.route.parent,i),Ys(r.route,i),Zs(t,r.path,e),Js(t,r.route,e))),pe(r=>r!==!0,!0))}function Ys(t,n){return t!==null&&n&&n(new In(t)),h(!0)}function Ks(t,n){return t!==null&&n&&n(new xn(t)),h(!0)}function Js(t,n,e){let i=n.routeConfig?n.routeConfig.canActivate:null;if(!i||i.length===0)return h(!0);let r=i.map(a=>Nt(()=>{let o=Ke(n)??e,s=Ze(a,o),l=Bs(s)?s.canActivate(n,t):j(o,()=>s(n,t));return ce(l).pipe(pe())}));return h(r).pipe(Ye())}function Zs(t,n,e){let i=n[n.length-1],a=n.slice(0,n.length-1).reverse().map(o=>Os(o)).filter(o=>o!==null).map(o=>Nt(()=>{let s=o.guards.map(l=>{let d=Ke(o.node)??e,u=Ze(l,d),m=Fs(u)?u.canActivateChild(i,t):j(d,()=>u(i,t));return ce(m).pipe(pe())});return h(s).pipe(Ye())}));return h(a).pipe(Ye())}function Qs(t,n,e,i,r){let a=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!a||a.length===0)return h(!0);let o=a.map(s=>{let l=Ke(n)??r,d=Ze(s,l),u=Hs(d)?d.canDeactivate(t,n,e,i):j(l,()=>d(t,n,e,i));return ce(u).pipe(pe())});return h(o).pipe(Ye())}function el(t,n,e,i){let r=n.canLoad;if(r===void 0||r.length===0)return h(!0);let a=r.map(o=>{let s=Ze(o,t),l=js(s)?s.canLoad(n,e):j(t,()=>s(n,e));return ce(l)});return h(a).pipe(Ye(),Wa(i))}function Wa(t){return Yi(A(n=>{if(typeof n!="boolean")throw Rn(t,n)}),b(n=>n===!0))}function tl(t,n,e,i){let r=n.canMatch;if(!r||r.length===0)return h(!0);let a=r.map(o=>{let s=Ze(o,t),l=Ws(s)?s.canMatch(n,e):j(t,()=>s(n,e));return ce(l)});return h(a).pipe(Ye(),Wa(i))}var Rt=class{segmentGroup;constructor(n){this.segmentGroup=n||null}},Mt=class extends Error{urlTree;constructor(n){super(),this.urlTree=n}};function Fe(t){return et(new Rt(t))}function nl(t){return et(new T(4e3,!1))}function il(t){return et(Ba(!1,O.GuardRejected))}var Pi=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return h(i);if(r.numberOfChildren>1||!r.children[f])return nl(`${n.redirectTo}`);r=r.children[f]}}applyRedirectCommands(n,e,i,r,a){return rl(e,r,a).pipe(b(o=>{if(o instanceof re)throw new Mt(o);let s=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),n,i);if(o[0]==="/")throw new Mt(s);return s}))}applyRedirectCreateUrlTree(n,e,i,r){let a=this.createSegmentGroup(n,e.root,i,r);return new re(a,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,a])=>{if(typeof a=="string"&&a[0]===":"){let s=a.substring(1);i[r]=e[s]}else i[r]=a}),i}createSegmentGroup(n,e,i,r){let a=this.createSegments(n,e.segments,i,r),o={};return Object.entries(e.children).forEach(([s,l])=>{o[s]=this.createSegmentGroup(n,l,i,r)}),new w(a,o)}createSegments(n,e,i,r){return e.map(a=>a.path[0]===":"?this.findPosParam(n,a,r):this.findOrReturn(a,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new T(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function rl(t,n,e){if(typeof t=="string")return h(t);let i=t,{queryParams:r,fragment:a,routeConfig:o,url:s,outlet:l,params:d,data:u,title:m}=n;return ce(j(e,()=>i({params:d,data:u,queryParams:r,fragment:a,routeConfig:o,url:s,outlet:l,title:m})))}var Ni={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function al(t,n,e,i,r){let a=$a(t,n,e);return a.matched?(i=Ss(n,i),tl(i,n,e,r).pipe(b(o=>o===!0?a:p({},Ni)))):h(a)}function $a(t,n,e){if(n.path==="**")return ol(e);if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?p({},Ni):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||wa)(e,t,n);if(!r)return p({},Ni);let a={};Object.entries(r.posParams??{}).forEach(([s,l])=>{a[s]=l.path});let o=r.consumed.length>0?p(p({},a),r.consumed[r.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function ol(t){return{matched:!0,parameters:t.length>0?xa(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function ba(t,n,e,i){return e.length>0&&dl(t,e,i)?{segmentGroup:new w(n,ll(i,new w(e,t.children))),slicedSegments:[]}:e.length===0&&cl(t,e,i)?{segmentGroup:new w(t.segments,sl(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new w(t.segments,t.children),slicedSegments:e}}function sl(t,n,e,i){let r={};for(let a of e)if(zn(t,n,a)&&!i[Q(a)]){let o=new w([],{});r[Q(a)]=o}return p(p({},i),r)}function ll(t,n){let e={};e[f]=n;for(let i of t)if(i.path===""&&Q(i)!==f){let r=new w([],{});e[Q(i)]=r}return e}function dl(t,n,e){return e.some(i=>zn(t,n,i)&&Q(i)!==f)}function cl(t,n,e){return e.some(i=>zn(t,n,i))}function zn(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function ul(t,n,e){return n.length===0&&!t.children[e]}var _i=class{};function pl(t,n,e,i,r,a,o="emptyOnly"){return new ji(t,n,e,i,r,o,a).recognize()}var hl=31,ji=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,a,o,s){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=s,this.applyRedirects=new Pi(this.urlSerializer,this.urlTree)}noMatchError(n){return new T(4002,`'${n.segmentGroup}'`)}recognize(){let n=ba(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(n).pipe(b(({children:e,rootSnapshot:i})=>{let r=new F(i,e),a=new St("",r),o=Aa(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}))}match(n){let e=new Re([],Object.freeze({}),Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),f,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,n,f,e).pipe(b(i=>({children:i,rootSnapshot:e})),qe(i=>{if(i instanceof Mt)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Rt?this.noMatchError(i):i}))}processSegmentGroup(n,e,i,r,a){return i.segments.length===0&&i.hasChildren()?this.processChildren(n,e,i,a):this.processSegment(n,e,i,i.segments,r,!0,a).pipe(b(o=>o instanceof F?[o]:[]))}processChildren(n,e,i,r){let a=[];for(let o of Object.keys(i.children))o==="primary"?a.unshift(o):a.push(o);return N(a).pipe(ue(o=>{let s=i.children[o],l=Es(e,o);return this.processSegmentGroup(n,l,s,o,r)}),er((o,s)=>(o.push(...s),o)),Vn(null),Qi(),_(o=>{if(o===null)return Fe(i);let s=Ga(o);return fl(s),h(s)}))}processSegment(n,e,i,r,a,o,s){return N(e).pipe(ue(l=>this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,a,o,s).pipe(qe(d=>{if(d instanceof Rt)return h(null);throw d}))),pe(l=>!!l),qe(l=>{if(Ha(l))return ul(i,r,a)?h(new _i):Fe(i);throw l}))}processSegmentAgainstRoute(n,e,i,r,a,o,s,l){return Q(i)!==o&&(o===f||!zn(r,a,i))?Fe(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(n,r,i,a,o,l):this.allowRedirects&&s?this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,a,o,l):Fe(r)}expandSegmentAgainstRouteUsingRedirect(n,e,i,r,a,o,s){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:m,remainingSegments:q}=$a(e,r,a);if(!l)return Fe(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>hl&&(this.allowRedirects=!1));let S=new Re(a,d,Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,ya(r),Q(r),r.component??r._loadedComponent??null,r,va(r)),R=En(S,s,this.paramsInheritanceStrategy);return S.params=Object.freeze(R.params),S.data=Object.freeze(R.data),this.applyRedirects.applyRedirectCommands(u,r.redirectTo,m,S,n).pipe(U(g=>this.applyRedirects.lineralizeSegments(r,g)),_(g=>this.processSegment(n,i,e,g.concat(q),o,!1,s)))}matchSegmentAgainstRoute(n,e,i,r,a,o){let s=al(e,i,r,n,this.urlSerializer);return i.path==="**"&&(e.children={}),s.pipe(U(l=>l.matched?(n=i._injector??n,this.getChildConfig(n,i,r).pipe(U(({routes:d})=>{let u=i._loadedInjector??n,{parameters:m,consumedSegments:q,remainingSegments:S}=l,R=new Re(q,m,Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,ya(i),Q(i),i.component??i._loadedComponent??null,i,va(i)),X=En(R,o,this.paramsInheritanceStrategy);R.params=Object.freeze(X.params),R.data=Object.freeze(X.data);let{segmentGroup:g,slicedSegments:x}=ba(e,q,S,d);if(x.length===0&&g.hasChildren())return this.processChildren(u,d,g,R).pipe(b(Y=>new F(R,Y)));if(d.length===0&&x.length===0)return h(new F(R,[]));let P=Q(i)===a;return this.processSegment(u,d,g,x,P?f:a,!0,R).pipe(b(Y=>new F(R,Y instanceof F?[Y]:[])))}))):Fe(e)))}getChildConfig(n,e,i){return e.children?h({routes:e.children,injector:n}):e.loadChildren?e._loadedRoutes!==void 0?h({routes:e._loadedRoutes,injector:e._loadedInjector}):el(n,e,i,this.urlSerializer).pipe(_(r=>r?this.configLoader.loadChildren(n,e).pipe(A(a=>{e._loadedRoutes=a.routes,e._loadedInjector=a.injector})):il(e))):h({routes:[],injector:n})}};function fl(t){t.sort((n,e)=>n.value.outlet===f?-1:e.value.outlet===f?1:n.value.outlet.localeCompare(e.value.outlet))}function ml(t){let n=t.value.routeConfig;return n&&n.path===""}function Ga(t){let n=[],e=new Set;for(let i of t){if(!ml(i)){n.push(i);continue}let r=n.find(a=>i.value.routeConfig===a.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=Ga(i.children);n.push(new F(i.value,r))}return n.filter(i=>!e.has(i))}function ya(t){return t.data||{}}function va(t){return t.resolve||{}}function gl(t,n,e,i,r,a){return _(o=>pl(t,n,e,i,o.extractedUrl,r,a).pipe(b(({state:s,tree:l})=>$(p({},o),{targetSnapshot:s,urlAfterRedirects:l}))))}function bl(t,n){return _(e=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=e;if(!r.length)return h(e);let a=new Set(r.map(l=>l.route)),o=new Set;for(let l of a)if(!o.has(l))for(let d of Va(l))o.add(d);let s=0;return N(o).pipe(ue(l=>a.has(l)?yl(l,i,t,n):(l.data=En(l,l.parent,t).resolve,h(void 0))),A(()=>s++),Xn(1),_(l=>s===o.size?h(e):se))})}function Va(t){let n=t.children.map(e=>Va(e)).flat();return[t,...n]}function yl(t,n,e,i){let r=t.routeConfig,a=t._resolve;return r?.title!==void 0&&!Na(r)&&(a[At]=r.title),Nt(()=>(t.data=En(t,t.parent,e).resolve,vl(a,t,n,i).pipe(b(o=>(t._resolvedData=o,t.data=p(p({},t.data),o),null)))))}function vl(t,n,e,i){let r=Ei(t);if(r.length===0)return h({});let a={};return N(r).pipe(_(o=>wl(t[o],n,e,i).pipe(pe(),A(s=>{if(s instanceof Xe)throw Rn(new Ae,s);a[o]=s}))),Xn(1),b(()=>a),qe(o=>Ha(o)?se:et(o)))}function wl(t,n,e,i){let r=Ke(n)??i,a=Ze(t,r),o=a.resolve?a.resolve(n,e):j(r,()=>a(n,e));return ce(o)}function ki(t){return U(n=>{let e=t(n);return e?N(e).pipe(b(()=>n)):h(n)})}var Wi=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(a=>a.outlet===f);return i}getResolvedTitleForRoute(e){return e.data[At]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>c(Xa),providedIn:"root"})}return t})(),Xa=(()=>{class t extends Wi{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(v(pa))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qe=new I("",{providedIn:"root",factory:()=>({})}),Ut=new I(""),Ya=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(Cr);loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return h(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=ce(j(e,()=>i.loadComponent())).pipe(b(Ja),U(Za),A(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),Le(()=>{this.componentLoaders.delete(i)})),a=new Wn(r,()=>new oe).pipe(Hn());return this.componentLoaders.set(i,a),a}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return h({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let a=Ka(i,this.compiler,e,this.onLoadEndListener).pipe(Le(()=>{this.childrenLoaders.delete(i)})),o=new Wn(a,()=>new oe).pipe(Hn());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ka(t,n,e,i){return ce(j(e,()=>t.loadChildren())).pipe(b(Ja),U(Za),_(r=>r instanceof gr||Array.isArray(r)?h(r):N(n.compileModuleAsync(r))),b(r=>{i&&i(t);let a,o,s=!1;return Array.isArray(r)?(o=r,s=!0):(a=r.create(e).injector,o=a.get(Ut,[],{optional:!0,self:!0}).flat()),{routes:o.map(Hi),injector:a}}))}function Tl(t){return t&&typeof t=="object"&&"default"in t}function Ja(t){return Tl(t)?t.default:t}function Za(t){return h(t)}var Ln=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>c(xl),providedIn:"root"})}return t})(),xl=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qa=new I("");var eo=new I(""),to=(()=>{class t{currentNavigation=B(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new oe;transitionAbortWithErrorSubject=new oe;configLoader=c(Ya);environmentInjector=c(he);destroyRef=c(Zn);urlSerializer=c(Dt);rootContexts=c(Je);location=c(Xt);inputBindingEnabled=c(Dn,{optional:!0})!==null;titleStrategy=c(Wi);options=c(Qe,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(Ln);createViewTransition=c(Qa,{optional:!0});navigationErrorHandler=c(eo,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>h(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new wn(r)),i=r=>this.events.next(new Tn(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;ge(()=>{this.transitions?.next($(p({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:i}))})}setupNavigations(e){return this.transitions=new G(null),this.transitions.pipe(te(i=>i!==null),U(i=>{let r=!1;return h(i).pipe(U(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",O.SupersededByNewNavigation),se;this.currentTransition=i,this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?$(p({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>a.abortController.abort()});let o=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),s=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!o&&s!=="reload")return this.events.next(new de(a.id,this.urlSerializer.serialize(a.rawUrl),"",qt.IgnoredSameUrlNavigation)),a.resolve(!1),se;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return h(a).pipe(U(l=>(this.events.next(new De(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?se:Promise.resolve(l))),gl(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),A(l=>{i.targetSnapshot=l.targetSnapshot,i.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation.update(u=>(u.finalUrl=l.urlAfterRedirects,u));let d=new It(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(d)}));if(o&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:l,extractedUrl:d,source:u,restoredState:m,extras:q}=a,S=new De(l,this.urlSerializer.serialize(d),u,m);this.events.next(S);let R=Oa(this.rootComponentType).snapshot;return this.currentTransition=i=$(p({},a),{targetSnapshot:R,urlAfterRedirects:d,extras:$(p({},q),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(X=>(X.finalUrl=d,X)),h(i)}else return this.events.next(new de(a.id,this.urlSerializer.serialize(a.extractedUrl),"",qt.IgnoredByUrlHandlingStrategy)),a.resolve(!1),se}),A(a=>{let o=new gn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(o)}),b(a=>(this.currentTransition=i=$(p({},a),{guards:Us(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i)),Gs(this.environmentInjector,a=>this.events.next(a)),A(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Rn(this.urlSerializer,a.guardsResult);let o=new bn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(o)}),te(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",O.GuardRejected),!1)),ki(a=>{if(a.guards.canActivateChecks.length!==0)return h(a).pipe(A(o=>{let s=new yn(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(s)}),U(o=>{let s=!1;return h(o).pipe(bl(this.paramsInheritanceStrategy,this.environmentInjector),A({next:()=>s=!0,complete:()=>{s||this.cancelNavigationTransition(o,"",O.NoDataFromResolver)}}))}),A(o=>{let s=new vn(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(s)}))}),ki(a=>{let o=s=>{let l=[];if(s.routeConfig?.loadComponent){let d=Ke(s)??this.environmentInjector;l.push(this.configLoader.loadComponent(d,s.routeConfig).pipe(A(u=>{s.component=u}),b(()=>{})))}for(let d of s.children)l.push(...o(d));return l};return $n(o(a.targetSnapshot.root)).pipe(Vn(null),ze(1))}),ki(()=>this.afterPreactivation()),U(()=>{let{currentSnapshot:a,targetSnapshot:o}=i,s=this.createViewTransition?.(this.environmentInjector,a.root,o.root);return s?N(s).pipe(b(()=>i)):h(i)}),b(a=>{let o=Ms(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=i=$(p({},a),{targetRouterState:o}),this.currentNavigation.update(s=>(s.targetRouterState=o,s)),i}),A(()=>{this.events.next(new Ct)}),Ls(this.rootContexts,e.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),ze(1),Yn(new Pt(a=>{let o=i.abortController.signal,s=()=>a.next();return o.addEventListener("abort",s),()=>o.removeEventListener("abort",s)}).pipe(te(()=>!r&&!i.targetRouterState),A(()=>{this.cancelNavigationTransition(i,i.abortController.signal.reason+"",O.Aborted)}))),A({next:a=>{r=!0,this.lastSuccessfulNavigation=ge(this.currentNavigation),this.events.next(new ee(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{r=!0}}),Yn(this.transitionAbortWithErrorSubject.pipe(A(a=>{throw a}))),Le(()=>{r||this.cancelNavigationTransition(i,"",O.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),qe(a=>{if(this.destroyed)return i.resolve(!1),se;if(r=!0,Fa(a))this.events.next(new ie(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),zs(a)?this.events.next(new Ve(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let o=new Ge(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let s=j(this.environmentInjector,()=>this.navigationErrorHandler?.(o));if(s instanceof Xe){let{message:l,cancellationCode:d}=Rn(this.urlSerializer,s);this.events.next(new ie(i.id,this.urlSerializer.serialize(i.extractedUrl),l,d)),this.events.next(new Ve(s.redirectTo,s.navigationBehaviorOptions))}else throw this.events.next(o),a}catch(s){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(s)}}return se}))}))}cancelNavigationTransition(e,i,r){let a=new ie(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=ge(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ql(t){return t!==wt}var no=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>c(Il),providedIn:"root"})}return t})(),An=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}},Il=(()=>{class t extends An{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ei(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),io=(()=>{class t{urlSerializer=c(Dt);options=c(Qe,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(Xt);urlHandlingStrategy=c(Ln);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new re;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,o=r??a;return o instanceof re?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=Oa(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>c(Cl),providedIn:"root"})}return t})(),Cl=(()=>{class t extends io{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate")})})}handleRouterEvent(e,i){e instanceof De?this.updateStateMemento():e instanceof de?this.commitTransition(i):e instanceof It?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ct?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ie&&e.code!==O.SupersededByNewNavigation&&e.code!==O.Redirect?this.restoreHistory(i):e instanceof Ge?this.restoreHistory(i,!0):e instanceof ee&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:a,state:o}=i;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,l=p(p({},o),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=p(p({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ei(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $i(t,n){t.events.pipe(te(e=>e instanceof ee||e instanceof ie||e instanceof Ge||e instanceof de),b(e=>e instanceof ee||e instanceof de?0:(e instanceof ie?e.code===O.Redirect||e.code===O.SupersededByNewNavigation:!1)?2:1),te(e=>e!==2),ze(1)).subscribe(()=>{n()})}var kl={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Sl={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},ae=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(br);stateManager=c(io);options=c(Qe,{optional:!0})||{};pendingTasks=c(or);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(to);urlSerializer=c(Dt);location=c(Xt);urlHandlingStrategy=c(Ln);injector=c(he);_events=new oe;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(no);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(Ut,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(Dn,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Xi;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,a=ge(this.navigationTransitions.currentNavigation);if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(i,a),i instanceof ie&&i.code!==O.Redirect&&i.code!==O.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof ee)this.navigated=!0;else if(i instanceof Ve){let o=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=p({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ql(r.source)},o);this.scheduleNavigation(s,wt,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}ks(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),wt,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r)=>{this.navigateToSyncWithBrowser(e,r,i)})}navigateToSyncWithBrowser(e,i,r){let a={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let l=p({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(a.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,i,o,a).catch(l=>{this.disposed||this.injector.get(Ft)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ge(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Hi),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:a,fragment:o,queryParamsHandling:s,preserveFragment:l}=i,d=l?this.currentUrlTree.fragment:o,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=p(p({},this.currentUrlTree.queryParams),a);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=a||null}u!==null&&(u=this.removeEmptyProps(u));let m;try{let q=r?r.snapshot:this.routerState.snapshot.root;m=Da(q)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return za(m,e,u,d??null)}navigateByUrl(e,i={skipLocationChange:!1}){let r=ve(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,wt,null,i)}navigate(e,i={skipLocationChange:!1}){return El(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Kn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=p({},kl):i===!1?r=p({},Sl):r=i,ve(e))return ha(this.currentUrlTree,e,r);let a=this.parseUrl(e);return ha(this.currentUrlTree,a,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,a])=>(a!=null&&(i[r]=a),i),{})}scheduleNavigation(e,i,r,a,o){if(this.disposed)return Promise.resolve(!1);let s,l,d;o?(s=o.resolve,l=o.reject,d=o.promise):d=new Promise((m,q)=>{s=m,l=q});let u=this.pendingTasks.add();return $i(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(m=>Promise.reject(m))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function El(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new T(4008,!1)}var we=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=B(null);get href(){return ge(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new oe;applicationErrorHandler=c(Ft);options=c(Qe,{optional:!0});constructor(e,i,r,a,o,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=a,this.el=o,this.locationStrategy=s,this.reactiveHref.set(c(new Sr("href"),{optional:!0}));let l=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href")),this.isAnchorElement?this.setTabIndexIfNotOnNativeEl("0"):this.subscribeToNavigationEventsIfNecessary()}subscribeToNavigationEventsIfNecessary(){if(this.subscription!==void 0||!this.isAnchorElement)return;let e=this.preserveFragment,i=r=>r==="merge"||r==="preserve";e||=i(this.queryParamsHandling),e||=!this.queryParamsHandling&&!i(this.options?.defaultQueryParamsHandling),e&&(this.subscription=this.router.events.subscribe(r=>{r instanceof ee&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&(this.updateHref(),this.subscribeToNavigationEventsIfNecessary()),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(ve(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,a,o){let s=this.urlTree;if(s===null||this.isAnchorElement&&(e!==0||i||r||a||o||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.reactiveHref.set(e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null)}applyAttributeValue(e,i){let r=this.renderer,a=this.el.nativeElement;i!==null?r.setAttribute(a,e,i):r.removeAttribute(a,e)}get urlTree(){return this.routerLinkInput===null?null:ve(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(i){return new(i||t)(K(ae),K(W),lr("tabindex"),K(ri),K(Ie),K(Dr))};static \u0275dir=it({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&fe("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&ke("href",r.reactiveHref(),ur)("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Vt],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Vt],replaceUrl:[2,"replaceUrl","replaceUrl",Vt],routerLink:"routerLink"},features:[tt]})}return t})(),Ot=(()=>{class t{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Ce;constructor(e,i,r,a,o){this.router=e,this.element=i,this.renderer=r,this.cdr=a,this.link=o,this.routerEventsSubscription=e.events.subscribe(s=>{s instanceof ee&&this.update()})}ngAfterContentInit(){h(this.links.changes,h(null)).pipe(Gn()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=N(e).pipe(Gn()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(e){let i=Array.isArray(e)?e:e.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(i=>{e?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let i=Ml(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let a=r.urlTree;return a?e.isActive(a,i):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(i){return new(i||t)(K(ae),K(Ie),K(ri),K(Gt),K(we,8))};static \u0275dir=it({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,a){if(i&1&&xr(a,we,5),i&2){let o;qr(o=Ir())&&(r.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[tt]})}return t})();function Ml(t){return!!t.paths}var Al=new I("");function Gi(t,...n){return _t([{provide:Ut,multi:!0,useValue:t},[],{provide:W,useFactory:Dl,deps:[ae]},{provide:vr,multi:!0,useFactory:zl},n.map(e=>e.\u0275providers)])}function Dl(t){return t.routerState.root}function zl(){let t=c(Jn);return n=>{let e=t.get(wr);if(n!==e.components[0])return;let i=t.get(ae),r=t.get(Ll);t.get(Ul)===1&&i.initialNavigation(),t.get(Ol,null,{optional:!0})?.setUpPreloading(),t.get(Al,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Ll=new I("",{factory:()=>new oe}),Ul=new I("",{providedIn:"root",factory:()=>1});var Ol=new I("");var ro=[{title:"Anywhere",slug:"anywhere"},{title:"Better Homes & Gardens",slug:"better-homes-gardens"},{title:"Cartus",slug:"cartus"},{title:"Century 21",slug:"century-21"},{title:"Coldwell Banker",slug:"coldwell-banker"},{title:"Corcoran",slug:"corcoran"},{title:"Agent Workplace",slug:"agent-workplace"},{title:"Broker Workplace",slug:"broker-workplace"},{title:"ERA",slug:"era"},{title:"Sotheby's",slug:"sothebys"}];var ao="brand-preference",oo=[{title:"Example",slug:"example"}],Un=class t{document=c(E);value=B(localStorage.getItem(ao)||"anywhere");constructor(){$t(()=>{let n=this.value();this.document.documentElement.setAttribute("data-brand",n),localStorage.setItem(ao,n),Pl(n)})}toggle(){let n=this.value();this.value.set(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};function Pl(t){let n=document.createElement("link");n.onload=()=>{console.info(`Brand ${t} stylesheet loaded`),document.body.classList.add("loaded"),document.querySelector("link#brand-stylesheet")?.remove(),n.id="brand-stylesheet"},n.rel="stylesheet",n.href=t==="example"?"/example.css":`/brands/${t}.css`,document.head.appendChild(n)}var On=class t{width;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["icon-menu"]],inputs:{width:"width"},decls:2,vars:1,consts:[["data-bspk-name","Menu","data-type","material","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 -960 960 960"],["d","M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"]],template:function(e,i){e&1&&(rr(),ot(0,"svg",0),Tr(1,"path",1),st()),e&2&&ke("width",i.width)},styles:[`icon-menu{display:contents}
`],encapsulation:2})};var so=[{title:"Accordion",path:"accordion",data:{phase:"Dev"},loadComponent:()=>import("./chunk-PDQRKWKP.js").then(t=>t.AccordionPage)},{title:"AccordionSection",path:"accordion-section",data:{phase:"Utility"},loadComponent:()=>import("./chunk-ULSL5WFF.js").then(t=>t.AccordionSectionPage)},{title:"Avatar",path:"avatar",data:{phase:"Dev"},loadComponent:()=>import("./chunk-SUJ7HM7V.js").then(t=>t.AvatarPage)},{title:"AvatarGroup",path:"avatar-group",data:{phase:"Dev"},loadComponent:()=>import("./chunk-MUWKJHIZ.js").then(t=>t.AvatarGroupPage)},{title:"Badge",path:"badge",data:{phase:"Dev"},loadComponent:()=>import("./chunk-NUH3VU4A.js").then(t=>t.BadgePage)},{title:"BannerAlert",path:"banner-alert",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-OQXR3MFL.js").then(t=>t.BannerAlertPage)},{title:"Breadcrumb",path:"breadcrumb",data:{phase:"Dev"},loadComponent:()=>import("./chunk-XBA5ZDTZ.js").then(t=>t.BreadcrumbPage)},{title:"Button",path:"button",data:{phase:"Dev"},loadComponent:()=>import("./chunk-VACSXH6G.js").then(t=>t.ButtonPage)},{title:"Calendar",path:"calendar",data:{phase:"Dev"},loadComponent:()=>import("./chunk-L2BXRNDE.js").then(t=>t.CalendarPage)},{title:"Card",path:"card",data:{phase:"Dev"},loadComponent:()=>import("./chunk-CDOTXSIW.js").then(t=>t.CardPage)},{title:"Checkbox",path:"checkbox",data:{phase:"Dev"},loadComponent:()=>import("./chunk-YSGLBN6X.js").then(t=>t.CheckboxPage)},{title:"CheckboxGroup",path:"checkbox-group",data:{phase:"Stable"},loadComponent:()=>import("./chunk-YTUCLAWY.js").then(t=>t.CheckboxGroupPage)},{title:"CheckboxGroupField",path:"checkbox-group-field",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-CAXLI7FR.js").then(t=>t.CheckboxGroupFieldPage)},{title:"CheckboxOption",path:"checkbox-option",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-ZXAAWQZ2.js").then(t=>t.CheckboxOptionPage)},{title:"Chip",path:"chip",data:{phase:"Dev"},loadComponent:()=>import("./chunk-7I4SH42H.js").then(t=>t.ChipPage)},{title:"ChipGroup",path:"chip-group",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-EXDT6GMI.js").then(t=>t.ChipGroupPage)},{title:"DatePicker",path:"date-picker",data:{phase:"Dev"},loadComponent:()=>import("./chunk-JXFTIZFJ.js").then(t=>t.DatePickerPage)},{title:"DatePickerField",path:"date-picker-field",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-YPF5XWTH.js").then(t=>t.DatePickerFieldPage)},{title:"Dialog",path:"dialog",data:{phase:"Dev"},loadComponent:()=>import("./chunk-EGV2J7OF.js").then(t=>t.DialogPage)},{title:"Divider",path:"divider",data:{phase:"Dev"},loadComponent:()=>import("./chunk-GOONLADH.js").then(t=>t.DividerPage)},{title:"Fab",path:"fab",data:{phase:"Dev"},loadComponent:()=>import("./chunk-CIKM3VVQ.js").then(t=>t.FabPage)},{title:"Field",path:"field",data:{phase:"Utility"},loadComponent:()=>import("./chunk-W53FMED4.js").then(t=>t.FieldPage)},{title:"Flex",path:"flex",data:{phase:"Utility"},loadComponent:()=>import("./chunk-PUNYS5NR.js").then(t=>t.FlexPage)},{title:"Floating",path:"floating",data:{phase:"Utility"},loadComponent:()=>import("./chunk-QGKTY3YO.js").then(t=>t.FloatingPage)},{title:"FocusTrap",path:"focus-trap",data:{phase:"Utility"},loadComponent:()=>import("./chunk-WV2UWVF2.js").then(t=>t.FocusTrapPage)},{title:"Icon",path:"icon",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-JYR6NCF2.js").then(t=>t.IconPage)},{title:"InlineAlert",path:"inline-alert",data:{phase:"Dev"},loadComponent:()=>import("./chunk-CVS5KBHW.js").then(t=>t.InlineAlertPage)},{title:"Input",path:"input",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-AXVDMVDZ.js").then(t=>t.InputPage)},{title:"InputField",path:"input-field",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-MWSEBME3.js").then(t=>t.InputFieldPage)},{title:"InputNumber",path:"input-number",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-QCA3RSJW.js").then(t=>t.InputNumberPage)},{title:"InputNumberField",path:"input-number-field",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-EBHND5XW.js").then(t=>t.InputNumberFieldPage)},{title:"InputPhone",path:"input-phone",data:{phase:"Dev"},loadComponent:()=>import("./chunk-VRLRMWNZ.js").then(t=>t.InputPhonePage)},{title:"InputPhoneField",path:"input-phone-field",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-HSEROIOD.js").then(t=>t.InputPhoneFieldPage)},{title:"KeyNavigation",path:"key-navigation",data:{phase:"Utility"},loadComponent:()=>import("./chunk-3HHC4UDX.js").then(t=>t.KeyNavigationPage)},{title:"Link",path:"link",data:{phase:"Stable"},loadComponent:()=>import("./chunk-S7SXOJ6F.js").then(t=>t.LinkPage)},{title:"ListItem",path:"list-item",data:{phase:"Dev"},loadComponent:()=>import("./chunk-ZQ2CPITZ.js").then(t=>t.ListItemPage)},{title:"MatchParentHeight",path:"match-parent-height",data:{phase:"Utility"},loadComponent:()=>import("./chunk-CSHRI465.js").then(t=>t.MatchParentHeightPage)},{title:"Menu",path:"menu",data:{phase:"Dev"},loadComponent:()=>import("./chunk-PCTBJPKK.js").then(t=>t.MenuPage)},{title:"Modal",path:"modal",data:{phase:"Dev"},loadComponent:()=>import("./chunk-WCSKK5RH.js").then(t=>t.ModalPage)},{title:"OutsideClick",path:"outside-click",data:{phase:"Utility"},loadComponent:()=>import("./chunk-WEAV5JAV.js").then(t=>t.OutsideClickPage)},{title:"Pagination",path:"pagination",data:{phase:"Dev"},loadComponent:()=>import("./chunk-KGCB7DON.js").then(t=>t.PaginationPage)},{title:"Portal",path:"portal",data:{phase:"Utility"},loadComponent:()=>import("./chunk-GP7EMKGT.js").then(t=>t.PortalPage)},{title:"Radio",path:"radio",data:{phase:"Utility"},loadComponent:()=>import("./chunk-CPZIXLKB.js").then(t=>t.RadioPage)},{title:"RadioGroup",path:"radio-group",data:{phase:"Dev"},loadComponent:()=>import("./chunk-66H75YI6.js").then(t=>t.RadioGroupPage)},{title:"RadioGroupField",path:"radio-group-field",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-XB2QE6BS.js").then(t=>t.RadioGroupFieldPage)},{title:"RadioOption",path:"radio-option",data:{phase:"Utility"},loadComponent:()=>import("./chunk-FAEW56LY.js").then(t=>t.RadioOptionPage)},{title:"Scrim",path:"scrim",data:{phase:"Utility"},loadComponent:()=>import("./chunk-ENUQNR4U.js").then(t=>t.ScrimPage)},{title:"SegmentedControl",path:"segmented-control",data:{phase:"Dev"},loadComponent:()=>import("./chunk-JZVA75LQ.js").then(t=>t.SegmentedControlPage)},{title:"Select",path:"select",data:{phase:"Stable"},loadComponent:()=>import("./chunk-F56DHKB4.js").then(t=>t.SelectPage)},{title:"SelectField",path:"select-field",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-VN3VMZ35.js").then(t=>t.SelectFieldPage)},{title:"Switch",path:"switch",data:{phase:"Dev"},loadComponent:()=>import("./chunk-PNLYLG37.js").then(t=>t.SwitchPage)},{title:"SwitchOption",path:"switch-option",data:{phase:"Dev"},loadComponent:()=>import("./chunk-EB6TXBSZ.js").then(t=>t.SwitchOptionPage)},{title:"TabGroup",path:"tab-group",data:{phase:"Dev"},loadComponent:()=>import("./chunk-5FZK4SHN.js").then(t=>t.TabGroupPage)},{title:"Table",path:"table",data:{phase:"Dev"},loadComponent:()=>import("./chunk-MW6VSEUW.js").then(t=>t.TablePage)},{title:"TabList",path:"tab-list",data:{phase:"Utility"},loadComponent:()=>import("./chunk-O3C5GI4H.js").then(t=>t.TabListPage)},{title:"Tag",path:"tag",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-SSXVADZO.js").then(t=>t.TagPage)},{title:"Textarea",path:"textarea",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-UUGQZS5W.js").then(t=>t.TextareaPage)},{title:"TextareaField",path:"textarea-field",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-AZ4XB4XE.js").then(t=>t.TextareaFieldPage)},{title:"Tooltip",path:"tooltip",data:{phase:"Dev"},loadComponent:()=>import("./chunk-SARASSP5.js").then(t=>t.TooltipPage)},{title:"Txt",path:"txt",data:{phase:"UXReview"},loadComponent:()=>import("./chunk-ILR3YUYS.js").then(t=>t.TxtPage)}];var Nn=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["home-route"]],decls:5,vars:0,consts:[[2,"display","flex","flex-direction","column","align-items","center","padding","var(--spacing-sizing-10)","text-align","center"]],template:function(e,i){e&1&&(ot(0,"section",0)(1,"h1"),L(2,"BSPK: The Foundation for Your Next Project"),st(),ot(3,"p"),L(4," A set of custom designed components that you can extend and build on. BSPK makes following the Bespoke Design System easier than ever. Open Source. Open Code. "),st()())},styles:["[_nghost-%COMP%]{display:contents}"]})};var _n=[{path:"",component:Nn,hide:!0,title:"BSPK"},...so,{path:"**",redirectTo:"",title:"404'd",hide:!0}];var lo=(t,n)=>n.path;function Nl(t,n){if(t&1&&(C(0,"a",2),L(1),k()),t&2){let e=n.$implicit;J("routerLink",e.path),z(),me(" ",e.title," ")}}function _l(t,n){if(t&1&&(C(0,"a",2),L(1),k()),t&2){let e=n.$implicit;J("routerLink",e.path),z(),me(" ",e.title," ")}}var jn=class t{routes=_n;componentRoutes=this.routes.filter(n=>n.data?.phase&&n.data?.phase!=="Utility");utilityRoutes=this.routes.filter(n=>n.data?.phase==="Utility");trackByPath(n,e){return e?.path??e?.title??n}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-nav"]],hostAttrs:[2,"display","contents"],decls:9,vars:0,consts:[["role","menu"],["data-header","true"],["ui-link","","data-link","","role","menuitem","routerLinkActive","active","variant","subtle",1,"nav-link",3,"routerLink"]],template:function(e,i){e&1&&(C(0,"div",0)(1,"div",1),L(2,"Components"),k(),Oe(3,Nl,2,2,"a",2,lo),C(5,"div",1),L(6,"Utility"),k(),Oe(7,_l,2,2,"a",2,lo),k()),e&2&&(z(3),Pe(i.componentRoutes),z(4),Pe(i.utilityRoutes))},dependencies:[li,we,Ot,Jt],encapsulation:2})};var jl=t=>({callback:t}),Bl=t=>({reference:t}),co=(t,n)=>n.hash;function Fl(t,n){if(t&1&&(C(0,"a",5),L(1),k()),t&2){let e=n.$implicit,i=Ne(2);J("routerLink",i.location.pathname)("fragment",e.hash),ke("data-level",e.level)("data-selected",i.location.hash===e.hash||void 0),z(),me(" ",e.title," ")}}function Hl(t,n){if(t&1){let e=oi();C(0,"ui-card",3),fe("onMouseLeave",function(){jt(e);let r=Ne();return Bt(r.open.set(!1))}),C(1,"div",4),L(2,"On this page"),k(),C(3,"nav"),Oe(4,Fl,2,5,"a",5,co),k()()}if(t&2){let e=Ne();J("ui-outside-click",si(2,jl,e.toggleMenu(!1)))("ui-floating",si(4,Bl,e.reference())),z(4),Pe(e.menuItems())}}function Wl(t,n){if(t&1&&(C(0,"a",6),le(1,"icon-link"),k()),t&2){let e=Ne().$implicit,i=Ne();J("ui-portal",e.element)("routerLink",i.location.pathname)("fragment",e.hash)("id",e.hash.substring(1)),ke("aria-label",e.title)}}function $l(t,n){if(t&1&&rt(0,Wl,2,5,"a",6),t&2){let e=n.$implicit;at(e.element?0:-1)}}var Bn=class t{IconMenu=On;menuItems=B([]);open=B(!1);reference=B(null);router=c(ae);route=c(W);document=c(E);host=c(Ie);timeout=null;routeSubscription=null;fragmentSubscription=null;get location(){return globalThis.location}toggleMenu(n){return()=>this.open.set(n)}setMenuItems(){setTimeout(()=>{let n=this.document.querySelector("[data-main]"),e=Array.from(n.querySelectorAll("h1, h2, h3, h4, h5, h6")||[]).filter(i=>!i.closest("[data-code-editor]")&&!i.closest("[data-example]")).map(i=>{let r=(i.title||i.textContent).trim();i.id=i.id||Gl(r);let a={title:r,hash:`${i.id}`,level:parseInt(i.tagName.substring(1),10)-2,element:i};return i.dataset.navTarget="true",a});globalThis.mainElement=n,this.menuItems.set(e)},1e3)}ngOnInit(){let n=this.host.nativeElement.querySelector("button");this.reference.set(n),n?.setAttribute("data-nav-button",""),this.routeSubscription=this.router.events.subscribe(()=>{this.open.set(!1),this.menuItems.set([]),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.setMenuItems()},1e3)}),this.setMenuItems(),this.fragmentSubscription=this.route.fragment.subscribe(e=>{e&&this.document.getElementById(e)?.scrollIntoView({behavior:"smooth"})})}ngOnDestroy(){this.routeSubscription?.unsubscribe(),this.fragmentSubscription?.unsubscribe(),this.timeout&&clearTimeout(this.timeout)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-nav-contents"]],decls:5,vars:3,consts:[["fab",""],["container","page","label","On this page","placement","top-right","variant","neutral",3,"onClick","onMouseOver","icon","iconOnly"],["data-nav-contents","",3,"ui-outside-click","ui-floating"],["data-nav-contents","",3,"onMouseLeave","ui-outside-click","ui-floating"],["ui-txt","body-small"],["ui-link","","data-link","","role","menuitem","routerLinkActive","active","variant","subtle","data-subtle","",1,"nav-link",3,"routerLink","fragment"],["data-nav-link","",3,"ui-portal","routerLink","fragment","id"]],template:function(e,i){if(e&1){let r=oi();C(0,"ui-fab",1,0),fe("onClick",function(){return jt(r),Bt(i.open.set(!i.open()))})("onMouseOver",function(){return jt(r),Bt(i.open.set(!0))}),k(),rt(2,Hl,6,6,"ui-card",2),Oe(3,$l,1,1,null,null,co)}e&2&&(J("icon",i.IconMenu)("iconOnly",!0),z(2),at(i.open()?2:-1),z(),Pe(i.menuItems()))},dependencies:[$r,Br,jr,Wr,Nr,we,Ot,Jt,Hr,Fr],encapsulation:2})};function Gl(t){return[t].flat().join("-").toLowerCase().replace(/[\s| |_/]/g,"-").replace(/[^a-z0-9-]+/g,"-").replace(/[-]+/g,"-").replace(/^[-]+/g,"").replace(/[-]+$/g,"")}var Vi={components:[{name:"Accordion",file:"projects/ui/src/lib/accordion/accordion.ts",css:`[data-bspk='accordion'] {
    display: block;
    width: 100%;
    padding: var(--spacing-sizing-02);

    &:empty {
        display: none;
    }

    > [data-bspk='accordion-item'] {
        --border-bottom-color: var(--stroke-neutral-base);

        display: flex;
        flex-direction: column;
        justify-content: center;
        color: var(--foreground-neutral-on-surface);

        &[data-disabled] {
            --border-bottom-color: var(--stroke-neutral-disabled-light);

            background:
                linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
                linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
            color: var(--foreground-neutral-disabled-on-surface);
        }

        button[data-header] {
            display: flex;
            flex-direction: row;
            align-items: center;
            background: none;
            color: inherit;
            border: none;
            padding: 0 var(--spacing-sizing-02);
            gap: var(--spacing-sizing-02);
            font: inherit;
            cursor: pointer;
            outline: none;
            min-height: var(--spacing-sizing-12);

            [data-title-subtitle] {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                flex: 1;

                [data-title] {
                    font: var(--labels-base);
                }

                [data-subtitle] {
                    font: var(--body-x-small);
                    color: var(--foreground-neutral-on-surface-variant-01);
                }
            }

            [data-arrow] {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: var(--spacing-sizing-02);

                svg {
                    width: var(--spacing-sizing-06);
                }
            }

            &:not(:disabled) {
                &:hover {
                    background-image:
                        linear-gradient(
                            var(--interactions-neutral-hover-opacity),
                            var(--interactions-neutral-hover-opacity)
                        ),
                        linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
                }

                &:active {
                    background-image:
                        linear-gradient(
                            var(--interactions-neutral-press-opacity),
                            var(--interactions-neutral-press-opacity)
                        ),
                        linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
                }
            }

            &:disabled {
                cursor: not-allowed;
                color: var(--foreground-neutral-disabled-on-surface);
                border-color: var(--stroke-neutral-disabled-light);
            }
        }

        &:has(:focus-visible) {
            outline: 2px solid var(--stroke-neutral-focus);
            border-color: var(--stroke-neutral-focus);
            margin-bottom: 1px;
        }

        [data-content] {
            padding: var(--spacing-sizing-01) var(--spacing-sizing-02) var(--spacing-sizing-04);
        }
    }

    [data-divider] {
        display: block;
        height: 1px;
        width: calc(100% - var(--spacing-sizing-04));
        margin: -1px var(--spacing-sizing-02) 0;
        background-color: var(--border-bottom-color);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIAccordion",slug:"accordion",example:`<ui-accordion [singleOpen]="false" [items]="[{title: 'Foo', children: 'Foo Children'}, {title: 'Bar', children: 'Bar Children'}, {title: 'Car', children: 'Car Children'}]"></ui-accordion>`,description:"A vertical stack of collapsible panels or that allows customers to expand or collapse each panel individually to reveal or hide their content.",phase:"Dev",directive:!1,exampleComponent:"UIAccordionExample",inputs:[{name:"singleOpen",description:"If true only one accordion section can be opened at a time",type:"boolean",required:!1,default:"true"}],outputs:[],associatedTypes:[{name:"AccordionSectionProps",file:"projects/ui/src/lib/accordion/section.ts",props:[{name:"disabled",description:"Indicates whether the accordion is disabled.",type:"boolean",default:"false",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"isOpen",description:`If the accordion is initially open.

This is ignored if the accordion section disabled property is true.`,type:"boolean",default:"false",required:!1},{name:"leading",description:`The leading element to display in the accordion header.

May be passed as string or use <span data-leading> for non-string content.`,type:"string",required:!1},{name:"subtitle",description:"The subtitle of the accordion.",type:"string",required:!1},{name:"title",description:"The title of the accordion.",type:"string",required:!0},{name:"trailing",description:`The trailing element to display in the accordion header.

May be passed as string or use <span data-trailing> for non-string content.`,type:"string",required:!1}]}],hasContent:!0},{name:"AccordionSection",file:"projects/ui/src/lib/accordion/section.ts",css:"",className:"UIAccordionSection",slug:"accordion-section",description:"A utility component representing a single section within an accordion.",phase:"Utility",directive:!1,inputs:[{name:"disabled",description:"Indicates whether the accordion is disabled.",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"isOpen",description:`If the accordion is initially open.

This is ignored if the accordion section disabled property is true.`,type:"boolean",required:!1,default:"false"},{name:"leading",description:`The leading element to display in the accordion header.

May be passed as string or use <span data-leading> for non-string content.`,type:"string",required:!1},{name:"subtitle",description:"The subtitle of the accordion.",type:"string",required:!1},{name:"title",description:"The title of the accordion.",type:"string",required:!0},{name:"trailing",description:`The trailing element to display in the accordion header.

May be passed as string or use <span data-trailing> for non-string content.`,type:"string",required:!1}],outputs:[{name:"isOpenChange",description:`Emits when the value changes. 

If the accordion is initially open.

This is ignored if the accordion section disabled property is true.`,type:"(value: boolean) => void",required:!1},{name:"toggleOpen",description:`Emits the id of the accordion section when its header is clicked to toggle open/closed state. The parent
accordion component listens for this event to manage which sections are open.`,type:"string",required:!1}],associatedTypes:[{name:"AccordionProps",file:"projects/ui/src/lib/accordion/accordion.ts",props:[{name:"singleOpen",description:"If true only one accordion section can be opened at a time",type:"boolean",default:"true",required:!1}]}],hasContent:!0},{name:"Avatar",file:"projects/ui/src/lib/avatar/avatar.ts",css:`[data-bspk='avatar'] {
    /*! 
    --avatar-border: is set via inline style 
    */

    --height: var(--spacing-sizing-10);
    --font: var(--labels-base);
    --svg-size: var(--spacing-sizing-10);

    border: var(--avatar-border);

    &:not([data-color]) {
        --foreground: var(--foreground-neutral-on-surface);
        --background: var(--surface-neutral-t3-low);
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: var(--height);
    width: var(--height);
    aspect-ratio: 1 / 1;
    border-radius: var(--radius-full);
    background-color: var(--background);
    color: var(--foreground);
    font: var(--font);
    flex-shrink: 0;
    flex-grow: 0;
    position: relative;

    &:has(img) {
        overflow: hidden;
        align-items: start;
        justify-content: start;
    }

    img {
        vertical-align: top;
        max-width: 100%;
        height: auto;
    }

    svg {
        width: var(--svg-size);
        height: var(--svg-size);
    }

    [data-icon] {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &[data-size='x-small'] {
        --height: var(--spacing-sizing-06);
        --font: var(--labels-x-small);
        --svg-size: var(--spacing-sizing-04);
    }

    &[data-size='small'] {
        --height: var(--spacing-sizing-08);
        --font: var(--labels-small);
        --svg-size: var(--spacing-sizing-05);
    }

    &[data-size='medium'] {
        --height: var(--spacing-sizing-10);
        --font: var(--labels-base);
        --svg-size: var(--spacing-sizing-05);
    }

    &[data-size='large'] {
        --height: var(--spacing-sizing-12);
        --font: var(--labels-large);
        --svg-size: var(--spacing-sizing-06);
    }

    &[data-size='x-large'] {
        --height: var(--spacing-sizing-14);
        --font: var(--subheader-x-large);
        --svg-size: var(--spacing-sizing-08);
    }

    &[data-size='xx-large'] {
        --height: var(--spacing-sizing-17);
        --font: var(--subheader-xx-large);
        --svg-size: var(--spacing-sizing-12);
    }

    &[data-size='xxx-large'] {
        --height: var(--spacing-sizing-19);
        --font: var(--display-regular-small);
        --svg-size: var(--spacing-sizing-15);
    }

    &[data-size='xxxx-large'] {
        --height: var(--spacing-sizing-21);
        --font: var(--display-regular-medium);
        --svg-size: var(--spacing-sizing-17);
    }

    &[data-size='xxxxx-large'] {
        --height: var(--spacing-sizing-23);
        --font: var(--display-regular-large);
        --svg-size: var(--spacing-sizing-18);
    }

    --state-background: transparent;

    &::after {
        content: '';
        position: absolute;
        display: block;
        inset: 0;
        border-radius: var(--radius-full);
        background: var(--state-background);
    }

    &:not([aria-disabled])[role='button'] {
        &:hover {
            --state-background: var(--interactions-neutral-hover-opacity);
        }

        &:active {
            --state-background: var(--interactions-neutral-press-opacity);
        }
    }

    &[aria-disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:focus:not(:active, [aria-disabled]) {
        outline: 2px solid var(--stroke-neutral-focus);
        outline-offset: -2px;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIAvatar",slug:"avatar",example:`<ui-avatar
[color]="'blue'"
[image]="'/avatar-01.png'"
[initials]="'AR'"
[name]="'Andre Giant'"
[size]="'large'"
[disabled]="false"
(onClick)="action('Launch avatar popover')"
[showIcon]="false"
[hideTooltip]="true"
/>`,description:"An avatar is a visual representation of a user or entity. It can be used to display an initials, icon, or image.",phase:"Dev",directive:!1,exampleComponent:"UIAvatarExample",inputs:[{name:"color",description:"The color of the avatar.",type:"Exclude<ColorVariant | white>",required:!1,default:"grey"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"hideTooltip",description:"Whether to hide the represented user's name as a tooltip.",type:"boolean",required:!1,default:"false"},{name:"image",description:`The url to the image to display in the avatar.

When provided the image will be displayed instead of the icon or initials.`,type:"string",required:!1},{name:"initials",description:`Customizable initials to display in the avatar limited to 2 characters.

By default, initials are the first letters of the first two words in the name. For a single-word name, only one
initial is shown. Names with three or more words, only the first two initials are used.`,type:"string",required:!1},{name:"name",description:"The name of the person or entity represented by the avatar. This is used for accessibility purposes.",type:"string",required:!0},{name:"showIcon",description:`Whether to show the icon in the avatar instead of the initials.

If an image is provided, the image will be shown instead of the icon.`,type:"boolean",required:!1,default:"true"},{name:"size",description:"The size of the avatar.",type:["large","medium","small","x-large","x-small","xx-large","xxx-large","xxxx-large","xxxxx-large"],required:!1,default:"small"}],outputs:[{name:"onClick",description:"The function to call when the avatar is clicked.",type:"EventEmitter"}],associatedTypes:[],hasContent:!1},{name:"AvatarGroup",file:"projects/ui/src/lib/avatar-group/avatar-group.ts",css:`[data-bspk='avatar-group'] {
    width: fit-content;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    [data-wrap] {
        min-width: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    /* data-gap={variant === 'spread' ? (small ? '01' : '02') : undefined} */

    [data-bspk='avatar'] {
        z-index: 1;

        &:hover {
            z-index: 2;
        }

        &[data-bspk-owner='avatar-overflow'] {
            --avatar-border: solid 1px var(--stroke-neutral-low);

            background-color: var(--surface-neutral-t1-base);
        }
    }

    &[data-variant='spread'] {
        --avatar-border: none;

        [data-bspk='avatar'] + [data-bspk='avatar'] {
            margin-left: var(--spacing-sizing-02);
        }
    }

    &[data-variant='stacked'] {
        --avatar-border: solid 1px var(--stroke-neutral-low);

        [data-bspk='avatar'] + [data-bspk='avatar'] {
            margin-left: calc(var(--spacing-sizing-02) * -1);
        }
    }
}
`,className:"UIAvatarGroup",slug:"avatar-group",example:`<AvatarGroup
items={[
{ name: 'Fezzik', image: '/avatar-01.png' },
{ name: 'Inigo Montoya', initials: 'IM', color: 'blue' },
{ name: 'Miracle Max', initials: 'MM', color: 'green' },
{ name: 'Princess Buttercup', showIcon: true },
{ name: 'Westley', initials: 'W', color: 'purple' },
{ name: 'Vincent', initials: 'V', image: '/avatar-04.png' },
]}
size="medium"
max={3}
variant="spread"
/>`,description:"The AvatarGroup component is used to display a group of avatars, with support for overflow handling and different display variants.",phase:"Dev",directive:!1,exampleComponent:"UIAvatarGroupExample",inputs:[{name:"items",description:"The avatars to display in the group.",type:"AvatarItem[]",required:!0},{name:"max",description:`The maximum number of avatars to display before showing the overflow menu.

This is used to limit the number of avatars displayed in the group.

Recommended to set this to a value between 3 and 5 for optimal display.`,type:"number",required:!1,default:"5"},{name:"size",description:"Size of the avatar group.",type:["large","medium","small","x-large","x-small","xx-large","xxx-large","xxxx-large","xxxxx-large"],required:!1,default:"small"},{name:"variant",description:"The variant of the avatar group.",type:["spread","stacked"],required:!1,default:"stacked"}],outputs:[],associatedTypes:[{name:"AvatarItem",file:"projects/ui/src/lib/avatar-group/avatar-group.ts",props:[{name:"color",description:"The color of the avatar.",type:"Exclude<ColorVariant | white>",default:"grey",required:!1},{name:"image",description:`The url to the image to display in the avatar.

When provided the image will be displayed instead of the icon or initials.`,type:"string",required:!1},{name:"initials",description:`Customizable initials to display in the avatar limited to 2 characters.

By default, initials are the first letters of the first two words in the name. For a single-word name, only one
initial is shown. Names with three or more words, only the first two initials are used.`,type:"string",required:!1},{name:"name",description:"The name of the person or entity represented by the avatar. This is used for accessibility purposes.",type:"string",required:!0},{name:"showIcon",description:`Whether to show the icon in the avatar instead of the initials.

If an image is provided, the image will be shown instead of the icon.`,type:"boolean",default:"true",required:!1}]}],hasContent:!1},{name:"Badge",file:"projects/ui/src/lib/badge/badge.ts",css:`[data-bspk='badge'] {
    --size: var(--spacing-sizing-06);

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-full);
    height: var(--size);
    width: fit-content;
    min-width: var(--size);
    font: var(--labels-x-small);
    padding: 0 var(--spacing-sizing-02);
    background-color: var(--background);
    color: var(--foreground);

    &[data-color='primary'] {
        --foreground: var(--foreground-brand-on-primary);
        --background: var(--foreground-brand-primary);
    }

    &[data-color='secondary'] {
        --foreground: var(--foreground-brand-on-secondary);
        --background: var(--foreground-brand-secondary);
    }

    &[data-size='x-small'] {
        --size: var(--spacing-sizing-05);

        padding: 2px var(--spacing-sizing-01);
    }

    &[data-variant='notification'] {
        --size: 6px;

        padding: 0;
        display: block;
    }

    &[data-surface-border] {
        border: 2px solid var(--surface-neutral-t1-base);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIBadge",slug:"badge",example:`import { Badge } from '@bspk/ui/Badge';

<Badge count={5} size="small" color="primary" surfaceBorder={true} />`,description:"Visual indicator for new items within a parent page represented with a numerical count of new items.",phase:"Dev",directive:!1,exampleComponent:"UIBadgeExample",inputs:[{name:"color",description:"The color variant of the badge.",type:["primary","secondary"],required:!1,default:"primary"},{name:"count",description:"The content of the badge. If larger than 99, the badge will display '99+'.",type:"number",required:!1,default:"1"},{name:"size",description:"The size of the badge.",type:["small","x-small"],required:!1,default:"small"},{name:"surfaceBorder",description:"Whether the badge should have a border that matches the surface color.",type:"boolean",required:!1,default:"false"}],outputs:[],associatedTypes:[],hasContent:!0},{name:"BannerAlert",file:"projects/ui/src/lib/banner-alert/banner-alert.ts",css:`[data-bspk='banner-alert'] {
    --color: var(--status-information);
    --on-color: var(--status-on-information);

    display: flex;
    flex-direction: row;
    border: 2px solid var(--color);
    border-radius: var(--radius-md);
    background-color: var(--surface-neutral-t1-base);
    width: 100%;

    &[data-variant='error'] {
        --color: var(--status-error);
        --on-color: var(--status-on-error);
    }

    &[data-variant='success'] {
        --color: var(--status-success);
        --on-color: var(--status-on-success);
    }

    &[data-variant='warning'] {
        --color: var(--status-warning);
        --on-color: var(--status-on-warning);
    }

    &[data-elevated] {
        box-shadow: var(--drop-shadow-raise);
    }

    [data-icon-bar] {
        flex: 1;
        padding: var(--spacing-sizing-04) var(--spacing-sizing-03);
        background: var(--color);
        color: var(--on-color);

        svg {
            width: var(--spacing-sizing-06);
            height: var(--spacing-sizing-06);
        }
    }

    [data-content] {
        flex: 100%;
        display: flex;
        flex-direction: column;
        padding: var(--spacing-sizing-02) var(--spacing-sizing-02) var(--spacing-sizing-02) var(--spacing-sizing-04);

        [data-header] {
            display: flex;
            flex-direction: row;
            gap: var(--spacing-sizing-03);
            height: var(--spacing-sizing-12);
            align-items: center;

            span {
                flex: 1;
                display: flex;
                align-items: center;
                color: var(--foreground-neutral-on-surface);
                font: var(--heading-h6);

                @media (any-pointer: coarse) {
                    font: var(--heading-h6);
                }
            }
        }

        [data-body] {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sizing-02);
            padding: 0 var(--spacing-sizing-02) var(--spacing-sizing-02) 0;

            span {
                font: var(--body-base);
            }

            button {
                margin-left: auto;
            }
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIBannerAlert",slug:"banner-alert",description:"A visual and contextual message used to communicate an important message or notification to users relating to a status or the body content of a page.",phase:"UXReview",directive:!1,exampleComponent:"UIBannerAlertExample",inputs:[{name:"body",description:"The body of the banner alert.",type:"string",required:!0},{name:"callToAction",description:"This property may be undefined or an object containing required CallToActionButton properties.",type:"CallToActionButton",required:!1},{name:"elevated",description:"Is the alert elevated. If true a drop shadow is added.",type:"boolean",required:!1,default:"false"},{name:"header",description:"The header of the banner alert.",type:"string",required:!0},{name:"variant",description:"The color variant of the banner alert.",type:["error","informational","success","warning"],required:!1,default:"informational"}],outputs:[{name:"onClose",description:"Function to call when the banner alert is closed.",type:"EventEmitter"}],associatedTypes:[{name:"CallToActionButton",file:"projects/ui/src/lib/banner-alert/banner-alert.ts",props:[{name:"label",description:"The label of the call to action button.",type:"string",required:!0},{name:"onClick",description:"The callback function for the call to action button.",type:"function",required:!0}]}],hasContent:!1},{name:"Breadcrumb",file:"projects/ui/src/lib/breadcrumb/breadcrumb.ts",css:`[data-bspk='breadcrumb'] {
    width: 100%;

    ol {
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        list-style: none;
        gap: var(--spacing-sizing-02);

        li {
            display: flex;
            gap: var(--spacing-sizing-02);
        }
    }
}
`,className:"UIBreadcrumb",slug:"breadcrumb",example:`<ui-breadcrumb
[items]="[
{ label: 'Brioche', href: '#brioche' },
{ label: 'Whole Wheat', href: '#whole-wheat' },
{ label: 'Sourdough', href: '#sourdough' },
{ label: 'Rye', href: '#rye' },
{ label: 'Multigrain', href: '#multigrain' },
{ label: 'Baguette', href: '#baguette' },
{ label: 'Focaccia', href: '#focaccia' },
{ label: 'Ciabatta', href: '#ciabatta' },
{ label: 'Pita', href: '#pita' },
{ label: 'Naan', href: '#naan' },
{ label: 'Flatbread', href: '#flatbread' }
]"
[scrollLimit]="5">
</ui-breadcrumb>`,description:"Used to indicate the current page's location within a navigational hierarchy.",phase:"Dev",directive:!1,exampleComponent:"UIBreadcrumbExample",inputs:[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"items",description:`The array of breadcrumb items.

If **less than 2** items are provided, the component will not render.`,type:"BreadcrumbItem[]",required:!0},{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollLimitStyle utility.`,type:"number",required:!1},{name:"variant",description:`Change the color of the link to a subtle color. This is useful for links that are not primary actions, for
example footer menus.`,type:["default","subtle-inverse","subtle"],required:!1,default:"default"}],outputs:[],associatedTypes:[{name:"BreadcrumbItem",file:"projects/ui/src/lib/breadcrumb/utils.ts",props:[{name:"href",description:"The href of the breadcrumb item.",type:"string",required:!0},{name:"label",description:"The label of the breadcrumb item.",type:"string",required:!0},{name:"active",description:"Marks the element as active and displays active state theme.",type:"boolean",default:"false",required:!1},{name:"ariaDisabled",description:"The aria-disabled attribute for the element.",type:"boolean",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaReadonly",description:"The aria-readonly attribute for the element.",type:"boolean",required:!1},{name:"ariaRole",description:"The ARIA role of the element.",type:["alert","alertdialog","application","article","banner","button","cell","checkbox","columnheader","combobox","complementary","contentinfo","definition","dialog","directory","document","feed","figure","form","grid","gridcell","group","heading","img","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","navigation","none","note","option","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","switch","tab","table","tablist","tabpanel","term","textbox","timer","toolbar","tooltip","tree","treegrid","treeitem","unknown"],required:!1},{name:"ariaSelected",description:`Indicates the current "selected" state of the list item when used in a selectable context, such as within a
ListItemMenu.`,type:"boolean",required:!1},{name:"as",description:"The element type to render as.",type:["a","button","div","label"],default:"div",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},{name:"htmlFor",description:"The htmlFor attribute for the element.",type:"string",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"subText",description:"The subtext to display in the ListItem.",type:"string",required:!1},{name:"tabIndex",description:"Explicit tabIndex; defaults to 0 when actionable, otherwise -1.",type:"number",required:!1},{name:"width",description:`Determines how the ListItem uses horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],default:"fill",required:!1}]}],hasContent:!1},{name:"Button",file:"projects/ui/src/lib/button/button.ts",css:`[data-bspk='button'] {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-sizing-02);
    border: none;
    cursor: pointer;
    background: transparent;
    text-decoration: none;
    width: fit-content;
    font-family: var(--typeface);

    [data-touch-target] {
        min-width: var(--spacing-sizing-12);
        min-height: var(--spacing-sizing-12);
    }

    &[data-width='hug'] {
        width: fit-content;
    }

    &[data-width='fill'] {
        width: 100%;
    }

    &[data-size='x-small'] {
        font-size: var(--typography-size-xs);
        line-height: var(--typography-line-height-lh-1);
        height: var(--spacing-sizing-06);
        min-width: var(--spacing-sizing-06);
        gap: var(--spacing-sizing-02);

        &:has([data-button-label]),
        &[data-override] {
            padding: 0 var(--spacing-sizing-02);
        }

        [data-button-icon] svg {
            width: var(--spacing-sizing-04);
            height: var(--spacing-sizing-04);
        }
    }

    &[data-size='small'] {
        font-size: var(--typography-size-sm);
        line-height: var(--typography-line-height-lh-2);
        height: var(--spacing-sizing-08);
        min-width: var(--spacing-sizing-08);

        &:has([data-button-label]),
        &[data-override] {
            padding: 6px var(--spacing-sizing-04);
        }

        [data-button-icon] svg {
            width: var(--spacing-sizing-05);
            height: var(--spacing-sizing-05);
        }
    }

    &[data-size='medium'] {
        font-size: var(--typography-size-base);
        line-height: var(--typography-line-height-lh-2);
        height: var(--spacing-sizing-10);
        min-width: var(--spacing-sizing-10);

        &:has([data-button-label]),
        &[data-override] {
            padding: var(--spacing-sizing-02) var(--spacing-sizing-04);
        }

        [data-button-icon] svg {
            width: var(--spacing-sizing-05);
            height: var(--spacing-sizing-05);
        }
    }

    &[data-size='large'] {
        font-size: var(--typography-size-bp-md);
        line-height: var(--typography-line-height-lh-4);
        height: var(--spacing-sizing-12);
        min-width: var(--spacing-sizing-12);

        &:has([data-button-label]),
        &[data-override] {
            padding: var(--spacing-sizing-03) var(--spacing-sizing-04);
        }

        [data-button-icon] svg {
            width: var(--spacing-sizing-06);
            height: var(--spacing-sizing-06);
        }
    }

    &[disabled] {
        cursor: not-allowed;
    }

    [data-button-icon] {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    [data-button-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    &[data-variant='primary'] {
        --primary-background: var(--surface-brand-primary);

        background-color: var(--primary-background);
        color: var(--foreground-brand-on-primary);
        border-radius: var(--button-border-radius);

        &[disabled] {
            color: var(--foreground-neutral-disabled-on-surface);
            background: var(--interactions-disabled-opacity);
        }

        &:not([disabled]) {
            [data-pseudo='hover'] > &,
            &:hover {
                background:
                    linear-gradient(var(--interactions-brand-hover-opacity), var(--interactions-brand-hover-opacity)),
                    linear-gradient(var(--primary-background), var(--primary-background));
            }

            [data-pseudo='active'] > &,
            &:active {
                background:
                    linear-gradient(var(--interactions-brand-press-opacity), var(--interactions-brand-press-opacity)),
                    linear-gradient(var(--primary-background), var(--primary-background));
            }

            [data-pseudo='focus'] > &,
            &:focus-visible {
                outline: solid 2px var(--stroke-neutral-focus);
                isolation: isolate;
            }
        }

        &[data-destructive] {
            &:not([disabled]) {
                --primary-background: var(--status-error);

                color: var(--foreground-brand-on-primary);
            }
        }
    }

    &[data-variant='secondary'] {
        border: solid var(--button-border-width) var(--stroke-neutral-base);
        border-radius: var(--button-border-radius);
        color: var(--foreground-neutral-on-surface-variant-01);

        &[disabled] {
            color: var(--foreground-neutral-disabled-on-surface);
            border: solid var(--button-border-width) var(--stroke-neutral-disabled-light);
        }

        &:not([disabled]) {
            [data-pseudo='hover'] > &,
            &:hover {
                background-color: var(--interactions-neutral-hover-opacity);
            }

            [data-pseudo='active'] > &,
            &:active {
                background-color: var(--interactions-neutral-press-opacity);
            }

            [data-pseudo='focus'] > &,
            &:focus-visible {
                outline: solid 2px var(--stroke-neutral-focus);
                isolation: isolate;
            }
        }

        &[data-destructive] {
            &:not([disabled]) {
                background: transparent;
                color: var(--status-error);
                border: solid var(--button-border-width) var(--status-error);
            }
        }
    }

    &[data-variant='tertiary'] {
        background: transparent;
        color: var(--foreground-neutral-on-surface-variant-01);

        &[disabled] {
            color: var(--foreground-neutral-disabled-on-surface);
        }

        &:not([disabled]) {
            [data-pseudo='hover'] > &,
            &:hover {
                background: var(--interactions-neutral-hover-opacity);
            }

            [data-pseudo='active'] > &,
            &:active {
                background: var(--interactions-neutral-press-opacity);
            }

            [data-pseudo='focus'] > &,
            &:focus-visible {
                outline: solid 2px var(--stroke-neutral-focus);
                isolation: isolate;
            }
        }

        &[data-destructive] {
            &:not([disabled]) {
                color: var(--status-error);
            }
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIButton",slug:"button",example:`<bspk-button
label="Click Me"
size="medium"
variant="primary"
(onClick)="handleClick($event)"
icon="iconTemplate">
</bspk-button>`,description:"A clickable component that allows users to perform an action, make a choice or trigger a change in state.",phase:"Dev",directive:!1,exampleComponent:"UIButtonExample",inputs:[{name:"ariaControls",description:"The aria-controls attribute of the element for accessibility purposes.",type:["string","null"],required:!1,default:"null"},{name:"ariaExpanded",description:"The aria-expanded attribute of the element for accessibility purposes.",type:["boolean","null"],required:!1,default:"null"},{name:"ariaHaspopup",description:"The aria-haspopup attribute of the element for accessibility purposes.",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"class",description:"Additional CSS classes to apply.",type:"string",required:!1},{name:"destructive",description:"The function of the button is destructive.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"icon",description:"The icon of the button.",type:"BspkIcon",required:!1},{name:"iconOnly",description:`When true the button label is hidden and only the icon is shown. When label isn't showing it is used in a tooltip
and as the aria-label prop.

Ignored if \`icon\` is not provided.`,type:"boolean",required:!1,default:"false"},{name:"label",description:"The label of the button.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"size",description:"The size of the button.",type:["large","medium","small","x-small"],required:!1,default:"medium"},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"tooltip",description:"The tool tip text that appears when hovered.",type:"string",required:!1},{name:"type",description:"The type of the button element.",type:["button","reset","submit"],required:!1,default:"button"},{name:"variant",description:"The color variant of the button.",type:["primary","secondary","tertiary"],required:!1,default:"primary"},{name:"width",description:`Determines how the button uses horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],required:!1,default:"hug"}],outputs:[{name:"onBlur",description:"Event emitted when the button loses focus.",type:"EventEmitter"},{name:"onClick",description:"Event emitted when the button is clicked.",type:"EventEmitter"},{name:"onFocus",description:"Event emitted when the button receives focus.",type:"EventEmitter"},{name:"onMouseEnter",description:"Event emitted when mouse enters the button.",type:"EventEmitter"},{name:"onMouseLeave",description:"Event emitted when mouse leaves the button.",type:"EventEmitter"}],associatedTypes:[],hasContent:!0},{name:"Calendar",file:"projects/ui/src/lib/calendar/calendar.ts",css:`[data-bspk='calendar'] {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font: var(--labels-base);
    width: 360px;
    color: var(--foreground-neutral-on-surface);
    gap: var(--spacing-sizing-01);
    background: var(--surface-neutral-t1-base);
    border-radius: var(--radius-lg);
    padding: var(--spacing-sizing-02);

    [data-header] {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        border-bottom: 1px solid var(--stroke-neutral-low);

        [data-title] {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            [data-bspk='button'] {
                font: inherit;

                &[data-month],
                &[data-year] {
                    padding: 0;
                    min-width: var(--spacing-sizing-12);
                }
            }
        }

        [data-bspk='button'] {
            border-radius: var(--radius-sm);
        }
    }

    table {
        display: flex;
        flex-direction: column;

        tr {
            display: contents;
        }

        td,
        th {
            height: var(--spacing-sizing-12);
            line-height: var(--spacing-sizing-12);
            text-align: center;
            border-radius: var(--radius-sm);
            font-weight: inherit;
        }

        thead {
            display: grid;
            grid-template-columns: repeat(7, calc(100% / 7));
            text-align: center;

            th {
                color: var(--foreground-neutral-on-surface-variant-01);
            }
        }

        tbody {
            display: grid;
            grid-template-columns: repeat(7, calc(100% / 7));

            [data-non-month-day] {
                color: var(--foreground-neutral-on-surface-variant-02);
            }

            td {
                &:hover,
                &:focus-visible {
                    cursor: pointer;
                    outline: 2px solid var(--stroke-neutral-focus);
                    outline-offset: -2px;
                }

                &[data-selected] {
                    background: var(--surface-brand-primary);
                    color: var(--foreground-brand-on-primary);
                    outline-offset: 2px;
                }
            }
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UICalendar",slug:"calendar",example:'<ui-calendar (valueChange)="handleChange($event)" />',description:"Allows customers to select the date, month, and year.",phase:"Dev",directive:!1,exampleComponent:"UICalendarExample",inputs:[{name:"focusTrap",description:`When true, keyboard focus is trapped within the calendar component on initial render.

Only applicable if the Calendar is used in a popover like in DatePicker.`,type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the calendar component.",type:"string",required:!1},{name:"value",description:"The currently selected date",type:["Date","undefined"],required:!0}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The currently selected date`,type:"(value: Date | undefined) => void",required:!0}],associatedTypes:[],hasContent:!1},{name:"Card",file:"projects/ui/src/lib/card/card.ts",css:`[data-bspk='card'] {
    display: block;
    background: var(--surface-neutral-t1-base);
    border-radius: var(--radius-md);
    overflow: hidden;

    &[data-variant='outlined'] {
        border: solid 1px var(--stroke-neutral-low);
    }

    &[data-variant='elevated'] {
        box-shadow:
            0 1px 2px 0 var(--shadow-32),
            0 1px 3px 1px var(--shadow-15);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UICard",slug:"card",example:`import { Card } from '@bspk/ui/card';

<Card variant="elevated" style={{ padding: 'var(--spacing-sizing-04)', maxWidth: '100%', width: '400px' }}>
<h3>Card Title</h3>
<p>This is some content inside the card.</p>
</Card>`,description:`Cards are often rectangular and contain various content, such as text, images, icons, multimedia, and interactive elements.

They are similar in size and shape to playing cards and are intended to encourage users to click or tap to view more details.`,phase:"Dev",directive:!1,exampleComponent:"UICardExample",inputs:[{name:"variant",description:"Determines how the card border will appear.",type:["elevated","outlined"],required:!1,default:"elevated"}],outputs:[],associatedTypes:[],hasContent:!0},{name:"Checkbox",file:"projects/ui/src/lib/checkbox/checkbox.ts",css:`[data-bspk='checkbox'] {
    display: block;
    position: relative;
    width: var(--spacing-sizing-06);
    aspect-ratio: 1/1;
    padding: 2px;

    input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    span {
        --stroke: var(--stroke-neutral-base);
        --inner: none;
        --background: none;
        --color: var(--foreground-brand-on-primary);

        display: flex;
        width: 20px;
        aspect-ratio: 1/1;
        cursor: pointer;
        border-radius: 2px;
        border: 2px solid var(--stroke);
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: relative;
        background: var(--background);

        svg[data-checked] {
            width: 14px;
        }

        svg[data-indeterminate] {
            width: 12px;
        }

        color: var(--color);
    }

    input[type='checkbox']:not(:checked, :indeterminate, [disabled], [readOnly]) {
        &:hover + span {
            background-color: var(--interactions-neutral-hover-opacity);
        }

        &:active + span {
            background-color: var(--interactions-neutral-press-opacity);
        }
    }

    input[type='checkbox']:checked + span,
    input[type='checkbox']:indeterminate + span {
        --stroke: var(--stroke-brand-primary);
        --background: var(--surface-brand-primary);
    }

    input[type='checkbox'][disabled],
    input[type='checkbox'][readOnly] {
        cursor: not-allowed;

        & + span {
            --stroke: var(--stroke-neutral-interactions-disabled-light);
        }

        &:is(:checked, :indeterminate) + span {
            --stroke: transparent;
            --background: var(--interactions-disabled-opacity);
            --color: var(--foreground-neutral-disabled-on-surface);
        }
    }

    input[type='checkbox'][aria-invalid]:not([disabled], [readOnly]) {
        &:checked + span,
        &:indeterminate + span {
            --background: var(--status-error);
        }

        & + span {
            --stroke: var(--status-error);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UICheckbox",slug:"checkbox",example:`<label>
<ui-checkbox
[checked]="checked"
[indeterminate]="indeterminate"
[id]="'sample-checkbox'"
[name]="'sample-checkbox'"
(checkedChange)="checked = $event"
[value]="'sample'"
aria-label="Sample"
/>
Checkbox Label
</label>`,description:"A control that allows users to choose one or more items from a list or turn a feature on or off. This is the base element and if used directly you must wrap it with a label. More often used in CheckboxOption or CheckboxGroup.",phase:"Dev",directive:!1,exampleComponent:"UICheckboxExample",inputs:[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"checked",description:"Marks the checkbox as checked.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"indeterminate",description:`If the checkbox is partially checked or
[indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

This will override the \`checked\` prop.`,type:"boolean",required:!1,default:"false"},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"value",description:"The value of the checkbox.",type:"string",required:!0}],outputs:[{name:"checkedChange",description:`Emits when the value changes. 

Marks the checkbox as checked.`,type:"(value: boolean) => void",required:!1},{name:"valueChange",description:`Emits when the value changes. 

The value of the checkbox.`,type:"(value: string) => void",required:!0}],associatedTypes:[],hasContent:!1},{name:"CheckboxGroup",file:"projects/ui/src/lib/checkbox-group/checkbox-group.ts",css:"",className:"UICheckboxGroup",slug:"checkbox-group",description:`A group of checkboxes that allows users to choose one or more items from a list or turn an feature on or off.

For a more complete example with field usage, see the CheckboxGroupField component.`,phase:"Stable",directive:!1,exampleComponent:"UICheckboxGroupExample",inputs:[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"options",description:"The options for the checkboxes.",type:"CheckboxGroupOption[]",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"selectAll",description:"Whether to show a select all checkbox at the top of the list.",type:"boolean",required:!1,default:"false"},{name:"selectAllProps",description:"The props for the select all checkbox.",type:"SelectAllProps",required:!1},{name:"value",description:"The value of the selected checkboxes.",type:"string[]",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the selected checkboxes.`,type:"(value: string[]) => void",required:!1}],associatedTypes:[{name:"CheckboxGroupOption",file:"projects/ui/src/lib/checkbox-group/checkbox-group.ts",props:[{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"checked",description:"Marks the checkbox as checked.",type:"boolean",default:"false",required:!1},{name:"description",description:"The description of the option.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"indeterminate",description:`If the checkbox is partially checked or
[indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

This will override the \`checked\` prop.`,type:"boolean",default:"false",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"value",description:"The value of the checkbox.",type:"string",required:!0}]},{name:"SelectAllProps",file:"projects/ui/src/lib/checkbox-group/checkbox-group.ts",props:[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"description",description:"The description of the option.",type:"string",required:!1},{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0}]}],hasContent:!1},{name:"CheckboxGroupField",file:"projects/ui/src/lib/checkbox-group-field/checkbox-group-field.ts",css:`[data-bspk-utility='field'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-01);
    border: none;
    max-width: 100%;
    min-inline-size: unset;

    [data-field-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-01);

        span {
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);

            &[data-required] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-01);
            }

            &[data-trailing] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-02);
                margin-left: auto;
            }
        }
    }

    [data-field-description] {
        font: var(--body-small);
        color: var(--foreground-neutral-on-surface-variant-01);
        margin: 0;
        padding: 0;
    }

    fieldset,
    legend {
        display: contents;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UICheckboxGroupField",slug:"checkbox-group-field",description:`A field wrapper for the UICheckboxGroup component.

This component takes properties from the Field and CheckboxGroup components.`,phase:"UXReview",directive:!1,inputs:[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"options",description:"The options for the checkboxes.",type:"CheckboxGroupOption[]",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"selectAll",description:"Whether to show a select all checkbox at the top of the list.",type:"boolean",required:!1,default:"false"},{name:"selectAllProps",description:"The props for the select all checkbox.",type:"SelectAllProps",required:!1},{name:"value",description:"The value of the selected checkboxes.",type:"string[]",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the selected checkboxes.`,type:"(value: string[]) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"CheckboxOption",file:"projects/ui/src/lib/checkbox-option/checkbox-option.ts",css:"",className:"UICheckboxOption",slug:"checkbox-option",description:`A control that allows users to choose one or more items from a list or turn a feature on or off.

If only a checkbox button is needed, consider using the Checkbox component directly.`,phase:"UXReview",directive:!1,exampleComponent:"UICheckboxOptionExample",inputs:[{name:"description",description:"The description of the option.",type:"string",required:!1},{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"checked",description:"Marks the checkbox as checked.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"indeterminate",description:`If the checkbox is partially checked or
[indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

This will override the \`checked\` prop.`,type:"boolean",required:!1,default:"false"},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"value",description:"The value of the checkbox.",type:"string",required:!0}],outputs:[{name:"checkedChange",description:`Emits when the value changes. 

Marks the checkbox as checked.`,type:"(value: boolean) => void",required:!1},{name:"valueChange",description:`Emits when the value changes. 

The value of the checkbox.`,type:"(value: string) => void",required:!0}],associatedTypes:[],hasContent:!1},{name:"Chip",file:"projects/ui/src/lib/chip/chip.ts",css:`[data-bspk='chip'] {
    flex-direction: row;
    gap: var(--spacing-sizing-02);
    height: var(--spacing-sizing-08);
    text-wrap: nowrap;
    font: var(--labels-small);
    color: var(--foreground-neutral-on-surface-variant-01);
    background-color: var(--surface-neutral-t1-base);
    border: 1px solid var(--stroke-neutral-low);
    border-radius: var(--radius-sm);
    padding: 0 var(--spacing-sizing-03);

    [data-touch-target] {
        min-width: var(--spacing-sizing-12);
        min-height: var(--spacing-sizing-12);
    }

    &:not([data-flat]) {
        box-shadow: var(--drop-shadow-raise);
    }

    &[data-variant='filter'] {
        cursor: pointer;
    }

    &[data-disabled] {
        color: var(--foreground-neutral-disabled-on-surface);
        cursor: not-allowed;
        border-color: var(--stroke-neutral-disabled-light);
        background-color: var(--interactions-disabled-opacity);
    }

    &:not([data-disabled]) {
        &:hover {
            background-color: var(--interactions-neutral-hover-opacity);
        }

        &:active {
            background-color: var(--interactions-neutral-press-opacity);
        }

        &:focus {
            outline: 1px solid var(--stroke-neutral-focus);
            border-color: var(--stroke-neutral-focus);
        }
    }

    &[data-selected] {
        background-color: var(--surface-brand-primary-highlight);
        border-color: var(--stroke-brand-primary);
    }

    [data-chip-icon] {
        display: flex;
        align-items: center;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIChip",slug:"chip",example:`import { Chip } from '@bspk/ui/Chip';

<Chip label="Label" click={() => sendSnackbar('Chip clicked!')}>
Example Chip
</Chip>`,description:"Dynamically generated options that are suggested to the user as responses or prompts.",phase:"Dev",directive:!1,exampleComponent:"UIChipExample",inputs:[{name:"disabled",description:"Is the chip disabled.",type:"boolean",required:!1,default:"false"},{name:"flat",description:"Is the chip elevated or flat. If flat the drop shadow is removed.",type:"boolean",required:!1,default:"false"},{name:"label",description:"The label of the chip.",type:"string",required:!0},{name:"leadingIcon",description:"The leading icon of the chip.",type:"BspkIcon",required:!1},{name:"selected",description:"Visual indication of whether the chip is currently selected.",type:"boolean",required:!1,default:"false"},{name:"trailingBadge",description:`The trailing Badge for use in the ChipFilter.

If a trailingIcon is provided the Badge will **not** be visible.`,type:"BadgeItem",required:!1},{name:"trailingIcon",description:`The trailing icon of the chip.

You can only have one of the trailing options, trailingIcon **or** trailingBadge. If both are present the
trailingIcon will be visible.`,type:"BspkIcon",required:!1}],outputs:[{name:"onClick",description:"The function to call when the chip is clicked.",type:"EventEmitter"}],associatedTypes:[{name:"BadgeItem",file:"projects/ui/src/lib/chip/chip.ts",props:[{name:"count",description:"The content of the badge. If larger than 99, the badge will display '99+'.",type:"number",default:"1",required:!1},{name:"size",description:"The size of the badge.",type:["small","x-small"],default:"small",required:!1},{name:"surfaceBorder",description:"Whether the badge should have a border that matches the surface color.",type:"boolean",default:"false",required:!1}]}],hasContent:!1},{name:"ChipGroup",file:"projects/ui/src/lib/chip-group/chip-group.ts",css:`[data-bspk='chip-group'] {
    display: flex;
    gap: var(--spacing-sizing-02);
    width: 100%;
    flex-flow: row wrap;
    padding-bottom: var(--spacing-sizing-01);

    &:empty {
        display: none;
    }

    &[data-scroll] {
        overflow: auto;
        flex-wrap: nowrap;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIChipGroup",slug:"chip-group",description:"A component that manages the layout of a group of chips.",phase:"UXReview",directive:!1,exampleComponent:"UIChipGroupExample",inputs:[{name:"items",description:"Only Chip components should be used as items.",type:"ChipGroupItemProps[]",required:!0},{name:"overflow",description:"Controls the overflow behavior of the chip group. If set to `scroll`, the chip group will be scrollable\nhorizontally. If set to `wrap`, the chip group will wrap to multiple lines as needed.",type:["scroll","wrap"],required:!1,default:"wrap"}],outputs:[],associatedTypes:[{name:"ChipGroupItemProps",file:"projects/ui/src/lib/chip-group/chip-group.ts",props:[{name:"click",description:"Optional click handler for the chip item.",type:"function",required:!1},{name:"disabled",description:"Is the chip disabled.",type:"boolean",default:"false",required:!1},{name:"flat",description:"Is the chip elevated or flat. If flat the drop shadow is removed.",type:"boolean",default:"false",required:!1},{name:"label",description:"The label of the chip.",type:"string",required:!0},{name:"leadingIcon",description:"The leading icon of the chip.",type:"BspkIcon",required:!1},{name:"selected",description:"Visual indication of whether the chip is currently selected.",type:"boolean",default:"false",required:!1},{name:"trailingBadge",description:`The trailing Badge for use in the ChipFilter.

If a trailingIcon is provided the Badge will **not** be visible.`,type:"BadgeItem",required:!1},{name:"trailingIcon",description:`The trailing icon of the chip.

You can only have one of the trailing options, trailingIcon **or** trailingBadge. If both are present the
trailingIcon will be visible.`,type:"BspkIcon",required:!1}]}],hasContent:!1},{name:"DatePicker",file:"projects/ui/src/lib/date-picker/date-picker.ts",css:`[data-bspk='date-picker'] {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    [data-bspk='input'] {
        padding-right: 0;
    }

    [data-bspk='calendar-popup'] {
        border-radius: var(--radius-lg);
        box-shadow: var(--drop-shadow-float);
        z-index: var(--z-index-dropdown);
        width: fit-content;
    }

    [data-bspk='inline-alert'] {
        margin-top: var(--spacing-sizing-01);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIDatePicker",slug:"date-picker",example:`<ui-date-picker
[value]="selectedDate"
(valueChange)="handleDateChange($event)"
></ui-date-picker>`,description:"An input that allows a customer to manually type in a specific date or triggers a the Calendar component to select a date.",phase:"Dev",directive:!1,exampleComponent:"UIDatePickerExample",inputs:[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"closeCalendarOnChange",description:"If the calendar should close when a date is selected.",type:"boolean",required:!1,default:"true"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"The placeholder text for the date input field.",type:"string",required:!1,default:"mm/dd/yyyy"},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:`The currently selected date

String formatted as 'MM/dd/yyyy'.`,type:["Date","string","undefined"],required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The currently selected date

String formatted as 'MM/dd/yyyy'.`,type:"(value: Date | string | undefined) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"DatePickerField",file:"projects/ui/src/lib/date-picker-field/date-picker-field.ts",css:`[data-bspk-utility='field'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-01);
    border: none;
    max-width: 100%;
    min-inline-size: unset;

    [data-field-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-01);

        span {
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);

            &[data-required] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-01);
            }

            &[data-trailing] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-02);
                margin-left: auto;
            }
        }
    }

    [data-field-description] {
        font: var(--body-small);
        color: var(--foreground-neutral-on-surface-variant-01);
        margin: 0;
        padding: 0;
    }

    fieldset,
    legend {
        display: contents;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIDatePickerField",slug:"date-picker-field",description:`A field wrapper for the UIDatePicker component.

This component takes properties from the Field and DatePicker components.`,phase:"UXReview",directive:!1,inputs:[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"closeCalendarOnChange",description:"If the calendar should close when a date is selected.",type:"boolean",required:!1,default:"true"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"The placeholder text for the date input field.",type:"string",required:!1,default:"mm/dd/yyyy"},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:`The currently selected date

String formatted as 'MM/dd/yyyy'.`,type:["Date","string","undefined"],required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The currently selected date

String formatted as 'MM/dd/yyyy'.`,type:"(value: Date | string | undefined) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"Dialog",file:"projects/ui/src/lib/dialog/dialog.ts",css:`[data-bspk='dialog'] {
    position: fixed;
    inset: 0;
    z-index: var(--z-index-dialog);
    display: flex;
    pointer-events: none; /* makes scrim clickable */

    --height: 100vh;
    --width: 100vw;

    [data-dialog-box] {
        pointer-events: all; /* allow pointer events on the dialog box */
        text-align: start;
        position: absolute;
        box-shadow: var(--drop-shadow-float);
        background: var(--surface-neutral-t1-base);
        color: var(--foreground-neutral-on-surface);
        max-height: calc(var(--height) - var(--spacing-sizing-24));
        z-index: 2;
        width: calc(100% - var(--spacing-sizing-08));
        animation-name: var(--box-animation-name);
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-delay: 0;

        > :first-of-type {
            margin-top: 0;
        }

        > :last-child {
            margin-bottom: 0;
        }

        /* we make the width responsive to the viewport */
        @media (width >= 640px) {
            width: 90%;
        }

        @media (width >= 768px) {
            width: 80%;
        }

        @media (width >= 1024px) {
            width: 60%;
        }

        @media (width >= 1280px) {
            width: 50%;
        }
    }

    &[data-placement='center'] {
        --box-animation-name: fade-in;

        justify-content: center;
        align-items: center;

        [data-dialog-box] {
            border-radius: var(--radius-lg);
        }
    }

    &[data-placement='bottom'] {
        --box-animation-name: placement-bottom;

        justify-content: center;
        align-items: end;

        [data-dialog-box] {
            border-top-left-radius: var(--radius-lg);
            border-top-right-radius: var(--radius-lg);
        }
    }

    &[data-placement='top'] {
        --box-animation-name: placement-top;

        justify-content: center;
        align-items: start;

        [data-dialog-box] {
            border-bottom-left-radius: var(--radius-lg);
            border-bottom-right-radius: var(--radius-lg);
        }
    }

    &[data-placement='left'] {
        --box-animation-name: placement-left;

        justify-content: flex-start;

        [data-dialog-box] {
            max-height: unset;
            width: 280px;
            height: var(--height);
            border-bottom-right-radius: var(--radius-lg);
            border-top-right-radius: var(--radius-lg);
        }
    }

    &[data-placement='right'] {
        --box-animation-name: placement-right;

        justify-content: flex-end;

        [data-dialog-box] {
            max-height: unset;
            width: 280px;
            height: var(--height);
            border-bottom-left-radius: var(--radius-lg);
            border-top-left-radius: var(--radius-lg);
        }
    }

    [data-width-full='true'] {
        width: 100%;
    }

    &[data-contained] {
        position: absolute;

        --height: 100%;
        --width: 100%;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: translate(var(--spacing-sizing-01), var(--spacing-sizing-01));
        }

        100% {
            opacity: 1;
            transform: translate(0, 0);
        }
    }

    @keyframes placement-left {
        0% {
            opacity: 0;
        }

        1% {
            transform: translateX(calc(-1 * var(--width, 100vw)));
            opacity: 1;
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes placement-right {
        0% {
            opacity: 0;
        }

        1% {
            opacity: 1;
            transform: translateX(var(--width, 100vw));
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes placement-top {
        0% {
            opacity: 0;
        }

        1% {
            opacity: 1;
            transform: translateY(calc(-1 * var(--height, 100vh)));
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes placement-bottom {
        0% {
            opacity: 0;
        }

        1% {
            opacity: 1;
            transform: translateY(var(--height, 100vh));
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIDialog",slug:"dialog",example:`<ui-dialog [open]="open" (onClose)="open=false">
<div style="padding: var(--spacing-sizing-04)">
<h4>Dialog Title</h4>
<p>This is the content of the dialog.</p>
</div>
</ui-dialog>`,description:`Dialogs display important information that users need to acknowledge. They appear over the interface and may block further interactions until an action is selected.

The Modal component is a higher-level component built on top of Dialog that includes standard dialog UI and behavior.

Also known as: Tray, Drawer, Flyout, Sheet`,phase:"Dev",directive:!1,exampleComponent:"UIDialogExample",inputs:[{name:"ariaDescription",description:"The aria-description attribute for the element.",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"container",description:"The container to render the portal content in.",type:["HTMLElement","unknown","null","undefined"],required:!1},{name:"disableFocusTrap",description:"If focus trapping should be disabled. Generally this should not be disabled as dialogs should always trap focus.",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"open",description:"If the dialog should appear.",type:"boolean",required:!1,default:"false"},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"placement",description:"The placement of the dialog on the screen.",type:["bottom","center","left","right","top"],required:!1,default:"center"},{name:"showScrim",description:"Whether the dialog should have a scrim behind it.",type:"boolean",required:!1,default:"true"},{name:"widthFull",description:"If the dialog should take the full width of the screen.",type:"boolean",required:!1,default:"false"}],outputs:[{name:"onClose",description:`Emits when the dialog should be closed, such as when the scrim is clicked or the escape key is pressed. The
parent component should handle this event and set <code>open</code> to false to close the dialog.`,type:"EventEmitter"}],associatedTypes:[],hasContent:!0},{name:"Divider",file:"projects/ui/src/lib/divider/divider.ts",css:`[data-bspk='divider'] {
    /*! --inset: is set via inline style */

    display: flex;
    background-color: var(--stroke-neutral-low);
    align-self: stretch;
    place-content: stretch stretch;
    margin: 0;
    padding: 0;
    content: '';

    --length: calc(100% - var(--inset) * 2);

    &,
    &[data-thickness='light'] {
        --line-thickness: 1px;
        --padding: var(--spacing-sizing-02);
    }

    &[data-thickness='heavy'] {
        --line-thickness: 2px;
        --padding: var(--spacing-sizing-04);

        border-radius: var(--radius-full);
    }

    &, /* default */
  &[data-orientation='horizontal'] {
        min-height: var(--line-thickness);
        min-width: var(--length);
        margin: var(--padding) var(--inset);
    }

    &[data-orientation='vertical'] {
        min-width: var(--line-thickness);
        min-height: var(--length);
        margin: var(--inset) var(--padding);
    }

    &[data-hide-padding] {
        --padding: 0;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIDivider",slug:"divider",example:`<div style="width: 320px">
<div>Content above the divider</div>
<ui-divider orientation="horizontal"></ui-divider>
<div>Content below the divider</div>
</div>`,description:`Horizontal thin lines that separates grouped content in a list or other containers with an optional section/group label.

Vertical thin lines that separates grouped content or other visual elements within a container.`,phase:"Dev",directive:!1,exampleComponent:"UIDividerExample",inputs:[{name:"inset",description:`The inset (margin) of the divider. The value is a number between 0 and 12, which corresponds to the spacing
sizing variables defined in the theme. The inset is applied to the left and right sides of the divider when the
orientation is horizontal, and to the top and bottom when the orientation is vertical.`,type:["0","1","2","3","4","5","6","7","8","9","10","11","12"],required:!1,default:"0"},{name:"orientation",description:"The orientation of the divider.",type:["horizontal","vertical"],required:!1,default:"horizontal"},{name:"padding",description:"If the divider padding is shown.",type:"boolean",required:!1,default:"true"},{name:"thickness",description:"The thickness of the divider.",type:["heavy","light"],required:!1,default:"light"}],outputs:[],associatedTypes:[],hasContent:!1},{name:"Fab",file:"projects/ui/src/lib/fab/fab.ts",css:`[data-bspk='fab'] {
    --placement-offset: var(--spacing-sizing-04);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sizing-02);
    border: none;
    cursor: pointer;
    text-decoration: none;
    z-index: var(--z-index-fab);
    box-shadow: var(--drop-shadow-float);
    border-radius: var(--radius-sm);

    &[data-container='page'] {
        position: fixed;
    }

    &[data-container='local'] {
        position: absolute;
    }

    &[data-placement='top-right'] {
        top: var(--placement-offset);
        right: var(--placement-offset);
    }

    &[data-placement='bottom-right'] {
        bottom: var(--placement-offset);
        right: var(--placement-offset);
    }

    &[data-placement='top-left'] {
        top: var(--placement-offset);
        left: var(--placement-offset);
    }

    &[data-placement='bottom-left'] {
        bottom: var(--placement-offset);
        left: var(--placement-offset);
    }

    > [data-fab-icon] {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    > [data-fab-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    &[data-size='medium'] {
        font: var(--labels-base);
        height: var(--spacing-sizing-10);
        padding: 0 var(--spacing-sizing-04);

        > [data-fab-icon] {
            width: var(--spacing-sizing-05);
        }
    }

    &[data-size='x-large'] {
        font: var(--labels-large);
        height: var(--spacing-sizing-14);
        padding: 0 var(--spacing-sizing-07);

        > [data-fab-icon] {
            width: var(--spacing-sizing-06);
        }
    }

    &[data-variant='primary'] {
        --variant-background: var(--surface-brand-primary);
        --variant-foreground: var(--foreground-brand-on-primary);
    }

    &[data-variant='secondary'] {
        --variant-background: var(--surface-brand-secondary);
        --variant-foreground: var(--foreground-brand-on-secondary);
    }

    &[data-variant='neutral'] {
        --variant-background: var(--surface-neutral-t1-base);
        --variant-foreground: var(--foreground-neutral-on-surface-variant-01);
    }

    background: var(--variant-background);
    color: var(--variant-foreground);

    --variant-gradient: linear-gradient(var(--variant-background), var(--variant-background));

    [data-pseudo='hover'] > &,
    &:hover {
        background:
            linear-gradient(var(--interactions-brand-hover-opacity), var(--interactions-brand-hover-opacity)),
            var(--variant-gradient);
    }

    [data-pseudo='active'] > &,
    &:active {
        background:
            linear-gradient(var(--interactions-brand-press-opacity), var(--interactions-brand-press-opacity)),
            var(--variant-gradient);
    }

    [data-pseudo='focus'] > &,
    &:focus-visible {
        outline: solid 2px var(--stroke-neutral-focus);
        isolation: isolate;
    }

    &[data-round] {
        border-radius: var(--radius-full);
        aspect-ratio: 1/1;
        padding: 0;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIFab",slug:"fab",example:`<ui-fab
label="Floating Action Button"
[icon]="iconCloud"
(onClick)="handleClick()" />`,description:"A button that highlights a primary action that is elevated above the body content of a page; normally fixed to the bottom right of a screen.",phase:"Dev",directive:!1,exampleComponent:"UIFabExample",inputs:[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"container",description:"The container to render the button in.",type:["local","page"],required:!1,default:"local"},{name:"icon",description:"The icon of the button.",type:"BspkIcon",required:!1},{name:"iconOnly",description:`When true the button label is hidden and only the icon is shown. When label isn't showing it is used in a tooltip
and as the aria-label prop.

Ignored if \`icon\` is not provided.`,type:"boolean",required:!1,default:"false"},{name:"label",description:"The label of the button.",type:"string",required:!1},{name:"placement",description:"The placement of the button on the container.",type:["bottom-left","bottom-right","top-left","top-right"],required:!1,default:"bottom-right"},{name:"size",description:"The size of the button.",type:["medium","x-large"],required:!1,default:"medium"},{name:"tooltip",description:"The tool tip text that appears when hovered.",type:"string",required:!1},{name:"variant",description:"The style variant of the button.",type:["neutral","primary","secondary"],required:!1,default:"primary"}],outputs:[{name:"onBlur",description:"Event emitted when the button loses focus.",type:"EventEmitter"},{name:"onClick",description:"Event emitted when the button is clicked.",type:"EventEmitter"},{name:"onFocus",description:"Event emitted when the button receives focus.",type:"EventEmitter"},{name:"onMouseEnter",description:"Event emitted when mouse enters the button.",type:"EventEmitter"},{name:"onMouseLeave",description:"Event emitted when mouse leaves the button.",type:"EventEmitter"}],associatedTypes:[],hasContent:!0},{name:"Field",file:"projects/ui/src/lib/field/field.ts",css:`[data-bspk-utility='field'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-01);
    border: none;
    max-width: 100%;
    min-inline-size: unset;

    [data-field-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-01);

        span {
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);

            &[data-required] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-01);
            }

            &[data-trailing] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-02);
                margin-left: auto;
            }
        }
    }

    [data-field-description] {
        font: var(--body-small);
        color: var(--foreground-neutral-on-surface-variant-01);
        margin: 0;
        padding: 0;
    }

    fieldset,
    legend {
        display: contents;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIField",slug:"field",example:`<ui-field
controlId="example-control-id"
helperText="This is an example description."
label="Example label">
<input
aria-label="example aria-label"
id="example-control-id"
name="example-text" />
</ui-field>`,description:`Wrapper component for form controls.

Children should be one of the following: DatePicker, Input, InputNumber, InputPhone, Password, Select, Textarea, RadioGroup, CheckboxGroup, or TimePicker.`,phase:"Utility",directive:!1,exampleComponent:"UIFieldExample",inputs:[{name:"controlId",description:`The id attribute of the form control rendered in children (e.g., Input, Select, Textarea). Used to associate the
label (htmlFor) with the control for accessibility. Must exactly match the control's id.`,type:"string",required:!0},{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1}],outputs:[],associatedTypes:[{name:"ControlFieldProps",file:"projects/ui/src/lib/field/field.ts",props:[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1}]}],hasContent:!0},{name:"Flex",file:"projects/ui/src/lib/flex/flex.directive.ts",css:"",className:"UIFlexDirective",slug:"flex",description:`Apply flexbox layout to an element.

Usage examples: <div uiFlex></div> <div [uiFlex]="'inline'" direction="column" justify="between" align="center" wrap="wrap" gap="8px"></div>`,phase:"Utility",directive:!0,inputs:[{name:"align",description:"The align-items style to apply to the Flex.",type:["baseline","center","end","flex-end","flex-start","start","stretch"],required:!1,default:"flex-start"},{name:"direction",description:"The flex-direction style to apply to the Flex.",type:["column-reverse","column","row-reverse","row"],required:!1,default:"row"},{name:"gap",description:"The gap between the children.",type:["SizingPixels","auto"],required:!1},{name:"justify",description:"The justification style to apply to the Flex.",type:["around","between","center","end","evenly","flex-end","flex-start","space-around","space-between","space-evenly","start"],required:!1,default:"flex-start"},{name:"wrap",description:"The flex-wrap style to apply to the Flex.",type:["nowrap","wrap-reverse","wrap"],required:!1,default:"nowrap"}],outputs:[],associatedTypes:[],hasContent:!1},{name:"Floating",file:"projects/ui/src/lib/floating/floating.directive.ts",css:"",className:"UIFloatingDirective",slug:"floating",description:"A directive to position an element relative to a reference element using floating UI logic.",phase:"Utility",directive:!0,exampleComponent:"UIFloatingExample",inputs:[{name:"props",type:"Omit<FloatingUtilityProps | floating>",required:!0}],outputs:[],associatedTypes:[{name:"FloatingUtilityProps",file:"projects/ui/src/lib/floating/floating.ts",props:[{name:"arrow",description:"The arrow element for the floating element.",type:["HTMLElement","null"],required:!1},{name:"floating",description:"The floating element to be positioned.",type:["HTMLElement","null"],required:!1},{name:"offsetOptions",description:"The offset options for the floating element.",type:"OffsetOptions",default:"0",required:!1},{name:"placement",description:`The preferred placement of the floating element.

This determines where the floating element will be positioned relative to the reference element.`,type:["bottom","center","left","right","top"],default:"bottom-start",required:!1},{name:"reference",description:"The reference element for positioning.",type:["HTMLElement","null"],required:!1},{name:"refWidth",description:"When set to true, the width of the floating element will match the width of the reference element.",type:"boolean",default:"false",required:!1},{name:"strategy",description:`The positioning strategy ('absolute' or 'fixed').

When set to 'fixed', the floating element will be positioned relative to the viewport.

When set to 'absolute', the floating element will be positioned relative to the nearest positioned ancestor.`,type:"Strategy",default:"fixed",required:!1}]}],hasContent:!1},{name:"FocusTrap",file:"projects/ui/src/lib/focus-trap/focus-trap.directive.ts",css:"",className:"UIFocusTrapDirective",slug:"focus-trap",example:`<ui-focus-trap>
<!-- interactive content -->
<button>One</button>
<button>Two</button>
</ui-focus-trap>`,description:"Utility that traps keyboard focus within its projected content when enabled.",phase:"Utility",directive:!0,exampleComponent:"UIFocusTrapExample",inputs:[{name:"autoFocus",description:"Auto-focus first focusable child on enable.",type:"boolean",required:!1,default:"true"},{name:"ui-focus-trap",description:"Enable or disable the focus trap.",type:"boolean",required:!1},{name:"restoreFocus",description:"Restore focus to previously focused element on disable/destroy.",type:"boolean",required:!1,default:"true"}],outputs:[],associatedTypes:[],hasContent:!1},{name:"Icon",file:"projects/ui/src/lib/icon/icon.ts",css:"",className:"UIIcon",slug:"icon",description:"A component to display an icon from the BSPK icon library.",phase:"UXReview",directive:!1,exampleComponent:"UIIconExample",inputs:[{name:"icon",description:"The icon to display from the BSPK icon library.",type:"BspkIcon",required:!0},{name:"width",description:"Optional width for the icon.",type:"string",required:!1,default:"&#39;24&#39;"}],outputs:[],associatedTypes:[],hasContent:!1},{name:"InlineAlert",file:"projects/ui/src/lib/inline-alert/inline-alert.ts",css:`[data-bspk='inline-alert'] {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: row;
    gap: var(--spacing-sizing-02);

    [data-txt] {
        flex: 1;
    }

    &[data-variant='error'] {
        color: var(--status-error);

        --first-tone: var(--status-error);
        --second-tone: var(--status-on-information);
    }

    &[data-variant='success'] {
        color: var(--status-success);

        --first-tone: var(--status-success);
        --second-tone: var(--status-on-success);
    }

    &[data-variant='warning'] {
        color: var(--foreground-neutral-on-surface);

        --first-tone: var(--status-warning);
        --second-tone: var(--status-on-warning);
    }

    &[data-variant='informational'] {
        color: var(--status-information);

        --first-tone: var(--status-information);
        --second-tone: var(--status-on-information);
    }

    svg {
        color: var(--first-tone);
        width: var(--spacing-sizing-05);
        height: var(--spacing-sizing-05);
        flex: 0 0 auto;

        [data-second-tone] {
            fill: var(--second-tone);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIInlineAlert",slug:"inline-alert",description:"Inline alerts provide contextual feedback messages for typical user actions with a handful of available and flexible alert messages.",phase:"Dev",directive:!1,exampleComponent:"UIInlineAlertExample",inputs:[{name:"id",description:"The id of the inline alert.",type:"string",required:!1},{name:"label",description:"The content of the inline alert.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"variant",description:"The color variant of the inline alert.",type:["error","informational","success","warning"],required:!1,default:"informational"}],outputs:[],associatedTypes:[],hasContent:!1},{name:"Input",file:"projects/ui/src/lib/input/input.ts",css:`[data-bspk='input'] {
    --border-color: var(--stroke-neutral-base);

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: var(--surface-neutral-t1-base);
    border: solid 1px var(--border-color);
    height: var(--field-height);
    border-radius: var(--radius-sm);
    padding: 0 var(--field-padding);
    gap: var(--spacing-sizing-01);
    width: 100%;

    &[data-show-clear-button]:focus-within {
        padding-right: 0;
    }

    & > * {
        display: flex;
        justify-content: center;
        align-items: center;
        height: var(--field-height);
        font: var(--field-font);
        color: var(--foreground-neutral-on-surface);
        min-width: 0;
    }

    &:hover:not(:focus-within) {
        background:
            linear-gradient(var(--interactions-hover-opacity), var(--interactions-hover-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
    }

    &:active:not(:focus-within) {
        background:
            linear-gradient(var(--interactions-press-opacity), var(--interactions-press-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
    }

    &[data-readonly] {
        --border-color: var(--stroke-neutral-disabled-light);

        background:
            linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
    }

    &[data-disabled],
    &:has([data-main-input][disabled]) {
        --border-color: var(--stroke-neutral-disabled-light);

        background:
            linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));

        & > * {
            color: var(--foreground-neutral-disabled-on-surface);
        }
    }

    &[data-invalid] {
        --border-color: var(--status-error);
    }

    &:not(:focus-within) {
        [data-clear-button] {
            display: none;
        }
    }

    &:focus-within {
        --border-color: var(--stroke-neutral-focus);

        outline: 1px solid var(--stroke-neutral-focus);
    }

    &[data-size='small'] {
        --field-padding: var(--spacing-sizing-02);
        --field-height: var(--spacing-sizing-08);
        --field-font: var(--body-small);
        --field-icon-width: var(--spacing-sizing-04);
        --field-clear-width: var(--spacing-sizing-05);
    }

    &[data-size='medium'] {
        --field-padding: var(--spacing-sizing-03);
        --field-height: var(--spacing-sizing-10);
        --field-font: var(--body-base);
        --field-icon-width: var(--spacing-sizing-05);
        --field-clear-width: var(--spacing-sizing-05);
    }

    &[data-size='large'] {
        --field-padding: var(--spacing-sizing-03);
        --field-height: var(--spacing-sizing-12);
        --field-font: var(--body-large);
        --field-icon-width: var(--spacing-sizing-06);
        --field-clear-width: var(--spacing-sizing-06);
    }

    [data-leading],
    [data-trailing] {
        position: relative;

        svg {
            width: var(--field-icon-width);
        }
    }

    label {
        font: var(--labels-small);
        color: var(--foreground-neutral-on-surface-variant-01);
    }

    [data-main-input] {
        flex: 1;
        background-color: transparent !important;
        border: none;
        outline: none;
        padding: 0;
        pointer-events: all;
        text-overflow: ellipsis;

        &[type='number']::-webkit-inner-spin-button,
        &[type='number']::-webkit-outer-spin-button {
            display: none;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIInput",slug:"input",example:`<ui-input
[value]="inputValue()"
(valueChange)="updateInput($event)"
id="default-input"
name="default-input"
ariaLabel="Input Label "/>`,description:"An input that allows users to enter text, numbers or symbols in a singular line. This is a utility element and is not intended to be used directly but rather through the Input, and other components.",phase:"UXReview",directive:!1,exampleComponent:"UIInputExample",inputs:[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"autoComplete",description:"Specifies if user agent has any permission to provide automated assistance in filling out form field values",type:["off","on"],required:!1,default:"off"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"inputMode",description:"The inputmode attribute for the input.",type:["decimal","email","none","numeric","search","tel","text","url"],required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"leading",description:`The leading element to display in the field.

May be passed as string or use <span data-leading> for non-string content.`,type:"string",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"showClearButton",description:"Specifies if the clear button should be shown. This should almost always be true, but can be set to false.",type:"boolean",required:!1,default:"true"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"trailing",description:`The trailing element to display in the field.

May be passed as string or use <span data-trailing> for non-string content.`,type:"string",required:!1},{name:"type",description:"The type of the input.",type:["number","password","tel","text"],required:!1,default:"text"},{name:"value",description:"The value of the input field.",type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the input field.`,type:"(value: string) => void",required:!1}],associatedTypes:[],hasContent:!0},{name:"InputField",file:"projects/ui/src/lib/input-field/input-field.ts",css:`[data-bspk-utility='field'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-01);
    border: none;
    max-width: 100%;
    min-inline-size: unset;

    [data-field-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-01);

        span {
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);

            &[data-required] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-01);
            }

            &[data-trailing] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-02);
                margin-left: auto;
            }
        }
    }

    [data-field-description] {
        font: var(--body-small);
        color: var(--foreground-neutral-on-surface-variant-01);
        margin: 0;
        padding: 0;
    }

    fieldset,
    legend {
        display: contents;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIInputField",slug:"input-field",description:`A field wrapper for the Input component.

This component takes properties from the Field and Input components.`,phase:"UXReview",directive:!1,exampleComponent:"UIInputFieldExample",inputs:[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"autoComplete",description:"Specifies if user agent has any permission to provide automated assistance in filling out form field values",type:["off","on"],required:!1,default:"off"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"inputMode",description:"The inputmode attribute for the input.",type:["decimal","email","none","numeric","search","tel","text","url"],required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"leading",description:`The leading element to display in the field.

May be passed as string or use <span data-leading> for non-string content.`,type:"string",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"showClearButton",description:"Specifies if the clear button should be shown. This should almost always be true, but can be set to false.",type:"boolean",required:!1,default:"true"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"trailing",description:`The trailing element to display in the field.

May be passed as string or use <span data-trailing> for non-string content.`,type:"string",required:!1},{name:"type",description:"The type of the input.",type:["number","password","tel","text"],required:!1,default:"text"},{name:"value",description:"The value of the input field.",type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the input field.`,type:"(value: string) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"InputNumber",file:"projects/ui/src/lib/input-number/input-number.ts",css:`[data-bspk='input-number'] {
    /* medium is the default size */
    --font: var(--body-base);
    --height: var(--spacing-sizing-10);
    --svg-width: var(--spacing-sizing-05);
    --color: var(--foreground-neutral-on-surface);

    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    font: var(--font);
    height: var(--height);
    border: 1px solid var(--stroke-neutral-base);
    border-radius: var(--radius-sm);
    background: var(--surface-neutral-t1-base);

    &:focus-within {
        outline: solid 2px var(--stroke-neutral-focus);
        isolation: isolate;
    }

    [data-divider] {
        width: 1px;
        background: var(--stroke-neutral-base);
        margin: 3px 0;

        /* account for border - 3(margin)  * 2 + 2(border) */
        height: calc(var(--height) - 8px);
    }

    button {
        width: var(--height);
        height: calc(var(--height) - 2px);
        background: none;
        border: none;
        cursor: pointer;
        font: var(--font);
        flex-shrink: 0;

        svg {
            width: var(--svg-width);
        }

        &:focus {
            outline: none;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color);

        &:disabled {
            cursor: not-allowed;
            color: var(--foreground-neutral-disabled-on-surface);
        }
    }

    input {
        color: var(--color);
        min-width: 0;
        display: block;
        font: var(--font);
        text-align: center;
        padding: 0 var(--spacing-sizing-03);
        background: transparent;
        border: none;
        flex-grow: 1;

        &:focus {
            outline: none;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            appearance: none;
            margin: 0;
        }

        &[type='number'] {
            appearance: textfield;
        }
    }

    &:not([data-disabled], [data-readonly]) {
        input,
        button:not(:disabled) {
            &:hover {
                background-color: var(--interactions-hover-opacity);
            }

            &:active {
                background-color: var(--interactions-press-opacity);
            }
        }

        &[data-invalid] {
            border-color: var(--status-error);
            outline-color: var(--status-error);
        }
    }

    &[data-disabled],
    &[data-readonly] {
        --color: var(--foreground-neutral-disabled-on-surface);

        border-color: var(--stroke-neutral-disabled-light);
        background:
            linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));

        [data-divider] {
            border-color: var(--stroke-neutral-disabled-light);
        }
    }

    &[data-readonly] {
        input {
            color: var(--foreground-neutral-on-surface) !important;
        }
    }

    &[data-size='small'] {
        --font: var(--body-small);
        --height: var(--spacing-sizing-08);
    }

    &[data-size='large'] {
        --font: var(--body-large);
        --height: var(--spacing-sizing-12);
        --svg-width: var(--spacing-sizing-06);
    }

    &[data-centered] {
        button:first-of-type {
            order: -1;
        }

        [data-divider] {
            display: none;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIInputNumber",slug:"input-number",example:`<ui-input-number
[value]="inputValue()"
(valueChange)="updateInput($event)"
id="default-input-number"
name="default-input-number"
ariaLabel="Input Number Label "/>`,description:`A input element that allows users to either input a numerical value or singularly increase or decrease the values by pressing the (+) or (-) buttons.

The value of the input is a number. The value is clamped to the min and max values if they are provided.

For a more complete example with field usage, see the InputNumberField component.`,phase:"UXReview",directive:!1,exampleComponent:"UIInputNumberExample",inputs:[{name:"align",description:"The alignment of the input box. Centered between the plus and minus buttons or to the left of the buttons.",type:["center","left"],required:!1,default:"center"},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"max",description:"Defines the [maximum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max) value that is accepted.",type:"number",required:!1},{name:"min",description:"Defines the [minimum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min) value that is accepted.",type:"number",required:!1,default:"0"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"step",description:"The amount to increment or decrement the value by when the (+) or (-) buttons are pressed.",type:"number",required:!1,default:"1"},{name:"value",description:`The value of the number input.

While the value is a string, it is recommended to only use numerical values. The component will attempt to parse
the string to a number and will ignore non-numerical input. The value is clamped to the min and max values if
they are provided.`,type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the number input.

While the value is a string, it is recommended to only use numerical values. The component will attempt to parse
the string to a number and will ignore non-numerical input. The value is clamped to the min and max values if
they are provided.`,type:"(value: string) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"InputNumberField",file:"projects/ui/src/lib/input-number-field/input-number-field.ts",css:`[data-bspk-utility='field'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-01);
    border: none;
    max-width: 100%;
    min-inline-size: unset;

    [data-field-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-01);

        span {
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);

            &[data-required] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-01);
            }

            &[data-trailing] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-02);
                margin-left: auto;
            }
        }
    }

    [data-field-description] {
        font: var(--body-small);
        color: var(--foreground-neutral-on-surface-variant-01);
        margin: 0;
        padding: 0;
    }

    fieldset,
    legend {
        display: contents;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIInputNumberField",slug:"input-number-field",description:`A field wrapper for the UIInputNumber component.

This component takes properties from the Field and InputNumber components.`,phase:"UXReview",directive:!1,inputs:[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"align",description:"The alignment of the input box. Centered between the plus and minus buttons or to the left of the buttons.",type:["center","left"],required:!1,default:"center"},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"max",description:"Defines the [maximum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max) value that is accepted.",type:"number",required:!1},{name:"min",description:"Defines the [minimum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min) value that is accepted.",type:"number",required:!1,default:"0"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"step",description:"The amount to increment or decrement the value by when the (+) or (-) buttons are pressed.",type:"number",required:!1,default:"1"},{name:"value",description:`The value of the number input.

While the value is a string, it is recommended to only use numerical values. The component will attempt to parse
the string to a number and will ignore non-numerical input. The value is clamped to the min and max values if
they are provided.`,type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the number input.

While the value is a string, it is recommended to only use numerical values. The component will attempt to parse
the string to a number and will ignore non-numerical input. The value is clamped to the min and max values if
they are provided.`,type:"(value: string) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"InputPhone",file:"projects/ui/src/lib/input-phone/input-phone.ts",css:`[data-bspk='input-phone'] {
    position: relative;
    width: 100%;
}

[data-bspk-owner='input-phone'][data-bspk='input'] {
    padding-left: 0;

    &:focus-within {
        outline: none;
    }

    input:focus-visible {
        outline: solid 2px var(--stroke-neutral-focus);
        isolation: isolate;
        border-radius: var(--radius-sm);
    }

    [data-bspk='divider'] {
        margin: 0 var(--spacing-sizing-02) 0 0;
    }

    [data-leading] {
        position: relative;

        [data-bspk='button'] {
            gap: var(--spacing-sizing-02);
            padding: 0 var(--spacing-sizing-03);
            min-height: 100%;
            margin-right: var(--spacing-sizing-02);
            position: relative;
            z-index: 2;

            &::after {
                content: '';
                position: absolute;
                top: var(--spacing-sizing-01);
                bottom: var(--spacing-sizing-01);
                right: 0;
                width: 1px;
                background-color: var(--stroke-neutral-base);
                pointer-events: none;
            }
        }
    }

    &[data-size='small'] {
        [data-leading] {
            [data-bspk='button'] {
                padding-left: var(--spacing-sizing-02);
            }
        }
    }
}
`,className:"UIInputPhone",slug:"input-phone",example:`<div style="width: 320px">
<ui-field controlId="example-input-phone" helperText="The phone input allows you to enter a phone number with country code." label="Example Input Phone">
<ui-input-phone
[id]="'example-input-phone'"
[name]="'example-name'"
[(value)]="phoneValue"
[initialCountryCode]="'US'"
ariaLabel="Phone Number" />
</ui-field>
</div>`,description:`An input that allows users to enter text phone numbers and select country codes for the phone number.

This is the base element and if used must contain the field label contextually.

For a more complete example with field usage, see the InputPhoneField component.`,phase:"Dev",directive:!1,exampleComponent:"UIInputPhoneExample",inputs:[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"disableFormatting",description:"Disables formatting of the phone number input in the UI. values returned by `valueChange` are always unformatted.",type:"boolean",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"initialCountryCode",description:`The default country code to select when the component is rendered. If not provided, it will attempt to guess
based on the user's locale. If the guessed country code is not supported, it will default to 'US'. Based on
[ISO](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) 2-digit country codes.`,type:"unknown",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollLimitStyle utility.`,type:"number",required:!1},{name:"size",description:"The size of the component",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:'The value of the input phone field. This should be an unformatted phone number string (e.g. "4155552671").',type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the input phone field. This should be an unformatted phone number string (e.g. "4155552671").`,type:"(value: string) => void",required:!1}],associatedTypes:[{name:"CountryCodeItem",file:"projects/ui/src/lib/input-phone/input-phone.ts",props:[{name:"id",type:"string",required:!0},{name:"countryCallingCode",type:"string",required:!0},{name:"flagIconName",type:"BspkIcon",required:!0},{name:"label",type:"string",required:!0},{name:"value",type:"unknown",required:!0}]},{name:"CountryCodeOption",file:"projects/ui/src/lib/input-phone/input-phone.ts",props:[{name:"countryCallingCode",type:"string",required:!0},{name:"flagIconName",type:"BspkIcon",required:!0},{name:"label",type:"string",required:!0},{name:"value",type:"unknown",required:!0}]}],hasContent:!1},{name:"InputPhoneField",file:"projects/ui/src/lib/input-phone-field/input-phone-field.ts",css:`[data-bspk-utility='field'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-01);
    border: none;
    max-width: 100%;
    min-inline-size: unset;

    [data-field-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-01);

        span {
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);

            &[data-required] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-01);
            }

            &[data-trailing] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-02);
                margin-left: auto;
            }
        }
    }

    [data-field-description] {
        font: var(--body-small);
        color: var(--foreground-neutral-on-surface-variant-01);
        margin: 0;
        padding: 0;
    }

    fieldset,
    legend {
        display: contents;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIInputPhoneField",slug:"input-phone-field",description:`A field wrapper for the UIInputPhone component.

This component takes properties from the Field and InputPhone components.`,phase:"UXReview",directive:!1,exampleComponent:"UIInputPhoneFieldExample",inputs:[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"disableFormatting",description:"Disables formatting of the phone number input in the UI. values returned by `valueChange` are always unformatted.",type:"boolean",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"initialCountryCode",description:`The default country code to select when the component is rendered. If not provided, it will attempt to guess
based on the user's locale. If the guessed country code is not supported, it will default to 'US'. Based on
[ISO](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) 2-digit country codes.`,type:"unknown",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollLimitStyle utility.`,type:"number",required:!1},{name:"size",description:"The size of the component",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:'The value of the input phone field. This should be an unformatted phone number string (e.g. "4155552671").',type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the input phone field. This should be an unformatted phone number string (e.g. "4155552671").`,type:"(value: string) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"KeyNavigation",file:"projects/ui/src/lib/key-navigation/key-navigation.directive.ts",css:"",className:"UIKeyNavigationDirective",slug:"key-navigation",description:"A directive to enable key navigation on an element.",phase:"Utility",directive:!0,exampleComponent:"UIKeyNavigationExample",inputs:[{name:"props",type:"KeyNavigationUtilityProps",required:!0}],outputs:[],associatedTypes:[{name:"ArrowKeyNavigationCallbackParams",file:"projects/ui/src/lib/key-navigation/key-navigation.ts",props:[{name:"activeElementId",description:"The ID of the currently active element.",type:["string","null"],required:!0},{name:"event",type:"KeyboardEvent",required:!0},{name:"increment",type:"number",required:!0},{name:"key",type:["Extract<KeyboardEventCode","template literal type>"],required:!0}]},{name:"KeyNavigationUtilityProps",file:"projects/ui/src/lib/key-navigation/key-navigation.ts",props:[{name:"activeElementId",description:"The ID of the currently active element.",type:["string","null"],required:!0},{name:"callback",description:"An optional callback function that is invoked when an arrow key is pressed. This function receives the key name,\nthe keyboard event, and the next active element ID. If the function returns `true`, the default navigation\nbehavior is prevented; if it returns `false` or is not provided, the default behavior proceeds.",type:"function",required:!1},{name:"defaultActiveId",description:"The ID of the element that should be active by default. If not provided, the first ID in the `ids` array will be\nused.",type:"string",required:!1},{name:"ids",description:"An array of string IDs representing the navigable elements. These IDs should correspond to the `id` attributes of\nthe elements in the DOM. Ensure the elements are not disabled.",type:"string[]",required:!1},{name:"increments",description:"Optional configuration to set navigation direction increments.",type:"Record<ArrowKeyNames | number>",required:!1}]}],hasContent:!1},{name:"Link",file:"projects/ui/src/lib/link/link.directive.ts",css:"",className:"UILinkDirective",slug:"link",example:`<a ui-link href="https://anywhere.re" [label]="'Example label'" trailingIcon="external"></a>`,description:"This is the standalone link directive. Apply to an `a` element.",phase:"Stable",directive:!0,exampleComponent:"UILinkExample",inputs:[{name:"disabled",description:"Determines if the element is disabled.",type:"boolean",required:!1},{name:"href",description:"The href of the link.",type:["string","null","undefined"],required:!0},{name:"size",description:"The size of the link.",type:["base","large","small"],required:!1,default:"base"},{name:"target",description:"The target of the link. If the `trailingIcon` is set to `external`, this will default to `_blank`.",type:["_blank","_parent","_self","_top"],required:!1,default:"_self"},{name:"trailingIcon",description:"The variant of the link. Controls the icon that is displayed and link target.",type:["chevron","external","link"],required:!1},{name:"variant",description:`Change the color of the link to a subtle color. This is useful for links that are not primary actions, for
example footer menus.`,type:["default","subtle-inverse","subtle"],required:!1,default:"default"}],outputs:[],associatedTypes:[],hasContent:!1},{name:"ListItem",file:"projects/ui/src/lib/list-item/list-item.ts",css:`[data-bspk='list-item'] {
    display: flex;
    user-select: none;
    color: var(--foreground-neutral-on-surface);
    background-color: var(--surface-neutral-t1-base);
    height: 100%;
    overflow: hidden;
    min-height: var(--list-item-height);
    flex-direction: row;
    gap: var(--spacing-sizing-03);
    padding: var(--spacing-sizing-02);
    justify-items: stretch;

    /* prevent inherited styles from affecting layout when the as prop is leveraged */
    border: unset;
    border-radius: var(--radius-sm);
    margin: unset;
    text-decoration: unset;
    width: 100%;

    &[data-width='hug'] {
        width: auto;
        max-width: 100%;
    }

    [data-pseudo='focus'] &,
    &:focus-visible,
    &:has(*:focus-visible) {
        outline: solid 2px var(--stroke-neutral-focus);
        isolation: isolate;

        [data-inner] {
            border-color: transparent;
        }
    }

    &:not([data-disabled], [data-readonly]) {
        &[data-action],
        &:is(label) {
            &[data-active],
            [data-pseudo='hover'] &,
            &:hover {
                background-color: var(--interactions-neutral-hover-opacity);
            }

            [data-pseudo='active'] &,
        /* pressed state */
        &:active {
                background-color: var(--interactions-neutral-press-opacity);
            }
        }
    }

    [data-leading],
    [data-item-label],
    [data-trailing] {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1 1 0;
        min-width: 0;

        svg {
            width: 24px;
            max-width: unset;
        }
    }

    [data-leading],
    [data-trailing] {
        width: fit-content;
        flex: 0 0 auto;

        &:empty {
            display: none;
        }
    }

    [data-item-label] {
        text-align: left;

        [data-text] {
            width: 100%;
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);
        }

        [data-sub-text] {
            width: 100%;
            font: var(--body-small);
            color: var(--foreground-neutral-on-surface-variant-01);
        }
    }

    [data-trailing]:has(input) {
        pointer-events: none;
    }

    img {
        height: 36px;
        width: 36px;
        max-width: unset;
    }

    &:is(label) {
        [data-inner] {
            border-bottom: 0;
            gap: var(--spacing-sizing-02);
        }
    }

    &[aria-selected='true'] {
        background-color: var(--surface-brand-primary-highlight);
    }

    &[data-disabled],
    &[data-readonly] {
        [data-text],
        [data-sub-text] {
            color: var(--foreground-neutral-disabled-on-surface);
            cursor: not-allowed;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIListItem",slug:"list-item",description:`A hybrid interactive component that is used frequently to organize content and offers a wide range of control and navigation in most experiences.

With its flexible and simple structure, the list item element is core and can meet the needs of many uses cases.

The ListItem has three main elements: leading element, label, and trailing element.

Leading elements should be one of the following Icon, Img, Avatar.

Trailing elements should be one of the following Icon, Checkbox, Button, Radio, Switch, Tag, Txt.`,phase:"Dev",directive:!1,exampleComponent:"UIListItemExample",inputs:[{name:"active",description:"Marks the element as active and displays active state theme.",type:"boolean",required:!1,default:"false"},{name:"ariaDisabled",description:"The aria-disabled attribute for the element.",type:"boolean",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaReadonly",description:"The aria-readonly attribute for the element.",type:"boolean",required:!1},{name:"ariaRole",description:"The ARIA role of the element.",type:["alert","alertdialog","application","article","banner","button","cell","checkbox","columnheader","combobox","complementary","contentinfo","definition","dialog","directory","document","feed","figure","form","grid","gridcell","group","heading","img","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","navigation","none","note","option","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","switch","tab","table","tablist","tabpanel","term","textbox","timer","toolbar","tooltip","tree","treegrid","treeitem","unknown"],required:!1},{name:"ariaSelected",description:`Indicates the current "selected" state of the list item when used in a selectable context, such as within a
ListItemMenu.`,type:"boolean",required:!1},{name:"as",description:"The element type to render as.",type:["a","button","div","label"],required:!1,default:"div"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"href",description:"The [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href) of the list item.\n\nIf the href is provided, the ListItem will render as an anchor element (`<a>`).",type:"string",required:!1},{name:"htmlFor",description:"The htmlFor attribute for the element.",type:"string",required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"label",description:"The label to display in the ListItem.",type:"string",required:!0},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"subText",description:"The subtext to display in the ListItem.",type:"string",required:!1},{name:"tabIndex",description:"Explicit tabIndex; defaults to 0 when actionable, otherwise -1.",type:"number",required:!1},{name:"width",description:`Determines how the ListItem uses horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],required:!1,default:"fill"}],outputs:[{name:"onClick",description:"Emits when the ListItem is activated by click or keyboard interaction.",type:"EventEmitter"}],associatedTypes:[],hasContent:!0},{name:"MatchParentHeight",file:"projects/ui/src/lib/match-parent-height/match-parent-height.directive.ts",css:"",className:"UIMatchParentHeightDirective",slug:"match-parent-height",example:`<div style="height: 400px">
<div ui-match-parent-height>Content fits parent height</div>
</div>`,description:"Sets the host element's height to match its parent element's clientHeight. Updates on window resize and orientation changes.",phase:"Utility",directive:!0,inputs:[],outputs:[],associatedTypes:[],hasContent:!1},{name:"Menu",file:"projects/ui/src/lib/menu/menu.ts",css:`[data-bspk-utility='menu'] {
    --overflow-y: hidden;

    width: 332px;
    box-sizing: border-box;
    border: 1px solid var(--stroke-neutral-low);
    background-color: var(--surface-neutral-t1-base);
    box-shadow: var(--drop-shadow-float);
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    height: fit-content;
    z-index: var(--z-index-dropdown);
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIMenu",slug:"menu",example:`<ui-menu>
<ui-list-item label="List Item"></ui-list-item>
<ui-list-item label="List Item"></ui-list-item>
<ui-list-item label="List Item"></ui-list-item>
</ui-menu>`,description:"A container housing a simple list of options presented to the customer to select one option at a time.",phase:"Dev",directive:!1,exampleComponent:"UIMenuExample",inputs:[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaRole",description:"The ARIA role of the element.",type:["alert","alertdialog","application","article","banner","button","cell","checkbox","columnheader","combobox","complementary","contentinfo","definition","dialog","directory","document","feed","figure","form","grid","gridcell","group","heading","img","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","navigation","none","note","option","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","switch","tab","table","tablist","tabpanel","term","textbox","timer","toolbar","tooltip","tree","treegrid","treeitem","unknown"],required:!1},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"width",description:"The width of the menu.",type:"unknown",required:!1}],outputs:[],associatedTypes:[],hasContent:!0},{name:"Modal",file:"projects/ui/src/lib/modal/modal.ts",css:`[data-bspk='modal'] {
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-02);
    padding: var(--spacing-sizing-05);

    @media (width < 640px) {
        padding: var(--spacing-sizing-04);
    }

    > [data-modal-header] {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: var(--spacing-sizing-04);

        [data-modal-title] {
            font: var(--heading-h5);
            flex: 1;
        }
    }

    [data-modal-main] {
        flex: 1;
        overflow-y: auto;
        max-height: fit-content;
    }

    > [data-modal-footer] {
        display: flex;
        gap: var(--spacing-sizing-04);
    }

    [data-button-format='horizontal'] {
        flex-direction: row-reverse;
        justify-content: flex-start;
    }

    [data-button-format='vertical'] {
        flex-direction: column;

        @media (width >= 640px) {
            flex-direction: row-reverse;
            justify-content: flex-start;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIModal",slug:"modal",example:`<ui-button label="Open Modal" (onClick)="open = true"></ui-button>
<ui-modal
description="Example description"
header="Example header"
(onClose)="open = false"
[open]="open">
Example Modal
</ui-modal>`,description:"Modals display important information that users need to acknowledge. They appear over the interface and block further interactions until an action is selected. Modal is a wrapper around the Dialog component that provides a header and footer for the dialog.",phase:"Dev",directive:!1,exampleComponent:"UIModalExample",inputs:[{name:"buttonFormat",description:"The format of the buttons in the footer. Vertical applies only on screen widths less than or equal to 640px.",type:["horizontal","vertical"],required:!1,default:"horizontal"},{name:"callToAction",description:"The call to action button to display in the footer of the modal.",type:"ModalCallToAction",required:!1},{name:"cancelButton",description:`Whether to show the cancel button in the footer.

Providing a string will set the label of the cancel button.`,type:["boolean","string"],required:!1,default:"false"},{name:"container",description:"The container to render the portal content in.",type:["HTMLElement","unknown","null","undefined"],required:!1},{name:"description",description:`Modal description. Used for the
[aria-description](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
attribute.`,type:"string",required:!0},{name:"disableFocusTrap",description:"If focus trapping should be disabled. Generally this should not be disabled as dialogs should always trap focus.",type:"boolean",required:!1,default:"false"},{name:"header",description:"Modal header.",type:"string",required:!0},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"innerRef",description:"",type:"(el: HTMLDivElement | null) => void",required:!1},{name:"open",description:"If the dialog should appear.",type:"boolean",required:!1,default:"false"},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1}],outputs:[{name:"onClose",description:"Emits when modal requests to close.",type:"EventEmitter"}],associatedTypes:[{name:"ModalCallToAction",file:"projects/ui/src/lib/modal/modal.ts",props:[{name:"destructive",type:"boolean",required:!1},{name:"label",type:"string",required:!0},{name:"onClick",type:"function",required:!0}]}],hasContent:!0},{name:"OutsideClick",file:"projects/ui/src/lib/outside-click/outside-click.directive.ts",css:"",className:"UIOutsideClickDirective",slug:"outside-click",description:"A directive to detect clicks outside a specified element and execute a callback.",phase:"Utility",directive:!0,exampleComponent:"UIOutsideClickExample",inputs:[{name:"props",type:"OutsideClickUtilityProps",required:!0}],outputs:[],associatedTypes:[{name:"OutsideClickUtilityProps",file:"projects/ui/src/lib/outside-click/outside-click.ts",props:[{name:"callback",description:"The callback function to execute on outside click.",type:"function",required:!0},{name:"disabled",description:"Whether the outside click detection is disabled.",type:"boolean",default:"false",required:!1},{name:"elements",description:`The elements to monitor for outside clicks.

If used in the directive, this can be left empty and the directive's host element will be used.`,type:"HTMLElement[]",required:!1},{name:"handleTabs",description:"Whether to handle 'Tab' key presses as outside clicks.",type:"boolean",default:"false",required:!1}]}],hasContent:!1},{name:"Pagination",file:"projects/ui/src/lib/pagination/pagination.ts",css:`[data-bspk='pagination'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sizing-01);
    flex: 1;

    [data-input-form] {
        display: contents;

        [data-bspk='input'] {
            max-width: var(--spacing-sizing-12);
            margin-right: var(--spacing-sizing-01);

            input {
                text-align: center;
            }
        }

        span {
            display: block;
            white-space: nowrap;
            font: var(--body-small);
        }
    }

    button[data-bspk-owner='pagination'][data-bspk='button'][data-size='small'] {
        padding: 6px 0;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIPagination",slug:"pagination",example:'<ui-pagination [value]="currentPage" [numPages]="10" (valueChange)="currentPage = $event"></ui-pagination>',description:"A navigation component that allows customers to move between a range of listed content within a page into smaller multiple micro pages.",phase:"Dev",directive:!1,exampleComponent:"UIPaginationExample",inputs:[{name:"numPages",description:`The number of pages to display in the pagination component.

If there is only one page, the component will not render.`,type:"number",required:!0,default:"2"},{name:"value",description:"The current page number.",type:"number",required:!0,default:"1"}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The current page number.`,type:"(value: number) => void",required:!0}],associatedTypes:[],hasContent:!1},{name:"Portal",file:"projects/ui/src/lib/portal/portal.directive.ts",css:"",className:"UIPortalDirective",slug:"portal",description:"Utility directive to render an element in a different part of the DOM.",phase:"Utility",directive:!0,inputs:[{name:"container",description:"The container to render the portal content in.",type:["HTMLElement","unknown","null","undefined"],required:!1}],outputs:[],associatedTypes:[],hasContent:!1},{name:"Radio",file:"projects/ui/src/lib/radio/radio.ts",css:`[data-bspk='radio'] {
    display: block;
    position: relative;
    width: var(--spacing-sizing-06);
    aspect-ratio: 1/1;
    padding: 2px;

    input[type='radio'] {
        position: absolute;
        opacity: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    span {
        --stroke: var(--stroke-neutral-base);
        --inner: var(--foreground-brand-primary);
        --background: none;

        position: relative;
        z-index: 1;
        display: flex;
        width: var(--spacing-sizing-05);
        aspect-ratio: 1/1;
        border-radius: 50%;
        border: 2px solid var(--stroke);
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background: var(--background);

        &::before {
            content: '';
            display: block;
            width: 100%;
            scale: 0.7;
            aspect-ratio: 1/1;
            background: var(--inner);
            border-radius: var(--radius-full);
            opacity: 0;
        }
    }

    input[type='radio']:not(:disabled) {
        &:hover + span {
            --background: var(--interactions-neutral-hover-opacity);
        }

        &:active + span {
            --background: var(--interactions-neutral-press-opacity);
        }

        &[data-invalid] + span {
            --stroke: var(--status-error);
            --inner: var(--status-error);
        }
    }

    input[type='radio']:checked + span {
        --stroke: var(--stroke-brand-primary);

        &::before {
            opacity: 1;
        }
    }

    input[type='radio']:disabled {
        pointer-events: none;

        & + span {
            --stroke: var(--stroke-neutral-interactions-disabled-light);
            --inner: var(--foreground-neutral-disabled-on-surface);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIRadio",slug:"radio",example:`<ui-radio name="example" [value]="'option1'" (checkedChange)="selected = $event ? 'option1' : selected"
[disabled]="false" [invalid]="false" [required]="true" aria-label="Option 1" />`,description:"A round control that allows user to choose one option from a set. This is the base element and if used directly you must wrap it with a label. This will more often be used in the RadioOption or RadioGroup component.",phase:"Utility",directive:!1,exampleComponent:"UIRadioExample",inputs:[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"checked",description:"Marks the radio as checked.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"value",description:"The value of the radio input.",type:"string",required:!0}],outputs:[{name:"checkedChange",description:`Emits when the value changes. 

Marks the radio as checked.`,type:"(value: boolean) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"RadioGroup",file:"projects/ui/src/lib/radio-group/radio-group.ts",css:"",className:"UIRadioGroup",slug:"radio-group",example:`<ui-radio-group
[options]="options"
[value]="selectedValue"
(valueChange)="onValueChange($event)">
</ui-radio-group>`,description:`A group of radios that allows users to choose one or more items from a list or turn an feature on or off.

For a more complete example with field usage, see the RadioGroupField component.`,phase:"Dev",directive:!1,exampleComponent:"UIRadioGroupExample",inputs:[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"options",description:"",type:"RadioGroupOption[]",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"value",description:"The value of the selected radio.",type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the selected radio.`,type:"(value: string) => void",required:!1}],associatedTypes:[{name:"RadioGroupOption",file:"projects/ui/src/lib/radio-group/radio-group.ts",props:[{name:"checked",description:"Marks the radio as checked.",type:"boolean",default:"false",required:!1},{name:"description",description:"The description of the option.",type:"string",required:!1},{name:"disabled",type:"RadioOptionProps",required:!1},{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0},{name:"value",description:"The value of the radio input.",type:"string",required:!0}]}],hasContent:!1},{name:"RadioGroupField",file:"projects/ui/src/lib/radio-group-field/radio-group-field.ts",css:`[data-bspk-utility='field'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-01);
    border: none;
    max-width: 100%;
    min-inline-size: unset;

    [data-field-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-01);

        span {
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);

            &[data-required] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-01);
            }

            &[data-trailing] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-02);
                margin-left: auto;
            }
        }
    }

    [data-field-description] {
        font: var(--body-small);
        color: var(--foreground-neutral-on-surface-variant-01);
        margin: 0;
        padding: 0;
    }

    fieldset,
    legend {
        display: contents;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIRadioGroupField",slug:"radio-group-field",description:`A field wrapper for the UIRadioGroup component.

This component takes properties from the Field and RadioGroup components.`,phase:"UXReview",directive:!1,inputs:[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"options",description:"",type:"RadioGroupOption[]",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"value",description:"The value of the selected radio.",type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the selected radio.`,type:"(value: string) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"RadioOption",file:"projects/ui/src/lib/radio-option/radio-option.ts",css:"",className:"UIRadioOption",slug:"radio-option",description:`A control that allows users to choose one or more items from a list or turn an feature on or off.

If only a radio button is needed, consider using the Radio component directly.`,phase:"Utility",directive:!1,exampleComponent:"UIRadioOptionExample",inputs:[{name:"description",description:"The description of the option.",type:"string",required:!1},{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"checked",description:"Marks the radio as checked.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"value",description:"The value of the radio input.",type:"string",required:!0}],outputs:[{name:"checkedChange",description:`Emits when the value changes. 

Marks the radio as checked.`,type:"(value: boolean) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"Scrim",file:"projects/ui/src/lib/scrim/scrim.ts",css:`[data-bspk='scrim'] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: var(--z-index-scrim);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-scrim);
    animation-name: fade-in;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    &[data-contained] {
        position: absolute;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UIScrim",slug:"scrim",description:"A temporary effect or overlay that can be applied to a user interface to make content less prominent or to draw attention to a modal or sheet.",phase:"Utility",directive:!1,exampleComponent:"UIScrimExample",inputs:[{name:"contained",description:"If the scrim should be contained within a parent element, or fixed to the viewport.",type:"boolean",required:!1},{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},{name:"visible",description:"Whether the Scrim should be visible.",type:"boolean",required:!1,default:"true"}],outputs:[],associatedTypes:[],hasContent:!1},{name:"SegmentedControl",file:"projects/ui/src/lib/segmented-control/segmented-control.ts",css:`ul[data-bspk='segmented-control'] {
    background: var(--surface-neutral-t3-low);
    border-radius: var(--radius-sm);
    padding: var(--spacing-sizing-01);

    &[data-width='fill'] {
        margin: 0 var(--spacing-sizing-04);
    }

    --padding: var(--spacing-sizing-04);

    &[data-size='small'] {
        --padding: var(--spacing-sizing-03);
    }

    &[data-size='large'] {
        --padding: var(--spacing-sizing-05);
    }

    %active {
        background: var(--interactions-neutral-hover-opacity);

        &[aria-selected='true'] {
            background:
                linear-gradient(var(--interactions-neutral-hover-opacity), var(--interactions-neutral-hover-opacity)),
                linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
        }
    }

    li {
        color: var(--foreground-neutral-on-surface);
        padding: 0 var(--padding);
        border-radius: var(--radius-sm);

        &:has([data-icon]) {
            /* smaller padding for icon-only items */
            padding: 0 calc(var(--padding) - var(--spacing-sizing-01));

            &:has([data-label]) {
                padding-right: var(--padding);
            }
        }

        &:not([aria-disabled]) {
            &[aria-selected='true'] {
                background: var(--surface-neutral-t1-base);
                box-shadow:
                    0 0 1px 0 var(--shadow-variant-03),
                    0 1px 1px 0 var(--shadow-variant-05);
            }

            &:hover {
                @extend %active;
            }

            &:active {
                background: var(--interactions-neutral-press-opacity);
            }
        }

        &[aria-disabled] {
            color: var(--foreground-neutral-disabled-on-surface);
            cursor: not-allowed;
        }
    }

    &:focus-within {
        li:not([aria-disabled])[data-active] {
            @extend %active;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UISegmentedControl",slug:"segmented-control",example:`<!-- Angular example -->
<ui-segmented-control
[label]="'Example Segments'"
[options]="[
{ value: '1', label: 'Option 1' },
{ value: '2', label: 'Option 2' },
{ value: '3', label: 'Option 3' },
]"
[value]="selected"
(valueChange)="selected = $event">
</ui-segmented-control>`,description:"Navigation tool that organizes content across different screens and views.",phase:"Dev",directive:!1,exampleComponent:"UISegmentedControlExample",inputs:[{name:"iconsOnly",description:`Determines if the labels of the options should be displayed. If icons are not provided for every option this is
ignored and labels are shown.`,type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},{name:"size",description:"The size of the tabs.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],required:!1,default:"hug"}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"(value: string) => void",required:!0}],associatedTypes:[{name:"SegmentedControlOption",file:"projects/ui/src/lib/segmented-control/segmented-control.ts",props:[{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},{name:"icon",description:"The icon to display on the left side of the tab.",type:"BspkIcon",required:!1},{name:"iconSelected",description:"The icon to display on the left side of the tab when the tab is currently selected.",type:"BspkIcon",required:!1},{name:"id",description:"Optional id. If not provided, one is generated.",type:"string",required:!1},{name:"label",description:"The label of the tab. This is the text that will be displayed on the tab.",type:"string",required:!0},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0}]}],hasContent:!1},{name:"Select",file:"projects/ui/src/lib/select/select.ts",css:`[data-bspk='select'] {
    /* default -- size medium not disabled or readonly */

    --select-background: var(--surface-neutral-t1-base);
    --select-border-color: var(--stroke-neutral-base);
    --select-text-color: var(--foreground-neutral-on-surface);
    --select-height: var(--spacing-sizing-10);
    --select-font: var(--body-base);
    --select-clear-height: var(--spacing-sizing-05);
    --select-padding: var(--spacing-sizing-03);
    --select-icon-width: var(--spacing-sizing-05);

    overflow: hidden;
    position: relative;
    width: 100%;
    outline: unset;
    min-height: var(--select-height);
    max-height: var(--select-height);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-sizing-02);
    flex-grow: 0;
    flex-shrink: 0;
    text-align: left;
    font: var(--select-font);
    border: 1px solid var(--select-border-color);
    border-radius: var(--radius-sm);
    background: var(--select-background);
    padding: 0 var(--select-padding);
    cursor: pointer;

    [data-input] {
        position: absolute;
        opacity: 0;
        inset: 0;
        cursor: pointer;
    }

    [data-bspk='list-item'] {
        background: transparent;
    }

    [data-bspk='list-item'] [data-item-label] [data-text] {
        font: var(--select-font);
        color: var(--select-text-color);
    }

    &[data-size='small'] {
        --select-height: var(--spacing-sizing-08);
        --select-font: var(--body-small);
        --select-clear-height: var(--spacing-sizing-05);
        --select-padding: var(--spacing-sizing-02);
        --select-icon-width: var(--spacing-sizing-05);
    }

    &[data-size='large'] {
        --select-height: var(--spacing-sizing-12);
        --select-font: var(--body-large);
        --select-clear-height: var(--spacing-sizing-06);
        --select-icon-width: var(--spacing-sizing-06);
    }

    &[aria-disabled],
    &[aria-readonly]:not([data-empty]) {
        --select-text-color: var(--foreground-neutral-disabled-on-surface);
        --select-border-color: var(--stroke-neutral-disabled-light);
        --select-background:
            linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));

        cursor: not-allowed;

        &[aria-readonly]:not([data-empty]) {
            --select-text-color: var(--foreground-neutral-on-surface);
        }
    }

    &:not([aria-disabled], [aria-readonly]) {
        &:focus-within {
            --select-border-color: var(--stroke-neutral-focus);

            border-width: 1px;
            outline: 1px solid var(--stroke-neutral-focus);
        }

        &:hover {
            --select-background:
                linear-gradient(var(--interactions-neutral-hover-opacity), var(--interactions-neutral-hover-opacity)),
                linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
        }

        &:active {
            --select-background:
                linear-gradient(var(--interactions-neutral-press-opacity), var(--interactions-neutral-press-opacity)),
                linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
        }
    }

    &[data-invalid] {
        --select-border-color: var(--status-error);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UISelect",slug:"select",example:`<ui-field controlId="example-select" helperText="Choose one option" label="Select an option">
<ui-select
[id]="'example-select'"
[name]="'example-select'"
[options]="OPTIONS"
[placeholder]="'Select an option'"
[scrollLimit]="5"
[size]="'medium'"
[(value)]="selected">
</ui-select>
</ui-field>`,description:`A field element that allows users to select one option from a list of available choices.

For a more complete example with field usage, see the SelectField component.`,phase:"Stable",directive:!1,exampleComponent:"UISelectExample",inputs:[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"items",description:"Array of options to display in the select",type:"SelectOption[]",required:!0},{name:"menuWidth",description:`The width of the menu.

If not provided, the menu will match the width of the select control.`,type:"unknown",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"Placeholder for the select",type:"string",required:!1,default:"Select one"},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollListItemsStyle utility.`,type:"number",required:!1},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:"The value of the select control.",type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the select control.`,type:"(value: string) => void",required:!1}],associatedTypes:[{name:"SelectOption",file:"projects/ui/src/lib/select/select.ts",props:[{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},{name:"label",type:"string",required:!0},{name:"value",type:"string",required:!0}]}],hasContent:!1},{name:"SelectField",file:"projects/ui/src/lib/select-field/select-field.ts",css:`[data-bspk-utility='field'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-01);
    border: none;
    max-width: 100%;
    min-inline-size: unset;

    [data-field-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-01);

        span {
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);

            &[data-required] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-01);
            }

            &[data-trailing] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-02);
                margin-left: auto;
            }
        }
    }

    [data-field-description] {
        font: var(--body-small);
        color: var(--foreground-neutral-on-surface-variant-01);
        margin: 0;
        padding: 0;
    }

    fieldset,
    legend {
        display: contents;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UISelectField",slug:"select-field",description:`A field wrapper for the UISelect component.

This component takes properties from the Field and Select components.`,phase:"UXReview",directive:!1,inputs:[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"items",description:"Array of options to display in the select",type:"SelectOption[]",required:!0},{name:"menuWidth",description:`The width of the menu.

If not provided, the menu will match the width of the select control.`,type:"unknown",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"Placeholder for the select",type:"string",required:!1,default:"Select one"},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollListItemsStyle utility.`,type:"number",required:!1},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:"The value of the select control.",type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the select control.`,type:"(value: string) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"Switch",file:"projects/ui/src/lib/switch/switch.ts",css:`[data-bspk='switch'] {
    --track-width: var(--spacing-sizing-09);
    --toggle-width: var(--spacing-sizing-04);
    --track-bg: var(--surface-neutral-t4-high);
    --toggle-bg: var(--foreground-neutral-on-color);

    display: block;
    margin: 2px;

    input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        cursor: pointer;
    }

    width: var(--track-width);
    height: var(--spacing-sizing-05);
    border-radius: var(--spacing-sizing-05);
    background-color: var(--track-bg);
    position: relative;
    z-index: 1;

    span {
        display: block;
        width: var(--toggle-width);
        height: var(--toggle-width);
        border-radius: var(--radius-full);
        background-color: var(--toggle-bg);
        transition: left 0.2s;
        box-shadow: var(--drop-shadow-raise);
        left: 2px;
        top: 2px;
        position: absolute;
    }

    &:has(input[type='checkbox']:checked) {
        --track-bg: var(--foreground-brand-primary);

        span {
            left: calc(var(--track-width) - var(--toggle-width) - 2px);
        }
    }

    &:has(input[type='checkbox']:disabled) {
        input[type='checkbox'] {
            pointer-events: none;
        }

        --track-bg: var(--interactions-disabled-opacity);
        --toggle-bg: var(--foreground-neutral-disabled-on-surface);

        &:has(input[type='checkbox']:checked) span {
            --toggle-bg: var(--foreground-neutral-disabled-on-color-surface);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UISwitch",slug:"switch",description:"A control element that allows users to toggle between two states, typically representing on/off. This is the base element and if used directly you must wrap it with a label.",phase:"Dev",directive:!1,exampleComponent:"UISwitchExample",inputs:[{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"checked",description:"Marks the control as checked.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"value",description:"The value of the switch.",type:"string",required:!0}],outputs:[{name:"checkedChange",description:`Emits when the value changes. 

Marks the control as checked.`,type:"(value: boolean) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"SwitchOption",file:"projects/ui/src/lib/switch-option/switch-option.ts",css:"",className:"UISwitchOption",slug:"switch-option",description:"A control that allows users to choose one or more items from a list or turn an feature on or off.",phase:"Dev",directive:!1,exampleComponent:"UISwitchOptionExample",inputs:[{name:"description",description:"The description of the option.",type:"string",required:!1},{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"checked",description:"Marks the control as checked.",type:"boolean",required:!1,default:"false"},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"value",description:"The value of the switch.",type:"string",required:!0}],outputs:[{name:"checkedChange",description:`Emits when the value changes. 

Marks the control as checked.`,type:"(value: boolean) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"TabGroup",file:"projects/ui/src/lib/tab-group/tab-group.ts",css:`ul[data-bspk='tab-group'] {
    border-bottom: none;
    max-width: 100%;

    li {
        border: 0;
        color: var(--foreground-neutral-on-surface-variant-02);
        background: none;
        border-bottom: 1px solid var(--stroke-neutral-low);
        position: relative;
        padding: 0 var(--spacing-sizing-04);

        &:not([aria-disabled]) {
            &:active {
                background: var(--interactions-neutral-press-opacity);
            }
        }

        &[aria-disabled] {
            color: var(--foreground-neutral-disabled-on-surface);
        }

        &[aria-selected='true'] {
            color: var(--foreground-brand-primary);

            &::after {
                content: '';
                display: block;
                width: calc(100% - var(--spacing-sizing-04) * 2);
                height: 2px;
                background-color: var(--stroke-brand-primary);
                bottom: -1px;
                position: absolute;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
            }

            svg {
                color: var(--surface-brand-primary);
            }
        }
    }

    &[data-show-trail][data-width='hug'] {
        width: 100%;
        border-bottom: 1px solid var(--stroke-neutral-low);

        li {
            border-bottom: none;
        }
    }

    &:focus-within {
        li:not([aria-disabled])[data-active] {
            background: var(--interactions-neutral-hover-opacity);
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UITabGroup",slug:"tab-group",example:`<!-- Angular example -->
<ui-tab-group
[label]="'Example Tabs'"
[options]="[
{ value: '1', label: 'Option 1' },
{ value: '2', label: 'Option 2' },
{ value: '3', label: 'Option 3' },
]"
[value]="selected"
(valueChange)="selected = $event">
</ui-tab-group>`,description:"Navigation tool that organizes content across different screens and views.",phase:"Dev",directive:!1,exampleComponent:"UITabGroupExample",inputs:[{name:"showTrail",description:`When width is 'hug' this determines if the trailing underline should be showing. When width is 'fill' this
property isn't applicable.`,type:"boolean",required:!1,default:"false"},{name:"iconsOnly",description:`Determines if the labels of the options should be displayed. If icons are not provided for every option this is
ignored and labels are shown.`,type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},{name:"size",description:"The size of the tabs.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],required:!1,default:"hug"}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"(value: string) => void",required:!0}],associatedTypes:[],hasContent:!1},{name:"Table",file:"projects/ui/src/lib/table/table.ts",css:`[data-bspk='table'] {
    /*! --template-columns: is set via inline style */

    --white-background: var(--surface-neutral-t1-base);
    --grey-background: var(--surface-neutral-t2-lowest);
    --icon-size: var(--spacing-sizing-05);

    display: block;
    min-width: 100%;
    overflow: auto hidden;
    border-collapse: separate;
    text-align: left;
    border-spacing: 2rem 0.125rem;
    color: var(--foreground-neutral-on-surface);
    font: var(--labels-base);
    border-radius: var(--radius-md);
    border: 1px solid var(--stroke-neutral-low);
    background: var(--white-background);

    /* [data-size='medium'] */
    --min-height: var(--spacing-sizing-10);
    --padding-y: var(--spacing-sizing-02);

    &[data-size='x-large'] {
        --min-height: var(--spacing-sizing-14);
        --padding-y: var(--spacing-sizing-04);
    }

    &[data-size='large'] {
        --min-height: var(--spacing-sizing-12);
        --padding-y: var(--spacing-sizing-03);
    }

    &[data-size='small'] {
        --min-height: var(--spacing-sizing-08);
        --padding-y: var(--spacing-sizing-01);
    }

    [data-scroll-container] {
        width: fit-content;
        min-width: 100%;
        border-radius: var(--radius-md);
    }

    table {
        display: grid;
        grid-template-columns: var(--template-columns);
        border-collapse: collapse;
        min-width: 100%;

        tr,
        tbody,
        thead {
            display: contents;
        }

        caption {
            grid-column: 1 / -1;
            background: var(--grey-background);
            border-bottom: 1px solid var(--stroke-neutral-low);
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            font: var(--labels-small);
            min-height: var(--min-height);
            padding: calc(var(--padding-y) + 2px) var(--spacing-sizing-04);
            overflow: hidden;
        }

        th {
            display: flex;
            min-height: var(--min-height);
            overflow: hidden;
            flex-direction: row;
            background: var(--grey-background);
            font: var(--labels-small);
            border-bottom: 1px solid var(--stroke-neutral-base);
            white-space: nowrap;
            z-index: 1;
            position: relative;

            &:not([data-sortable]) {
                padding: calc(var(--padding-y) + 2px) var(--spacing-sizing-04);
                pointer-events: none;
            }

            &[data-sortable] {
                button {
                    display: flex;
                    min-height: var(--min-height);
                    border: none;
                    overflow: hidden;
                    flex-direction: row;
                    padding: calc(var(--padding-y) + 2px) var(--spacing-sizing-04);
                    background: var(--grey-background);
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--spacing-sizing-02);
                    width: 100%;
                    cursor: pointer;
                    font: inherit;
                    outline: none;
                    position: relative;

                    &:hover {
                        background:
                            linear-gradient(
                                var(--interactions-neutral-hover-opacity),
                                var(--interactions-neutral-hover-opacity)
                            ),
                            linear-gradient(var(--grey-background), var(--grey-background));
                    }

                    &:active {
                        background:
                            linear-gradient(
                                var(--interactions-neutral-press-opacity),
                                var(--interactions-neutral-press-opacity)
                            ),
                            linear-gradient(var(--grey-background), var(--grey-background));
                    }

                    [data-sort-icon] {
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        svg {
                            width: var(--icon-size);
                        }
                    }

                    &:focus-visible {
                        position: absolute;
                        z-index: var(--z-index-focus);
                        inset: 0;
                        outline: solid 2px var(--stroke-neutral-focus);
                        isolation: isolate;
                    }
                }
            }

            &[data-align='right'] {
                align-items: flex-end;

                button {
                    justify-content: flex-end;
                }
            }

            &[data-align='center'] {
                align-items: center;

                button {
                    justify-content: center;
                }
            }

            &[data-align='left'] {
                align-items: flex-start;

                button {
                    justify-content: space-between;
                }
            }
        }

        td {
            display: flex;
            min-height: var(--min-height);
            overflow: hidden;
            padding: calc(var(--padding-y) + 2px) var(--spacing-sizing-04);
            flex-direction: column;
            font: var(--body-small);

            &[data-align='right'] {
                align-items: flex-end;
            }

            &[data-align='center'] {
                align-items: center;
            }

            &[data-align='left'] {
                align-items: flex-start;
            }

            &[data-valign='top'] {
                justify-content: flex-start;
            }

            &[data-valign='bottom'] {
                justify-content: flex-end;
            }

            &[data-valign='center'] {
                justify-content: center;
            }

            p {
                margin: 0;
                padding: 0;
                font: var(--body-small);
            }

            &[data-action]:hover {
                background:
                    linear-gradient(
                        var(--interactions-neutral-hover-opacity),
                        var(--interactions-neutral-hover-opacity)
                    ),
                    linear-gradient(var(--white-background), var(--white-background));
            }
        }

        tr:nth-child(even) td {
            background: var(--grey-background);

            &[data-action]:hover {
                background:
                    linear-gradient(
                        var(--interactions-neutral-hover-opacity),
                        var(--interactions-neutral-hover-opacity)
                    ),
                    linear-gradient(var(--grey-background), var(--grey-background));
            }
        }
    }

    [data-pagination] {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-sizing-03) var(--spacing-sizing-04);
        width: 100%;

        [data-pagination-label] {
            font: var(--body-small);
            min-width: fit-content;
        }

        [data-bspk='pagination'] {
            flex-grow: 0;
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UITable",slug:"table",example:`<ui-table
[data]="[{ id: 'ca', name: 'California', capital: 'Sacramento' }, { id: 'tx', name: 'Texas', capital: 'Austin' }, { id: 'fl', name: 'Florida', capital:'Tallahassee' }]"
[columns]="[{ key: 'state', label: 'State', width: '160px', sort: 'string' },{ key: 'capital', label: 'Capital', width: '140px' }]"
[pageSize]="5"
size="medium"
title="Sample State Capital Table">
</ui-table>`,description:"A component that displays data in a tabular format with support for sorting and pagination.",phase:"Dev",directive:!1,exampleComponent:"UITableExample",inputs:[{name:"columns",description:"The column definitions of the table.",type:"TableColumn<R>[]",required:!0},{name:"data",description:`The data of the table.

Array<TableRow>`,type:"R[]",required:!0},{name:"pageSize",description:`The number of rows per page.

If the number of rows exceeds the page size, pagination controls will be displayed.`,type:"number",required:!1,default:"10"},{name:"size",description:"The size of the table.",type:["large","medium","small","x-large"],required:!1,default:"medium"},{name:"title",description:"The title of the table.",type:"string",required:!1}],outputs:[],associatedTypes:[{name:"TableCellProps",file:"projects/ui/src/lib/table/utils.ts",props:[{name:"row",description:"The row data for the current cell.",type:"R",required:!0},{name:"size",description:"The size of the table.",type:["large","medium","small","x-large"],required:!0}]},{name:"TableColumn",file:"projects/ui/src/lib/table/utils.ts",props:[{name:"align",description:"The horizontal alignment of the column. This is used to set the text alignment of the column.",type:["center","left","right"],default:"left",required:!1},{name:"component",description:`A custom component to use for rendering the cell values in the column.

This component will receive the following inputs:

- \`row\`: The current row data.
- \`size\`: The table size.

Use a component that extends \`UITableCell<R>\`.`,type:"Type<UITableCell<R>>",required:!1},{name:"formatter",description:`A formatter function for the cell values in the column.

This function is called for each cell in the column and can be used to customize the display of the cell value.`,type:"TableCellValueFormatter<R>",required:!1},{name:"hideHeader",description:"Whether to hide the header for this column.",type:"boolean",default:"false",required:!1},{name:"key",description:"The key of the column. This is used to access the data in the row.",type:"string",required:!0},{name:"label",description:"The label of the column. This is used to display the column header.",type:"string",required:!0},{name:"sort",description:"The sorting function for the column.\n\nThis can be a custom sorting function or one of the built-in sorting functions:\n\n`string`, `boolean`, `date`, or `number`.\n\nIf unspecified, the column will not be sortable.",type:["BuiltInColumnSorters","TableColumnSortingFn"],required:!1},{name:"valign",description:"The vertical alignment of the column. This is used to set the text alignment of the column.",type:["bottom","center","top"],default:"center",required:!1},{name:"width",description:`The width of the column. This is used to set the width of the column.

Used to set the value of
[grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)`,type:"string",default:"1fr",required:!1}]},{name:"TableExampleData",file:"projects/ui/src/lib/table/example.ts",props:[{name:"columns",type:"TableColumn<R>[]",required:!0},{name:"data",type:"R[]",required:!0}]},{name:"TableRow",file:"projects/ui/src/lib/table/utils.ts",props:[{name:"id",type:"string",required:!0}]}],hasContent:!1},{name:"TabList",file:"projects/ui/src/lib/tab-list/tab-list.ts",css:`ul[data-bspk-utility='tab-list'] {
    --item-flex-grow: 0;

    display: flex;
    flex-direction: row;
    list-style: none;
    height: var(--height);
    font: var(--font);
    width: fit-content; /* default to hug content */

    &[data-width='fill'] {
        align-items: stretch;
        width: 100%;

        --item-flex-grow: 1;
    }

    --icon-size: var(--spacing-sizing-05);
    --font: var(--labels-base);
    --height: var(--spacing-sizing-10);

    &[data-size='small'] {
        --font: var(--labels-small);
        --height: var(--spacing-sizing-08);
        --icon-size: var(--spacing-sizing-04);
    }

    &[data-size='large'] {
        --font: var(--labels-large);
        --height: var(--spacing-sizing-12);
        --icon-size: var(--spacing-sizing-06);
    }

    &:has(:focus-visible) {
        outline: 2px solid var(--stroke-neutral-focus);
        outline-offset: -1px;
        position: relative;
        z-index: var(--z-index-focus);
    }

    li {
        list-style: none;
        cursor: pointer;
        font: var(--font);
        white-space: nowrap;
        outline: none;
        user-select: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-02);
        min-width: 0; /* Prevent overflow from long content */

        &[aria-disabled] {
            cursor: not-allowed;
        }

        span {
            pointer-events: none;
        }

        [data-label][style] {
            justify-content: left;
            max-width: 200px;
        }

        svg {
            width: var(--icon-size);
        }
    }

    &:not([data-bspk]):focus-within {
        li:not([aria-disabled]) {
            &[data-active] {
                background-color: var(--interactions-neutral-hover-opacity);
            }

            &[aria-selected='true'] {
                background-color: var(--surface-brand-primary-highlight);
            }
        }
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UITabList",slug:"tab-list",description:`Navigation tool that organizes content across different screens and views.

See TabGroup or SegmentedControl for examples.`,phase:"Utility",directive:!1,exampleComponent:"UITabListExample",inputs:[{name:"component",description:`The component identifier.

Usually`,type:"string",required:!0},{name:"iconsOnly",description:`Determines if the labels of the options should be displayed. If icons are not provided for every option this is
ignored and labels are shown.`,type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},{name:"size",description:"The size of the tabs.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],required:!1,default:"hug"}],outputs:[{name:"componentChange",description:`Emits when the value changes. 

The component identifier.

Usually`,type:"(value: string) => void",required:!0},{name:"valueChange",description:`Emits when the value changes. 

The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"(value: string) => void",required:!0}],associatedTypes:[{name:"TabListBaseProps",file:"projects/ui/src/lib/tab-list/tab-list.ts",props:[{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},{name:"size",description:"The size of the tabs.",type:["large","medium","small"],default:"medium",required:!1},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],default:"hug",required:!1}]},{name:"TabOption",file:"projects/ui/src/lib/tab-list/tab-list.ts",props:[{name:"badge",description:"The badge count to display on the tab",type:"number",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},{name:"icon",description:"The icon to display on the left side of the tab.",type:"BspkIcon",required:!1},{name:"iconSelected",description:"The icon to display on the left side of the tab when the tab is currently selected.",type:"BspkIcon",required:!1},{name:"id",description:"Optional id. If not provided, one is generated.",type:"string",required:!1},{name:"label",description:"The label of the tab. This is the text that will be displayed on the tab.",type:"string",required:!0},{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0}]},{name:"UITabListProps",file:"projects/ui/src/lib/tab-list/tab-list.ts",props:[{name:"component",description:`The component identifier.

Usually`,type:"string",required:!0}]}],hasContent:!1},{name:"Tag",file:"projects/ui/src/lib/tag/tag.ts",css:`[data-bspk='tag'] {
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: 0 var(--spacing-sizing-03);
    border-radius: var(--radius-sm);
    color: var(--foreground) !important;
    background: var(--background);
    font: unset;
    max-width: 200px;
    flex-shrink: 0;
    flex-grow: 0;
    width: fit-content;

    &[data-variant='pill'] {
        border-radius: var(--radius-full);
    }

    &[data-variant='corner-wrap'] {
        border-bottom-right-radius: 0;
    }

    &[data-size='small'] {
        font: var(--labels-small);
        height: var(--spacing-sizing-08);
    }

    &[data-size='x-small'] {
        font: var(--labels-x-small);
        height: var(--spacing-sizing-06);
    }

    &[data-color='white'] {
        box-shadow: var(--drop-shadow-south);
    }

    [data-triangle] {
        position: absolute;
        bottom: -12px;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 12px 12px 0 0;
        border-color: var(--foreground) transparent transparent transparent;
        transform: rotate(0deg);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UITag",slug:"tag",description:"A non-interactive visual indicators to draw attention or categorization of a component.",phase:"UXReview",directive:!1,exampleComponent:"UITagExample",inputs:[{name:"color",description:"The color of the tag.",type:"unknown",required:!1,default:"grey"},{name:"label",description:"The label of the tag.",type:"string",required:!0},{name:"size",description:"The size of the tag.",type:["small","x-small"],required:!1,default:"small"},{name:"variant",description:"The display variant of the tag.",type:["corner-wrap","flat","pill"],required:!1,default:"flat"}],outputs:[],associatedTypes:[],hasContent:!1},{name:"Textarea",file:"projects/ui/src/lib/textarea/textarea.ts",css:`[data-bspk='textarea'] {
    /*! 
    --min-rows: is set via inline style 
    --max-rows: is set via inline style
    */

    display: grid;
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    overflow: hidden;
    color: var(--foreground-neutral-on-surface);
    background-color: var(--surface-neutral-t1-base);

    --border-color: var(--stroke-neutral-base);

    /* &[data-size='medium'] */
    --font: var(--body-base);
    --line-height: 20px;
    --padding: var(--spacing-sizing-03);

    &[data-size='small'] {
        --font: var(--body-small);
        --line-height: 20px;
        --padding: var(--spacing-sizing-02);
    }

    &[data-size='large'] {
        --font: var(--body-large);
        --line-height: 24px;
        --padding: var(--spacing-sizing-03);
    }

    &:has(textarea:focus-within) {
        --border-color: var(--stroke-neutral-focus);
    }

    &:has(textarea[aria-invalid]) {
        --border-color: var(--status-error);
    }

    [data-replicated-value] {
        white-space: pre-wrap;
        visibility: hidden;
        overflow-y: hidden;
    }

    textarea,
    [data-replicated-value] {
        width: 100%;
        font: var(--font);
        padding: var(--padding);
        border: none;
        background: transparent;
        grid-area: 1 / 1 / 2 / 2;
        min-height: calc((var(--line-height) * var(--min-rows)) + (var(--padding) * 2));
        max-height: calc((var(--line-height) * var(--max-rows)) + (var(--padding) * 2));
        max-width: 100%;
    }

    textarea {
        text-wrap: break-word;

        &::placeholder {
            color: var(--foreground-neutral-on-surface-variant-03);
        }

        resize: none;
        color: inherit;
        background-color: inherit;
        outline: none;
    }

    &:hover:not(:focus-within) {
        background:
            linear-gradient(var(--interactions-hover-opacity), var(--interactions-hover-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
    }

    &:active:not(:focus-within) {
        background:
            linear-gradient(var(--interactions-press-opacity), var(--interactions-press-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
    }

    &[data-readonly] {
        --border-color: var(--stroke-neutral-disabled-light);

        background:
            linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
    }

    &[data-disabled],
    &:has([data-main-input][disabled]) {
        --border-color: var(--stroke-neutral-disabled-light);

        background:
            linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)),
            linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));

        & > * {
            color: var(--foreground-neutral-disabled-on-surface);
        }
    }

    &[data-invalid] {
        --border-color: var(--status-error);
    }

    &:focus-within {
        --border-color: var(--stroke-neutral-focus);

        outline: 1px solid var(--stroke-neutral-focus);
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UITextarea",slug:"textarea",example:`<ui-textarea
[value]="textareaValue()"
(valueChange)="updateTextarea($event)"
id="default-textarea"
name="default-textarea"
ariaLabel="Textarea Label "/>`,description:`A component that allows users to input large amounts of text that could span multiple lines.

This component gives you a textarea HTML element that automatically adjusts its height to match the length of the content within maximum and minimum rows. A character counter when a maxLength is set to show the number of characters remaining below the limit.

For a more complete example with field usage, see the TextareaField component.`,phase:"UXReview",directive:!1,exampleComponent:"UITextareaExample",inputs:[{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"maxLength",description:"The maximum number of characters that the field will accept.",type:"number",required:!1},{name:"maxRows",description:`The maximum number of rows that the textarea will show.

When set the textarea will automatically adjust its height to fit the content up to this limit.`,type:"number",required:!1,default:"10"},{name:"minRows",description:"The minimum number of rows that the textarea will show.",type:"number",required:!1,default:"3"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:"The value of the textarea field.",type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the textarea field.`,type:"(value: string) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"TextareaField",file:"projects/ui/src/lib/textarea-field/textarea-field.ts",css:`[data-bspk-utility='field'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sizing-01);
    border: none;
    max-width: 100%;
    min-inline-size: unset;

    [data-field-label] {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sizing-01);

        span {
            font: var(--labels-small);
            color: var(--foreground-neutral-on-surface);

            &[data-required] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-01);
            }

            &[data-trailing] {
                font: var(--body-small);
                color: var(--foreground-neutral-on-surface-variant-02);
                margin-left: auto;
            }
        }
    }

    [data-field-description] {
        font: var(--body-small);
        color: var(--foreground-neutral-on-surface-variant-01);
        margin: 0;
        padding: 0;
    }

    fieldset,
    legend {
        display: contents;
    }
}

/** Copyright 2026 Anywhere Real Estate - CC BY 4.0 */
`,className:"UITextareaField",slug:"textarea-field",description:`A field wrapper for the UITextarea component.

This component takes properties from the Field and Textarea components.`,phase:"UXReview",directive:!1,exampleComponent:"UITextareaFieldExample",inputs:[{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},{name:"label",description:"The label of the field.",type:"string",required:!0},{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},{name:"ariaDescribedBy",type:"string",required:!1},{name:"ariaErrorMessage",type:"string",required:!1},{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",required:!1,default:"false"},{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",required:!1,default:"false"},{name:"maxLength",description:"The maximum number of characters that the field will accept.",type:"number",required:!1},{name:"maxRows",description:`The maximum number of rows that the textarea will show.

When set the textarea will automatically adjust its height to fit the content up to this limit.`,type:"number",required:!1,default:"10"},{name:"minRows",description:"The minimum number of rows that the textarea will show.",type:"number",required:!1,default:"3"},{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",required:!1,default:"false"},{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",required:!1,default:"false"},{name:"size",description:"The size of the element.",type:["large","medium","small"],required:!1,default:"medium"},{name:"value",description:"The value of the textarea field.",type:"string",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the textarea field.`,type:"(value: string) => void",required:!1}],associatedTypes:[],hasContent:!1},{name:"Tooltip",file:"projects/ui/src/lib/tooltip/tooltip.directive.ts",css:"",className:"UITooltipDirective",slug:"tooltip",example:`<span [ui-tooltip]="{
label: 'I explain what this button does',
placement: 'top',
}">Hover me</span>`,description:"Brief message that provide additional guidance and helps users perform an action if needed.",phase:"Dev",directive:!0,exampleComponent:"UITooltipExample",inputs:[{name:"value",description:`The value of the tooltip directive. Can be a string for simple usage or an object for more control.
When using the truncated option, the tooltip will only show when the content is truncated and will use the text
content of the reference element as the label. This is useful for cases like table cells where you want to show a
tooltip only when the content is too long to fit.
Note: When using the truncated option, the directive will add a data-truncated attribute to the host element.
This can be used for styling purposes.`,type:"TooltipProps | string | { truncated: true } | undefined",required:!1}],outputs:[{name:"valueChange",description:`Emits when the value changes. 

The value of the tooltip directive. Can be a string for simple usage or an object for more control.
When using the truncated option, the tooltip will only show when the content is truncated and will use the text
content of the reference element as the label. This is useful for cases like table cells where you want to show a
tooltip only when the content is too long to fit.
Note: When using the truncated option, the directive will add a data-truncated attribute to the host element.
This can be used for styling purposes.`,type:"(value: TooltipProps | string | { truncated: true } | undefined) => void",required:!1}],associatedTypes:[{name:"TooltipUtilityProps",file:"projects/ui/src/lib/tooltip/tooltip.ts",props:[{name:"reference",type:"HTMLElement",required:!1},{name:"disabled",description:"Determines if the tooltip is disabled.",type:"boolean",default:"false",required:!1},{name:"label",description:"The tooltip content.",type:"string",required:!1},{name:"placement",description:"The placement of the tooltip.",type:["Extract<Placement","bottom","left","right","top>"],default:"top",required:!1},{name:"showTail",description:"Whether to visually show the arrow (tail).",type:"boolean",default:"true",required:!1}]}],hasContent:!1},{name:"Txt",file:"projects/ui/src/lib/txt/txt.directive.ts",css:"",className:"UITxtDirective",slug:"txt",example:'<div ui-txt="heading-h3">This is a heading</div>',description:"A directive that applies the correct font styles based on the variant and size.",phase:"UXReview",directive:!0,exampleComponent:"UITxtExample",inputs:[{name:"id",description:"The id of the element.",type:"string",required:!1},{name:"inherit",description:"Inherit style and not set font style.",type:"boolean",required:!1,default:"false"},{name:"variant",description:"The variant to use.",type:["body-base","body-large","body-small","body-x-small","display-regular-large","display-regular-medium","display-regular-small","display-semibold-large","display-semibold-medium","display-semibold-small","heading-h1","heading-h2","heading-h3","heading-h4","heading-h5","heading-h6","labels-base","labels-large","labels-small","labels-x-small","subheader-large","subheader-medium","subheader-x-large","subheader-xx-large","subheader-xxx-large"],required:!1,default:"body-base"}],outputs:[],associatedTypes:[],hasContent:!1}],version:"1.2.2",hash:"6142a47",interfaces:{AccordionProps:{singleOpen:{name:"singleOpen",description:"If true only one accordion section can be opened at a time",type:"boolean",default:"true",required:!1}},AccordionSectionProps:{disabled:{name:"disabled",description:"Indicates whether the accordion is disabled.",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},isOpen:{name:"isOpen",description:`If the accordion is initially open.

This is ignored if the accordion section disabled property is true.`,type:"boolean",default:"false",required:!1},leading:{name:"leading",description:`The leading element to display in the accordion header.

May be passed as string or use <span data-leading> for non-string content.`,type:"string",required:!1},subtitle:{name:"subtitle",description:"The subtitle of the accordion.",type:"string",required:!1},title:{name:"title",description:"The title of the accordion.",type:"string",required:!0},trailing:{name:"trailing",description:`The trailing element to display in the accordion header.

May be passed as string or use <span data-trailing> for non-string content.`,type:"string",required:!1}},ArrowKeyNavigationCallbackParams:{activeElementId:{name:"activeElementId",description:"The ID of the currently active element.",type:["string","null"],required:!0},event:{name:"event",type:"KeyboardEvent",required:!0},increment:{name:"increment",type:"number",required:!0},key:{name:"key",type:["Extract<KeyboardEventCode","template literal type>"],required:!0}},AvatarGroupProps:{items:{name:"items",description:"The avatars to display in the group.",type:"AvatarItem[]",required:!0},max:{name:"max",description:`The maximum number of avatars to display before showing the overflow menu.

This is used to limit the number of avatars displayed in the group.

Recommended to set this to a value between 3 and 5 for optimal display.`,type:"number",default:"5",required:!1},size:{name:"size",description:"Size of the avatar group.",type:["large","medium","small","x-large","x-small","xx-large","xxx-large","xxxx-large","xxxxx-large"],default:"small",required:!1},variant:{name:"variant",description:"The variant of the avatar group.",type:["spread","stacked"],default:"stacked",required:!1}},AvatarItem:{color:{name:"color",description:"The color of the avatar.",type:"Exclude<ColorVariant | white>",default:"grey",required:!1},image:{name:"image",description:`The url to the image to display in the avatar.

When provided the image will be displayed instead of the icon or initials.`,type:"string",required:!1},initials:{name:"initials",description:`Customizable initials to display in the avatar limited to 2 characters.

By default, initials are the first letters of the first two words in the name. For a single-word name, only one
initial is shown. Names with three or more words, only the first two initials are used.`,type:"string",required:!1},name:{name:"name",description:"The name of the person or entity represented by the avatar. This is used for accessibility purposes.",type:"string",required:!0},showIcon:{name:"showIcon",description:`Whether to show the icon in the avatar instead of the initials.

If an image is provided, the image will be shown instead of the icon.`,type:"boolean",default:"true",required:!1}},AvatarProps:{color:{name:"color",description:"The color of the avatar.",type:"Exclude<ColorVariant | white>",default:"grey",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},hideTooltip:{name:"hideTooltip",description:"Whether to hide the represented user's name as a tooltip.",type:"boolean",default:"false",required:!1},image:{name:"image",description:`The url to the image to display in the avatar.

When provided the image will be displayed instead of the icon or initials.`,type:"string",required:!1},initials:{name:"initials",description:`Customizable initials to display in the avatar limited to 2 characters.

By default, initials are the first letters of the first two words in the name. For a single-word name, only one
initial is shown. Names with three or more words, only the first two initials are used.`,type:"string",required:!1},name:{name:"name",description:"The name of the person or entity represented by the avatar. This is used for accessibility purposes.",type:"string",required:!0},showIcon:{name:"showIcon",description:`Whether to show the icon in the avatar instead of the initials.

If an image is provided, the image will be shown instead of the icon.`,type:"boolean",default:"true",required:!1},size:{name:"size",description:"The size of the avatar.",type:["large","medium","small","x-large","x-small","xx-large","xxx-large","xxxx-large","xxxxx-large"],default:"small",required:!1}},BadgeItem:{count:{name:"count",description:"The content of the badge. If larger than 99, the badge will display '99+'.",type:"number",default:"1",required:!1},size:{name:"size",description:"The size of the badge.",type:["small","x-small"],default:"small",required:!1},surfaceBorder:{name:"surfaceBorder",description:"Whether the badge should have a border that matches the surface color.",type:"boolean",default:"false",required:!1}},BadgeProps:{color:{name:"color",description:"The color variant of the badge.",type:["primary","secondary"],default:"primary",required:!1},count:{name:"count",description:"The content of the badge. If larger than 99, the badge will display '99+'.",type:"number",default:"1",required:!1},size:{name:"size",description:"The size of the badge.",type:["small","x-small"],default:"small",required:!1},surfaceBorder:{name:"surfaceBorder",description:"Whether the badge should have a border that matches the surface color.",type:"boolean",default:"false",required:!1}},BannerAlertProps:{body:{name:"body",description:"The body of the banner alert.",type:"string",required:!0},callToAction:{name:"callToAction",description:"This property may be undefined or an object containing required CallToActionButton properties.",type:"CallToActionButton",required:!1},elevated:{name:"elevated",description:"Is the alert elevated. If true a drop shadow is added.",type:"boolean",default:"false",required:!1},header:{name:"header",description:"The header of the banner alert.",type:"string",required:!0},variant:{name:"variant",description:"The color variant of the banner alert.",type:["error","informational","success","warning"],default:"informational",required:!1}},BreadcrumbItem:{href:{name:"href",description:"The href of the breadcrumb item.",type:"string",required:!0},label:{name:"label",description:"The label of the breadcrumb item.",type:"string",required:!0},active:{name:"active",description:"Marks the element as active and displays active state theme.",type:"boolean",default:"false",required:!1},ariaDisabled:{name:"ariaDisabled",description:"The aria-disabled attribute for the element.",type:"boolean",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaReadonly:{name:"ariaReadonly",description:"The aria-readonly attribute for the element.",type:"boolean",required:!1},ariaRole:{name:"ariaRole",description:"The ARIA role of the element.",type:["alert","alertdialog","application","article","banner","button","cell","checkbox","columnheader","combobox","complementary","contentinfo","definition","dialog","directory","document","feed","figure","form","grid","gridcell","group","heading","img","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","navigation","none","note","option","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","switch","tab","table","tablist","tabpanel","term","textbox","timer","toolbar","tooltip","tree","treegrid","treeitem","unknown"],required:!1},ariaSelected:{name:"ariaSelected",description:`Indicates the current "selected" state of the list item when used in a selectable context, such as within a
ListItemMenu.`,type:"boolean",required:!1},as:{name:"as",description:"The element type to render as.",type:["a","button","div","label"],default:"div",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},htmlFor:{name:"htmlFor",description:"The htmlFor attribute for the element.",type:"string",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},subText:{name:"subText",description:"The subtext to display in the ListItem.",type:"string",required:!1},tabIndex:{name:"tabIndex",description:"Explicit tabIndex; defaults to 0 when actionable, otherwise -1.",type:"number",required:!1},width:{name:"width",description:`Determines how the ListItem uses horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],default:"fill",required:!1}},BreadcrumbProps:{ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},items:{name:"items",description:`The array of breadcrumb items.

If **less than 2** items are provided, the component will not render.`,type:"BreadcrumbItem[]",required:!0},variant:{name:"variant",description:`Change the color of the link to a subtle color. This is useful for links that are not primary actions, for
example footer menus.`,type:["default","subtle-inverse","subtle"],default:"default",required:!1},scrollLimit:{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollLimitStyle utility.`,type:"number",required:!1}},ButtonProps:{ariaControls:{name:"ariaControls",description:"The aria-controls attribute of the element for accessibility purposes.",type:["string","null"],default:"null",required:!1},ariaExpanded:{name:"ariaExpanded",description:"The aria-expanded attribute of the element for accessibility purposes.",type:["boolean","null"],default:"null",required:!1},ariaHaspopup:{name:"ariaHaspopup",description:"The aria-haspopup attribute of the element for accessibility purposes.",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},class:{name:"class",description:"Additional CSS classes to apply.",type:"string",required:!1},destructive:{name:"destructive",description:"The function of the button is destructive.",type:"boolean",default:"false",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},icon:{name:"icon",description:"The icon of the button.",type:"BspkIcon",required:!1},iconOnly:{name:"iconOnly",description:`When true the button label is hidden and only the icon is shown. When label isn't showing it is used in a tooltip
and as the aria-label prop.

Ignored if \`icon\` is not provided.`,type:"boolean",default:"false",required:!1},label:{name:"label",description:"The label of the button.",type:"string",required:!0},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},size:{name:"size",description:"The size of the button.",type:["large","medium","small","x-small"],default:"medium",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},tooltip:{name:"tooltip",description:"The tool tip text that appears when hovered.",type:"string",required:!1},type:{name:"type",description:"The type of the button element.",type:["button","reset","submit"],default:"button",required:!1},variant:{name:"variant",description:"The color variant of the button.",type:["primary","secondary","tertiary"],default:"primary",required:!1},width:{name:"width",description:`Determines how the button uses horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],default:"hug",required:!1}},CalendarProps:{focusTrap:{name:"focusTrap",description:`When true, keyboard focus is trapped within the calendar component on initial render.

Only applicable if the Calendar is used in a popover like in DatePicker.`,type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the calendar component.",type:"string",required:!1},value:{name:"value",description:"The currently selected date",type:["Date","undefined"],required:!0}},CallToActionButton:{label:{name:"label",description:"The label of the call to action button.",type:"string",required:!0},onClick:{name:"onClick",description:"The callback function for the call to action button.",type:"function",required:!0}},CardProps:{variant:{name:"variant",description:"Determines how the card border will appear.",type:["elevated","outlined"],default:"elevated",required:!1}},CheckboxGroupFieldProps:{errorMessage:{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},helperText:{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},label:{name:"label",description:"The label of the field.",type:"string",required:!0},labelTrailing:{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},required:{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},options:{name:"options",description:"The options for the checkboxes.",type:"CheckboxGroupOption[]",required:!0},selectAll:{name:"selectAll",description:"Whether to show a select all checkbox at the top of the list.",type:"boolean",default:"false",required:!1},selectAllProps:{name:"selectAllProps",description:"The props for the select all checkbox.",type:"SelectAllProps",required:!1},value:{name:"value",description:"The value of the selected checkboxes.",type:"string[]",required:!1}},CheckboxGroupOption:{ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},checked:{name:"checked",description:"Marks the checkbox as checked.",type:"boolean",default:"false",required:!1},description:{name:"description",description:"The description of the option.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},indeterminate:{name:"indeterminate",description:`If the checkbox is partially checked or
[indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

This will override the \`checked\` prop.`,type:"boolean",default:"false",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},label:{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},value:{name:"value",description:"The value of the checkbox.",type:"string",required:!0}},CheckboxGroupProps:{options:{name:"options",description:"The options for the checkboxes.",type:"CheckboxGroupOption[]",required:!0},selectAll:{name:"selectAll",description:"Whether to show a select all checkbox at the top of the list.",type:"boolean",default:"false",required:!1},selectAllProps:{name:"selectAllProps",description:"The props for the select all checkbox.",type:"SelectAllProps",required:!1},value:{name:"value",description:"The value of the selected checkboxes.",type:"string[]",required:!1},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1}},CheckboxOptionProps:{description:{name:"description",description:"The description of the option.",type:"string",required:!1},label:{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},checked:{name:"checked",description:"Marks the checkbox as checked.",type:"boolean",default:"false",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},indeterminate:{name:"indeterminate",description:`If the checkbox is partially checked or
[indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

This will override the \`checked\` prop.`,type:"boolean",default:"false",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1},value:{name:"value",description:"The value of the checkbox.",type:"string",required:!0}},CheckboxProps:{ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},checked:{name:"checked",description:"Marks the checkbox as checked.",type:"boolean",default:"false",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},indeterminate:{name:"indeterminate",description:`If the checkbox is partially checked or
[indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

This will override the \`checked\` prop.`,type:"boolean",default:"false",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1},value:{name:"value",description:"The value of the checkbox.",type:"string",required:!0}},ChipGroupItemProps:{click:{name:"click",description:"Optional click handler for the chip item.",type:"function",required:!1},disabled:{name:"disabled",description:"Is the chip disabled.",type:"boolean",default:"false",required:!1},flat:{name:"flat",description:"Is the chip elevated or flat. If flat the drop shadow is removed.",type:"boolean",default:"false",required:!1},label:{name:"label",description:"The label of the chip.",type:"string",required:!0},leadingIcon:{name:"leadingIcon",description:"The leading icon of the chip.",type:"BspkIcon",required:!1},selected:{name:"selected",description:"Visual indication of whether the chip is currently selected.",type:"boolean",default:"false",required:!1},trailingBadge:{name:"trailingBadge",description:`The trailing Badge for use in the ChipFilter.

If a trailingIcon is provided the Badge will **not** be visible.`,type:"BadgeItem",required:!1},trailingIcon:{name:"trailingIcon",description:`The trailing icon of the chip.

You can only have one of the trailing options, trailingIcon **or** trailingBadge. If both are present the
trailingIcon will be visible.`,type:"BspkIcon",required:!1}},ChipGroupProps:{items:{name:"items",description:"Only Chip components should be used as items.",type:"ChipGroupItemProps[]",required:!0},overflow:{name:"overflow",description:"Controls the overflow behavior of the chip group. If set to `scroll`, the chip group will be scrollable\nhorizontally. If set to `wrap`, the chip group will wrap to multiple lines as needed.",type:["scroll","wrap"],default:"wrap",required:!1}},ChipProps:{disabled:{name:"disabled",description:"Is the chip disabled.",type:"boolean",default:"false",required:!1},flat:{name:"flat",description:"Is the chip elevated or flat. If flat the drop shadow is removed.",type:"boolean",default:"false",required:!1},label:{name:"label",description:"The label of the chip.",type:"string",required:!0},leadingIcon:{name:"leadingIcon",description:"The leading icon of the chip.",type:"BspkIcon",required:!1},selected:{name:"selected",description:"Visual indication of whether the chip is currently selected.",type:"boolean",default:"false",required:!1},trailingBadge:{name:"trailingBadge",description:`The trailing Badge for use in the ChipFilter.

If a trailingIcon is provided the Badge will **not** be visible.`,type:"BadgeItem",required:!1},trailingIcon:{name:"trailingIcon",description:`The trailing icon of the chip.

You can only have one of the trailing options, trailingIcon **or** trailingBadge. If both are present the
trailingIcon will be visible.`,type:"BspkIcon",required:!1}},CommonProps:{active:{name:"active",description:"Marks the element as active and displays active state theme.",type:"boolean",default:"false",required:!1},ariaControls:{name:"ariaControls",description:"The aria-controls attribute of the element for accessibility purposes.",type:["string","null"],default:"null",required:!1},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaDescription:{name:"ariaDescription",description:"The aria-description attribute for the element.",type:"string",required:!1},ariaDisabled:{name:"ariaDisabled",description:"The aria-disabled attribute for the element.",type:"boolean",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaExpanded:{name:"ariaExpanded",description:"The aria-expanded attribute of the element for accessibility purposes.",type:["boolean","null"],default:"null",required:!1},ariaHaspopup:{name:"ariaHaspopup",description:"The aria-haspopup attribute of the element for accessibility purposes.",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},ariaReadonly:{name:"ariaReadonly",description:"The aria-readonly attribute for the element.",type:"boolean",required:!1},ariaRole:{name:"ariaRole",description:"The ARIA role of the element.",type:["alert","alertdialog","application","article","banner","button","cell","checkbox","columnheader","combobox","complementary","contentinfo","definition","dialog","directory","document","feed","figure","form","grid","gridcell","group","heading","img","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","navigation","none","note","option","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","switch","tab","table","tablist","tabpanel","term","textbox","timer","toolbar","tooltip","tree","treegrid","treeitem","unknown"],required:!1},ariaSelected:{name:"ariaSelected",description:`Indicates the current "selected" state of the list item when used in a selectable context, such as within a
ListItemMenu.`,type:"boolean",required:!1},class:{name:"class",description:"Additional CSS classes to apply.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},htmlFor:{name:"htmlFor",description:"The htmlFor attribute for the element.",type:"string",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},ngStyle:{name:"ngStyle",description:"Inline styles object to apply to the element.",type:"CSS.Properties",required:!1},optionValue:{name:"optionValue",description:"The value of the control.",type:"string",required:!1},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},tabIndex:{name:"tabIndex",description:"Explicit tabIndex; defaults to 0 when actionable, otherwise -1.",type:"number",required:!1}},ControlFieldProps:{errorMessage:{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},helperText:{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},label:{name:"label",description:"The label of the field.",type:"string",required:!0},labelTrailing:{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},required:{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1}},CountryCodeItem:{id:{name:"id",type:"string",required:!0},countryCallingCode:{name:"countryCallingCode",type:"string",required:!0},flagIconName:{name:"flagIconName",type:"BspkIcon",required:!0},label:{name:"label",type:"string",required:!0},value:{name:"value",type:"unknown",required:!0}},CountryCodeOption:{countryCallingCode:{name:"countryCallingCode",type:"string",required:!0},flagIconName:{name:"flagIconName",type:"BspkIcon",required:!0},label:{name:"label",type:"string",required:!0},value:{name:"value",type:"unknown",required:!0}},DatePickerFieldProps:{errorMessage:{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},helperText:{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},label:{name:"label",description:"The label of the field.",type:"string",required:!0},labelTrailing:{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},required:{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},closeCalendarOnChange:{name:"closeCalendarOnChange",description:"If the calendar should close when a date is selected.",type:"boolean",default:"true",required:!1},placeholder:{name:"placeholder",description:"The placeholder text for the date input field.",type:"string",default:"mm/dd/yyyy",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:`The currently selected date

String formatted as 'MM/dd/yyyy'.`,type:["Date","string","undefined"],required:!1}},DatePickerProps:{closeCalendarOnChange:{name:"closeCalendarOnChange",description:"If the calendar should close when a date is selected.",type:"boolean",default:"true",required:!1},placeholder:{name:"placeholder",description:"The placeholder text for the date input field.",type:"string",default:"mm/dd/yyyy",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:`The currently selected date

String formatted as 'MM/dd/yyyy'.`,type:["Date","string","undefined"],required:!1},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1}},DialogProps:{ariaDescription:{name:"ariaDescription",description:"The aria-description attribute for the element.",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},container:{name:"container",description:"The container to render the portal content in.",type:["HTMLElement","unknown","null","undefined"],required:!1},disableFocusTrap:{name:"disableFocusTrap",description:"If focus trapping should be disabled. Generally this should not be disabled as dialogs should always trap focus.",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},open:{name:"open",description:"If the dialog should appear.",type:"boolean",default:"false",required:!1},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},placement:{name:"placement",description:"The placement of the dialog on the screen.",type:["bottom","center","left","right","top"],default:"center",required:!1},showScrim:{name:"showScrim",description:"Whether the dialog should have a scrim behind it.",type:"boolean",default:"true",required:!1},widthFull:{name:"widthFull",description:"If the dialog should take the full width of the screen.",type:"boolean",default:"false",required:!1}},DividerProps:{inset:{name:"inset",description:`The inset (margin) of the divider. The value is a number between 0 and 12, which corresponds to the spacing
sizing variables defined in the theme. The inset is applied to the left and right sides of the divider when the
orientation is horizontal, and to the top and bottom when the orientation is vertical.`,type:["0","1","2","3","4","5","6","7","8","9","10","11","12"],default:"0",required:!1},orientation:{name:"orientation",description:"The orientation of the divider.",type:["horizontal","vertical"],default:"horizontal",required:!1},padding:{name:"padding",description:"If the divider padding is shown.",type:"boolean",default:"true",required:!1},thickness:{name:"thickness",description:"The thickness of the divider.",type:["heavy","light"],default:"light",required:!1}},FabProps:{ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},container:{name:"container",description:"The container to render the button in.",type:["local","page"],default:"local",required:!1},icon:{name:"icon",description:"The icon of the button.",type:"BspkIcon",required:!1},iconOnly:{name:"iconOnly",description:`When true the button label is hidden and only the icon is shown. When label isn't showing it is used in a tooltip
and as the aria-label prop.

Ignored if \`icon\` is not provided.`,type:"boolean",default:"false",required:!1},label:{name:"label",description:"The label of the button.",type:"string",required:!1},placement:{name:"placement",description:"The placement of the button on the container.",type:["bottom-left","bottom-right","top-left","top-right"],default:"bottom-right",required:!1},size:{name:"size",description:"The size of the button.",type:["medium","x-large"],default:"medium",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},tooltip:{name:"tooltip",description:"The tool tip text that appears when hovered.",type:"string",required:!1},variant:{name:"variant",description:"The style variant of the button.",type:["neutral","primary","secondary"],default:"primary",required:!1}},FieldControlProps:{ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1}},FieldProps:{controlId:{name:"controlId",description:`The id attribute of the form control rendered in children (e.g., Input, Select, Textarea). Used to associate the
label (htmlFor) with the control for accessibility. Must exactly match the control's id.`,type:"string",required:!0},errorMessage:{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},helperText:{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},label:{name:"label",description:"The label of the field.",type:"string",required:!0},labelTrailing:{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},required:{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1}},FlexProps:{align:{name:"align",description:"The align-items style to apply to the Flex.",type:["baseline","center","end","flex-end","flex-start","start","stretch"],default:"flex-start",required:!1},direction:{name:"direction",description:"The flex-direction style to apply to the Flex.",type:["column-reverse","column","row-reverse","row"],default:"row",required:!1},full:{name:"full",description:"If true the Flex will take up the full width of its container.",type:"boolean",required:!1},gap:{name:"gap",description:"The gap between the children.",type:["SizingPixels","auto"],required:!1},justify:{name:"justify",description:"The justification style to apply to the Flex.",type:["around","between","center","end","evenly","flex-end","flex-start","space-around","space-between","space-evenly","start"],default:"flex-start",required:!1},padding:{name:"padding",description:"The padding to apply to the Flex.",type:["SizingPixels","SizingPixels[]"],required:!1},wrap:{name:"wrap",description:"The flex-wrap style to apply to the Flex.",type:["nowrap","wrap-reverse","wrap"],default:"nowrap",required:!1}},FloatingProps:{props:{name:"props",type:"Omit<FloatingUtilityProps | floating>",required:!0}},FloatingUtilityProps:{arrow:{name:"arrow",description:"The arrow element for the floating element.",type:["HTMLElement","null"],required:!1},floating:{name:"floating",description:"The floating element to be positioned.",type:["HTMLElement","null"],required:!1},offsetOptions:{name:"offsetOptions",description:"The offset options for the floating element.",type:"OffsetOptions",default:"0",required:!1},placement:{name:"placement",description:`The preferred placement of the floating element.

This determines where the floating element will be positioned relative to the reference element.`,type:["bottom","center","left","right","top"],default:"bottom-start",required:!1},reference:{name:"reference",description:"The reference element for positioning.",type:["HTMLElement","null"],required:!1},refWidth:{name:"refWidth",description:"When set to true, the width of the floating element will match the width of the reference element.",type:"boolean",default:"false",required:!1},strategy:{name:"strategy",description:`The positioning strategy ('absolute' or 'fixed').

When set to 'fixed', the floating element will be positioned relative to the viewport.

When set to 'absolute', the floating element will be positioned relative to the nearest positioned ancestor.`,type:"Strategy",default:"fixed",required:!1}},FocusTrapProps:{autoFocus:{name:"autoFocus",description:"Auto-focus first focusable child on enable.",type:"boolean",default:"true",required:!1},restoreFocus:{name:"restoreFocus",description:"Restore focus to previously focused element on disable/destroy.",type:"boolean",default:"true",required:!1},"ui-focus-trap":{name:"ui-focus-trap",description:"Enable or disable the focus trap.",type:"boolean",required:!1}},IconProps:{icon:{name:"icon",description:"The icon to display from the BSPK icon library.",type:"BspkIcon",required:!0},width:{name:"width",description:"Optional width for the icon.",type:"string",default:"&#39;24&#39;",required:!1}},InlineAlertProps:{id:{name:"id",description:"The id of the inline alert.",type:"string",required:!1},label:{name:"label",description:"The content of the inline alert.",type:"string",required:!0},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},variant:{name:"variant",description:"The color variant of the inline alert.",type:["error","informational","success","warning"],default:"informational",required:!1}},InputFieldProps:{autoComplete:{name:"autoComplete",description:"Specifies if user agent has any permission to provide automated assistance in filling out form field values",type:["off","on"],default:"off",required:!1},inputMode:{name:"inputMode",description:"The inputmode attribute for the input.",type:["decimal","email","none","numeric","search","tel","text","url"],required:!1},leading:{name:"leading",description:`The leading element to display in the field.

May be passed as string or use <span data-leading> for non-string content.`,type:"string",required:!1},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},placeholder:{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},showClearButton:{name:"showClearButton",description:"Specifies if the clear button should be shown. This should almost always be true, but can be set to false.",type:"boolean",default:"true",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},trailing:{name:"trailing",description:`The trailing element to display in the field.

May be passed as string or use <span data-trailing> for non-string content.`,type:"string",required:!1},type:{name:"type",description:"The type of the input.",type:["number","password","tel","text"],default:"text",required:!1},value:{name:"value",description:"The value of the input field.",type:"string",required:!1},errorMessage:{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},helperText:{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},label:{name:"label",description:"The label of the field.",type:"string",required:!0},labelTrailing:{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},required:{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1}},InputNumberFieldProps:{align:{name:"align",description:"The alignment of the input box. Centered between the plus and minus buttons or to the left of the buttons.",type:["center","left"],default:"center",required:!1},max:{name:"max",description:"Defines the [maximum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max) value that is accepted.",type:"number",required:!1},min:{name:"min",description:"Defines the [minimum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min) value that is accepted.",type:"number",default:"0",required:!1},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},step:{name:"step",description:"The amount to increment or decrement the value by when the (+) or (-) buttons are pressed.",type:"number",default:"1",required:!1},value:{name:"value",description:`The value of the number input.

While the value is a string, it is recommended to only use numerical values. The component will attempt to parse
the string to a number and will ignore non-numerical input. The value is clamped to the min and max values if
they are provided.`,type:"string",required:!1},errorMessage:{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},helperText:{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},label:{name:"label",description:"The label of the field.",type:"string",required:!0},labelTrailing:{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},required:{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1}},InputNumberProps:{align:{name:"align",description:"The alignment of the input box. Centered between the plus and minus buttons or to the left of the buttons.",type:["center","left"],default:"center",required:!1},max:{name:"max",description:"Defines the [maximum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max) value that is accepted.",type:"number",required:!1},min:{name:"min",description:"Defines the [minimum](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min) value that is accepted.",type:"number",default:"0",required:!1},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},step:{name:"step",description:"The amount to increment or decrement the value by when the (+) or (-) buttons are pressed.",type:"number",default:"1",required:!1},value:{name:"value",description:`The value of the number input.

While the value is a string, it is recommended to only use numerical values. The component will attempt to parse
the string to a number and will ignore non-numerical input. The value is clamped to the min and max values if
they are provided.`,type:"string",required:!1},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1}},InputPhoneFieldProps:{errorMessage:{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},helperText:{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},label:{name:"label",description:"The label of the field.",type:"string",required:!0},labelTrailing:{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},required:{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},disableFormatting:{name:"disableFormatting",description:"Disables formatting of the phone number input in the UI. values returned by `valueChange` are always unformatted.",type:"boolean",required:!1},initialCountryCode:{name:"initialCountryCode",description:`The default country code to select when the component is rendered. If not provided, it will attempt to guess
based on the user's locale. If the guessed country code is not supported, it will default to 'US'. Based on
[ISO](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) 2-digit country codes.`,type:"unknown",required:!1},size:{name:"size",description:"The size of the component",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:'The value of the input phone field. This should be an unformatted phone number string (e.g. "4155552671").',type:"string",required:!1}},InputPhoneProps:{disableFormatting:{name:"disableFormatting",description:"Disables formatting of the phone number input in the UI. values returned by `valueChange` are always unformatted.",type:"boolean",required:!1},initialCountryCode:{name:"initialCountryCode",description:`The default country code to select when the component is rendered. If not provided, it will attempt to guess
based on the user's locale. If the guessed country code is not supported, it will default to 'US'. Based on
[ISO](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) 2-digit country codes.`,type:"unknown",required:!1},size:{name:"size",description:"The size of the component",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:'The value of the input phone field. This should be an unformatted phone number string (e.g. "4155552671").',type:"string",required:!1},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1},scrollLimit:{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollLimitStyle utility.`,type:"number",required:!1}},InputProps:{autoComplete:{name:"autoComplete",description:"Specifies if user agent has any permission to provide automated assistance in filling out form field values",type:["off","on"],default:"off",required:!1},inputMode:{name:"inputMode",description:"The inputmode attribute for the input.",type:["decimal","email","none","numeric","search","tel","text","url"],required:!1},leading:{name:"leading",description:`The leading element to display in the field.

May be passed as string or use <span data-leading> for non-string content.`,type:"string",required:!1},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},placeholder:{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},showClearButton:{name:"showClearButton",description:"Specifies if the clear button should be shown. This should almost always be true, but can be set to false.",type:"boolean",default:"true",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},trailing:{name:"trailing",description:`The trailing element to display in the field.

May be passed as string or use <span data-trailing> for non-string content.`,type:"string",required:!1},type:{name:"type",description:"The type of the input.",type:["number","password","tel","text"],default:"text",required:!1},value:{name:"value",description:"The value of the input field.",type:"string",required:!1},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1}},KeyNavigationProps:{props:{name:"props",type:"KeyNavigationUtilityProps",required:!0}},KeyNavigationUtilityProps:{activeElementId:{name:"activeElementId",description:"The ID of the currently active element.",type:["string","null"],required:!0},callback:{name:"callback",description:"An optional callback function that is invoked when an arrow key is pressed. This function receives the key name,\nthe keyboard event, and the next active element ID. If the function returns `true`, the default navigation\nbehavior is prevented; if it returns `false` or is not provided, the default behavior proceeds.",type:"function",required:!1},defaultActiveId:{name:"defaultActiveId",description:"The ID of the element that should be active by default. If not provided, the first ID in the `ids` array will be\nused.",type:"string",required:!1},ids:{name:"ids",description:"An array of string IDs representing the navigable elements. These IDs should correspond to the `id` attributes of\nthe elements in the DOM. Ensure the elements are not disabled.",type:"string[]",required:!1},increments:{name:"increments",description:"Optional configuration to set navigation direction increments.",type:"Record<ArrowKeyNames | number>",required:!1}},LinkProps:{disabled:{name:"disabled",description:"Determines if the element is disabled.",type:"boolean",required:!1},href:{name:"href",description:"The href of the link.",type:["string","null","undefined"],required:!0},size:{name:"size",description:"The size of the link.",type:["base","large","small"],default:"base",required:!1},target:{name:"target",description:"The target of the link. If the `trailingIcon` is set to `external`, this will default to `_blank`.",type:["_blank","_parent","_self","_top"],default:"_self",required:!1},trailingIcon:{name:"trailingIcon",description:"The variant of the link. Controls the icon that is displayed and link target.",type:["chevron","external","link"],required:!1},variant:{name:"variant",description:`Change the color of the link to a subtle color. This is useful for links that are not primary actions, for
example footer menus.`,type:["default","subtle-inverse","subtle"],default:"default",required:!1}},ListItemProps:{active:{name:"active",description:"Marks the element as active and displays active state theme.",type:"boolean",default:"false",required:!1},ariaDisabled:{name:"ariaDisabled",description:"The aria-disabled attribute for the element.",type:"boolean",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaReadonly:{name:"ariaReadonly",description:"The aria-readonly attribute for the element.",type:"boolean",required:!1},ariaRole:{name:"ariaRole",description:"The ARIA role of the element.",type:["alert","alertdialog","application","article","banner","button","cell","checkbox","columnheader","combobox","complementary","contentinfo","definition","dialog","directory","document","feed","figure","form","grid","gridcell","group","heading","img","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","navigation","none","note","option","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","switch","tab","table","tablist","tabpanel","term","textbox","timer","toolbar","tooltip","tree","treegrid","treeitem","unknown"],required:!1},ariaSelected:{name:"ariaSelected",description:`Indicates the current "selected" state of the list item when used in a selectable context, such as within a
ListItemMenu.`,type:"boolean",required:!1},as:{name:"as",description:"The element type to render as.",type:["a","button","div","label"],default:"div",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},href:{name:"href",description:"The [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href) of the list item.\n\nIf the href is provided, the ListItem will render as an anchor element (`<a>`).",type:"string",required:!1},htmlFor:{name:"htmlFor",description:"The htmlFor attribute for the element.",type:"string",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},label:{name:"label",description:"The label to display in the ListItem.",type:"string",required:!0},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},subText:{name:"subText",description:"The subtext to display in the ListItem.",type:"string",required:!1},tabIndex:{name:"tabIndex",description:"Explicit tabIndex; defaults to 0 when actionable, otherwise -1.",type:"number",required:!1},width:{name:"width",description:`Determines how the ListItem uses horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],default:"fill",required:!1}},MenuProps:{ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaRole:{name:"ariaRole",description:"The ARIA role of the element.",type:["alert","alertdialog","application","article","banner","button","cell","checkbox","columnheader","combobox","complementary","contentinfo","definition","dialog","directory","document","feed","figure","form","grid","gridcell","group","heading","img","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","navigation","none","note","option","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","switch","tab","table","tablist","tabpanel","term","textbox","timer","toolbar","tooltip","tree","treegrid","treeitem","unknown"],required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},width:{name:"width",description:"The width of the menu.",type:"unknown",required:!1}},ModalCallToAction:{destructive:{name:"destructive",type:"boolean",required:!1},label:{name:"label",type:"string",required:!0},onClick:{name:"onClick",type:"function",required:!0}},ModalProps:{buttonFormat:{name:"buttonFormat",description:"The format of the buttons in the footer. Vertical applies only on screen widths less than or equal to 640px.",type:["horizontal","vertical"],default:"horizontal",required:!1},callToAction:{name:"callToAction",description:"The call to action button to display in the footer of the modal.",type:"ModalCallToAction",required:!1},cancelButton:{name:"cancelButton",description:`Whether to show the cancel button in the footer.

Providing a string will set the label of the cancel button.`,type:["boolean","string"],default:"false",required:!1},container:{name:"container",description:"The container to render the portal content in.",type:["HTMLElement","unknown","null","undefined"],required:!1},description:{name:"description",description:`Modal description. Used for the
[aria-description](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
attribute.`,type:"string",required:!0},disableFocusTrap:{name:"disableFocusTrap",description:"If focus trapping should be disabled. Generally this should not be disabled as dialogs should always trap focus.",type:"boolean",default:"false",required:!1},header:{name:"header",description:"Modal header.",type:"string",required:!0},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},open:{name:"open",description:"If the dialog should appear.",type:"boolean",default:"false",required:!1},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1}},OutsideClickProps:{props:{name:"props",type:"OutsideClickUtilityProps",required:!0}},OutsideClickUtilityProps:{callback:{name:"callback",description:"The callback function to execute on outside click.",type:"function",required:!0},disabled:{name:"disabled",description:"Whether the outside click detection is disabled.",type:"boolean",default:"false",required:!1},elements:{name:"elements",description:`The elements to monitor for outside clicks.

If used in the directive, this can be left empty and the directive's host element will be used.`,type:"HTMLElement[]",required:!1},handleTabs:{name:"handleTabs",description:"Whether to handle 'Tab' key presses as outside clicks.",type:"boolean",default:"false",required:!1}},PaginationProps:{numPages:{name:"numPages",description:`The number of pages to display in the pagination component.

If there is only one page, the component will not render.`,type:"number",default:"2",required:!0},value:{name:"value",description:"The current page number.",type:"number",default:"1",required:!0}},PortalProps:{container:{name:"container",description:"The container to render the portal content in.",type:["HTMLElement","unknown","null","undefined"],required:!1}},RadioGroupFieldProps:{errorMessage:{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},helperText:{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},label:{name:"label",description:"The label of the field.",type:"string",required:!0},labelTrailing:{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},required:{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},options:{name:"options",description:"The options for the radios.",type:"RadioGroupOption[]",required:!0},value:{name:"value",description:"The value of the selected radio.",type:"string",required:!1}},RadioGroupOption:{checked:{name:"checked",description:"Marks the radio as checked.",type:"boolean",default:"false",required:!1},description:{name:"description",description:"The description of the option.",type:"string",required:!1},disabled:{name:"disabled",type:"RadioOptionProps",required:!1},label:{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0},value:{name:"value",description:"The value of the radio input.",type:"string",required:!0}},RadioGroupProps:{options:{name:"options",description:"The options for the radios.",type:"RadioGroupOption[]",required:!0},value:{name:"value",description:"The value of the selected radio.",type:"string",required:!1},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1}},RadioOptionProps:{description:{name:"description",description:"The description of the option.",type:"string",required:!1},label:{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0},checked:{name:"checked",description:"Marks the radio as checked.",type:"boolean",default:"false",required:!1},value:{name:"value",description:"The value of the radio input.",type:"string",required:!0}},RadioProps:{checked:{name:"checked",description:"Marks the radio as checked.",type:"boolean",default:"false",required:!1},value:{name:"value",description:"The value of the radio input.",type:"string",required:!0},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1}},ScrimProps:{contained:{name:"contained",description:"If the scrim should be contained within a parent element, or fixed to the viewport.",type:"boolean",required:!1},owner:{name:"owner",description:"Identifies the parent component. Helps with styling, debugging, and/or testing purposes.",type:"string",required:!1},visible:{name:"visible",description:"Whether the Scrim should be visible.",type:"boolean",default:"true",required:!1}},ScrollLimitStyleProps:{scrollLimit:{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollLimitStyle utility.`,type:"number",required:!1}},SegmentedControlOption:{disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},icon:{name:"icon",description:"The icon to display on the left side of the tab.",type:"BspkIcon",required:!1},iconSelected:{name:"iconSelected",description:"The icon to display on the left side of the tab when the tab is currently selected.",type:"BspkIcon",required:!1},id:{name:"id",description:"Optional id. If not provided, one is generated.",type:"string",required:!1},label:{name:"label",description:"The label of the tab. This is the text that will be displayed on the tab.",type:"string",required:!0},value:{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0}},SegmentedControlProps:{iconsOnly:{name:"iconsOnly",description:`Determines if the labels of the options should be displayed. If icons are not provided for every option this is
ignored and labels are shown.`,type:"boolean",default:"false",required:!1}},SelectAllProps:{ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},description:{name:"description",description:"The description of the option.",type:"string",required:!1},label:{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0}},SelectFieldProps:{items:{name:"items",description:"Array of options to display in the select",type:"SelectOption[]",required:!0},menuWidth:{name:"menuWidth",description:`The width of the menu.

If not provided, the menu will match the width of the select control.`,type:"unknown",required:!1},placeholder:{name:"placeholder",description:"Placeholder for the select",type:"string",default:"Select one",required:!1},scrollLimit:{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollListItemsStyle utility.`,type:"number",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:"The value of the select control.",type:"string",required:!1},errorMessage:{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},helperText:{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},label:{name:"label",description:"The label of the field.",type:"string",required:!0},labelTrailing:{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},required:{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1}},SelectOption:{disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},label:{name:"label",type:"string",required:!0},value:{name:"value",type:"string",required:!0}},SelectProps:{items:{name:"items",description:"Array of options to display in the select",type:"SelectOption[]",required:!0},menuWidth:{name:"menuWidth",description:`The width of the menu.

If not provided, the menu will match the width of the select control.`,type:"unknown",required:!1},placeholder:{name:"placeholder",description:"Placeholder for the select",type:"string",default:"Select one",required:!1},scrollLimit:{name:"scrollLimit",description:`The maximum number of ListItems to show before scrolling is enabled.

Used in conjunction with scrollListItemsStyle utility.`,type:"number",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:"The value of the select control.",type:"string",required:!1},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1}},SwitchOptionProps:{description:{name:"description",description:"The description of the option.",type:"string",required:!1},label:{name:"label",description:"The label of the option. Also used as the aria-label of the control.",type:"string",required:!0},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},checked:{name:"checked",description:"Marks the control as checked.",type:"boolean",default:"false",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},value:{name:"value",description:"The value of the switch.",type:"string",required:!0}},SwitchProps:{ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},checked:{name:"checked",description:"Marks the control as checked.",type:"boolean",default:"false",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},value:{name:"value",description:"The value of the switch.",type:"string",required:!0}},TabGroupProps:{showTrail:{name:"showTrail",description:`When width is 'hug' this determines if the trailing underline should be showing. When width is 'fill' this
property isn't applicable.`,type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},label:{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},options:{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},size:{name:"size",description:"The size of the tabs.",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},width:{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],default:"hug",required:!1}},TableCellProps:{row:{name:"row",description:"The row data for the current cell.",type:"R",required:!0},size:{name:"size",description:"The size of the table.",type:["large","medium","small","x-large"],required:!0}},TableColumn:{align:{name:"align",description:"The horizontal alignment of the column. This is used to set the text alignment of the column.",type:["center","left","right"],default:"left",required:!1},component:{name:"component",description:`A custom component to use for rendering the cell values in the column.

This component will receive the following inputs:

- \`row\`: The current row data.
- \`size\`: The table size.

Use a component that extends \`UITableCell<R>\`.`,type:"Type<UITableCell<R>>",required:!1},formatter:{name:"formatter",description:`A formatter function for the cell values in the column.

This function is called for each cell in the column and can be used to customize the display of the cell value.`,type:"TableCellValueFormatter<R>",required:!1},hideHeader:{name:"hideHeader",description:"Whether to hide the header for this column.",type:"boolean",default:"false",required:!1},key:{name:"key",description:"The key of the column. This is used to access the data in the row.",type:"string",required:!0},label:{name:"label",description:"The label of the column. This is used to display the column header.",type:"string",required:!0},sort:{name:"sort",description:"The sorting function for the column.\n\nThis can be a custom sorting function or one of the built-in sorting functions:\n\n`string`, `boolean`, `date`, or `number`.\n\nIf unspecified, the column will not be sortable.",type:["BuiltInColumnSorters","TableColumnSortingFn"],required:!1},valign:{name:"valign",description:"The vertical alignment of the column. This is used to set the text alignment of the column.",type:["bottom","center","top"],default:"center",required:!1},width:{name:"width",description:`The width of the column. This is used to set the width of the column.

Used to set the value of
[grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)`,type:"string",default:"1fr",required:!1}},TableExampleData:{columns:{name:"columns",type:"TableColumn<R>[]",required:!0},data:{name:"data",type:"R[]",required:!0}},TableProps:{columns:{name:"columns",description:"The column definitions of the table.",type:"TableColumn<R>[]",required:!0},data:{name:"data",description:`The data of the table.

Array<TableRow>`,type:"R[]",required:!0},pageSize:{name:"pageSize",description:`The number of rows per page.

If the number of rows exceeds the page size, pagination controls will be displayed.`,type:"number",default:"10",required:!1},size:{name:"size",description:"The size of the table.",type:["large","medium","small","x-large"],default:"medium",required:!1},title:{name:"title",description:"The title of the table.",type:"string",required:!1}},TableRow:{id:{name:"id",type:"string",required:!0}},TabListBaseProps:{id:{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},label:{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},options:{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},size:{name:"size",description:"The size of the tabs.",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},width:{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],default:"hug",required:!1}},TabListProps:{iconsOnly:{name:"iconsOnly",description:`Determines if the labels of the options should be displayed. If icons are not provided for every option this is
ignored and labels are shown.`,type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the tab utility, used for accessibility.",type:"string",required:!1},label:{name:"label",description:"The label for the tab utility, used for accessibility.",type:"string",required:!0},options:{name:"options",description:`The tabs to display.

If **less than 2** items are provided, the component will not render.`,type:"O[]",required:!0},size:{name:"size",description:"The size of the tabs.",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0},width:{name:"width",description:`Determines how the tab options use horizontal space.

If set to 'fill', options expand to fill the container's width.

If set to 'hug', options only take up as much space as the content requires.`,type:["fill","hug"],default:"hug",required:!1}},TabOption:{badge:{name:"badge",description:"The badge count to display on the tab",type:"number",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},icon:{name:"icon",description:"The icon to display on the left side of the tab.",type:"BspkIcon",required:!1},iconSelected:{name:"iconSelected",description:"The icon to display on the left side of the tab when the tab is currently selected.",type:"BspkIcon",required:!1},id:{name:"id",description:"Optional id. If not provided, one is generated.",type:"string",required:!1},label:{name:"label",description:"The label of the tab. This is the text that will be displayed on the tab.",type:"string",required:!0},value:{name:"value",description:`The value of the tab sent to valueChange when selected.

If not provided, the label will be used as the value.`,type:"string",required:!0}},TagProps:{color:{name:"color",description:"The color of the tag.",type:"unknown",default:"grey",required:!1},label:{name:"label",description:"The label of the tag.",type:"string",required:!0},size:{name:"size",description:"The size of the tag.",type:["small","x-small"],default:"small",required:!1},variant:{name:"variant",description:"The display variant of the tag.",type:["corner-wrap","flat","pill"],default:"flat",required:!1}},TextareaFieldProps:{errorMessage:{name:"errorMessage",description:"Displays an error message and marks the field as invalid.",type:"string",required:!1},helperText:{name:"helperText",description:`This text provides additional context or instructions for the field.

If an errorMessage is present, the helperText will not be displayed.`,type:"string",required:!1},label:{name:"label",description:"The label of the field.",type:"string",required:!0},labelTrailing:{name:"labelTrailing",description:"The trailing element of the label.",type:"string",required:!1},required:{name:"required",description:"Marks the field as required.",type:"boolean",required:!1},style:{name:"style",description:`Inline styles to apply to the element.

Allows for CSS variables to be passed in as well.`,type:"string",required:!1},maxLength:{name:"maxLength",description:"The maximum number of characters that the field will accept.",type:"number",required:!1},maxRows:{name:"maxRows",description:`The maximum number of rows that the textarea will show.

When set the textarea will automatically adjust its height to fit the content up to this limit.`,type:"number",default:"10",required:!1},minRows:{name:"minRows",description:"The minimum number of rows that the textarea will show.",type:"number",default:"3",required:!1},placeholder:{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:"The value of the textarea field.",type:"string",required:!1}},TextareaProps:{maxLength:{name:"maxLength",description:"The maximum number of characters that the field will accept.",type:"number",required:!1},maxRows:{name:"maxRows",description:`The maximum number of rows that the textarea will show.

When set the textarea will automatically adjust its height to fit the content up to this limit.`,type:"number",default:"10",required:!1},minRows:{name:"minRows",description:"The minimum number of rows that the textarea will show.",type:"number",default:"3",required:!1},placeholder:{name:"placeholder",description:"The placeholder of the field.",type:"string",required:!1},size:{name:"size",description:"The size of the element.",type:["large","medium","small"],default:"medium",required:!1},value:{name:"value",description:"The value of the textarea field.",type:"string",required:!1},ariaDescribedBy:{name:"ariaDescribedBy",type:"string",required:!1},ariaErrorMessage:{name:"ariaErrorMessage",type:"string",required:!1},ariaLabel:{name:"ariaLabel",description:`The aria-label for the element.

This is used to provide an accessible name for the element when a visible label is not present.

Ensure this is provided when using the element in isolation to maintain accessibility.`,type:"string",required:!1},ariaLabelledBy:{name:"ariaLabelledBy",description:"The aria-labelledby attribute for the control.",type:"string",required:!1},disabled:{name:"disabled",description:"Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).",type:"boolean",default:"false",required:!1},id:{name:"id",description:"The id of the element. If not provided one will be generated.",type:"string",required:!1},invalid:{name:"invalid",description:`Indicates that the element is in an invalid state and displays the error theme.

If set to true, an accompanying error message should be provided.`,type:"boolean",default:"false",required:!1},name:{name:"name",description:"The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.",type:"string",required:!0},readOnly:{name:"readOnly",description:"Determines if the element is [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).",type:"boolean",default:"false",required:!1},required:{name:"required",description:"Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).",type:"boolean",default:"false",required:!1}},TooltipProps:{disabled:{name:"disabled",description:"Determines if the tooltip is disabled.",type:"boolean",default:"false",required:!1},label:{name:"label",description:"The tooltip content.",type:"string",required:!1},placement:{name:"placement",description:"The placement of the tooltip.",type:["Extract<Placement","bottom","left","right","top>"],default:"top",required:!1},showTail:{name:"showTail",description:"Whether to visually show the arrow (tail).",type:"boolean",default:"true",required:!1}},TooltipUtilityProps:{reference:{name:"reference",type:"HTMLElement",required:!1},disabled:{name:"disabled",description:"Determines if the tooltip is disabled.",type:"boolean",default:"false",required:!1},label:{name:"label",description:"The tooltip content.",type:"string",required:!1},placement:{name:"placement",description:"The placement of the tooltip.",type:["Extract<Placement","bottom","left","right","top>"],default:"top",required:!1},showTail:{name:"showTail",description:"Whether to visually show the arrow (tail).",type:"boolean",default:"true",required:!1}},TxtProps:{id:{name:"id",description:"The id of the element.",type:"string",required:!1},inherit:{name:"inherit",description:"Inherit style and not set font style.",type:"boolean",default:"false",required:!1},variant:{name:"variant",description:"The variant to use.",type:["body-base","body-large","body-small","body-x-small","display-regular-large","display-regular-medium","display-regular-small","display-semibold-large","display-semibold-medium","display-semibold-small","heading-h1","heading-h2","heading-h3","heading-h4","heading-h5","heading-h6","labels-base","labels-large","labels-small","labels-x-small","subheader-large","subheader-medium","subheader-x-large","subheader-xx-large","subheader-xxx-large"],default:"body-base",required:!1}},UITabListProps:{component:{name:"component",description:`The component identifier.

Usually`,type:"string",required:!0}},UtilityBase:{props:{name:"props",type:"Signal<PropsType>",required:!0}}}};function Vl(t,n){t&1&&le(0,"app-nav-contents")}var Fn=class t{IconSearch=_r;version=Vi.version;hash=Vi.hash;toggleDarkModeLabel=Wt(()=>this.themeService.value()==="light"?"Enable dark mode":"Disable dark mode");toggleDarkModeIcon=Wt(()=>this.themeService.value()==="light"?Ur:Or);brand=Wt(()=>this.brandService.value());brandItems=Object.values([...ro,...oo]).map(n=>({label:n.title,value:n.slug}));searchModalOpen=B(!1);title=B("demo");themeService=c(Pr);router=c(ae);route=c(W);host=c(Ie);document=c(E);brandService=c(Un);routeSubscription=null;fragmentSubscription=null;constructor(){$t(()=>{let n=this.document.querySelector(`[data-syntax-theme='${this.themeService.value()}']`),e=this.document.querySelector(`[data-syntax-theme]:not([data-syntax-theme='${this.themeService.value()}'])`);n?.removeAttribute("disabled"),e?.setAttribute("disabled","true")})}get location(){return globalThis.location}handleBrandChange(n){this.brandService.value.set(n||"anywhere")}toggleDarkMode(){this.themeService.toggle()}ngOnInit(){this.routeSubscription=this.router.events.subscribe(()=>{window.scrollTo({top:0,behavior:"instant"})}),this.fragmentSubscription=this.route.fragment.subscribe(n=>{let e=this.document.querySelector(`[id="${n}"]`);n&&e&&requestAnimationFrame(()=>e.scrollIntoView({behavior:"smooth"}))})}onDestroy(){this.routeSubscription?.unsubscribe(),this.fragmentSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-root"]],decls:23,vars:8,consts:[["data-body-width","true","data-navbar","true"],["data-backdrop","true"],["data-header","true"],["data-brand","true"],["data-name","true","href","/bspk-ui-ngx","data-bspk","link","data-subtle","true","target","_self"],["data-navbar-right",""],["variant","secondary",3,"click","icon","label","iconOnly"],["data-brand-dropdown",""],["aria-label","Brand","id","brand-dropdown","name","brand",2,"width","280px",3,"valueChange","items","value"],["data-navigation",""],["data-main",""],["data-component-page","","data-page",""]],template:function(e,i){e&1&&(C(0,"div",0),le(1,"span",1),C(2,"div",2)(3,"h2",3)(4,"a",4)(5,"span"),L(6,"BSPK"),k()(),C(7,"span"),L(8,"NGX"),k(),C(9,"span"),L(10),k(),C(11,"span"),L(12),k()()(),C(13,"div",5)(14,"ui-button",6),fe("click",function(){return i.toggleDarkMode()}),k(),C(15,"div",7)(16,"ui-select",8),fe("valueChange",function(a){return i.handleBrandChange(a)}),k()()()(),C(17,"nav",9),le(18,"app-nav"),k(),C(19,"main",10)(20,"div",11),le(21,"router-outlet"),k(),rt(22,Vl,1,0,"app-nav-contents"),k()),e&2&&(z(10),me("Version: ",i.version),z(2),me("(",i.hash,")"),z(2),J("icon",i.toggleDarkModeIcon())("label",i.toggleDarkModeLabel())("iconOnly",!0),z(2),J("items",i.brandItems)("value",i.brand()),z(6),at(22))},dependencies:[zt,jn,Lr,Bn,Gr],encapsulation:2})};var uo={providers:[ar(),kr({eventCoalescing:!0}),Gi(_n),xi()]};vi(Fn,uo).catch(t=>{console.error(t)});
