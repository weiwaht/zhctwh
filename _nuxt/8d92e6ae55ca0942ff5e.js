(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{314:function(t,e,n){"use strict";(function(t){e.a={props:{activeIndex:{type:String,default:"0"}},data:function(){return{title:t.env.WEBSIDE_NAME}}}}).call(this,n(126))},315:function(t,e,n){var content=n(318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("1abd7d6a",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";var l=n(315);n.n(l).a},318:function(t,e,n){(e=n(48)(!1)).push([t.i,"a[data-v-c9bab514]{color:#303133}.el-col-16[data-v-c9bab514]{border-bottom:1px solid #e6e6e6}.title[data-v-c9bab514]{float:left}.navigation[data-v-c9bab514]{float:right;border-bottom-style:none}.el-menu-item a[data-v-c9bab514]{display:inline-block}",""]),t.exports=e},319:function(t,e,n){"use strict";var l=n(314).a,o=(n(317),n(28)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:4}}),t._v(" "),n("el-col",{attrs:{span:16}},[n("h1",{staticClass:"title"},[n("nuxt-link",{attrs:{to:"/"},domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("el-menu",{staticClass:"navigation",attrs:{"default-active":t.activeIndex,mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"}},[n("nuxt-link",{attrs:{to:"/language"}},[t._v("语言文字")])],1),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("span",[t._v("艺术")])]),t._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[n("nuxt-link",{attrs:{to:"/visual_art"}},[t._v("视觉艺术")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[n("nuxt-link",{attrs:{to:"/music"}},[t._v("音乐和表演艺术")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[n("nuxt-link",{attrs:{to:"/architectural_art"}},[t._v("建筑艺术")])],1)],2),t._v(" "),n("el-menu-item",{attrs:{index:"3"}},[n("nuxt-link",{attrs:{to:"/literature"}},[t._v("文学")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"4"}},[n("nuxt-link",{attrs:{to:"/clothing_design"}},[t._v("服饰设计")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"5"}},[n("nuxt-link",{attrs:{to:"/eating_etiquette"}},[t._v("饮食礼仪")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"6"}},[n("nuxt-link",{attrs:{to:"/physical_education"}},[t._v("体育")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"7"}},[n("nuxt-link",{attrs:{to:"/about"}},[t._v("关于")])],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:4}})],1)}),[],!1,null,"c9bab514",null);e.a=component.exports},320:function(t,e,n){"use strict";var l={},o=n(28),component=Object(o.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("el-backtop")}),[],!1,null,null,null);e.a=component.exports},324:function(t,e,n){"use strict";(function(t){var l=n(50),o=n.n(l),r=n(0),c=n(319),d=n(320);e.a=r.default.extend({components:{Header:c.a,Backtop:d.a},data:function(){return{activeIndex:"",quotes:[],title:""}},mounted:function(){var t=this;o.a.get("/data/about.json").then((function(e){t.activeIndex=e.data.activeIndex,t.quotes=e.data.quotes,t.pics=e.data.pics,t.title=e.data.title}))},head:function(){return{title:this.title+" - "+t.env.WEBSIDE_NAME,meta:[{hid:"description",name:"description",content:"My custom description"}]}}})}).call(this,n(126))},325:function(t,e,n){var content=n(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("70892f12",content,!0,{sourceMap:!1})},337:function(t,e,n){"use strict";var l=n(325);n.n(l).a},338:function(t,e,n){(e=n(48)(!1)).push([t.i,"h1[data-v-aa569de4]{font-size:18px;line-height:1.7;border-left:5px solid #409eff;padding-left:5px}h1[data-v-aa569de4],li[data-v-aa569de4]{margin-bottom:10px}",""]),t.exports=e},343:function(t,e,n){"use strict";n.r(e);var l=n(324).a,o=(n(337),n(28)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("Header",{attrs:{"active-index":t.activeIndex}})],1),t._v(" "),n("el-main",[n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:4}}),t._v(" "),n("el-col",{attrs:{span:16}},[n("h1",[t._v("引用")]),t._v(" "),n("ul",t._l(t.quotes,(function(e){return n("li",{key:e},[n("span",{domProps:{textContent:t._s(e.title)}}),t._v("："),n("el-link",{attrs:{href:e.link,target:"_blank"},domProps:{textContent:t._s(e.link)}})],1)})),0)]),t._v(" "),n("el-col",{attrs:{span:4}})],1),t._v(" "),n("Backtop")],1)],1)}),[],!1,null,"aa569de4",null);e.default=component.exports}}]);