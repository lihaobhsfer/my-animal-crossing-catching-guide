(this["webpackJsonpanimal-crossing-catch-guide"]=this["webpackJsonpanimal-crossing-catch-guide"]||[]).push([[0],{140:function(e,t,a){e.exports=a.p+"static/media/fish.48393333.csv"},175:function(e,t,a){e.exports=a(337)},180:function(e,t,a){},181:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),s=(a(180),a(165)),o=a(138),i=a(139),m=a(166),u=a(168),h=(a(181),a(163)),d=a(140),p=a.n(d),g=a(340),E=a(82),f=a(341),v=a(52),y=a(16),b=a(342),x=(a(182),a(346)),M=a(345),k=a(343),w=a(344),N=["January","February","March","April","May","June","July","August","September","October","November","December"],C=g.a.Content,D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={hemisphere:"Northern Hemisphere",columns:[],data:[],dataAggregated:[],viewMode:"CARD"},e.onMonthChange=function(t){console.log(t.target.value);var a=e.state.data.filter((function(e){return e.Month===t.target.value}));e.setState({filteredData:a})},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=[],a=[];h.a(p.a,(function(e){t.push(e)})).then((function(){var n=t[0];console.log(t);for(var r=0,c=Object.entries(n);r<c.length;r++){var o=Object(s.a)(c[r],1)[0];console.log(o),"Month"===o||o.match("Hemisphere")||("url"===o?a.push({title:"Image",key:"url",dataIndex:"url",render:function(e){return l.a.createElement("img",{src:e,alt:"img"})}}):a.push({title:o,dataIndex:o,key:o}))}t=t.filter((function(t){return t.Hemisphere===e.state.hemisphere}));var i=(new Date).getMonth()+1;console.log(i);var m=t.filter((function(e){return e.Month===i.toString()})),u={},h=[];m.map((function(e){u[e.Name]||(u[e.Name]=1,h.push(e))})),console.log(h.length),e.setState({data:t,filteredData:t,columns:a,filteredDataThisMonth:h})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(g.a,{style:{backgroundColor:"#cce2cf"}},l.a.createElement(C,{style:{maxWidth:"1200px",margin:"0 auto"}},l.a.createElement("h1",null,"Animal Crossing Catch Guide"),l.a.createElement(E.a.Group,{defaultValue:"1",style:{marginTop:16,marginLeft:5,marginRight:5},onChange:this.onMonthChange},N.map((function(e,t){return l.a.createElement(E.a.Button,{value:t+1+"",style:{background:"#fefae3"}},e)}))),"LIST"===this.state.viewMode&&this.state.data&&this.state.data.length>0&&l.a.createElement(f.a,{columns:this.state.columns,dataSource:this.state.filteredData}),"CARD"===this.state.viewMode&&this.state.data&&this.state.data.length>0&&l.a.createElement("div",null,l.a.createElement("h2",null,"Available This Month"),l.a.createElement(v.a,{style:{margin:"5px"}},this.state.filteredDataThisMonth.map((function(e){var t=e.url,a=e.Name,n=e.Price,r=e.Location,c=e.Size,s=e.Time;return(l.a.createElement(y.a,{xs:12,sm:8,md:6,lg:4,xl:4},l.a.createElement(b.a,{style:{background:"#fefae3",margin:"5px",borderRadius:"10px"}},l.a.createElement("img",{style:{display:"block"},src:t,alt:a}),l.a.createElement("div",{className:"title"},l.a.createElement("h3",null,a)),l.a.createElement("div",{className:"card-desc"},l.a.createElement(v.a,null,l.a.createElement(y.a,{span:4},l.a.createElement(x.a,null)),l.a.createElement(y.a,{span:20},l.a.createElement("p",{className:"desc-text"},r))),l.a.createElement(v.a,null,l.a.createElement(y.a,{span:4},l.a.createElement(M.a,null)),l.a.createElement(y.a,{span:20},l.a.createElement("p",{className:"desc-text"},s))),l.a.createElement(v.a,null,l.a.createElement(y.a,{span:4},l.a.createElement(k.a,null)),l.a.createElement(y.a,{span:20},l.a.createElement("p",{className:"desc-text"},n))),l.a.createElement(v.a,null,l.a.createElement(y.a,{span:4},l.a.createElement(w.a,null)),l.a.createElement(y.a,{span:20},l.a.createElement("p",{className:"desc-text"},c)))))))}))),l.a.createElement("h2",null,"All Cards"),l.a.createElement(v.a,{style:{margin:"5px"}},this.state.filteredData.map((function(e){var t=e.url,a=e.Name,n=e.Price,r=e.Location,c=e.Size,s=e.Time;return(l.a.createElement(y.a,{xs:12,sm:12,md:8,lg:6,xl:4},l.a.createElement(b.a,{style:{background:"#fefae3",margin:"5px",borderRadius:"10px"}},l.a.createElement("img",{style:{display:"block"},src:t,alt:a}),l.a.createElement("h3",{style:{overflow:"hidden !important"}},a),l.a.createElement("p",{className:"desc-text"},r),l.a.createElement("p",null,s),l.a.createElement("p",null,n),l.a.createElement("p",null,c))))})))))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.977dde73.chunk.js.map