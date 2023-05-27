"use strict";(self.webpackChunkPortfolio=self.webpackChunkPortfolio||[]).push([[332],{332:(U,r,l)=>{l.r(r),l.d(r,{HomeModule:()=>A});var s=l(755),g=l(908),m=l(398),t=l(20),d=l(715),a=l(868),p=l(791);function c(e,i){1&e&&(t.O4$(),t.TgZ(0,"svg",22),t._UZ(1,"path",23),t.qZA())}function x(e,i){1&e&&(t.O4$(),t.TgZ(0,"svg",24),t._UZ(1,"path",25),t.qZA())}function f(e,i){if(1&e&&(t.TgZ(0,"li",13)(1,"div",14)(2,"span",15),t.YNc(3,c,2,0,"svg",16),t.YNc(4,x,2,0,"svg",17),t.qZA(),t.TgZ(5,"span",18),t._uU(6),t.qZA()(),t.TgZ(7,"div",19)(8,"p",20),t._uU(9),t.qZA(),t.TgZ(10,"p",21),t._uU(11),t.qZA()()()),2&e){const o=i.$implicit,n=i.first;t.xp6(3),t.Q6J("ngIf",n),t.xp6(1),t.Q6J("ngIf",!n),t.xp6(2),t.Oqu(o.workTimes),t.xp6(3),t.hij(" ",o.companyName," "),t.xp6(2),t.hij(" ",o.role," ")}}function u(e,i){if(1&e&&(t.TgZ(0,"li",28),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o)}}function v(e,i){if(1&e&&(t.TgZ(0,"div")(1,"ul",26),t.YNc(2,u,2,1,"li",27),t.qZA()()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.skills.BackEnd)}}function h(e,i){if(1&e&&(t.TgZ(0,"li",28),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o)}}function Z(e,i){if(1&e&&(t.TgZ(0,"div")(1,"ul",26),t.YNc(2,h,2,1,"li",27),t.qZA()()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.skills.Database)}}function T(e,i){if(1&e&&(t.TgZ(0,"li",28),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o)}}function w(e,i){if(1&e&&(t.TgZ(0,"div")(1,"ul",29),t.YNc(2,T,2,1,"li",27),t.qZA()()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.skills.FrontEnd)}}let k=(()=>{class e{constructor(o,n){this.workTimeService=o,this.skillServie=n,this.works=[],this.skills={BackEnd:[],FrontEnd:[],Database:[]}}ngOnInit(){this.works&&0===this.works.length&&(this.works=this.workTimeService.getWorkTimes()),this.skills&&0===this.skills?.BackEnd.length&&(this.skills=this.skillServie.getSkills())}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.gT),t.Y36(p.Uc))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-work-time"]],decls:24,vars:4,consts:[[1,"bg-cyan-100","w-full","grid","grid-flow-row","grid-rows-1","sm:grid-cols-1","md:grid-cols-2","lg:grid-cols-2","gap-6","sm:p-3","md:p-3","lg:p-3","xl:p-3"],[1,"container","order-1","flex","sm:justify-start","md:justify-center","lg:justify-center","justify-start"],[1,"sm:text-xl","md:text-2xl","lg:text-2xl","font-bold","sm:mr-1","sm:mt-2","md:mr-1","lg:mr-5","xl:mr-5"],["data-mdb-stepper","stepper","data-mdb-stepper-type","vertical",1,"stepper","stepper-vertical"],["class","stepper-step stepper-active",4,"ngFor","ngForOf"],[1,"container","order-2","bg-white","rounded-md","sm:p-6","md:p-6","lg:p-6","xl:p-6"],[1,"md:text-lg","sm:text-lg","xl:text-lg","lg:text-lg","font-bold","text-lg"],[1,"md:text-xl","lg:text-xl","sm:text-xs"],[1,"md:text-lg","lg:text-lg","sm:text-lg","font-thin","overflow-clip"],[1,"text-lg","font-bold","mb-2"],[1,"text-lg"],[4,"ngIf"],[1,"text-xl"],[1,"stepper-step","stepper-active"],[1,"stepper-head","flex"],[1,"flex","stepper-head-icon","w-10","rounded-full","font-bold","text-gray-700","text-sm","justify-center","items-center","mr-3"],["width","25","height","25","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],["width","30","height","30","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],[1,"mt-1","text-base"],[1,"stepper-content","ml-14","md:h-16","lg:h-16","xl:h-16"],[1,"font-bold","text-base"],[1,"text-base"],["width","25","height","25","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57929 16.4087 4 11.992 4C7.57528 4 3.99421 7.57929 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z","fill","#2E3A59"],["width","30","height","30","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C18.9956 15.8642 15.8642 18.9956 12 19ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z","fill","#2E3A59"],[1,"md:inline-flex","lg:inline-flex","xl:inline-flex"],["class","p-2 font-bold",4,"ngFor","ngForOf"],[1,"p-2","font-bold"],[1,"lg:inline-flex","xl:inline-flex","grid-flow-row"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3," Work Experiences "),t.qZA(),t.TgZ(4,"ul",3),t.YNc(5,f,12,5,"li",4),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6),t._uU(8,"Education"),t.qZA(),t.TgZ(9,"div",7),t._uU(10,"2011 - 2016"),t.qZA(),t.TgZ(11,"div",8),t._uU(12," Information Technology - Viet Nam National University of Agriculture(VNUA) "),t.qZA(),t.TgZ(13,"div",9),t._uU(14,"Skills"),t.qZA(),t.TgZ(15,"div",10),t._uU(16," BackEnd "),t.qZA(),t.YNc(17,v,3,1,"div",11),t.TgZ(18,"div",12),t._uU(19," Database "),t.qZA(),t.YNc(20,Z,3,1,"div",11),t.TgZ(21,"div",12),t._uU(22," Front End "),t.qZA(),t.YNc(23,w,3,1,"div",11),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("ngForOf",n.works),t.xp6(12),t.Q6J("ngIf",n.skills&&n.skills.BackEnd&&n.skills.BackEnd.length>0),t.xp6(3),t.Q6J("ngIf",n.skills&&n.skills.Database&&n.skills.Database.length>0),t.xp6(3),t.Q6J("ngIf",n.skills&&n.skills.FrontEnd&&n.skills.FrontEnd.length>0))},dependencies:[s.sg,s.O5],styles:['.stepper-vertical[_ngcontent-%COMP%]   .stepper-step[_ngcontent-%COMP%]:not(:last-child):after{position:absolute;left:1.2rem;height:calc(100% - 1.2rem);top:1.6rem;width:2px;margin-top:0rem;content:"";background-color:#0000001a}.stepper-vertical[_ngcontent-%COMP%]   .stepper-step[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;position:relative}']}),e})();const _=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:16,vars:0,consts:[[1,"w-full","grid","grid-flow-row","grid-rows-1","sm:grid-cols-1","md:grid-cols-2","lg:grid-cols-2","gap-6"],[1,"md:p-3","sm:p-3","lg:p-3","xl:p-3","sm:order-2","md:order-1","lg:order-1","order-2"],[1,"m-2","sm:text-3xl","md:text-5xl","lg:text-5xl","text-2xl"],[1,"m-2","sm:text-2xl","md:text-4xl","lg:text-4xl","text-gray-600","text-xl"],[1,"md:text-2xl","sm:text-xl"],[1,"m-2","sm:text-2xl","md:text-2xl","lg:text-2xl","text-gray-600","text-xl"],[1,"img-avatar","text-right","md:p-3","sm:p-3","lg:p-3","xl:p-3","sm:order-1","md:order-2","lg:order-2","order-1"],[1,"flex","justify-center","m-auto"],["src","./assets/images/avatar-image.png","alt","avatar-image",1,"w-1/2","sm:w-2/3","md:w-2/5","lg:w-2/5"]],template:function(o,n){1&o&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t._uU(4,"Hi, I am Xuan Nguyen Thanh"),t.qZA(),t.TgZ(5,"div",3),t._uU(6,"Senior Software Engineer "),t.TgZ(7,"span",4),t._uU(8,"- 29 year olds"),t.qZA()(),t.TgZ(9,"div",5),t._uU(10,"Based in Ha Noi, Viet Nam"),t.qZA()(),t.TgZ(11,"div",6)(12,"div",7),t._UZ(13,"img",8),t.qZA()()(),t._UZ(14,"app-work-time")(15,"app-footer"))},dependencies:[d.c,a.G,k]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(_),m.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,C,g.O]}),e})()}}]);