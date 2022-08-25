"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[942],{9018:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(8253),l=["type"];const a={__name:"Button",props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,o){return(0,r.openBlock)(),(0,r.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,r.renderSlot)(t.$slots,"default")],8,l)}}}},7887:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(8253),l=["value"];const a={__name:"Input",props:["modelValue"],emits:["update:modelValue"],setup:function(e){var t=(0,r.ref)(null);return(0,r.onMounted)((function(){t.value.hasAttribute("autofocus")&&t.value.focus()})),function(o,a){return(0,r.openBlock)(),(0,r.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:a[0]||(a[0]=function(e){return o.$emit("update:modelValue",e.target.value)}),ref_key:"input",ref:t},null,40,l)}}}},1329:(e,t,o)=>{o.d(t,{Z:()=>u});var r=o(8253),l={class:"block font-medium text-sm text-gray-700"},a={key:0},n={key:1};const u={__name:"Label",props:["value"],setup:function(e){return function(t,o){return(0,r.openBlock)(),(0,r.createElementBlock)("label",l,[e.value?((0,r.openBlock)(),(0,r.createElementBlock)("span",a,(0,r.toDisplayString)(e.value),1)):((0,r.openBlock)(),(0,r.createElementBlock)("span",n,[(0,r.renderSlot)(t.$slots,"default")]))])}}}},9942:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var r=o(8253),l={class:"bg-white shadow"},a={class:"max-w-7xl mx-auto py-6 px-4 px-6 lg:px-8"},n={class:"flex justify-between"},u={class:"font-semibold text-xl text-gray-800 my-auto"},c={class:"py-12"},d={class:"max-w-7xl mx-auto px-6 lg:px-8"},i={class:"bg-white overflow-hidden shadow-sm rounded-lg"},s={class:"p-6 bg-white border-b border-gray-200"},m={key:0,class:"text-red-600"},p={class:"mt-5"},f={class:"mt-5"},V={class:"mt-5"},v={class:"mt-5"},y=(0,r.createTextVNode)("Loan");var b=o(9018),g=o(1329),k=o(7887),x=o(9038);const N={components:{Head:x.Fb,BreezeButton:b.Z,BreezeLabel:g.Z,BreezeInput:k.Z},setup:function(e){return{form:(0,x.cI)({lendee_id:e.lendee.id,principal:"",rate:"",term:"",amortization:"",maturity:""})}},props:{lendee:Object,errors:Object}};const w=(0,o(3744).Z)(N,[["render",function(e,t,o,b,g,k){var x=(0,r.resolveComponent)("Head"),N=(0,r.resolveComponent)("BreezeLabel"),w=(0,r.resolveComponent)("BreezeInput"),B=(0,r.resolveComponent)("BreezeButton");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(x,{title:"Loan"}),(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("h2",u," Loan for "+(0,r.toDisplayString)(o.lendee.name),1)])])]),(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("form",{onSubmit:t[5]||(t[5]=(0,r.withModifiers)((function(t){return b.form.post(e.route("loans.store"))}),["prevent"]))},[(0,r.createElementVNode)("div",null,[(0,r.createVNode)(N,{for:"principal",value:"Principal"}),(0,r.createVNode)(w,{autofocus:"",id:"principal",type:"text",class:"mt-1 block w-full lg:w-96",modelValue:b.form.principal,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b.form.principal=e})},null,8,["modelValue"]),o.errors.principal?((0,r.openBlock)(),(0,r.createElementBlock)("div",m,(0,r.toDisplayString)(o.errors.principal),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",p,[(0,r.createVNode)(N,{for:"rate",value:"Rate (%)"}),(0,r.createVNode)(w,{id:"rate",type:"text",class:"mt-1 block w-full lg:w-96",modelValue:b.form.rate,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.form.rate=e})},null,8,["modelValue"])]),(0,r.createElementVNode)("div",f,[(0,r.createVNode)(N,{for:"term",value:"Term"}),(0,r.createVNode)(w,{id:"term",type:"text",class:"mt-1 block w-full lg:w-96",modelValue:b.form.term,"onUpdate:modelValue":t[2]||(t[2]=function(e){return b.form.term=e})},null,8,["modelValue"])]),(0,r.createElementVNode)("div",V,[(0,r.createVNode)(N,{for:"amortization",value:"Amortization"}),(0,r.createVNode)(w,{id:"amortization",type:"text",class:"mt-1 block w-full lg:w-96",modelValue:b.form.amortization,"onUpdate:modelValue":t[3]||(t[3]=function(e){return b.form.amortization=e})},null,8,["modelValue"])]),(0,r.createElementVNode)("div",v,[(0,r.createVNode)(N,{for:"maturity",value:"Starting date of payment"}),(0,r.createVNode)(w,{id:"maturity",type:"date",class:"mt-1 block w-full lg:w-96",modelValue:b.form.maturity,"onUpdate:modelValue":t[4]||(t[4]=function(e){return b.form.maturity=e})},null,8,["modelValue"])]),(0,r.createElementVNode)("div",null,[(0,r.createVNode)(B,{class:(0,r.normalizeClass)(["mt-4",{"opacity-25":b.form.processing}]),disabled:b.form.processing},{default:(0,r.withCtx)((function(){return[y]})),_:1},8,["class","disabled"])])],32)])])])])],64)}]])}}]);