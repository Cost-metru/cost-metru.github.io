(this["webpackJsonpcost-metru.github.io"]=this["webpackJsonpcost-metru.github.io"]||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},16:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(8),i=t.n(s),r=(t(16),t(6)),o=t(2),u=t(3),c=t(1),p=t(5),h=t(4),v=t(9),d=(t(20),function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={value:e.default_value,props:e.items},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(u.a)(t,[{key:"handleChange",value:function(e){this.props.value,this.props.changeOption(this.props.level+1,e.target.value),this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this.state.value;return"value"in this.props&&(e=this.props.value),l.a.createElement("select",{onChange:this.handleChange,value:e,hidden:"1"===this.props.hidden&&"hidden"},l.a.createElement("option",{value:"",hidden:"hidden"},"Alege ceva"),this.props.items.map((function(e,a){return l.a.createElement(m,{item:e,item_id:a,key:a})})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.items!==a.props?{value:e.value,props:e.items}:{}}}]),t}(n.Component)),m=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("option",{value:this.props.item_id},this.props.item.name)}}]),t}(n.Component),b=d,g=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleChange=n.handleChange.bind(Object(c.a)(n)),n.state={value:n.props.value},n}return Object(u.a)(t,[{key:"handleChange",value:function(e){this.props.changeValue(e.target.value)}},{key:"render",value:function(){var e=this.props.value;return l.a.createElement("input",{type:"number",value:e,onChange:this.handleChange})}}]),t}(n.Component),y=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;Object(o.a)(this,t);var l=0;return(n=a.call(this,e)).props.data.hasOwnProperty("value")&&(l=n.props.data.value),!n.props.data.hasOwnProperty("data")&&n.props.data.hasOwnProperty("default")&&"locality"===!n.props.data.default&&(l=n.props.data.values[n.props.globalVariables.locality]),n.state={display_level:0,globalVariables:n.props.globalVariables,option_keys:[0,0,0,0,0,0,0,0],value:l,updateCheck:!0},n.changeOption=n.changeOption.bind(Object(c.a)(n)),n.changeValue=n.changeValue.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(u.a)(t,[{key:"changeValue",value:function(e){this.setState({value:e},(function(){}))}},{key:"handleChange",value:function(e){if(this.props.data.hasOwnProperty("global")&&1===this.props.data.global){var a=this.props.data,t=this.state.option_keys.map((function(e,t){return a.hasOwnProperty("data")&&null!==e&&(a=a.data[e]).hasOwnProperty("id")?a.id:null}));this.props.changeSelection(t)}}},{key:"changeOption",value:function(e,a){var t=this;this.setState((function(n){var l,s,i=e,r=t.props.data;for(s=0;s<=i-2;s++)r.hasOwnProperty("data")&&(r=r.data[t.state.option_keys[s]]);return r.hasOwnProperty("data")?r=r.data[a]:console.log("ERROR!"),r.hasOwnProperty("value")&&(l=r.value),t.changeValue(l),{display_level:i,option_keys:n.option_keys.map((function(t,n){return n===e-1?a:n<e-1?t:null}))}}),(function(){t.handleChange()}))}},{key:"componentDidUpdate",value:function(){this.props.expectedValue!==this.state.value&&this.props.outputValue(this.state.value,this.props.data.name,this.props.selection_id),this.state.value_exp!==this.state.value&&!0===this.state.updateCheck&&(this.changeValue(this.state.value_exp),this.setState({updateCheck:!1}))}},{key:"render",value:function(){var e,a=[null],t=this.props.data;for(e=0;e<=this.state.display_level;e++)if(t.hasOwnProperty("data")){var n=0,s=this.props.auto_values;t.hasOwnProperty("type")&&"hidden"===t.type&&(n="1"),a[e]=l.a.createElement(b,{hidden:n,default_value:s,items:t.data,changeOption:this.changeOption,level:e,globalVariables:this.props.globalVariables,key:e}),t=t.data[this.state.option_keys[e]]}return l.a.createElement("div",null,l.a.createElement("h2",null,this.props.data.name),a,l.a.createElement(g,{value:this.state.value,changeValue:this.changeValue}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=a.value,n=!1;if(e.globalVariables!==a.globalVariables){if(e.data.hasOwnProperty("values")&&e.data.hasOwnProperty("default")){if("locality"===e.data.default&&void 0!==e.globalVariables.locality){var l=e.globalVariables.locality,s=0;for(var i in e.data.values)e.data.values[i].name===l&&(s=i);t=e.data.values[s].value}if(e.data.hasOwnProperty("multipliers")&&e.data.hasOwnProperty("default_multiplier")&&"residence_type"===e.data.default_multiplier&&void 0!==e.globalVariables.residence_type){var r=e.globalVariables.residence_type,o=0;for(var u in e.data.multipliers)e.data.multipliers[u].type===r&&(o=u);t*=e.data.multipliers[o].value}}t!==a.value&&(n=!0)}return{value_exp:t,globalVariables:e.globalVariables,updateCheck:n}}}]),t}(n.Component),f=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;Object(o.a)(this,t),(n=a.call(this,e)).changeSelection=n.changeSelection.bind(Object(c.a)(n)),n.outputValue=n.outputValue.bind(Object(c.a)(n));var l={value:null,name:null};return n.state={values:[l,l,l,l,l,l,l,l,l]},n}return Object(u.a)(t,[{key:"changeSelection",value:function(e){this.props.setGlobalVariables({name:this.props.category.name,selection:e})}},{key:"outputValue",value:function(e,a,t){var n=this,l=this.props.category.costs.map((function(l,s){return t===s?{value:e,name:a}:n.state.values[s]}));this.setState({values:l}),this.props.setOutputValues(l,this.props.category.name,this.props.category_id)}},{key:"render",value:function(){var e,a=this;return e=this.props.category.costs.map((function(e,t){return l.a.createElement(y,{expectedValue:a.state.values[t].value,globalVariables:a.props.globalVariables,default_values:"",data:e,selection_id:t,key:t,changeSelection:a.changeSelection,outputValue:a.outputValue})})),l.a.createElement("div",null,l.a.createElement("h1",null,this.props.category.name),e)}}]),t}(n.Component),O=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={selections:[],no_selections:0},n.addItem=n.addItem.bind(Object(c.a)(n)),n.removeItem=n.removeItem.bind(Object(c.a)(n)),n}return Object(u.a)(t,[{key:"addItem",value:function(e,a){var t,n=new Array(this.state.no_selections+1);for(t=0;t<=this.state.no_selections;t++)n[t]=this.state.selections[t],t===this.state.no_selections&&(n[t]=this.props.data.data[a]);this.props.setOutputValues(n,"servicii online",1),console.log(n),this.setState({selections:n,no_selections:this.state.no_selections+1})}},{key:"removeItem",value:function(e){var a,t=new Array(this.state.no_selections-1);for(a=0;a<=this.state.no_selections;a++)a<e&&(t[a]=this.state.selections[a]),a>e&&(t[a-1]=this.state.selections[a]);this.setState({selections:t,no_selections:this.state.no_selections-1})}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",null,l.a.createElement("h1",null,this.props.data.name),l.a.createElement(b,{value:"",items:this.props.data.data,changeOption:this.addItem}),l.a.createElement(_,{selections:this.state.selections,removeItem:this.removeItem,no_selections:this.state.no_selections}))}}]),t}(n.Component),_=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={selections:e.selections,no_selections:e.no_selections},n}return Object(u.a)(t,[{key:"render",value:function(){var e,a=[];for(e=0;e<this.state.no_selections;e++)a[e]=l.a.createElement(V,{item:this.state.selections[e],key:e,item_id:e,removeItem:this.props.removeItem});return l.a.createElement("div",null,a)}}],[{key:"getDerivedStateFromProps",value:function(e,a){if(e.selections!==a.selections)return{selections:e.selections,no_selections:e.no_selections}}}]),t}(n.Component),V=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleChange=n.handleChange.bind(Object(c.a)(n)),n.state={name:e.item.name,value:e.item.value,item_id:e.item_id},n}return Object(u.a)(t,[{key:"handleChange",value:function(e){this.props.removeItem(this.props.item_id)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("h5",null,this.props.item.name),l.a.createElement("h6",null,this.props.item.value)),l.a.createElement("button",{onClick:this.handleChange},"X"))}}]),t}(n.Component),j=O,k="Camin",C="Garsoniera",E="Apartament cu 2 camere",w="COM",P="AP1",S="AP2",x=[{name:"Cazare",costs:[{name:"Chirie",data:[{name:"Bucuresti",id:"RO_BUC",data:[{name:k,id:w,data:[{name:"Complex A",value:50},{name:"Complex B",value:100},{name:"Complex C",value:150}],value:70},{name:C,id:P,data:[{name:"Zona 1",value:1e3},{name:"Zona 2",value:1500},{name:"Zona 3",value:2e3}],value:500},{id:S,name:E,value:5e3}],value:1e3},{name:"Brasov",id:"RO_BV",data:[{name:k,id:w,value:70},{name:C,id:P,value:700}]},{name:"Cluj",id:"RO_CJ",data:[{name:k,id:w,value:70},{name:C,id:P,value:700},{name:E,id:S,value:7e3}]}],global:1},{name:"Utilitati",type:"hidden",default:"locality",values:[{name:"RO_BUC",value:230},{name:"RO_BV",value:200},{name:"RO_CJ",value:260}],default_multiplier:"residence_type",multipliers:[{type:"COM",value:0},{type:"AP1",value:1},{type:"AP2",value:1.5}]}]}],I={name:"Servicii online",data:[{name:"Netflix1",value:101},{name:"Netflix2",value:102},{name:"Netflix3",value:103},{name:"Netflix4",value:104},{name:"Netflix5",value:105},{name:"Netflix6",value:106}]},A=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;Object(o.a)(this,t);var l={value:null,name:null},s={values:[l,l,l,l,l,l,l,l,l],name:null};return(n=a.call(this,e)).state={globalVariables:{locality:"",residence_type:""},values_arr:[s,s,s,s,s,s,s,s,s,s,s,s,s,s]},n.getGlobalVariables=n.getGlobalVariables.bind(Object(c.a)(n)),n.getOutputValues=n.getOutputValues.bind(Object(c.a)(n)),n}return Object(u.a)(t,[{key:"getGlobalVariables",value:function(e){var a,t;"Cazare"===e.name&&(void 0!==e.selection[0]&&(a=e.selection[0]),void 0!==e.selection[1]&&(t=e.selection[1])),this.setState({globalVariables:{locality:a,residence_type:t}})}},{key:"getOutputValues",value:function(e,a,t){var n=this,l=x.map((function(l,s){return t===s?{values:e,name:a}:n.state.values_arr[s]}));1===t&&(l[1]={values:e,name:a}),this.setState({values_arr:l})}},{key:"render",value:function(){var e,a=this;console.log(this.state),e=x.map((function(e,t){return l.a.createElement(f,{globalVariables:a.state.globalVariables,category_id:t,category:e,key:t,setGlobalVariables:a.getGlobalVariables,setOutputValues:a.getOutputValues})}));var t,n,s=[null],i=0,o=[["From","To","Weight"]],u=Object(r.a)(this.state.values_arr);try{for(u.s();!(t=u.n()).done;){var c,p=t.value,h=0,d=Object(r.a)(p.values);try{for(d.s();!(c=d.n()).done;){var m=c.value;null!==m.name&&(s[i]=l.a.createElement("div",{key:i},l.a.createElement("h3",null,m.name,":",m.value),"\n"),o[i+1]=[p.name,m.name,parseInt(m.value,10)],i++,h+=parseInt(m.value,10))}}catch(b){d.e(b)}finally{d.f()}o[i+1]=["Banet",p.name,h],i++}}catch(b){u.e(b)}finally{u.f()}return console.log(this.state.values_arr),i>=1&&(n=l.a.createElement(v.a,{width:600,height:"300px",chartType:"Sankey",data:o,rootProps:{"data-testid":"1"}})),l.a.createElement("div",{className:"App"},n,e,l.a.createElement(j,{data:I,key:1,setOutputValues:this.getOutputValues}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.ddfb5a8f.chunk.js.map