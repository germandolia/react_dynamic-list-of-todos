(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),u=n(5),s=n(1),l=n.n(s),i=n(3),m=n(6),p=(n(16),function(e){var t=e.todo,n=t.user,a=t.title,c=t.completed;return r.a.createElement("div",{className:"Todo"},r.a.createElement("small",{style:{color:c?"yellowgreen":"coral"}},c?"done":"not done"),r.a.createElement("p",null,a),r.a.createElement("small",null,r.a.createElement("br",null),"For: ".concat(n.name)))}),f=(n(17),function(e){var t=e.todos;return r.a.createElement("div",{className:"TodoList"},t.map((function(e){return r.a.createElement(p,{todo:e,key:e.id})})))}),d=n(7),b="https://mate.academy/students-api/",E=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("".concat(b,"todos"));case 2:return t=e.sent,e.next=5,E("".concat(b,"users"));case 5:return n=e.sent,a=t.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:n.find((function(t){return t.id===e.userId}))})})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=(n(18),function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),s=Object(m.a)(o,2),p=s[0],d=s[1],b=Object(a.useState)(!1),E=Object(m.a)(b,2),_=E[0],h=E[1],v=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,y().then((function(e){return c(e)}));case 3:d(!1),h(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return p?r.a.createElement("h1",{className:"App__heading"},"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App__heading"},"Dynamic list of TODOs"),!_&&r.a.createElement("div",{className:"App__menu"},r.a.createElement("button",{type:"button",className:"App__menu-btn",onClick:v},"Load List of Todos")),_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App__menu"},r.a.createElement("button",{type:"button",className:"App__menu-btn",onClick:function(){c(Object(u.a)(n).sort((function(e,t){return e.title.localeCompare(t.title)})))}},"Sort by Title"),r.a.createElement("button",{type:"button",className:"App__menu-btn",onClick:function(){c(Object(u.a)(n).sort((function(e,t){return Number(e.completed)-Number(t.completed)})))}},"Sort by Completion"),r.a.createElement("button",{type:"button",className:"App__menu-btn",onClick:function(){c(Object(u.a)(n).sort((function(e,t){return e.user.name.localeCompare(t.user.name)})))}},"Sort by User Name")),r.a.createElement(f,{todos:n})))});o.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a3e77267.chunk.js.map