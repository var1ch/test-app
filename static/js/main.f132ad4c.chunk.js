(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{19:function(t,e,c){},26:function(t,e,c){"use strict";c.r(e);var r,n=c(0),o=c.n(n),s=c(6),a=c.n(s),i=(c(19),c(9)),d=c(10).a.div(r||(r=Object(i.a)(["\n  width: 1024px;\n  margin: 0 auto;\n  border: 1px solid black;\n"]))),u=c(1);function l(t){var e=t.imgUrl,c=t.productName,r=t.productDescription,n=t.productAmount;return Object(u.jsx)("li",{className:"productItem",children:Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("img",{src:e,alt:"product"}),Object(u.jsx)("span",{className:"productName",children:c}),Object(u.jsx)("p",{className:"productDescription",children:r}),Object(u.jsx)("span",{className:"productAmount",children:n})]})})}function j(){return Object(u.jsx)(l,{imgUrl:"#",productName:"my product",productDescription:"asdfasdf",productAmount:44})}var p=function(){return Object(u.jsxs)(d,{children:[Object(u.jsx)("h1",{children:"Products List"}),Object(u.jsx)(j,{})]})},m=c(2),b=c(3),h=Object(b.c)({name:"comments",initialState:[],reducers:{}}).reducer,O=Object(b.b)({selectId:function(t){return t.id}}),x=Object(b.c)({name:"counter",initialState:O.getInitialState(),reducers:{setProductsAction:function(t,e){O.setAll(t,e.payload)}}}).reducer,f=Object(m.b)({comments:h,products:x}),g=Object(b.a)({reducer:f}),v=c(14);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(v.a,{store:g,children:Object(u.jsx)(p,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f132ad4c.chunk.js.map