(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/ratings/ratings"],{1937:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("video",{directives:[{name:"show",rawName:"v-show",value:e.isPlayVideo,expression:"isPlayVideo"}],staticClass:"myVideo",attrs:{id:"myVideo",src:e.videoSrc,"show-fullscreen-btn":e.showFullscreenBtn,direction:e.videoDirection,"show-play-btn":e.showPlayBtn,eventid:"f9593aae-1"},on:{pause:e.videoPause,fullscreenchange:e.viderFullscreen}},[a("cover-image",{staticClass:"stopPlayVideoBtn",attrs:{src:"/static/img/close.png",eventid:"f9593aae-0",mpcomid:"f9593aae-0"},on:{click:e.stopPlayVideo}})],1),a("view",{staticClass:"content"},[a("view",{staticClass:"label"},e._l(e.labelList,function(t,i){return a("view",{key:t.type,class:{on:i==e.labelIndex},attrs:{eventid:"f9593aae-2-"+i},on:{tap:function(t){e.loadRatings(i)}}},[e._v(e._s(t.name)+"("+e._s(t.number)+")")])})),a("view",{staticClass:"list"},e._l(e.ratingsList,function(t,i){return a("view",{key:i,staticClass:"row"},[a("view",{staticClass:"left"},[a("view",{staticClass:"face"},[a("image",{attrs:{src:t.face}})])]),a("view",{staticClass:"right"},[a("view",{staticClass:"name-date"},[a("view",{staticClass:"username"},[e._v(e._s(t.username))]),a("view",{staticClass:"date"},[e._v(e._s(t.date))])]),a("view",{staticClass:"spec"},[e._v(e._s(t.spec))]),a("view",{staticClass:"first"},[a("view",{staticClass:"rat"},[e._v(e._s(t.first.content))]),a("view",{staticClass:"img-video"},[e._l(t.first.video,function(t,s){return a("view",{key:t.path,staticClass:"box",attrs:{eventid:"f9593aae-3-"+i+"-"+s},on:{tap:function(a){e.playVideo(t.path)}}},[a("image",{attrs:{mode:"aspectFill",src:t.img}}),e._m(0,!0)])}),e._l(t.first.img,function(s,n){return a("view",{key:s,staticClass:"box",attrs:{eventid:"f9593aae-4-"+i+"-"+n},on:{tap:function(a){e.showBigImg(s,t.first.img)}}},[a("image",{attrs:{mode:"aspectFill",src:s}})])})],2)]),t.append?a("view",{staticClass:"append"},[a("view",{staticClass:"date"},[e._v(e._s(t.append.date)+"天后追加")]),a("view",{staticClass:"rat"},[e._v(e._s(t.append.content))]),a("view",{staticClass:"img-video"},[e._l(t.append.video,function(t,s){return a("view",{key:t.path,staticClass:"box",attrs:{eventid:"f9593aae-5-"+i+"-"+s},on:{tap:function(a){e.playVideo(t.path)}}},[a("image",{attrs:{mode:"aspectFill",src:t.img}}),e._m(1,!0)])}),e._l(t.append.img,function(s,n){return a("view",{key:s,staticClass:"box",attrs:{eventid:"f9593aae-6-"+i+"-"+n},on:{tap:function(a){e.showBigImg(s,t.append.img)}}},[a("image",{attrs:{mode:"aspectFill",src:s}})])})],2)]):e._e()])])}))])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"playbtn"},[a("view",{staticClass:"icon bofang"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"playbtn"},[a("view",{staticClass:"icon bofang"})])}];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s})},"31bb":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{labelList:[{name:"全部",number:25,type:"all"},{name:"好评",number:23,type:"good"},{name:"中评",number:1,type:"secondary"},{name:"差评",number:1,type:"poor"},{name:"有图",number:12,type:"img"},{name:"视频",number:2,type:"video"},{name:"追加",number:2,type:"append"}],labelIndex:0,ratingsList:[{id:1,username:"大黑哥",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"good",first:{content:"好看，可以，不愧是专业的，才拿到手上就研究了半天才装上",img:["https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg","https://ae01.alicdn.com/kf/HTB1sL7hTjDpK1RjSZFrq6y78VXaw.jpg","https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2018-12-28/1083f3db90334f86e3fc3586b4472914.mp4"}]},append:{date:65,content:"用了一段时间，质量很好，体验很流畅，推荐购买",img:["https://ae01.alicdn.com/kf/HTB1dKZtTgHqK1RjSZFEq6AGMXXaS.jpg","https://ae01.alicdn.com/kf/HTB18h3oTmzqK1RjSZFjq6zlCFXap.jpg"],video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4"}]}},{id:2,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"secondary",first:{content:"好评，看图",img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[]}},{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"poor",first:{content:"好评，看图",img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[]}},{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"secondary",first:{content:"系统默认好评",img:[],video:[]}}],videoDirection:0,showFullscreenBtn:!0,showPlayBtn:!0,isPlayVideo:!0,videoSrc:""}},onReady:function(t){this.videoContext=e.createVideoContext("myVideo")},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onReachBottom:function(){e.showToast({title:"触发上拉加载"})},methods:{loadRatings:function(t){this.labelIndex=t,e.showToast({title:"切换评论列表"})},playVideo:function(e){this.videoSrc=e,this.$nextTick(function(){this.videoContext.requestFullScreen({direction:0})})},stopPlayVideo:function(){this.videoContext.pause()},videoPause:function(){this.videoSrc=""},viderFullscreen:function(e){e.detail.fullScreen?this.videoContext.play():this.stopPlayVideo()},showBigImg:function(t,a){e.previewImage({current:t,urls:a})}}};t.default=a}).call(this,a("543d")["default"])},"57fe":function(e,t,a){"use strict";var i=a("cbbe"),s=a.n(i);s.a},7451:function(e,t,a){"use strict";a.r(t);var i=a("31bb"),s=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);t["default"]=s.a},9927:function(e,t,a){"use strict";a.r(t);var i=a("1937"),s=a("7451");for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);a("57fe");var c=a("2877"),o=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,null,null);t["default"]=o.exports},cbbe:function(e,t,a){},d35c:function(e,t,a){"use strict";a("6123");var i=n(a("b0ce")),s=n(a("9927"));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(s.default))}},[["d35c","common/runtime","common/vendor"]]]);