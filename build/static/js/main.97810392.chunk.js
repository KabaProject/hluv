(this.webpackJsonphluv=this.webpackJsonphluv||[]).push([[0],[,,,,,,function(t,n,e){},,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var c=e(1),a=e.n(c),s=e(7),o=e.n(s),i=(e(17),e(3)),l=(e(6),e(18),e(8)),r=(e(19),e.p+"static/media/Logo.9d12ac5d.svg"),u=e(0),j=function(t){return Object(u.jsx)("img",{src:r,alt:"hluv logo",class:"logo"})},b=e(4),d=(e(21),e(2)),h=e(9),m=function(t){var n=t.state,e=t.link;return Object(u.jsx)("a",{href:e,target:"_blank",className:"button button-go button-go--".concat(n),disabled:"disabled"===n,children:"loading"!==n?"GO":Object(u.jsx)(d.Icon,{icon:h.a,className:"button-go__spinner"})})},g=function(t){var n=t.type,e=t.link,c=t.children,a=t.icon;return Object(u.jsxs)("a",{href:"https://".concat(e),target:"_blank",className:"button button-link button--".concat(n),children:[a?Object(u.jsx)(d.Icon,{icon:a,className:"button-link__icon"}):null,Object(u.jsx)("span",{className:"button-link__text",children:c})]})},x=function(t){var n=t.type,e=t.icon,c=t.onClick,a=t.children;return Object(u.jsxs)("button",{className:"button button-normal button--".concat(n),onClick:function(t){t.preventDefault(),c()},children:[e?Object(u.jsx)(d.Icon,{icon:e,className:"button-normal__icon"}):null,Object(u.jsx)("span",{className:"button-normal__text",children:a})]})},O=function(t){switch(t.version){case"go":return Object(u.jsx)(m,Object(b.a)({},t));case"link":return Object(u.jsx)(g,Object(b.a)({},t));case"normal":return Object(u.jsx)(x,Object(b.a)({},t))}},v=(e(22),e(23),e(10)),f=e(11),_={mxn:v.a,usa:f.a},p=function(t){var n=t.country,e=void 0===n?"mxn":n,c=t.size,a=void 0===c?"medium":c;return Object(u.jsx)(d.Icon,{icon:_[e],className:"flag flag--".concat(a)})},N=e(12),k=function(t){var n=t.lang,e=void 0===n?"es":n;return Object(u.jsxs)("button",{className:"language",children:[Object(u.jsx)(p,{country:"es"===e?"mxn":"usa"}),Object(u.jsx)("span",{className:"language__text",children:"es"===e?"Espa\xf1ol":"English"}),Object(u.jsx)(d.Icon,{icon:N.a,className:"language__icon"})]})},y=function(t){var n=t.lang,e=void 0===n?"es":n;return Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)("div",{className:"navbar__logo",children:Object(u.jsx)(j,{})}),Object(u.jsx)("div",{className:"navbar__language",children:Object(u.jsx)(k,{lang:e})}),Object(u.jsx)("div",{className:"navbar__button",children:Object(u.jsx)(O,{version:"link",type:"primary",link:"ko-fi.com/hluvp",icon:l.a,children:"es"===e?"Apoyanos":"Support Us"})})]})},C=function(t){var n=t.state,e=t.value,c=t.onChange,a=t.link;return Object(u.jsxs)("section",{className:"hcode",children:[Object(u.jsx)(y,{}),Object(u.jsx)("main",{className:"hcode__main",children:Object(u.jsxs)("form",{className:"hcode__form",children:[Object(u.jsx)("h1",{className:"hcode__title",children:"Hcode Buscador"}),Object(u.jsx)("p",{className:"hcode__subtitle",children:"6-7 numeros"}),Object(u.jsx)("input",{className:"hcode__input",type:"text",autoFocus:!0,placeholder:"0000000",onChange:c,value:e}),Object(u.jsx)(O,{version:"go",state:n,link:a})]})})]})},I=function(t){var n=a.a.useState("disabled"),e=Object(i.a)(n,2),c=e[0],s=e[1],o=a.a.useState(""),l=Object(i.a)(o,2),r=l[0],j=l[1],b=a.a.useState(""),d=Object(i.a)(b,2),h=d[0],m=d[1];return Object(u.jsx)(C,{state:c,value:r,onChange:function(t){t.target.value.match(/^[0-9]{0,7}$/)&&j(t.target.value),t.target.value.match(/^[0-9]{6,7}$/)?(m(function(t){var n;switch(t.length){case 6:n="https://nhentai.net/g/".concat(t,"/");break;case 7:n="https://hitomi.la/reader/".concat(t,".html#1")}return n}(t.target.value)),s("loading"),setTimeout((function(){s("enabled")}),2e3)):(m(""),s("disabled"))},link:h})};var S=function(){return Object(u.jsx)(I,{})},F=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,o=n.getTTFB;e(t),c(t),a(t),s(t),o(t)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),F()}],[[24,1,2]]]);
//# sourceMappingURL=main.97810392.chunk.js.map