(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{45:function(e,t,n){e.exports=n(64)},50:function(e,t,n){},51:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a,l=n(0),i=n.n(l),r=n(7),o=n.n(r),u=(n(50),n(51),n(22)),s=n(12);!function(e){e[e.NORMAL=1]="NORMAL",e[e.FROZEN=2]="FROZEN",e[e.PAINTING=3]="PAINTING"}(a||(a={}));var c=n(8),m=n(2),f=n(23),p=n(24),h=n(26),d=n(25),g=n(28),b={color:"black",boxSizing:"border-box",textAlign:"center",background:"white"},N={color:"red",fontWeight:"bold"},v=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).onMouseover=function(e){e.buttons&&n.props.onMouseover()},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.number!==e.number||this.props.selected!==e.selected||this.props.small!==e.small||this.props.size!==e.size||this.props.highlight!==e.highlight}},{key:"render",value:function(){var e=this,t=this.props.size,n=Object(m.a)({},b,{flexBasis:"calc(100%/"+this.props.cells+")",fontSize:"".concat(t-10,"px"),height:"".concat(t,"px"),lineHeight:"".concat(t,"px"),position:"relative",padding:"2px",justifyItems:"center",alignItems:"center",background:this.props.selected?"rgba(0,0,255,0.2)":"white"}),a=this.props.number?this.getLargeCell():this.getSmallCell(),l=Object(m.a)({},n,{display:"grid",gridTemplateColumns:"33% 34% 33%",gridTemplateRows:"33% 34% 33%"});return i.a.createElement("div",{tabIndex:0,style:l,className:"tile",onMouseDown:function(t){return e.props.onClick(t.shiftKey)},onKeyDown:function(t){return e.props.onInput(t.keyCode,t.shiftKey,t.metaKey)},onMouseMove:this.onMouseover,onBlur:this.props.onBlur},a)}},{key:"getSmallCell",value:function(){var e=this;return this.props.small.map((function(t){var n=Math.floor(e.props.size/4),a={fontSize:"".concat(n,"px"),height:"".concat(n,"px"),lineHeight:"".concat(n,"px"),gridRow:"".concat(Math.floor((t-1)/3)+1),gridColumn:(t-1)%3+1};return e.props.highlight===t&&(a=Object(m.a)({},a,{},N)),i.a.createElement("div",{key:t,style:a,className:"smallContent",onClick:function(){return e.props.onClickText(t)}},t)}))}},{key:"getLargeCell",value:function(){var e=this;if(null==this.props.number)throw Error();var t=this.props.highlight===this.props.number?N:{},n=Object(m.a)({},t,{gridRow:"1/4",gridColumn:"1/4"});return i.a.createElement("div",{className:"content",onClick:function(){return e.props.number&&e.props.onClickText(e.props.number)},style:n},this.props.number)}}]),t}(l.Component),E=function(e,t){return function(n){if(1===e.size){var a=e.values().next().value,l=a;switch(n){case"UP":l-=9;break;case"DOWN":l+=9;break;case"LEFT":l-=1;break;case"RIGHT":l+=1}l<=-1&&(l=a),l>=81&&(l=a);var i=new Set;i.add(l),t(i)}}},O=function(e,t,n,a,l){return function(e,i,r){if(46===e||8===e)return a(t);if(!r){if(e>=49&&e<=57||e>=97&&e<=105)e>57&&(e-=48),e-=48,i||1!==t.size?i&&l.onEnterSmallNum(Array.from(t),e):l.onEnterNum(t.values().next().value,e);else if(8===e||46===e)return a(t);if(1===t.size){if(38===e)return n("UP");if(37===e)return n("LEFT");if(40===e)return n("DOWN");if(39===e)return n("RIGHT")}}}},y=Object(c.b)((function(e){return{board:e.cells,size:e.settings.boardSize,interact:e.settings.state===a.NORMAL}}),(function(e){return{onEnterNum:function(t,n){e(function(e,t){return{type:"INSERT",index:e,number:t}}(t,n))},onEnterSmallNum:function(t,n){e(function(e,t){return{type:"INSERT_SMALL",number:t,index:e}}(t,n))},onDelete:function(t){e(function(e){return{type:"DELETE",index:e}}(t))}}}))((function(e){var t={display:"flex",pointerEvents:"all",flexFlow:"row wrap",width:"".concat(e.size,"px"),lineHeight:"".concat(e.size,"px")},n=e.interact,a=new Set,r=Object(l.useState)(a),o=Object(s.a)(r,2),u=o[0],c=o[1],m=Object(l.useState)(null),f=Object(s.a)(m,2),p=f[0],h=f[1],d=e.board.map((function(t,a){return i.a.createElement(v,{key:a,number:t.mainNum,small:t.small,cells:9,size:e.size/9,highlight:p,selected:u.has(a),focused:u.has(a)&&1===u.size,onClickText:function(e){n&&h(e)},onClick:function(e){if(n)if(e){var t=new Set(u);t.add(a),c(t)}else{var l=new Set;l.add(a),c(l)}},onBlur:function(){n&&h(null)},onInput:O(0,u,E(u,c),e.onDelete,e),onMouseover:function(){if(n){var e=new Set(u);e.add(a),c(e)}}})}));return i.a.createElement("div",{tabIndex:1,className:"box",style:t},d)})),S=n(5),j={"000":0,1111:1,"001":2,"010":3,"011":4,100:5,101:6,1100:7,1101:8,1110:9},w={0:"000",1:"1111",2:"001",3:"010",4:"011",5:"100",6:"101",7:"1100",8:"1101",9:"1110"},I={0:"000",1:"001",2:"010",3:"011",4:"100",5:"101",6:"110",7:"111"};function x(e){for(var t=e.map((function(e){return null==e.mainNum?0:1})),n="",a=0;a<t.length;){if(1===t[a])n+=I[0],a++;else if(-1===t.indexOf(1,a)){var l=Math.min(7,t.length-a);n+=I[l],a+=l}else{var i=Math.min(t.indexOf(1,a),7);n+=I[i],a+=i}if(a>90)break}var r=e.filter((function(e){return null!=e.mainNum})).map((function(e){return e.mainNum})).map((function(e){return w[""+e]})).reduce((function(e,t){return e+t}),"");return function(e){var t=e.toString(2),n=[];t.length%8>0&&(t=t.padEnd(t.length+(8-t.length%8),"0"));for(var a=0;a<t.length/8;a++)n.push(t.substring(8*a,8*a+8));var l=btoa(String.fromCharCode.apply(null,n.map((function(e){return parseInt(e,2)}))));return console.log(l),l.replace(/\//g,"-").replace(/\+/g,"_").replace(/=/g,"")}(BigInt("0b"+n+r))}function k(e){console.log(atob(e.replace(/-/g,"/")));for(var t=BigInt("0x"+e).toString(2),n=new Array(81),a=0,l="",i=0;a<81;)l+=t.charAt(i),i++,void 0!==j[l]&&(n[a++]={mainNum:j[l],small:[]},l="");return n}var R=function(){if(window.location.pathname.startsWith("/share/")){var e=window.location.pathname.substring("/share/".length);return window.history.pushState({},"Sudoku UI","/"),Object(m.a)({},A,{settings:Object(m.a)({},A.settings,{frozen:!1}),cells:k(e)})}var t=localStorage.getItem("state");return null!=t?JSON.parse(t):Object(m.a)({},A,{settings:Object(m.a)({},A.settings,{frozen:!1})})},A={history:{items:[],activeItem:-1},paintState:{links:[],paintStart:null},settings:{state:a.NORMAL,enableHighlight:!1,boardSize:450},cells:[{mainNum:9,small:[]},{mainNum:null,small:[2,1,3]},{mainNum:null,small:[2,1,3]},{mainNum:null,small:[4,6,1]},{mainNum:5,small:[]},{mainNum:null,small:[4,1,7]},{mainNum:null,small:[3,7]},{mainNum:8,small:[]},{mainNum:null,small:[6,1,7]},{mainNum:null,small:[1,3,5]},{mainNum:4,small:[4]},{mainNum:8,small:[]},{mainNum:null,small:[6,1,2]},{mainNum:null,small:[2,7]},{mainNum:null,small:[1,2,7]},{mainNum:9,small:[]},{mainNum:null,small:[3,5,1]},{mainNum:null,small:[6,1,7]},{mainNum:null,small:[7,1,5]},{mainNum:6,small:[6]},{mainNum:null,small:[7,1,5]},{mainNum:3,small:[]},{mainNum:null,small:[8,9]},{mainNum:null,small:[8,9]},{mainNum:2,small:[]},{mainNum:null,small:[5,1]},{mainNum:4,small:[]},{mainNum:null,small:[1,8]},{mainNum:null,small:[1,2,3,8]},{mainNum:null,small:[1,2,3]},{mainNum:7,small:[]},{mainNum:null,small:[9,2,4,8]},{mainNum:null,small:[1,9,2,4,8]},{mainNum:null,small:[3,4]},{mainNum:6,small:[]},{mainNum:5,small:[]},{mainNum:null,small:[7,5,3,8]},{mainNum:null,small:[7,2,3,8]},{mainNum:6,small:[]},{mainNum:null,small:[5,2,4,8]},{mainNum:null,small:[2,4,8]},{mainNum:null,small:[2,4,8]},{mainNum:1,small:[]},{mainNum:null,small:[3,4]},{mainNum:9,small:[]},{mainNum:4,small:[]},{mainNum:9,small:[]},{mainNum:null,small:[5,1]},{mainNum:null,small:[1,5]},{mainNum:6,small:[6]},{mainNum:3,small:[]},{mainNum:null,small:[7,8]},{mainNum:2,small:[2]},{mainNum:null,small:[7,8]},{mainNum:2,small:[]},{mainNum:null,small:[3,7,8]},{mainNum:9,small:[]},{mainNum:null,small:[4,7,8]},{mainNum:null,small:[3,4,7,8]},{mainNum:6,small:[]},{mainNum:5,small:[5]},{mainNum:null,small:[1,4]},{mainNum:null,small:[1,8]},{mainNum:null,small:[1,3,8]},{mainNum:null,small:[1,3,8]},{mainNum:4,small:[]},{mainNum:9,small:[5]},{mainNum:null,small:[3,8]},{mainNum:5,small:[5]},{mainNum:6,small:[]},{mainNum:7,small:[]},{mainNum:2,small:[2]},{mainNum:6,small:[]},{mainNum:5,small:[]},{mainNum:null,small:[7,8]},{mainNum:null,small:[2,4,7,8]},{mainNum:1,small:[]},{mainNum:null,small:[2,4,7,8]},{mainNum:null,small:[4,8]},{mainNum:9,small:[2]},{mainNum:3,small:[]}]};function T(e,t){switch(t.type){case"PAINT":return function(e,t){switch(t.subtype){case"BEGIN_PAINING":return Object(m.a)({},e,{settings:Object(m.a)({},e.settings,{state:a.PAINTING})});case"END_PAINING":return Object(m.a)({},e,{settings:Object(m.a)({},e.settings,{state:a.NORMAL}),paintState:{links:[],paintStart:null}})}}(e,t);case"SEND_COORD":return function(e,t){var n=e.cells[t.coordinate.cell],a=n.small,l=t.coordinate,i=e.paintState.paintStart;if(null==i||null!=n.mainNum||-1===a.indexOf(t.coordinate.subcell+1))return e;if(t.coordinate===e.paintState.paintStart){var r=Object(S.a)(e.paintState.links);return Object(m.a)({},e,{paintState:Object(m.a)({},e.paintState,{links:r,paintStart:null})})}var o={start:i,end:l};return Object(m.a)({},e,{paintState:Object(m.a)({},e.paintState,{links:[].concat(Object(S.a)(e.paintState.links),[o]),paintStart:null})})}(e,t)}return Object(m.a)({},e)}var C=function(e){var t=null,n=[];if(0===e.length)return[];for(var a=0;a<e.length;a++)if(null!==t){var l=e[a];t.kind===l.kind&&JSON.stringify(t.small)===JSON.stringify(l.small)?t=Object(m.a)({},t,{index:[].concat(Object(S.a)(t.index),Object(S.a)(l.index))}):(n.push(t),t=l)}else t=e[a];return null!==t&&n.push(t),n},z=function(e,t){switch(e){case a.NORMAL:return!0;case a.FROZEN:return"RESIZE"===t.type||"RESIZE_END"===t.type||"RESIZE_START"===t.type}return!0};function M(e,t){return e.settings.state===a.PAINTING||"PAINT"===t.type}function D(e){return Object(m.a)({},e,{history:{items:[],activeItem:-1}})}function L(e,t){if("RESIZE"===t.type)return Object(m.a)({},e,{settings:Object(m.a)({},e.settings,{boardSize:t.size})});var n="RESIZE_START"===t.type;return Object(m.a)({},e,{settings:Object(m.a)({},e.settings,{state:n?a.FROZEN:a.NORMAL})})}function P(e,t,n){var a=Object(S.a)(e.cells),l=a[t];if(l.mainNum===n)return e;a[t]=Object(m.a)({},l,{mainNum:n});var i=[].concat(Object(S.a)(e.history.items),[{kind:"ADD",large:n,index:[t]}]);return Object(m.a)({},e,{cells:a,history:{items:i,activeItem:i.length-1}})}function G(e,t){for(var n=new Array(81),a=0;a<81;a++)"0"===t.charAt(a)||isNaN(parseInt(t.charAt(a)))?n[a]={mainNum:null,small:[]}:n[a]={mainNum:parseInt(t.charAt(a)),small:[]};return Object(m.a)({},e,{cells:n})}function H(e,t){return Object(m.a)({},e,{settings:Object(m.a)({},e.settings,{enableHighlight:t})})}function _(e,t){switch(t.subtype){case"NEW":var n=new Array(81).fill({mainNum:null,small:[]});return Object(m.a)({},e,{cells:n,history:{items:[],activeItem:-1}})}}function B(e,t){var n=Object(S.a)(e.cells),a=t.index.filter((function(e){return null==n[e].mainNum})),l=a.map((function(e){return-1===n[e].small.indexOf(t.number)})).reduce((function(e,t){return e||t}),!1);a.forEach((function(e){var a=-1!==n[e].small.indexOf(t.number);l&&!a?n[e]=Object(m.a)({},n[e],{small:[].concat(Object(S.a)(n[e].small),[t.number])}):!l&&a&&(n[e]=Object(m.a)({},n[e],{small:n[e].small.filter((function(e){return e!==t.number}))}))}));var i=a.map((function(e){return{kind:l?"ADD":"REMOVE",index:[e],small:[t.number]}})),r=[].concat(Object(S.a)(e.history.items),Object(S.a)(C(i)));return Object(m.a)({},e,{cells:Object(S.a)(n),history:{items:r,activeItem:r.length-1}})}function W(e,t){var n=Object(S.a)(e.cells),a=[];t.index.forEach((function(t){var l=e.cells[t],i=Object(S.a)(n);null==l.mainNum?(a.push({kind:"REMOVE",index:[t],small:l.small}),l=Object(m.a)({},l,{small:[]})):(a.push({kind:"REMOVE",index:[t],large:l.mainNum}),l=Object(m.a)({},l,{mainNum:null})),i[t]=l,n=Object(S.a)(i)}));var l=[].concat(Object(S.a)(e.history.items),Object(S.a)(C(a)));return Object(m.a)({},e,{cells:n,history:Object(m.a)({},e.history,{items:l,activeItem:l.length-1})})}var Z=n(18),F=n(40),U=Object(Z.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R(),t=arguments.length>1?arguments[1]:void 0;if(!z(e.settings.state,t))return e;if(M(e,t))return T(e,t);switch(t.type){case"RESIZE":case"RESIZE_START":case"RESIZE_END":return L(e,t);case"INSERT":return P(e,t.index,t.number);case"INSERT_SMALL":return B(e,t);case"DELETE":return W(e,t);case"HIGHLIGHT_CHANGE":return H(e,t.value);case"SIDEBAR":return _(e,t);case"IMPORT":return G(e,t.value);case"CLEAR_HISTORY":return D(e);default:return e}}),Object(F.composeWithDevTools)());U.subscribe((function(){return localStorage.setItem("state",JSON.stringify(U.getState()))}));var J=n(79);var V=n(78),Y={margin:"0px",borderRadius:"0",background:"#f2f2f2",boxSizing:"border-box",flexGrow:1},K={borderTopLeftRadius:"10px"},X={borderTopRightRadius:"10px"},Q=Object(c.b)((function(e){return{painting:e.settings.state===a.PAINTING,settings:e.settings,full:function(){return x(e.cells)}}}),(function(e){return{onNew:function(){return e({type:"SIDEBAR",subtype:"NEW"})},onChangeHighlight:function(t){return e(function(e){return{type:"HIGHLIGHT_CHANGE",value:e}}(t))},onChangePainting:function(t){return e(function(e){return{type:"PAINT",subtype:e?"BEGIN_PAINING":"END_PAINING"}}(t))},doImport:function(t){return e(function(e){return{type:"IMPORT",value:e}}(t))}}}))((function(e){var t=Object(u.useToasts)().addToast;return i.a.createElement(i.a.Fragment,null,i.a.createElement(V.a,{container:!0},i.a.createElement(J.a,{disableElevation:!0,style:Object(m.a)({},Y,{},K),variant:"outlined",onClick:e.onNew},"New"),i.a.createElement(J.a,{disableElevation:!0,style:Y,variant:"outlined",onClick:function(t){return function(e){var t=window.prompt("Please enter the sodoku: ");null!==t&&e(t)}(e.doImport)}},"Import"),i.a.createElement(J.a,{disableElevation:!0,style:Object(m.a)({},Y,{},X),variant:"outlined",onClick:function(){return function(e,t){navigator.clipboard.writeText(window.location.host+"/share/"+t()),e("URL copied to clipboard",{appearance:"info",autoDismiss:!0})}(t,e.full)}},"Share")),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"highlight"},"Enable Highlights"),i.a.createElement("input",{id:"highlight",type:"checkbox",checked:e.settings.enableHighlight,onChange:function(t){return e.onChangeHighlight(t.target.checked)}})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"painting"},"Enable Painting"),i.a.createElement("input",{id:"painting",type:"checkbox",checked:e.painting,onChange:function(t){return e.onChangePainting(t.target.checked)}})))})),$=Object(c.b)((function(e){return{board:(t=e.cells,t.map((function(e){return e.mainNum||"0"})).reduce((function(e,t){return e+t}),"")),boardCells:e.cells};var t}),(function(e){return{clearHistory:function(){return e({type:"CLEAR_HISTORY"})}}}))((function(e){return i.a.createElement("div",null,i.a.createElement(Q,null),i.a.createElement("h5",null,"Saved Boards"),i.a.createElement(J.a,{variant:"contained",color:"primary"},"Save"),i.a.createElement("h5",null,"External resources"),i.a.createElement("a",{href:"https://www.sudokuwiki.org/sudoku.html?db="+e.board,target:"_blank",rel:"noopener noreferrer"},"Sudoku Wiki"))})),q={display:"flex",height:"100vh"},ee={position:"relative",margin:"auto",padding:"20px"},te={position:"relative",padding:"20px",width:"22%",minWidth:"270px",minHeight:"100vh",maxHeight:"100vh",overflowY:"scroll"},ne={right:"-15px",top:"50vh",display:"none",position:"absolute",padding:"10px",borderTopRightRadius:"15px",borderBottomRightRadius:"15px"},ae={position:"relative"},le=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:q},i.a.createElement("div",{style:ae},i.a.createElement("span",{style:ne},"X"),i.a.createElement("div",{style:te},this.props.side)),i.a.createElement("div",{style:ee},this.props.board))}}]),t}(i.a.PureComponent),ie=n(42);var re=Object(c.b)((function(e){return{size:e.settings.boardSize}}),(function(e){return{onDrag:function(t,n){e({type:"RESIZE",size:n.size.width})},onDragStart:function(t,n){e({type:"RESIZE_START"})},onDragEnd:function(t,n){e({type:"RESIZE_END"})}}}))((function(e){return i.a.createElement(ie.ResizableBox,{width:e.size,height:e.size,minConstraints:[450,450],lockAspectRatio:!0,onResize:e.onDrag,onResizeStart:e.onDragStart,onResizeStop:e.onDragEnd},e.children)})),oe=function(e,t,n){var a=e/9,l=a/3,i=Math.floor(t/a),r=9*Math.floor(n/a)+i,o=Math.floor(t/l%3);return{cell:r,subcell:3*Math.floor(n/l%3)+o}},ue=function(e,t){var n=t.cell,a=t.subcell,l=e/9,i=l/3,r=n%9*l;r+=a%3*i+i/2;var o=Math.floor(n/9)*l;return[r,o+=Math.floor(a/3)*i+i/2]},se=function(e,t,n){var a=e/27,l=a;return[Math.round((t-.5*a)/l)*l+.5*a,Math.round((n-.5*a)/l)*l+.5*a]},ce=function(e){var t=e.start,n=e.end,a=e.seen,l=e.size,r=a.has(t),o=a.has(n),u=ue(l,t),s=ue(l,n),c=l/9/4,m=u[0]-c/2,f=u[1]-c/2,p=s[0]-c/2,h=s[1]-c/2,d=r?null:i.a.createElement("rect",{x:m,y:f,width:.8*c,height:.9*c,fill:"rgba(174, 214, 157, 0.2)",style:{pointerEvents:"none"}}),g=o?null:i.a.createElement("rect",{x:p,y:h,width:.8*c,height:.9*c,fill:"rgba(245, 240, 129, 0.2)",style:{pointerEvents:"none"}}),b=(u[0]+s[0])/2,N=(u[1]+s[1])/2;return i.a.createElement("g",null,i.a.createElement("path",{d:"M ".concat(u[0]," ").concat(u[1]," Q ").concat(b," ").concat(N,"\n        ").concat(s[0]," ").concat(s[1]),fill:"transparent",stroke:"#0000ffaa",style:{pointerEvents:"none"}}),d,g)},me={position:"absolute",zIndex:2},fe={pointerEvents:"none",stroke:"green"},pe=function(e,t,n){return function(a){if(a.target instanceof SVGElement&&(null===n||void 0===n?void 0:n.start)){var l=a.target.getBoundingClientRect(),i=se(e,a.clientX-l.left,a.clientY-l.top),r=Object(s.a)(i,2),o=r[0],u=r[1];t(Object(m.a)({},n,{x:o,y:u}))}}},he=function(e,t,n,a,l,i){return function(r){return null==i?ge(e,r,a,t):de(e,r,i,l,a,n,t)}},de=function(e,t,n,a,l,i,r){if(t.target instanceof SVGElement){var o=t.target.getBoundingClientRect(),u=se(e,t.clientX-o.left,t.clientY-o.top),c=Object(s.a)(u,2),m=c[0],f=c[1],p=oe(e,m,f);if(-1!==r[p.cell].small.indexOf(p.subcell+1)&&null!==n){var h={start:n.start,end:p};i([].concat(Object(S.a)(a),[h])),l(null)}}},ge=function(e,t,n,a){if(t.target instanceof SVGElement){var l=t.target.getBoundingClientRect(),i=se(e,t.clientX-l.left,t.clientY-l.top),r=Object(s.a)(i,2),o=r[0],u=r[1],c=oe(e,o,u);-1!==a[c.cell].small.indexOf(c.subcell+1)&&n({start:c,x:o,y:u})}},be=Object(c.b)((function(e){return{size:e.settings.boardSize,board:e.cells}}))((function(e){var t=e.size,n=Object(l.useState)([]),a=Object(s.a)(n,2),r=a[0],o=a[1],u=Object(l.useState)(null),c=Object(s.a)(u,2),m=c[0],f=c[1],p=r.map((function(e){return i.a.createElement(ce,{seen:new Set,size:t,start:e.start,end:e.end})})),h=i.a.createElement(i.a.Fragment,null);if(m){var d=ue(t,m.start),g=Object(s.a)(d,2),b=g[0],N=g[1];h=i.a.createElement("path",{d:"M ".concat(b," ").concat(N," L ").concat(m.x," ").concat(m.y),style:fe})}return i.a.createElement("svg",{width:e.size,height:e.size,style:me,onClick:he(t,e.board,o,f,r,m),onMouseMove:pe(t,f,m)},p,h)})),Ne=Object(c.b)((function(e){return{enabled:e.settings.state===a.PAINTING,size:e.settings.boardSize}}))((function(e){if(!e.enabled)return i.a.createElement(i.a.Fragment,null);var t=i.a.createElement(be,null);return i.a.createElement("div",null,t)})),ve=function(){var e=i.a.createElement(re,null,i.a.createElement(Ne,null),i.a.createElement(y,null));return i.a.createElement(c.a,{store:U},i.a.createElement(u.ToastProvider,null,i.a.createElement(le,{board:e,side:i.a.createElement($,null)})))},Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(ve,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Oe(t,e)}))}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.8939cd0b.chunk.js.map