(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(157),r=n(160),s=n(159);t.default=function(){return a.a.createElement("div",null,a.a.createElement(s.a,null),a.a.createElement(r.a,null),a.a.createElement("p",null,"Sorry, this page is a work in progress!"),a.a.createElement(o.a,null))}},154:function(e,t,n){var i;e.exports=(i=n(158))&&i.default||i},156:function(e,t,n){"use strict";var i=n(7),a=n.n(i),o=n(0),r=n.n(o),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isVertical:!1},n}a()(t,e);var n=t.prototype;return n.onWindowResize=function(){this.setState({isVertical:window.innerWidth<900})},n.componentDidMount=function(){var e=this;this.onWindowResize(),window.addEventListener("resize",function(){return e.onWindowResize()})},n.render=function(){var e=this,t={display:"grid",gridTemplateColumns:"100%"};return this.state.isVertical||(t.gridTemplateColumns="repeat(12, 1fr)"),r.a.createElement("div",{style:t},this.props.children.map(function(t){var n={placeSelf:"stretch",gridArea:"span 1 / span 1"};return e.state.isVertical||(n.gridArea="span 1 / span "+t.props.responsiveWidth),r.a.createElement("div",{style:n},t)}))},t}(r.a.Component);t.a=s},157:function(e,t,n){"use strict";n(34);var i=n(7),a=n.n(i),o=(n(74),n(55),n(35),n(155),n(0)),r=n.n(o),s=n(161),c=n(156),l=(n(143),{email:{icon:s.c,path:"mailto:SaurabhTotey@gmail.com"},phone:{icon:s.b,path:"tel:7206482674"},github:{icon:s.a,path:"https://www.github.com/SaurabhTotey"},youtube:{icon:s.f,path:"https://www.youtube.com/channel/UCXubVdV4RlI7ByEEDxziNcg"},spotify:{icon:s.d,path:"https://open.spotify.com/user/saurabh-totey?si=QaRE9wybTc6FbwRiQayTWA"},steam:{icon:s.e,path:"https://steamcommunity.com/id/Lord_Strainer"}}),u=100/Object.keys(l).length,d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={stickToBottom:!1},n}a()(t,e);var n=t.prototype;return n.onWindowResize=function(){this.setState({stickToBottom:window.innerHeight>document.body.clientHeight+document.getElementsByTagName("footer")[0].clientHeight+10})},n.componentDidMount=function(){var e=this;this.onWindowResize(),window.addEventListener("resize",function(){return e.onWindowResize()})},n.render=function(){var e={borderTop:"1px solid #454545",borderBottom:"1px solid #454545"};return this.state.stickToBottom&&(e=Object.assign({},e,{position:"absolute",bottom:"10px",width:"97%"})),r.a.createElement("footer",{style:e},r.a.createElement(c.a,null,r.a.createElement("div",{responsiveWidth:"3",style:{width:"100%",textAlign:"center"}},"Contact / Follow me:"),r.a.createElement("div",{responsiveWidth:"9",style:{width:"100%"}},Object.keys(l).map(function(e){return r.a.createElement("a",{className:"footerLink",href:l[e].path,style:{width:u+"%"}},l[e].icon())}))))},t}(r.a.Component);t.a=d},158:function(e,t,n){"use strict";n.r(t);n(34);var i=n(0),a=n.n(i),o=n(4),r=n.n(o),s=n(56),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},159:function(e,t,n){"use strict";var i=n(0),a=n.n(i);t.a=function(){return a.a.createElement("head",null,a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.a.createElement("title",null,"Saurabh Totey"),a.a.createElement("link",{rel:"icon",href:"images/SaurabhToteyBoulderMountains.jpg"}))}},160:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=(n(36),n(34),n(7)),r=n.n(o),s=(n(74),n(55),n(35),n(155),n(4)),c=n.n(s),l=n(33),u=n.n(l);n(154),a.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func;n(144);var d={Home:"/",Qualifications:"/Qualifications",Programming:"/Programming",Music:"/Music","3D Modelling":"/Modelling"},h=Object.keys(d),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isVertical:!1},n}r()(t,e);var n=t.prototype;return n.onWindowResize=function(){this.setState({isVertical:window.innerWidth<900})},n.componentDidMount=function(){this.onWindowResize(),window.addEventListener("resize",this.onWindowResize.bind(this))},n.render=function(){var e;return e=this.state.isVertical?{width:"100%",margin:"auto"}:{width:this.props.width+"%",float:"left"},this.props.isActive&&(e=Object.assign({},e,{backgroundColor:"lightgray"})),a.a.createElement("li",{className:"navbarItem",style:e},a.a.createElement(u.a,{className:"navbarLink",to:d[this.props.currentPageName]},this.props.currentPageName))},t}(a.a.Component),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentRelativePath:null},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({currentRelativePath:window.location.href.replace(window.location.origin,"")})},n.render=function(){var e=this;return a.a.createElement("ul",{id:"navbar"},h.map(function(t){var n=d[t];return a.a.createElement(p,{isActive:e.state.currentRelativePath===n,width:100/h.length,currentPageName:t})}))},t}(a.a.Component);n(145),t.a=function(){return a.a.createElement("div",null,a.a.createElement("div",{id:"title-container"},a.a.createElement("h1",{id:"title"},"Saurabh Totey"),a.a.createElement("span",{id:"secret-tooltip"},"Just in case you didn't know whose website you were on. Read about me on the home page if you don't know what biological species I am.")),a.a.createElement(m,null))}}}]);
//# sourceMappingURL=component---src-pages-qualifications-js-6a0d1174db5687e3d32a.js.map