(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(157),o=n(156);t.default=function(){return i.a.createElement("div",null,i.a.createElement(o.a,null),i.a.createElement(r.a,null),i.a.createElement("br",null),i.a.createElement("h2",{style:{marginBottom:"1%"}},"About me"),i.a.createElement("div",{style:{overflow:"hidden"}},i.a.createElement("img",{src:"images/SaurabhToteyCancun.jpg",alt:"Saurabh Totey",style:{width:"25%",float:"left"}}),i.a.createElement("p",{style:{marginLeft:"26%"}},"Hello! I am Saurabh Totey. I am an 18 year-old male with a strong passion for science and technology. I currently live in Boulder, Colorado with my parents and my younger brother. In my free time, I spend a lot of my time trying to learn. I love learning all sorts of things such as programming, playing the piano, playing the cello, and modelling 3D objects. However, that isn't to say that I don't spend some of my free time doing other activities such as playing videogames or watching television series. I hope one day to make a great change in the world.")))}},152:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},153:function(e,t,n){var a=n(25),i=n(35);n(154)("keys",function(){return function(e){return i(a(e))}})},154:function(e,t,n){var a=n(11),i=n(18),r=n(19);e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],o={};o[e]=t(n),a(a.S+a.F*r(function(){n(1)}),"Object",o)}},155:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(56),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(){return i.a.createElement("div",null,i.a.createElement("head",null,i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i.a.createElement("title",null,"Saurabh Totey"),i.a.createElement("link",{rel:"icon",href:"images/SaurabhToteyBoulderMountains.jpg"})))}},157:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=(n(37),n(34),n(7)),o=n.n(r),l=(n(73),n(55),n(36),n(153),n(4)),c=n.n(l),s=n(33),u=n.n(s);n(152),i.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func;n(144);var m={Home:"/",Qualifications:"/Qualifications",Programming:"/Programming",Music:"/Music","3D Modelling":"/Modelling"},d=Object.keys(m),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isVertical:!1},n}o()(t,e);var n=t.prototype;return n.onWindowResize=function(){this.setState({isVertical:window.innerWidth<900})},n.componentDidMount=function(){this.onWindowResize(),window.addEventListener("resize",this.onWindowResize.bind(this))},n.render=function(){var e;return e=this.state.isVertical?{width:"100%",margin:"auto"}:{width:this.props.width+"%",float:"left"},this.props.isActive&&(e=Object.assign({},e,{backgroundColor:"silver"})),i.a.createElement("li",{className:"navbarItem",style:e},i.a.createElement(u.a,{className:"navbarLink",to:m[this.props.currentPageName]},this.props.currentPageName))},t}(i.a.Component),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentRelativePath:null},n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({currentRelativePath:window.location.href.replace(window.location.origin,"")})},n.render=function(){var e=this;return i.a.createElement("ul",{className:"navbar"},d.map(function(t){var n=m[t];return i.a.createElement(h,{isActive:e.state.currentRelativePath===n,width:100/d.length,currentPageName:t})}))},t}(i.a.Component);n(145),t.a=function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"title-container"},i.a.createElement("h1",null,"Saurabh Totey"),i.a.createElement("span",{id:"secret-tooltip"},"Just in case you didn't know whose website you were on.")),i.a.createElement(p,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-678cc19bf80da271a482.js.map