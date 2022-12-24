(()=>{"use strict";var t={9881:(t,e,s)=>{s(6992),s(8674),s(9601),s(7727);var i=s(144),n=s(1096),r=s(3250),a=s(555),o=s(5057),l=s(940),u=s(3551),c=s(3347),d=function(){var t=this,e=t._self._c;return e(n.Z,[e(r.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(l.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(l.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(c.Z),e(a.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(o.Z,[t._v("mdi-open-in-new")])],1)],1),e(u.Z,[e("router-view")],1)],1)},h=[];const p={name:"App",data:function(){return{}}},v=p;var f=s(1001),g=(0,f.Z)(v,d,h,!1,null,null,null);const m=g.exports;var C=s(8345),w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"GOL"},[e("navbar-app"),e("section",{staticClass:"hero primary-background is-fullheight"},[e("div",{staticClass:"main-content-app"},[e("div",{staticClass:"container is-paddingless"},[e("div",{staticClass:"columns box is-fullwidth is-gapless"},[e("div",{staticClass:"column is-12"},[e("transition",{attrs:{mode:"out-in",name:"fade"}},[e("keep-alive",["gamePage"==t.mainComponent?e("app-grid",{attrs:{message:t.message,"current-speed":t.speed}}):t._e()],1)],1)],1)])])]),e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half is-offset-one-quarter"},[e("app-controller",{attrs:{"is-running":t.isRunning,"main-component":t.mainComponent},on:{send:function(e){return t.delegate(e)}}})],1)])])])])],1)},b=[],y=(s(2564),function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("div",{staticClass:"field has-addons has-addons-centered is-marginless"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button",class:t.isRunning?"green":"red",attrs:{disabled:"gamePage"!==t.mainComponent,title:"play"},on:{click:function(e){return t.send("play")}}},[e(o.Z,{directives:[{name:"show",rawName:"v-show",value:!t.isRunning,expression:"!isRunning"}]},[t._v("mdi-play")]),e(o.Z,{directives:[{name:"show",rawName:"v-show",value:t.isRunning,expression:"isRunning"}]},[t._v("mdi-pause")])],1)]),e("p",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{disabled:"gamePage"!==t.mainComponent,title:"clear grid"},on:{click:function(e){return t.send("redoSession")}}},[e(o.Z,[t._v(" mdi-restart")])],1)])])])}),k=[];const Z={props:{isRunning:{default:!1,type:Boolean},mainComponent:{default:"gamePage",type:String}},methods:{send:function(t){this.$emit("send",t)}}},A=Z;var _=(0,f.Z)(A,y,k,!1,null,"d0737c24",null);const x=_.exports;var S=function(){var t=this,e=t._self._c;return e("div",[e("app-stats",{attrs:{"current-tick":t.currentTick,"cell-count":t.cellCount,"cells-alive":t.cellsAlive,"cells-created":t.cellsCreated,"current-speed":t.currentSpeed}}),e("div",{staticClass:"game-grid columns",on:{mousedown:function(e){t.isMouseDown=!0},mouseup:function(e){t.isMouseDown=!1},mouseleave:function(e){t.isMouseDown=!1}}},t._l(t.gridList,(function(s,i){return e("div",{key:i,staticClass:"game-column"},t._l(s,(function(s,n){return e("app-cell",{key:n,attrs:{"status-obj":s,"x-pos":i,"y-pos":n,"is-mouse-down":t.isMouseDown},on:{wasUpdated:t.updateCellCount}})})),1)})),0)],1)},P=[],j=(s(9653),s(9554),s(1539),s(4747),function(){var t=this,e=t._self._c;return e("div",{staticClass:"cell",class:t.isAlive.isAlive?"alive":"dead",on:{mousedown:function(e){return t.reborn(!0)},mouseover:function(e){return t.reborn(t.isMouseDown)}}})}),O=[];const M={props:{statusObj:{default:function(){return{isAlive:!1}},type:Object},xPos:{default:-1,type:Number},yPos:{default:-1,type:Number},isMouseDown:{default:!1,type:Boolean}},data:function(){return{isAlive:this.statusObj}},methods:{reborn:function(t){t&&(this.isAlive.isAlive=!this.isAlive.isAlive,this.$emit("wasUpdated",this.isAlive.isAlive))}}},L=M;var R=(0,f.Z)(L,j,O,!1,null,null,null);const T=R.exports,D={components:{"app-cell":T},props:{message:{default:"",type:String},importToken:{default:"",type:String},currentSpeed:{default:0,type:Number}},data:function(){return{width:46,height:20,gridList:[],currentTick:0,cellCount:0,cellsAlive:0,cellsCreated:0,isMouseDown:!1}},computed:{},watch:{message:function(t){"nextStep"===t?(this.update(),this.currentTick++):"redoSession"===t?this.reset():"randomSeed"===t&&this.randomSeed()}},created:function(){this.cellCalc()},methods:{cellCalc:function(){for(var t=0;t<this.width;t++){this.gridList[t]=[];for(var e=0;e<this.height;e++)this.gridList[t][e]={isAlive:!1}}this.cellCount=this.width*this.height},setCell:function(t,e,s){this.gridList[t][e].isAlive!=s&&(this.gridList[t][e].isAlive=s,this.updateCellCount(s))},update:function(){for(var t=[],e=0;e<this.width;e++){t[e]=[];for(var s=0;s<this.height;s++){var i=this.gridList[e][s].isAlive,n=this.getNeighbours(e,s),r=!1;i&&n<2&&(r=!1),(i&&2==n||3==n)&&(r=!0),i&&n>3&&(r=!1),i||3!=n||(r=!0),t[e][s]=r}}for(var a=0;a<this.width;a++)for(var o=0;o<this.height;o++)this.setCell(a,o,t[a][o])},getNeighbours:function(t,e){var s=0;if(t<=this.width&&e<=this.height)for(var i=-1;i<2;i++)for(var n=-1;n<2;n++){var r=t+i,a=e+n;(0!=i||0!=n)&&r>=0&&r<this.width&&a>=0&&a<this.height&&1==this.gridList[t+i][e+n].isAlive&&s++}return s},reset:function(){this.currentTick=0,this.cellsAlive=0,this.cellsCreated=0,this.gridList.forEach((function(t){t.forEach((function(t){t.isAlive=!1}))}))},randomSeed:function(){for(var t=0;t<this.width;t++)for(var e=0;e<this.height;e++){var s=Math.random();s<.2?this.setCell(t,e,!0):this.setCell(t,e,!1)}},exportSession:function(){for(var t="",e=0;e<this.width;e++)for(var s=0;s<this.height;s++)this.gridList[e][s].isAlive&&(t+="["+e+","+s+"]");this.$emit("exportToken",t)},updateCellCount:function(t){t?(this.cellsAlive++,this.cellsCreated++):this.cellsAlive--}}},N=D;var I=(0,f.Z)(N,S,P,!1,null,null,null);const $=I.exports,E={name:"App",components:{"app-grid":$,"app-controller":x},data:function(){return{message:"",isRunning:!1,speed:100,intervalID:0,mainComponent:"gamePage",selectedScenario:"scenario"}},created:function(){},methods:{delegate:function(t){"play"===t?(this.isRunning=!this.isRunning,this.restartInterval()):this.updateMessage(t)},updateMessage:function(t){this.message=t,i.ZP.nextTick(this.resetMessage)},resetMessage:function(){this.message=""},restartInterval:function(){clearInterval(this.intervalID),this.isRunning&&(this.intervalID=setInterval(this.updateMessage,5e4/this.speed,"nextStep"))}}},B=E;var U=(0,f.Z)(B,w,b,!1,null,null,null);const V=U.exports;i.ZP.use(C.ZP);var q=[{path:"/",name:"home",component:V}],F=new C.ZP({routes:q});const G=F;var z=s(6605);i.ZP.use(z.Z);const H=new z.Z({});i.ZP.config.productionTip=!1,new i.ZP({router:G,vuetify:H,render:function(t){return t(m)}}).$mount("#app")}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,s),r.exports}s.m=t,(()=>{var t=[];s.O=(e,i,n,r)=>{if(!i){var a=1/0;for(c=0;c<t.length;c++){for(var[i,n,r]=t[c],o=!0,l=0;l<i.length;l++)(!1&r||a>=r)&&Object.keys(s.O).every((t=>s.O[t](i[l])))?i.splice(l--,1):(o=!1,r<a&&(a=r));if(o){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,n,r]}})(),(()=>{s.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return s.d(e,{a:e}),e}})(),(()=>{s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{s.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{var t={143:0};s.O.j=e=>0===t[e];var e=(e,i)=>{var n,r,[a,o,l]=i,u=0;if(a.some((e=>0!==t[e]))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(l)var c=l(s)}for(e&&e(i);u<a.length;u++)r=a[u],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},i=self["webpackChunkjogo"]=self["webpackChunkjogo"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var i=s.O(void 0,[998],(()=>s(9881)));i=s.O(i)})();
//# sourceMappingURL=app.ca2fefe0.js.map