(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7oih":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("dI71"),i=a("Wbzz"),o=(a("RSd7"),{Home:"/",Qualifications:"/Qualifications",Programming:"/Programming",Music:"/Music"}),c=Object.keys(o);function u(e){return r.a.createElement("li",{className:"navbarItem"+(e.isActive?" active":"")},r.a.createElement(i.a,{className:"navbarLink",to:o[e.currentPageName]},e.currentPageName));}var s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={currentRelativePath:null},a;}Object(l.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({currentRelativePath:window.location.href.replace(window.location.origin,"")});},a.render=function(){var e=this;return r.a.createElement("nav",{role:"navigation","aria-label":"Page Navigation"},r.a.createElement("ul",{id:"navbar"},c.map((function(t){return r.a.createElement(u,{isActive:e.state.currentRelativePath===o[t]||e.state.currentRelativePath===o[t]+"/",currentPageName:t,key:t});}))));},t;}(r.a.Component),m=(a("WPSQ"),function(){return r.a.createElement("header",null,r.a.createElement("div",{id:"title-container"},r.a.createElement("h1",{id:"title"},"Saurabh Totey"),r.a.createElement("span",{id:"secret-tooltip"},"Just in case you didn't know whose website you were on. Read about me on the home page if you don't know what biological species I am.")),r.a.createElement(s,null));}),h=a("ma3e"),p=a("eFCx"),d=(a("WLi9"),{email:{icon:h.d,path:"mailto:SaurabhTotey@gmail.com"},phone:{icon:h.b,path:"tel:7206482674"},github:{icon:h.a,path:"https://www.github.com/SaurabhTotey"},reddit:{icon:h.c,path:"https://www.reddit.com/u/SaurabhTotey"},twitter:{icon:h.e,path:"https://twitter.com/SaurabhTotey"}}),f=100/Object.keys(d).length,v=function(){return r.a.createElement("footer",null,r.a.createElement(p.a,{responsiveWidths:[3,9]},r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},"Contact / Follow me:"),r.a.createElement("div",{style:{width:"100%"}},Object.keys(d).map((function(e){return r.a.createElement("a",{className:"footerLink",href:d[e].path,style:{width:f+"%"},key:e,"aria-label":e},d[e].icon());})))));};a("pa+W"),t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),t,r.a.createElement(v,null));};},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return u;}));var n=a("q1tI"),r=a.n(n),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.a.createContext&&r.a.createContext(l),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e;}).apply(this,arguments);},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);}return a;};function u(e){return function(t){return r.a.createElement(s,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.a.createElement(t.tag,o({key:a},t.attr),e(t.child));}));}(e.child));};}function s(e){var t=function(t){var a,n=e.attr,l=e.size,i=e.title,u=c(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:a,style:o(o({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&r.a.createElement("title",null,i),e.children);};return void 0!==i?r.a.createElement(i.Consumer,null,(function(e){return t(e);})):t(l);}},RSd7:function(e,t,a){},WLi9:function(e,t,a){},WPSQ:function(e,t,a){},eFCx:function(e,t,a){"use strict";a("E9XD");var n=a("dI71"),r=a("q1tI"),l=a.n(r),i=(a("lP9h"),function(e){function t(t){return console.assert(t.responsiveWidths&&l.a.Children.count(t.children)===t.responsiveWidths.length&&12===t.responsiveWidths.reduce((function(e,t){return e+t;}),0)),e.call(this,t)||this;}return Object(n.a)(t,e),t.prototype.render=function(){var e=this;return l.a.createElement("div",{className:"responsiveContainer"},this.props.children.map((function(t,a){return l.a.createElement("div",{className:"responsiveContainerItem",style:{"--responsive-width":e.props.responsiveWidths[a]},key:a},t);})));},t;}(l.a.Component));t.a=i;},lP9h:function(e,t,a){},mpnY:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("7oih");t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("p",null,"Sorry, this page is a work in progress! Right now, this page is just a skeleton for what I will put here eventually."),r.a.createElement("h2",null,"Projects"),r.a.createElement("p",null,"My ",r.a.createElement("a",{href:"https://www.github.com/SaurabhTotey"},"GitHub")," has the majority of my projects. I will showcase my favorite programming projects in this section."),r.a.createElement("h2",null,"Skills"),r.a.createElement("h4",null,"Game Development"),r.a.createElement("p",null,"TODO: talk about graphics"),r.a.createElement("p",null,"TODO: talk about audio"),r.a.createElement("h4",null,"Full-Stack"),r.a.createElement("p",null,"TODO: talk about fullstack"),r.a.createElement("h4",null,"Simulations"),r.a.createElement("p",null,"TODO: talk about simulations"),r.a.createElement("h4",null,"Scripting"),r.a.createElement("p",null,"TODO: talk about scripting"),r.a.createElement("h4",null,"Scientific Software"),r.a.createElement("p",null,"TODO: talk about scientific software"),r.a.createElement("h4",null,"Collaboration"),r.a.createElement("p",null,"TODO: talk about collaboration"),r.a.createElement("h4",null,"Math"),r.a.createElement("p",null,"TODO: talk about math"),r.a.createElement("h2",null,"Programming Languages"),r.a.createElement("p",null,"I enjoy languages that have functional features, but I am also skilled in object-oriented programming. I often combine both styles of programming. I generally try to write declarative code whenever possible because I find well-written declarative code is also more readable."),r.a.createElement("p",null,"TODO: talk about my favorite languages and why"),r.a.createElement("p",null,"TODO: enumerate all the languages I have worked with"),r.a.createElement("h2",null,"Setup"),r.a.createElement("h4",null,"Version Control"),r.a.createElement("p",null,"TODO: talk about git"),r.a.createElement("h4",null,"Editor"),r.a.createElement("p",null,"TODO: talk about nvim, but also experience with JetBrains stuff"),r.a.createElement("h4",null,"Computer Setup"),r.a.createElement("p",null,"TODO: talk about using linux, xmonad, polybar, etc."));};},"pa+W":function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-programming-js-c379d02c63587cd05a07.js.map