webpackJsonp([0],{25:function(t,e,i){"use strict";function r(t){i(41)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(32),o=i(48),s=i(3),a=r,c=s(n.a,o.a,!1,a,"data-v-ebbb492c",null);e.default=c.exports},32:function(t,e,i){"use strict";var r=i(6),n=i(43),o=i(34),s=(i(47),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t});e.a={computed:s({},Object(r.e)({letters:function(t){return t.index.letters},brand:function(t){return t.index.brand},letter:function(t){return t.index.letter},isShow:function(t){return t.index.isShow}})),components:{MakeList:n.a},methods:s({},Object(r.b)({initState:"index/initState",getMakeList:"index/getMakeList"}),Object(r.d)({showLetter:"index/showLetter",changeLetter:"index/changeLetter"}),{touchStart:function(t){this.showLetter(!0);var e=t.target.innerHTML;console.log("letter...",e,t.target),this.letter!=e&&this.changeLetter(e)},touchMove:function(t){console.log(t.touches);var e=t.touches[0].pageY,i=Math.floor((e-this.marginTop)/this.height);if(i<0?i=0:i>this.letters.length-1&&(i=this.letters.length-1),console.log("letter...",this.letters[i]),this.letter!=this.letters[i]){var r=document.getElementById(this.letters[i]),n=r.offsetTop;document.querySelector(".wrap").scrollTop=n,this.changeLetter(this.letters[i])}},touchEnd:function(){this.showLetter(!1)},updateLazy:function(){var t,e,i,r=[],n=function(e){var i=e.getBoundingClientRect();return(i.top>=0&&i.left>=0&&i.top)<=(window.innerHeight||document.documentElement.clientHeight)+parseInt(t)},o=function(t){return t.getAttribute("src")===t.getAttribute("data-src")},s=function(){for(var t=r.length;t--;){var e=r[t];!o(e)&&n(e)&&(e.src=e.getAttribute("data-src"),r.splice(t,1))}},a=function(){console.log(123),clearTimeout(i),i=setTimeout(s,e)};!function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=document.querySelectorAll("[data-src]"),o=i||{};t=o.offset||0,e=o.throttle||250;for(var s=0;s<n.length;s++)r.push(n[s]);a();document.getElementById("list")}()}}),mounted:function(){this.initState()},updated:function(){this.height=.4*window.innerWidth/750*100,this.marginTop=(window.innerHeight-this.letters.length*this.height)/2,Object(o.a)(".wrap")}}},33:function(t,e,i){"use strict";var r=i(6),n=i(34),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.a={computed:o({},Object(r.e)({makeList:function(t){return t.index.makeList},isShowList:function(t){return t.index.isShowList}})),methods:o({},Object(r.d)({hideMakeList:"index/hideMakeList"}),{touchstart:function(t){this.offsetX=0,this.touch=t.touches[0]},touchmove:function(t){var e=t.touches[0];this.offsetX=e.pageX-this.touch.pageX,this.offsetX>0&&(this.$refs.section.style="transform:translate3d("+this.offsetX+"px, 0, 0)"),console.log("滑动距离：",this.offsetX,this.$refs.section)},touchend:function(t){this.$refs.section.style="",console.log("offsetX...",this.offsetX),this.offsetX>100&&this.hideMakeList()},goDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})}}),updated:function(){Object(n.a)(".mask")}}},34:function(t,e,i){"use strict";e.a=function(t){var e=Array.from(document.querySelectorAll("[data-src]")),i=function(t){var e=t.getBoundingClientRect();return e.top>0&&e.top<window.innerHeight+10&&e.left>0&&e.right>0},r=function(t){return t.src==t.dataset.src},n=function(){e.forEach(function(t){i(t)&&!r(t)&&(t.src=t.dataset.src)})};n(),document.querySelector(t).addEventListener("scroll",n)}},35:function(t,e,i){t.exports=i.p+"black.jpg?cbf3a5d6761aaf0db1c320b02ec11d91"},41:function(t,e,i){var r=i(42);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(5)("4dbd8ca8",r,!0,{})},42:function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,".index[data-v-ebbb492c]{height:100%}.wrap[data-v-ebbb492c]{height:100%;overflow:scroll}aside[data-v-ebbb492c]{position:fixed;top:50%;right:.1rem;transform:translateY(-50%);display:flex;flex-direction:column;align-items:center}aside span[data-v-ebbb492c]{font-size:.24rem;color:#666;font-weight:500;padding:.02rem .1rem;height:.4rem;box-sizing:border-box}ul p[data-v-ebbb492c]{font-size:.28rem;line-height:.4rem;background:#f4f4f4;padding-left:.3rem;color:#aaa}ul li[data-v-ebbb492c]{margin:0 .3rem;height:1rem;box-sizing:border-box;border-bottom:1px solid #ddd;display:flex;align-items:center}ul img[data-v-ebbb492c]{height:.8rem;width:.8rem}ul span[data-v-ebbb492c]{font-size:.32rem;margin-left:.4rem}.letter[data-v-ebbb492c]{position:fixed;top:50%;left:50%;transform:translate3d(-50%,-50%,0);width:2rem;height:2rem;background:#000;border-radius:.1rem;font-size:1rem;color:#fff;text-align:center;line-height:2rem}",""])},43:function(t,e,i){"use strict";function r(t){i(44)}var n=i(33),o=i(46),s=i(3),a=r,c=s(n.a,o.a,!1,a,"data-v-74ba882b",null);e.a=c.exports},44:function(t,e,i){var r=i(45);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(5)("259719de",r,!0,{})},45:function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,".mask[data-v-74ba882b]{position:fixed;right:0;top:0;width:72%;height:100%;overflow:scroll;background:#fff;transform:translate3d(100%,0,0);box-shadow:-3px 0 10px 0 rgba(0,0,0,.1)}.mask ul>p[data-v-74ba882b]{margin-left:1px;font-size:.28rem;line-height:.48rem;background:#f2f2f2;padding-left:.3rem;color:#717171}.mask ul[data-v-74ba882b]{margin-left:.1rem}.mask li[data-v-74ba882b]{height:1.4rem;box-sizing:border-box;border-bottom:1px solid #ddd;display:flex;align-items:center}.mask li p[data-v-74ba882b]:first-child{font-size:.34rem;color:#5f687a}.mask li p[data-v-74ba882b]:nth-child(2){margin-top:.1rem;font-size:.28rem;color:red}.mask img[data-v-74ba882b]{margin:0 .1rem 0 .2rem;width:1.8rem;height:1.2rem}.mask.active[data-v-74ba882b]{transform:translateZ(0);transition:transform .3s linear}",""])},46:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{ref:"section",class:t.isShowList?"mask active":"mask",on:{touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},t._l(t.makeList,function(e,n){return r("ul",{key:n},[r("p",[t._v(t._s(e.GroupName))]),t._v(" "),t._l(e.GroupList,function(e,n){return r("li",{key:n,on:{click:function(i){t.goDetail(e.SerialID)}}},[r("img",{attrs:{"data-src":e.Picture,src:i(35)}}),t._v(" "),r("div",[r("p",[t._v(t._s(e.AliasName))]),t._v(" "),r("p",[t._v(t._s(e.DealerPrice))])])])})],2)}))},n=[],o={render:r,staticRenderFns:n};e.a=o},47:function(t,e,i){"use strict"},48:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index"},[r("div",{staticClass:"wrap",attrs:{id:"list"}},[r("section",t._l(t.brand,function(e,n){return r("div",{key:n},[r("ul",[r("p",{attrs:{id:n}},[t._v(t._s(n))]),t._v(" "),t._l(e,function(e,n){return r("li",{key:n,on:{click:function(i){t.getMakeList(e.MasterID)}}},[r("img",{attrs:{"data-src":e.CoverPhoto,src:i(35)}}),t._v(" "),r("span",[t._v(t._s(e.Name))])])})],2)])}))]),t._v(" "),r("section",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"letter"},[r("span",[t._v(t._s(t.letter))])]),t._v(" "),r("aside",{on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},t._l(t.letters,function(e,i){return r("span",{key:i},[t._v(t._s(e))])})),t._v(" "),r("MakeList")],1)},n=[],o={render:r,staticRenderFns:n};e.a=o}});
//# sourceMappingURL=0.build.js.map