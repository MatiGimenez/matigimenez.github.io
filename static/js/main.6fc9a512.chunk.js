(this["webpackJsonpmarvel-wiki"]=this["webpackJsonpmarvel-wiki"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},155:function(e,t){},157:function(e,t){},168:function(e,t){},170:function(e,t){},197:function(e,t){},199:function(e,t){},200:function(e,t){},205:function(e,t){},207:function(e,t){},226:function(e,t){},238:function(e,t){},241:function(e,t){},244:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(122),s=n.n(i),r=(n(132),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))}),o=n(125),d=n(4),u=n(38),j=(n(133),n(1)),h=function(){var e=Object(c.useState)(window.innerWidth),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(){return a(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n<700?Object(j.jsx)("div",{className:"contracted-header",children:Object(j.jsx)("i",{className:"fas fa-bars"})}):Object(j.jsxs)("div",{className:"expanded-header",children:[Object(j.jsx)("div",{children:"Boton 1"}),Object(j.jsx)("div",{children:"Boton 2"}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"",src:"../../assets/images/marvel-wiki-logo.png",width:200,height:50})}),Object(j.jsx)("div",{children:"Boton 3"}),Object(j.jsx)("div",{children:"Boton 4"})]})},l=n(123),b=n.n(l),f=n(124),m=n.n(f),O=(new Date).getTime(),x="801ba33176620102b5413c542a89c925",v=m.a.createHash("md5").update(O.toString()).update("9dfaddc316d2680fad4266d79cee2fb81ef25d29").update(x).digest("hex"),p=(n(244),function(e){return Object(j.jsx)("div",{className:"character-card",children:Object(j.jsxs)("div",{className:"character-card-content",children:[Object(j.jsx)("img",{className:"character-card-content-img",width:300,height:300,alt:"",src:"".concat(e.thumbnail.path.replace("http","https"),".").concat(e.thumbnail.extension)}),Object(j.jsx)("h3",{className:"character-card-content-title",children:e.name})]})})}),g=n(127),w=(n(245),function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("i",{className:"fas fa-search search-icon"}),Object(j.jsx)("input",Object(g.a)({className:"custom-input"},e))]})}),N=(n(246),function(){return Object(j.jsx)("div",{className:"search-area",children:Object(j.jsxs)("div",{className:"input-container",children:[Object(j.jsx)("h1",{className:"search-area-title",children:"Aqu\xed pod\xe9s buscar Personajes y C\xf3mics"}),Object(j.jsx)(w,{type:"text",name:"search"})]})})}),k=(n(247),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=!0;return b.a.get("https://gateway.marvel.com:443/v1/public/characters?ts=".concat(O,"&apikey=").concat(x,"&hash=").concat(v)).then((function(t){e&&(console.log(t.data.data.results),a(t.data.data.results))})),function(){return e=!1}}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(N,{}),Object(j.jsx)("div",{className:"dashboard",children:n&&n.map((function(e){return Object(j.jsx)(p,{name:e.name,thumbnail:e.thumbnail},e.id)}))})]})}),B=(n(248),function(){return Object(j.jsxs)("div",{className:"main-page",children:[Object(j.jsx)(h,{}),Object(j.jsx)(k,{})]})});s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(d.a,{path:"/",exact:!0,component:B})})}),document.getElementById("root")),r()}},[[253,1,2]]]);
//# sourceMappingURL=main.6fc9a512.chunk.js.map