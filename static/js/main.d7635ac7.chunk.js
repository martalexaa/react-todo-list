(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(12),l=n.n(o),r=n(9),i=n(6);function u(e){var t=e.todo,n=e.toggleTodo;return c.a.createElement("div",{className:"todos"},c.a.createElement("label",{className:"todo"},c.a.createElement("input",{type:"checkbox",checked:t.complete,onChange:function(){n(t.id)}}),t.name))}function m(e){var t=e.todos,n=e.toggleTodo;return t.map(function(e){return c.a.createElement(u,{key:e.id,toggleTodo:n,todo:e})})}var s=n(13),d=n.n(s),f=n(32),p=n(27),E=n(33),b=n(34),g=n(35),h=(n(23),"todoApp.todos");var v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(a.useRef)();function u(){var e=l.current.value;""!==e&&(o(function(t){return[].concat(Object(r.a)(t),[{id:d()(),name:e,complete:!1}])}),l.current.value="")}return Object(a.useEffect)(function(){var e=JSON.parse(localStorage.getItem(h));e&&o(function(t){return[].concat(Object(r.a)(t),Object(r.a)(e))})},[]),Object(a.useEffect)(function(){localStorage.setItem(h,JSON.stringify(n))},[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{className:"container"},c.a.createElement(p.a,null,c.a.createElement(E.a,{className:"title"},c.a.createElement("h1",null,"My Favorite Todo App")),c.a.createElement("div",{className:"instructions"},c.a.createElement("p",null,"Type your todos one by one and add them by clicking the 'Add' button."),c.a.createElement("p",null,"If a task is done, click on the checkbox and hit the 'Clear' button.")),c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement(b.a.Control,{required:!0,ref:l,type:"text",title:"Type here max. 10 characters",className:"input",placeholder:"Type here...",maxLength:10,onKeyDown:function(e){"Enter"===e.key&&u()}}))),c.a.createElement(E.a,null,c.a.createElement(g.a,{onClick:u,className:"btn"},"Add Item"),c.a.createElement(g.a,{onClick:function(){if(0!==n.filter(function(e){return e.complete}).length){var e=n.filter(function(e){return!e.complete});o(e)}else alert("Please select an item by clicking the checkbox")},className:"btn"},"Clear Selected"),c.a.createElement(g.a,{onClick:function(){o([])},className:"btn"},"Clear All")),c.a.createElement("div",{className:"left-todos"},n.filter(function(e){return!e.complete}).length," todos left"),c.a.createElement(m,{todos:n,toggleTodo:function(e){var t=Object(r.a)(n),a=t.find(function(t){return t.id===e});a.complete=!a.complete,o(t)}}),c.a.createElement(E.a,{className:"footer"}))))};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)))}},[[14,2,1]]]);
//# sourceMappingURL=main.d7635ac7.chunk.js.map