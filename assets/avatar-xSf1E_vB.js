import{n as Dt,j as se,aT as Fe,$ as ye,ad as jt,Y as W,r as R,as as Nt,al as lt,_ as At,o as It,q as Wt,f as D,aF as ut,an as ct,ae as he,ai as Ye,au as Vt,d as be,c as we,aD as Ut,O as le,ag as Ht,J as x,D as U,P as fe,C as xt,t as ft,E as Ft,Q as dt,K as vt,af as Yt,U as V,a4 as G,W as Xt,X as qt,av as Kt,w as Oe,g as Se,a0 as pt,a7 as Jt,F as Qt,a as te,aM as Zt,N as ie,S as Xe,V as Gt,aJ as _t,aU as er,ac as qe,a3 as tr,aV as Ke,a2 as rr,z as nr,B as or}from"./useDesktop-46-aLWkN.js";import{u as ar}from"./shared-CLv3fYw9.js";import{s as ir}from"./index-D91VOXSH.js";import{s as sr}from"./useAppRouter-Dn8Aqvhs.js";const q=[];function lr(e,t){const{uid:r}=Dt();se(e,l=>{l&&!s(r)?o():setTimeout(()=>{Fe(q,s(r))})}),ye(()=>{e()&&o()}),jt(()=>{Fe(q,s(r))});function n(){return q.length===0?!0:(q.sort((l,a)=>l.zIndex.value-a.zIndex.value),q[q.length-1].uid===r)}function o(){s(r)||q.push({uid:r,zIndex:t})}function s(l){return q.find(a=>a.uid===l)}return{onStackTop:n}}const ht={show:Boolean,disabled:Boolean,trigger:{type:String,default:"click"},reference:[String,Object],placement:{type:String,default:"cover-top-start"},strategy:{type:String,default:"absolute"},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:[String,Object,Boolean],default:"body"},sameWidth:Boolean,elevation:{type:[Boolean,String,Number],default:!0},defaultStyle:{type:Boolean,default:!0},popoverClass:String,closeOnClickReference:Boolean,closeOnKeyEscape:{type:Boolean,default:!0},onOpen:W(),onOpened:W(),onClose:W(),onClosed:W(),onClickOutside:W(),"onUpdate:show":W(),cascadeOptimization:Boolean};var F="top",Q="bottom",_="right",K="left",Re="auto",Pe=[F,Q,_,K],ke="start",de="end",ur="clippingParents",mt="viewport",ae="popper",cr="reference",Je=Pe.reduce(function(e,t){return e.concat([t+"-"+ke,t+"-"+de])},[]),gt=[].concat(Pe,[Re]).reduce(function(e,t){return e.concat([t,t+"-"+ke,t+"-"+de])},[]),fr="beforeRead",dr="read",vr="afterRead",pr="beforeMain",hr="main",mr="afterMain",gr="beforeWrite",yr="write",br="afterWrite",wr=[fr,dr,vr,pr,hr,mr,gr,yr,br];function j(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function H(e){return e?(e.nodeName||"").toLowerCase():null}function Y(e){return j(e).getComputedStyle(e)}function ee(e){var t=j(e).Element;return e instanceof t||e instanceof Element}function I(e){var t=j(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ze(e){if(typeof ShadowRoot>"u")return!1;var t=j(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Or(e){return["table","td","th"].indexOf(H(e))>=0}function Z(e){return((ee(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ce(e){return H(e)==="html"?e:e.assignedSlot||e.parentNode||(ze(e)?e.host:null)||Z(e)}function Le(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Qe(e){return!I(e)||Y(e).position==="fixed"?null:e.offsetParent}function Sr(e){var t=/firefox/i.test(Le()),r=/Trident/i.test(Le());if(r&&I(e)){var n=Y(e);if(n.position==="fixed")return null}var o=Ce(e);for(ze(o)&&(o=o.host);I(o)&&["html","body"].indexOf(H(o))<0;){var s=Y(o);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return o;o=o.parentNode}return null}function De(e){for(var t=j(e),r=Qe(e);r&&Or(r)&&Y(r).position==="static";)r=Qe(r);return r&&(H(r)==="html"||H(r)==="body"&&Y(r).position==="static")?t:r||Sr(e)||t}function J(e){return e.split("-")[0]}function ve(e){return e.split("-")[1]}var ue=Math.max,Ze=Math.min,re=Math.round,Pr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function kr(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:re(r*o)/o||0,y:re(n*o)/o||0}}function Ge(e){var t,r=e.popper,n=e.popperRect,o=e.placement,s=e.variation,l=e.offsets,a=e.position,i=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,p=e.isFixed,g=l.x,d=g===void 0?0:g,O=l.y,h=O===void 0?0:O,v=typeof u=="function"?u({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var w=l.hasOwnProperty("x"),k=l.hasOwnProperty("y"),C=K,y=F,S=window;if(c){var P=De(r),L="clientHeight",z="clientWidth";if(P===j(r)&&(P=Z(r),Y(P).position!=="static"&&a==="absolute"&&(L="scrollHeight",z="scrollWidth")),P=P,o===F||(o===K||o===_)&&s===de){y=Q;var E=p&&P===S&&S.visualViewport?S.visualViewport.height:P[L];h-=E-n.height,h*=i?1:-1}if(o===K||(o===F||o===Q)&&s===de){C=_;var b=p&&P===S&&S.visualViewport?S.visualViewport.width:P[z];d-=b-n.width,d*=i?1:-1}}var $=Object.assign({position:a},c&&Pr),N=u===!0?kr({x:d,y:h},j(r)):{x:d,y:h};if(d=N.x,h=N.y,i){var B;return Object.assign({},$,(B={},B[y]=k?"0":"",B[C]=w?"0":"",B.transform=(S.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",B))}return Object.assign({},$,(t={},t[y]=k?h+"px":"",t[C]=w?d+"px":"",t.transform="",t))}function Cr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,s=r.adaptive,l=s===void 0?!0:s,a=r.roundOffsets,i=a===void 0?!0:a,c={placement:J(t.placement),variation:ve(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ge(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ge(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const yt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Cr,data:{}};var Er={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,function(t){return Er[t]})}var $r={start:"end",end:"start"};function _e(e){return e.replace(/start|end/g,function(t){return $r[t]})}function bt(){return!/^((?!chrome|android).)*safari/i.test(Le())}function ne(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,s=1;t&&I(e)&&(o=e.offsetWidth>0&&re(n.width)/e.offsetWidth||1,s=e.offsetHeight>0&&re(n.height)/e.offsetHeight||1);var l=ee(e)?j(e):window,a=l.visualViewport,i=!bt()&&r,c=(n.left+(i&&a?a.offsetLeft:0))/o,u=(n.top+(i&&a?a.offsetTop:0))/s,p=n.width/o,g=n.height/s;return{width:p,height:g,top:u,right:c+p,bottom:u+g,left:c,x:c,y:u}}function je(e){var t=j(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ne(e){return ne(Z(e)).left+je(e).scrollLeft}function Tr(e,t){var r=j(e),n=Z(e),o=r.visualViewport,s=n.clientWidth,l=n.clientHeight,a=0,i=0;if(o){s=o.width,l=o.height;var c=bt();(c||!c&&t==="fixed")&&(a=o.offsetLeft,i=o.offsetTop)}return{width:s,height:l,x:a+Ne(e),y:i}}function Br(e){var t,r=Z(e),n=je(e),o=(t=e.ownerDocument)==null?void 0:t.body,s=ue(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),l=ue(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+Ne(e),i=-n.scrollTop;return Y(o||r).direction==="rtl"&&(a+=ue(r.clientWidth,o?o.clientWidth:0)-s),{width:s,height:l,x:a,y:i}}function Ae(e){var t=Y(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function wt(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:I(e)&&Ae(e)?e:wt(Ce(e))}function ce(e,t){var r;t===void 0&&(t=[]);var n=wt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),s=j(n),l=o?[s].concat(s.visualViewport||[],Ae(n)?n:[]):n,a=t.concat(l);return o?a:a.concat(ce(Ce(l)))}function Lr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&ze(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Me(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Mr(e,t){var r=ne(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function et(e,t,r){return t===mt?Me(Tr(e,r)):ee(t)?Mr(t,r):Me(Br(Z(e)))}function Rr(e){var t=ce(Ce(e)),r=["absolute","fixed"].indexOf(Y(e).position)>=0,n=r&&I(e)?De(e):e;return ee(n)?t.filter(function(o){return ee(o)&&Lr(o,n)&&H(o)!=="body"}):[]}function zr(e,t,r,n){var o=t==="clippingParents"?Rr(e):[].concat(t),s=[].concat(o,[r]),l=s[0],a=s.reduce(function(i,c){var u=et(e,c,n);return i.top=ue(u.top,i.top),i.right=Ze(u.right,i.right),i.bottom=Ze(u.bottom,i.bottom),i.left=ue(u.left,i.left),i},et(e,l,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Dr(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ot(e){var t=e.reference,r=e.element,n=e.placement,o=n?J(n):null,s=n?ve(n):null,l=t.x+t.width/2-r.width/2,a=t.y+t.height/2-r.height/2,i;switch(o){case F:i={x:l,y:t.y-r.height};break;case Q:i={x:l,y:t.y+t.height};break;case _:i={x:t.x+t.width,y:a};break;case K:i={x:t.x-r.width,y:a};break;default:i={x:t.x,y:t.y}}var c=o?Dr(o):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case ke:i[c]=i[c]-(t[u]/2-r[u]/2);break;case de:i[c]=i[c]+(t[u]/2-r[u]/2);break}}return i}function jr(){return{top:0,right:0,bottom:0,left:0}}function Nr(e){return Object.assign({},jr(),e)}function Ar(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}function St(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,s=r.strategy,l=s===void 0?e.strategy:s,a=r.boundary,i=a===void 0?ur:a,c=r.rootBoundary,u=c===void 0?mt:c,p=r.elementContext,g=p===void 0?ae:p,d=r.altBoundary,O=d===void 0?!1:d,h=r.padding,v=h===void 0?0:h,w=Nr(typeof v!="number"?v:Ar(v,Pe)),k=g===ae?cr:ae,C=e.rects.popper,y=e.elements[O?k:g],S=zr(ee(y)?y:y.contextElement||Z(e.elements.popper),i,u,l),P=ne(e.elements.reference),L=Ot({reference:P,element:C,placement:o}),z=Me(Object.assign({},C,L)),E=g===ae?z:P,b={top:S.top-E.top+w.top,bottom:E.bottom-S.bottom+w.bottom,left:S.left-E.left+w.left,right:E.right-S.right+w.right},$=e.modifiersData.offset;if(g===ae&&$){var N=$[o];Object.keys(b).forEach(function(B){var X=[_,Q].indexOf(B)>=0?1:-1,A=[F,Q].indexOf(B)>=0?"y":"x";b[B]+=N[A]*X})}return b}function Ir(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,s=r.rootBoundary,l=r.padding,a=r.flipVariations,i=r.allowedAutoPlacements,c=i===void 0?gt:i,u=ve(n),p=u?a?Je:Je.filter(function(O){return ve(O)===u}):Pe,g=p.filter(function(O){return c.indexOf(O)>=0});g.length===0&&(g=p);var d=g.reduce(function(O,h){return O[h]=St(e,{placement:h,boundary:o,rootBoundary:s,padding:l})[J(h)],O},{});return Object.keys(d).sort(function(O,h){return d[O]-d[h]})}function Wr(e){if(J(e)===Re)return[];var t=ge(e);return[_e(e),t,_e(t)]}function Vr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,s=o===void 0?!0:o,l=r.altAxis,a=l===void 0?!0:l,i=r.fallbackPlacements,c=r.padding,u=r.boundary,p=r.rootBoundary,g=r.altBoundary,d=r.flipVariations,O=d===void 0?!0:d,h=r.allowedAutoPlacements,v=t.options.placement,w=J(v),k=w===v,C=i||(k||!O?[ge(v)]:Wr(v)),y=[v].concat(C).reduce(function(pe,oe){return pe.concat(J(oe)===Re?Ir(t,{placement:oe,boundary:u,rootBoundary:p,padding:c,flipVariations:O,allowedAutoPlacements:h}):oe)},[]),S=t.rects.reference,P=t.rects.popper,L=new Map,z=!0,E=y[0],b=0;b<y.length;b++){var $=y[b],N=J($),B=ve($)===ke,X=[F,Q].indexOf(N)>=0,A=X?"width":"height",f=St(t,{placement:$,boundary:u,rootBoundary:p,altBoundary:g,padding:c}),T=X?B?_:K:B?Q:F;S[A]>P[A]&&(T=ge(T));var M=ge(T),m=[];if(s&&m.push(f[N]<=0),a&&m.push(f[T]<=0,f[M]<=0),m.every(function(pe){return pe})){E=$,z=!1;break}L.set($,m)}if(z)for(var Ee=O?3:1,Lt=function(oe){var He=y.find(function(Rt){var xe=L.get(Rt);if(xe)return xe.slice(0,oe).every(function(zt){return zt})});if(He)return E=He,"break"},$e=Ee;$e>0;$e--){var Mt=Lt($e);if(Mt==="break")break}t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}}const Ur={name:"flip",enabled:!0,phase:"main",fn:Vr,requiresIfExists:["offset"],data:{_skip:!1}};function Hr(e,t,r){var n=J(e),o=[K,F].indexOf(n)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=s[0],a=s[1];return l=l||0,a=(a||0)*o,[K,_].indexOf(n)>=0?{x:a,y:l}:{x:l,y:a}}function xr(e){var t=e.state,r=e.options,n=e.name,o=r.offset,s=o===void 0?[0,0]:o,l=gt.reduce(function(u,p){return u[p]=Hr(p,t.rects,s),u},{}),a=l[t.placement],i=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=l}const Fr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:xr};function Yr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Xr(e){return e===j(e)||!I(e)?je(e):Yr(e)}function qr(e){var t=e.getBoundingClientRect(),r=re(t.width)/e.offsetWidth||1,n=re(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Kr(e,t,r){r===void 0&&(r=!1);var n=I(t),o=I(t)&&qr(t),s=Z(t),l=ne(e,o,r),a={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((H(t)!=="body"||Ae(s))&&(a=Xr(t)),I(t)?(i=ne(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):s&&(i.x=Ne(s))),{x:l.left+a.scrollLeft-i.x,y:l.top+a.scrollTop-i.y,width:l.width,height:l.height}}function Jr(e){var t=ne(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Qr(e){var t=new Map,r=new Set,n=[];e.forEach(function(s){t.set(s.name,s)});function o(s){r.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(a){if(!r.has(a)){var i=t.get(a);i&&o(i)}}),n.push(s)}return e.forEach(function(s){r.has(s.name)||o(s)}),n}function Zr(e){var t=Qr(e);return wr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Gr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function _r(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var tt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function en(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,s=o===void 0?tt:o;return function(a,i,c){c===void 0&&(c=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},tt,s),modifiersData:{},elements:{reference:a,popper:i},attributes:{},styles:{}},p=[],g=!1,d={state:u,setOptions:function(w){var k=typeof w=="function"?w(u.options):w;h(),u.options=Object.assign({},s,u.options,k),u.scrollParents={reference:ee(a)?ce(a):a.contextElement?ce(a.contextElement):[],popper:ce(i)};var C=Zr(_r([].concat(n,u.options.modifiers)));return u.orderedModifiers=C.filter(function(y){return y.enabled}),O(),d.update()},forceUpdate:function(){if(!g){var w=u.elements,k=w.reference,C=w.popper;if(rt(k,C)){u.rects={reference:Kr(k,De(C),u.options.strategy==="fixed"),popper:Jr(C)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(b){return u.modifiersData[b.name]=Object.assign({},b.data)});for(var y=0;y<u.orderedModifiers.length;y++){if(u.reset===!0){u.reset=!1,y=-1;continue}var S=u.orderedModifiers[y],P=S.fn,L=S.options,z=L===void 0?{}:L,E=S.name;typeof P=="function"&&(u=P({state:u,options:z,name:E,instance:d})||u)}}}},update:Gr(function(){return new Promise(function(v){d.forceUpdate(),v(u)})}),destroy:function(){h(),g=!0}};if(!rt(a,i))return d;d.setOptions(c).then(function(v){!g&&c.onFirstUpdate&&c.onFirstUpdate(v)});function O(){u.orderedModifiers.forEach(function(v){var w=v.name,k=v.options,C=k===void 0?{}:k,y=v.effect;if(typeof y=="function"){var S=y({state:u,name:w,instance:d,options:C}),P=function(){};p.push(S||P)}})}function h(){p.forEach(function(v){return v()}),p=[]}return d}}var me={passive:!0};function tn(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,s=o===void 0?!0:o,l=n.resize,a=l===void 0?!0:l,i=j(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",r.update,me)}),a&&i.addEventListener("resize",r.update,me),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",r.update,me)}),a&&i.removeEventListener("resize",r.update,me)}}const rn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:tn,data:{}};function nn(e){var t=e.state,r=e.name;t.modifiersData[r]=Ot({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const on={name:"popperOffsets",enabled:!0,phase:"read",fn:nn,data:{}};function an(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},s=t.elements[r];!I(s)||!H(s)||(Object.assign(s.style,n),Object.keys(o).forEach(function(l){var a=o[l];a===!1?s.removeAttribute(l):s.setAttribute(l,a===!0?"":a)}))})}function sn(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],s=t.attributes[n]||{},l=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),a=l.reduce(function(i,c){return i[c]="",i},{});!I(o)||!H(o)||(Object.assign(o.style,a),Object.keys(s).forEach(function(i){o.removeAttribute(i)}))})}}const ln={name:"applyStyles",enabled:!0,phase:"write",fn:an,effect:sn,requires:["computeStyles"]};var un=[rn,on,yt,ln],cn=en({defaultModifiers:un}),fn=Object.defineProperty,dn=Object.defineProperties,vn=Object.getOwnPropertyDescriptors,nt=Object.getOwnPropertySymbols,pn=Object.prototype.hasOwnProperty,hn=Object.prototype.propertyIsEnumerable,ot=(e,t,r)=>t in e?fn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Te=(e,t)=>{for(var r in t||(t={}))pn.call(t,r)&&ot(e,r,t[r]);if(nt)for(var r of nt(t))hn.call(t,r)&&ot(e,r,t[r]);return e},Be=(e,t)=>dn(e,vn(t)),at=(e,t,r)=>new Promise((n,o)=>{var s=i=>{try{a(r.next(i))}catch(c){o(c)}},l=i=>{try{a(r.throw(i))}catch(c){o(c)}},a=i=>i.done?n(i.value):Promise.resolve(i.value).then(s,l);a((r=r.apply(e,t)).next())});function mn(e){const t=R(null),r=R(null),n=R({width:0,height:0}),o=Nt(e,"show",{passive:!0,defaultValue:!1,emit(f,T){T?D(e.onOpen):D(e.onClose)}}),{zIndex:s}=ar(()=>o.value,1);lr(()=>o.value,s);let l=null,a,i=!1,c=!1,u=!0;lt(()=>window,"keydown",N),se(()=>[e.offsetX,e.offsetY,e.placement,e.strategy],B),se(()=>e.disabled,A),se(()=>o.value,f=>{f&&B()}),At(B),It(p),Wt(g);function p(){const f=E();l=cn(f,r.value,z()),f.addEventListener("mouseenter",h),f.addEventListener("mouseleave",v),f.addEventListener("click",C),document.addEventListener("click",y)}function g(){const f=E();f&&(f.removeEventListener("mouseenter",h),f.removeEventListener("mouseleave",v),f.removeEventListener("click",C)),l.destroy(),document.removeEventListener("click",y)}function d(){const f=E();if(!f)return;const{width:T,height:M}=Vt(f);n.value={width:he(T),height:he(M)}}function O(){switch(e.placement){case"top":case"cover-bottom":return"bottom";case"top-start":case"right-end":case"cover-bottom-start":return"bottom left";case"top-end":case"left-end":case"cover-bottom-end":return"bottom right";case"bottom":case"cover-top":return"top";case"bottom-start":case"right-start":case"cover-top-start":return"top left";case"bottom-end":case"left-start":case"cover-top-end":return"top right";case"left":case"cover-right":return"right";case"right":case"cover-left":return"left"}}function h(){e.trigger==="hover"&&(c=!0,X())}function v(){return at(this,null,function*(){e.trigger==="hover"&&(c=!1,yield Ye(),!i&&A())})}function w(){e.trigger==="hover"&&(i=!0,e.cascadeOptimization&&(u=!1))}function k(){return at(this,null,function*(){e.trigger==="hover"&&(i=!1,yield Ye(),!c&&A())})}function C(){if(e.trigger==="click"){if(e.closeOnClickReference&&o.value){A();return}X()}}function y(f){const T=E();if(T&&!T.contains(f.target)){if(e.trigger!=="click")return;S(),D(e.onClickOutside,f)}}function S(){A()}function P(){B(),D(e.onClosed)}function L(){const{offsetX:f,offsetY:T,placement:M}=e;d();const m={x:he(f),y:he(T)};switch(M){case"cover-top":return{placement:"bottom",skidding:m.x,distance:m.y-n.value.height};case"cover-top-start":return{placement:"bottom-start",skidding:m.x,distance:m.y-n.value.height};case"cover-top-end":return{placement:"bottom-end",skidding:m.x,distance:m.y-n.value.height};case"cover-bottom":return{placement:"top",skidding:m.x,distance:-m.y-n.value.height};case"cover-bottom-start":return{placement:"top-start",skidding:m.x,distance:-m.y-n.value.height};case"cover-bottom-end":return{placement:"top-end",skidding:m.x,distance:-m.y-n.value.height};case"cover-left":return{placement:"right",skidding:m.y,distance:m.x-n.value.width};case"cover-right":return{placement:"left",skidding:m.y,distance:-m.x-n.value.width};case"left":case"left-start":case"left-end":return{placement:M,skidding:m.y,distance:-m.x};case"top":case"top-start":case"top-end":return{placement:M,skidding:m.x,distance:-m.y};case"bottom":case"bottom-start":case"bottom-end":return{placement:M,skidding:m.x,distance:m.y};case"right":case"right-start":case"right-end":return{placement:M,skidding:m.y,distance:m.x}}}function z(){const{placement:f,skidding:T,distance:M}=L(),m=[Be(Te({},Ur),{enabled:o.value}),Be(Te({},Fr),{options:{offset:[T,M]}}),Be(Te({},yt),{options:{adaptive:!1,gpuAcceleration:!1},enabled:o.value}),{name:"applyTransformOrigin",enabled:o.value,phase:"beforeWrite",fn({state:Ee}){Ee.styles.popper.transformOrigin=O()}}];return{placement:f,modifiers:m,strategy:e.strategy}}function E(){var f,T;const M=(f=a!=null?a:e.reference)!=null?f:t.value;return ut(M)?(T=t.value)==null?void 0:T.querySelector(M):M}function b(f){u=f}function $(f){g(),a=f,p()}function N(f){const{closeOnKeyEscape:T=!1}=e;f.key==="Escape"&&T&&o.value&&(ct(f),A())}function B(){l.setOptions(z())}function X(){e.disabled||(o.value=!0,D(e["onUpdate:show"],!0))}function A(){u&&(o.value=!1,D(e["onUpdate:show"],!1))}return{show:o,popover:r,zIndex:s,host:t,referenceSize:n,handlePopoverClose:S,handlePopoverMouseenter:w,handlePopoverMouseleave:k,handleClosed:P,setReference:$,setAllowClose:b,resize:B,open:X,close:A}}const{name:gn,n:yn,classes:bn}=we("menu");function wn(e,t){return U(),x("div",{ref:"host",class:V(e.classes(e.n(),e.n("$--box")))},[fe(e.$slots,"default"),(U(),xt(Kt,{to:e.teleport===!1?void 0:e.teleport,disabled:e.teleportDisabled||e.teleport===!1},[ft(qt,{name:e.n(),onAfterEnter:e.onOpened,onAfterLeave:e.handleClosed,persisted:""},{default:Ft(()=>[dt(vt("div",{ref:"popover",style:G({zIndex:e.zIndex,width:e.sameWidth?e.toSizeUnit(Math.ceil(e.referenceSize.width)):void 0}),class:V(e.classes(e.n("menu"),e.n("$--box"),e.popoverClass,[e.defaultStyle,e.n("--menu-background-color")],[e.defaultStyle,e.formatElevation(e.elevation,3)])),onClick:t[0]||(t[0]=Yt(()=>{},["stop"])),onMouseenter:t[1]||(t[1]=(...r)=>e.handlePopoverMouseenter&&e.handlePopoverMouseenter(...r)),onMouseleave:t[2]||(t[2]=(...r)=>e.handlePopoverMouseleave&&e.handlePopoverMouseleave(...r))},[fe(e.$slots,"menu")],38),[[Xt,e.show]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"]))],2)}const Pt=be({name:gn,props:ht,setup(e){const{disabled:t}=Ut(),{popover:r,host:n,referenceSize:o,show:s,zIndex:l,handlePopoverMouseenter:a,handlePopoverMouseleave:i,handlePopoverClose:c,handleClosed:u,setAllowClose:p,open:g,close:d,resize:O,setReference:h}=mn(e);function v(){p(!0)}return{popover:r,host:n,referenceSize:o,show:s,zIndex:l,teleportDisabled:t,allowClose:v,formatElevation:Ht,toSizeUnit:le,n:yn,classes:bn,handlePopoverMouseenter:a,handlePopoverMouseleave:i,handlePopoverClose:c,handleClosed:u,resize:O,open:g,close:d,setReference:h}}});Pt.render=wn;var Ie=Pt;Oe(Ie);Se(Ie,ht);const Vn=Ie;const kt={round:{type:Boolean,default:!0},size:{type:[String,Number],default:"normal"},alt:String,color:String,src:String,fit:{type:String,default:"cover"},bordered:Boolean,borderColor:String,loading:String,error:String,lazy:Boolean,hoverable:Boolean,onClick:W(),onLoad:W(),onError:W()},On=e=>["mini","small","normal","large"].includes(e),{name:Sn,n:Pn,classes:kn}=we("avatar"),Cn=["src","alt","lazy-loading","lazy-error"],En=["src","alt"];function $n(e,t){const r=Jt("lazy");return U(),x("div",{ref:"avatarElement",class:V(e.classes(e.n(),e.n("$--box"),[e.isInternalSize(e.size),e.n("--".concat(e.size))],[e.round,e.n("--round")],[e.bordered,e.n("--bordered")],[e.hoverable,e.n("--hoverable")])),style:G({width:e.isInternalSize(e.size)?void 0:e.toSizeUnit(e.size),height:e.isInternalSize(e.size)?void 0:e.toSizeUnit(e.size),borderColor:e.borderColor,backgroundColor:e.color}),onClick:t[3]||(t[3]=(...n)=>e.handleClick&&e.handleClick(...n))},[e.src?(U(),x(Qt,{key:0},[e.lazy?dt((U(),x("img",{key:0,role:"img",class:V(e.n("image")),src:e.src,alt:e.alt,style:G({objectFit:e.fit}),"lazy-loading":e.loading,"lazy-error":e.error,onLoad:t[0]||(t[0]=(...n)=>e.handleLoad&&e.handleLoad(...n))},null,46,Cn)),[[r,e.src]]):(U(),x("img",{key:1,role:"img",class:V(e.n("image")),src:e.src,alt:e.alt,style:G({objectFit:e.fit}),onLoad:t[1]||(t[1]=(...n)=>e.handleLoad&&e.handleLoad(...n)),onError:t[2]||(t[2]=(...n)=>e.handleError&&e.handleError(...n))},null,46,En))],64)):(U(),x("div",{key:1,ref:"textElement",class:V(e.n("text")),style:G({transform:"scale(".concat(e.scale,")")})},[fe(e.$slots,"default")],6))],6)}const Ct=be({name:Sn,directives:{Lazy:ir},props:kt,setup(e){const t=R(null),r=R(null),n=R(1);ye(o),pt(o);function o(){if(!t.value||!r.value){n.value=1;return}const i=t.value.offsetWidth,c=r.value.offsetWidth;i>c?n.value=1:n.value=i/c}function s(i){const c=i.currentTarget,{lazy:u,onLoad:p,onError:g}=e;u?(c._lazy.state==="success"&&D(p,i),c._lazy.state==="error"&&D(g,i)):D(p,i)}function l(i){D(e.onError,i)}function a(i){D(e.onClick,i)}return{avatarElement:t,textElement:r,scale:n,n:Pn,classes:kn,isInternalSize:On,toSizeUnit:le,handleLoad:s,handleError:l,handleClick:a}}});Ct.render=$n;var We=Ct;Oe(We);Se(We,kt);const Un=We,Et={inset:{type:[Boolean,Number,String],default:!1},vertical:Boolean,description:String,margin:String,dashed:Boolean,hairline:Boolean},{name:Tn,n:Bn,classes:Ln}=we("divider");function Mn(e,t){return U(),x("div",{class:V(e.classes(e.n(),e.n("$--box"),[e.vertical,e.n("--vertical")],[e.withText,e.n("--with-text")],[e.withPresetInset,e.n("--inset")],[e.dashed,e.n("--dashed")],[e.hairline,e.n("--hairline")])),style:G(e.style),role:"separator"},[e.vertical?Xe("v-if",!0):fe(e.$slots,"default",{key:0},()=>[e.description?(U(),x("span",{key:0,class:V(e.n("text"))},Gt(e.description),3)):Xe("v-if",!0)])],6)}const $t=be({name:Tn,props:Et,setup(e,{slots:t}){const r=R(!1),n=te(()=>{const{vertical:l,inset:a}=e;return!l&&a===!0}),o=te(()=>{const{inset:l,vertical:a,margin:i}=e;if(Zt(l)||a)return{margin:i};const c=ie(l),u=Math.abs(c)+(l+"").replace(c+"","");return{margin:i,width:"calc(100% - ".concat(le(u),")"),left:c>0?le(u):le(0)}});ye(s),pt(s);function s(){const{description:l,vertical:a}=e;r.value=(t.default||l!=null)&&!a}return{n:Bn,classes:Ln,withText:r,style:o,withPresetInset:n}}});$t.render=Mn;var Ve=$t;Oe(Ve);Se(Ve,Et);const Hn=Ve,Tt={modelValue:Boolean,disabled:Boolean,animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:String,successBgColor:String,color:String,successColor:String,target:[String,Object],onRefresh:W(),"onUpdate:modelValue":W()};var Rn=(e,t,r)=>new Promise((n,o)=>{var s=i=>{try{a(r.next(i))}catch(c){o(c)}},l=i=>{try{a(r.throw(i))}catch(c){o(c)}},a=i=>i.done?n(i.value):Promise.resolve(i.value).then(s,l);a((r=r.apply(e,t)).next())});const{name:zn,n:it,classes:Dn}=we("pull-refresh"),st=150;function jn(e,t){const r=or("var-icon");return U(),x("div",{ref:"freshNode",class:V(e.n()),onTouchstart:t[0]||(t[0]=(...n)=>e.handleTouchstart&&e.handleTouchstart(...n)),onTouchend:t[1]||(t[1]=(...n)=>e.handleTouchend&&e.handleTouchend(...n)),onTouchcancel:t[2]||(t[2]=(...n)=>e.handleTouchend&&e.handleTouchend(...n))},[vt("div",{ref:"controlNode",class:V(e.classes(e.n("control"),e.n("$-elevation--2"),[e.isSuccess,e.n("control-success")])),style:G(e.controlStyle)},[ft(r,{name:e.iconName,transition:e.ICON_TRANSITION,class:V(e.classes(e.n("icon"),[e.refreshStatus==="loading",e.n("animation")])),"var-pull-refresh-cover":""},null,8,["name","transition","class"])],6),fe(e.$slots,"default")],34)}const Bt=be({name:zn,components:{VarIcon:sr},props:Tt,setup(e){const t=R(0),r=R(null),n=R(null),o=R(0),s=R("-125%"),l=R("arrow-down"),a=R("default"),i=R(!1),c=te(()=>Math.abs(2*t.value)),u=te(()=>a.value==="success"),p=te(()=>a.value!=="loading"&&a.value!=="success"&&!e.disabled),g=te(()=>({transform:"translate3d(0px, ".concat(ut(s.value)?s.value:"".concat(s.value,"px"),", 0px) translate(-50%, 0)"),transition:i.value?"transform ".concat(e.animationDuration,"ms"):void 0,background:u.value?e.successBgColor:e.bgColor,color:u.value?e.successColor:e.color})),{startTouch:d,moveTouch:O,endTouch:h,isReachTop:v}=_t();let w,k;se(()=>e.modelValue,b=>{b===!1&&(i.value=!0,a.value="success",l.value="checkbox-marked-circle",setTimeout(()=>{s.value=t.value,E()},ie(e.successDuration)))}),ye(z),lt(r,"touchmove",P);function C(b){if(l.value!==b)return l.value=b,new Promise($=>{window.setTimeout($,st)})}function y(b){("classList"in w?w:document.body).classList[b]("".concat(it(),"--lock"))}function S(b){if(d(b),t.value===0){const{width:$}=tr(n.value);t.value=-($+$*.25)}k=qe(b.target)}function P(b){if(O(b),!p.value||!k||k!==w&&Ke(k)>0||Ke(w)>0)return;v(w)&&ct(b),a.value!=="pulling"&&(a.value="pulling",o.value=b.touches[0].clientY),v(w)&&rr(s.value)&&s.value>t.value&&y("add");const N=(b.touches[0].clientY-o.value)/2+t.value;s.value=N>=c.value?c.value:N,C(s.value>=c.value*.2?"refresh":"arrow-down")}function L(){return Rn(this,null,function*(){h(),p.value&&(i.value=!0,ie(s.value)>=c.value*.2?(yield C("refresh"),a.value="loading",s.value=c.value*.3,D(e["onUpdate:modelValue"],!0),nr(()=>{D(e.onRefresh)}),y("remove")):(a.value="loosing",l.value="arrow-down",s.value=t.value,setTimeout(()=>{i.value=!1,y("remove")},ie(e.animationDuration))),k=null)})}function z(){w=e.target?er(e.target,"PullRefresh"):qe(r.value)}function E(){setTimeout(()=>{a.value="default",l.value="arrow-down",i.value=!1},ie(e.animationDuration))}return{ICON_TRANSITION:st,refreshStatus:a,freshNode:r,controlNode:n,iconName:l,controlStyle:g,isSuccess:u,n:it,classes:Dn,handleTouchstart:S,handleTouchmove:P,handleTouchend:L}}});Bt.render=jn;var Ue=Bt;Oe(Ue);Se(Ue,Tt);const xn=Ue,Fn=""+new URL("avatar-YSMq4Uy_.jpg",import.meta.url).href;export{xn as _,Vn as a,Hn as b,Un as c,Fn as d,lr as e,mn as u};
