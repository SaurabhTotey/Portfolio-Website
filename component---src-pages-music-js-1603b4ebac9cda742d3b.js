"use strict";(self.webpackChunksaurabh_totey_portfolio_website=self.webpackChunksaurabh_totey_portfolio_website||[]).push([[610],{1046:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(u,o({attr:o({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,a=e.attr,i=e.size,c=e.title,s=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},425:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7294),a=n(1721),i=n(1082),o={Home:"/",Qualifications:"/Qualifications",Programming:"/Programming",Music:"/Music"},l=Object.keys(o);function c(e){return r.createElement("li",{className:"navbarItem"+(e.isActive?" active":"")},r.createElement(i.rU,{className:"navbarLink",to:o[e.currentPageName]},e.currentPageName))}var s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentRelativePath:null},n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({currentRelativePath:window.location.href.replace(window.location.origin,"")})},n.render=function(){var e=this;return r.createElement("nav",{role:"navigation","aria-label":"Page Navigation"},r.createElement("ul",{id:"navbar"},l.map((function(t){return r.createElement(c,{isActive:e.state.currentRelativePath===o[t]||e.state.currentRelativePath===o[t]+"/",currentPageName:t,key:t})}))))},t}(r.Component);var u=function(){return r.createElement("header",null,r.createElement("div",{id:"title-container"},r.createElement("h1",{id:"title"},"Saurabh Totey"),r.createElement("span",{id:"secret-tooltip","aria-hidden":!0},"Just in case you didn't know whose website you were on. Read about me on the home page if you don't know what biological species I am.")),r.createElement(s,null))},h=n(3201),m=n(219),p={email:{icon:h.uWG,path:"mailto:SaurabhTotey@gmail.com"},phone:{icon:h.I7T,path:"tel:7206482674"},github:{icon:h.hJX,path:"https://www.github.com/SaurabhTotey"},reddit:{icon:h.hrS,path:"https://www.reddit.com/u/SaurabhTotey"},twitter:{icon:h.fWC,path:"https://twitter.com/SaurabhTotey"}},d=100/Object.keys(p).length;var f=function(){return r.createElement("footer",null,r.createElement(m.Z,{responsiveWidths:[3,9]},r.createElement("div",{style:{width:"100%",textAlign:"center"}},"Contact / Follow me:"),r.createElement("div",{style:{width:"100%"}},Object.keys(p).map((function(e){return r.createElement("a",{className:"footerLink",href:p[e].path,style:{width:d+"%"},key:e,"aria-label":e},p[e].icon())})))))};var v=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(u,null),t,r.createElement(f,null))}},219:function(e,t,n){var r=n(1721),a=n(7294),i=function(e){function t(t){return console.assert(t.responsiveWidths&&a.Children.count(t.children)===t.responsiveWidths.length&&12===t.responsiveWidths.reduce((function(e,t){return e+t}),0)),e.call(this,t)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this;return a.createElement("div",{className:"responsiveContainer"},this.props.children.map((function(t,n){return a.createElement("div",{className:"responsiveContainerItem",style:{"--responsive-width":e.props.responsiveWidths[n]},key:n},t)})))},t}(a.Component);t.Z=i},7525:function(e,t,n){n.r(t);var r=n(7294),a=n(425);function i(e){return r.createElement("div",null,r.createElement("h2",null,e.title),r.createElement("p",null,e.description),r.createElement("audio",{controls:!0,src:e.filePath}))}t.default=function(){return r.createElement(a.Z,null,r.createElement("p",null,"Sorry, this page is a work in progress! I plan on uploading more recordings of me playing piano and cello here. I have already included a few of my older samples of me playing. I play these instruments as a hobby because I love music and the feeling growing my abilities and getting better."),r.createElement(i,{title:"JUSTadICE",description:"The original song is by Seiko Oomori, but I am playing a piano composition by Fonzi M. The song appears as the seventh opening of Black Clover.",filePath:"./audio/JUSTadICE.wav"}),r.createElement(i,{title:"Shangri-La",description:"The original song by angela is the first opening to Fafner in the Azure. My heavily modified version is one I learned by ear.",filePath:"./audio/ShangriLa.wav"}),r.createElement(i,{title:"Hacking to the Gate",description:"The original song is sung by Kanako Itō. It is the opening of Steins;Gate. I am playing a composition by Theishter.",filePath:"./audio/HackingToTheGate.wav"}),r.createElement(i,{title:"God Knows",description:"The original song is sung by Aya Hirano. The song appears in the Melancholy of Haruhi Suzumiya. I learned this piece from sheet music by Josh Agarrado.",filePath:"./audio/GodKnows.wav"}))}}}]);
//# sourceMappingURL=component---src-pages-music-js-1603b4ebac9cda742d3b.js.map