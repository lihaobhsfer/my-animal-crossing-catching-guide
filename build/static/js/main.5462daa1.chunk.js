(this["webpackJsonpanimal-crossing-catch-guide"]=this["webpackJsonpanimal-crossing-catch-guide"]||[]).push([[0],{182:function(e,t,a){e.exports=a(345)},187:function(e,t,a){},188:function(e,t,a){e.exports=a.p+"static/media/data.a1a5625f.csv"},190:function(e,t,a){},345:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=(a(187),a(172)),s=a(171),i=a(143),m=a(144),u=a(169),h=a(173),p=a(167),E=(a(188),a(346)),d=a(54),f=a(88),g=a(347),v=a(18),N=a(41),C=(a(189),a(355)),y=a(356),M=(a(190),a(348)),x=a(353),w=a(352),b=a(351),S=a(357),T=a(354),D=a(350),O=a(349),B=function(e){var t=e.url,a=e.Name,n=e.Price,l=e.Location,o=e.Size,c=e.Time,s=e.MonthsInWord,i=e.goneNextMonth,m=e.newThisMonth;return(r.a.createElement(M.a,{style:{background:"#fefae3",margin:"5px",borderRadius:"10px"}},r.a.createElement("img",{style:{display:"block",margin:"0 auto"},src:t,alt:a}),r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"card-desc"},r.a.createElement(d.a,null,r.a.createElement(v.a,{span:4},r.a.createElement(x.a,{twoToneColor:"rgb(223, 180, 129)"})),r.a.createElement(v.a,{span:20},r.a.createElement("p",{className:"desc-text"},l))),r.a.createElement(d.a,null,r.a.createElement(v.a,{span:4},r.a.createElement(w.a,{twoToneColor:"rgb(223, 180, 129)"})),r.a.createElement(v.a,{span:20},r.a.createElement("p",{className:"desc-text"},s))),r.a.createElement(d.a,null,r.a.createElement(v.a,{span:4},r.a.createElement(b.a,{twoToneColor:"rgb(223, 180, 129)"})),r.a.createElement(v.a,{span:20},r.a.createElement("p",{className:"desc-text"},c))),r.a.createElement(d.a,null,r.a.createElement(v.a,{span:4},r.a.createElement(S.a,{twoToneColor:"rgb(223, 180, 129)"})),r.a.createElement(v.a,{span:20},r.a.createElement("p",{className:"desc-text"},n))),o&&r.a.createElement(d.a,null,r.a.createElement(v.a,{span:4},r.a.createElement(T.a,{twoToneColor:"rgb(223, 180, 129)"})),r.a.createElement(v.a,{span:20},r.a.createElement("p",{className:"desc-text"},o))),i&&r.a.createElement(d.a,null,r.a.createElement(v.a,{span:4},r.a.createElement(D.a,{twoToneColor:"#c09279"})),r.a.createElement(v.a,{span:20},r.a.createElement("p",{className:"desc-text"},"Gone Next Month"))),m&&r.a.createElement(d.a,null,r.a.createElement(v.a,{span:4},r.a.createElement(O.a,{twoToneColor:"#71997f"})),r.a.createElement(v.a,{span:20},r.a.createElement("p",{className:"desc-text"},"New This Month"))))))},k=E.a.Content,A=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={hemisphere:"Northern Hemisphere",columns:[],type:"Fish",data:[],dataAggregated:[],viewMode:"CARD",sortByPrice:"NONE"},e.filterData=function(){var t=e.state.data;t=t.filter((function(t){return t.Hemisphere===e.state.hemisphere&&t.Type===e.state.type}));var a=(new Date).getMonth()+1,n=t.filter((function(e){return-1!==e.Months.indexOf(a)})),r={},l=[];n.map((function(e){r[e.Name]||(r[e.Name]=1,l.push(e))})),console.log(l.length),e.setState({filteredData:t,filteredDataThisMonth:l})},e.sortData=function(){var t=e.state.sortByPrice,a=e.state.data;"ASC"===t&&a.sort((function(e,t){return parseInt(e.Price.replace(",",""),10)-parseInt(t.Price.replace(",",""),10)||e.Name.localeCompare(t.Name)})),"DESC"===t&&a.sort((function(e,t){return parseInt(t.Price.replace(",",""),10)-parseInt(e.Price.replace(",",""),10)||e.Name.localeCompare(t.Name)})),"NONE"===t&&a.sort((function(e,t){return e.Name.localeCompare(t.Name)})),e.setState({data:a},(function(){e.filterData()}))},e.onSortButtonClicked=function(){var t=e.state.sortByPrice;t="NONE"===t?"ASC":"ASC"===t?"DESC":"NONE",e.setState({sortByPrice:t},(function(){e.sortData()}))},e.onMonthChange=function(t){console.log(t.target.value),e.setState({month:t.target.value},(function(){e.filterData()}))},e.onHemisphereChange=function(t){console.log(t.target.value),e.setState({hemisphere:t.target.value},(function(){e.filterData()}))},e.onTypeChange=function(t){console.log(t.target.value),e.setState({type:t.target.value},(function(){e.filterData()}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=[],a=[];p.a("https://lihaobhsfer.cn/data.csv",(function(e){var a=e.Months.replace("[","").replace("]","").split(",").map((function(e){return parseInt(e,10)}));e.goneNextMonth=!1,e.newThisMonth=!1;var n=(new Date).getMonth()+1,r=n%12+1,l=n-1;0===l&&(l=12),-1===a.indexOf(r)&&(e.goneNextMonth=!0),-1===a.indexOf(l)&&(e.newThisMonth=!0),e.Months=a,e.MonthsInWord=function(e){if(12===e.length)return"All Year";var t=[],a=[];a.push(e[0]);for(var n=1;n<e.length;n++)e[n]-e[n-1]===1?a.push(e[n]):(t.push(a),(a=[]).push(e[n]));if(t.push(a),-1!==e.indexOf(1)&&-1!==e.indexOf(12)){var r,l=t.pop();(r=t[0]).unshift.apply(r,Object(s.a)(l.reverse()))}for(var o="",c=["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."],i=0;i<t.length;i++){var m=t[i],u=m.length;1===u?o+=c[m[0]-1]:o=o+c[m[0]-1]+"-"+c[m[u-1]-1],i!==t.length-1&&(o+=", ")}return o}(a),t.push(e)})).then((function(){for(var n=t[0],l=0,o=Object.entries(n);l<o.length;l++){var s=Object(c.a)(o[l],1)[0];"Month"===s||s.match("Hemisphere")||("url"===s?a.push({title:"Image",key:"url",dataIndex:"url",render:function(e){return r.a.createElement("img",{src:e,alt:"img"})}}):a.push({title:s,dataIndex:s,key:s}))}e.setState({data:t,columns:a},(function(){e.filterData()}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{style:{backgroundColor:"#cce2cf"}},r.a.createElement(k,{style:{maxWidth:"1200px",margin:"0 auto"}},r.a.createElement("h1",null,"Animal Crossing Catch Guide"),r.a.createElement(d.a,null,r.a.createElement(f.a.Group,{defaultValue:"Northern Hemisphere",style:{marginTop:16},onChange:this.onHemisphereChange},r.a.createElement(f.a.Button,{value:"Northern Hemisphere"},"Northern Hemisphere"),r.a.createElement(f.a.Button,{value:"Southern Hemisphere"},"Southern Hemisphere"))),r.a.createElement(d.a,null,r.a.createElement(f.a.Group,{defaultValue:"Fish",style:{marginTop:16},onChange:this.onTypeChange},r.a.createElement(f.a.Button,{value:"Fish"},"Fish"),r.a.createElement(f.a.Button,{value:"Bug"},"Bugs"))),"LIST"===this.state.viewMode&&this.state.data&&this.state.data.length>0&&r.a.createElement(g.a,{columns:this.state.columns,dataSource:this.state.filteredData}),"CARD"===this.state.viewMode&&this.state.data&&this.state.data.length>0&&r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(v.a,{span:4},r.a.createElement("h2",null,"Available This Month")),r.a.createElement(v.a,null,r.a.createElement(N.a,{onClick:this.onSortButtonClicked},"Price"," ","NONE"===this.state.sortByPrice?"":"ASC"===this.state.sortByPrice?r.a.createElement(C.a,null):r.a.createElement(y.a,null)))),r.a.createElement(d.a,{style:{margin:"5px"}},this.state.filteredDataThisMonth&&this.state.filteredDataThisMonth.map((function(e){var t=Object.assign({},e);return(r.a.createElement(v.a,{xs:12,sm:8,md:6,lg:4,xl:4},r.a.createElement(B,t)))})))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[182,1,2]]]);
//# sourceMappingURL=main.5462daa1.chunk.js.map