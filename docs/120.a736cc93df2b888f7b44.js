(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{VzDg:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),t=u("tBOM"),e=(u("OO+k"),function(l,n,u,a){return new(u||(u=Promise))(function(t,e){function r(l){try{i(a.next(l))}catch(l){e(l)}}function o(l){try{i(a.throw(l))}catch(l){e(l)}}function i(l){l.done?t(l.value):new u(function(n){n(l.value)}).then(r,o)}i((a=a.apply(l,n||[])).next())})}),r=function(){function l(l){this.platform=l}return l.prototype.ngOnInit=function(){return e(this,void 0,void 0,function(){return function(l,n){var u,a,t,e,r={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return e={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function o(e){return function(o){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;r;)try{if(u=1,a&&(t=a[2&e[0]?"return":e[0]?"throw":"next"])&&!(t=t.call(a,e[1])).done)return t;switch(a=0,t&&(e=[0,t.value]),e[0]){case 0:case 1:t=e;break;case 4:return r.label++,{value:e[1],done:!1};case 5:r.label++,a=e[1],e=[0];continue;case 7:e=r.ops.pop(),r.trys.pop();continue;default:if(!(t=(t=r.trys).length>0&&t[t.length-1])&&(6===e[0]||2===e[0])){r=0;continue}if(3===e[0]&&(!t||e[1]>t[0]&&e[1]<t[3])){r.label=e[1];break}if(6===e[0]&&r.label<t[1]){r.label=t[1],t=e;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(e);break}t[2]&&r.ops.pop(),r.trys.pop();continue}e=n.call(l,r)}catch(l){e=[6,l],a=0}finally{u=t=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,o])}}}(this,function(l){switch(l.label){case 0:return[4,this.platform.ready()];case 1:return l.sent(),[4,this.loadMap()];case 2:return l.sent(),[2]}})})},l.prototype.loadMap=function(){var l={lat:32,lng:-97},n=[0,90,180,270].map(function(n){return t.h.computeOffset(l,300,n)});this.map=t.d.create("map_canvas",{camera:{target:n,padding:100},gestures:{scroll:!0,tilt:!0,rotate:!0,zoom:!0}});var u=this.map.addMarkerSync({position:n[0],draggable:!0,title:"Drag me!"});u.trigger(t.f.MARKER_CLICK);var a=this.map.addCircleSync({center:l,radius:300,strokeColor:"#AA00FF",strokeWidth:5,fillColor:"#00880055"});u.on("position_changed").subscribe(function(n){var u=t.h.computeDistanceBetween(l,n[1]);a.setRadius(u)})},l}(),o=function(){},i=u("pMnS"),c=u("ntG5"),s=u("YxxD"),p=a.Ja({encapsulation:0,styles:[["#map_canvas[_ngcontent-%COMP%]{width:100%;height:90%}"]],data:{}});function f(l){return a.Za(0,[(l()(),a.La(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),a.Ka(1,16384,null,0,c.x,[a.k],null,null),(l()(),a.La(2,0,null,null,8,"ion-toolbar",[],null,null,null,null,null)),a.Ka(3,16384,null,0,c.Xa,[a.k],null,null),(l()(),a.La(4,0,null,null,3,"ion-buttons",[["slot","start"]],null,null,null,null,null)),a.Ka(5,16384,null,0,c.f,[],null,null),(l()(),a.La(6,0,null,null,1,"ion-menu-button",[],null,null,null,null,null)),a.Ka(7,16384,null,0,c.O,[a.k],null,null),(l()(),a.La(8,0,null,null,2,"ion-title",[],null,null,null,null,null)),a.Ka(9,16384,null,0,c.Ya,[a.k],null,null),(l()(),a.Ya(-1,null,[" Circle "])),(l()(),a.La(11,0,null,null,6,"ion-content",[["padding",""]],null,null,null,null,null)),a.Ka(12,16384,null,0,c.q,[a.k],null,null),(l()(),a.La(13,0,null,null,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/circle/circle.page.ts"],["target","_blank"]],null,null,null,null,null)),(l()(),a.Ya(-1,null,["[source code]"])),(l()(),a.La(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Ya(-1,null,["Drag the marker!"])),(l()(),a.La(17,0,null,null,0,"div",[["id","map_canvas"]],null,null,null,null,null))],null,null)}var d=a.Ha("app-circle",r,function(l){return a.Za(0,[(l()(),a.La(0,0,null,null,1,"app-circle",[],null,null,null,f,p)),a.Ka(1,114688,null,0,r,[s.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),h=u("Ip0R"),b=u("gIcY"),g=u("95zI"),m=u("9opb"),v=u("apKv"),y=u("B4/3"),k=u("ZYCi");u.d(n,"CirclePageModuleNgFactory",function(){return w});var w=a.Ia(o,[],function(l){return a.Ra([a.Sa(512,a.j,a.X,[[8,[i.a,d]],[3,a.j],a.v]),a.Sa(4608,h.k,h.j,[a.s,[2,h.p]]),a.Sa(4608,b.d,b.d,[]),a.Sa(4608,g.a,g.a,[a.x,a.g]),a.Sa(4608,m.a,m.a,[g.a,a.j,a.p]),a.Sa(4608,v.a,v.a,[g.a,a.j,a.p]),a.Sa(1073742336,h.b,h.b,[]),a.Sa(1073742336,b.c,b.c,[]),a.Sa(1073742336,b.a,b.a,[]),a.Sa(1073742336,y.a,y.a,[]),a.Sa(1073742336,k.n,k.n,[[2,k.t],[2,k.l]]),a.Sa(1073742336,o,o,[]),a.Sa(1024,k.j,function(){return[[{path:"",component:r}]]},[])])})}}]);