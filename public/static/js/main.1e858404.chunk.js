(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{60:function(e,n,t){e.exports=t(90)},65:function(e,n,t){},79:function(e,n,t){},90:function(e,n,t){"use strict";t.r(n);var a,l=t(0),r=t.n(l),i=t(7),u=t.n(i),o=(t(65),t(19)),s=t.n(o),c=(t(79),t(28)),m=t(12);!function(e){e[e.NORMAL=1]="NORMAL",e[e.FROZEN=2]="FROZEN",e[e.PAINTING=3]="PAINTING"}(a||(a={}));var f=t(33),p=t.n(f),d="INSERT",h="INSERT_SMALL",b="DELETE",N="CLEAR_HISTORY",g="NEW",v="HIGHLIGHT_CHANGE",O="IMPORT",E="RESIZE",y="RESIZE_START",j="RESIZE_END",x="PAINT",w="BEGIN_PAINING",I="END_PAINING",k="UNDO",S="REDO",C="SHOW_TOAST",R="HIDE_TOAST";var z=t(6),T=t(2),A=t(29),M=t(18),D=t(30),P=t(31),G=t(32),L={color:"black",boxSizing:"border-box",textAlign:"center",background:"white"},H={color:"red",fontWeight:"bold"},B=function(e){function n(){var e,t;Object(A.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(D.a)(this,(e=Object(P.a)(n)).call.apply(e,[this].concat(l)))).onMouseover=function(e){e.buttons&&t.props.onMouseover()},t}return Object(G.a)(n,e),Object(M.a)(n,[{key:"shouldComponentUpdate",value:function(e){return this.props.number!==e.number||this.props.selected!==e.selected||this.props.small!==e.small||this.props.size!==e.size||this.props.highlight!==e.highlight}},{key:"render",value:function(){var e=this,n=this.props.size,t=Object(T.a)({},L,{flexBasis:"calc(100%/"+this.props.cells+")",fontSize:"".concat(n-10,"px"),height:"".concat(n,"px"),lineHeight:"".concat(n,"px"),position:"relative",padding:"2px",justifyItems:"center",alignItems:"center",background:this.props.selected?"rgba(0,0,255,0.2)":"white"}),a=this.props.number?this.getLargeCell():this.getSmallCell(),l=Object(T.a)({},t,{display:"grid",gridTemplateColumns:"33% 34% 33%",gridTemplateRows:"33% 34% 33%"});return r.a.createElement("div",{tabIndex:0,style:l,className:"tile",onMouseDown:function(n){return e.props.onClick(n.shiftKey)},onKeyDown:function(n){return e.props.onInput(n.keyCode,n.shiftKey,n.metaKey)},onMouseMove:this.onMouseover,onBlur:this.props.onBlur},a)}},{key:"getSmallCell",value:function(){var e=this;return this.props.small.map((function(n){var t=Math.floor(e.props.size/4),a={fontSize:"".concat(t,"px"),height:"".concat(t,"px"),lineHeight:"".concat(t,"px"),gridRow:"".concat(Math.floor((n-1)/3)+1),gridColumn:(n-1)%3+1};return e.props.highlight===n&&(a=Object(T.a)({},a,{},H)),r.a.createElement("div",{key:n,style:a,className:"smallContent",onClick:function(){return e.props.onClickText(n)}},n)}))}},{key:"getLargeCell",value:function(){var e=this;if(null==this.props.number)throw Error();var n=this.props.highlight===this.props.number?H:{},t=Object(T.a)({},n,{gridRow:"1/4",gridColumn:"1/4"});return r.a.createElement("div",{className:"content",onClick:function(){return e.props.number&&e.props.onClickText(e.props.number)},style:t},this.props.number)}}]),n}(l.Component),_=function(e,n){return function(t){if(1===e.size){var a=e.values().next().value,l=a;switch(t){case"UP":l-=9;break;case"DOWN":l+=9;break;case"LEFT":l-=1;break;case"RIGHT":l+=1}l<=-1&&(l=a),l>=81&&(l=a);var r=new Set;r.add(l),n(r)}}},W=function(e,n,t,a,l){return function(e,r,i){if(46===e||8===e)return a(n);if(!i){if(e>=49&&e<=57||e>=97&&e<=105)e>57&&(e-=48),e-=48,r||1!==n.size?r&&l.onEnterSmallNum(Array.from(n),e):l.onEnterNum(n.values().next().value,e);else if(8===e||46===e)return a(n);if(1===n.size){if(38===e)return t("UP");if(37===e)return t("LEFT");if(40===e)return t("DOWN");if(39===e)return t("RIGHT")}}}},F=Object(z.connect)((function(e){return{board:e.cells.present.cells,size:e.settings.boardSize,interact:e.settings.state===a.NORMAL}}),(function(e){return{onEnterNum:function(n,t){e(function(e,n){return{type:d,index:e,number:n}}(n,t))},onEnterSmallNum:function(n,t){e(function(e,n){return{type:h,number:n,index:e}}(n,t))},onDelete:function(n){e(function(e){return{type:b,index:e}}(n))}}}))((function(e){var n={display:"flex",pointerEvents:"all",flexFlow:"row wrap",width:"".concat(e.size,"px"),lineHeight:"".concat(e.size,"px")},t=e.interact,a=new Set,i=Object(l.useState)(a),u=Object(m.a)(i,2),o=u[0],s=u[1],c=Object(l.useState)(null),f=Object(m.a)(c,2),p=f[0],d=f[1],h=e.board.map((function(n,a){return r.a.createElement(B,{key:a,number:n.mainNum,small:n.small,cells:9,size:e.size/9,highlight:p,selected:o.has(a),focused:o.has(a)&&1===o.size,onClickText:function(e){t&&d(e)},onClick:function(e){if(t)if(e){var n=new Set(o);n.add(a),s(n)}else{var l=new Set;l.add(a),s(l)}},onBlur:function(){t&&d(null)},onInput:W(0,o,_(o,s),e.onDelete,e),onMouseover:function(){if(t){var e=new Set(o);e.add(a),s(e)}}})}));return r.a.createElement("div",{tabIndex:1,className:"box",style:n},h)}));function U(e){return Object(T.a)({},e,{history:Object(T.a)({},e.history,{activeItem:e.history.activeItem-1})})}var Z=t(20),Y=t(25),J=t.n(Y),K=t(54),X=t(55),V=t(9);function Q(){if(window.location.pathname.startsWith("/share/"))return window.history.pushState({},"Sudoku UI","/"),Object(T.a)({},$);var e=localStorage.getItem("state");if(null!=e){var n=JSON.parse(e);return null==n.cells.present?Object(T.a)({},$):Object(T.a)({},n)}return Object(T.a)({},$)}var $={main:{history:{items:[],activeItem:-1}},settings:{state:a.NORMAL,enableHighlight:!1,boardSize:450},ui:{toast:null},toastr:{toastrs:[]},cells:{past:[],future:[],present:{cells:[{mainNum:9,small:[]},{mainNum:null,small:[2,1,3]},{mainNum:null,small:[2,1,3]},{mainNum:null,small:[4,6,1]},{mainNum:5,small:[]},{mainNum:null,small:[4,1,7]},{mainNum:null,small:[3,7]},{mainNum:8,small:[]},{mainNum:null,small:[6,1,7]},{mainNum:null,small:[1,3,5]},{mainNum:4,small:[4]},{mainNum:8,small:[]},{mainNum:null,small:[6,1,2]},{mainNum:null,small:[2,7]},{mainNum:null,small:[1,2,7]},{mainNum:9,small:[]},{mainNum:null,small:[3,5,1]},{mainNum:null,small:[6,1,7]},{mainNum:null,small:[7,1,5]},{mainNum:6,small:[6]},{mainNum:null,small:[7,1,5]},{mainNum:3,small:[]},{mainNum:null,small:[8,9]},{mainNum:null,small:[8,9]},{mainNum:2,small:[]},{mainNum:null,small:[5,1]},{mainNum:4,small:[]},{mainNum:null,small:[1,8]},{mainNum:null,small:[1,2,3,8]},{mainNum:null,small:[1,2,3]},{mainNum:7,small:[]},{mainNum:null,small:[9,2,4,8]},{mainNum:null,small:[1,9,2,4,8]},{mainNum:null,small:[3,4]},{mainNum:6,small:[]},{mainNum:5,small:[]},{mainNum:null,small:[7,5,3,8]},{mainNum:null,small:[7,2,3,8]},{mainNum:6,small:[]},{mainNum:null,small:[5,2,4,8]},{mainNum:null,small:[2,4,8]},{mainNum:null,small:[2,4,8]},{mainNum:1,small:[]},{mainNum:null,small:[3,4]},{mainNum:9,small:[]},{mainNum:4,small:[]},{mainNum:9,small:[]},{mainNum:null,small:[5,1]},{mainNum:null,small:[1,5]},{mainNum:6,small:[6]},{mainNum:3,small:[]},{mainNum:null,small:[7,8]},{mainNum:2,small:[2]},{mainNum:null,small:[7,8]},{mainNum:2,small:[]},{mainNum:null,small:[3,7,8]},{mainNum:9,small:[]},{mainNum:null,small:[4,7,8]},{mainNum:null,small:[3,4,7,8]},{mainNum:6,small:[]},{mainNum:5,small:[5]},{mainNum:null,small:[1,4]},{mainNum:null,small:[1,8]},{mainNum:null,small:[1,3,8]},{mainNum:null,small:[1,3,8]},{mainNum:4,small:[]},{mainNum:9,small:[5]},{mainNum:null,small:[3,8]},{mainNum:5,small:[5]},{mainNum:6,small:[]},{mainNum:7,small:[]},{mainNum:2,small:[2]},{mainNum:6,small:[]},{mainNum:5,small:[]},{mainNum:null,small:[7,8]},{mainNum:null,small:[2,4,7,8]},{mainNum:1,small:[]},{mainNum:null,small:[2,4,7,8]},{mainNum:null,small:[4,8]},{mainNum:9,small:[2]},{mainNum:3,small:[]}]}}};var q=Object(Z.combineReducers)({cells:J()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q().cells.present,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d:return function(e,n,t){var a=Object(V.a)(e.cells),l=a[n];if(l.mainNum===t)return e;return a[n]=Object(T.a)({},l,{mainNum:t}),Object(T.a)({},e,{cells:a})}(e,n.index,n.number);case h:return function(e,n){var t=Object(V.a)(e.cells),a=n.index.filter((function(e){return null==t[e].mainNum})),l=a.map((function(e){return-1===t[e].small.indexOf(n.number)})).reduce((function(e,n){return e||n}),!1);return a.forEach((function(e){var a=-1!==t[e].small.indexOf(n.number);l&&!a?t[e]=Object(T.a)({},t[e],{small:[].concat(Object(V.a)(t[e].small),[n.number])}):!l&&a&&(t[e]=Object(T.a)({},t[e],{small:t[e].small.filter((function(e){return e!==n.number}))}))})),Object(T.a)({},e,{cells:Object(V.a)(t)})}(e,n);case b:return function(e,n){var t=Object(V.a)(e.cells);return n.index.forEach((function(n){var a=e.cells[n],l=Object(V.a)(t);a=null==a.mainNum?Object(T.a)({},a,{small:[]}):Object(T.a)({},a,{mainNum:null}),l[n]=a,t=Object(V.a)(l)})),Object(T.a)({},e,{cells:t})}(e,n);case g:return function(e){var n=new Array(81).fill({mainNum:null,small:[]});return Object(T.a)({},e,{cells:n})}(e);case O:return function(e,n){for(var t=new Array(81),a=0;a<81;a++)"0"===n.charAt(a)||isNaN(parseInt(n.charAt(a)))?t[a]={mainNum:null,small:[]}:t[a]={mainNum:parseInt(n.charAt(a)),small:[]};return Object(T.a)({},e,{cells:t})}(e,n.value);default:return e}})),settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(T.a)({},Q().settings),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case E:case y:case j:return function(e,n){if(n.type===E)return Object(T.a)({},e,{boardSize:n.size});var t=n.type===y;return Object(T.a)({},e,{state:t?a.FROZEN:a.NORMAL})}(e,n);case x:switch(n.subtype){case"BEGIN_PAINING":return Object(T.a)({},e,{state:a.PAINTING});case"END_PAINING":return Object(T.a)({},e,{state:a.NORMAL});default:return e}default:return e}},main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{history:{activeItem:-1,items:[]}};switch((arguments.length>1?arguments[1]:void 0).type){case N:return function(e){return Object(T.a)({},e,{history:{items:[],activeItem:-1}})}(e);case k:case S:return U(e);default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{toast:null};switch((arguments.length>1?arguments[1]:void 0).type){case C:case R:default:return e}},toastr:o.reducer}),ee=Object(Z.createStore)(q,Object(X.composeWithDevTools)(Object(Z.applyMiddleware)(K.a)));ee.subscribe((function(){return localStorage.setItem("state",JSON.stringify(ee.getState()))}));var ne={0:"000",1:"1111",2:"001",3:"010",4:"011",5:"100",6:"101",7:"1100",8:"1101",9:"1110"},te={0:"000",1:"001",2:"010",3:"011",4:"100",5:"101",6:"110",7:"111"};function ae(e){for(var n=e.map((function(e){return null==e.mainNum?0:1})),t="",a=0;a<n.length;){if(1===n[a])t+=te[0],a++;else if(-1===n.indexOf(1,a)){var l=Math.min(7,n.length-a);t+=te[l],a+=l}else{var r=Math.min(n.indexOf(1,a),7);t+=te[r],a+=r}if(a>90)break}var i=e.filter((function(e){return null!=e.mainNum})).map((function(e){return e.mainNum})).map((function(e){return ne[""+e]})).reduce((function(e,n){return e+n}),"");return function(e){var n=e.toString(2),t=[];n.length%8>0&&(n=n.padEnd(n.length+(8-n.length%8),"0"));for(var a=0;a<n.length/8;a++)t.push(n.substring(8*a,8*a+8));var l=btoa(String.fromCharCode.apply(null,t.map((function(e){return parseInt(e,2)}))));return console.log(l),l.replace(/\//g,"-").replace(/\+/g,"_").replace(/=/g,"")}(BigInt("0b"+t+i))}var le=t(103),re=t(104),ie={margin:"0px",borderRadius:"0",background:"#f2f2f2",boxSizing:"border-box",flexGrow:1},ue={borderTopLeftRadius:"10px"},oe={borderTopRightRadius:"10px"},se=Object(z.connect)((function(e){return{painting:e.settings.state===a.PAINTING,settings:e.settings,full:function(){return ae(e.cells.present.cells)}}}),(function(e){return{onNew:function(){return e({type:g})},onChangeHighlight:function(n){return e(function(e){return{type:v,value:e}}(n))},onChangePainting:function(n){return e(function(e){return{type:x,subtype:e?w:I}}(n))},doImport:function(n){return e(function(e){return{type:O,value:e}}(n))},doCheck:function(){return e((function(e,n){var t,a,l,r,i;return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n(),a=t.cells.present.cells.map((function(e){return e.mainNum||"0"})).join(""),e.next=4,p.a.awrap(fetch("/api/count?sudoku="+a));case 4:return l=e.sent,e.next=7,p.a.awrap(l.text());case 7:r=e.sent,i=200==l.status,"1"==r?o.toastr.info("nice","All good big boi"):o.toastr.error("Problem","There are solutions"+i);case 10:case"end":return e.stop()}}))}))},onUndo:function(){return e(Y.ActionCreators.undo())},onRedo:function(){return e(Y.ActionCreators.redo())}}}))((function(e){var n=Object(c.useToasts)().addToast;return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{container:!0},r.a.createElement(re.a,{disableElevation:!0,style:Object(T.a)({},ie,{},ue),variant:"outlined",onClick:e.onNew},"New"),r.a.createElement(re.a,{disableElevation:!0,style:ie,variant:"outlined",onClick:function(n){return function(e){var n=window.prompt("Please enter the sodoku: ");null!==n&&e(n)}(e.doImport)}},"Import"),r.a.createElement(re.a,{disableElevation:!0,style:Object(T.a)({},ie,{},oe),variant:"outlined",onClick:function(){return function(e,n){navigator.clipboard.writeText(window.location.host+"/share/"+n()),e("URL copied to clipboard",{appearance:"info",autoDismiss:!0})}(n,e.full)}},"Share"),r.a.createElement(re.a,{disableElevation:!0,style:Object(T.a)({},ie,{},oe),variant:"outlined",onClick:function(){return e.doCheck()}},"Check")),r.a.createElement(le.a,{container:!0},r.a.createElement(re.a,{disableElevation:!0,style:Object(T.a)({},ie),variant:"outlined",onClick:function(){return e.onUndo()}},"Undo"),r.a.createElement(re.a,{disableElevation:!0,style:Object(T.a)({},ie),variant:"outlined",onClick:function(){return e.onRedo()}},"Redo")),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"painting"},"Enable Painting"),r.a.createElement("input",{id:"painting",type:"checkbox",checked:e.painting,onChange:function(n){return e.onChangePainting(n.target.checked)}})))})),ce=Object(z.connect)((function(e){return{board:(n=e.cells.present,n.cells.map((function(e){return e.mainNum||"0"})).reduce((function(e,n){return e+n}),"")),boardCells:e.cells.present.cells};var n}),(function(e){return{clearHistory:function(){return e({type:N})}}}))((function(e){return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement("h5",null,"External resources"),r.a.createElement("a",{href:"https://www.sudokuwiki.org/sudoku.html?db="+e.board,target:"_blank",rel:"noopener noreferrer"},"Sudoku Wiki"))})),me={display:"flex",height:"100vh"},fe={position:"relative",margin:"auto",padding:"20px"},pe={position:"relative",padding:"20px",width:"22%",minWidth:"270px",minHeight:"100vh",maxHeight:"100vh",overflowY:"scroll"},de={right:"-15px",top:"50vh",display:"none",position:"absolute",padding:"10px",borderTopRightRadius:"15px",borderBottomRightRadius:"15px"},he={position:"relative"},be=function(e){function n(){return Object(A.a)(this,n),Object(D.a)(this,Object(P.a)(n).apply(this,arguments))}return Object(G.a)(n,e),Object(M.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:me},r.a.createElement("div",{style:he},r.a.createElement("span",{style:de},"X"),r.a.createElement("div",{style:pe},this.props.side)),r.a.createElement("div",{style:fe},this.props.board))}}]),n}(r.a.PureComponent),Ne=t(57);var ge=Object(z.connect)((function(e){return{size:e.settings.boardSize}}),(function(e){return{onDrag:function(n,t){var a;e((a=t.size.width,{type:E,size:a}))},onDragStart:function(n,t){e({type:y})},onDragEnd:function(n,t){e({type:j})}}}))((function(e){return r.a.createElement(Ne.ResizableBox,{width:e.size,height:e.size,minConstraints:[400,400],lockAspectRatio:!0,onResize:e.onDrag,onResizeStart:e.onDragStart,onResizeStop:e.onDragEnd},e.children)})),ve=function(e,n,t){var a=e/9,l=a/3,r=Math.floor(n/a),i=9*Math.floor(t/a)+r,u=Math.floor(n/l%3);return{cell:i,subcell:3*Math.floor(t/l%3)+u}},Oe=function(e,n){var t=n.cell,a=n.subcell,l=e/9,r=l/3,i=t%9*l;i+=a%3*r+r/2;var u=Math.floor(t/9)*l;return[i,u+=Math.floor(a/3)*r+r/2]},Ee=function(e,n,t){var a=e/27,l=a;return[Math.round((n-.5*a)/l)*l+.5*a,Math.round((t-.5*a)/l)*l+.5*a]},ye=function(e){var n=e.start,t=e.end,a=e.seen,l=e.size,i=a.has(n),u=a.has(t),o=Oe(l,n),s=Oe(l,t),c=l/9/4,m=o[0]-c/2,f=o[1]-c/2,p=s[0]-c/2,d=s[1]-c/2,h=i?null:r.a.createElement("rect",{x:m,y:f,width:.8*c,height:.9*c,fill:"rgba(174, 214, 157, 0.2)",style:{pointerEvents:"none"}}),b=u?null:r.a.createElement("rect",{x:p,y:d,width:.8*c,height:.9*c,fill:"rgba(245, 240, 129, 0.2)",style:{pointerEvents:"none"}}),N=(o[0]+s[0])/2,g=(o[1]+s[1])/2;return r.a.createElement("g",null,r.a.createElement("path",{d:"M ".concat(o[0]," ").concat(o[1]," Q ").concat(N," ").concat(g,"\n        ").concat(s[0]," ").concat(s[1]),fill:"transparent",stroke:"#0000ffaa",style:{pointerEvents:"none"}}),h,b)},je={position:"absolute",zIndex:2},xe={pointerEvents:"none",stroke:"green"},we=function(e,n,t){return function(a){if(a.target instanceof SVGElement&&(null===t||void 0===t?void 0:t.start)){var l=a.target.getBoundingClientRect(),r=Ee(e,a.clientX-l.left,a.clientY-l.top),i=Object(m.a)(r,2),u=i[0],o=i[1];n(Object(T.a)({},t,{x:u,y:o}))}}},Ie=function(e,n,t,a,l,r){return function(i){return null==r?Se(e,i,a,n):ke(e,i,r,l,a,t,n)}},ke=function(e,n,t,a,l,r,i){if(n.target instanceof SVGElement){var u=n.target.getBoundingClientRect(),o=Ee(e,n.clientX-u.left,n.clientY-u.top),s=Object(m.a)(o,2),c=s[0],f=s[1],p=ve(e,c,f);if(-1!==i[p.cell].small.indexOf(p.subcell+1)&&null!==t){var d={start:t.start,end:p};r([].concat(Object(V.a)(a),[d])),l(null)}}},Se=function(e,n,t,a){if(n.target instanceof SVGElement){var l=n.target.getBoundingClientRect(),r=Ee(e,n.clientX-l.left,n.clientY-l.top),i=Object(m.a)(r,2),u=i[0],o=i[1],s=ve(e,u,o);-1!==a[s.cell].small.indexOf(s.subcell+1)&&t({start:s,x:u,y:o})}},Ce=Object(z.connect)((function(e){return{size:e.settings.boardSize,board:e.cells.present.cells}}))((function(e){var n=e.size,t=Object(l.useState)([]),a=Object(m.a)(t,2),i=a[0],u=a[1],o=Object(l.useState)(null),s=Object(m.a)(o,2),c=s[0],f=s[1],p=i.map((function(e){return r.a.createElement(ye,{seen:new Set,size:n,start:e.start,end:e.end})})),d=r.a.createElement(r.a.Fragment,null);if(c){var h=Oe(n,c.start),b=Object(m.a)(h,2),N=b[0],g=b[1];d=r.a.createElement("path",{d:"M ".concat(N," ").concat(g," L ").concat(c.x," ").concat(c.y),style:xe})}return r.a.createElement("svg",{width:e.size,height:e.size,style:je,onClick:Ie(n,e.board,u,f,i,c),onMouseMove:we(n,f,c)},p,d)})),Re=Object(z.connect)((function(e){return{enabled:e.settings.state===a.PAINTING,size:e.settings.boardSize}}))((function(e){if(!e.enabled)return r.a.createElement(r.a.Fragment,null);var n=r.a.createElement(Ce,null);return r.a.createElement("div",null,n)})),ze=function(){var e=r.a.createElement(ge,null,r.a.createElement(Re,null),r.a.createElement(F,null));return r.a.createElement(z.Provider,{store:ee},r.a.createElement(c.ToastProvider,null,r.a.createElement(s.a,{timeOut:4e3,newestOnTop:!1,preventDuplicates:!0,position:"top-right",transitionIn:"fadeIn",transitionOut:"fadeOut",progressBar:!0,closeOnToastrClick:!0}),r.a.createElement(be,{board:e,side:r.a.createElement(ce,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.1e858404.chunk.js.map