import{_ as w,a as $}from"./AppBack.vue_vue_type_script_setup_true_lang-UjkFp-E9.js";import{d as y,_ as V}from"./useAppRouter-Cs8PmaBW.js";import{z as d,_ as b,a as h}from"./index-eGKPdzMC.js";import{s as k}from"./SnackbarSfc-6Nkm_EkW.js";import{_ as P,a as S}from"./AppHeader.vue_vue_type_script_setup_true_lang-ZHNBW7rJ.js";import{d as B,r as I,A as z,G as N,C as U,D as a,L as D,u as e,x as n,a9 as F,U as L}from"./useDesktop-C1SjsURt.js";import"./formDetails-DGVYBcbR.js";import{u as T}from"./main-C_-pj2oV.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./shared-BUBF32wW.js";import"./provide-B2Es0y6T.js";const E={class:"forgot-password"},G=B({__name:"forgot-password",setup(j){const{t:c}=T(),m=I(),s=z({email:"",verifyCode:""});async function _(){var t;if(await((t=m.value)==null?void 0:t.validate()))return new Promise(r=>{setTimeout(()=>{k.success(c("Submit Success")),r(void 0)},1e3)})}return(o,t)=>{const r=w,u=P,l=y,p=b,f=V,v=S,g=h,C=$;return N(),U(C,null,{default:a(()=>[D("div",E,[e(u,{title:o.$t("Forgot Password")},{left:a(()=>[e(r)]),_:1},8,["title"]),e(g,{ref_key:"form",ref:m,class:"forgot-password-form"},{default:a(()=>[e(v,{direction:"column",size:["8vmin",0]},{default:a(()=>[e(p,{modelValue:n(s).email,"onUpdate:modelValue":t[0]||(t[0]=i=>n(s).email=i),variant:"outlined",placeholder:o.$t("Please input {field}",{field:o.$t("email")}),rules:n(d).string().email(o.$t("Email format error"))},{"prepend-icon":a(()=>[e(l,{class:"forgot-password-form-input-icon",name:"email"})]),_:1},8,["modelValue","placeholder","rules"]),e(p,{modelValue:n(s).verifyCode,"onUpdate:modelValue":t[1]||(t[1]=i=>n(s).verifyCode=i),variant:"outlined",placeholder:o.$t("Please input {field}",{field:o.$t("verify code")}),rules:n(d).string().min(6,o.$t("Length must be {length}",{length:6}))},{"prepend-icon":a(()=>[e(l,{class:"forgot-password-form-input-icon",name:"card-account-details"})]),_:1},8,["modelValue","placeholder","rules"]),e(f,{type:"primary",block:"",size:"large","auto-loading":"",onClick:_},{default:a(()=>[F(L(o.$t("Submit")),1)]),_:1})]),_:1})]),_:1},512)])]),_:1})}}}),Z=A(G,[["__scopeId","data-v-7340a97d"]]);export{Z as default};