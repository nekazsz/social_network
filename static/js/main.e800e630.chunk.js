(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{101:function(e,t,r){e.exports={avatar_wrapper:"Avatars_avatar_wrapper__2HPOC",user_block_wrapper:"Avatars_user_block_wrapper__2QcIg"}},106:function(e,t,r){e.exports={login_wr:"Login_login_wr__1gy8o",commonError:"Login_commonError__pJ8AN"}},107:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(4),a=r(0),s=(r(1),r(11)),c=r(10),o=function(e){return{isAuth:e.auth.isAuth}},i=function(e){return Object(s.b)(o)((function(t){return t.isAuth?Object(a.jsx)(e,Object(n.a)({},t)):Object(a.jsx)(c.a,{to:"/Login"})}))}},117:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return u}));var n=r(16),a=r(4),s="ADD-MESSAGE",c="SET-MESSAGES-PAGE-DATA",o={dialogsData:[],messagesData:[]},i=function(e){return{type:s,newMessageBody:e}},u=function(e){return{type:c,messagesPageData:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return t.newMessageBody&&t.newMessageBody.replace(/\s/g,"")?Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(n.a)(e.messagesData),[{id:4,message:t.newMessageBody}])}):e;case c:return Object(a.a)(Object(a.a)({},e),{},{dialogsData:[].concat(Object(n.a)(e.dialogsData),Object(n.a)(t.messagesPageData.dialogsData)),messagesData:[].concat(Object(n.a)(e.messagesData),Object(n.a)(t.messagesPageData.messagesData))});default:return e}}},14:function(e,t,r){e.exports={wrapper:"Users_wrapper__uwJtP",box_wrapper:"Users_box_wrapper__2MTuI",btnFollowed:"Users_btnFollowed__25tG8",btnUnFollow:"Users_btnUnFollow__1qyBa",img_wrapper:"Users_img_wrapper__23ttJ",span_wrapper:"Users_span_wrapper__2eHth",spanName:"Users_spanName__uU15Y",preloader_wr:"Users_preloader_wr__nTtet"}},146:function(e,t,r){e.exports={footer:"Footer_footer__1ydxU"}},147:function(e,t,r){e.exports={fetching:"Preloader_fetching___ZdYJ","search-fetching":"Preloader_search-fetching__2_mtZ"}},19:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(142),a=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"bb8e013c-9223-4dee-8a5a-b96156c04ec6"}}),s={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},c={getSub:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},deleteSub:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},o={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},setPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))}},i={me:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:r}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}}},22:function(e,t,r){e.exports={profileHeader_wrapper:"ProfileHeader_profileHeader_wrapper__2Ci9p",profileHeader_info:"ProfileHeader_profileHeader_info__Pram0",profileHeader_top_info:"ProfileHeader_profileHeader_top_info__12Mqb",lfj_title:"ProfileHeader_lfj_title__2RSaL",lfj_desc:"ProfileHeader_lfj_desc__hLn99",lfj_status:"ProfileHeader_lfj_status__1Px5N",inputStatus:"ProfileHeader_inputStatus__2rfMP",about_info_wr:"ProfileHeader_about_info_wr__1v6sm",contacts_wr:"ProfileHeader_contacts_wr__1xn6Y",img_wrapper:"ProfileHeader_img_wrapper__3qhMf",social_icons:"ProfileHeader_social_icons__UL_jA",preloader_wr:"ProfileHeader_preloader_wr__1lvs7"}},25:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"f",(function(){return f})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return g})),r.d(t,"g",(function(){return O})),r.d(t,"e",(function(){return x}));var n=r(12),a=r.n(n),s=r(23),c=r(16),o=r(4),i=r(19),u="ADD_POST",l="SET_POST_DATA",p="SET_USER_PROFILE",j="SET_STATUS",d="SET_PHOTO",b={postData:[],profile:null,status:""},h=function(e){return{type:u,newPostMessage:e}},f=function(e){return{type:l,postDataItem:e}},m=function(e){return{type:j,status:e}},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:n=t.sent,r({type:p,profile:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getStatus(e);case 2:n=t.sent,r(m(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.updateStatus(e);case 2:0===t.sent.resultCode&&r(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.setPhoto(e);case 2:0===(n=t.sent).resultCode&&r((a=n.data.photos,{type:d,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.newPostMessage&&t.newPostMessage.replace(/\s/g,"")?Object(o.a)(Object(o.a)({},e),{},{postData:[].concat(Object(c.a)(e.postData),[{id:3,userImg:"https://www.meme-arsenal.com/memes/53336f6e6ad81d19f0d6196424f53e08.jpg",name:"\u0412\u0430\u0441\u044e\u043d\u044c",message:t.newPostMessage,likeCount:0}])}):e;case l:return Object(o.a)(Object(o.a)({},e),{},{postData:[].concat(Object(c.a)(e.postData),Object(c.a)(t.postDataItem))});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case j:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case d:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},258:function(e,t,r){},259:function(e,t,r){},30:function(e,t,r){e.exports={main_wr:"MyPosts_main_wr__2V-lp",post_wr:"MyPosts_post_wr__12GJC",post_box_wr:"MyPosts_post_box_wr__LQO3o",post_img_wr:"MyPosts_post_img_wr__A0GAn",post_description_wr:"MyPosts_post_description_wr__2cuZ4",post_message_wr:"MyPosts_post_message_wr__2HwsI",post_likeMessage:"MyPosts_post_likeMessage__1QIBh",post_likeCount:"MyPosts_post_likeCount__j-EeN"}},303:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(9),s=r(25),c=r(117),o=r(16),i=r(4),u="SET_SIDEBAR_DATA",l={avatarsData:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{avatarsData:[].concat(Object(o.a)(e.avatarsData),Object(o.a)(t.sideBarAvatars))});default:return e}},j=r(12),d=r.n(j),b=r(23),h=r(19),f="TOGGLE_FOLLOW",m="SET_USERS",_="SET_CURRENT_PAGE",g="SET_TOTAL_COUNT",O="TOGGLE_IS_FETCHING",x="TOGGLE_IS_FOLLOWING_PROGRESS",w={users:[],totalUsersCount:0,pageSize:25,currentPage:1,isFetching:!1,isFollowingProgress:[]},v=function(e){return{type:f,userId:e}},P=function(e){return{type:_,currentPage:e}},F=function(e){return{type:O,isFetching:e}},y=function(e,t){return{type:x,isFollowing:e,userId:t}},N=function(){var e=Object(b.a)(d.a.mark((function e(t,r,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y(!0,r)),e.next=3,n;case 3:0===e.sent.resultCode&&(t(v(r)),t(y(!1,r)));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId&&e.followed?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e.id!==t.userId||e.followed?e:Object(i.a)(Object(i.a)({},e),{},{followed:!0})}))});case m:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case _:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case g:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalCount});case O:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case x:return Object(i.a)(Object(i.a)({},e),{},{isFollowingProgress:t.isFollowing?[].concat(Object(o.a)(e.isFollowingProgress),[t.userId]):e.isFollowingProgress.filter((function(e){return e!==t.userId}))});default:return e}},I=r(52),T="SET_USER_DATA",S={id:null,email:null,login:null,isAuth:!1},C=function(e,t,r,n){return{type:T,payload:{id:e,email:t,login:r,isAuth:n}}},k=function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){var r,n,a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.me();case 2:0===(r=e.sent).resultCode&&(n=r.data,a=n.id,s=n.email,c=n.login,t(C(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}},M="INITIALIZED_SUCCESS",D={initialized:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(i.a)(Object(i.a)({},e),{},{initialized:!0});default:return e}},X=r(143),H=r(141),z=Object(a.c)({profilePage:s.b,messagesPage:c.b,usersPage:A,sideBar:p,auth:U,app:E,form:H.a}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,G=Object(a.e)(z,B(Object(a.a)(X.a)));window.store=G;var R=G,L=r(1),W=r.n(L),Q=r(75),J=r.n(Q),V=(r(258),r(37)),q=r(38),K=r(40),Z=r(39),Y=(r(259),r(13)),$=r(31),ee=r.n($),te=r(101),re=r.n(te),ne=r(81),ae=r.n(ne),se=function(e){return Object(n.jsxs)("div",{className:ae.a.wrapper,children:[Object(n.jsx)("div",{className:ae.a.user_img_wr,children:Object(n.jsx)("img",{src:e.userImg,alt:"avatar"})}),Object(n.jsx)("div",{className:ae.a.user_name,children:e.userName})]})},ce=function(e){e.stateAvatarsData.length||e.setSideBarData([{id:0,userImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU",userName:"Andy"},{id:1,userImg:"https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg",userName:"Panda"},{id:2,userImg:"https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg",userName:"Dasha"}]);var t=e.stateAvatarsData.map((function(e){return Object(n.jsx)(se,{userImg:e.userImg,userName:e.userName},e.id)}));return Object(n.jsxs)("div",{className:re.a.avatar_wrapper,children:[Object(n.jsx)("span",{children:"My Friends"}),Object(n.jsx)("div",{className:re.a.user_block_wrapper,children:t})]})},oe=r(11),ie=Object(oe.b)((function(e){return{stateAvatarsData:e.sideBar.avatarsData}}),(function(e){return{setSideBarData:function(t){e(function(e){return{type:u,sideBarAvatars:e}}(t))}}}))(ce),ue=function(){return Object(n.jsx)("aside",{className:ee.a.aside,children:Object(n.jsxs)("div",{className:ee.a.nav_wrapper,children:[Object(n.jsxs)("ul",{className:ee.a.nav,children:[Object(n.jsx)("li",{children:Object(n.jsx)(Y.b,{to:"/profile",activeClassName:ee.a.active,children:"My page"})}),Object(n.jsx)("li",{children:Object(n.jsx)(Y.b,{to:"/myMessages",activeClassName:ee.a.active,children:"My messages"})}),Object(n.jsx)("li",{children:Object(n.jsx)(Y.b,{to:"/myMusic",activeClassName:ee.a.active,children:"My Music"})}),Object(n.jsx)("li",{children:Object(n.jsx)(Y.b,{to:"/notifications",activeClassName:ee.a.active,children:"My notifications"})}),Object(n.jsx)("li",{children:Object(n.jsx)(Y.b,{to:"/findUsers",activeClassName:ee.a.active,children:"Find Users"})}),Object(n.jsx)("li",{children:Object(n.jsx)(Y.b,{to:"/mySettings",activeClassName:ee.a.active,children:"My settings"})})]}),Object(n.jsx)(ie,{})]})})},le=r(146),pe=r.n(le),je=function(){return Object(n.jsx)("footer",{className:pe.a.footer,children:Object(n.jsx)("p",{children:"made by Alex"})})},de=r(79),be=r.n(de),he=r(10),fe=r(14),me=r.n(fe),_e=r(147),ge=r.n(_e),Oe=function(){return Object(n.jsx)("div",{className:ge.a.fetching})},xe=r(65),we=r(33),ve=r.n(we),Pe=function(e){for(var t=e.totalUsersCount,r=e.pageSize,a=e.currentPage,s=e.onPageChanged,c=e.portionSize,o=void 0===c?10:c,i=[],u=Math.ceil(t/r),l=1;l<=u;l++)i.push(l);var p=Math.ceil(u/o),j=Object(L.useState)(1),d=Object(xe.a)(j,2),b=d[0],h=d[1],f=(b-1)*o+1,m=b*o;return Object(n.jsxs)("div",{className:ve.a.paginationWrapper,children:[b>5&&Object(n.jsx)("button",{className:ve.a.prevNextBtn,onClick:function(){h(b-5)},children:"More Prev"}),b>1&&Object(n.jsx)("button",{className:ve.a.prevNextBtn,onClick:function(){h(b-1)},children:"Prev"}),Object(n.jsx)("div",{className:ve.a.numbersBox,children:i.filter((function(e){return e>=f&&e<=m})).map((function(e,t){return Object(n.jsx)("span",{className:"".concat(ve.a.pg_number," ").concat(a===e&&ve.a.pg_number_active),onClick:function(){s(e)},children:e},t)}))}),p>b&&Object(n.jsx)("button",{className:ve.a.prevNextBtn,onClick:function(){h(b+1)},children:"Next"}),b<p-5&&Object(n.jsx)("button",{className:ve.a.prevNextBtn,onClick:function(){h(b+5)},children:"More Next"})]})},Fe="data:image/png;base64,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",ye={imgAvatarNotFound:Fe,imgProfileNotFound:Fe},Ne=function(e){return e.users.map((function(t){return Object(n.jsxs)("div",{className:me.a.wrapper,children:[Object(n.jsxs)("div",{className:me.a.box_wrapper,children:[Object(n.jsx)(Y.b,{to:"/profile/"+t.id,children:Object(n.jsx)("div",{className:me.a.img_wrapper,children:Object(n.jsx)("img",{src:t.photos.small?t.photos.small:ye.imgAvatarNotFound,alt:"avatar"})})}),Object(n.jsx)("div",{children:e.isAuth?t.followed?Object(n.jsx)("button",{disabled:e.isFollowingProgress.some((function(e){return e===t.id})),onClick:function(){return e.unFollowAccept(t.id)},className:"".concat(me.a.btnFollowed," ").concat(t.followed?me.a.btnUnFollow:""),children:"unfollow"}):Object(n.jsx)("button",{disabled:e.isFollowingProgress.some((function(e){return e===t.id})),onClick:function(){return e.followAccept(t.id)},className:"".concat(me.a.btnFollowed," ").concat(t.followed?me.a.btnUnFollow:""),children:"follow"}):""})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{className:me.a.span_wrapper,children:["name: ",Object(n.jsx)("span",{className:me.a.spanName,children:t.name})]}),Object(n.jsxs)("span",{className:me.a.span_wrapper,children:["country: ",Object(n.jsx)("span",{className:me.a.spanName,children:"user.location.country"})]}),Object(n.jsxs)("span",{className:me.a.span_wrapper,children:["city: ",Object(n.jsx)("span",{className:me.a.spanName,children:"user.location.city"})]}),Object(n.jsxs)("span",{className:me.a.span_wrapper,children:["status: ",Object(n.jsx)("span",{className:me.a.spanName,children:t.status})]})]})]},t.id)}))},Ae=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(Pe,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),Object(n.jsx)("div",{children:!1===e.isFetching?Object(n.jsx)(Ne,{users:e.users,followAccept:e.followAccept,unFollowAccept:e.unFollowAccept,isFollowingProgress:e.isFollowingProgress,followed:e.followed,isAuth:e.isAuth}):Object(n.jsx)("div",{className:me.a.preloader_wr,children:Object(n.jsx)(Oe,{})})})]})},Ie=r(148),Te=Object(Ie.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Se=function(e){return e.usersPage.totalUsersCount},Ce=function(e){return e.usersPage.currentPage},ke=function(e){return e.usersPage.pageSize},Ue=function(e){return e.usersPage.isFetching},Me=function(e){return e.usersPage.isFollowingProgress},De=function(e){return e.auth.isAuth},Ee=function(e){Object(K.a)(r,e);var t=Object(Z.a)(r);function r(){var e;Object(V.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(q.a)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(Ae,Object(i.a)(Object(i.a)({},this.props),{},{onPageChanged:this.onPageChanged}))})}}]),r}(W.a.Component),Xe=Object(oe.b)((function(e){return{users:Te(e),totalUsersCount:Se(e),currentPage:Ce(e),pageSize:ke(e),isFetching:Ue(e),isFollowingProgress:Me(e),isAuth:De(e)}}),{followAccept:function(e){return function(t){N(t,e,h.b.getSub(e))}},unFollowAccept:function(e){return function(t){N(t,e,h.b.deleteSub(e))}},getUsers:function(e,t){return function(){var r=Object(b.a)(d.a.mark((function r(n){var a;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(F(!0)),n(P(e)),r.next=4,h.d.getUsers(e,t);case 4:a=r.sent,n(F(!1)),n((c=a.items,{type:m,users:c})),n((s=a.totalCount,{type:g,totalCount:s}));case 8:case"end":return r.stop()}var s,c}),r)})));return function(e){return r.apply(this,arguments)}}()}})(Ee),He=r(62),ze=r.n(He),Be=r(30),Ge=r.n(Be),Re=r(63),Le=r(27),We=function(e){return Object(n.jsxs)("div",{className:Ge.a.post_wr,children:[Object(n.jsxs)("div",{className:Ge.a.post_box_wr,children:[Object(n.jsx)("div",{className:Ge.a.post_img_wr,children:Object(n.jsx)("img",{src:e.userImg,alt:"avatar"})}),Object(n.jsx)("span",{children:e.name})]}),Object(n.jsxs)("div",{className:Ge.a.post_description_wr,children:[Object(n.jsx)("div",{className:Ge.a.post_message_wr,children:Object(n.jsx)("p",{children:e.message})}),Object(n.jsx)("div",{children:Object(n.jsxs)("span",{className:Ge.a.post_likeMessage,children:[Object(n.jsx)(Le.a,{icon:Re.b}),Object(n.jsx)("span",{className:Ge.a.post_likeCount,children:" "+e.likeCount})]})})]})]})},Qe=r(139),Je=r(140),Ve=r(56),qe=r(76),Ke=Object(Ve.a)(5),Ze=Object(qe.a)("textarea"),Ye=Object(Je.a)({form:"addPostMessageForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)(Qe.a,{component:Ze,name:"newPostMessage",validate:[Ke],placeholder:"write a message"}),Object(n.jsx)("button",{children:"Add post"})]})})),$e=function(e){e.stateProfilePage.postData.length||e.setPostData([{id:0,userImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU",name:"Andy",message:"Hi, how are you?",likeCount:15},{id:1,userImg:"https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg",name:"Panda",message:"It's my first post",likeCount:34}]);var t=e.stateProfilePage.postData.map((function(e){return Object(n.jsx)(We,{userImg:e.userImg,name:e.name,likeCount:e.likeCount,message:e.message},e.id)}));return Object(n.jsxs)("div",{className:Ge.a.main_wr,children:[Object(n.jsx)("h3",{children:"My Post"}),Object(n.jsx)(Ye,{onSubmit:function(t){e.addPost(t.newPostMessage)}}),t]})},et=Object(oe.b)((function(e){return{stateProfilePage:e.profilePage}}),{setPostData:s.f,addPost:s.a})($e),tt=r(22),rt=r.n(tt),nt=r(45),at=function(e){var t=Object(L.useState)(!1),r=Object(xe.a)(t,2),a=r[0],s=r[1],c=Object(L.useState)(e.status),o=Object(xe.a)(c,2),i=o[0],u=o[1];Object(L.useEffect)((function(){u(e.status)}),[e.status]);return Object(n.jsx)(n.Fragment,{children:a?Object(n.jsx)("input",{autoFocus:!0,onFocus:function(e){e.target.select()},onBlur:function(){s(!1),e.updateUserStatus(i)},onChange:function(e){u(e.target.value)},className:rt.a.inputStatus,value:i}):Object(n.jsx)("span",{onDoubleClick:function(){s(!0)},className:rt.a.lfj_status,children:e.status})})},st=function(e){return Object(n.jsxs)("div",{className:rt.a.profileHeader_wrapper,children:[Object(n.jsx)("div",{className:rt.a.img_wrapper,children:Object(n.jsx)("img",{src:e.profile.photos.large?e.profile.photos.large:ye.imgProfileNotFound,alt:"avatar"})}),Object(n.jsxs)("div",{className:rt.a.profileHeader_info,children:[Object(n.jsxs)("div",{className:rt.a.profileHeader_top_info,children:[Object(n.jsx)("h1",{children:e.profile.fullName}),Object(n.jsx)(at,{status:e.status,updateUserStatus:e.updateUserStatus}),Object(n.jsxs)("span",{className:rt.a.lfj_title,children:["Looking for a job: ",Object(n.jsx)("span",{children:e.profile.lookingForAJob?"yes":"no"})]}),Object(n.jsxs)("span",{className:rt.a.lfj_desc,children:["Job description: ",Object(n.jsx)("span",{children:e.profile.lookingForAJobDescription})]})]}),Object(n.jsxs)("div",{className:rt.a.about_info_wr,children:[Object(n.jsx)("h5",{children:"About Me: "}),Object(n.jsx)("p",{children:e.profile.aboutMe?e.profile.aboutMe:"this user did not leave a message about himself"}),Object(n.jsx)("h5",{className:rt.a.contacts_wr,children:"Contacts:"}),Object(n.jsxs)("ul",{className:rt.a.social_icons,children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",title:"GitHub",href:e.profile.contacts.github?e.profile.contacts.github:"https://twitter.com",children:Object(n.jsx)(Le.a,{icon:nt.b})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",title:"Facebook",href:e.profile.contacts.facebook?e.profile.contacts.facebook:"https://facebook.com",children:Object(n.jsx)(Le.a,{icon:nt.a})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",title:"Instagram",href:e.profile.contacts.instagram?e.profile.contacts.instagram:"https://instagram.com",children:Object(n.jsx)(Le.a,{icon:nt.c})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",title:"Vkontakte",href:e.profile.contacts.vk?e.profile.contacts.vk:"https://vk.com",children:Object(n.jsx)(Le.a,{icon:nt.e})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",title:"Youtube",href:e.profile.contacts.youtube?e.profile.contacts.youtube:"https://youtube.com",children:Object(n.jsx)(Le.a,{icon:nt.f})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",title:"Twitter",href:e.profile.contacts.twitter?e.profile.contacts.twitter:"https://twitter.com",children:Object(n.jsx)(Le.a,{icon:nt.d})})}),e.profile.contacts.website?Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",title:"Website",href:e.profile.contacts.website,children:Object(n.jsx)(Le.a,{icon:Re.a})})}):null,e.profile.contacts.mainLink?Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",title:"Mainlink",href:e.profile.contacts.mainLink,children:Object(n.jsx)(Le.a,{icon:Re.a})})}):null]})]})]})]})},ct=function(e){return Object(n.jsxs)("div",{className:ze.a.wrapper,children:[Object(n.jsx)(st,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(n.jsx)(et,{})]})},ot=r(107),it=function(e){Object(K.a)(r,e);var t=Object(Z.a)(r);function r(){return Object(V.a)(this,r),t.apply(this,arguments)}return Object(q.a)(r,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,r){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return this.props.profile?Object(n.jsx)("div",{className:ze.a.wrapper,children:Object(n.jsx)(ct,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile,updateuserStatus:this.props.updateUserStatus}))}):Object(n.jsx)("div",{className:ze.a.preloader_wr,children:Object(n.jsx)(Oe,{})})}}]),r}(W.a.Component),ut=Object(a.d)(Object(oe.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:s.c,getUserStatus:s.d,updateUserStatus:s.g}),he.f,ot.a)(it),lt=r(106),pt=r.n(lt),jt=Object(qe.a)("input"),dt=Object(Je.a)({form:"login"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[e.error&&Object(n.jsx)("span",{className:pt.a.commonError,children:e.error}),Object(n.jsx)("div",{children:Object(n.jsx)(Qe.a,{name:"email",placeholder:"email",component:jt,validate:[Ve.b]})}),Object(n.jsx)("div",{children:Object(n.jsx)(Qe.a,{name:"password",placeholder:"password",type:"password",component:jt,validate:[Ve.b]})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(Qe.a,{name:"rememberMe",component:jt,type:"checkbox"})," remember me"]}),Object(n.jsx)("button",{children:"Login"})]})})),bt=Object(oe.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,r){return function(){var n=Object(b.a)(d.a.mark((function n(a){var s,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.login(e,t,r);case 2:0===(s=n.sent).resultCode?a(k()):(c=s.messages?s.messages[0]:"Some error",a(Object(I.a)("login",{_error:c})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(n.jsx)(he.a,{to:"/profile"}):Object(n.jsxs)("div",{className:pt.a.login_wr,children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsx)(dt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),ht=function(e){return function(t){return Object(n.jsx)(W.a.Suspense,{fallback:Object(n.jsx)("div",{className:be.a.preloader_wr,children:Object(n.jsx)(Oe,{})}),children:Object(n.jsx)(e,Object(i.a)({},t))})}},ft=W.a.lazy((function(){return r.e(6).then(r.bind(null,309))})),mt=W.a.lazy((function(){return r.e(4).then(r.bind(null,306))})),_t=W.a.lazy((function(){return r.e(3).then(r.bind(null,310))})),gt=W.a.lazy((function(){return r.e(5).then(r.bind(null,311))})),Ot=function(){return Object(n.jsxs)("div",{className:be.a.mainPage,children:[Object(n.jsx)(he.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(ut,{})}}),Object(n.jsx)(he.b,{path:"/myMessages",render:ht(gt)}),Object(n.jsx)(he.b,{path:"/myMusic",render:ht(mt)}),Object(n.jsx)(he.b,{path:"/notifications",render:ht(_t)}),Object(n.jsx)(he.b,{path:"/findUsers",render:function(){return Object(n.jsx)(Xe,{})}}),Object(n.jsx)(he.b,{path:"/mySettings",render:ht(ft)}),Object(n.jsx)(he.b,{path:"/login",render:function(){return Object(n.jsx)(bt,{})}})]})},xt=r(32),wt=r.n(xt),vt=function(e){return Object(n.jsxs)("header",{className:wt.a.header,children:[Object(n.jsx)("div",{className:wt.a.logo_wr,children:"logo"}),Object(n.jsx)("div",{className:wt.a.login_block_wr,children:e.isAuth?Object(n.jsxs)("div",{className:wt.a.logoutWrapper,children:[Object(n.jsx)("button",{className:e.isAuth?wt.a.login_text_login:wt.a.login_text,onClick:e.logout,children:"logout"}),Object(n.jsx)("div",{className:wt.a.img_wrapper,children:Object(n.jsx)(Y.b,{to:"/profile",children:Object(n.jsx)("img",{src:ye.imgAvatarNotFound,alt:"avatar"})})})]}):Object(n.jsx)(Y.b,{to:"/Login",className:e.isAuth?wt.a.login_text_login:wt.a.login_text,children:"login"})})]})},Pt=function(e){Object(K.a)(r,e);var t=Object(Z.a)(r);function r(){return Object(V.a)(this,r),t.apply(this,arguments)}return Object(q.a)(r,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(vt,Object(i.a)({},this.props))})}}]),r}(W.a.Component),Ft=Object(oe.b)((function(e){return{isAuth:e.auth.isAuth}}),{logout:function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.logout();case 2:0===e.sent.resultCode&&t(C(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getUserProfile:s.c})(Pt),yt=function(e){Object(K.a)(r,e);var t=Object(Z.a)(r);function r(){return Object(V.a)(this,r),t.apply(this,arguments)}return Object(q.a)(r,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.initialized?Object(n.jsxs)("div",{className:"App-wrapper",children:[Object(n.jsx)(Ft,{}),Object(n.jsxs)("main",{className:"main",children:[Object(n.jsx)(ue,{}),Object(n.jsx)(Ot,{})]}),Object(n.jsx)(je,{})]}):Object(n.jsx)("div",{className:"preloader_background",children:Object(n.jsx)("div",{className:"preloader_wr",children:Object(n.jsx)(Oe,{})})})}}]),r}(W.a.Component),Nt=Object(a.d)(Object(oe.b)((function(e){return{initialized:e.app.initialized}}),{initialize:function(){return function(e){var t=e(k());Promise.all([t]).then((function(){e({type:M})}))}}})(yt));J.a.render(Object(n.jsx)(Y.a,{basename:"/social_network",children:Object(n.jsx)(oe.a,{store:R,children:Object(n.jsx)(Nt,{})})}),document.getElementById("root"))},31:function(e,t,r){e.exports={aside:"Aside_aside__2gmEt",nav_wrapper:"Aside_nav_wrapper__2ftlI",nav:"Aside_nav__11Jk8",active:"Aside_active__1keT7"}},32:function(e,t,r){e.exports={header:"Header_header__1Apqq",logo_wr:"Header_logo_wr__HEEp4",login_block_wr:"Header_login_block_wr__3aGvB",login_text:"Header_login_text__1tqQQ",login_text_login:"Header_login_text_login__2jq9h",logoutWrapper:"Header_logoutWrapper__1jLUu",img_wrapper:"Header_img_wrapper__BS8Pg"}},33:function(e,t,r){e.exports={paginationWrapper:"Pagination_paginationWrapper__36kjF",pg_number:"Pagination_pg_number__2vBen",pg_number_active:"Pagination_pg_number_active__3trNr",numbersBox:"Pagination_numbersBox__2fF5s",prevNextBtn:"Pagination_prevNextBtn__3qlYj"}},56:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},62:function(e,t,r){e.exports={wrapper:"Profile_wrapper__39Yqm",preloader_wr:"Profile_preloader_wr__1rymi"}},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),a=r(4),s=r(149),c=(r(1),r(82)),o=r.n(c),i=function(e){return function(t){var r=t.input,c=t.meta,i=Object(s.a)(t,["input","meta"]),u=c.touched&&c.error;return Object(n.jsxs)("div",{className:"".concat(o.a.formControl," ").concat(u&&o.a.error),children:[u&&Object(n.jsx)("span",{className:o.a.errorMessage,children:c.error}),Object(n.jsx)(e,Object(a.a)(Object(a.a)({},r),i))]})}}},79:function(e,t,r){e.exports={mainPage:"MainPage_mainPage__nhouX",preloader_wr:"MainPage_preloader_wr__2jR3o"}},81:function(e,t,r){e.exports={wrapper:"AvatarItem_wrapper__5pbqS",user_img_wr:"AvatarItem_user_img_wr__TIhsG",user_name:"AvatarItem_user_name__1_dQL"}},82:function(e,t,r){e.exports={formControl:"FormControls_formControl__3w5qX",error:"FormControls_error__IYOT1",errorMessage:"FormControls_errorMessage__1Ft9t"}}},[[303,1,2]]]);
//# sourceMappingURL=main.e800e630.chunk.js.map