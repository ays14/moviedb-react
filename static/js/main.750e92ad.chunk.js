(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(70)},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),l=n.n(i),o=n(11),c=n(12),s=n(4),u=n(5),d=n(9),h=n(8),g=n(10),p=n(1),m=n(2),v=n(14),f=n(13),b=n(32),E=n.n(b).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"2556ac28d3c2f708dba5bb4bbb73cbe3"}}),w=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"get",value:function(e,t){return E.get(e,{params:t})}}]),e}();function j(){var e=Object(p.a)(["\n    text-align: center;\n    height: 320px;\n    width: 240px;\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(["\n    display: inline-block;\n    padding: 8px 2% 8px 2%;\n    margin-bottom: 15px;\n"]);return O=function(){return e},e}var y=m.a.li(O()),S=m.a.div(j()),x=function(e){function t(e){return Object(s.a)(this,t),Object(d.a)(this,Object(h.a)(t).call(this,e))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.data.poster_path?r.a.createElement(y,null,r.a.createElement(o.b,{to:"/movie/".concat(this.props.data.id),key:this.props.data.id},r.a.createElement(S,null,r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w185"+this.props.data.poster_path,alt:this.props.data.title}),r.a.createElement("p",null,this.props.data.title)))):null}}]),t}(r.a.Component);function k(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: baseline;\n    justify-content: center;\n    align-content: center;\n"]);return k=function(){return e},e}var L=m.a.ul(k()),M=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={isLoading:!1,page:1,data:[]},n.handleScroll=n.handleScroll.bind(Object(f.a)(n)),n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){if(window.innerHeight+window.scrollY>document.body.offsetHeight&&!this.state.isLoading){var e=this.state.page+1;this.setState({isLoading:!0,page:e}),this.getMoreQueryResults()}}},{key:"getMoreQueryResults",value:function(){var e=this;w.get("/movie/popular",{language:"en-US",page:this.state.page}).then(function(t){var n=e.state.data;e.setState({data:[].concat(Object(v.a)(n),Object(v.a)(t.data.results)),isLoading:!1})}).catch(function(e){console.log(e.response)})}},{key:"render",value:function(){return r.a.createElement(L,null,this.props.data.map(function(e){return r.a.createElement(x,{data:e})}),this.state.isLoading&&r.a.createElement("h1",null,"Loading more movies"),this.state.data.map(function(e){return r.a.createElement(x,{data:e})}))}}]),t}(r.a.Component),_=n(16),R=n.n(_);function C(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: baseline;\n    justify-content: center;\n    align-content: center;\n"]);return C=function(){return e},e}function U(){var e=Object(p.a)(["\n  text-align: center;\n  width: 40%;\n  height: 35px;\n"]);return U=function(){return e},e}function H(){var e=Object(p.a)(["\n  text-align: center;\n  align-content: center;\n"]);return H=function(){return e},e}var I=m.a.div(H()),W=m.a.input(U()),T=m.a.ul(C()),F={isLoading:!1,results:[],value:"",title:[],movieId:[],page:1,match:!1,searchString:"",listExhausted:!1},q=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.value;n.setState({isLoading:!0,value:t}),setTimeout(function(){if(n.state.value.length<1)return n.setState(F);var e=new RegExp(R.a.escapeRegExp(n.state.value),"i"),a=function(t){return e.test(t.title)};w.get("/search/movie",{language:"en-US",query:t,page:n.state.page}).then(function(e){var r=e.data.results;n.setState({isLoading:!1,results:R.a.filter(r,a),match:a,searchString:t})}).catch(function(e){console.log(e.response)})},1e3)},n.state=F,n.handleScroll=n.handleScroll.bind(Object(f.a)(n)),n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){if(!this.state.listExhausted&&window.innerHeight+window.scrollY>window.innerHeight-200&&!this.state.isLoading&&""!==this.state.searchString){var e=this.state.page+1;this.setState({isLoading:!0,page:e}),this.getMoreSearchResults()}}},{key:"getMoreSearchResults",value:function(){var e=this;w.get("/search/movie",{language:"en-US",query:this.state.searchString,page:this.state.page}).then(function(t){var n=t.data.results,a=e.state.results;n.length>0?e.setState({isLoading:!1,listExhausted:!0}):e.setState({isLoading:!1,results:[].concat(Object(v.a)(a),Object(v.a)(R.a.filter(n,e.state.match)))})}).catch(function(e){console.log(e.response)})}},{key:"render",value:function(){return r.a.createElement(I,null,r.a.createElement("form",null,r.a.createElement(W,{placeholder:"Search for movie...",value:this.state.value,onChange:R.a.debounce(this.handleInputChange,1e3,{leading:!0})})),r.a.createElement(T,null,this.state.results.map(function(e){return r.a.createElement(x,{data:e})}),this.state.listExhausted?r.a.createElement("h3",null,"No more results to search and show"):r.a.createElement("div",null,this.state.isLoading&&r.a.createElement("h3",null,"Searching for movies..."))))}}]),t}(r.a.Component);function B(){var e=Object(p.a)(["\n    text-align: center;\n"]);return B=function(){return e},e}var D=m.a.h1(B()),J=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={data:[],isSearching:!1},n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;w.get("/movie/popular",{language:"en-US",page:1}).then(function(t){e.setState({data:t.data.results})}).catch(function(e){console.log(e.response)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null,"Movie Hunter"),r.a.createElement(q,null),r.a.createElement(D,null,"Popular Movies"),r.a.createElement("br",null),r.a.createElement(M,{data:this.state.data}))}}]),t}(r.a.Component);function Q(){var e=Object(p.a)(["\n    grid-row-end:5;\n    height: 90%;\n    width: 100%;\n"]);return Q=function(){return e},e}function Y(){var e=Object(p.a)(["\n    text-align: left;\n    grid-column-start: 2;\n    grid-column-end: 4;\n    margin-right: 200px;\n"]);return Y=function(){return e},e}function N(){var e=Object(p.a)(["\n    text-align: center;\n    /* height: 320px;\n    width: 240px; */\n    grid-column-start: 1;\n    grid-column-end: 2;\n"]);return N=function(){return e},e}function P(){var e=Object(p.a)(["\n    grid-area: hd;\n    align-content: center;\n    text-align: center;\n"]);return P=function(){return e},e}function $(){var e=Object(p.a)(['\n    display: grid;\n    grid-gap: 50px;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-areas: \n      "hd hd hd"\n      "sd main main"\n      ".  ft ft";\n']);return $=function(){return e},e}var z=m.a.div($()),A=m.a.div(P()),G=m.a.div(N()),K=m.a.div(Y()),V=m.a.iframe(Q()),X=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={data:{},trailerFound:!0},n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.movieId;w.get("/movie/".concat(t),{language:"en-US",append_to_response:"videos"}).then(function(t){e.setState({data:t.data})}).catch(function(e){console.log(e.response)})}},{key:"getTrailer",value:function(){if(void 0!==this.state.data.videos){var e=this.state.data.videos.results.find(function(e){return"Trailer"===e.type});if(void 0!==e)return e.key;this.setState({trailerFound:!1})}}},{key:"render",value:function(){var e=this.state.data;return console.log(e),r.a.createElement(z,null,r.a.createElement(A,null,r.a.createElement(o.b,{to:"/"},r.a.createElement("h1",null,"Movie Hunter"))),r.a.createElement(G,null,r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w200"+e.poster_path,alt:"loading"}),r.a.createElement("p",null,e.title),r.a.createElement("p",null,e.tagline)),r.a.createElement(K,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Synopsis: "),e.overview),r.a.createElement("p",null,"Released on: ",e.release_date),0===e.vote_count?null:r.a.createElement("p",null,"Rated ",e.vote_average," by ",e.vote_count," votes"),this.state.trailerFound?r.a.createElement(V,{src:"https://www.youtube.com/embed/".concat(this.getTrailer())}):r.a.createElement("p",null,"Trailer not found")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=r.a.createElement(function(){return r.a.createElement(o.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:J}),r.a.createElement(c.a,{path:"/movie/:movieId",exact:!0,component:X})))},null);l.a.render(Z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.750e92ad.chunk.js.map