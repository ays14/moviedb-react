(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,n){e.exports=n(87)},87:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(19),o=n.n(i),c=n(18),u=n(43),l=n(44),s=n(45),p=n(4),h={isLoading:!1,data:{},trailer:"",error:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_MOVIE_DETAILS":return Object(p.a)({},h,{isLoading:!0});case"GET_MOVIE_DETAILS_SUCCESS":return Object(p.a)({},e,{isLoading:!1,data:t.payload,trailer:t.key});case"GET_MOVIE_DETAILS_ERROR":return Object(p.a)({},e,{error:t.payload.error});default:return e}},d=n(27),E={isLoading:!0,results:[],value:"",list:1,page:1,listExhausted:!1,prev:0,error:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_MOVIE_SEARCH":return Object(p.a)({},E,{isLoading:!0,value:t.value,page:t.page});case"REQUEST_MORE_SEARCH_RESULTS":return Object(p.a)({},e,{isLoading:!0});case"SEARCH_MOVIE_SUCCESS":return Object(p.a)({},e,{isLoading:!1,results:[].concat(Object(d.a)(e.results),Object(d.a)(t.payload)),page:t.page});case"SEARCH_MOVIE_ERROR":return Object(p.a)({},e,{error:t.payload.error,page:t.page});case"RESET_SEARCH_BAR":return E;case"NO_MORE_RESULTS":return Object(p.a)({},e,{listExhausted:!0});case"REQUEST_MOVIE_LIST":return Object(p.a)({},E,{isLoading:!0,list:t.page});case"REQUEST_MORE_MOVIES":return Object(p.a)({},e,{isLoading:!0});case"GET_MOVIE_LIST_SUCCESS":return Object(p.a)({},e,{isLoading:!1,results:[].concat(Object(d.a)(e.results),Object(d.a)(t.payload)),list:t.page});case"GET_MOVIE_LIST_ERROR":return Object(p.a)({},e,{error:t.payload.error,list:t.page});case"SET_SCROLLER_VALUE":return Object(p.a)({},e,{prev:t.scroll});default:return e}},v=Object(c.a)(l.a,Object(u.createLogger)()),b=Object(c.c)({router:s.routerReducer,getMovieDetails:f,movie:g}),m=function(e,t){return b(e,t)},O=function(e){return Object(c.e)(m,Object(c.d)(v,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()))},S=n(22),j=n(21),_=n(17),y=n(8),x=n(9),R=n(14),L=n(13),w=n(15),T=n(1),C=n(2);function I(){var e=Object(T.a)(["\n    text-align: center;\n    border-bottom: 0.8px solid black;\n    padding-bottom: 12px;\n"]);return I=function(){return e},e}var M=C.a.h1(I()),k=function(e){return a.a.createElement(M,null,"Movie Hunter")},U=n(20),V=n(25),A=n.n(V);function D(){var e=Object(T.a)(["\n\ttext-align: center;\n\twidth: 40%;\n\theight: 36px;\n"]);return D=function(){return e},e}function H(){var e=Object(T.a)(["\n\tbackground-color: lightgray;\n"]);return H=function(){return e},e}function Q(){var e=Object(T.a)(["\n    align-content: center;\n    text-align: center;\n"]);return Q=function(){return e},e}var z=C.a.div(Q()),G=C.a.form(H()),N=C.a.input(D()),P=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(R.a)(this,Object(L.a)(t).call(this,e))).state={searchString:""},n.handleInputChange=n.handleInputChange.bind(Object(U.a)(n)),n.delayed=A.a.debounce(n.props.onSearchChange,300),n}return Object(w.a)(t,e),Object(x.a)(t,[{key:"handleInputChange",value:function(e){e.persist();var t=e.target.value;this.setState({searchString:t}),this.delayed(t)}},{key:"render",value:function(){return a.a.createElement(z,null,a.a.createElement(G,{onSubmit:function(e){return e.preventDefault()}},a.a.createElement(N,{placeholder:"Search for movie...",value:this.state.searchString,onChange:this.handleInputChange})))}}]),t}(a.a.Component);function B(){var e=Object(T.a)(["\n    font-size: 16px;\n"]);return B=function(){return e},e}function F(){var e=Object(T.a)(["\n    max-height: 280px;\n    max-width: 185px;\n"]);return F=function(){return e},e}function W(){var e=Object(T.a)(["\n    text-align: center;\n    height: 320px;\n    width: 240px;\n"]);return W=function(){return e},e}function X(){var e=Object(T.a)(["\n    display: inline-block;\n    justify-content: center;\n    padding: 12px 4px 12px 4px;\n    margin-bottom: 20px;\n"]);return X=function(){return e},e}var J=C.a.li(X()),q=C.a.div(W()),$=C.a.img(F()),K=C.a.p(B()),Y=function(e){var t=e.posterPath,n=e.id,r=e.title;return t&&a.a.createElement(J,null,a.a.createElement(j.b,{to:"/movie/".concat(n),key:n},a.a.createElement(q,null,a.a.createElement($,{src:"".concat("http://image.tmdb.org/t/p/w185").concat(t),alt:r}),a.a.createElement(K,null,r))))};function Z(){var e=Object(T.a)(["\n    text-align: center;\n\tfont-size: 20px;\n"]);return Z=function(){return e},e}function ee(){var e=Object(T.a)(["\n    display: block;\n    text-align: center;\n"]);return ee=function(){return e},e}function te(){var e=Object(T.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\talign-items: baseline;\n    padding: 16px;\n    align-content: center;\n"]);return te=function(){return e},e}function ne(){var e=Object(T.a)(["\n    text-align: center;\n"]);return ne=function(){return e},e}function re(){var e=Object(T.a)(["\n\ttext-align: center;\n\talign-content: center;\n"]);return re=function(){return e},e}var ae=C.a.div(re()),ie=C.a.div(ne()),oe=C.a.ul(te()),ce=C.a.div(ee()),ue=C.a.p(Z()),le=function(e){return a.a.createElement(ae,null,a.a.createElement(ie,null,a.a.createElement(oe,null,e.results.map(function(e){return a.a.createElement(Y,{posterPath:e.poster_path,title:e.title,id:e.id,key:e.id})}))),a.a.createElement(ce,null,e.exhausted&&a.a.createElement(ue,null,"No search results to show")))};function se(){var e=Object(T.a)(["\n    background-color: #4F3F3B;\n    border-radius: 50%;\n    border-color: black;\n    width: 10px;\n    height: 10px;\n    margin: 0 10px;\n    animation: "," 1s ease-in-out infinite;\n    animation-delay: ",";\n"]);return se=function(){return e},e}function pe(){var e=Object(T.a)(["\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    height: 50px;\n"]);return pe=function(){return e},e}function he(){var e=Object(T.a)(["\n    0% { margin-bottom: 0; }\n    25% { margin-bottom: 15px }\n    50% { margin-bottom: 30px }\n    75% { margin-bottom: 15px }\n    100% { margin-bottom: 0px }\n"]);return he=function(){return e},e}var fe=Object(C.b)(he()),de=C.a.div(pe()),Ee=C.a.div(se(),fe,function(e){return e.delay}),ge=function(e){function t(){return Object(y.a)(this,t),Object(R.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return a.a.createElement(de,null,a.a.createElement(Ee,{delay:"0s"}),a.a.createElement(Ee,{delay:"0.25s"}),a.a.createElement(Ee,{delay:"0.5s"}))}}]),t}(a.a.Component),ve=n(50),be=n.n(ve).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"2556ac28d3c2f708dba5bb4bbb73cbe3"}}),me=function(){function e(){Object(y.a)(this,e)}return Object(x.a)(e,null,[{key:"get",value:function(e,t){return be.get(e,{params:t})}}]),e}(),Oe=function(e,t){var n={language:"en-US",page:t,query:e};return me.get("/search/movie",n).then(function(e){return e.data.results}).catch(function(e){return Promise.reject(e.response)})},Se=function(e){var t={language:"en-US",page:e};return me.get("/movie/popular",t).then(function(e){return e.data.results}).catch(function(e){return Promise.reject(e.response)})},je=function(e,t){var n=new RegExp(A.a.escapeRegExp(e),"i");return A.a.filter(t,function(e){return n.test(e.title)})};function _e(){var e=Object(T.a)(["\n    text-align: center;\n"]);return _e=function(){return e},e}var ye=C.a.div(_e()),xe=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(R.a)(this,Object(L.a)(t).call(this,e))).loadingRef=a.a.createRef(),n.handleSearchChange=n.handleSearchChange.bind(Object(U.a)(n)),n}return Object(w.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.observer=new IntersectionObserver(this.handleObserver.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.props.getMovieList(this.props.list).then(function(){return e.observer.observe(e.loadingRef.current)})}},{key:"componentWillUnmount",value:function(){this.props.resetSearch(),this.observer.disconnect()}},{key:"handleObserver",value:function(e){var t=e[0].boundingClientRect.y;this.props.prev>t&&!this.props.listExhausted&&(this.props.value?this.props.searchMovie(this.props.value,this.props.page):this.props.getMovieList(this.props.list)),this.props.setScrollValue(t)}},{key:"handleSearchChange",value:function(e){var t=this;e.length<1?(this.props.resetSearch(),this.props.getMovieList(this.props.list)):this.props.searchMovie(e,this.props.page).then(function(){return t.observer.observe(t.loadingRef.current)})}},{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(P,{searchString:this.props.value,onSearchChange:this.handleSearchChange}),a.a.createElement(r.Fragment,null,a.a.createElement(le,{results:this.props.results,loading:this.props.isLoading,exhausted:this.props.listExhausted}),!this.props.listExhausted&&a.a.createElement(ye,{ref:this.loadingRef},a.a.createElement(ge,null))))}}]),t}(a.a.Component),Re={searchMovie:function(e,t){return function(n){return n(1===t?function(e){return{type:"REQUEST_MOVIE_SEARCH",value:e}}(e):{type:"REQUEST_MORE_SEARCH_RESULTS"}),Oe(e,t).then(function(r){if(r.length>0){var a=je(e,r);n(function(e,t){return{type:"SEARCH_MOVIE_SUCCESS",payload:e,page:t+1}}(a,t))}else n({type:"NO_MORE_RESULTS"})}).catch(function(e){return n(function(e,t){return{type:"SEARCH_MOVIE_ERROR",payload:e,page:t-1}}(e,t))})}},resetSearch:function(){return function(e){return e({type:"RESET_SEARCH_BAR"})}},getMovieList:function(e){return function(t){return t(1===e?{type:"REQUEST_MOVIE_LIST"}:{type:"REQUEST_MORE_MOVIES"}),Se(e).then(function(n){t(function(e,t){return{type:"GET_MOVIE_LIST_SUCCESS",payload:e,page:t+1}}(n,e))}).catch(function(n){return t(function(e,t){return{type:"GET_MOVIE_LIST_ERROR",payload:e,page:t-1}}(n,e))})}},setScrollValue:function(e){return function(t){return t(function(e){return{type:"SET_SCROLLER_VALUE",scroll:e}}(e))}}},Le=Object(S.b)(function(e){var t=e.movie;return{isLoading:t.isLoading,page:t.page,list:t.list,results:t.results,prev:t.prev,listExhausted:t.listExhausted,value:t.value,error:t.error}},Re)(xe),we=function(e){function t(){return Object(y.a)(this,t),Object(R.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(k,null),a.a.createElement(Le,null))}}]),t}(r.Component);function Te(){var e=Object(T.a)(["  \n"]);return Te=function(){return e},e}function Ce(){var e=Object(T.a)(["\n    height: 22.5vw; /* This is to maintain aspect ratio of video even on window resize */\n    width: 40vw;\n"]);return Ce=function(){return e},e}function Ie(){var e=Object(T.a)(["\n    font-size: 16px;\n"]);return Ie=function(){return e},e}function Me(){var e=Object(T.a)(["\n    font-size: 16px;\n    text-align: justify;\n    width: 90%;\n"]);return Me=function(){return e},e}function ke(){var e=Object(T.a)(["\n    font-size: 16px;\n"]);return ke=function(){return e},e}function Ue(){var e=Object(T.a)(["\n    font-size: 20px;\n    text-decoration-line: underline;\n    font-weight: bold;\n"]);return Ue=function(){return e},e}function Ve(){var e=Object(T.a)(["\n    font-size: 24px;\n    font-weight: bold;\n"]);return Ve=function(){return e},e}function Ae(){var e=Object(T.a)(["\n    text-align: left;\n    width: 50%;\n    margin-right: 10px;\n    margin-left: 20px;\n"]);return Ae=function(){return e},e}function De(){var e=Object(T.a)(["\n    text-align: right;\n    padding-right: 20px;\n    border-right: 2px solid black;\n    width: 50%;\n"]);return De=function(){return e},e}function He(){var e=Object(T.a)(["\n    display: block;\n    align-content: center;\n    text-align: center;\n    margin-bottom: 32px;\n"]);return He=function(){return e},e}function Qe(){var e=Object(T.a)(["\n    display: flex;\n    column-count: 2;\n    column-gap: 4px;\n"]);return Qe=function(){return e},e}function ze(){var e=Object(T.a)(["\n    margin: 16px;\n"]);return ze=function(){return e},e}var Ge=C.a.div(ze()),Ne=C.a.div(Qe()),Pe=C.a.h1(He()),Be=C.a.div(De()),Fe=C.a.div(Ae()),We=C.a.p(Ve()),Xe=C.a.p(Ue()),Je=C.a.p(ke()),qe=C.a.p(Me()),$e=C.a.p(Ie()),Ke=C.a.iframe(Ce()),Ye=C.a.img(Te()),Ze=function(e){var t=e.title,n=e.posterPath,r=e.tagline,i=e.overview,o=e.releaseDate,c=e.voteAverage,u=e.voteCount,l=e.trailer;return a.a.createElement(Ge,null,a.a.createElement(Pe,null,a.a.createElement(j.b,{to:"/"},"Movie Hunter")),a.a.createElement(Ne,null,a.a.createElement(Be,null,a.a.createElement(Ye,{src:"".concat("http://image.tmdb.org/t/p/w200").concat(n),alt:"loading"}),a.a.createElement(We,null,t),a.a.createElement(Je,null,r)),a.a.createElement(Fe,null,a.a.createElement(Xe,null,"Synopsis"),a.a.createElement(qe,null,i),a.a.createElement($e,null,"Released on: ",o),u&&a.a.createElement($e,null,"Rated ",c," by ",u," votes"),l?a.a.createElement(Ke,{src:"".concat("https://www.youtube.com/embed/").concat(l)},"Trailer"):a.a.createElement($e,null,"Trailer not found"))))},et={language:"en-US",append_to_response:"videos"},tt=function(e){var t="/movie/".concat(e);return me.get(t,et).then(function(e){return e.data}).catch(function(e){return Promise.reject(e.response)})},nt=function(e){if(e){var t=e.results.find(function(e){return"Trailer"===e.type});return t?t.key:""}return""},rt=function(e){return function(t){return t({type:"REQUEST_MOVIE_DETAILS"}),tt(e).then(function(e){var n=nt(e.videos);t(function(e,t){return{type:"GET_MOVIE_DETAILS_SUCCESS",payload:e,key:t}}(e,n))}).catch(function(e){return t(function(e){return{type:"GET_MOVIE_DETAILS_ERROR",payload:e}}(e))})}},at=function(e){function t(){return Object(y.a)(this,t),Object(R.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(x.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.match.params.movieId;this.props.getMovieDetails(e)}},{key:"render",value:function(){if(this.props.isLoading)return a.a.createElement(ge,null);var e=this.props,t=e.data,n=t.title,r=t.tagline,i=t.overview,o=t.poster_path,c=t.release_date,u=t.vote_average,l=t.vote_count,s=e.trailer;return this.props.isLoading?a.a.createElement(ge,null):a.a.createElement(Ze,{title:n,tagline:r,overview:i,posterPath:o,releaseDate:c,voteAverage:u,voteCount:l,trailer:s})}}]),t}(a.a.Component),it={getMovieDetails:rt},ot=Object(S.b)(function(e){var t=e.getMovieDetails;return{data:t.data,trailer:t.trailer,isLoading:t.isLoading,error:t.error}},it)(at),ct=function(e){return a.a.createElement(S.a,{store:e.store},a.a.createElement(j.a,null,a.a.createElement(_.c,null,a.a.createElement(_.a,Object.assign({exact:!0,path:"/",component:we},e)),a.a.createElement(_.a,Object.assign({exact:!0,path:"/movie/:movieId",component:ot},e)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.d(t,"store",function(){return ut});var ut=O(),lt=a.a.createElement(ct,{store:ut});o.a.render(lt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.d5ef6524.chunk.js.map