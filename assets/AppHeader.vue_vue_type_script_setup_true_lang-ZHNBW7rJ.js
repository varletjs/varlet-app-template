import{c as G,G as f,K as S,L as w,R as c,O as u,$ as A,a9 as L,U as N,S as y,Q as Y,F as q,d as P,r as $,a as J,a0 as X,a1 as Z,a2 as _,ah as x,a5 as ee,Y as z,w as H,g as M,f as te,aM as ne,u as b,a$ as j,ak as ae,a_ as oe,aP as se,E as re,x as R,C as I,D as v,W as ie,aa as le,au as de}from"./useDesktop-C1SjsURt.js";import{u as ue}from"./useAppRouter-Cs8PmaBW.js";const U={color:String,textColor:String,title:String,titlePosition:{type:String,default:"left"},elevation:{type:[Boolean,String,Number],default:!0},round:Boolean,image:String,imageLinearGradient:String,safeAreaTop:Boolean,border:Boolean,zIndex:{type:[Number,String],default:1},fixed:Boolean,placeholder:Boolean},{name:pe,n:fe,classes:ce}=G("app-bar");function me(e,t){return f(),S(q,null,[w("div",Y({ref:"appBar",class:e.classes(e.n(),e.n("$--box"),[e.safeAreaTop,e.n("--safe-area-top")],[e.round,e.n("--round")],[e.fixed,e.n("--fixed")],[e.border,e.n("--border")],e.formatElevation(e.elevation,3)),style:e.rootStyles},e.$attrs),[w("div",{class:c(e.n("toolbar"))},[w("div",{class:c(e.n("left"))},[u(e.$slots,"left"),e.titlePosition==="left"?(f(),S("div",{key:0,class:c(e.n("title")),style:A({paddingLeft:e.paddingLeft})},[u(e.$slots,"default",{},()=>[L(N(e.title),1)])],6)):y("v-if",!0)],2),e.titlePosition==="center"?(f(),S("div",{key:0,class:c(e.n("title"))},[u(e.$slots,"default",{},()=>[L(N(e.title),1)])],2)):y("v-if",!0),w("div",{class:c(e.n("right"))},[e.titlePosition==="right"?(f(),S("div",{key:0,class:c(e.n("title")),style:A({paddingRight:e.paddingRight})},[u(e.$slots,"default",{},()=>[L(N(e.title),1)])],6)):y("v-if",!0),u(e.$slots,"right")],2)],2),u(e.$slots,"content")],16),e.fixed&&e.placeholder?(f(),S("div",{key:0,class:c(e.n("placeholder")),style:A({height:e.placeholderHeight})},null,6)):y("v-if",!0)],64)}const W=P({name:pe,props:U,setup(e,{slots:t}){const l=$(null),i=$(),a=$(),o=$(),d=J(()=>{const{image:p,color:m,textColor:g,imageLinearGradient:h,zIndex:k}=e;if(p!=null){const C=h?"linear-gradient(".concat(h,"), "):"";return{"background-image":"".concat(C,"url(").concat(p,")"),"background-position":"center center","background-size":"cover","z-index":k}}return{background:m,color:g,"z-index":k}});X(r),Z(()=>{n(),r()}),_(n);function n(){i.value=t.left?0:void 0,a.value=t.right?0:void 0}function r(){if(!e.fixed||!e.placeholder)return;const{height:p}=ee(l.value);o.value=z(p)}return{rootStyles:d,paddingLeft:i,paddingRight:a,n:fe,classes:ce,formatElevation:x,appBar:l,placeholderHeight:o}}});W.render=me;var D=W;H(D);M(D,U);const ge=D,K={size:{type:[String,Number,Array],default:"normal"},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"flex-start"},align:String,inline:Boolean};function s(e){return"calc(".concat(e," / 2)")}function $e(e,t,l){const{direction:i,justify:a,index:o,lastIndex:d}=l;let n="0";return i==="row"&&(["flex-start","center","flex-end","start","end"].includes(a)?o!==d?n="".concat(s(e)," ").concat(t," ").concat(s(e)," 0"):n="".concat(s(e)," 0"):a==="space-around"?n="".concat(s(e)," ").concat(s(t)):a==="space-between"&&(o===0?n="".concat(s(e)," ").concat(s(t)," ").concat(s(e)," 0"):o===d?n="".concat(s(e)," 0 ").concat(s(e)," ").concat(s(t)):n="".concat(s(e)," ").concat(s(t)))),i==="column"&&o!==d&&(n="0 0 ".concat(e," 0")),n}const ve=e=>["mini","small","normal","large"].includes(e),{name:he,n:B,classes:F}=G("space");function Se(e,t){return t?["var(--space-size-".concat(e,"-y)"),"var(--space-size-".concat(e,"-x)")]:ae(e)?e.map(z):[z(e),z(e)]}var E=P({name:he,props:K,setup(e,{slots:t}){return()=>{var l;const{inline:i,justify:a,align:o,wrap:d,direction:n,size:r}=e,p=(l=te(t.default))!=null?l:[],[m,g]=Se(r,ve(r)),h=ne(p),k=h.length-1,C=h.map((T,O)=>{var V;const Q=$e(m,g,{direction:n,justify:a,index:O,lastIndex:k});return b("div",{class:F([n==="column",B("--auto")]),key:(V=T.key)!=null?V:void 0,style:{margin:Q}},[T])});return b("div",{class:F(B(),B("$--box"),[i,B("--inline")]),style:{flexDirection:n,justifyContent:j(a),alignItems:j(o),flexWrap:d?"wrap":"nowrap",margin:n==="row"?"calc(-1 * ".concat(m," / 2) 0"):void 0}},[C])}}});H(E);M(E,K);const ye=E,we=P({inheritAttrs:!1,__name:"RouterStackView",props:{animation:{default:"slide-x"}},emits:["push","pushed","pop","popped"],setup(e,{emit:t}){const l=t,{route:i}=ue(),a=$(!0),o=$();oe(()=>{a.value=!1}),se(()=>{a.value=!0});function d(){o.value=i.path,l("push")}return(n,r)=>{const p=re("router-view");return R(a)?(f(),I(de,{key:0,to:"body"},[b(p,null,{default:v(({Component:m})=>[b(ie,{name:"router-stack-view-".concat(n.animation),onBeforeEnter:d,onAfterEnter:r[0]||(r[0]=g=>n.$emit("pushed")),onBeforeLeave:r[1]||(r[1]=g=>n.$emit("pop",R(o))),onAfterLeave:r[2]||(r[2]=g=>n.$emit("popped",R(o)))},{default:v(()=>[(f(),I(le(m)))]),_:2},1032,["name"])]),_:1})])):y("",!0)}}}),Be=P({__name:"AppHeader",props:{title:{},titlePosition:{default:"center"}},setup(e){return(t,l)=>{const i=ye,a=ge;return f(),I(a,{"safe-area-top":"",fixed:"","z-index":100,title:t.title,"title-position":t.titlePosition},{left:v(()=>[u(t.$slots,"left")]),right:v(()=>[b(i,{class:"pr-[8px]",size:[0,"1.4vmin"]},{default:v(()=>[u(t.$slots,"right")]),_:3})]),content:v(()=>[u(t.$slots,"content")]),_:3},8,["title","title-position"])}}});export{Be as _,ye as a,we as b};