(this["webpackJsonpcost-metru.github.io"]=this["webpackJsonpcost-metru.github.io"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),u=t.n(i),o=(t(13),t(1)),r=t(2),s=t(5),c=t(4),h=(t(14),t(3)),v=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={value:"",props:e.items},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(r.a)(t,[{key:"handleChange",value:function(e){this.props.changeOption(this.props.items[e.target.value],this.props.level+1),this.setState({value:e.target.value})}},{key:"render",value:function(){return this.props.items!==this.state.props&&this.setState({value:"",props:this.props.items}),l.a.createElement("select",{onChange:this.handleChange,value:this.state.value},l.a.createElement("option",{value:"",selected:"selected",hidden:"hidden"},"Alege ceva"),this.props.items.map((function(e,a){return l.a.createElement(p,{item:e,item_id:a,key:a})})))}}]),t}(n.Component),p=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("option",{value:this.props.item_id},this.props.item.name)}}]),t}(n.Component),m=v,d=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleChange=n.handleChange.bind(Object(h.a)(n)),n.state={value:""},n}return Object(r.a)(t,[{key:"handleChange",value:function(e){this.props.changeValue(e.target.value)}},{key:"render",value:function(){var e=this.props.value;return l.a.createElement("input",{type:"number",value:e,onChange:this.handleChange})}}]),t}(n.Component),g=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={max_level:1,display_level:0,options:[{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"}],value:0},n.changeOption=n.changeOption.bind(Object(h.a)(n)),n.changeValue=n.changeValue.bind(Object(h.a)(n)),n}return Object(r.a)(t,[{key:"changeValue",value:function(e){this.setState({value:e})}},{key:"changeOption",value:function(e,a){var t=this;this.setState((function(t){return{display_level:a,options:t.options.map((function(t,n){return n===a?e:n<a?t:null}))}}),(function(){t.state.options[t.state.display_level].hasOwnProperty("value")&&t.changeValue(t.state.options[t.state.display_level].value)}))}},{key:"render",value:function(){var e,a=[null];for(console.log(this.state),e=1;e<=this.state.display_level;e++)null!=this.state.options[e]&&this.state.options[e].hasOwnProperty("data")&&(a[e-1]=l.a.createElement(m,{items:this.state.options[e].data,changeOption:this.changeOption,level:e}));return l.a.createElement("div",null,l.a.createElement(m,{items:this.props.data.data,changeOption:this.changeOption,level:0}),a,l.a.createElement(d,{value:this.state.value,changeValue:this.changeValue}))}}]),t}(n.Component),O="Camin",b="Garsoniera",f="Apartament cu 2 camere",j=[{name:"Chirie",data:[{name:"Bucuresti",data:[{name:O,data:[{name:"Complex A",value:50},{name:"Complex B",value:100},{name:"Complex C",value:150}],value:70},{name:b,data:[{name:"Zona 1",value:1e3},{name:"Zona 2",value:1500},{name:"Zona 3",value:2e3}],value:500},{name:f,value:5e3}]},{name:"Cluj",data:[{name:O,value:70},{name:b,value:700},{name:f,value:7e3}]},{name:"Brasov",data:[{name:O,value:70},{name:b,value:700}]}]}],y=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},j.map((function(e,a){return l.a.createElement(g,{data:e,key:a})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c3617fac.chunk.js.map