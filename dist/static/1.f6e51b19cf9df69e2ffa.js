(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"P+De":function(c,t,e){"use strict";e.r(t),e.d(t,"HomeModule",(function(){return a}));var n=e("fXoL"),o=e("ofXK"),s=e("tyNb"),i=e("sbAP");function r(c,t){if(1&c&&(n.mc(0,"li"),n.mc(1,"a",1),n.Pc(2),n.lc(),n.lc()),2&c){const c=t.$implicit;n.Vb(1),n.Dc("routerLink",c.route),n.Vb(1),n.Rc(" ",c.route," ")}}const l=[{path:"",component:(()=>{class c{constructor(c){this.scully=c,this.links$=this.scully.available$}ngOnInit(){this.links$.subscribe(c=>{console.log("home page debug:"),c.filter(c=>{var t;(c.route.startsWith("/blog/")||c.route.startsWith("/home")||(null===(t=c.sourceFile)||void 0===t?void 0:t.endsWith(".md")))&&console.log(c)})})}}return c.\u0275fac=function(t){return new(t||c)(n.gc(i.c))},c.\u0275cmp=n.ac({type:c,selectors:[["app-home"]],decls:7,vars:3,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(c,t){1&c&&(n.mc(0,"h1"),n.Pc(1,"Homepage"),n.lc(),n.mc(2,"ul"),n.Oc(3,r,3,2,"li",0),n.zc(4,"async"),n.lc(),n.mc(5,"p"),n.Pc(6," Scully injects the markdown's HTML at build time.\n"),n.lc()),2&c&&(n.Vb(3),n.Dc("ngForOf",n.Ac(4,1,t.links$)))},directives:[o.j,s.e],pipes:[o.b],styles:[""]}),c})()}];let u=(()=>{class c{}return c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=n.ec({type:c}),c.\u0275inj=n.dc({imports:[[s.f.forChild(l)],s.f]}),c})(),a=(()=>{class c{}return c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=n.ec({type:c}),c.\u0275inj=n.dc({imports:[[o.c,u]]}),c})()}}]);