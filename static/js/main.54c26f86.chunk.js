(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{18:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return a})),n.d(e,"e",(function(){return u}));var c=n(14),o=Object(c.b)({selectId:function(t){return t.id}}),r=Object(c.c)({name:"counter",initialState:o.getInitialState(),reducers:{addProductAction:function(t,e){o.addOne(t,e.payload)},deleteProductAction:function(t,e){o.removeOne(t,e.payload)},setSelectedProduct:function(t,e){o.updateOne(t,{id:e.payload.id,changes:{isSelected:e.payload.changes}})}}}),i=r.actions,d=i.addProductAction,a=i.deleteProductAction,u=i.setSelectedProduct;e.b=r.reducer},25:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var c=n(16),o=n(18).d.getSelectors((function(t){return t.products})),r=(o.selectById,Object(c.a)(o.selectAll,(function(t){return t.find((function(t){return!0===t.isSelected}))}))),i=Object(c.a)(o.selectAll,(function(t){return t}))},26:function(t,e){},36:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c,o,r,i=n(0),d=n.n(i),a=n(20),u=n.n(a),s=(n(36),n(19)),l=n(3),b=n(9),j=n(10),p=j.a.div(c||(c=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 720px;\n  margin: 0 auto;\n  button {\n    padding: 1em;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]))),h=n(31),m=n(11),O=n(6),f=n(1),x=j.a.li(o||(o=Object(b.a)(["\n  margin-top: 25px;\n  background-color: white;\n  border-radius: 3px;\n  padding: 1em;\n  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);\n  span.productName {\n    font-weight: bold;\n  }\n  img {\n    float: left;\n    margin-right: 16px;\n    width: 150px;\n  }\n  &:last-child {\n    margin-bottom: 25px;\n  }\n  a {\n    color: black;\n    text-decoration: none;\n    border: 1px solid grey;\n    margin-right: 16px;\n    padding: 0.7em;\n    border-radius: 3px;\n    &:hover {\n      background-color: grey;\n      color: white;\n    }\n  }\n  button {\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])));function g(t){var e=t.id,n=t.imgUrl,c=t.productName,o=t.productDescription,r=t.productCount,i=Object(m.b)();return Object(f.jsxs)(x,{className:"productItem",children:[Object(f.jsxs)("div",{className:"product",children:[Object(f.jsx)("img",{src:n,alt:"product"}),Object(f.jsx)("span",{className:"productName",children:c}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{className:"productDescription",children:o}),Object(f.jsx)("span",{className:"productCount",children:r})]}),Object(f.jsxs)("div",{className:"buttonsBlock",children:[Object(f.jsx)(s.b,{to:"/products/".concat(e),onClick:function(){return i(Object(O.setSelectedProduct)({id:e,changes:!0}))},children:"Product Details"}),Object(f.jsx)("button",{onClick:function(){return i(Object(O.deleteProductAction)(e))},children:"Delete"})]})]})}var v,P=j.a.ul(r||(r=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n"])));function S(t){return Object(f.jsx)(P,{children:t.arr.map((function(t){return Object(f.jsx)(g,{id:t.id,imgUrl:t.imageUrl,productName:t.name,productDescription:"Size: Width: ".concat(t.size.width," Height: ").concat(t.size.height),productCount:"Count: ".concat(t.count)})}))})}var w,A=j.a.div(v||(v=Object(b.a)(["\n  button.addProduct {\n    margin-bottom: 25px;\n  }\n"])));function N(){var t=Object(m.c)(O.allProductsSelector),e=Object(i.useState)(1),n=Object(h.a)(e,2),c=n[0],o=n[1],r=Object(m.b)();return Object(f.jsxs)(A,{children:[Object(f.jsx)("h1",{children:"Products List"}),Object(f.jsxs)("div",{className:"productsBlock",children:[Object(f.jsx)(S,{arr:t}),Object(f.jsx)("button",{className:"addProduct",onClick:function(){return fetch("https://fakestoreapi.com/products/".concat(c)).then((function(t){return t.json()})).then((function(t){o((function(t){return t+1})),r(Object(O.addProductAction)({id:t.id,isSelected:!1,imageUrl:t.image,name:t.title,count:2+c,size:{width:3+c,height:3+c},weight:"300g"}))}))},children:"New Product"})]})]})}var k=j.a.div(w||(w=Object(b.a)(["\n  img {\n    width: 380px;\n  }\n  .productName {\n    font-weight: bold;\n  }\n"])));function y(){var t=Object(l.f)(),e=t.listen((function(e){"POP"===t.action&&n(Object(O.setSelectedProduct)({id:(null===c||void 0===c?void 0:c.id)?c.id:0,changes:!1}))}));Object(i.useEffect)((function(){return e()}));var n=Object(m.b)(),c=Object(m.c)(O.selectedProductSelector);return Object(f.jsxs)(k,{children:[Object(f.jsx)(s.b,{to:"/",onClick:function(){return n(Object(O.setSelectedProduct)({id:(null===c||void 0===c?void 0:c.id)?c.id:0,changes:!1}))},children:"Back"}),Object(f.jsx)("h1",{children:"Details Page"}),Object(f.jsx)("span",{className:"productName",children:null===c||void 0===c?void 0:c.name}),Object(f.jsx)("br",{}),Object(f.jsx)("img",{src:null===c||void 0===c?void 0:c.imageUrl,alt:""}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"\n        Count: ".concat(null===c||void 0===c?void 0:c.count,"\n        Sizes: Width: ").concat(null===c||void 0===c?void 0:c.size.width," Height: ").concat(null===c||void 0===c?void 0:c.size.height,"\n        Weight: ").concat(null===c||void 0===c?void 0:c.weight)}),Object(f.jsx)("br",{})]})}var C=function(){return Object(f.jsx)(s.a,{children:Object(f.jsx)(p,{children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(f.jsx)(l.a,{path:"/products/:productId",children:Object(f.jsx)(y,{})})]})})})},I=n(12),z=n(14),B=Object(z.b)({selectId:function(t){return t.id}}),D=Object(z.c)({name:"comments",initialState:B.getInitialState(),reducers:{addCommentAction:function(t,e){B.addOne(t,e.payload)},deleteCommentAction:function(t,e){B.removeOne(t,e.payload)},editCommentAction:function(t,e){B.updateOne(t,{id:e.payload.id,changes:{description:e.payload.text}})}}}),U=D.actions,W=(U.addCommentAction,U.deleteCommentAction,D.reducer),E=n(18),H=Object(I.b)({comments:W,products:E.b}),J=Object(z.a)({reducer:H});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(f.jsx)(d.a.StrictMode,{children:Object(f.jsx)(m.a,{store:J,children:Object(f.jsx)(C,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},6:function(t,e,n){"use strict";var c=n(25);n.d(e,"allProductsSelector",(function(){return c.a})),n.d(e,"selectedProductSelector",(function(){return c.b}));var o=n(26);n.o(o,"addProductAction")&&n.d(e,"addProductAction",(function(){return o.addProductAction})),n.o(o,"deleteProductAction")&&n.d(e,"deleteProductAction",(function(){return o.deleteProductAction})),n.o(o,"setSelectedProduct")&&n.d(e,"setSelectedProduct",(function(){return o.setSelectedProduct}));var r=n(18);n.d(e,"addProductAction",(function(){return r.a})),n.d(e,"deleteProductAction",(function(){return r.c})),n.d(e,"setSelectedProduct",(function(){return r.e}))}},[[44,1,2]]]);
//# sourceMappingURL=main.54c26f86.chunk.js.map