(this["webpackJsonpassignmet8-teama"]=this["webpackJsonpassignmet8-teama"]||[]).push([[0],{35:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),a=t(17),i=t.n(a),o=t(23),l=t(4),u=[!1,!1,!1,!1,!1],s=["To Do","In Progress","Complete"],d=[{id:1,title:"\uc0dd\uc131\uc77c",value:"createAt"},{id:2,title:"\uc911\uc694\ub3c4",value:"importance"},{id:3,title:"\uc0dd\uc131\uc790",value:"writer"}],b={year:"numeric",weekday:"long",month:"long",day:"numeric"},p={hour:"numeric",minute:"2-digit",second:"2-digit"},j=t(3),g=t(6);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var m=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{fill:"current",d:"M358.318,446.684c-3.789,0-7.585-1.165-10.821-3.507l-119.021-86.487l-119.019,86.476c-6.449,4.695-15.18,4.695-21.632,0 c-6.449-4.69-9.148-12.982-6.684-20.573l45.459-139.93L7.584,196.196c-6.449-4.687-9.143-12.985-6.684-20.575 c2.459-7.575,9.518-12.709,17.498-12.709h147.121l45.459-139.924c2.459-7.581,9.518-12.709,17.498-12.709 c7.956,0,15.042,5.128,17.498,12.709l45.468,139.924H438.56c7.98,0,15.043,5.134,17.504,12.709 c2.463,7.584-0.233,15.889-6.683,20.575l-119.021,86.473l45.456,139.93c2.463,7.584-0.233,15.882-6.683,20.578 C365.914,445.519,362.101,446.684,358.318,446.684z"}))),O=r.createElement("g",null),h=r.createElement("g",null),v=r.createElement("g",null),w=r.createElement("g",null),y=r.createElement("g",null),E=r.createElement("g",null),k=r.createElement("g",null),F=r.createElement("g",null),S=r.createElement("g",null),C=r.createElement("g",null),I=r.createElement("g",null),N=r.createElement("g",null),T=r.createElement("g",null),A=r.createElement("g",null),z=r.createElement("g",null);function D(e,n){var t=e.title,c=e.titleId,a=x(e,["title","titleId"]);return r.createElement("svg",f({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"15.966px",height:"15.966px",viewBox:"0 0 456.966 456.966",style:{enableBackground:"new 0 0 456.966 456.966"},xmlSpace:"preserve",ref:n,"aria-labelledby":c},a),t?r.createElement("title",{id:c},t):null,m,O,h,v,w,y,E,k,F,S,C,I,N,T,A,z)}var P,B,R,L,_,U,M=r.forwardRef(D),V=(t.p,t(2)),J=t(1),H=V.c.label(P||(P=Object(j.a)(["\n  margin-right: 3px;\n"]))),K=function(e){var n=function(e){return u.map((function(n,t){return t<e}))},t=e.starIndex,c=e.setStarIndex,a=e.isCreate,i=Object(r.useState)(n(t)),o=Object(l.a)(i,2),s=o[0],d=o[1];return Object(J.jsx)(J.Fragment,{children:a?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(H,{htmlFor:"importance"}),s.map((function(e,t){return Object(J.jsx)(M,{onClick:function(e){!function(e,t){var r=n(t);d(r),c(t)}(0,t+1)},name:"importance",fill:e?"gold":"lightgray"},t)}))]}):n(t).map((function(e,n){return e?Object(J.jsx)(M,{fill:"gold"},n):""}))})},W=V.c.div(B||(B=Object(j.a)(["\n  margin-top: 3px;\n"]))),X=V.c.div(R||(R=Object(j.a)(["\n"]))),Y=V.c.div(L||(L=Object(j.a)(["\n  margin-bottom: 5px;\n"]))),q=V.c.input(_||(_=Object(j.a)(["\n  + label{\n    padding: 3px 8px;\n    font-size: 0.8rem;\n  }\n\n  &:checked + label{\n    color: #FFFFFF;\n    border-radius: 5px;\n    font-size: 0.8rem;\n    background-color: ",";\n  }\n"])),(function(e){return"To Do"===e.value?"#9895E0":"In Progress"===e.value?"#4A94F8":"#56C991"})),G=function(e){var n=e.updateStatus,t=e.setUpdateStatus,r=function(e){var n=e.target.value;t(n)};return Object(J.jsx)(W,{children:Object(J.jsx)(X,{children:s.map((function(e,t){return Object(J.jsxs)(Y,{children:[Object(J.jsx)(q,{type:"radio",name:"status",value:e,checked:e===n,onChange:r}),Object(J.jsx)("label",{children:e})]},t)}))})})},Q=function(e){var n=e.modalOpen,t=e.children,r=e.handleToggle;return Object(J.jsx)(J.Fragment,{children:n&&Object(J.jsx)(Z,{onClick:function(){return r()},children:Object(J.jsxs)("div",{children:[t,Object(J.jsx)("button",{onClick:r,children:"\ud655\uc778"})]})})})},Z=V.c.div(U||(U=Object(j.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: rgba(0, 0, 0, 0.3);\n\n  div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    width: 50%;\n    height: 30%;\n    border-radius: 15px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    z-index: 2001;\n    background: rgba(255,255,255,0.8);\n    font-size: 1rem;\n  }\n\n  button {\n    width: 60px;\n    height: 30px;\n    border-radius: 10px;\n    margin-top: 20px;\n    background-color: rgba(0,0,0,0.3);\n    color: #FFFFFF;\n    &:hover {\n      background-color: #4B5489;\n      cursor: pointer;\n    }\n  }\n"])));function $(){return($=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ee(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var ne=r.createElement("g",null,r.createElement("path",{d:"m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"}),r.createElement("path",{d:"m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"}),r.createElement("path",{d:"m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"}),r.createElement("path",{d:"m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"}));function te(e,n){var t=e.title,c=e.titleId,a=ee(e,["title","titleId"]);return r.createElement("svg",$({id:"Layer_1",enableBackground:"new 0 0 512 512",height:"15px",viewBox:"0 0 512 512",width:"15px",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},a),t?r.createElement("title",{id:c},t):null,ne)}var re=r.forwardRef(te);t.p;function ce(){return(ce=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ae(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var ie=r.createElement("g",null,r.createElement("path",{d:"m135 90h100c8.284 0 15-6.716 15-15s-6.716-15-15-15h-100c-8.284 0-15 6.716-15 15s6.716 15 15 15z"}),r.createElement("path",{d:"m75 150h220c8.284 0 15-6.716 15-15s-6.716-15-15-15h-220c-8.284 0-15 6.716-15 15s6.716 15 15 15z"}),r.createElement("path",{d:"m155 300h-80c-8.284 0-15 6.716-15 15s6.716 15 15 15h80c8.284 0 15-6.716 15-15s-6.716-15-15-15z"}),r.createElement("path",{d:"m503.858 77.724c14.255-20.358 9.307-48.418-11.051-62.672-20.358-14.255-48.417-9.307-62.672 11.051l-60.135 85.882v-96.985c0-8.284-6.716-15-15-15h-340c-8.284 0-15 6.716-15 15v442c0 30.327 24.673 55 55 55h320c30.327 0 55-24.673 55-55v-40c0-8.284-6.716-15-15-15h-45v-133.106zm-49.149-34.414c4.752-6.786 14.105-8.435 20.891-3.684 6.786 4.752 8.436 14.105 3.684 20.891l-20.075 28.67-24.575-17.207zm-374.709 373.69v40c0 13.785-11.215 25-25 25s-25-11.215-25-25v-427h310v124.829l-30.34 43.33c.219-1.019.34-2.075.34-3.159 0-8.284-6.716-15-15-15h-220c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c2.944 0 5.681-.86 7.998-2.325l-22.635 32.325h-205.363c-8.284 0-15 6.716-15 15s6.716 15 15 15h192.087l-23.151 70h-38.936c-8.284 0-15 6.716-15 15s6.716 15 15 15h48.455c3.529.342 7.271-.587 10.616-3.229l75.929-59.967v95.196h-245c-8.284 0-15 6.716-15 15zm231.587-125.984-26.872 21.223 10.752-32.51zm88.413 140.984v25c0 13.785-11.215 25-25 25h-271.017c3.845-7.505 6.017-16.004 6.017-25v-25zm-66.979-162.599-24.574-17.207 108.98-155.64 24.575 17.207z"}));function oe(e,n){var t=e.title,c=e.titleId,a=ae(e,["title","titleId"]);return r.createElement("svg",ce({id:"Capa_1",enableBackground:"new 0 0 512 512",height:"15px",viewBox:"0 0 512 512",width:"15px",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},a),t?r.createElement("title",{id:c},t):null,ie)}var le=r.forwardRef(oe);t.p;function ue(){return(ue=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function se(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var de=r.createElement("path",{d:"m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0"});function be(e,n){var t=e.title,c=e.titleId,a=se(e,["title","titleId"]);return r.createElement("svg",ue({height:"16px",viewBox:"0 0 512 512",width:"16px",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},a),t?r.createElement("title",{id:c},t):null,de)}var pe=r.forwardRef(be),je=(t.p,t(16)),ge=function(e){var n=localStorage.getItem(e);return n&&JSON.parse(n)},fe=function(e,n){localStorage.setItem(e,JSON.stringify(n))},xe=function(){var e;e="user_id",localStorage.removeItem(e)},me=function(){return ge("todos")},Oe=function(e){fe("todos",e)},he=[],ve=Object(r.createContext)(he),we=0,ye=Object(r.createContext)(null);function Ee(e,n){switch(n.type){case"LOAD_DATA":var t=me()||[];return t&&t.length>=1&&(we=t[t.length-1].id),Oe(t),t;case"SAVE":var r=n.saveTodo;return Oe(r),r;case"CREATE":var c=we+1,a=e.concat(Object(je.a)(Object(je.a)({},n.createTodo),{},{id:c}));return Oe(a),a;case"REMOVE":return function(e){var n=me().filter((function(n){return n.id!==e}));Oe(n)}(n.id),e.filter((function(e){return e.id!==n.id}));case"UPDATE":var i=e.findIndex((function(e){return e.id===n.updateTodo.id})),o=Object(g.a)(e);return o.splice(i,1,n.updateTodo),Oe(o),o;case"FILTER":return n.copiedTodos&&""!==n.value?n.copiedTodos.filter((function(e){return!0===String(e[n.Item]).includes(n.value)})):n.copiedTodos;default:throw new Error("Unhandled action")}}var ke,Fe,Se,Ce,Ie,Ne,Te,Ae,ze,De;function Pe(e){var n=e.children,t=Object(r.useReducer)(Ee,he),c=Object(l.a)(t,2),a=c[0],i=c[1];return Object(J.jsx)(ye.Provider,{value:i,children:Object(J.jsx)(ve.Provider,{value:a,children:n})})}function Be(){var e=Object(r.useContext)(ye);if(!e)throw new Error("TodosProvider not found");return e}var Re,Le,_e,Ue,Me,Ve,Je,He,Ke,We=Object(r.forwardRef)((function(e,n){var t=Be(),c=e.todo,a=e.userName,i=e.setDragTodo,o=Object(r.useState)(!1),u=Object(l.a)(o,2),s=u[0],d=u[1],b=Object(r.useState)(c.status),p=Object(l.a)(b,2),j=p[0],g=p[1],f=Object(r.useState)(c.importance),x=Object(l.a)(f,2),m=x[0],O=x[1],h=Object(r.useState)(!1),v=Object(l.a)(h,2),w=v[0],y=v[1],E=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=E.current;e&&e.focus()}),[s]);var k=function(){y(!w)},F=function(){if(a!==c.writer)return k();var e=E.current,n=e.innerText;if(s&&""!==n){var r={id:c.id,taskName:n,status:j,importance:0===m?1:m,writer:c.writer,createAt:c.createAt,updateAt:new Date};t({type:"UPDATE",updateTodo:r})}""===n&&(e.innerText=c.taskName),d((function(e){return!e}))},S=Object(r.useCallback)((function(e){i(e)}),[i]),C=Object(r.useCallback)((function(){i(null)}),[i]);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(Xe,{draggable:!0,ref:n,onDragStart:function(){return S(c)},onDragEnd:C,children:[Object(J.jsxs)(Ye,{children:[Object(J.jsx)(qe,{children:Object(J.jsx)(K,{isCreate:s,starIndex:m,setStarIndex:O})}),Object(J.jsxs)(Qe,{children:[s?Object(J.jsx)(pe,{onClick:F}):Object(J.jsx)(le,{onClick:F}),Object(J.jsx)(re,{onClick:function(){return function(e){if(window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))return t({type:"REMOVE",id:e})}(c.id)}})]})]}),Object(J.jsx)(Ge,{ref:E,contentEditable:s,suppressContentEditableWarning:!0,children:c.taskName}),Object(J.jsx)(Ze,{children:s?Object(J.jsx)(G,{updateStatus:j,setUpdateStatus:g}):Object(J.jsx)(tn,{status:c.status,children:c.status})}),Object(J.jsxs)($e,{children:[Object(J.jsxs)(en,{children:["createAt ",String(c.createAt).split("T")[0]]}),Object(J.jsx)(nn,{children:c.writer})]})]}),Object(J.jsx)(Q,{modalOpen:w,handleToggle:k,children:Object(J.jsx)("p",{children:"\uc0dd\uc131\uc790\uac00 \uac19\uc9c0 \uc54a\uc544 \uc218\uc815\uc774 \ubd88\uac00\ud569\ub2c8\ub2e4"})})]})})),Xe=V.c.div(ke||(ke=Object(j.a)(["\n  position: relative;\n  margin-bottom: 15px;\n  padding: 25px 15px;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  cursor: pointer;\n"]))),Ye=V.c.div(Fe||(Fe=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),qe=V.c.span(Se||(Se=Object(j.a)(["\n  margin-right: 5px;\n  padding: 2px;\n"]))),Ge=V.c.div(Ce||(Ce=Object(j.a)(["\n  margin-bottom: 8px;\n  padding: 2px;\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n"]))),Qe=V.c.div(Ie||(Ie=Object(j.a)(["\n  svg+svg{\n    margin-left: 5px;\n    margin-right: 3px;\n  }\n  svg{\n    fill: #AAAAAA;\n    &:hover{\n      fill: #4B5489;\n    }\n  }\n"]))),Ze=V.c.div(Ne||(Ne=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-left: 2px;\n  margin-bottom: 35px;\n"]))),$e=V.c.div(Te||(Te=Object(j.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  bottom: 0;\n  margin-bottom: 25px;\n  font-size: 0.8rem;\n  color: #333333;\n"]))),en=V.c.span(Ae||(Ae=Object(j.a)(["\n  margin-right: 5px;\n  padding: 2px;\n  border-radius: 5px;\n  font-size: 0.8rem;\n  color: #777777;\n"]))),nn=V.c.span(ze||(ze=Object(j.a)(["\n  margin-right: 35px;\n  padding: 2px;\n  font-size: 0.8rem;\n  border-radius: 5px;\n"]))),tn=V.c.span(De||(De=Object(j.a)(["\n  margin-right: 5px;\n  margin-bottom: 4px;\n  padding: 5px 9px;\n  border-radius: 5px;\n  color: #FFFFFF;\n  font-size: 0.8rem;\n  background-color: ",";\n"])),(function(e){return"To Do"===e.status?"#9895E0":"In Progress"===e.status?"#4A94F8":"#56C991"})),rn=We,cn=function(e){var n=e.tagName,t=e.userName,c=function(){var e=Object(r.useContext)(ve);if(!e)throw new Error("TodosProvider not found");return e}(),a=Be(),i=Object(r.useState)(null),o=Object(l.a)(i,2),u=o[0],s=o[1],d=Object(r.useRef)(null),b=Object(r.useRef)([]),p=Object(r.useCallback)((function(e){return Object(g.a)(b.current.filter((function(e){return void 0!==e}))).reduce((function(n,t,r){var c=t.getBoundingClientRect(),a=e-c.top-c.height/2;return a<0&&a>n.offset?{offset:a,element:t,index:r}:n}),{offset:Number.NEGATIVE_INFINITY}).index}),[]),j=function(e,n){var t=!1;return function(){for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];t||(t=!0,setTimeout((function(){e.apply(void 0,c),t=!1}),n))}}(Object(r.useCallback)((function(e){e.preventDefault();var n=p(e.clientY);if(console.log(n),u)if(void 0===n){var t=Object(g.a)(c),r=t.indexOf(u);t.splice(r,1),t.push(u),a({type:"SAVE",saveTodo:t})}else{var i=Object(g.a)(c),o=i.indexOf(u);i.splice(o,1),i.splice(n,0,u),a({type:"SAVE",saveTodo:i})}}),[p,u,a,c]),300);return Object(J.jsx)("div",{onDragOver:j,ref:d,children:null===c||void 0===c?void 0:c.filter((function(e){return(null===e||void 0===e?void 0:e.status)===n})).map((function(e,r){return Object(J.jsx)(rn,{todo:e,tagName:n,userName:t,setDragTodo:s,ref:function(e){return b.current[r]=e}},e.id)}))})},an=c.a.memo(cn),on=function(e){var n=e.open,t=e.children;return Object(J.jsx)(J.Fragment,{children:n&&Object(J.jsx)("div",{children:t})})},ln=V.c.form(Re||(Re=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #4B5489;\n  background-color: rgba(171, 184, 213,0.8);\n  margin-bottom: 15px;\n  padding: 25px 15px;\n  border-radius: 10px;\n  \n"]))),un=V.c.div(Le||(Le=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  label{\n    width: 20%;\n    font-weight: 600;\n    text-align: center;\n  }\n  input{\n    width: 75%;\n    border-radius: 5px;\n    height: 30px;\n  }\n"]))),sn=V.c.div(_e||(_e=Object(j.a)(["\n  margin: 5px 0;\n"]))),dn=V.c.div(Ue||(Ue=Object(j.a)(["\n  display: flex;  \n  justify-content: flex-end;\n  button {\n    width: 60px;\n    height: 30px;\n    border-radius: 10px;\n    background-color: rgba(0,0,0,0.3);\n    color: #FFFFFF;\n    &:hover {\n      background-color: #4B5489;\n      cursor: pointer;\n    }\n  }\n  button + button {\n    margin-left: 10px;\n    margin-right: 5px;\n  }\n"]))),bn=function(e){e.isCreate;var n=e.open,t=e.tagName,c=e.userName,a=e.setIsOpen,i=Be(),o=Object(r.useState)(1),u=Object(l.a)(o,2),s=u[0],d=u[1],b=Object(r.useState)(""),p=Object(l.a)(b,2),j=p[0],g=p[1],f=Object(r.useState)(!1),x=Object(l.a)(f,2),m=x[0],O=x[1],h=Object(r.useState)(!1),v=Object(l.a)(h,2),w=v[0],y=v[1],E=function(){k()},k=function(){if(""!==j){var e={id:we,taskName:j,status:t,importance:0===s?1:s,writer:c,createAt:new Date,updateAt:new Date};i({type:"CREATE",createTodo:e}),a(!1),we+=1,g(""),d(0)}else F()},F=function(){O(!m)};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(on,{open:n,children:Object(J.jsxs)(ln,{onSubmit:E,children:[Object(J.jsxs)(un,{children:[Object(J.jsx)("label",{htmlFor:"taskName",children:"\ud560 \uc77c"}),Object(J.jsx)("input",{onChange:function(e){return function(e){g(e.target.value)}(e)},type:"text",placeholder:"\ud560 \uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694",name:"taskName",value:j})]}),Object(J.jsx)(sn,{children:Object(J.jsx)(K,{isCreate:!0,setStarIndex:d})}),Object(J.jsxs)(dn,{children:[Object(J.jsx)("button",{type:"button",onClick:function(){c?E():y(!0)},children:"\uc800\uc7a5"}),Object(J.jsx)("button",{onClick:function(){a(!1)},children:"\ucde8\uc18c"})]})]})}),Object(J.jsx)(Q,{modalOpen:m,handleToggle:F,children:Object(J.jsx)("p",{children:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694\ud83d\udcdd"})}),Object(J.jsx)(Q,{modalOpen:w,handleToggle:function(){y(!w)},children:Object(J.jsx)("p",{children:"\ub85c\uadf8\uc778 \ud6c4 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4\ud83e\udd17"})})]})},pn=function(e){var n=e.tagName,t=e.userName,c=Be(),a=Object(r.useState)(!1),i=Object(l.a)(a,2),o=i[0],u=i[1];Object(r.useEffect)((function(){c({type:"LOAD_DATA"})}),[c]);var s=Object(r.useCallback)((function(){u(!0)}),[]);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(jn,{tagName:n,children:[Object(J.jsxs)("p",{children:[n," "]}),Object(J.jsx)("button",{onClick:s,children:"+"})]}),Object(J.jsx)(bn,{isCreate:!0,open:o,tagName:n,userName:t,setIsOpen:u}),Object(J.jsx)(an,{tagName:n,userName:t})]})},jn=V.c.div(Me||(Me=Object(j.a)(["\n  display: flex;\n  margin-bottom: 25px;\n  padding: 15px 10px;\n  justify-content: space-between;\n  color: #FFFFFF;\n  font-size: 1.2rem;\n  border-radius: 10px;\n  background-color: ",";\n\n  p {\n    margin-left: 10px;\n    cursor: pointer;\n  }\n  button {\n    margin-right: 5px;\n    border-radius: 25%;\n    &:hover {\n      background-color: #4B5489;\n      cursor: pointer;\n    }\n  }\n"])),(function(e){return"To Do"===e.tagName?"#9895E0":"In Progress"===e.tagName?"#4A94F8":"#56C991"})),gn=function(){var e=Object(r.useState)((new Date).toLocaleDateString("kr-KR",b)),n=Object(l.a)(e,1)[0],t=Object(r.useState)((new Date).toLocaleTimeString("kr-KR",p)),c=Object(l.a)(t,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){var e=setInterval((function(){i((new Date).toLocaleTimeString("kr-KR",p))}),1e3);return function(){clearInterval(e)}}),[]),Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(fn,{children:[n," ",a]})})},fn=V.c.span(Ve||(Ve=Object(j.a)(["\n  padding: 25px;\n"]))),xn=c.a.memo(gn),mn=V.c.div(Je||(Je=Object(j.a)(["\n  width: 30%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  button {\n    height: 30px;\n    border-radius: 10px;\n    background-color: rgba(0,0,0,0.3);\n    color: #FFFFFF;\n    &:hover {\n      background-color: #4B5489;\n      cursor: pointer;\n    }\n  }\n"]))),On=V.c.span(He||(He=Object(j.a)(["\n  margin-right: 15px;\n"]))),hn=V.c.form(Ke||(Ke=Object(j.a)(["\n  white-space: nowrap;\n  input {\n    height: 30px;\n    padding: 0 12px;\n    border-radius: 10px 0 0 10px;\n    background-color: rgba(255,255,255,0.5);\n    border:none;\n      &:focus {\n        outline: 0;\n        border: 1px solid #4B5489;\n    }\n  }\n  button {\n    height: 30px;\n    border-radius: 0 10px 10px 0;\n    background-color: rgba(0,0,0,0.3);\n    color: #FFFFFF;\n    &:hover {\n      background-color: #4B5489;\n      cursor: pointer;\n    }\n  }\n"]))),vn=function(e){var n=Object(r.useState)(!1),t=Object(l.a)(n,2),c=t[0],a=t[1],i=e.userName,o=e.setUserName;Object(r.useEffect)((function(){var e=ge("user_id");o(e),a(!!e)}),[o]);return Object(J.jsx)(mn,{children:c?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(On,{children:i})," ",Object(J.jsx)("button",{onClick:function(){a(!1),xe(),o("")},children:"\ub85c\uadf8\uc544\uc6c3"})]}):Object(J.jsxs)(hn,{onSubmit:function(e){e.preventDefault(),i&&(a(!0),fe("user_id",i))},children:[Object(J.jsx)("input",{type:"text",name:"username",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:i||"",onChange:function(e){o(e.target.value)}}),Object(J.jsx)("button",{children:"\ub85c\uadf8\uc778"})]})})};function wn(){return(wn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function yn(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var En=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M506.157,132.386c-7.803-7.819-20.465-7.831-28.285-0.029l-207.73,207.299c-7.799,7.798-20.486,7.797-28.299-0.015 L34.128,132.357c-7.819-7.803-20.481-7.79-28.285,0.029c-7.802,7.819-7.789,20.482,0.029,28.284l207.701,207.27 c11.701,11.699,27.066,17.547,42.433,17.547c15.358,0,30.719-5.846,42.405-17.533L506.128,160.67 C513.946,152.868,513.959,140.205,506.157,132.386z"}))),kn=r.createElement("g",null),Fn=r.createElement("g",null),Sn=r.createElement("g",null),Cn=r.createElement("g",null),In=r.createElement("g",null),Nn=r.createElement("g",null),Tn=r.createElement("g",null),An=r.createElement("g",null),zn=r.createElement("g",null),Dn=r.createElement("g",null),Pn=r.createElement("g",null),Bn=r.createElement("g",null),Rn=r.createElement("g",null),Ln=r.createElement("g",null),_n=r.createElement("g",null);function Un(e,n){var t=e.title,c=e.titleId,a=yn(e,["title","titleId"]);return r.createElement("svg",wn({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"15px",height:"15px",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:n,"aria-labelledby":c},a),t?r.createElement("title",{id:c},t):null,En,kn,Fn,Sn,Cn,In,Nn,Tn,An,zn,Dn,Pn,Bn,Rn,Ln,_n)}var Mn,Vn,Jn,Hn,Kn,Wn,Xn,Yn,qn,Gn,Qn,Zn,$n,et=r.forwardRef(Un),nt=(t.p,function(e){var n=e.dropdownName,t=e.setDropdownName,c=e.setInputValue,a=e.setDropdownItem,i=Object(r.useState)(!1),o=Object(l.a)(i,2),u=o[0],s=o[1],b=Object(r.useCallback)((function(){s((function(e){return!e}))}),[]),p=Object(r.useCallback)((function(e){var n=e.value,r=e.title;a(n),t(r),c("")}),[a,t,c]);return Object(J.jsxs)(tt,{onClick:b,onMouseLeave:function(){return s(!1)},children:[Object(J.jsxs)(ct,{children:[n,Object(J.jsx)(et,{})]}),Object(J.jsx)(rt,{isActive:u,children:d.map((function(e){return Object(J.jsx)(at,{onClick:function(){return p(e)},children:Object(J.jsx)("p",{children:e.title})},e.id)}))})]})}),tt=V.c.div(Mn||(Mn=Object(j.a)(["\n  color: black;\n  height: 45px;\n  border-radius: 10px 0 0 10px;\n  background-color: white;\n"]))),rt=V.c.ul(Vn||(Vn=Object(j.a)(["\n  display: ",";\n  position: absolute;\n  background-color: white;\n  width: 150px;\n  color: black;\n"])),(function(e){return e.isActive?"block":"none"})),ct=V.c.p(Jn||(Jn=Object(j.a)(["\n  width: 150px;\n  height: 45px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  cursor: pointer;\n  color: #4B5489;\n"]))),at=V.c.li(Hn||(Hn=Object(j.a)(["\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n"]))),it=function(){var e=me(),n=Be(),t=Object(r.useState)(""),c=Object(l.a)(t,2),a=c[0],i=c[1],o=Object(r.useState)("\uc0dd\uc131\uc77c"),u=Object(l.a)(o,2),s=u[0],d=u[1],b=Object(r.useState)("createAt"),p=Object(l.a)(b,2),j=p[0],g=p[1],f=Object(r.useState)(e),x=Object(l.a)(f,1)[0],m=Object(r.useState)(e),O=Object(l.a)(m,1)[0];Object(r.useEffect)((function(){var e=a.length;x&&n({type:"FILTER",copiedTodos:x,length:e,value:a,Item:j})}),[a,x,j,O,n]);var h=Object(r.useCallback)((function(e){var n=e.target.value;i(n)}),[]);return Object(J.jsxs)(ot,{children:[Object(J.jsx)(nt,{dropdownName:s,setDropdownName:d,setInputValue:i,setDropdownItem:g}),Object(J.jsx)(lt,{placeholder:"".concat(s,"\uc0dd\uc131\uc77c"===s?"\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694. \uc608) 2021-08-26 ":"\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),onChange:h,type:"text",value:a})]})},ot=V.c.div(Kn||(Kn=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),lt=V.c.input(Wn||(Wn=Object(j.a)(["\n  width: 30%;\n  height: 45px;\n  padding: 0 12px;\n  border-radius: 0 10px 10px 0;\n  border:none;\n  \n  &:focus {\n    outline: 0;\n    border: 1px solid #4B5489;\n  }\n\n  background-color: #fff;\n"]))),ut=V.c.div(Xn||(Xn=Object(j.a)(["\n  display: flex;\n  margin: 0 20px;\n  justify-content: space-between;\n"]))),st=function(e){var n=e.userName,t=e.setUserName;return Object(J.jsxs)(ut,{children:[Object(J.jsx)(xn,{}),Object(J.jsx)(it,{}),Object(J.jsx)(vn,{userName:n,setUserName:t})]})},dt={Wrap:V.c.div(Yn||(Yn=Object(j.a)(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    background : \n    linear-gradient(\n      217deg, \n      rgba(130, 157, 200, 0.8), \n      rgba(228, 228, 241, 0.8) \n    ),\n    linear-gradient(\n      127deg, \n      rgba(228, 228, 241, 0.8), \n      rgba(171, 184, 213, 0.8) \n\n    ),\n    linear-gradient(\n      336deg, \n      rgba(255, 255, 255, 0.8), \n      rgba(130, 157, 200, 0.8) \n    );\n  "]))),Header:V.c.header(qn||(qn=Object(j.a)(["\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 80px;\n    margin-bottom: 30px;\n    background-color: rgba(255,255,255,0.3);\n    border-radius: 4px;\n    z-index: 10;\n    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);\n    span {\n      white-space: nowrap;\n    }\n    "]))),Body:V.c.div(Gn||(Gn=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n    margin-top: 80px;\n\n  "]))),Main:V.c.main(Qn||(Qn=Object(j.a)(["\n    width: 80%;\n    margin: 0 auto;\n    padding: 50px 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n  "]))),Section:V.c.section(Zn||(Zn=Object(j.a)(["\n    width: 32%;\n    padding: 15px;\n    border-radius: 10px;\n    background-color: rgba(255,255,255,0.2);\n  "])))},bt=function(){var e=Object(r.useState)(""),n=Object(l.a)(e,2),t=n[0],c=n[1];return Object(J.jsx)(Pe,{children:Object(J.jsxs)(dt.Wrap,{children:[Object(J.jsx)(dt.Header,{children:Object(J.jsx)(st,{userName:t,setUserName:c})}),Object(J.jsx)(dt.Body,{children:Object(J.jsx)(dt.Main,{children:s.map((function(e){return Object(J.jsx)(dt.Section,{children:Object(J.jsx)(pn,{tagName:e,userName:t})},e)}))})})]})})},pt=t(21),jt=Object(V.a)($n||($n=Object(j.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family: 'NanumSquareRound', sans-serif;\n    }\n    ol, ul, li {\n        list-style: none;\n    }\n    button{\n        border:none;\n    }\n"])),pt.a);i.a.render(Object(J.jsx)(c.a.StrictMode,{children:Object(J.jsxs)(o.a,{basename:"Assignmet8-TeamA",children:[Object(J.jsx)(jt,{}),Object(J.jsx)(bt,{})]})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.be573da0.chunk.js.map