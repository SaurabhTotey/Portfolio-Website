(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(156),r=n(159),s=n(158);e.default=function(){return a.a.createElement("div",null,a.a.createElement(s.a,null),a.a.createElement(r.a,null),a.a.createElement("p",null,"Sorry, this page is a work in progress!"),a.a.createElement(o.a,null))}},153:function(t,e,n){var i;t.exports=(i=n(157))&&i.default||i},155:function(t,e,n){"use strict";var i=n(7),a=n.n(i),o=n(0),r=n.n(o),s=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={isVertical:!1},n}a()(e,t);var n=e.prototype;return n.onWindowResize=function(){this.setState({isVertical:window.innerWidth<900})},n.componentDidMount=function(){this.onWindowResize(),window.addEventListener("resize",this.onWindowResize.bind(this))},n.render=function(){var t=this,e={display:"grid",gridTemplateColumns:"100%"};return this.state.isVertical||(e.gridTemplateColumns="repeat(12, 1fr)"),r.a.createElement("div",{style:e},this.props.children.map(function(e){var n={placeSelf:"stretch",gridArea:"span 1 / span 1"};return t.state.isVertical||(n.gridArea="span 1 / span "+e.props.responsiveWidth),r.a.createElement("div",{style:n},e)}))},e}(r.a.Component);e.a=s},156:function(t,e,n){"use strict";n(34);var i=n(7),a=n.n(i),o=(n(74),n(55),n(35),n(154),n(0)),r=n.n(o),s=n(160),c=n(155),l=(n(143),{email:{icon:s.c,path:"mailto:SaurabhTotey@gmail.com"},phone:{icon:s.b,path:"tel:7206482674"},github:{icon:s.a,path:"https://www.github.com/SaurabhTotey"},youtube:{icon:s.f,path:"https://www.youtube.com/channel/UCXubVdV4RlI7ByEEDxziNcg"},spotify:{icon:s.d,path:"https://open.spotify.com/user/saurabh-totey?si=QaRE9wybTc6FbwRiQayTWA"},steam:{icon:s.e,path:"https://steamcommunity.com/id/Lord_Strainer"}}),u=100/Object.keys(l).length,d=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={stickToBottom:!1},n}a()(e,t);var n=e.prototype;return n.onWindowResize=function(){var t=this;setTimeout(function(){return t.setState({stickToBottom:window.innerHeight>document.body.clientHeight+document.getElementsByTagName("footer")[0].clientHeight+10})},50)},n.componentDidMount=function(){this.onWindowResize(),window.addEventListener("resize",this.onWindowResize.bind(this))},n.render=function(){var t={borderTop:"1px solid #454545",borderBottom:"1px solid #454545"};return this.state.stickToBottom&&(t=Object.assign({},t,{position:"absolute",bottom:"10px",width:"97%"})),r.a.createElement("footer",{style:t},r.a.createElement(c.a,null,r.a.createElement("div",{responsiveWidth:"3",style:{width:"100%",textAlign:"center"}},"Contact / Follow me:"),r.a.createElement("div",{responsiveWidth:"9",style:{width:"100%"}},Object.keys(l).map(function(t){return r.a.createElement("a",{className:"footerLink",href:l[t].path,style:{width:u+"%"}},l[t].icon())}))))},e}(r.a.Component);e.a=d},157:function(t,e,n){"use strict";n.r(e);n(34);var i=n(0),a=n.n(i),o=n(4),r=n.n(o),s=n(56),c=n(2),l=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?a.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=l},158:function(t,e,n){"use strict";var i=n(0),a=n.n(i);e.a=function(){return a.a.createElement("head",null,a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.a.createElement("title",null,"Saurabh Totey"),a.a.createElement("link",{rel:"icon",href:"images/SaurabhToteyBoulderMountains.jpg"}))}},159:function(t,e,n){"use strict";var i=n(0),a=n.n(i),o=(n(36),n(34),n(7)),r=n.n(o),s=(n(74),n(55),n(35),n(154),n(4)),c=n.n(s),l=n(33),u=n.n(l);n(153),a.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func;n(144);var d={Home:"/",Qualifications:"/Qualifications",Programming:"/Programming",Music:"/Music","3D Modelling":"/Modelling"},h=Object.keys(d),m=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={isVertical:!1},n}r()(e,t);var n=e.prototype;return n.onWindowResize=function(){this.setState({isVertical:window.innerWidth<900})},n.componentDidMount=function(){this.onWindowResize(),window.addEventListener("resize",this.onWindowResize.bind(this))},n.render=function(){var t;return t=this.state.isVertical?{width:"100%",margin:"auto"}:{width:this.props.width+"%",float:"left"},this.props.isActive&&(t=Object.assign({},t,{backgroundColor:"lightgray"})),a.a.createElement("li",{className:"navbarItem",style:t},a.a.createElement(u.a,{className:"navbarLink",to:d[this.props.currentPageName]},this.props.currentPageName))},e}(a.a.Component),p=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={currentRelativePath:null},n}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.setState({currentRelativePath:window.location.href.replace(window.location.origin,"")})},n.render=function(){var t=this;return a.a.createElement("ul",{id:"navbar"},h.map(function(e){var n=d[e];return a.a.createElement(m,{isActive:t.state.currentRelativePath===n,width:100/h.length,currentPageName:e})}))},e}(a.a.Component);n(145),e.a=function(){return a.a.createElement("div",null,a.a.createElement("div",{id:"title-container"},a.a.createElement("h1",{id:"title"},"Saurabh Totey"),a.a.createElement("span",{id:"secret-tooltip"},"Just in case you didn't know whose website you were on. Read about me on the home page if you don't know what biological species I am.")),a.a.createElement(p,null))}}}]);
//# sourceMappingURL=component---src-pages-music-js-077800df2e0d0fac6da4.js.map