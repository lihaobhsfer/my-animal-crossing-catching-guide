(this["webpackJsonpanimal-crossing-catch-guide"]=this["webpackJsonpanimal-crossing-catch-guide"]||[]).push([[0],{143:function(e,t,a){e.exports=a.p+"static/media/data.a1a5625f.csv"},181:function(e,t,a){e.exports=a(343)},186:function(e,t,a){},188:function(e,t,a){},343:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),s=(a(186),a(171)),c=a(170),i=a(141),h=a(142),m=a(168),u=a(172),p=a(166),f=a(143),d=a.n(f),E=a(53),g=a(84),v=a(344),N=a(18),M=a(41),w=(a(187),a(352)),C=a(353),x=(a(188),a(345)),T=a(349),y=a(348),b=a(354),S=a(351),k=a(347),D=a(350),O=a(346),B=function(e){var t=e.url,a=e.Name,n=e.Price,o=e.Location,l=e.Size,s=e.Time,c=e.MonthsInWord,i=e.goneNextMonth,h=e.newThisMonth,m=e.availableNow;return(r.a.createElement(x.a,{style:{background:"#fefae3",margin:"5px",borderRadius:"10px"}},r.a.createElement("img",{style:{display:"block",margin:"0 auto"},src:t,alt:a}),r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"card-desc"},m&&r.a.createElement(E.a,null,r.a.createElement(N.a,{span:4},r.a.createElement(T.a,{twoToneColor:"#71997f"})),r.a.createElement(N.a,{span:20},r.a.createElement("p",{className:"desc-text"},"Available Now"))),r.a.createElement(E.a,null,r.a.createElement(N.a,{span:4},r.a.createElement(y.a,{twoToneColor:"rgb(223, 180, 129)"})),r.a.createElement(N.a,{span:20},r.a.createElement("p",{className:"desc-text"},o))),r.a.createElement(E.a,null,r.a.createElement(N.a,{span:4},r.a.createElement(b.a,{twoToneColor:"rgb(223, 180, 129)"})),r.a.createElement(N.a,{span:20},r.a.createElement("p",{className:"desc-text"},c))),r.a.createElement(E.a,null,r.a.createElement(N.a,{span:4},r.a.createElement(S.a,{twoToneColor:"rgb(223, 180, 129)"})),r.a.createElement(N.a,{span:20},r.a.createElement("p",{className:"desc-text"},s))),r.a.createElement(E.a,null,r.a.createElement(N.a,{span:4},r.a.createElement(k.a,{twoToneColor:"rgb(223, 180, 129)"})),r.a.createElement(N.a,{span:20},r.a.createElement("p",{className:"desc-text"},n))),l&&r.a.createElement(E.a,null,r.a.createElement(N.a,{span:4},r.a.createElement(D.a,{twoToneColor:"rgb(223, 180, 129)"})),r.a.createElement(N.a,{span:20},r.a.createElement("p",{className:"desc-text"},l))),i&&r.a.createElement(E.a,null,r.a.createElement(N.a,{span:4},r.a.createElement(O.a,{twoToneColor:"#c09279"})),r.a.createElement(N.a,{span:20},r.a.createElement("p",{className:"desc-text"},"Gone Next Month"))),h&&r.a.createElement(E.a,null,r.a.createElement(N.a,{span:4},r.a.createElement(T.a,{twoToneColor:"#71997f"})),r.a.createElement(N.a,{span:20},r.a.createElement("p",{className:"desc-text"},"New This Month"))))))},A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hemisphere:"Northern Hemisphere",columns:[],type:"Fish",data:[],dataAggregated:[],viewMode:"CARD",sortByPrice:"DESC",filterGoneNextMonth:!0,filterNewThisMonth:!1,showThisMonth:!0,showAll:!0},e.filterData=function(){var t=e.state.data;t=t.filter((function(t){return t.Hemisphere===e.state.hemisphere&&t.Type===e.state.type})),e.state.filterGoneNextMonth&&(t=t.filter((function(e){return!0===e.goneNextMonth}))),e.state.filterNewThisMonth&&(t=t.filter((function(e){return!0===e.newThisMonth})));var a=(new Date).getMonth()+1;e.state.showThisMonth&&(t=t.filter((function(e){return-1!==e.Months.indexOf(a)})));var n={},r=[];t.map((function(e){n[e.Name]||(n[e.Name]=1,r.push(e))})),console.log(r.length),e.setState({filteredData:r})},e.sortData=function(){var t=e.state.sortByPrice,a=e.state.data;"ASC"===t&&a.sort((function(e,t){return parseInt(e.Price.replace(",",""),10)-parseInt(t.Price.replace(",",""),10)||e.Name.localeCompare(t.Name)})),"DESC"===t&&a.sort((function(e,t){return parseInt(t.Price.replace(",",""),10)-parseInt(e.Price.replace(",",""),10)||e.Name.localeCompare(t.Name)})),"NONE"===t&&a.sort((function(e,t){return e.Name.localeCompare(t.Name)})),e.setState({data:a},(function(){e.filterData()}))},e.onSortButtonClicked=function(){var t=e.state.sortByPrice;t="NONE"===t?"ASC":"ASC"===t?"DESC":"NONE",e.setState({sortByPrice:t},(function(){e.sortData()}))},e.onMonthChange=function(t){console.log(t.target.value),e.setState({month:t.target.value},(function(){e.filterData()}))},e.onHemisphereChange=function(t){console.log(t.target.value),e.setState({hemisphere:t.target.value},(function(){e.filterData()}))},e.onTypeChange=function(t){console.log(t.target.value),e.setState({type:t.target.value},(function(){e.filterData()}))},e.onFilterGoneNextMonthButtonClicked=function(){var t=e.state.filterGoneNextMonth;e.setState({filterGoneNextMonth:!t},(function(){e.sortData()}))},e.onFilterGNewThisMonthButtonClicked=function(){var t=e.state.filterNewThisMonth;e.setState({filterNewThisMonth:!t},(function(){e.sortData()}))},e.onShowThisMonthClicked=function(){var t=e.state.showThisMonth;e.setState({showThisMonth:!t},(function(){e.sortData()}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=[],a=[];p.a("|",d.a,(function(e){var a=e.Months.replace("[","").replace("]","").split(",").map((function(e){return parseInt(e,10)}));e.goneNextMonth=!1,e.newThisMonth=!1;var n=(new Date).getMonth()+1,r=n%12+1,o=n-1;0===o&&(o=12),-1!==a.indexOf(n)&&-1===a.indexOf(r)&&(e.goneNextMonth=!0),-1===a.indexOf(o)&&-1!==a.indexOf(n)&&(e.newThisMonth=!0),e.Months=a,e.MonthsInWord=function(e){if(12===e.length)return"All Year";var t=[],a=[];a.push(e[0]);for(var n=1;n<e.length;n++)e[n]-e[n-1]===1?a.push(e[n]):(t.push(a),(a=[]).push(e[n]));if(t.push(a),-1!==e.indexOf(1)&&-1!==e.indexOf(12)){var r,o=t.pop();(r=t[0]).unshift.apply(r,Object(c.a)(o.reverse()))}for(var l="",s=["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."],i=0;i<t.length;i++){var h=t[i],m=h.length;1===m?l+=s[h[0]-1]:l=l+s[h[0]-1]+"-"+s[h[m-1]-1],i!==t.length-1&&(l+=", ")}return l}(a),e.availableNow=function(e){var t=(new Date).getHours();if(console.log("current hour is",t),console.log(e),"All day"===e)return console.log("all day"),!0;var a=[];if(e.match(/[0-9]+pm - [0-9]+am/)){var n=e.match(/[0-9]+/g).map((function(e){return parseInt(e)}));console.log(n);for(var r=0;r<=n[1];r++)a.push(r);for(var o=n[0]+12;o<=23;o++)a.push(o)}else if(e.match(/[0-9]+am - [0-9]+pm/)){var l=e.match(/[0-9]+/g).map((function(e){return parseInt(e)}));console.log(l);for(var s=l[0];s<=l[1]+12;s++)a.push(s)}else if(e.match(/[0-9]+am - [0-9]+am & [0-9]+pm - [0-9]+pm/)){var c=e.match(/[0-9]+/g).map((function(e){return parseInt(e)}));console.log(c);for(var i=c[0];i<=c[1];i++)a.push(i);for(var h=c[2];h<=c[3];h++)a.push(h+12)}return console.log(a),-1!==a.indexOf(t)}(e.Time),t.push(e)})).then((function(){for(var n=t[0],o=0,l=Object.entries(n);o<l.length;o++){var c=Object(s.a)(l[o],1)[0];"Month"===c||c.match("Hemisphere")||("url"===c?a.push({title:"Image",key:"url",dataIndex:"url",render:function(e){return r.a.createElement("img",{src:e,alt:"img"})}}):a.push({title:c,dataIndex:c,key:c}))}e.setState({data:t,columns:a},(function(){e.sortData()}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{maxWidth:"1200px",margin:"0 auto"}},r.a.createElement("h1",{className:"page-title"},"Animal Crossing Catch Guide"),r.a.createElement(E.a,null,r.a.createElement(g.a.Group,{className:"radio-select",defaultValue:"Northern Hemisphere",onChange:this.onHemisphereChange},r.a.createElement(g.a.Button,{value:"Northern Hemisphere"},"Northern Hemisphere"),r.a.createElement(g.a.Button,{value:"Southern Hemisphere"},"Southern Hemisphere"))),r.a.createElement(E.a,null,r.a.createElement(g.a.Group,{className:"radio-select",defaultValue:"Fish",onChange:this.onTypeChange},r.a.createElement(g.a.Button,{value:"Fish"},"Fish"),r.a.createElement(g.a.Button,{value:"Bug"},"Bugs"))),"LIST"===this.state.viewMode&&this.state.data&&this.state.data.length>0&&r.a.createElement(v.a,{columns:this.state.columns,dataSource:this.state.filteredData}),"CARD"===this.state.viewMode&&this.state.data&&this.state.data.length>0&&r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(E.a,{style:{display:"flex",alignItems:"center"}},r.a.createElement(N.a,{sm:12,md:6,lg:4},r.a.createElement(M.a,{className:this.state.showThisMonth?"button-filter-checked":"button-filter",onClick:this.onShowThisMonthClicked},"Available This Month")),r.a.createElement(N.a,null,r.a.createElement(M.a,{className:"button-select",onClick:this.onSortButtonClicked},"Price"," ","NONE"===this.state.sortByPrice?"":"ASC"===this.state.sortByPrice?r.a.createElement(w.a,null):r.a.createElement(C.a,null))),r.a.createElement(N.a,null,r.a.createElement(M.a,{className:this.state.filterGoneNextMonth?"button-filter-checked":"button-filter",onClick:this.onFilterGoneNextMonthButtonClicked},"Gone Next Month")),r.a.createElement(N.a,null,r.a.createElement(M.a,{className:this.state.filterNewThisMonth?"button-filter-checked":"button-filter",onClick:this.onFilterGNewThisMonthButtonClicked},"New This Month"))),r.a.createElement(E.a,{style:{margin:"5px"}},this.state.filteredData&&this.state.filteredData.map((function(e){var t=Object.assign({},e);return(r.a.createElement(N.a,{xs:12,sm:8,md:6,lg:4,xl:4},r.a.createElement(B,t)))}))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[181,1,2]]]);
//# sourceMappingURL=main.eec5ec7d.chunk.js.map