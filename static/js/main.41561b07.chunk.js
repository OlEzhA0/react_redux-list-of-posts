(this["webpackJsonpreact_redux-list-of-posts"]=this["webpackJsonpreact_redux-list-of-posts"]||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},32:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),u=n(4),s=n(21),l=(n(31),n(32),n(8)),i=function(e){return{type:"IS_LOADING",status:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOADING":return t.status;default:return e}},p=n(6),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return t.posts;case"DELETE_COMM":return e.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{comments:e.comments.filter((function(e){return e.id!==t.commId}))})}));case"DELETE_POST":return e.filter((function(e){return e.id!==t.postId}));default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOADED":return!0;default:return e}},E=Object(l.b)({loading:m,posts:d,loaded:f}),b=function(e){return e.loading},v=function(e){return e.posts},_=function(e){return e.loaded},O=Object(l.c)(E),y=function(){return r.a.createElement("div",{className:"Spinner__Container"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},h=n(12),g=n(9),j=n.n(g),N=n(15),w=function(){var e=Object(N.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_dynamic-list-of-posts/api/").concat(t,".json"));case 2:return n=e.sent,a=n.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(N.a)(j.a.mark((function e(){var t,n,a,r,c,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([w("posts"),w("users"),w("comments")]);case 2:return t=e.sent,n=Object(h.a)(t,3),a=n[0],r=n[1],c=n[2],o=a.map((function(e){var t=r.find((function(t){return t.id===e.userId})),n=c.filter((function(t){return t.postId===e.id}));return Object(p.a)(Object(p.a)({},e),{},{user:t,comments:n})})),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=e.getData,n=Object(u.c)(b);return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:t,disabled:n,className:"loading-button"},"Get posts"))},S=function(e){var t=e.startDebounce;return r.a.createElement("div",{className:"inputContainer"},r.a.createElement("input",{type:"text",className:"input",placeholder:"write a text for search",onChange:t}))},I=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],o=Object(u.c)(v),s=Object(u.b)(),l=function(e,t){var n;return function(){clearTimeout(n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];n=setTimeout.apply(void 0,[e,t].concat(r))}}((function(e){return c(e)}),1e3),i=Object(a.useMemo)((function(){return function(e,t){return t?e.filter((function(e){return(e.title.toLocaleLowerCase()+e.body.toLocaleLowerCase).replace(/s*/g," ").includes(t.toLocaleLowerCase().replace(/s*/g," "))})):e}(o,n)}),[o,n]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{startDebounce:function(e){l(e.target.value)}}),i.map((function(e){return r.a.createElement("div",{className:"post",key:e.id},r.a.createElement("button",{type:"button",className:"delete__post",onClick:function(){return s({type:"DELETE_POST",postId:e.id})}},"delete post"),r.a.createElement("p",{className:"post__title"},r.a.createElement("span",{className:"post__id"},e.id,"."),e.title),r.a.createElement("p",{className:"post__body"},e.body),e.comments.map((function(e){return r.a.createElement("div",{className:"post__comm",key:e.id},r.a.createElement("div",{className:"comm"},r.a.createElement("p",{className:"comm__name"},e.name),r.a.createElement("p",{className:"comm__email"},e.email),r.a.createElement("p",{className:"comm__body"},e.body),r.a.createElement("button",{className:"delete__comm",type:"button",onClick:function(){return s({type:"DELETE_COMM",commId:e.id})}},"delete")))})))})))},T=function(){var e=Object(u.c)(b),t=Object(u.c)(_),n=Object(u.b)();return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"Redux list of posts"),!t&&r.a.createElement(L,{getData:function(){n(i(!0)),D().then((function(e){n({type:"SET_POSTS",posts:e}),n({type:"IS_LOADED"})})).finally((function(){return n(i(!1))}))}}),e&&r.a.createElement(y,null),t&&r.a.createElement(I,null))},C=function(){return r.a.createElement(u.a,{store:O},r.a.createElement(s.a,null,r.a.createElement(T,null)))};o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.41561b07.chunk.js.map