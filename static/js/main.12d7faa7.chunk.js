(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),c=n.n(o),r=n(6),i=n(8),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),j=function(t){var e=t.good;return Object(b.jsx)("li",{"data-cy":"Good",children:e})},d=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(j,{good:t},t)}))})},h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var g=function(){var t=s.NONE,e=s.ALPHABET,n=s.LENGTH,o=Object(a.useState)(t),c=Object(r.a)(o,2),u=c[0],j=c[1],g=Object(a.useState)(!1),O=Object(r.a)(g,2),f=O[0],p=O[1],N=function(t,e){var n=e.sortType,o=e.isReversed,c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),o&&c.reverse(),c}(h,{sortType:u,isReversed:f}),m=u===e||u===n||f;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":u!==e}),onClick:function(){return j(e)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":u!==n}),onClick:function(){return j(n)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!f}),onClick:function(){return p(!f)},children:"Reverse"}),m&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){j(t),p(!1)},children:"Reset"})]}),Object(b.jsx)(d,{goods:N})]})};c.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.12d7faa7.chunk.js.map