(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7oih":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("dI71"),o=n("Wbzz"),c=(n("RSd7"),{Home:"/",Qualifications:"/Qualifications",Programming:"/Programming",Music:"/Music"}),l=Object.keys(c);function s(e){return r.a.createElement("li",{className:"navbarItem"+(e.isActive?" active":"")},r.a.createElement(o.a,{className:"navbarLink",to:c[e.currentPageName]},e.currentPageName))}var u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentRelativePath:null},n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({currentRelativePath:window.location.href.replace(window.location.origin,"")})},n.render=function(){var e=this;return r.a.createElement("nav",{role:"navigation","aria-label":"Page Navigation"},r.a.createElement("ul",{id:"navbar"},l.map((function(t){return r.a.createElement(s,{isActive:e.state.currentRelativePath===c[t]||e.state.currentRelativePath===c[t]+"/",currentPageName:t,key:t})}))))},t}(r.a.Component),m=(n("WPSQ"),function(){return r.a.createElement("header",null,r.a.createElement("div",{id:"title-container"},r.a.createElement("h1",{id:"title"},"Saurabh Totey"),r.a.createElement("span",{id:"secret-tooltip"},"Just in case you didn't know whose website you were on. Read about me on the home page if you don't know what biological species I am.")),r.a.createElement(u,null))}),h=n("ma3e"),p=n("eFCx"),d=(n("WLi9"),{email:{icon:h.d,path:"mailto:SaurabhTotey@gmail.com"},phone:{icon:h.b,path:"tel:7206482674"},github:{icon:h.a,path:"https://www.github.com/SaurabhTotey"},reddit:{icon:h.c,path:"https://www.reddit.com/u/SaurabhTotey"},twitter:{icon:h.e,path:"https://twitter.com/SaurabhTotey"}}),f=100/Object.keys(d).length,v=function(){return r.a.createElement("footer",null,r.a.createElement(p.a,{responsiveWidths:[3,9]},r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},"Contact / Follow me:"),r.a.createElement("div",{style:{width:"100%"}},Object.keys(d).map((function(e){return r.a.createElement("a",{className:"footerLink",href:d[e].path,style:{width:f+"%"},key:e,"aria-label":e},d[e].icon())})))))};n("pa+W"),t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),t,r.a.createElement(v,null))}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.a.createContext&&r.a.createContext(i),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function s(e){return function(t){return r.a.createElement(u,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.a.createElement(t.tag,c({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,a=e.attr,i=e.size,o=e.title,s=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&r.a.createElement("title",null,o),e.children)};return void 0!==o?r.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},RSd7:function(e,t,n){},WLi9:function(e,t,n){},WPSQ:function(e,t,n){},eFCx:function(e,t,n){"use strict";n("E9XD");var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=(n("lP9h"),function(e){function t(t){return console.assert(t.responsiveWidths&&i.a.Children.count(t.children)===t.responsiveWidths.length&&12===t.responsiveWidths.reduce((function(e,t){return e+t}),0)),e.call(this,t)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("div",{className:"responsiveContainer"},this.props.children.map((function(t,n){return i.a.createElement("div",{className:"responsiveContainerItem",style:{"--responsive-width":e.props.responsiveWidths[n]},key:n},t)})))},t}(i.a.Component));t.a=o},lP9h:function(e,t,n){},"pa+W":function(e,t,n){},tSSd:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("7oih");t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("p",null,"Sorry, this page is a work in progress! I plan on uploading some recordings of me playing piano and possibly cello here."))}}}]);
//# sourceMappingURL=component---src-pages-music-js-78a5d7159e10df172858.js.map