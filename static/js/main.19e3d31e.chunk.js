(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/videos.485a9cd2.png"},20:function(e,t,a){e.exports=a.p+"static/media/pics.19486e3a.png"},21:function(e,t,a){e.exports=a.p+"static/media/rools.239a4e26.png"},22:function(e,t,a){e.exports=a.p+"static/media/ael.16c0b4b9.png"},23:function(e,t,a){e.exports=a.p+"static/media/ritualsabotage.8760389e.jpg"},26:function(e,t,a){e.exports=a(42)},37:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),o=a(17),l=a.n(o)()(),s=a(44),m=a(1),u=a(2),p=a(4),d=a(3),h=a(5),b=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{marginTop:"30px"},className:"ui stacked compact segment"},i.a.createElement("h3",{style:{marginBottom:"40px"}},"Stack"),i.a.createElement("span",{className:"IconPadding","data-tooltip":"React"},i.a.createElement("i",{className:"big blue react icon"})),i.a.createElement("span",{className:"IconPadding","data-tooltip":"Javascript"},i.a.createElement("i",{className:"big blue js icon"})),i.a.createElement("span",{className:"IconPadding","data-tooltip":"HTML5"},i.a.createElement("i",{className:"big blue html5 icon"})),i.a.createElement("span",{className:"IconPadding","data-tooltip":"CSS3"},i.a.createElement("i",{className:"big blue css3 alternate icon"})),i.a.createElement("span",{className:"IconPadding","data-tooltip":"Git"},i.a.createElement("i",{className:"big blue git icon"})),i.a.createElement("span",{className:"IconPadding","data-tooltip":"Npm"},i.a.createElement("i",{className:"big blue npm icon"})),i.a.createElement("span",{className:"IconPadding","data-tooltip":"Node.js"},i.a.createElement("i",{className:"big blue node js icon"})))}}]),t}(n.Component),g=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{marginTop:"25px"},className:"ui basic segment"},i.a.createElement("h1",{className:"White"},"Joel Mitrunen"),i.a.createElement("h2",{className:"White"},"Front end web developer based in Finland."))}}]),t}(n.Component),f=a(18),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).onClick=function(e){document.execCommand("JoelMit@Outlook.com")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{marginTop:"30px"},className:"ui stacked segment"},i.a.createElement("h3",{style:{marginBottom:"40px"}},"Contact"),i.a.createElement("span",{className:"IconPadding","data-tooltip":"Github"},i.a.createElement("a",{href:"https://github.com/Zegram"},i.a.createElement("i",{className:"big blue github icon"}))),i.a.createElement(f.CopyToClipboard,{text:"JoelMit@Outlook.com",onCopy:function(){return e.setState({copied:!0})}},i.a.createElement("span",{onClick:this.onClick,className:"Cursor IconPadding","data-tooltip":"E-Mail (Copy to clipboard)"},i.a.createElement("i",{className:"big blue mail icon"}))))}}]),t}(n.Component),v=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderIcons",value:function(){if(!this.props.noIcons)return i.a.createElement("div",{className:"Techs"},i.a.createElement("a",{"data-tooltip":"Repository",className:"",href:this.props.githubUrl},i.a.createElement("i",{class:"circular github icon"})),i.a.createElement("a",{"data-tooltip":"Demo",class:"links",href:this.props.demoUrl},i.a.createElement("i",{class:"circular chrome icon"})))}},{key:"renderpic",value:function(){if(this.props.img)return i.a.createElement("img",{class:"ui large image",alt:"pic",src:this.props.img})}},{key:"render",value:function(){return i.a.createElement("div",{class:"ui two column very relaxed grid"},i.a.createElement("div",{class:"column"},i.a.createElement("h3",{className:"header"},this.props.title),i.a.createElement("p",null,this.props.description),this.renderIcons()),i.a.createElement("div",{class:"column"},this.renderpic()))}}]),t}(n.Component),j=a(19),y=a.n(j),N=a(20),O=a.n(N),k=a(21),w=a.n(k),C=a(22),P=a.n(C),x=a(23),I=a.n(x),T=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={id:0},a.changePage=function(e){a.setState({id:e})},a.renderTab=function(e,t){var n=a.state.id===e?"Selected active item Tab":"active item Tab";return i.a.createElement("div",{onClick:function(){return a.changePage(e)},className:n},t)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderProject",value:function(){switch(this.state.id){case 0:return i.a.createElement(v,{description:"These are some of the projects ive done while being a web developer. You can find all my public projects in my github.",noIcons:!0});case 1:return i.a.createElement(v,{title:"Prototype",description:"Prototype made for AEL for the possibility of a real project in the future. Worked together closely with the customer to create a working application with required features.",img:P.a,noIcons:!0});case 2:return i.a.createElement(v,{title:"Log work optimization application",description:"Customer project made for optimization of field work in sawmills in Finland. My responsibility was the front end of the web application and mobile application. For more information about this, ask me directly.",img:w.a,githubUrl:"",demoUrl:"",noIcons:!0});case 3:return i.a.createElement(v,{title:"Youtube App",description:"Practice project. Uses axios to fetch data from googles API. The site has functional video search and video player.",img:y.a,githubUrl:"https://github.com/Zegram/videos",demoUrl:"https://zegram.github.io/videos/"});case 4:return i.a.createElement(v,{title:"Pictures",description:"Application that uses axios to search picture data from unsplash API and display it.",img:O.a,githubUrl:"https://github.com/Zegram/pics",demoUrl:"https://zegram.github.io/pics/"});case 5:return i.a.createElement(v,{name:"Ritual Sabotage",description:"Finnish Game Jam 2016 Entry. While my main focus is in Web Development, I was kind of proud what we did in that one weekend. Ritual Sabotage is a game done in C# (Unity game engine) with a group of 4 people. My main work in this project was coding the game functionality.",img:I.a,githubUrl:"https://github.com/zeropointx/FGJ2016",demoUrl:"https://globalgamejam.org/2016/games/ritual-sabotage"});default:return i.a.createElement("div",null)}}},{key:"render",value:function(){return i.a.createElement("div",{style:{marginTop:"50px"}},i.a.createElement("div",{className:"ui top attached tabular menu"},this.renderTab(0,"Projects"),this.renderTab(1,"AEL"),this.renderTab(2,"Log Work"),this.renderTab(3,"Youtube App"),this.renderTab(4,"Pictures"),this.renderTab(5,"Ritual Sabotage")),i.a.createElement("div",{className:"ui bottom attached active tab segment"},this.renderProject(),i.a.createElement("div",{className:"ui vertical divider"})))}}]),t}(n.Component),U=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui vertical Footer segment"},i.a.createElement("p",{style:{marginRight:"20px"}},"\xa9 2019, Joel Mitrunen"))}}]),t}(n.Component),S=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(g,null),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"five wide column"},i.a.createElement(b,null)),i.a.createElement("div",{className:"four wide column"},i.a.createElement(E,null))),i.a.createElement(T,null),i.a.createElement(U,null))}}]),t}(n.Component),A=(a(37),function(){return i.a.createElement("div",null,i.a.createElement(s.b,{history:l},i.a.createElement(s.a,{path:"/",exact:!0,render:function(){return i.a.createElement(S,null)}})))});c.a.render(i.a.createElement(A,null),document.querySelector("#root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.19e3d31e.chunk.js.map