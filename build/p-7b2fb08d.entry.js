import{r as o,h as a,a as r,g as t}from"./p-3336fe3b.js";import{p as i}from"./p-2b6bbee5.js";import{S as e}from"./p-1693d6aa.js";import{g as s}from"./p-8a8117a5.js";import{v as p}from"./p-bc59b609.js";import"./p-40f10385.js";const n=i(e,["_2XS","_XS","_S","_M","_L"]);var g;(function(o){o["HORIZONTAL"]="horizontal";o["VERTICAL"]="vertical"})(g||(g={}));const f={root:"gov-form-group"};const m='.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-group{position:relative;display:flex;width:100%;flex-direction:column;align-items:flex-start}.gov-form-group .gov-form-label__label{margin:0}.gov-form-group[orientation=horizontal]{flex-direction:row;flex-wrap:wrap}.gov-form-group[orientation=horizontal] .gov-form-label__label{white-space:nowrap}.gov-form-group[gap="2xs"]{gap:0.25rem}.gov-form-group[gap=xs]{gap:0.5rem}.gov-form-group[gap=s]{gap:0.75rem}.gov-form-group[gap=m]{gap:1rem}.gov-form-group[gap=l]{gap:1.25rem}';const l=m;const c=class{constructor(a){o(this,a);this.gap=undefined;this.orientation="vertical";this.h=s(this.host)}validateGap(o){if(o){p(n,o,f.root)}}validateOrientation(o){if(o){p(g,o,f.root)}}componentWillLoad(){this.validateGap(this.gap);this.validateOrientation(this.orientation)}render(){return a(r,{key:"9545a515a786bca6a3f1b00fd582d5446c8eb3e4",gap:this.gap,class:this.h.classes(f.root)},a("slot",{key:"29fdc5ddfb6bb9d2dbf36db5fadf26cfa9ccd328"}))}get host(){return t(this)}static get watchers(){return{gap:["validateGap"],orientation:["validateOrientation"]}}};c.style=l;export{c as gov_form_group};
//# sourceMappingURL=p-7b2fb08d.entry.js.map