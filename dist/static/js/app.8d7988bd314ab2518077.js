webpackJsonp([1],{NHnr:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=n("7+uW"),t={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"app"},t,!1,function(e){n("RpuX")},null,null).exports,c=n("/ocq"),s=n("jIVf"),i=new(n.n(s).a)("19b1e741aaf272e825c7",{cluster:"eu",useTLS:!0,authEndpoint:"http://localhost:5000/pusher/auth"}),l={getPresenceID:function(){var e,r,n,a,t=(e="id",n=r||window.location.href,(a=new RegExp("[?&]"+e+"=([^&#]*)","i").exec(n))?a[1]:null);return t="presence-"+t},subscribeToPusher:function(){var e=this.getPresenceID();return i.subscribe(e)}},u=n("VU/8")(l,null,!1,null,null,null).exports,m=[{lyric:"When he was ten his father split, full of it, debt-ridden. Two years later, see Alex and his mother bed-ridden. Half-dead sittin' in their own sick, the scent thick",options:[{name:"Aaron Burr",correct:!1},{name:"James Madison",correct:!1},{name:"John Laurens",correct:!1},{name:"Eliza Hamilton",correct:!0}],answer:"Eliza Hamilton"},{lyric:"I am sailing off to London. I’m accompanied by someone who always pays. I have found a wealthy husband. Who will keep me in comfort for all my days. He is not a lot of fun, but there’s no one",options:[{name:"Eliza",correct:!1},{name:"Peggy",correct:!1},{name:"Angelica",correct:!0},{name:"Maria",correct:!1}],answer:"Angelica"},{lyric:"Lord, show me how to. Say no to this. I don’t know how to. Say no to this",options:[{name:"Alexander Hamilton",correct:!0},{name:"Thomas Jefferson",correct:!1},{name:"John Laurens",correct:!1},{name:"James Madison",correct:!1}],answer:"Alexander Hamilton"},{lyric:"And y’all look pretty good in ya’ frocks. How ‘bout when I get back, we all strip down to our socks?",options:[{name:"Philip Hamilton",correct:!0},{name:"George Eacker",correct:!1},{name:"John Adams",correct:!1},{name:"John Adams",correct:!1}],answer:"Philip Hamilton"},{lyric:"And when you said “Hi,” I forgot my dang name",options:[{name:"Maria",correct:!1},{name:"Eliza",correct:!1},{name:"Peggy",correct:!1},{name:"Angelica",correct:!0}],answer:"Angelica"},{lyric:"Thank you for all your service",options:[{name:"Eliza",correct:!0},{name:"Maria",correct:!1},{name:"Peggy",correct:!1},{name:"Angelica",correct:!1}],answer:"Eliza"},{lyric:"And I’m never gonna stop until I make ‘em. Drop and burn ‘em up and scatter their remains, I’m",options:[{name:"Lafayette",correct:!0},{name:"Laurens",correct:!1},{name:"Eacker",correct:!1},{name:"Adams",correct:!1}],answer:"Lafayette"},{lyric:"Yeah, you know what? We can change that. You know why?",options:[{name:"Jefferson",correct:!0},{name:"Maria",correct:!1},{name:"Peggy",correct:!1},{name:"Angelica",correct:!1}],answer:"Jefferson"},{lyric:"I survived, but I paid for it",options:[{name:"Aaron Burr",correct:!0},{name:"James Madison",correct:!1},{name:"George Washington",correct:!1},{name:"King George",correct:!1}],answer:"Aaron Burr"},{lyric:"When you knock me down I get the fuck back up again!",options:[{name:"Burr",correct:!1},{name:"Lafayette",correct:!1},{name:"Mulligan",correct:!0},{name:"Laurens",correct:!1}],answer:"Mulligan"},{lyric:"Why so sad? Remember we made an arrangement when you went away.Now you’re making me mad",options:[{name:"Peggy Schuyler",correct:!1},{name:"King George",correct:!0},{name:"Eliza Hamilton",correct:!1},{name:"Angelica Schuyler",correct:!1}],answer:"King George"},{lyric:"It’s bad enough daddy wants to go to war",options:[{name:"Peggy Schuyler",correct:!0},{name:"King George",correct:!1},{name:"Angelica Schuyler",correct:!1},{name:"Eliza Hamilton",correct:!1}],answer:"Peggy Schuyler"},{lyric:"When I was given my first command. I led my men straight into a massacre",options:[{name:"John Adams",correct:!1},{name:"James Madison",correct:!1},{name:"John Laurens",correct:!1},{name:"George Washington",correct:!0}],answer:"George Washington"},{lyric:"Black and white soldiers wonder alike if this really means freedom",options:[{name:"Burr",correct:!1},{name:"Lafayette",correct:!1},{name:"Mulligan",correct:!1},{name:"Laurens",correct:!0}],answer:"Laurens"},{lyric:"We lower our guns as he frantically waves a white handkerchief",options:[{name:"Lafayette",correct:!0},{name:"Burr",correct:!1},{name:"Mulligan",correct:!1},{name:"Laurens",correct:!1}],answer:"Lafayette"},{lyric:"And so the American experiment begins. With my friends all scattered to the winds",options:[{name:"Hamilton",correct:!0},{name:"Lafayette",correct:!1},{name:"Mulligan",correct:!1},{name:"Laurens",correct:!1}],answer:"Hamilton"},{lyric:"We will fight up close, seize the moment and stay in it. It’s either that or meet the business end of a bayonet. The code word is ‘Rochambeau,’ dig me?",options:[{name:"Hamilton",correct:!0},{name:"Lafayette",correct:!1},{name:"Mulligan",correct:!1},{name:"Jefferson",correct:!1}],answer:"Hamilton"},{lyric:"An immigrant you know and love who’s unafraid to step in!",options:[{name:"Burr",correct:!0},{name:"Laurens",correct:!1},{name:"Washington",correct:!1},{name:"Mulligan",correct:!1}],answer:"Burr"},{lyric:"I’m a trust fund, baby, you can trust me!",options:[{name:"Burr",correct:!0},{name:"Lafayette",correct:!1},{name:"George",correct:!1},{name:"Laurens",correct:!1}],answer:"Burr"},{lyric:"You want a revolution? I want a revelation",options:[{name:"Angelica",correct:!0},{name:"Eliza",correct:!1},{name:"Mulligan",correct:!1},{name:"Laurens",correct:!1}],answer:"Angelica"},{lyric:"You punched the bursar",options:[{name:"Lafayette",correct:!1},{name:"Peggy",correct:!1},{name:"Laurens",correct:!1},{name:"Burr",correct:!0}],answer:"Burr"}],d={name:"home",data:function(){return{presenceid:null,hasAnswered:!1,question:null,options:null,correctanswer:null,count:null,players:1,secondplayer:!1,playerdata:{one:{id:null,score:0,userid:null},two:{id:null,score:0,userid:null}},userid:null,url:null}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;if(this.presenceid=this.getUniqueId(),!this.checkPresenceID()){var r=-1===window.location.href.indexOf("?")?"?":"&";window.location.href=window.location.href+r+this.presenceid}this.url=window.location.href,this.getNewQuestion();var n=u.subscribeToPusher();n.bind("pusher:member_added",function(r){e.players+=1,e.secondplayer=!0}),n.bind("pusher:subscription_succeeded",function(r){1!==r.count||e.playerdata.one.id?2===r.count&&(e.secondplayer=!0,e.playerdata.two.id=r.myID,e.playerdata.two.userid=2,e.userid=2):(e.playerdata.one.id=r.myID,e.playerdata.one.userid=1,e.userid=1)}),n.bind("pusher:member_removed",function(r){e.players-=1,1===r.count&&(e.secondplayer=!1)}),n.bind("client-send",function(r){1===e.userid?e.playerdata.two.score=r.data.two.score:2===e.userid&&(e.playerdata.one.score=r.data.one.score)})},getUniqueId:function(){return"id="+Math.random().toString(36).substr(2,8)},checkPresenceID:function(){var e,r,n,a;return e="id",n=r||window.location.href,(a=new RegExp("[?&]"+e+"=([^&#]*)","i").exec(n))?a[1]:null},checkAnswer:function(e){var r=this,n=u.subscribeToPusher();this.hasAnswered=!0,e.name===this.correctanswer?1===this.userid?this.playerdata.one.score+=10:2===this.userid&&(this.playerdata.two.score+=10):1===this.userid?this.playerdata.one.score=Math.max(0,this.playerdata.one.score-=10):2===this.userid&&(this.playerdata.two.score=Math.max(0,this.playerdata.two.score-=10)),n.trigger("client-send",{data:this.playerdata}),this.count=3;var a=setInterval(function(){r.count-=1,0===r.count&&(clearInterval(a),r.getNewQuestion())},1e3)},getRandomQuestions:function(e,r){var n=e.length,a=[],t=[],o=void 0,c=void 0;for(r|=1;r;)o=Math.floor(Math.random()*n),-1===a.indexOf(o)&&(r--,a.push(o));return a.forEach(function(r){c=e.slice(r,r+1).pop(),t.push(c)}),1===t.length?t.pop():t},getNewQuestion:function(){var e=this.getRandomQuestions(m,1);this.question=e,this.options=e.options,this.correctanswer=e.answer,this.hasAnswered=!1}}},h={render:function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("transition",{attrs:{name:"fade"}},[e.secondplayer?e._e():n("div",{staticClass:"home"},[n("div",{staticClass:"inner"},[n("h1",[e._v("Do you know your Hamilton Lyrics?")]),e._v(" "),n("p",[e._v("\n        Test your knowledge of Hamilton: An American Musical by guessing who\n        sang what lyric.\n      ")]),e._v(" "),n("p",[e._v("Invite a second player by sending them this link "+e._s(e.url)+".")])])]),e._v(" "),e.secondplayer?n("div",{staticClass:"play"},[n("div",[n("div",{staticClass:"container hamilton--header--text"},[n("h1",[e._v("Do you know your Hamilton Lyrics?")]),e._v(" "),n("div",{staticClass:"columns hamilton--inner"},[n("div",{staticClass:"column is-half left"},[n("p",{staticClass:"title"},[e._v("User 1")]),e._v(" "),n("p",{staticClass:"subtitle"},[e._v("Total Score: "+e._s(e.playerdata.one.score))])]),e._v(" "),e.secondplayer?n("div",{staticClass:"column is-half right"},[n("p",{staticClass:"title"},[e._v("User 2")]),e._v(" "),n("p",{staticClass:"subtitle"},[e._v("Total Score: "+e._s(e.playerdata.two.score))])]):e._e()]),e._v(" "),n("div",{staticClass:"hamilton--lyrics--text"},[n("p",[e._v(e._s(e.question.lyric))]),e._v(" "),n("div",{staticClass:"hamilton--answers"},e._l(e.options,function(r,a){return n("a",{class:{wronganswer:e.hasAnswered&&!r.correct,correctanswer:e.hasAnswered&&r.correct},on:{click:function(n){return e.checkAnswer(r)}}},[e._v(e._s(r.name))])}),0)])])])]):e._e()])},staticRenderFns:[]};var y=n("VU/8")(d,h,!1,function(e){n("V2B1")},"data-v-4b9004c6",null).exports;a.a.use(c.a);var p=new c.a({routes:[{path:"/",name:"Hello",component:y}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:o},template:"<App/>"})},RpuX:function(e,r){},V2B1:function(e,r){}},["NHnr"]);
//# sourceMappingURL=app.8d7988bd314ab2518077.js.map