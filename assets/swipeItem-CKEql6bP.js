import{Y as Ae,d as ne,c as ae,r as m,a as H,aJ as Fe,al as Le,f as b,j as Q,aO as Re,ad as Ue,_ as Ye,an as G,N as W,O as te,a2 as We,am as Xe,ai as X,B as Z,a7 as Ve,Q as He,J as w,D as S,K as Ke,P as k,S as $,a4 as K,U as c,t as T,E,X as _,ay as V,R as x,F as Me,ab as Oe,az as qe,w as ie,g as Je,a5 as je,a6 as Qe}from"./useDesktop-46-aLWkN.js";import{s as Ge,a as Ze,e as _e}from"./useAppRouter-Dn8Aqvhs.js";import{b as xe}from"./shared-CLv3fYw9.js";import{a as en,b as nn,S as an}from"./provide-D1rzoOYI.js";const le={loop:{type:Boolean,default:!0},autoplay:[String,Number],duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},navigation:{type:[Boolean,String],default:!1},indicator:{type:Boolean,default:!0},indicatorColor:String,vertical:Boolean,touchable:{type:Boolean,default:!0},onChange:Ae()};var y=(e,l,t)=>new Promise((p,s)=>{var a=f=>{try{i(t.next(f))}catch(h){s(h)}},d=f=>{try{i(t.throw(f))}catch(h){s(h)}},i=f=>f.done?p(f.value):Promise.resolve(f.value).then(a,d);i((t=t.apply(e,l)).next())});const tn=250,ln=20,{name:on,n:ee,classes:rn}=ae("swipe"),sn=["onClick"];function un(e,l){const t=Z("var-icon"),p=Z("var-button"),s=Ve("hover");return He((S(),w("div",{ref:"swipeEl",class:c(e.n())},[Ke("div",{class:c(e.classes(e.n("track"),[e.vertical,e.n("--vertical")])),style:K({width:e.vertical?void 0:e.toSizeUnit(e.trackSize),height:e.vertical?e.toSizeUnit(e.trackSize):void 0,transform:"translate".concat(e.vertical?"Y":"X","(").concat(e.toSizeUnit(e.trackTranslate),")"),transitionDuration:e.lockDuration?"0ms":"".concat(e.toNumber(e.duration),"ms")}),onTouchstart:l[0]||(l[0]=(...a)=>e.handleTouchstart&&e.handleTouchstart(...a)),onTouchmove:l[1]||(l[1]=(...a)=>e.handleTouchmove&&e.handleTouchmove(...a)),onTouchend:l[2]||(l[2]=(...a)=>e.handleTouchend&&e.handleTouchend(...a))},[k(e.$slots,"default")],38),e.navigation?k(e.$slots,"prev",V(x({key:0},{index:e.index,length:e.length,prev:e.prev,next:e.next,to:e.to,hovering:e.hovering})),()=>[T(_,{name:e.getNavigationAnimation("prev")},{default:E(()=>[e.navigation===!0||e.hovering?(S(),w("div",{key:0,class:c(e.classes(e.n("navigation"),e.n("navigation-prev"),[e.vertical,e.n("--navigation-vertical-prev")]))},[T(p,{"var-swipe-cover":"",disabled:!e.loop&&e.index===0,class:c(e.n("navigation-prev-button")),onClick:l[3]||(l[3]=a=>e.prev())},{default:E(()=>[T(t,{"var-swipe-cover":"",class:c(e.n("navigation-prev-button-icon")),name:e.vertical?"chevron-up":"chevron-left"},null,8,["class","name"])]),_:1},8,["disabled","class"])],2)):$("v-if",!0)]),_:1},8,["name"])]):$("v-if",!0),e.navigation?k(e.$slots,"next",V(x({key:1},{index:e.index,length:e.length,hovering:e.hovering,prev:e.prev,next:e.next,to:e.to})),()=>[T(_,{name:e.getNavigationAnimation("next")},{default:E(()=>[e.navigation===!0||e.hovering?(S(),w("div",{key:0,class:c(e.classes(e.n("navigation"),e.n("navigation-next"),[e.vertical,e.n("--navigation-vertical-next")]))},[T(p,{"var-swipe-cover":"",class:c(e.n("navigation-next-button")),disabled:!e.loop&&e.index===e.length-1,onClick:l[4]||(l[4]=a=>e.next())},{default:E(()=>[T(t,{"var-swipe-cover":"",class:c(e.n("navigation-next-button-icon")),name:e.vertical?"chevron-down":"chevron-right"},null,8,["class","name"])]),_:1},8,["class","disabled"])],2)):$("v-if",!0)]),_:1},8,["name"])]):$("v-if",!0),k(e.$slots,"indicator",V(qe({index:e.index,length:e.length,hovering:e.hovering,prev:e.prev,next:e.next,to:e.to})),()=>[e.indicator&&e.length?(S(),w("div",{key:0,class:c(e.classes(e.n("indicators"),[e.vertical,e.n("--indicators-vertical")]))},[(S(!0),w(Me,null,Oe(e.length,(a,d)=>(S(),w("div",{key:a,class:c(e.classes(e.n("indicator"),[e.index===d,e.n("--indicator-active")],[e.vertical,e.n("--indicator-vertical")])),style:K({background:e.indicatorColor}),onClick:i=>e.to(d)},null,14,sn))),128))],2)):$("v-if",!0)])],2)),[[s,e.handleHovering]])}const oe=ne({name:on,directives:{Hover:_e},components:{VarButton:Ze,VarIcon:Ge},props:le,setup(e){const l=m(null),t=m(0),p=H(()=>e.vertical),s=m(0),a=m(0),d=m(!1),i=m(0),f=m(!1),{swipeItems:h,bindSwipeItems:B,length:o}=en(),{swipeResizeListeners:se,bindSwipeResizeListeners:ue}=nn(),{popup:O,bindPopup:ve}=xe(),{deltaX:de,deltaY:fe,moveX:ce,moveY:he,offsetX:me,offsetY:pe,touching:q,direction:ge,startTime:we,startTouch:Se,moveTouch:Te,endTouch:ye}=Fe(),J=H(()=>ge.value===(e.vertical?"vertical":"horizontal"));let j=!1,D=-1;B({size:t,currentIndex:i,vertical:p}),Le(()=>window,"keydown",Ee),b(ve,null),b(ue,null),Q(()=>o.value,()=>y(this,null,function*(){yield X(),R(),I()})),O&&Q(()=>O.show.value,n=>y(this,null,function*(){n?(yield X(),I()):z()})),Re(I),Ue(z),Ye(I);function g(n){return h.find(({index:r})=>r.value===n)}function Ie(){e.loop&&(a.value>=0&&g(o.value-1).setTranslate(-s.value),a.value<=-(s.value-t.value)&&g(0).setTranslate(s.value),a.value>-(s.value-t.value)&&a.value<0&&(g(o.value-1).setTranslate(0),g(0).setTranslate(0)))}function A(n){const r=We(n)?n:Math.floor((a.value-t.value/2)/-t.value),{loop:u}=e;return r<=-1?u?-1:0:r>=o.value?u?o.value:o.value-1:r}function be(n){const{loop:r}=e;return n===-1?r?o.value-1:0:n===o.value?r?0:o.value-1:n}function F(n){return e.loop?n<0?o.value+n:n>=o.value?n-o.value:n:Xe(n,0,o.value-1)}function L(){return y(this,null,function*(){const n=a.value>=t.value,r=a.value<=-s.value,u=0,v=-(s.value-t.value);d.value=!0,(n||r)&&(d.value=!0,a.value=r?u:v,g(0).setTranslate(0),g(o.value-1).setTranslate(0)),yield X(),d.value=!1})}function R(){j||(i.value=F(W(e.initialIndex)),j=!0)}function U(){const{autoplay:n}=e;!n||o.value<=1||(z(),D=window.setTimeout(()=>{P(),U()},W(n)))}function z(){D&&clearTimeout(D)}function $e(n){return y(this,null,function*(){o.value<=1||!e.touchable||(Se(n),z(),yield L(),d.value=!0)})}function ke(n){const{touchable:r,vertical:u}=e;!q.value||!r||(Te(n),J.value&&(G(n),a.value+=u?he.value:ce.value,Ie()))}function ze(){if(!q.value||(ye(),!J.value))return;const{vertical:n,onChange:r}=e,u=n?fe.value<0:de.value<0,v=n?pe.value:me.value,C=performance.now()-we.value<=tn&&v>=ln?A(u?i.value+1:i.value-1):A();d.value=!1,a.value=C*-t.value;const De=i.value;i.value=be(C),U(),De!==i.value&&b(r,i.value)}function Pe(n){e.navigation==="hover"&&(f.value=n)}function Ce(n){return e.navigation!=="hover"?"":ee("--navigation".concat(e.vertical?"-vertical":"","-").concat(n,"-animation"))}function Ee(n){if(!h.length||h.findIndex(({isFocusing:v})=>v.value)===-1)return;const{key:u}=n;G(n),u==="ArrowLeft"&&Y(),u==="ArrowRight"&&P()}function I(){l.value&&(d.value=!0,t.value=e.vertical?l.value.offsetHeight:l.value.offsetWidth,s.value=t.value*o.value,a.value=i.value*-t.value,h.forEach(n=>{n.setTranslate(0)}),U(),setTimeout(()=>{d.value=!1}),se.forEach(({onResize:n})=>{n()}))}function P(n){return y(this,null,function*(){if(o.value<=1)return;R();const{loop:r,onChange:u}=e,v=i.value;if(i.value=F(v+1),(n==null?void 0:n.event)!==!1&&b(u,i.value),yield L(),v===o.value-1&&r){g(0).setTranslate(s.value),a.value=o.value*-t.value;return}v!==o.value-1&&(a.value=i.value*-t.value)})}function Y(n){return y(this,null,function*(){if(o.value<=1)return;R();const{loop:r,onChange:u}=e,v=i.value;if(i.value=F(v-1),(n==null?void 0:n.event)!==!1&&b(u,i.value),yield L(),v===0&&r){g(o.value-1).setTranslate(-s.value),a.value=t.value;return}v!==0&&(a.value=i.value*-t.value)})}function Ne(n,r){if(o.value<=1||n===i.value)return;n=n<0?0:n,n=n>=o.value?o.value:n;const u=n>i.value?P:Y,v=Math.abs(n-i.value);Array.from({length:v}).forEach((Be,C)=>{u({event:C===v-1?r==null?void 0:r.event:!1})})}return{length:o,index:i,swipeEl:l,trackSize:s,trackTranslate:a,lockDuration:d,hovering:f,n:ee,toSizeUnit:te,classes:rn,handleTouchstart:$e,handleTouchmove:ke,handleTouchend:ze,next:P,prev:Y,to:Ne,resize:I,toNumber:W,handleHovering:Pe,getNavigationAnimation:Ce}}});oe.render=un;var N=oe;ie(N);Je(N,le);const Tn=N;var yn=N;function vn(){const{bindParent:e,index:l,parentProvider:t}=je(an);return Qe(!!e,"SwipeItem","<var-swipe-item/> must in <var-swipe/>"),{index:l,swipe:t,bindSwipe:e}}const{name:dn,n:fn}=ae("swipe-item"),cn=["aria-hidden"];function hn(e,l){return S(),w("div",{class:c(e.n()),style:K({width:e.vertical?void 0:e.toSizeUnit(e.size),height:e.vertical?e.toSizeUnit(e.size):void 0,transform:"translate".concat(e.vertical?"Y":"X","(").concat(e.toSizeUnit(e.translate),")")}),tabindex:"-1","aria-hidden":e.currentIndex!==e.index,onFocus:l[0]||(l[0]=t=>e.isFocusing=!0),onBlur:l[1]||(l[1]=t=>e.isFocusing=!1)},[k(e.$slots,"default")],46,cn)}const re=ne({name:dn,setup(){const e=m(0),l=m(!1),{swipe:t,bindSwipe:p,index:s}=vn(),{size:a,currentIndex:d,vertical:i}=t,f={index:s,isFocusing:H(()=>l.value),setTranslate:h};p(f);function h(B){e.value=B}return{isFocusing:l,size:a,index:s,currentIndex:d,vertical:i,translate:e,n:fn,toSizeUnit:te}}});re.render=hn;var M=re;ie(M);const In=M;var bn=M;export{Tn as _,In as a,yn as b,bn as s};
