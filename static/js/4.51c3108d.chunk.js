(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{292:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__7yEQ6",dialog:"Dialogs_dialog__3fuWp",link:"Dialogs_link__3Zj7J",dialogItems:"Dialogs_dialogItems__2hGUJ",active:"Dialogs_active__2rqpf",message:"Dialogs_message__nyuSM",img:"Dialogs_img__100Sa",btn:"Dialogs_btn__ceXZl"}},296:function(e,s,a){"use strict";a.r(s);var i=a(130),t=(a(1),a(292)),n=a.n(t),c=a(19),g=a(0),o=function(e){var s="/dialogs/".concat(e.id);return Object(g.jsxs)("div",{className:n.a.dialog,children:[Object(g.jsx)("img",{alt:"img-avatar",className:n.a.img,src:"https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"}),Object(g.jsx)(c.b,{className:n.a.link,to:s,children:"".concat(e.name)})]})},l=function(e){return Object(g.jsxs)("div",{className:n.a.message,children:[Object(g.jsx)("img",{alt:"msg-avatar",className:n.a.img,src:"https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg"}),e.message]})},d=a(9),m=a(90),r=a(131),j=a(20),b=a(42),u=Object(b.a)(10),_=Object(r.a)({form:"dialogAddMessageForm"})((function(e){return Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsx)(m.a,{validate:[b.b,u],name:"newMessageText",component:j.b,placeholder:"Enter your message"}),Object(g.jsx)("button",{className:n.a.btn,children:"Add Message"})]})})),p=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(g.jsx)(o,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return Object(g.jsx)(l,{message:e.message,id:e.id},e.id)}));return e.isAuth?Object(g.jsxs)("div",{className:n.a.dialogs,children:[Object(g.jsx)("div",{className:n.a.dialogItems,children:a}),Object(g.jsxs)("div",{className:n.a.messages,children:[i,Object(g.jsx)(_,{onSubmit:function(s){e.addMessage(s.newMessageText)}})]})]}):Object(g.jsx)(d.a,{to:"/login"})},x=a(13),O=a(99),f=a(11);s.default=Object(f.d)(Object(x.b)((function(e){return{dialogsPage:e.dialogsPage,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{addMessage:function(s){e(Object(i.a)(s))}}})),O.a)(p)}}]);
//# sourceMappingURL=4.51c3108d.chunk.js.map