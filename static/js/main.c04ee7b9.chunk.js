(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{38:function(e){e.exports=JSON.parse('{"a":[{"id":"1","name":"Alice Freeman","dialog":[{"isAnswer":true,"text":"You are the worst!","time":"6/12/17 03:00 PM"}],"picture":"assets/images/alice.png"},{"id":"2","name":"Josefina","dialog":[{"isAnswer":true,"text":"Quickly come to the meeting room 1B, we have a big server issue.","time":"4/22/17 04:00 AM"},{"isAnswer":false,"text":"I\'m having breakfast right now, can\'t you wait for 10 minutes?","time":"4/22/17 04:05 AM"},{"isAnswer":true,"text":"We are losing money! Quick!","time":"4/22/17 04:10 AM"}],"picture":"assets/images/josefina.png"},{"id":"3","name":"Velazgquez","dialog":[{"isAnswer":true,"text":"Quickly come to the meeting room 1B, we have a big server issue","time":"3/18/17 10:00 AM"}],"picture":"assets/images/velazgquez.png"},{"id":"4","name":"Barrera","dialog":[{"isAnswer":true,"text":"You are the worst!","time":"2/18/17 11:00 AM"}],"picture":"assets/images/barrera.png"},{"id":"5","name":"Kind","dialog":[{"isAnswer":true,"text":"You are the best!","time":"2/18/17 11:05 AM"}],"picture":"assets/images/kind.png"}]}')},48:function(e,t,c){},55:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(31),r=c.n(s),i=(c(48),c(14)),o=c(25),A=c(33),l=c(12),u=c(13),g=c(38),j=localStorage.getItem("contacts"),m=g.a;null!==j&&(m=JSON.parse(j));var b=localStorage.getItem("chosenContact"),d=g.a[0];null!==b&&(d=JSON.parse(b));var h={contactsInfo:Object(u.a)(m),chosenContact:d,queryForSearch:"",answerFromChack:"",user:{email:null,token:null,id:null}},O=Object(A.b)({name:"contactInfo",initialState:h,reducers:{setcontactsInfo:function(e,t){return Object(l.a)(Object(l.a)({},e),{},{contactsInfo:t.payload})},setchosenContact:function(e,t){return Object(l.a)(Object(l.a)({},e),{},{chosenContact:t.payload})},setQueryForSearch:function(e,t){return Object(l.a)(Object(l.a)({},e),{},{queryForSearch:t.payload})},setAnswerFromChack:function(e,t){return Object(l.a)(Object(l.a)({},e),{},{answerFromChack:t.payload})},setUser:function(e,t){return Object(l.a)(Object(l.a)({},e),{},{user:t.payload})},removeUser:function(e){return Object(l.a)(Object(l.a)({},e),{},{user:{email:null,token:null,id:null}})}}}),f=function(e){return e.contactsInfo},C=function(e){return e.chosenContact},p=function(e){return e.queryForSearch},x=function(e){return e.user},v=O.actions,w=v.setcontactsInfo,B=v.setchosenContact,F=v.setQueryForSearch,Q=v.setAnswerFromChack,_=v.setUser,N=v.removeUser,I=O.reducer,H=Object(A.a)({reducer:I}),D=c(9),y=(c(55),c(8)),K=c(24),S=(c(58),c(4)),R=function(e){var t=e.title,c=e.textError,a=e.handlerClick,s=Object(n.useState)(""),r=Object(y.a)(s,2),i=r[0],o=r[1],A=Object(n.useState)(""),l=Object(y.a)(A,2),u=l[0],g=l[1],j=Object(n.useCallback)((function(e){o(e)}),[i]),m=Object(n.useCallback)((function(e){g(e)}),[u]);return Object(S.jsxs)("div",{className:"FormAuthRegister",children:[Object(S.jsx)("p",{className:"FormAuthRegister__textError",children:c}),Object(S.jsxs)("div",{className:"FormAuthRegister__input-groupe",children:[Object(S.jsx)("input",{type:"email",title:"enter email",className:"FormAuthRegister__input FormAuthRegister__input--email",placeholder:"enter email",size:30,value:i,onChange:function(e){return j(e.target.value)}}),Object(S.jsx)("input",{type:"password",title:"enter password",className:"FormAuthRegister__input FormAuthRegister__input--passw",placeholder:"enter password",size:30,value:u,onChange:function(e){return m(e.target.value)}})]}),Object(S.jsx)("button",{type:"button",className:"FormAuthRegister__button",onClick:function(){return a(i,u)},children:t})]})},k=(c(60),c.p+"static/media/google_icon.817fc47e.png"),E=function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),c=t[0],a=t[1],s=Object(i.b)(),r=Object(D.g)();return Object(S.jsxs)("div",{className:"LoginPage",children:[Object(S.jsx)("h1",{className:"LoginPage__title",children:"To launch Messenger please log in"}),Object(S.jsx)(R,{title:"sign in",textError:c,handlerClick:function(e,t){var c=Object(K.c)();Object(K.d)(c,e,t).then((function(e){var t=e.user;s(_({email:t.email,id:t.uid,token:t.refreshToken})),r("/messenger")})).catch((function(e){if(!e.message.includes("auth"))throw e;a("Please enter the correct email and password")}))}}),Object(S.jsxs)("button",{type:"button",className:"LoginPage__button",onClick:function(){var e=new K.a,t=Object(K.c)();Object(K.e)(t,e).then((function(e){var t=e.user;s(_({email:t.email,id:t.uid,token:t.refreshToken})),r("/messenger")})).catch((function(e){if(!e.message.includes("auth"))throw e;a("Something went wrong. Try again.")}))},children:[Object(S.jsx)("img",{src:k,alt:"google icon",className:"LoginPage__google"}),"Login with google"]}),Object(S.jsx)(o.b,{to:"/register",className:"LoginPage__link",children:"or sign up"})]})},J=(c(61),c(23)),M=c.n(J),V=(c(63),function(e){var t=e.imageFace;return Object(S.jsxs)("div",{className:"PhotoCheck",children:[Object(S.jsx)("div",{className:"PhotoCheck__icon"}),Object(S.jsx)("div",{className:"PhotoCheck__photo",children:Object(S.jsx)("img",{src:t,alt:"face of contact",className:"PhotoCheck__image"})})]})}),U=(c(64),function(e){var t=e.photoOf\u0421ompanion,c=e.textCompanion,n=e.dateCompanion;return Object(S.jsxs)("div",{className:"AnswerFrom",children:[Object(S.jsxs)("div",{className:"AnswerFrom__firstLine",children:[Object(S.jsx)(V,{imageFace:t}),Object(S.jsx)("div",{className:"AnswerFrom__text-container",children:Object(S.jsx)("p",{className:"AnswerFrom__text",children:c})})]}),Object(S.jsx)("p",{className:"AnswerFrom__date",children:M()("".concat(n),"M/DD/YY HH:mm:ss A").format("M/DD/YY HH:mm A")})]})}),L=(c(65),function(e){var t=e.myText,c=e.myTime;return Object(S.jsxs)("div",{className:"MyReply",children:[Object(S.jsx)("div",{className:"MyReply__text-container",children:Object(S.jsx)("p",{className:"MyReply__text",children:t})}),Object(S.jsx)("p",{className:"MyReply__time",children:M()("".concat(c),"M/DD/YY HH:mm:ss A").format("M/DD/YY HH:mm A")})]})}),q=(c(66),function(){var e=Object(i.c)(C),t=Object(n.useState)(e),c=Object(y.a)(t,2),a=c[0],s=c[1],r=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e;null===(e=r.current)||void 0===e||e.scrollIntoView()}),[e,a]),Object(n.useEffect)((function(){s(e)}),[e]),Object(S.jsx)("ul",{className:"Chat",children:a.dialog.map((function(t,c){return Object(S.jsxs)("li",{className:"Chat__item",ref:r,children:[t.isAnswer&&Object(S.jsx)(U,{"photoOf\u0421ompanion":e.picture,textCompanion:a.dialog[c].text,dateCompanion:a.dialog[c].time}),!t.isAnswer&&Object(S.jsx)(L,{myText:a.dialog[c].text,myTime:a.dialog[c].time})]},t.time)}))})}),P=(c(67),function(){var e=Object(i.c)(f),t=Object(i.c)(p),c=Object(n.useState)(e),a=Object(y.a)(c,2),s=a[0],r=a[1],o=Object(i.b)();Object(n.useEffect)((function(){var c=t,n=e.filter((function(e){return e.name.toUpperCase().includes(c.toUpperCase())}));r(n)}),[t,e]);var A=Object(n.useCallback)((function(t){var c=e.find((function(e){return+e.id===t}));c&&(o(B(c)),localStorage.setItem("chosenContact",JSON.stringify(c)))}),[e]);return Object(S.jsxs)("div",{className:"Contacts",children:[Object(S.jsx)("h1",{className:"Contacts__title",children:"Chats"}),Object(S.jsx)("ul",{className:"Contacts__list",children:s.map((function(e){return Object(S.jsx)("li",{className:"Contacts__item",children:Object(S.jsx)("a",{href:"#chatColumn",className:"Contacts__link",children:Object(S.jsxs)("button",{type:"button",className:"Contacts__button",onClick:function(){return A(+e.id)},children:[Object(S.jsx)(V,{imageFace:e.picture}),Object(S.jsxs)("div",{className:"Contacts__info",children:[Object(S.jsxs)("div",{className:"Contacts__name-text",children:[Object(S.jsx)("h3",{className:"Contacts__name",children:e.name}),Object(S.jsx)("div",{className:"Contacts__text-container",children:Object(S.jsx)("p",{className:"Contacts__text",children:e.dialog[e.dialog.length-1].text})})]}),Object(S.jsx)("p",{className:"Contacts__date",children:M()("".concat(e.dialog[e.dialog.length-1].time),"M/DD/YY HH:mm a").format("MMM DD, YYYY")})]})]})})},e.id)}))})]})}),Y=(c(68),function(){var e=Object(i.b)(),t=Object(n.useState)(""),c=Object(y.a)(t,2),a=c[0],s=c[1],r=Object(n.useCallback)((function(t){s(t.trim()),e(F(t.trim()))}),[a]),o=Object(n.useCallback)((function(){e(N())}),[]);return Object(S.jsxs)("div",{className:"MyInfo",children:[Object(S.jsxs)("div",{className:"MyInfo__container",children:[Object(S.jsx)(V,{imageFace:"assets/images/testimonial-ava-3.jpg"}),Object(S.jsx)("button",{type:"button",title:"log out",className:"MyInfo__button",onClick:o,children:Object(S.jsx)("img",{src:"data:image/png;base64,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",alt:"logout icon",className:"MyInfo__icon"})})]}),Object(S.jsxs)("label",{htmlFor:"search",className:"MyInfo__search-groupe",children:[Object(S.jsx)("input",{title:"find conact or chat",name:"search",type:"text",id:"search",className:"MyInfo__search",placeholder:"Search or start new chat",value:a,onChange:function(e){return r(e.target.value)}}),Object(S.jsx)("div",{className:"MyInfo__glass"})]})]})}),T=c(0),X=c.n(T),W=c(1),G=function(){var e=Object(W.a)(X.a.mark((function e(){var t,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.chucknorris.io/jokes/random"),{method:"GET"});case 2:return t=e.sent,e.next=5,t.json().catch((function(e){throw Error("".concat(e))}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=(c(69),function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(y.a)(s,2),o=r[0],A=r[1],g=Object(i.c)(f),j=Object(i.c)(C),m=Object(i.b)(),b=Object(n.useCallback)((function(e){a(e)}),[c]),d=Object(n.useCallback)((function(e,t){var c=Object(u.a)(g);setTimeout((function(){console.log(o);var n=Object(l.a)(Object(l.a)({},e),{},{dialog:[].concat(Object(u.a)(e.dialog),[{isAnswer:!0,text:t,time:M()().format("M/DD/YY HH:mm:ss A")}])}),a=[n].concat(Object(u.a)(c.filter((function(t){return e.id!==t.id}))));m(B(n)),m(w(a)),localStorage.setItem("contacts",JSON.stringify(a))}),1e4)}),[g,j,o]);function h(){return(h=Object(W.a)(X.a.mark((function e(t){var c,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:c=e.sent,n=Object(l.a)({},c),A(n.value),m(Q(n.value)),d(t,n.value);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=Object(n.useCallback)((function(e){e.preventDefault();var t=e.target[0].value,c=Object(l.a)({},j),n=Object(u.a)(g);if(t.trim().length>0){var s=Object(l.a)(Object(l.a)({},c),{},{dialog:[].concat(Object(u.a)(c.dialog),[{isAnswer:!1,text:t,time:M()().format("M/DD/YY HH:mm:ss A")}])});!function(e){h.apply(this,arguments)}(s);var r=[s].concat(Object(u.a)(n.filter((function(e){return c.id!==e.id}))));m(B(s)),m(w(r)),a(""),localStorage.setItem("contacts",JSON.stringify(r)),console.log(r)}}),[g,j]);return Object(S.jsx)("div",{className:"Sender",children:Object(S.jsxs)("form",{className:"Sender__form",onSubmit:function(e){return O(e)},children:[Object(S.jsx)("input",{title:"enter text of message",name:"sender",type:"text",className:"Sender__input",placeholder:"Type your message",value:c,onChange:function(e){return b(e.target.value)}}),Object(S.jsx)("button",{className:"Sender__button",title:"send message",type:"submit",children:Object(S.jsx)("div",{className:"Sender__icon"})})]})})}),Z=(c(70),function(){var e=Object(i.c)(C),t=Object(n.useState)(e),c=Object(y.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){s(e)}),[e]),Object(S.jsxs)("div",{className:"Subscriber",children:[Object(S.jsx)(V,{imageFace:a.picture}),Object(S.jsx)("h2",{className:"Subscriber__name",children:a.name})]})}),$=(c(71),c.p+"static/media/left_arrow.abe14890.png"),ee=function(){return Object(S.jsx)("div",{className:"ReturnContacts",children:Object(S.jsx)("a",{href:"#contactsColumn",className:"ReturnContacts__link",children:Object(S.jsx)("img",{src:$,alt:"return to contacts sign",className:"ReturnContacts__arrow"})})})};var te=function(){return function(){var e=Object(i.c)(x),t=e.email;return{isAuth:!!t,email:t,token:e.token,id:e.id}}().isAuth?Object(S.jsxs)("div",{className:"Messenger",children:[Object(S.jsxs)("div",{className:"Messenger__contact-groupe",id:"contactsColumn",children:[Object(S.jsx)(Y,{}),Object(S.jsx)(P,{})]}),Object(S.jsxs)("div",{className:"Messenger__chat-groupe",id:"chatColumn",children:[Object(S.jsx)(ee,{}),Object(S.jsx)(Z,{}),Object(S.jsx)(q,{}),Object(S.jsx)(z,{})]})]}):Object(S.jsx)(D.a,{to:"/"})};c(72);function ce(){return Object(S.jsx)("div",{className:"NotFound",children:"This page is not found"})}c(73);var ne=function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),c=t[0],a=t[1],s=Object(i.b)(),r=Object(D.g)();return Object(S.jsxs)("div",{className:"RegisterPage",children:[Object(S.jsx)("h1",{className:"RegisterPage__title",children:"Register"}),Object(S.jsx)(R,{title:"register",textError:c,handlerClick:function(e,t){var c=Object(K.c)();Object(K.b)(c,e,t).then((function(e){var t=e.user;s(_({email:t.email,id:t.uid,token:t.refreshToken})),r("/messenger")})).catch((function(e){if(e.message.includes("weak-password"))a("Password must have at least 6 characters");else{if(!e.message.includes("auth"))throw e;a("Please enter the correct email and password")}}))}}),Object(S.jsx)("p",{className:"RegisterPage__text",children:"Already have an account?"}),Object(S.jsx)(o.b,{to:"/",className:"RegisterPage__link",children:"Sign in"})]})},ae=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(D.d,{children:[Object(S.jsx)(D.b,{path:"/",element:Object(S.jsx)(E,{})}),Object(S.jsx)(D.b,{path:"/messenger",element:Object(S.jsx)(te,{})}),Object(S.jsx)(D.b,{path:"/register",element:Object(S.jsx)(ne,{})}),Object(S.jsx)(D.b,{path:"*",element:Object(S.jsx)(ce,{})})]})})},se=c(42);Object(se.a)({apiKey:"AIzaSyDV0sWS7g4-o0_Vyyl6jx6-uXhhcdvdAyQ",authDomain:"auth-messenger.firebaseapp.com",projectId:"auth-messenger",storageBucket:"auth-messenger.appspot.com",messagingSenderId:"402278382921",appId:"1:402278382921:web:b7619a5f7281fba06cae98"});r.a.render(Object(S.jsx)(i.a,{store:H,children:Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(o.a,{children:Object(S.jsx)(ae,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.c04ee7b9.chunk.js.map