(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],p=0,m=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"22f1":function(t,e,a){"use strict";var n=a("50d3"),r=a.n(n);e["default"]=r.a},2640:function(t,e,a){"use strict";var n=a("79da"),r=a.n(n);r.a},"271d":function(t,e,a){"use strict";var n=a("420b"),r=a.n(n);e["default"]=r.a},3724:function(t,e,a){t.exports={wrapper:"now-playing_wrapper_2z5c9",mainMenu:"now-playing_mainMenu_2iZGk"}},"3a20":function(t,e,a){t.exports={wrapper:"top-rated_wrapper_3btPQ",mainMenu:"top-rated_mainMenu_xzV11"}},"420b":function(t,e,a){t.exports={navItems:"Nav_navItems_121U1"}},"50d3":function(t,e,a){t.exports={header:"Header_header_3bMN6",logoWrapper:"Header_logoWrapper_2Bkqk",searchWrapper:"Header_searchWrapper_66xny"}},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"row",class:t.$style.header},[a("section",{staticClass:"col-md-2 col-sm-12 p-3 text-center",class:t.$style.logoWrapper},[a("font-awesome-icon",{attrs:{icon:"film"}}),a("h3",[t._v("FILMROLL")])],1),a("section",{staticClass:"col-md-10 col-sm-12 pl-4",class:t.$style.searchWrapper},[a("div",[a("font-awesome-icon",{attrs:{icon:"search"}}),a("input",{attrs:{type:"text",placeholder:"Search Movies..."},domProps:{value:t.getValue},on:{keyup:function(e){return t.updateSearch(e)}}})],1)])])},i=[],c=a("ad3d"),l={name:"Nav",components:{FontAwesomeIcon:c["a"]},computed:{getValue:function(){return this.$store.state.common.searchTerm}},methods:{updateSearch:function(t){this.$store.commit("updateSearch",t.target.value)}}},u=l,p=a("22f1"),m=a("2877");function d(t){this["$style"]=p["default"].locals||p["default"]}var f=Object(m["a"])(u,o,i,!1,d,null,null),g=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.$style.navItems},[a("ul",{staticClass:"d-md-block d-none mt-5"},[a("li",[a("router-link",{attrs:{to:"/now-playing"}},[t._v("Now Playing "),a("font-awesome-icon",{attrs:{icon:"long-arrow-alt-right"}})],1)],1),a("li",[a("router-link",{attrs:{to:"/popular"}},[t._v("Popular "),a("font-awesome-icon",{attrs:{icon:"long-arrow-alt-right"}})],1)],1),a("li",[a("router-link",{attrs:{to:"/top-rated"}},[t._v("Top Rated "),a("font-awesome-icon",{attrs:{icon:"long-arrow-alt-right"}})],1)],1),a("li",[a("router-link",{attrs:{to:"/upcoming"}},[t._v("Upcoming "),a("font-awesome-icon",{attrs:{icon:"long-arrow-alt-right"}})],1)],1)]),a("ul",{staticClass:"nav nav-tabs d-md-none"},[a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/now-playing"}},[t._v("Now Playing "),a("font-awesome-icon",{attrs:{icon:"long-arrow-alt-right"}})],1)],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/popular"}},[t._v("Popular "),a("font-awesome-icon",{attrs:{icon:"long-arrow-alt-right"}})],1)],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/top-rated"}},[t._v("Top Rated "),a("font-awesome-icon",{attrs:{icon:"long-arrow-alt-right"}})],1)],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/upcoming"}},[t._v("Upcoming "),a("font-awesome-icon",{attrs:{icon:"long-arrow-alt-right"}})],1)],1)])])},v=[],y={name:"Nav"},w=y,C=a("271d");function _(t){this["$style"]=C["default"].locals||C["default"]}var b=Object(m["a"])(w,h,v,!1,_,null,null),M=b.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.pageContent},[t.movies.length?n("div",[t.fullMode?n("div",{staticClass:"row",class:t.$style.pageWrapper},[n("font-awesome-icon",{class:t.$style.backToList,attrs:{icon:"times"},on:{click:function(e){return t.backToMovieList()}}}),n("section",{staticClass:"col-12 text-center"},[n("div",{staticClass:"text-left",class:[t.$style.elements,t.$style.fullMode]},[n("div",{class:t.$style.movieHeader},[t.fullMovieContent.backdrop_path?n("img",{staticClass:"img-fluid",attrs:{src:"https://image.tmdb.org/t/p/original"+t.fullMovieContent.backdrop_path}}):n("div",{class:t.$style.noImage},[n("img",{attrs:{src:a("bd21")}})]),n("div",{staticClass:"row",class:t.$style.movieTitle},[n("div",{staticClass:"offset-md-1 col-2"},[t.fullMovieContent.poster_path?n("img",{staticClass:"img-fluid",attrs:{src:"https://image.tmdb.org/t/p/w342"+t.fullMovieContent.poster_path}}):n("div",{class:t.$style.noImage},[n("img",{attrs:{src:a("bd21")}})])]),n("div",{staticClass:"col-9"},[n("h4",{staticClass:"my-2"},[t._v(t._s(t.movieTitle))]),n("h6",[n("span",[t._v(t._s(t.genres))])]),n("h6",[t._v(t._s(t.fullMovieContent))])])])])])]),n("section",{staticClass:"col-12 my-5",class:t.$style.movieDetailSection},[n("div",{staticClass:"row"},[n("article",{staticClass:"offset-md-1 col-7"},[n("h2",[t._v("Synopsis")]),n("p",[t._v(t._s(t.fullMovieContent.overview))]),n("h2",{staticClass:"mt-5"},[t._v("Cast")]),n("div",{staticClass:"row",class:t.$style.castContainer},t._l(t.casts.cast,(function(e){return n("div",{staticClass:"col-2 py-3",on:{click:function(a){return t.getCastDetails(e.credit_id)}}},[e.profile_path?n("div",{class:t.$style.castImageContainer},[n("img",{staticClass:"img-fluid",attrs:{src:"https://image.tmdb.org/t/p/w185"+e.profile_path}})]):n("div",{class:t.$style.noImage},[n("img",{attrs:{src:a("bd21")}})]),n("p",{staticClass:"mt-2"},[t._v(t._s(e.name)+" "),n("em",[t._v("as")])]),n("p",{class:t.$style.character},[t._v(t._s(e.character))])])})),0),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],on:{close:t.closeModal},scopedSlots:t._u([{key:"header",fn:function(){return[t.fullCast&&t.fullCast.person?n("span",[t._v(t._s(t.personDetails.name))]):t._e()]},proxy:!0},{key:"body",fn:function(){return[t.fullCast&&t.fullCast.person?n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[t.fullCast.person.profile_path?n("div",{class:t.$style.castImageContainer},[n("img",{staticClass:"img-fluid",attrs:{src:"https://image.tmdb.org/t/p/w500"+t.fullCast.person.profile_path}})]):n("div",{class:t.$style.noImage},[n("img",{attrs:{src:a("bd21")}})])]),n("div",{staticClass:"col-8",class:t.$style.personDetails},[n("h2",[t._v(t._s(t.personDetails.name))]),t.personDetails.birthday?n("h6",[t._v("Born: "+t._s(t.personDetails.birthday)+" "),t.personDetails.place_of_birth?n("span",[t._v("at "+t._s(t.personDetails.place_of_birth))]):t._e()]):t._e(),n("p",{staticClass:"my-4 pr-3"},[t._v(t._s(t.personDetails.biography))])])]):t._e()]},proxy:!0}],null,!1,1026479074)})],1),n("article",{staticClass:"col-3 mt-3"},[t.videos&&t.videos.length?n("aside",{staticClass:"pb-3",class:t.$style.rightPanel},[n("h2",{staticClass:"py-3 px-4"},[t._v("Videos")]),t._l(t.videos,(function(t){return n("div",{staticClass:"px-4 py-2"},[n("iframe",{attrs:{height:"100%",width:"100%",src:"https://www.youtube.com/embed/"+t.key,crossorigin:"anonymous"}})])}))],2):t._e()])])])],1):n("div",{staticClass:"row p-4",class:t.$style.pageWrapper},[n("div",{staticClass:"col-12 my-3 pb-3"},[n("h2",[t._v(t._s(t.catTitle))])]),t._l(t.movies,(function(e){return n("section",{staticClass:"col-lg-2 col-md-3 col-sm-4 col-6 p-3 text-center"},[n("div",{staticClass:"text-left",class:t.$style.elements,on:{click:function(a){return t.getFullDetails(a,e)}}},[n("span",{class:t.$style.rating},[t._v(t._s(e.vote))]),e.poster?n("img",{staticClass:"img-fluid",attrs:{src:"https://image.tmdb.org/t/p/w342"+e.poster}}):n("div",{class:t.$style.noImage},[n("img",{attrs:{src:a("bd21")}})]),n("h4",{staticClass:"my-2"},[t._v(t._s(e.title))]),n("h6",[t._v(t._s(e.genre))])])])}))],2)]):n("div",{staticClass:"row p-4 mt-5 pt-5",class:t.$style.pageWrapper},t._l(20,(function(t){return n("SkeletonLoader",{key:t,staticClass:"col-lg-2 col-md-3 col-sm-4 col-6"})})),1)])},x=[],k=(a("b0c0"),a("96cf"),a("1da1")),I=(a("99af"),a("4160"),a("159b"),a("bc3a")),O=a.n(I),E=(a("d81d"),a("dca8"),a("c1f9"),a("ea41"));function S(t){if(t.length){var e="",a=!!t[0].name;if(a){var n=[];t.forEach((function(t){n.push(t.id)})),t=n}return t.forEach((function(t){e+=D[t].name+", "})),e.substring(0,e.length-2)}return null}var D=Object.freeze(Object.fromEntries(E.map((function(t){return[t.id,t]})))),P={API_KEY:"2b5aa5030d2a9da3d764bd1cc757f1c4",API_BASE_URL:"https://api.themoviedb.org/3/"},T="?api_key=".concat(P.API_KEY,"&language=en-US");function j(t){return B.apply(this,arguments)}function B(){return B=Object(k["a"])(regeneratorRuntime.mark((function t(e){var a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=e||"now_playing",a=[],t.next=4,O.a.get("".concat(P.API_BASE_URL,"movie/").concat(e,"?api_key=").concat(P.API_KEY,"&language=en-US&page=1"));case 4:return n=t.sent,r=n.data,s=r.results?r.results:r,s.forEach((function(t){var e=S(t.genre_ids);a.push({id:t.id,title:t.original_title,poster:t.poster_path,genre:e,vote:t.vote_average})})),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}function Z(t){return Y.apply(this,arguments)}function Y(){return Y=Object(k["a"])(regeneratorRuntime.mark((function t(e){var a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=11;break}return a=[],t.next=4,O.a.get("".concat(P.API_BASE_URL,"search/movie?api_key=").concat(P.API_KEY,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 4:return n=t.sent,r=n.data,s=r.results?r.results:r,s.forEach((function(t){var e=S(t.genre_ids);a.push({id:t.id,title:t.original_title,poster:t.poster_path,genre:e,vote:t.vote_average})})),t.abrupt("return",a);case 11:return t.next=13,j();case 13:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}function R(t){return L.apply(this,arguments)}function L(){return L=Object(k["a"])(regeneratorRuntime.mark((function t(e){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(P.API_BASE_URL,"movie/").concat(e).concat(T));case 2:return a=t.sent,n=a.data,r=n.results?n.results:n,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}function H(t){return z.apply(this,arguments)}function z(){return z=Object(k["a"])(regeneratorRuntime.mark((function t(e){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(P.API_BASE_URL,"movie/").concat(e,"/casts").concat(T));case 2:return a=t.sent,n=a.data,r=n.results?n.results:n,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),z.apply(this,arguments)}function F(t){return W.apply(this,arguments)}function W(){return W=Object(k["a"])(regeneratorRuntime.mark((function t(e){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(P.API_BASE_URL,"movie/").concat(e,"/videos").concat(T));case 2:return a=t.sent,n=a.data,r=n.results?n.results:n,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),W.apply(this,arguments)}function U(t){return N.apply(this,arguments)}function N(){return N=Object(k["a"])(regeneratorRuntime.mark((function t(e){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(P.API_BASE_URL,"credit/").concat(e).concat(T));case 2:return a=t.sent,n=a.data,r=n.results?n.results:n,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),N.apply(this,arguments)}function J(t){return Q.apply(this,arguments)}function Q(){return Q=Object(k["a"])(regeneratorRuntime.mark((function t(e){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(P.API_BASE_URL,"person/").concat(e).concat(T));case 2:return a=t.sent,n=a.data,r=n.results?n.results:n,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),Q.apply(this,arguments)}var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-2 p-3 text-center",class:t.$style.skeletonLoader},[t._m(0)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-3"},[a("div"),a("span",{staticClass:"mt-2"}),a("p",{staticClass:"my-2"}),a("span")])}],K={name:"SkeletonLoader"},$=K,V=a("b453");function G(t){this["$style"]=V["default"].locals||V["default"]}var tt=Object(m["a"])($,X,q,!1,G,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"modal-backdrop"},[a("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[a("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[t._t("header",[t._v(" This is the default tile! ")]),a("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[a("font-awesome-icon",{attrs:{icon:"times"},on:{click:t.close}})],1)],2),a("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t._t("body",[t._v(" I'm the default body! ")])],2),a("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])])},nt=[],rt={name:"modal",components:{FontAwesomeIcon:c["a"]},methods:{close:function(){this.$emit("close")}}},st=rt,ot=(a("2640"),Object(m["a"])(st,at,nt,!1,null,"27f584ce",null)),it=ot.exports,ct={name:"PageContent",components:{FontAwesomeIcon:c["a"],SkeletonLoader:et,Modal:it},props:{title:String},data:function(){return{movies:[],genres:"",catTitle:"",fullMode:!1,fullMovieContent:[],casts:{},videos:{},movieTitle:"",isModalVisible:!1,fullCast:{},personDetails:{}}},created:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getMovies;case 1:case"end":return e.stop()}}),e)})))()},computed:{getSearchTerm:function(){return this.$store.state.common.searchTerm},getMovieCategory:function(){return this.$store.state.common.movieCategory},getTitle:function(){return this.$route.name},getMovies:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.getSearchTerm){e.next=7;break}return t.catTitle="Search Results",e.next=4,Z(t.getSearchTerm);case 4:t.movies=e.sent,e.next=11;break;case 7:return t.catTitle=t.getTitle,e.next=10,j(t.getMovieCategory);case 10:t.movies=e.sent;case 11:return e.abrupt("return",t.movies);case 12:case"end":return e.stop()}}),e)})))()}},watch:{getSearchTerm:{immediate:!0,handler:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getMovies;case 1:case"end":return e.stop()}}),e)})))()}}},methods:{getFullDetails:function(t,e){var a=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.fullMode=!0,t.next=3,R(e.id);case 3:return a.fullMovieContent=t.sent,a.genres=S(a.fullMovieContent.genres),t.next=7,H(e.id);case 7:return a.casts=t.sent,t.next=10,F(e.id);case 10:a.videos=t.sent,a.movieTitle=a.getMovieTitle(a.fullMovieContent);case 12:case"end":return t.stop()}}),t)})))()},backToMovieList:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getMovies,t.fullMode=!1,t.fullMovieContent=[],t.casts={},t.videos={},t.movieTitle="";case 6:case"end":return e.stop()}}),e)})))()},getMovieTitle:function(t){return this.movieTitle=t.title,t.title===t.original_title?t.title:t.title+" ("+t.original_title+")"},getCastDetails:function(t){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.showModal(),a.next=3,U(t);case 3:return e.fullCast=a.sent,a.next=6,J(e.fullCast.person.id);case 6:e.personDetails=a.sent,console.log(e.personDetails);case 8:case"end":return a.stop()}}),a)})))()},showModal:function(){this.isModalVisible=!0},closeModal:function(){this.fullCast={},this.personDetails={},this.isModalVisible=!1}}},lt=ct,ut=a("6a17");function pt(t){this["$style"]=ut["default"].locals||ut["default"]}var mt=Object(m["a"])(lt,A,x,!1,pt,null,null),dt=mt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",class:t.$style.wrapper},[a("Header"),a("main",{staticClass:"row",class:t.$style.mainWrapper},[a("section",{staticClass:"col-md-2 col-sm-12 p-0 text-left",class:t.$style.mainMenu},[a("Nav",{attrs:{msg:""}})],1),a("section",{staticClass:"col-md-10 col-sm-12 p-0"},[a("transition",[a("router-view",{attrs:{id:"page-content"}})],1)],1)])],1)},gt=[],ht={name:"App",components:{Nav:M,Header:g}},vt=ht,yt=a("962d");function wt(t){this["$style"]=yt["default"].locals||yt["default"]}var Ct=Object(m["a"])(vt,ft,gt,!1,wt,null,null),_t=Ct.exports,bt={name:"App",components:{Nav:M,Header:g,PageContent:dt,Pages:_t},data:function(){return{movieCategory:this.category,query:"",active:!1,textValue:"",fullMode:!0}},props:{category:String,searchTerm:String},methods:{getCategory:function(t){this.movieCategory=t,this.textValue=""},searchMovies:function(t){this.query=t},removeActive:function(t){this.active=t},fullDetail:function(t){this.fullMode=t}}},Mt=bt,At=Object(m["a"])(Mt,r,s,!1,null,null,null),xt=At.exports,kt=a("8c4f"),It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",class:t.$style.wrapper},[a("Header",{attrs:{value:t.textValue},on:{searchTerm:t.searchMovies}}),a("main",{staticClass:"row",class:t.$style.mainWrapper},[a("section",{staticClass:"col-2 p-0 text-left",class:t.$style.mainMenu},[t.fullMode?a("Nav",{attrs:{msg:"",activeStatus:t.active},on:{category:t.getCategory}}):t._e()],1),a("section",{staticClass:"col-10 p-0",class:t.$style.gfds},[a("PageContent",{attrs:{category:t.movieCategory,title:t.movieCategory,searchTerm:t.query},on:{removeActive:t.removeActive,fullMode:t.fullDetail}})],1)])],1)},Ot=[],Et={name:"App",components:{Nav:M,Header:g,PageContent:dt},data:function(){return{movieCategory:this.category,query:"",active:!1,textValue:"",fullMode:!0}},props:{category:String,searchTerm:String},methods:{getCategory:function(t){this.movieCategory=t,this.textValue=""},searchMovies:function(t){this.query=t},removeActive:function(t){this.active=t},fullDetail:function(t){this.fullMode=t}}},St=Et,Dt=a("d930");function Pt(t){this["$style"]=Dt["default"].locals||Dt["default"]}var Tt=Object(m["a"])(St,It,Ot,!1,Pt,null,null),jt=Tt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageContent")},Zt=[],Yt={getMovieCategory:function(t){return Rt[t]}},Rt=Object.freeze({"Now Playing":"now_playing",Popular:"popular","Top Rated":"top_rated",Upcoming:"upcoming"}),Lt={name:"NowPlaying",components:{PageContent:dt},created:function(){this.$store.commit("updateCategory",Yt.getMovieCategory(this.$route.name)),this.$store.commit("updateSearch","")}},Ht=Lt,zt=a("bf85");function Ft(t){this["$style"]=zt["default"].locals||zt["default"]}var Wt=Object(m["a"])(Ht,Bt,Zt,!1,Ft,null,null),Ut=Wt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageContent")},Jt=[],Qt={name:"NowPlaying",components:{PageContent:dt},created:function(){this.$store.commit("updateCategory",Yt.getMovieCategory(this.$route.name)),this.$store.commit("updateSearch","")}},Xt=Qt,qt=a("8afa");function Kt(t){this["$style"]=qt["default"].locals||qt["default"]}var $t=Object(m["a"])(Xt,Nt,Jt,!1,Kt,null,null),Vt=$t.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageContent")},te=[],ee={name:"NowPlaying",components:{PageContent:dt},created:function(){this.$store.commit("updateCategory",Yt.getMovieCategory(this.$route.name)),this.$store.commit("updateSearch","")}},ae=ee,ne=a("c25c");function re(t){this["$style"]=ne["default"].locals||ne["default"]}var se=Object(m["a"])(ae,Gt,te,!1,re,null,null),oe=se.exports,ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageContent")},ce=[],le={name:"NowPlaying",components:{PageContent:dt},created:function(){this.$store.commit("updateCategory",Yt.getMovieCategory(this.$route.name)),this.$store.commit("updateSearch","")}},ue=le,pe=a("99d8");function me(t){this["$style"]=pe["default"].locals||pe["default"]}var de=Object(m["a"])(ue,ie,ce,!1,me,null,null),fe=de.exports,ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageContent",{attrs:{category:t.movieCategory,title:t.movieCategory,searchTerm:t.query},on:{removeActive:t.removeActive,fullMode:t.fullDetail}})},he=[],ve={name:"App",components:{Nav:M,Header:g,PageContent:dt},data:function(){return{movieCategory:this.category,query:"",active:!1,textValue:"",fullMode:!0}},props:{category:String,searchTerm:String},methods:{getCategory:function(t){this.movieCategory=t,this.textValue=""},searchMovies:function(t){this.query=t},removeActive:function(t){this.active=t},fullDetail:function(t){this.fullMode=t}}},ye=ve,we=a("cbd2");function Ce(t){this["$style"]=we["default"].locals||we["default"]}var _e=Object(m["a"])(ye,ge,he,!1,Ce,null,null),be=_e.exports;n["a"].use(kt["a"]);var Me=[{path:"/",name:"Pages",redirect:"/now-playing",component:_t,children:[{path:"/now-playing",name:"Now Playing",component:Ut},{path:"/popular",name:"Popular",component:Vt},{path:"/top-rated",name:"Top Rated",component:oe},{path:"/upcoming",name:"Upcoming",component:fe},{path:"/watch-later",name:"Watch Later",component:be}]},{path:"/about",name:"About",component:jt},{path:"*",redirect:"/now-playing"}],Ae=new kt["a"]({routes:Me}),xe=Ae,ke=a("2f62"),Ie={spinner:!1,searchTerm:"",movieCategory:""},Oe={updateSearch:function(t,e){t.searchTerm=e},updateCategory:function(t,e){t.movieCategory=e}},Ee={state:Ie,mutations:Oe},Se=a("e542"),De=a.n(Se);n["a"].use(ke["a"]);var Pe=new ke["a"].Store({modules:{common:Ee,home:De.a}}),Te=Pe,je=(a("4989"),a("ab8b"),a("3e48"),a("ecee")),Be=a("c074");je["c"].add(Be["b"]),je["c"].add(Be["d"]),je["c"].add(Be["c"]),je["c"].add(Be["a"]),je["c"].add(Be["e"]),n["a"].component("font-awesome-icon",c["a"]),n["a"].config.productionTip=!1,new n["a"]({router:xe,store:Te,render:function(t){return t(xt)}}).$mount("#app")},6550:function(t,e,a){t.exports={pageContent:"PageContent_pageContent_1pmbL",elements:"PageContent_elements_13_U_",fullMode:"PageContent_fullMode_3c5y_",noImage:"PageContent_noImage_2r6VA",rating:"PageContent_rating_3Ghqr",movieHeader:"PageContent_movieHeader_19nhz",movieTitle:"PageContent_movieTitle_3wBEp",movieDetailSection:"PageContent_movieDetailSection_myiDJ",castContainer:"PageContent_castContainer_17voW",character:"PageContent_character_1um6m",castImageContainer:"PageContent_castImageContainer_1sanV",rightPanel:"PageContent_rightPanel_1G1fr",personDetails:"PageContent_personDetails_31ZUi",backToList:"PageContent_backToList_1ZGtI"}},"692c":function(t,e,a){t.exports={skeletonLoader:"Skeleton_skeletonLoader_321_o",anim:"Skeleton_anim_2eWtL"}},"6a17":function(t,e,a){"use strict";var n=a("6550"),r=a.n(n);e["default"]=r.a},"794d":function(t,e,a){t.exports={wrapper:"popular_wrapper_1h_E2",mainMenu:"popular_mainMenu_1zwAA"}},"79da":function(t,e,a){},8848:function(t,e,a){t.exports={wrapper:"upcoming_wrapper_bJYtY",mainMenu:"upcoming_mainMenu_1uBbu"}},"8afa":function(t,e,a){"use strict";var n=a("794d"),r=a.n(n);e["default"]=r.a},"962d":function(t,e,a){"use strict";var n=a("b7b7"),r=a.n(n);e["default"]=r.a},"99d8":function(t,e,a){"use strict";var n=a("8848"),r=a.n(n);e["default"]=r.a},b453:function(t,e,a){"use strict";var n=a("692c"),r=a.n(n);e["default"]=r.a},b7b7:function(t,e,a){t.exports={wrapper:"pages_wrapper_1F4Ks",mainMenu:"pages_mainMenu_1iHqn"}},bd21:function(t,e){t.exports="data:image/png;base64,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"},bf85:function(t,e,a){"use strict";var n=a("3724"),r=a.n(n);e["default"]=r.a},c25c:function(t,e,a){"use strict";var n=a("3a20"),r=a.n(n);e["default"]=r.a},cbd2:function(t,e,a){"use strict";var n=a("e783"),r=a.n(n);e["default"]=r.a},d930:function(t,e,a){"use strict";var n=a("ff86"),r=a.n(n);e["default"]=r.a},e542:function(t,e){},e783:function(t,e,a){t.exports={wrapper:"watch-later_wrapper_26IbY",mainMenu:"watch-later_mainMenu_31-ZU"}},ea41:function(t){t.exports=JSON.parse('[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]')},ff86:function(t,e,a){t.exports={wrapper:"about_wrapper_3Kank",mainMenu:"about_mainMenu_1ZOmO"}}});
//# sourceMappingURL=app.6d594e2d.js.map