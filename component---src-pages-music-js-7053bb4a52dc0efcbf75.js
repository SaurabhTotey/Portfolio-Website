(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7oih":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("dI71"),o=n("Wbzz"),l=(n("RSd7"),{Home:"/",Qualifications:"/Qualifications",Programming:"/Programming",Music:"/Music"}),c=Object.keys(l);function s(e){return r.a.createElement("li",{className:"navbarItem"+(e.isActive?" active":"")},r.a.createElement(o.a,{className:"navbarLink",to:l[e.currentPageName]},e.currentPageName))}var u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentRelativePath:null},n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({currentRelativePath:window.location.href.replace(window.location.origin,"")})},n.render=function(){var e=this;return r.a.createElement("nav",{role:"navigation","aria-label":"Page Navigation"},r.a.createElement("ul",{id:"navbar"},c.map((function(t){return r.a.createElement(s,{isActive:e.state.currentRelativePath===l[t]||e.state.currentRelativePath===l[t]+"/",currentPageName:t,key:t})}))))},t}(r.a.Component);n("WPSQ");var h=function(){return r.a.createElement("header",null,r.a.createElement("div",{id:"title-container"},r.a.createElement("h1",{id:"title"},"Saurabh Totey"),r.a.createElement("span",{id:"secret-tooltip"},"Just in case you didn't know whose website you were on. Read about me on the home page if you don't know what biological species I am.")),r.a.createElement(u,null))},m=n("ma3e"),p=n("eFCx"),d=(n("WLi9"),{email:{icon:m.d,path:"mailto:SaurabhTotey@gmail.com"},phone:{icon:m.b,path:"tel:7206482674"},github:{icon:m.a,path:"https://www.github.com/SaurabhTotey"},reddit:{icon:m.c,path:"https://www.reddit.com/u/SaurabhTotey"},twitter:{icon:m.e,path:"https://twitter.com/SaurabhTotey"}}),f=100/Object.keys(d).length;var v=function(){return r.a.createElement("footer",null,r.a.createElement(p.a,{responsiveWidths:[3,9]},r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},"Contact / Follow me:"),r.a.createElement("div",{style:{width:"100%"}},Object.keys(d).map((function(e){return r.a.createElement("a",{className:"footerLink",href:d[e].path,style:{width:f+"%"},key:e,"aria-label":e},d[e].icon())})))))};n("pa+W");t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),t,r.a.createElement(v,null))}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.a.createContext&&r.a.createContext(i),l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function s(e){return function(t){return r.a.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.a.createElement(t.tag,l({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,a=e.attr,i=e.size,o=e.title,s=c(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&r.a.createElement("title",null,o),e.children)};return void 0!==o?r.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},RSd7:function(e,t,n){},WLi9:function(e,t,n){},WPSQ:function(e,t,n){},eFCx:function(e,t,n){"use strict";n("E9XD");var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=(n("lP9h"),function(e){function t(t){return console.assert(t.responsiveWidths&&i.a.Children.count(t.children)===t.responsiveWidths.length&&12===t.responsiveWidths.reduce((function(e,t){return e+t}),0)),e.call(this,t)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("div",{className:"responsiveContainer"},this.props.children.map((function(t,n){return i.a.createElement("div",{className:"responsiveContainerItem",style:{"--responsive-width":e.props.responsiveWidths[n]},key:n},t)})))},t}(i.a.Component));t.a=o},lP9h:function(e,t,n){},"pa+W":function(e,t,n){},tSSd:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("7oih");function o(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("audio",{controls:!0,src:e.filePath}))}t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("p",null,"Sorry, this page is a work in progress! I plan on uploading more recordings of me playing piano and cello here. I have already included a few samples of my playing, but please keep in mind that I am an amateur playing as a hobby, so these recordings aren't perfect. I am working on improving my sense of rhythm and intonation."),r.a.createElement(o,{title:"JUSTadICE",description:"The original song is by Seiko Oomori, but I am playing a piano composition by Fonzi M. The song appears as the seventh opening of Black Clover.",filePath:"./audio/JUSTadICE.wav"}),r.a.createElement(o,{title:"Shangri-La",description:"The original song by angela is the first opening to Fafner in the Azure. My heavily modified version is one I learned by ear.",filePath:"./audio/ShangriLa.wav"}),r.a.createElement(o,{title:"Hacking to the Gate",description:"The original song is sung by Kanako Itō. It is the opening of Steins;Gate. I am playing a composition by Theishter.",filePath:"./audio/HackingToTheGate.wav"}),r.a.createElement(o,{title:"God Knows",description:"The original song is sung by Aya Hirano. The song appears in the Melancholy of Haruhi Suzumiya. I learned this piece from sheet music by Josh Agarrado.",filePath:"./audio/GodKnows.wav"}))}}}]);
//# sourceMappingURL=component---src-pages-music-js-7053bb4a52dc0efcbf75.js.map