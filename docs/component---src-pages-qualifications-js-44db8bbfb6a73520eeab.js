(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(204),o=a(206);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null),r.a.createElement("p",null,"This page is a work in progress! In the meantime, feel free to check out my ",r.a.createElement("a",{href:"./Resume.pdf"},"résumé")," or my ",r.a.createElement("a",{href:"https://www.github.com/SaurabhTotey"},"GitHub"),"."),r.a.createElement(i.a,null))}},202:function(e,t,a){var n;e.exports=(n=a(205))&&n.default||n},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(190);t.a=function(e){return r.a.createElement("div",{className:"responsiveContainer"},e.children.map(function(e,t){return r.a.createElement("div",{className:"responsiveContainerItem",style:{"--responsive-width":e.props.responsiveWidth},key:t},e)}))}},204:function(e,t,a){"use strict";a(29),a(30),a(13),a(50);var n=a(0),r=a.n(n),i=a(207),o=a(203),c=(a(191),{email:{icon:i.c,path:"mailto:SaurabhTotey@gmail.com"},phone:{icon:i.b,path:"tel:7206482674"},github:{icon:i.a,path:"https://www.github.com/SaurabhTotey"},youtube:{icon:i.f,path:"https://www.youtube.com/channel/UCXubVdV4RlI7ByEEDxziNcg"},spotify:{icon:i.d,path:"https://open.spotify.com/user/saurabh-totey?si=QaRE9wybTc6FbwRiQayTWA"},steam:{icon:i.e,path:"https://steamcommunity.com/id/Lord_Strainer"}}),l=100/Object.keys(c).length;t.a=function(){return r.a.createElement("footer",null,r.a.createElement(o.a,null,r.a.createElement("div",{responsiveWidth:"3",style:{width:"100%",textAlign:"center"}},"Contact / Follow me:"),r.a.createElement("div",{responsiveWidth:"9",style:{width:"100%"}},Object.keys(c).map(function(e){return r.a.createElement("a",{className:"footerLink",href:c[e].path,style:{width:l+"%"},key:e},c[e].icon())}))))}},205:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),i=a(90);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},206:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(14),a(29),a(30),a(13),a(50),a(67)),o=a.n(i);a(202),a(9).default.enqueue,r.a.createContext({});a(192);var c={Home:"/",Qualifications:"/Qualifications",Programming:"/Programming",Music:"/Music","3D Modelling":"/Modelling"},l=Object.keys(c);function u(e){return r.a.createElement("li",{className:"navbarItem"+(e.isActive?" active":"")},r.a.createElement(o.a,{className:"navbarLink",to:c[e.currentPageName]},e.currentPageName))}var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={currentRelativePath:null},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){this.setState({currentRelativePath:window.location.href.replace(window.location.origin,"")})},i.render=function(){var e=this;return r.a.createElement("nav",{role:"navigation","aria-label":"Page Navigation"},r.a.createElement("ul",{id:"navbar"},l.map(function(t){return r.a.createElement(u,{isActive:e.state.currentRelativePath===c[t],currentPageName:t,key:t})})))},n}(r.a.Component);a(193),t.a=function(){return r.a.createElement("header",null,r.a.createElement("div",{id:"title-container"},r.a.createElement("h1",{id:"title"},"Saurabh Totey"),r.a.createElement("span",{id:"secret-tooltip"},"Just in case you didn't know whose website you were on. Read about me on the home page if you don't know what biological species I am.")),r.a.createElement(s,null))}}}]);
//# sourceMappingURL=component---src-pages-qualifications-js-44db8bbfb6a73520eeab.js.map