(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Nav_nav__1frqQ",item:"Nav_item__3gHbA",link:"Nav_link__x92s1",active:"Nav_active__1HbmV",friends:"Nav_friends__2W7vw",section:"Nav_section__MAAt1",img:"Nav_img__32cyw",name:"Nav_name__3hX01",flex:"Nav_flex__2jg6w"}},127:function(e,t,n){"use strict";t.a=n.p+"static/media/defaultPhoto.95fd5d9f.jpg"},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(46),a=n(5),s="ADD-MESSAGE",c={messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Hey there"},{id:5,message:"Good morning!"}],dialogs:[{id:1,name:"Anka"},{id:2,name:"MicStuck"},{id:3,name:"Gabster"},{id:4,name:"Gussi"},{id:5,name:"Valera"}]},i=function(e){return{type:s,newMsgText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMsgText;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},132:function(e,t,n){"use strict";n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return _})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return P})),n.d(t,"f",(function(){return y}));var r=n(11),a=n.n(r),s=n(19),c=n(46),i=n(5),o=n(20),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l="FOLLOW",d="UNFOLLOW",j="SET_USERS",f="SET_CURRENT_PAGE",b="SET_TOTAL_COUNT",p="TOGGLE_IS_FETCHING",h="TOGGLE_IS_FOLLOWING_IN_PROGRESS",O={users:[],pageSize:10,totalCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(e){return{type:l,userId:e}},v=function(e){return{type:d,userId:e}},g=function(e){return{type:f,currentPage:e}},x=function(e){return{type:p,isFetching:e}},_=function(e,t){return{type:h,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(g(e)),n.next=4,o.c.getUsers(e,t);case 4:s=n.sent,r(x(!1)),r((c=s.items,{type:j,users:c})),r((a=s.totalCount,{type:b,count:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,o.c.follow(e);case 3:0===t.sent.data.resultCode&&n(m(e)),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,o.c.unfollow(e);case 3:0===t.sent.data.resultCode&&n(v(e)),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case j:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case f:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalCount:t.count});case p:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},135:function(e,t,n){e.exports={item:"Post_item__1rusK"}},166:function(e,t,n){},167:function(e,t,n){},20:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(27),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/"}),s={getUsers:function(e,t){return r.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(e,"&count=").concat(t),{withCredentials:!0,headers:{"API-KEY":"952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}}).then((function(e){return e.data}))},follow:function(e){return r.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(e),{},{withCredentials:!0,headers:{"API-KEY":"952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})},unfollow:function(e){return r.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(e),{withCredentials:!0,headers:{"API-KEY":"952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI oject"),c.getProfile(e)}},c={getProfile:function(e){return r.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(e),{withCredentials:!0,headers:{"API-KEY":"952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})},getStatus:function(e){return r.get("https://social-network.samuraijs.com/api/1.0/profile/status/".concat(e),{withCredentials:!0,headers:{"API-KEY":"952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})},updateStatus:function(e){return r.put("https://social-network.samuraijs.com/api/1.0/profile/status",{status:e},{withCredentials:!0,headers:{"API-KEY":"952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("https://social-network.samuraijs.com/api/1.0/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},i={authMe:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},26:function(e,t,n){e.exports={formControl:"FormControls_formControl__-cuSA",error:"FormControls_error__3uRii",formSummeryError:"FormControls_formSummeryError__1u3NZ"}},290:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(17),c=n(66),i=n.n(c),o=(n(166),n(37)),u=n(38),l=n(41),d=n(40),j=n(9),f=(n(167),n(5)),b=n(13),p=n(91),h=n.n(p),O=n(1),m=function(e){return Object(O.jsxs)("header",{className:h.a.header,children:[Object(O.jsx)("img",{alt:"img-header",src:"https://www.siggraph.org/wp-content/uploads/2012/12/org.flat_.logo_.400_0.jpg"}),Object(O.jsx)("div",{className:h.a.loginBlock,children:e.isAuth?Object(O.jsxs)("div",{children:[e.login," - ",Object(O.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(O.jsx)(s.b,{to:"/login",children:"Login"})})]})},v=n(11),g=n.n(v),x=n(19),_=n(20),w=n(47),P="SET_AUTH_USER_DATA",y={userId:null,login:null,email:null,isAuth:!1},k=function(e,t,n,r){return{type:P,payload:{userId:e,login:t,email:n,isAuth:r}}},S=function(){return function(){var e=Object(x.a)(g.a.mark((function e(t){var n,r,a,s,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(k(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(f.a)(Object(f.a)({},e),t.payload);default:return e}},N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)(m,Object(f.a)({},this.props))}}]),n}(a.a.Component),I=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.data.resultCode&&t(k(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(N),E=n(129),A=n(130),T=n(42),M=n(35),L=n(26),U=n.n(L),F=Object(A.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(O.jsxs)("form",{onSubmit:t,children:[Object(O.jsx)("div",{children:Object(O.jsx)(E.a,{placeholder:"Email",name:"email",component:T.a,validate:[M.b]})}),Object(O.jsx)("div",{children:Object(O.jsx)(E.a,{placeholder:"Password",name:"password",component:T.a,validate:[M.b],type:"password"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)(E.a,{type:"checkbox",name:"rememberMe",component:T.a,validate:[M.b]})," remember me"]}),n&&Object(O.jsx)("div",{className:U.a.formSummeryError,children:n}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"Log in"})})]})})),D=Object(b.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(x.a)(g.a.mark((function r(a){var s,c;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(S()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(w.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(O.jsx)(j.a,{to:"/profile"}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"LOGIN"}),Object(O.jsx)(F,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),G=function(e){return Object(O.jsx)("div",{children:"Music"})},H=n(12),B=n.n(H),z=function(e){return Object(O.jsxs)("nav",{className:B.a.nav,children:[Object(O.jsx)("div",{className:B.a.item,children:Object(O.jsx)(s.b,{className:B.a.link,to:"/profile",activeClassName:B.a.active,children:"Profile"})}),Object(O.jsx)("div",{className:B.a.item,children:Object(O.jsx)(s.b,{className:B.a.link,to:"/dialogs",activeClassName:B.a.active,children:"Messages"})}),Object(O.jsx)("div",{className:B.a.item,children:Object(O.jsx)(s.b,{className:B.a.link,to:"/users",activeClassName:B.a.active,children:"Users"})}),Object(O.jsx)("div",{className:B.a.item,children:Object(O.jsx)(s.b,{className:B.a.link,to:"/news",activeClassName:B.a.active,children:"News"})}),Object(O.jsx)("div",{className:B.a.item,children:Object(O.jsx)(s.b,{className:B.a.link,to:"/music",activeClassName:B.a.active,children:"Music"})}),Object(O.jsx)("div",{className:B.a.item,children:Object(O.jsx)(s.b,{className:B.a.link,to:"/settings",activeClassName:B.a.active,children:"Settings"})}),Object(O.jsx)("div",{className:B.a.item,children:Object(O.jsx)(s.b,{className:B.a.link,to:"/login",activeClassName:B.a.active,children:"Login"})})]})},R=function(e){return Object(O.jsx)("div",{children:"News"})},K=n(46),Y="ADD-POST",W="SET_USER_PROFILE",V="SET_STATUS",q="DELETE_POST",J="SAVE_PHOTO_SUCCESS",X={posts:[{id:1,message:"Hi! How are you?",likeCount:19},{id:2,message:"It's my first post",likeCount:30},{id:3,message:"Hey you!!",likeCount:30},{id:4,message:"Ain't no sunshine when she's gone",likeCount:30}],profile:null,status:""},Z=function(e){return{type:V,status:e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:var n={id:5,message:t.newPostText,likeCount:0};return Object(f.a)(Object(f.a)({},e),{},{posts:[n].concat(Object(K.a)(e.posts))});case V:return Object(f.a)(Object(f.a)({},e),{},{status:t.status});case W:return Object(f.a)(Object(f.a)({},e),{},{profile:t.profile});case q:return Object(f.a)(Object(f.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case J:return Object(f.a)(Object(f.a)({},e),{},{profile:Object(f.a)(Object(f.a)({},e.profile),{},{photos:t.photos})});default:return e}},$=n(96),ee=n.n($),te=n(135),ne=n.n(te),re=function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:ne.a.item,children:[Object(O.jsx)("img",{alt:"post-img",src:"https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg"}),e.message,Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:["  ","Likes: ".concat(e.likeCount," ")]})})]})})},ae=Object(M.a)(10),se=Object(A.a)({form:"newPostText"})((function(e){return Object(O.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(O.jsx)(E.a,{component:T.b,name:"newPostText",placeholder:"What's new?",validate:[M.b,ae]}),Object(O.jsx)("button",{className:ee.a.btn,children:"Add Post"})]})})),ce=function(e){var t=e.posts.map((function(e){return Object(O.jsx)(re,{id:e.id,message:e.message,likeCount:e.likeCount})}));return Object(O.jsxs)("div",{className:ee.a.postsBlock,children:[Object(O.jsx)("h3",{children:"My posts"}),Object(O.jsx)("div",{children:Object(O.jsx)(se,{onSubmit:function(t){e.addPost(t.newPostText)}})}),Object(O.jsx)("div",{children:t})]})},ie=Object(b.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:Y,newPostText:e}}(t))}}}))(ce),oe=n(53),ue=n(97),le=n.n(ue),de=n(127),je=n(88),fe=function(e){var t=Object(r.useState)(!1),n=Object(je.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(e.status),i=Object(je.a)(c,2),o=i[0],u=i[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(O.jsxs)("div",{children:[!a&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"----------"})}),a&&Object(O.jsx)("div",{children:Object(O.jsx)("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(o)},onChange:function(e){u(e.currentTarget.value)},value:o})})]})},be=function(e){if(!e.profile)return Object(O.jsx)(oe.a,{});return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:le.a.descriptionBlock,children:[Object(O.jsx)("img",{alt:"profile-avatar",className:le.a.ava,src:e.profile.photos.large||de.a}),e.isOwner&&Object(O.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),Object(O.jsx)(fe,{status:e.status,updateStatus:e.updateStatus})]})})},pe=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(be,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,id:e.id,isOwner:e.isOwner,savePhoto:e.savePhoto}),Object(O.jsx)(ie,{})]})},he=n(10),Oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(pe,Object(f.a)(Object(f.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))})}}]),n}(a.a.Component),me=Object(he.d)(j.f,Object(b.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(x.a)(g.a.mark((function t(n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:W,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(x.a)(g.a.mark((function t(n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.b.getStatus(e);case 2:r=t.sent,n(Z(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(x.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(Z(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(x.a)(g.a.mark((function t(n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:J,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Oe),ve=function(e){return Object(O.jsx)("div",{children:"Settings"})},ge="INITIALIZED_SUCCESS",xe={initialized:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(f.a)(Object(f.a)({},e),{},{initialized:!0});default:return e}},we=a.a.lazy((function(){return n.e(4).then(n.bind(null,295))})),Pe=a.a.lazy((function(){return n.e(3).then(n.bind(null,294))})),ye=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(I,{}),Object(O.jsx)(z,{}),Object(O.jsxs)("div",{className:"app-wrapper-content",children:[Object(O.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(O.jsx)(me,{})}}),Object(O.jsxs)(r.Suspense,{fallback:Object(O.jsx)("div",{children:Object(O.jsx)(oe.a,{})}),children:[Object(O.jsx)(j.b,{path:"/users",render:function(){return Object(O.jsx)(Pe,{})}}),Object(O.jsx)(j.b,{path:"/dialogs",render:function(){return Object(O.jsx)(we,{})}})]}),Object(O.jsx)(j.b,{path:"/news",render:function(){return Object(O.jsx)(R,{})}}),Object(O.jsx)(j.b,{path:"/music",render:function(){return Object(O.jsx)(G,{})}}),Object(O.jsx)(j.b,{path:"/settings",render:function(){return Object(O.jsx)(ve,{})}}),Object(O.jsx)(j.b,{path:"/login",render:function(){return Object(O.jsx)(D,{})}})]})]}):Object(O.jsx)(oe.a,{})}}]),n}(a.a.Component),ke=Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(S()).then((function(){return e({type:ge})}))}}})(ye),Se=n(128),Ce={navbar:[{id:1,name:"Anka"},{id:2,name:"MicStuck"},{id:3,name:"Gabster"}]},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;return e},Ie=n(132),Ee=n(136),Ae=n(131),Te=Object(he.c)({profilePage:Q,dialogsPage:Se.b,navbarElements:Ne,usersPage:Ie.a,auth:C,form:Ae.a,app:_e}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,Le=Object(he.e)(Te,Me(Object(he.a)(Ee.a)));window._store_=Le;var Ue=Le;i.a.render(Object(O.jsx)(s.a,{children:Object(O.jsx)(b.a,{store:Ue,children:Object(O.jsx)(ke,{})})}),document.getElementById("root"))},35:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Must be ".concat(e," characters or less")}}},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(5),a=n(89),s=(n(0),n(26)),c=n.n(s),i=n(1),o=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:o?"".concat(c.a.formControl," ").concat(c.a.error):c.a.formControl,children:[Object(i.jsx)("div",{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),s))}),Object(i.jsx)("div",{children:o&&Object(i.jsx)("span",{children:n.error})})]})},u=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:o?"".concat(c.a.formControl," ").concat(c.a.error):c.a.formControl,children:[Object(i.jsx)("div",{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),s))}),Object(i.jsx)("div",{children:o&&Object(i.jsx)("span",{children:n.error})})]})}},53:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loading.a5ca6740.gif",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:"loader"})})}},91:function(e,t,n){e.exports={header:"Header_header__3qD5S",loginBlock:"Header_loginBlock__3EthK",infoBlock:"Header_infoBlock__2VJYh"}},96:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__C9WR4",btn:"MyPosts_btn__38Lq4",item:"MyPosts_item__278bT"}},97:function(e,t,n){e.exports={img:"ProfileInfo_img__AhIfx",descriptionBlock:"ProfileInfo_descriptionBlock__1piW2",ava:"ProfileInfo_ava__24OA7"}}},[[290,1,2]]]);
//# sourceMappingURL=main.3d1fb35b.chunk.js.map