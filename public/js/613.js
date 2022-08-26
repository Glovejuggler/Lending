"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[613],{9018:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=["type"];const a={__name:"Button",props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,n.renderSlot)(t.$slots,"default")],8,r)}}}},7887:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=["value"];const a={__name:"Input",props:["modelValue"],emits:["update:modelValue"],setup:function(e){var t=(0,n.ref)(null);return(0,n.onMounted)((function(){t.value.hasAttribute("autofocus")&&t.value.focus()})),function(o,a){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:a[0]||(a[0]=function(e){return o.$emit("update:modelValue",e.target.value)}),ref_key:"input",ref:t},null,40,r)}}}},1329:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(821),r={class:"block font-medium text-sm text-gray-700"},a={key:0},l={key:1};const s={__name:"Label",props:["value"],setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("label",r,[e.value?((0,n.openBlock)(),(0,n.createElementBlock)("span",a,(0,n.toDisplayString)(e.value),1)):((0,n.openBlock)(),(0,n.createElementBlock)("span",l,[(0,n.renderSlot)(t.$slots,"default")]))])}}}},4613:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var n=o(821),r=(0,n.createElementVNode)("div",{class:"bg-white shadow"},[(0,n.createElementVNode)("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[(0,n.createElementVNode)("h2",{class:"font-semibold text-xl text-gray-800 my-auto"}," New Lendee ")])],-1),a={class:"py-12"},l={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},s={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},d={class:"p-6 bg-white border-b border-gray-200"},u={class:"mt-5"},c=(0,n.createTextVNode)("Add");var m=o(9018),i=o(1329),p=o(7887),f=o(9038);const v={components:{Head:f.Fb,BreezeButton:m.Z,BreezeLabel:i.Z,BreezeInput:p.Z,useForm:f.cI},setup:function(){return{form:(0,f.cI)({name:"",address:""})}}};const b=(0,o(3744).Z)(v,[["render",function(e,t,o,m,i,p){var f=(0,n.resolveComponent)("Head"),v=(0,n.resolveComponent)("BreezeLabel"),b=(0,n.resolveComponent)("BreezeInput"),g=(0,n.resolveComponent)("BreezeButton");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(f,{title:"New Lendee"}),r,(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("form",{onSubmit:t[2]||(t[2]=(0,n.withModifiers)((function(t){return m.form.post(e.route("lendees.store"))}),["prevent"]))},[(0,n.createElementVNode)("div",null,[(0,n.createVNode)(v,{for:"name",value:"Name"}),(0,n.createVNode)(b,{id:"name",type:"text",class:"mt-1 block w-96",modelValue:m.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return m.form.name=e})},null,8,["modelValue"])]),(0,n.createElementVNode)("div",u,[(0,n.createVNode)(v,{for:"address",value:"Address"}),(0,n.createVNode)(b,{id:"address",type:"text",class:"mt-1 block w-96",modelValue:m.form.address,"onUpdate:modelValue":t[1]||(t[1]=function(e){return m.form.address=e})},null,8,["modelValue"])]),(0,n.createElementVNode)("div",null,[(0,n.createVNode)(g,{class:(0,n.normalizeClass)(["mt-4",{"opacity-25":m.form.processing}]),disabled:m.form.processing},{default:(0,n.withCtx)((function(){return[c]})),_:1},8,["class","disabled"])])],32)])])])])],64)}]])}}]);